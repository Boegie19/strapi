import type { Core } from '@strapi/types';
import { cloneDeep } from 'lodash/fp';
import stageFactory from '../review-workflows/stages';
import { STAGE_MODEL_UID } from '../../constants/workflows';

const stageMock = {
  id: 1,
  name: 'test',
  workflow: 1,
};

const relatedUID = 'uid';
const workflowMock = {
  id: 1,
  stages: [
    stageMock,
    { id: 2, name: 'in progress', workflow: 1 },
    {
      id: 3,
      name: 'ready to review',
      related: [{ id: 3, __type: relatedUID }],
      workflow: 1,
    },
    {
      id: 4,
      name: 'done',
      related: [
        { id: 1, __type: relatedUID },
        { id: 2, __type: relatedUID },
      ],
      workflow: 1,
    },
  ],
};

const dbMock = {
  findOne: jest.fn((id) => workflowMock.stages.find((stage) => stage.id === id) || { id }),
  findMany: jest.fn(() => [stageMock]),
  create: jest.fn(({ data }) => ({
    ...data,
    id: data?.id || Math.floor(Math.random() * 1000),
  })),
  update: jest.fn(({ data }) => data),
  delete: jest.fn(() => true),
};

const servicesMock: Record<string, any> = {
  'admin::workflows': {
    findById: jest.fn(() => workflowMock),
    update: jest.fn((id, data) => data),
  },
  'admin::review-workflows-metrics': {
    sendDidCreateStage: jest.fn(),
    sendDidEditStage: jest.fn(),
    sendDidDeleteStage: jest.fn(),
    sendDidChangeEntryStage: jest.fn(),
  },
  'admin::review-workflows-validation': {
    register: jest.fn(),
    validateWorkflowCount: jest.fn().mockResolvedValue(true),
    validateWorkflowStages: jest.fn(),
  },
  'admin::stage-permissions': {
    register: jest.fn(),
    registerMany: jest.fn(),
    unregister: jest.fn(),
    can: jest.fn(() => true),
  },
};

const queryUpdateMock = jest.fn(() => Promise.resolve());

const strapiMock = {
  EE: true,
  ee: {
    features: {
      isEnabled() {
        return true;
      },
      getEnabled() {
        return ['review-workflows'];
      },
    },
  },
  query: jest.fn(() => ({
    findOne: jest.fn(() => workflowMock),
  })),
  service: jest.fn((serviceName) => {
    return servicesMock[serviceName];
  }),
  db: {
    transaction: jest.fn((func) => func({})),
    query: jest.fn(() => ({
      ...dbMock,
      updateMany: queryUpdateMock,
    })),
    metadata: {
      get: () => ({
        tableName: 'test',
        attributes: {
          strapi_stage: {
            joinColumn: {
              name: 'strapi_stage_id',
            },
          },
        },
      }),
    },
  },
  contentTypes: {
    'api::shop.shop': {
      kind: 'collectionType',
      collectionName: 'shop',
      options: {
        reviewWorkflows: true,
      },
    },
  },
} as unknown as Core.Strapi;

const stagesService = stageFactory({ strapi: strapiMock });

