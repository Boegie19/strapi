"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3198],{4906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(3117),o=(n(7294),n(3905));const i={title:"Relations",slug:"/content-manager/relations",description:"Conceptual guide to relations in the Content Manager focussing on the technical decisions taken.",tags:["content-manager","relations","redux-store"]},r=void 0,l={unversionedId:"core/content-manager/relations",id:"core/content-manager/relations",title:"Relations",description:"Conceptual guide to relations in the Content Manager focussing on the technical decisions taken.",source:"@site/docs/core/content-manager/relations.mdx",sourceDirName:"core/content-manager",slug:"/content-manager/relations",permalink:"/content-manager/relations",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/core/content-manager/relations.mdx",tags:[{label:"content-manager",permalink:"/tags/content-manager"},{label:"relations",permalink:"/tags/relations"},{label:"redux-store",permalink:"/tags/redux-store"}],version:"current",frontMatter:{title:"Relations",slug:"/content-manager/relations",description:"Conceptual guide to relations in the Content Manager focussing on the technical decisions taken.",tags:["content-manager","relations","redux-store"]},sidebar:"docs",previous:{title:"useDragAndDrop",permalink:"/content-manager/hooks/use-drag-and-drop"},next:{title:"Introduction",permalink:"/core/content-type-builder/intro"}},s={},d=[{value:"Summary",id:"summary",level:2},{value:"Data management in frontend",id:"data-management-in-frontend",level:2},{value:"Preparing relation fields in the store",id:"preparing-relation-fields-in-the-store",level:3},{value:"Handling updates to relation fields",id:"handling-updates-to-relation-fields",level:3},{value:"Cleaning data to be posted to the API",id:"cleaning-data-to-be-posted-to-the-api",level:3},{value:"Frontend component architecture",id:"frontend-component-architecture",level:2},{value:"<code>RelationInputDataManager</code>",id:"relationinputdatamanager",level:3},{value:"<code>RelationInput</code>",id:"relationinput",level:3},{value:"useRelation() hook",id:"userelation-hook",level:2},{value:"<code>Options</code>",id:"options",level:3},{value:"Return values",id:"return-values",level:3},{value:"<code>relations</code>",id:"relations",level:4},{value:"<code>search</code>",id:"search",level:4},{value:"<code>searchFor(string)</code>",id:"searchforstring",level:4}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Relations are a term used to describe how two or more entities are connected. Previously in the sidebar of an entity,\nin Nov2020 we released a refactor that moved these fields into the main editing flow for a better editor experience\nand to improve performance of the CMS application when many relations were used."),(0,o.kt)("img",{src:"/img/content-manager/relations/component-example.png",alt:"An example of the relations input in the CMS edit view"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"above: An example of the relations input in the CMS edit view")),(0,o.kt)("h2",{id:"data-management-in-frontend"},"Data management in frontend"),(0,o.kt)("img",{src:"/img/content-manager/relations/relations-statemanagemen-diagram.png",alt:"a diagram overview explaining how state management works in relations"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"above: A high-level diagram of how relations state management works")),(0,o.kt)("h3",{id:"preparing-relation-fields-in-the-store"},"Preparing relation fields in the store"),(0,o.kt)("p",null,"When you first open an existing entity, we call the admin API and put the data into the store to pre-populate fields\nwith existing values. However, its important to know when you have fields with ",(0,o.kt)("inlineCode",{parentName:"p"},"type === 'relation'")," in your schema\nthat the data you receive will not be an array, but rather an object with the count of how many relations in that\nfield exist. For example, a section of the response may look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "my_relations": {\n    "count": 6\n  }\n}\n')),(0,o.kt)("p",null,"So without intervention, your inputs would try to append new relations to the ",(0,o.kt)("inlineCode",{parentName:"p"},"my_relations")," object, which would not\nwork. Instead of this, before calling the redux action ",(0,o.kt)("inlineCode",{parentName:"p"},"INIT_FORM")," we recursively find the paths fields based on the\nfollowing conditions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The field is a relation"),(0,o.kt)("li",{parentName:"ul"},"The field is a component"),(0,o.kt)("li",{parentName:"ul"},"The field is a repeatable component"),(0,o.kt)("li",{parentName:"ul"},"The field is a dynamic zone")),(0,o.kt)("p",null,"These paths ",(0,o.kt)("em",{parentName:"p"},"do not")," take into account index values. So if you have a repetable component field where the schema looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "repeatable_single_component_relation": {\n    "type": "component",\n    "repeatable": true,\n    "component": "basic.relation"\n  }\n}\n')),(0,o.kt)("p",null,"and the components looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "basic.relation": {\n    "attributes": {\n      "id": {\n        "type": "integer"\n      },\n      "categories": {\n        "type": "relation",\n        "relation": "oneToMany",\n        "target": "api::category.category",\n        "targetModel": "api::category.category",\n        "relationType": "oneToMany"\n      },\n      "my_name": {\n        "type": "string"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Then the path to the relation field would be ",(0,o.kt)("inlineCode",{parentName:"p"},"repeatable_single_component_relation.categories"),". Even though when\nrelations are added the path to the field in the redux store would be ",(0,o.kt)("inlineCode",{parentName:"p"},"repeatable_single_component_relation.0.categories"),"."),(0,o.kt)("p",null,"Inside the reducer we reduce the array of ",(0,o.kt)("inlineCode",{parentName:"p"},"relationalFieldPaths")," to an object with the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialValues")," clone as\nas the base. If there is ",(0,o.kt)("inlineCode",{parentName:"p"},"modifiedData")," in the browser i.e. you've made changes to the entity and saved those changes,\nwe just replace the first level of the field with the ",(0,o.kt)("inlineCode",{parentName:"p"},"modifiedData")," so the data structure is preserved and we're not\nloosing the relations we had already loaded in the component. If the first part of the path is highlighted as the\n",(0,o.kt)("inlineCode",{parentName:"p"},"relationalField")," then we simply replace that intial object with an empty array."),(0,o.kt)("p",null,"However, if the first part of the path is either a repeatable component, a dynamic zone or a regular component then we\nrecursively find the relation fields and replace the object with an array. This is handled by the ",(0,o.kt)("inlineCode",{parentName:"p"},"findLeafByPathAndReplace"),"\nutility function. This function in short, takes an end path (in this case the relational field) and a primitive to replace\nwhen it finds the endpath (an empty array in this case). It then recursively reduces the paths to the relational field mapping\nthrough arrays if necessary (in the instance of repetable components for example) replacing the endpath with the primitive."),(0,o.kt)("p",null,"When this is done, we have sucessfully prepared our initial data for usage with relations."),(0,o.kt)("h3",{id:"handling-updates-to-relation-fields"},"Handling updates to relation fields"),(0,o.kt)("p",null,"Because we've prepared the fields prior to the component loading, adding & removing relations, it's relatively easy to do so.\nWhen a relation is added, we simply push the new relation to the array of relations. When a relation is removed, we simply\nfilter out the relation from the array of relations. This is handled inside the reducer actions ",(0,o.kt)("inlineCode",{parentName:"p"},"CONNECT_RELATION")," &\n",(0,o.kt)("inlineCode",{parentName:"p"},"DISCONNECT_RELATION")," respectively."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Connecting relations adds the item to the end of the list, whilst loading more relations prepends to\nthe beginning of the list. This is the expected behaviour, to keep the order of the list in the UI in sync with the API response.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RelationInput")," component takes the field in ",(0,o.kt)("inlineCode",{parentName:"p"},"modifiedData")," as its source of truth. You could therefore consider this to\nbe the ",(0,o.kt)("inlineCode",{parentName:"p"},"browserState")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"initialData")," to be the ",(0,o.kt)("inlineCode",{parentName:"p"},"serverState"),". When relations are loaded they're added to both the ",(0,o.kt)("inlineCode",{parentName:"p"},"intialData"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"modifiedData")," objects, but when you connect/disconnect only the ",(0,o.kt)("inlineCode",{parentName:"p"},"modifiedData")," is updated. This is useful when we're preparing\ndata for the api."),(0,o.kt)("h3",{id:"cleaning-data-to-be-posted-to-the-api"},"Cleaning data to be posted to the API"),(0,o.kt)("p",null,"The API to update the entity expects relations to be categorised into two groups, a ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," array and ",(0,o.kt)("inlineCode",{parentName:"p"},"disconnect")," array.\nYou could do this as the user interacts with the input but we found this to be confusing and then involved us managing three\ndifferent arrays which makes the code more complex. Instead, because the browser doesn't really care about whats new and removed\nand we have a copy of the slice of data we're mutating from the server we can run a small diff algorithm to determine which\nrelations have been connected and which have been disconnected. Returning an object like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "my_relations": {\n    "connect": [{ "id": 1 }, { "id": 2 }],\n    "disconnect": []\n  }\n}\n')),(0,o.kt)("h2",{id:"frontend-component-architecture"},"Frontend component architecture"),(0,o.kt)("p",null,"The input field for relation fields consist of two components:"),(0,o.kt)("h3",{id:"relationinputdatamanager"},(0,o.kt)("inlineCode",{parentName:"h3"},"RelationInputDataManager")),(0,o.kt)("p",null,"This container component handles data fetching and data normalization for the ",(0,o.kt)("inlineCode",{parentName:"p"},"RelationInput")," component. This has been extracted from\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"RelationInput")," so that Strapi is able to move the underlying component into the design-system if the community would need it\n(most other input components can be consumed from there)."),(0,o.kt)("h3",{id:"relationinput"},(0,o.kt)("inlineCode",{parentName:"h3"},"RelationInput")),(0,o.kt)("p",null,"This component is the presentational counterpart to the ",(0,o.kt)("inlineCode",{parentName:"p"},"RelationInputDataManager")," component. It renders an input field based on the data passed from the data manager."),(0,o.kt)("p",null,"Under the hood it is using ",(0,o.kt)("inlineCode",{parentName:"p"},"react-window")," to render a list of relations in a virtualized view. Some fields need to render thousands of relations, which\nwould otherwise have a negative impact on the overall performance of the content-manager."),(0,o.kt)("h2",{id:"userelation-hook"},"useRelation() hook"),(0,o.kt)("p",null,"This hook takes care of data-fetching and normalizes results relations aswell as search-results."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { relations: RelationResults, search: RelationResults, searchFor } = useRelation(reactQueryCacheKey: Array<string | object>, options: Options);\n")),(0,o.kt)("h3",{id:"options"},(0,o.kt)("inlineCode",{parentName:"h3"},"Options")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"option"),"s is a mandatory configuration and should implement the following shape:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type Options = {\n  name: string; // name of the relation field\n  relation: RelationConfiguration;\n  search: SearchConfiguration;\n}\n\ntype RelationConfiguration = {\n  endpoint: string;   // URL from where existing relations should be fetched\n  enabled: boolean;   // defines whether relations should be fetched once the hook is called\n  pageParams: object; // additional query params which will be appended to `endpoint`\n  onLoad: (results: RelationResult[]) => void;  // callback that will be fired after relations have been fetched (paginated)\n  normalizeArguments = {\n    mainFieldName: string;  // name of the target model main field, determining which field to display (fallback: id)\n    shouldAddLink: boolean; // if the user is allowed to read the target model, the returned relations should include a link to the target\n    targetModel: object;    // target content-type model\n  };\n  pageGoal: number; // the current page-count of the already loaded relations used to keep the redux store and query cache in sync.\n}\n\ntype SearchConfiguration = {\n  endpoint: string;   // URL from where new relations should be fetched\n  pageParams: object; // additional query params which will be appended to `endpoint`\n}\n")),(0,o.kt)("h3",{id:"return-values"},"Return values"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"relations")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"search")," both return a consistent relation format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type RelationResults = RelationResult[];\n\ntype RelationResult = {\n  id: number;\n  href?: string; // based on `shouldAddLink` and the `targetModel`\n  publicationState: 'draft' | 'published';\n  mainField: string; // will fallback to \"id\" if not set\n};\n")),(0,o.kt)("h4",{id:"relations"},(0,o.kt)("inlineCode",{parentName:"h4"},"relations")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"relations")," refers to a ",(0,o.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/guides/infinite-queries"},"inifinite-query return type")," from react-query. It exposes paginated relational data\naswell as methods to check if there are more pages or fetch more paginated results. Relations for a given field are fetched as soon as the hook is called."),(0,o.kt)("h4",{id:"search"},(0,o.kt)("inlineCode",{parentName:"h4"},"search")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"search")," refers to a ",(0,o.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/guides/infinite-queries"},"inifinite-query return type")," from react-query. It exposes paginated search results\nfor a relational field. Search results are only fetched after ",(0,o.kt)("inlineCode",{parentName:"p"},"searchFor()")," has been called."),(0,o.kt)("h4",{id:"searchforstring"},(0,o.kt)("inlineCode",{parentName:"h4"},"searchFor(string)")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"searchFor")," is a method which can be used to search for entities which haven't been connected with the source entity yet. The method accepts a search-term: ",(0,o.kt)("inlineCode",{parentName:"p"},'searchFor("term")'),"."))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(n),u=o,m=h["".concat(s,".").concat(u)]||h[u]||c[u]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);