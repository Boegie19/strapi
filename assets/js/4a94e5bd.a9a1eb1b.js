"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3710],{3504:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(3117),i=(n(7294),n(3905));const r=n.p+"assets/images/rbac-edit-page-e02c95f3d0e6fddb85782ebfe5610f7c.png",l={title:"How Permissions Work",tags:["permissions","RBAC"]},o=void 0,p={unversionedId:"docs/core/admin/permissions/how-they-work",id:"docs/core/admin/permissions/how-they-work",title:"How Permissions Work",description:"Overview",source:"@site/docs/docs/01-core/admin/02-permissions/01-how-they-work.mdx",sourceDirName:"docs/01-core/admin/02-permissions",slug:"/docs/core/admin/permissions/how-they-work",permalink:"/docs/core/admin/permissions/how-they-work",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/admin/02-permissions/01-how-they-work.mdx",tags:[{label:"permissions",permalink:"/tags/permissions"},{label:"RBAC",permalink:"/tags/rbac"}],version:"current",sidebarPosition:1,frontMatter:{title:"How Permissions Work",tags:["permissions","RBAC"]},sidebar:"docs",previous:{title:"Introduction",permalink:"/permissions"},next:{title:"Fetching Permissions",permalink:"/docs/core/admin/permissions/frontend/fetching-permissions"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"Actions",id:"actions",level:2},{value:"Action definition",id:"action-definition",level:3},{value:"Register an action",id:"register-an-action",level:3},{value:"Conditions",id:"conditions",level:2},{value:"Condition definition",id:"condition-definition",level:3},{value:"Registering a condition",id:"registering-a-condition",level:3},{value:"Permissions",id:"permissions",level:2},{value:"Permission definition",id:"permission-definition",level:3}],m={toc:s};function c(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The RBAC permission system relies under the hood on the ",(0,i.kt)("a",{parentName:"p",href:"https://casl.js.org"},"CASL")," library."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"permission")," is the combination of an ",(0,i.kt)("inlineCode",{parentName:"p"},"action"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"subject"),", some ",(0,i.kt)("inlineCode",{parentName:"p"},"properties")," and some ",(0,i.kt)("inlineCode",{parentName:"p"},"conditions"),".\nThe logic is that: a user can perform an ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," on a ",(0,i.kt)("inlineCode",{parentName:"p"},"subject")," and some of its ",(0,i.kt)("inlineCode",{parentName:"p"},"properties")," only if it its role has the ",(0,i.kt)("inlineCode",{parentName:"p"},"permission")," and if the ",(0,i.kt)("inlineCode",{parentName:"p"},"conditions")," associated to the permission pass.\nThe creation and edition of permissions is done through the ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:1337/admin/settings/roles/2"},"edit page")," of a role by checking or unchecking checkboxes."),(0,i.kt)("p",null,"Example 1: the action ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," can be applied on the subject ",(0,i.kt)("inlineCode",{parentName:"p"},"article")," and property ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),", this result is the permission to update the title of an article."),(0,i.kt)("p",null,"Example 2: the condition ",(0,i.kt)("inlineCode",{parentName:"p"},"isCreator")," added to the previous permission will ensure that only the creator of the article can update the title."),(0,i.kt)("p",null,"Example 3: the action ",(0,i.kt)("inlineCode",{parentName:"p"},"access the Marketplace page")," has no subject to apply on. The permission only contains the action ",(0,i.kt)("inlineCode",{parentName:"p"},"admin::marketplace.read"),"."),(0,i.kt)("p",null,"The permissions are attached to a role. Each role can have different permissions independentely. There is no inheritance system.\nTo check if an action can be performed by a user, frontend and backend simply retrieve the list of the permissions associated with the user's roles and check if it contains the permission associated with the action about to be performed. The backend also runs the associated conditions."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If a user has several role, the user will be allowed to perform an action if at least one of its roles is allowed to perform it.")),(0,i.kt)("h2",{id:"actions"},"Actions"),(0,i.kt)("h3",{id:"action-definition"},"Action definition"),(0,i.kt)("p",null,"An action contains the following information:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"key"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default value"),(0,i.kt)("th",{parentName:"tr",align:null},"example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"uid")),(0,i.kt)("td",{parentName:"tr",align:null},"An id that has to be unique within the plugin."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'audit-logs.read'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"pluginName")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the plugin registrering the action."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'api'")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'admin'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"section")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the section among ",(0,i.kt)("inlineCode",{parentName:"td"},"contentTypes"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"plugins")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"settings"),". It will define in which permission tab the action will appear"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'settings'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"category")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the category. It will define in which category the action will appear. ",(0,i.kt)("em",{parentName:"td"},"Only for the plugins and settings section"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'audit logs'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"subCategory")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the subcategory. It will define in which subcategory or the category the action will appear. ",(0,i.kt)("em",{parentName:"td"},"Only for the plugins and settings section"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'options'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"displayName")),(0,i.kt)("td",{parentName:"tr",align:null},"Human name of the action."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'Read'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"subjects")),(0,i.kt)("td",{parentName:"tr",align:null},"List of subjects the action can be applied to. ",(0,i.kt)("em",{parentName:"td"},"Only for the contentTypes section"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"['api::article.article']"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:null},"Option object"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{}")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"options.applyToProperties")),(0,i.kt)("td",{parentName:"tr",align:null},"List of properties the action can be applied to. ",(0,i.kt)("em",{parentName:"td"},"Only for the contentTypes section"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"['fields', 'locale']"))))),(0,i.kt)("figure",null,(0,i.kt)("img",{src:r,alt:"Screenshot of the RBAC edit page showing the where are located the section, category, subcategory and display name"}),(0,i.kt)("figcaption",null,"Screenshot of the RBAC edit page showing the where are located the section, category, subcategory and display name")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"uid")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pluginName")," are used to create a global unique id."),(0,i.kt)("p",{parentName:"admonition"},"Examples: ",(0,i.kt)("inlineCode",{parentName:"p"},"admin::audit-logs.read"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin::content-manager.explorer.create"))),(0,i.kt)("h3",{id:"register-an-action"},"Register an action"),(0,i.kt)("p",null,"An action can be registered in the backend during the ",(0,i.kt)("inlineCode",{parentName:"p"},"bootstrap")," phase of the app."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// bootstrap.ts\nmodule.exports = async () => {\n  const actions = [\n    {\n      uid: 'provider-login.read',\n      displayName: 'Read',\n      pluginName: 'admin',\n      section: 'settings',\n      category: 'single sign on',\n      subCategory: 'options',\n    },\n  ];\n  await strapi.admin.services.permission.actionProvider.registerMany(actions);\n};\n")),(0,i.kt)("h2",{id:"conditions"},"Conditions"),(0,i.kt)("h3",{id:"condition-definition"},"Condition definition"),(0,i.kt)("p",null,"A condition contains the following information:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"key"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"),(0,i.kt)("th",{parentName:"tr",align:null},"example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"displayName")),(0,i.kt)("td",{parentName:"tr",align:null},"The condition name as shown in the admin panel"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'Is creator'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},"A name that has to be unique within the plugin"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'is-creator'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"plugin")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the plugin that register the condition"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'api'")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'admin'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"category")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the category. Conditions can be grouped into categories available in the admin panel"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'Default'")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'admin'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"handler")),(0,i.kt)("td",{parentName:"tr",align:null},"A function used to verify the condition (see ",(0,i.kt)("a",{parentName:"td",href:"https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/optional/rbac.html#using-the-condition-handler"},"docs.strapi.io"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'admin'"))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Currently the user can choose to apply a condition on any action. There is no way to define a list of actions on which the condition can be applied to. This is why it is possible to set the condition ",(0,i.kt)("inlineCode",{parentName:"p"},"isCreator")," on a the action ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin::content-manager.explorer.create")," even if it doesn't make sense.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin")," are used to create a global unique id."),(0,i.kt)("p",{parentName:"admonition"},"Examples: ",(0,i.kt)("inlineCode",{parentName:"p"},"admin::is-creator"))),(0,i.kt)("h3",{id:"registering-a-condition"},"Registering a condition"),(0,i.kt)("p",null,"A condition can be registered in the backend during the ",(0,i.kt)("inlineCode",{parentName:"p"},"bootstrap")," phase of the app."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// bootstrap.ts\nmodule.exports = async () => {\n  const conditions = [\n    {\n      displayName: 'Is creator',\n      name: 'is-creator',\n      plugin: 'admin',\n      handler: (user) => ({ 'createdBy.id': user.id }),\n    },\n  ];\n  await strapi.admin.services.permission.conditionProvider.registerMany(conditions);\n};\n")),(0,i.kt)("p",null,"More information on how the handler works ",(0,i.kt)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/optional/rbac.html#using-the-condition-handler"},"here"),"."),(0,i.kt)("h2",{id:"permissions"},"Permissions"),(0,i.kt)("h3",{id:"permission-definition"},"Permission definition"),(0,i.kt)("p",null,"The permissions are modified in the admin panel (on the ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:1337/admin/settings/roles/2"},"edit page")," of a role) and stored in the database with the following information:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"key"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"action")),(0,i.kt)("td",{parentName:"tr",align:null},"Id of the action that will be permitted."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'plugin::content-manager.explorer.update'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"subject")),(0,i.kt)("td",{parentName:"tr",align:null},"Id of the subject on which the action will be permitted."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'api::article.article'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"properties")),(0,i.kt)("td",{parentName:"tr",align:null},"List of the properties of the subject on wich the action will be permitted"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{ fields: ['title', 'description'], locales: ['en', 'fr'] }"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"conditions")),(0,i.kt)("td",{parentName:"tr",align:null},"List of the conditions that will be ran against an entry to determine whether the action on this entry is permitted or not"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"['admin::is-creator']"))))),(0,i.kt)("p",null,"A permission contains all needed information for the backend and the frontend to prevent users to perform non-permitted action."))}c.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>u});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=d(n),u=i,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(k,l(l({ref:e},s),{},{components:n})):a.createElement(k,l({ref:e},s))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);