describe('Review workflows - Stages service', () => {
  let mockUpdateEntitiesStage: any;
  beforeEach(() => {
    mockUpdateEntitiesStage = jest
      .spyOn(stagesService, 'updateEntitiesStage')
      // @ts-expect-error -  spyOn does have a mockImplementation method
      .mockImplementation(() => {
        return Promise.resolve();
      });
  });

  afterEach(() => {
    jest.clearAllMocks();
    mockUpdateEntitiesStage.mockRestore();
  });

  describe('find', () => {
    test('Should call db with the right ID', async () => {
      stagesService.find({ workflowId: 1 });

      expect(dbMock.findOne).not.toBeCalled();
      expect(dbMock.findMany).toBeCalled();
      expect(dbMock.findMany).toBeCalledWith({
        where: { workflow: 1 },
      });
    });
  });
  describe('findById', () => {
    test('Should call db with the right ID', async () => {
      stagesService.findById(1, { workflowId: 1 });

      expect(dbMock.findMany).not.toBeCalled();
      expect(dbMock.findOne).toBeCalled();
      expect(dbMock.findOne).toBeCalledWith({ where: { id: 1 } });
    });
  });
  describe('replaceStages', () => {
    test('Should create a new stage and assign it to workflow', async () => {
      await stagesService.replaceStages(
        [...workflowMock.stages],
        [...workflowMock.stages, { name: 'to publish' }]
      );

      expect(dbMock.create).toBeCalled();
      expect(dbMock.update).not.toBeCalled();
      expect(dbMock.delete).not.toBeCalled();
    });
    test('Should update a stage contained in the workflow', async () => {
      const updateStages = cloneDeep(workflowMock.stages);
      updateStages[0].name = `${updateStages[0].name}(new value)`;

      await stagesService.replaceStages(workflowMock.stages, updateStages);

      expect(dbMock.create).not.toBeCalled();
      expect(dbMock.update).toBeCalled();
      expect(dbMock.delete).not.toBeCalled();
    });
    test('Should delete a stage contained in the workflow', async () => {
      const selectedIndexes = [0, 2, 3];
      await stagesService.replaceStages(
        workflowMock.stages,
        selectedIndexes.map((index) => workflowMock.stages[index])
      );

      expect(dbMock.create).not.toBeCalled();
      expect(dbMock.update).not.toBeCalled();
      expect(dbMock.delete).toBeCalled();
    });

    // TODO: Fix when the updateEntitiesStage method is implemented
    test.skip('Should move entities in a deleted stage to the previous stage', async () => {
      await stagesService.replaceStages(workflowMock.stages, workflowMock.stages.slice(0, 3));

      expect(dbMock.create).not.toBeCalled();
      expect(dbMock.delete).toBeCalled();

      // Here we are only deleting the stage containing related IDs 1 & 2
      expect(stagesService.updateEntitiesStage).toHaveBeenCalledWith('api::shop.shop', {
        fromStageId: workflowMock.stages[3].id,
        toStageId: workflowMock.stages[2].id,
      });
    });

    test.skip('When deleting all stages, all entities should be moved to the new stage', async () => {
      const newStageID = 10;
      await stagesService.replaceStages(workflowMock.stages, [
        { id: newStageID, name: 'newStage', workflow: 1 },
      ]);

      expect(servicesMock['admin::workflows'].findById).toBeCalled();
      expect(dbMock.create).toBeCalled();
      expect(dbMock.delete).toBeCalled();

      // Here we are deleting all stages and expecting all entities to be moved to the new stage
      for (const stage of workflowMock.stages) {
        expect(stagesService.updateEntitiesStage).toHaveBeenCalledWith('api::shop.shop', {
          fromStageId: stage.id,
          toStageId: newStageID,
        });
      }

      expect(servicesMock['admin::workflows'].update).toBeCalled();
      expect(servicesMock['admin::workflows'].update).toBeCalledWith(workflowMock.id, {
        stages: [newStageID],
      });

      mockUpdateEntitiesStage.mockRestore();
    });

    test('New stage + updated + deleted', async () => {
      await stagesService.replaceStages(workflowMock.stages, [
        workflowMock.stages[0],
        { id: workflowMock.stages[1].id, name: 'new_name' },
        { name: 'new stage' },
        { name: 'new stage2' },
      ]);

      expect(dbMock.create).toBeCalled();
      expect(dbMock.update).toBeCalled();
      expect(dbMock.delete).toBeCalled();
    });

    test('Undefined destination stage permissions should apply a partial permission update', async () => {
      const srcStages = workflowMock.stages.map((stage) => ({
        ...stage,
        permissions: [{ id: 1, role: 'role', action: 'action' }],
      }));

      const destStages = workflowMock.stages.map((stage, index) => ({
        ...stage,
        name: `Updated Name ${index}`,
      }));

      await stagesService.replaceStages(srcStages, destStages);

      expect(dbMock.create).not.toBeCalled();
      expect(dbMock.delete).not.toBeCalled();
      expect(dbMock.update).toBeCalledTimes(4);

      destStages.forEach((stage, index) => {
        expect(dbMock.update).toBeCalledWith({
          where: { id: stage.id },
          data: { ...stage, permissions: srcStages[index].permissions },
        });
      });
    });
  });
});
