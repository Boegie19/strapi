"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7173],{9812:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(3117),o=(t(7294),t(3905));const a={title:"useEnterprise",description:"API reference for the useEnterprise hook",tags:["admin","hooks","users"]},i=void 0,s={unversionedId:"docs/core/admin/features/hooks/use-enterprise",id:"docs/core/admin/features/hooks/use-enterprise",title:"useEnterprise",description:"API reference for the useEnterprise hook",source:"@site/docs/docs/01-core/admin/05-features/hooks/use-enterprise.mdx",sourceDirName:"docs/01-core/admin/05-features/hooks",slug:"/docs/core/admin/features/hooks/use-enterprise",permalink:"/docs/core/admin/features/hooks/use-enterprise",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/admin/05-features/hooks/use-enterprise.mdx",tags:[{label:"admin",permalink:"/tags/admin"},{label:"hooks",permalink:"/tags/hooks"},{label:"users",permalink:"/tags/users"}],version:"current",frontMatter:{title:"useEnterprise",description:"API reference for the useEnterprise hook",tags:["admin","hooks","users"]},sidebar:"docs",previous:{title:"useAdminRoles",permalink:"/docs/core/admin/features/hooks/use-admin-roles"},next:{title:"NPS",permalink:"/docs/core/admin/features/nps"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"<code>combine()</code>",id:"combine",level:3},{value:"<code>defaultValue</code>",id:"defaultvalue",level:3},{value:"<code>enabled</code>",id:"enabled",level:3}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A hook that returns either community or enterprise-edition data-structures based on the global ",(0,o.kt)("inlineCode",{parentName:"p"},"window.strapi.isEE")," flag."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { CE_DATA } from './data';\n\nfunction Component() {\n    const data = useEnterprise(CE_DATA, async () => (await import('./ee/data')).default);\n}\n")),(0,o.kt)("p",null,"It accepts an optional third argument to pass in options customizing the hook behavior:"),(0,o.kt)("h3",{id:"combine"},(0,o.kt)("inlineCode",{parentName:"h3"},"combine()")),(0,o.kt)("p",null,"THe ",(0,o.kt)("inlineCode",{parentName:"p"},"combine"),' callback can be used as a custom "merge" function for the ce and ee arguments:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const data = useEnterprise({ a: 1 }, () => { b: 1 }, { combine(ce, ee) { return { ...ce, ...ee } } });\n\nconsole.log(data); // { a: 1, b: 1 }\n")),(0,o.kt)("h3",{id:"defaultvalue"},(0,o.kt)("inlineCode",{parentName:"h3"},"defaultValue")),(0,o.kt)("p",null,"By default the hook returns ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"window.strapi.isEE")," is true and the enterprise data structure is not yet loaded. Customizing\nthis value can help implementing various loading scenarios:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// display a loading state while an EE component is loading\nconst Component = useEnterprise(() => <p>CE</p>, () => <p>EE</p>, {\n    defaultValue: () => <div>loading ...</div>\n})\n\n// display nothing while an EE component is loading, but don't block the overall rendering\nconst Component = useEnterprise(() => <p>CE</p>, () => <p>EE</p>, {\n    defaultValue: () => null\n})\n\n// display nothing while an EE component is loading\nconst Component = useEnterprise(() => <p>CE</p>, () => <p>EE</p>)\n\nif (!Component) {\n    return;\n}\n")),(0,o.kt)("h3",{id:"enabled"},(0,o.kt)("inlineCode",{parentName:"h3"},"enabled")),(0,o.kt)("p",null,"Similar to react-query this boolean flag allows disabling the EE import, e.g. when more than one condition needs to be applied. If ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled"),"\nis set to false, the first argument (CE_DATA) will be returned."))}u.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);