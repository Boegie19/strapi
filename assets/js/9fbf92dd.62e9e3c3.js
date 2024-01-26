"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4998],{4285:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);function a(e){let{children:t}=e;return r.createElement("span",{style:{color:"#017501"}},"<",t,">")}},1659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(3117),a=(n(7294),n(3905)),i=n(4285);const o={title:"Container",slug:"/api/container",tags:["module","public"],toc_min_heading_level:2,toc_max_heading_level:5},l="Container",c={unversionedId:"api/container",id:"api/container",title:"Container",description:"Current state: Stable",source:"@site/docs/api/container.mdx",sourceDirName:"api",slug:"/api/container",permalink:"/api/container",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/api/container.mdx",tags:[{label:"module",permalink:"/tags/module"},{label:"public",permalink:"/tags/public"}],version:"current",frontMatter:{title:"Container",slug:"/api/container",tags:["module","public"],toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"api",previous:{title:"API (WIP)",permalink:"/api/API"},next:{title:"Cron Service",permalink:"/api/Cron"}},p={},s=[{value:"Module: container",id:"module-container",level:2},{value:"<code>createContainer(strapi)</code>",id:"createcontainerstrapi",level:3},{value:"<code>container.register(name, resolver)</code>",id:"containerregistername-resolver",level:3},{value:"<code>container.get(name, args)</code>",id:"containergetname-args",level:3},{value:"<code>container.extend()</code>",id:"containerextend",level:3}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"container"},"Container"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Current state: ",(0,a.kt)("strong",{parentName:"p"},"Stable"))),(0,a.kt)("p",null,"The container module permits to generate containers."),(0,a.kt)("h2",{id:"module-container"},"Module: container"),(0,a.kt)("h3",{id:"createcontainerstrapi"},(0,a.kt)("inlineCode",{parentName:"h3"},"createContainer(strapi)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"strapi"),": ",(0,a.kt)(i.Z,{mdxType:"Type"},"Strapi")," ",(0,a.kt)("a",{parentName:"li",href:"/api/Strapi"},"See Strapi class documentation")),(0,a.kt)("li",{parentName:"ul"},"Returns: ",(0,a.kt)(i.Z,{mdxType:"Type"},"Container"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const container = createContainer(strapi);\n\ncontainer.register('config', {\n  get: (configName) => {},\n  set: (configName, value) => {},\n});\n\nconst dbConfig = container.get('config').get('database');\n")),(0,a.kt)("h3",{id:"containerregistername-resolver"},(0,a.kt)("inlineCode",{parentName:"h3"},"container.register(name, resolver)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,a.kt)(i.Z,{mdxType:"Type"},"String")," UID of the content"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resolver"),": ",(0,a.kt)(i.Z,{mdxType:"Type"},"Function")," | ",(0,a.kt)(i.Z,{mdxType:"Type"},"Any"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"As a function, the function will be executed when the first get method is called on this content. The result of this function will define the content of this UID."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resolver(context, args)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"context"),": ",(0,a.kt)(i.Z,{mdxType:"Type"},"{ Strapi }")," ",(0,a.kt)("a",{parentName:"li",href:"/api/Strapi"},"See Strapi class documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"args"),": ",(0,a.kt)(i.Z,{mdxType:"Type"},"Any")," Anything to be used by the resolver function"))),(0,a.kt)("li",{parentName:"ul"},"As anything else, this value will be resolved when getting this specified content through its UID.")))),(0,a.kt)("p",null,"Register a new content to be accessed inside the container. If the name is already used, it will throw an error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const container = createContainer(strapi);\n\ncontainer.register('config', ({ strapi }, args) => {});\n// or\ncontainer.register('services', {});\n")),(0,a.kt)("h3",{id:"containergetname-args"},(0,a.kt)("inlineCode",{parentName:"h3"},"container.get(name, args)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,a.kt)(i.Z,{mdxType:"Type"},"String")," UID of the content"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"args"),": ",(0,a.kt)(i.Z,{mdxType:"Type"},"Any")," Value that will be passed to the resolver (if function)")),(0,a.kt)("p",null,"Get the value stored for a specific ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const container = createContainer(strapi);\n\ncontainer.register('config', { db: 'sqlite' });\n\nconst config = container.get('config');\n// config.db === 'sqlite'\n")),(0,a.kt)("p",null,"\u26a0\ufe0f If the ",(0,a.kt)("strong",{parentName:"p"},"resolver"),", used in the ",(0,a.kt)("a",{parentName:"p",href:"#containerregistername-resolver"},"register function"),", is a ",(0,a.kt)("strong",{parentName:"p"},"function"),", the value will be the result of this resolver function with ",(0,a.kt)("inlineCode",{parentName:"p"},"args")," as parameter on the first call to ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),"."),(0,a.kt)("p",null,"Please pay attention that the resolver result value isn't awaited. So if resolver returns a promise, the value stored will be a promise."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const container = createContainer(strapi);\n\ncontainer.register('boolean', (bool) => bool);\n\n// First call - The value is resolved through the resolver above \"(bool) => bool\"\ncontainer.get('boolean', true);\n// true\n\n// Any further call will use the previously set value\ncontainer.get('boolean');\n// true\n\n\n// Even if we try to push a new value\ncontainer.get('boolean', false);\n// true\n")),(0,a.kt)("h3",{id:"containerextend"},(0,a.kt)("inlineCode",{parentName:"h3"},"container.extend()")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To be developed")))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);