"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3270],{483:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=a(3117),r=(a(7294),a(3905));const i=[{value:"Feature Requests",id:"feature-requests",level:2},{value:"Request For Comments (RFC)",id:"request-for-comments-rfc",level:2},{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"Contributor License Agreement (CLA)",id:"contributor-license-agreement-cla",level:2},{value:"Individual contribution",id:"individual-contribution",level:3},{value:"Company contribution",id:"company-contribution",level:3},{value:"Documentation",id:"documentation",level:2},{value:"Bugs",id:"bugs",level:2},{value:"Before Submitting a Pull Request",id:"before-submitting-a-pull-request",level:2},{value:"Contribution Prerequisites",id:"contribution-prerequisites",level:2},{value:"Development Workflow",id:"development-workflow",level:2},{value:"1. Fork the repository",id:"1-fork-the-repository",level:3},{value:"2. Clone your repository",id:"2-clone-your-repository",level:3},{value:"3. Install the dependencies",id:"3-install-the-dependencies",level:3},{value:"4. Start the example application",id:"4-start-the-example-application",level:3},{value:"5. Running the administration panel in development mode",id:"5-running-the-administration-panel-in-development-mode",level:3},{value:"6. Available commands",id:"6-available-commands",level:3},{value:"Running the API Integration tests",id:"running-the-api-integration-tests",level:2},{value:"Changing the database",id:"changing-the-database",level:3},{value:"Running the tests for the Enterprise Edition (EE)",id:"running-the-tests-for-the-enterprise-edition-ee",level:3},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"Repository Organization",id:"repository-organization",level:3},{value:"Reporting an issue",id:"reporting-an-issue",level:3}],o={toc:i};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contribute-to-strapi"},"Contribute to Strapi"),(0,r.kt)("p",null,"Strapi is an open-source project administered by ",(0,r.kt)("a",{parentName:"p",href:"https://strapi.io/about-us"},"the Strapi team"),". We appreciate your interest and efforts to contribute to Strapi. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strapi/strapi/blob/main/LICENSE"},"LICENSE")," licensing information. All work done is available on GitHub."),(0,r.kt)("p",null,"We highly appreciate your effort to contribute, but we recommend you talk to a maintainer before spending a lot of time making a pull request that may not align with the project roadmap. Whether it is from Strapi or contributors, every pull request goes through the same process."),(0,r.kt)("h2",{id:"feature-requests"},"Feature Requests"),(0,r.kt)("p",null,"Feature Requests by the community are highly encouraged. Feel free to submit a new one or upvote an existing feature request on ",(0,r.kt)("a",{parentName:"p",href:"https://feedback.strapi.io/"},"feedback.strapi.io"),"."),(0,r.kt)("h2",{id:"request-for-comments-rfc"},"Request For Comments (RFC)"),(0,r.kt)("p",null,"Larger chunks of changes to Strapi that might affect many users require a thorough design phase before starting working on a PR. We will do our best to respond as soon as possible, but since we need to discuss these proposals thoroughly, please do not expect them to be merged and accepted immediately."),(0,r.kt)("p",null,"The Request For Comments process will help us create consensus among the core team and include as much feedback as possible from the community for these upcoming changes."),(0,r.kt)("p",null,"A Request For Comments has to be created on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strapi/rfcs"},"strapi/rfcs")," repository."),(0,r.kt)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,r.kt)("p",null,"This project, and everyone participating in it, are governed by the ",(0,r.kt)("a",{parentName:"p",href:"CODE_OF_CONDUCT.md"},"Strapi Code of Conduct"),". By participating, you are expected to uphold it. Make sure to read the ",(0,r.kt)("a",{parentName:"p",href:"CODE_OF_CONDUCT.md"},"full text")," to understand which type of actions may or may not be tolerated."),(0,r.kt)("h2",{id:"contributor-license-agreement-cla"},"Contributor License Agreement (CLA)"),(0,r.kt)("h3",{id:"individual-contribution"},"Individual contribution"),(0,r.kt)("p",null,"You need to sign a Contributor License Agreement (CLA) to accept your pull request. You only need to do this once. If you submit a pull request for the first time, you can complete your CLA ",(0,r.kt)("a",{parentName:"p",href:"https://cla.strapi.io/strapi/strapi"},"here"),", or our CLA bot will automatically ask you to sign before merging the pull request."),(0,r.kt)("h3",{id:"company-contribution"},"Company contribution"),(0,r.kt)("p",null,"If you make contributions to our repositories on behalf of your company, we will need a Corporate Contributor License Agreement (CLA) signed. To do that, please get in touch with us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:contributions@strapi.io"},"contributions@strapi.io"),"."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"Pull requests related to fixing documentation for the latest release should be directed towards the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strapi/documentation"},"documentation repository"),". Please follow the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strapi/documentation/blob/main/CONTRIBUTING.md"},"documentation contributing guide")," for more information."),(0,r.kt)("h2",{id:"bugs"},"Bugs"),(0,r.kt)("p",null,"Strapi is using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strapi/strapi/issues"},"GitHub issues")," to manage bugs. We keep a close eye on them. Before filing a new issue, try to ensure your problem does not already exist."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"before-submitting-a-pull-request"},"Before Submitting a Pull Request"),(0,r.kt)("p",null,"The Strapi core team will review your pull request and either merge it, request changes, or close it."),(0,r.kt)("h2",{id:"contribution-prerequisites"},"Contribution Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You have ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," at version >= v18 and <= v20 and ",(0,r.kt)("a",{parentName:"li",href:"https://yarnpkg.com/en/"},"Yarn")," at v1.2.0+ installed."),(0,r.kt)("li",{parentName:"ul"},"You are familiar with ",(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com"},"Git"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before submitting your pull request")," make sure the following requirements are fulfilled:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fork the repository and create your new branch from ",(0,r.kt)("inlineCode",{parentName:"li"},"main"),"."),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn install")," in the root of the repository."),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn setup")," in the root of the repository."),(0,r.kt)("li",{parentName:"ul"},"If you've fixed a bug or added code that should be tested, please make sure to add tests"),(0,r.kt)("li",{parentName:"ul"},"Ensure the following test suites are passing:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn test:unit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn test:front")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn test:e2e --setup --concurrency=1"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"you ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"may"))," need to install Playwright browsers first: ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn playwright install")))))),(0,r.kt)("li",{parentName:"ul"},"Make sure your code lints by running ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn lint"),"."),(0,r.kt)("li",{parentName:"ul"},"If your contribution fixes an existing issue, please make sure to link it in your pull request.")),(0,r.kt)("h2",{id:"development-workflow"},"Development Workflow"),(0,r.kt)("h3",{id:"1-fork-the-repository"},"1. Fork the ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/strapi/strapi"},"repository")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/strapi/strapi"},"Go to the repository")," and fork it using your own GitHub account."),(0,r.kt)("h3",{id:"2-clone-your-repository"},"2. Clone your repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:YOUR_USERNAME/strapi.git\n")),(0,r.kt)("h3",{id:"3-install-the-dependencies"},"3. Install the dependencies"),(0,r.kt)("p",null,"Go to the root of the repository and run the setup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd strapi\nyarn install\nyarn setup\n\n")),(0,r.kt)("h3",{id:"4-start-the-example-application"},"4. Start the example application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ./examples/getstarted\nyarn develop\n")),(0,r.kt)("p",null,"Make sure to read the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strapi/strapi/blob/main/examples/getstarted/README.md"},(0,r.kt)("inlineCode",{parentName:"a"},"getstarted")," application README")," for more details."),(0,r.kt)("h3",{id:"5-running-the-administration-panel-in-development-mode"},"5. Running the administration panel in development mode"),(0,r.kt)("p",null,"Start the administration panel server for development:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ./packages/core/admin\nyarn develop\n")),(0,r.kt)("p",null,"The administration panel should now be available at http://localhost:4000/admin. Make sure the example application (step 4) is still running."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Awesome! You are now able to contribute to Strapi.")),(0,r.kt)("h3",{id:"6-available-commands"},"6. Available commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn watch")," starts yarn watch in all packages."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn build")," builds the ",(0,r.kt)("inlineCode",{parentName:"li"},"strapi-helper-plugin")," (use this command when you develop in the administration panel)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn setup")," installs dependencies."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn lint")," lints the codebase."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn test:clean")," removes the coverage reports."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn test:front")," runs front-end related tests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn test:front:watch")," runs an interactive test watcher for the front-end."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn test:unit")," runs the back-end unit tests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn test:api")," runs the api integration tests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn test:generate-app")," generates a test application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn test:run-app")," runs a test application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn test:start-app")," starts the test application.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"running-the-api-integration-tests"},"Running the API Integration tests"),(0,r.kt)("p",null,'The API integration tests require a Strapi app to be able to run. You can generate a "test app" using ',(0,r.kt)("inlineCode",{parentName:"p"},"yarn test:generate-app <database>"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn test:generate-app --db=sqlite\n$ yarn test:generate-app --db=postgres\n$ yarn test:generate-app --db=mysql\n")),(0,r.kt)("p",null,"A new app is required every time you run the API integration tests, otherwise the test suite will fail. A command is available to make this process easier: ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn test:api"),"."),(0,r.kt)("p",null,"This command runs tests using jest behind the scenes. Options for jest can be passed to the command. (e.g. to update snapshots ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn test:api -u"),")."),(0,r.kt)("h3",{id:"changing-the-database"},"Changing the database"),(0,r.kt)("p",null,"By default the script run by ",(0,r.kt)("inlineCode",{parentName:"p"},"test:api")," generates an app that uses ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlite")," as a database. But you can run the test suites using different databases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn test:api --db=sqlite\n$ yarn test:api --db=postgres\n$ yarn test:api --db=mysql\n")),(0,r.kt)("h3",{id:"running-the-tests-for-the-enterprise-edition-ee"},"Running the tests for the Enterprise Edition (EE)"),(0,r.kt)("p",null,"The test suites run the tests for the Community Edition (CE) version of Strapi by default.\nIn order to run the Enterprise Edition tests you need a valid license. To specify a license, you can use the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"STRAPI_LICENSE"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ STRAPI_LICENSE=<license> yarn test:api\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,r.kt)("h3",{id:"repository-organization"},"Repository Organization"),(0,r.kt)("p",null,"We chose to use a monorepo design using ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/en/docs/workspaces"},"Yarn Workspaces")," in the way ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/tree/master/packages"},"React")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/tree/master/packages"},"Babel")," does. This allows us to maintain the whole ecosystem keep it up-to-date and consistent."),(0,r.kt)("p",null,"We do our best to keep the master branch as clean as possible, with tests passing at all times. However, the master branch can move faster than the release cycle. Therefore check the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@strapi/strapi"},"releases on npm")," so that you are always up-to-date with the latest stable version."),(0,r.kt)("h3",{id:"reporting-an-issue"},"Reporting an issue"),(0,r.kt)("p",null,"Before submitting an issue you need to make sure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You are experiencing a technical issue with Strapi."),(0,r.kt)("li",{parentName:"ul"},"You have already searched for related ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/strapi/strapi/issues"},"issues")," and found none open (if you found a related ",(0,r.kt)("em",{parentName:"li"},"closed")," issue, please link to it from your post)."),(0,r.kt)("li",{parentName:"ul"},"You are not asking a question about how to use Strapi or about whether or not Strapi has a certain feature. For general help using Strapi, you may:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Refer to the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.strapi.io"},"official Strapi documentation"),"."),(0,r.kt)("li",{parentName:"ul"},"Ask a member of the community in the ",(0,r.kt)("a",{parentName:"li",href:"https://discord.strapi.io/"},"Strapi Discord Community"),"."),(0,r.kt)("li",{parentName:"ul"},"Ask a question on the ",(0,r.kt)("a",{parentName:"li",href:"https://forum.strapi.io"},"Strapi community forum"),"."))),(0,r.kt)("li",{parentName:"ul"},"Your issue title is concise, on-topic, and polite."),(0,r.kt)("li",{parentName:"ul"},"You provide steps to reproduce the issue."),(0,r.kt)("li",{parentName:"ul"},"You have tried all the following (if relevant), and your issue remains:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Make sure you have the right application started."),(0,r.kt)("li",{parentName:"ul"},"Make sure the ","[issue template]"," is respected."),(0,r.kt)("li",{parentName:"ul"},"Make sure your issue body is readable and ",(0,r.kt)("a",{parentName:"li",href:"https://guides.github.com/features/mastering-markdown"},"well formatted"),"."),(0,r.kt)("li",{parentName:"ul"},"Make sure you've stopped the Strapi server with CTRL+C and restarted it."),(0,r.kt)("li",{parentName:"ul"},"Make sure your application has a clean ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," directory, meaning:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"you didn't link any dependencies (e.g., by running ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn link"),")"),(0,r.kt)("li",{parentName:"ul"},"you haven't made any inline changes to files in the ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," directory"),(0,r.kt)("li",{parentName:"ul"},"you don't have any global dependency loops. If you aren't sure, the easiest way to double-check any of the above is to run: ",(0,r.kt)("inlineCode",{parentName:"li"},"$ rm -rf node_modules && yarn cache clean && yarn install && yarn setup"),".")))))))}s.isMDXComponent=!0;const l={title:"Contributing to Strapi",hide_title:!0},p=void 0,u={unversionedId:"guides/contributing",id:"guides/contributing",title:"Contributing to Strapi",description:"",source:"@site/docs/guides/00-contributing.md",sourceDirName:"guides",slug:"/guides/contributing",permalink:"/guides/contributing",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/guides/00-contributing.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Contributing to Strapi",hide_title:!0},sidebar:"guides",next:{title:"Code of conduct",permalink:"/guides/code-of-conduct"}},m={},d=i,c={toc:d};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s,{mdxType:"Contributing"}))}h.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);