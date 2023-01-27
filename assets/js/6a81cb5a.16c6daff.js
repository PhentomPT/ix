"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86166,650,66245,81617,1916,42162,33554,97946,65898,93726,75697],{30876:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(2784);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,o(o({ref:e},u),{},{components:n})):a.createElement(g,o({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77942:(t,e,n)=>{n.d(e,{Z:()=>s});var a=n(37949),r=n(90077),i=n(37614),o=n(2784),l=n(90943);function s(t){const e=(0,i.Z)(),[n]=(0,o.useState)(!1),s=(0,r.Z)("/"),[p,u]=(0,o.useState)(""),[c,d]=(0,o.useState)((0,l.V)(e)),{preferredVersion:m}=(0,a.J)();return(0,o.useEffect)((()=>{const e=null==m?void 0:m.name;u(void 0===e||"current"===e?s+`webcomponent-examples/dist/preview-examples/${t.name}.html`:s+`versioned_examples/version-${e}/webcomponent-examples/dist/preview-examples/${t.name}.html`)}),[s,null==m?void 0:m.name,t.name]),(0,o.useLayoutEffect)((()=>{const t=()=>{let t=(0,l.V)(e);document.body.classList.forEach((e=>{e.includes("theme-")&&(t=e)})),d(t)},n=new MutationObserver((()=>t()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),t(),()=>{n.disconnect()}}),[]),o.createElement(o.Fragment,null,n?o.createElement("span",null,"No component preview found for ",t.name," in version"," ",null==m?void 0:m.name):o.createElement("iframe",{src:`${p}?theme=${t.theme?t.theme:c}${t.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${t.height}`}}))}},30024:(t,e,n)=>{n.d(e,{Z:()=>S});var a,r=n(7267),i=n(90077),o=n(55061),l=n(2784);function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},s.apply(this,arguments)}const p=t=>{let{title:e,titleId:n,...r}=t;return l.createElement("svg",s({style:{transform:"scale(2)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},r),e?l.createElement("title",{id:n},e):null,a||(a=l.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var u;function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},c.apply(this,arguments)}const d=t=>{let{title:e,titleId:n,...a}=t;return l.createElement("svg",c({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),e?l.createElement("title",{id:n},e):null,u||(u=l.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var m=n(77942);let g;!function(t){t.ANGULAR="angular",t.REACT="react",t.JAVASCRIPT="javascript"}(g||(g={}));var b=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],k={clickToLoad:function(t){return v("ctl",t)},devToolsHeight:function(t){return N("devtoolsheight",t)},forceEmbedLayout:function(t){return v("embed",t)},hideDevTools:function(t){return v("hidedevtools",t)},hideExplorer:function(t){return v("hideExplorer",t)},hideNavigation:function(t){return v("hideNavigation",t)},showSidebar:function(t){return function(t,e){return"boolean"==typeof e?"showSidebar="+(e?"1":"0"):""}(0,t)},openFile:function(t){return function(t,e){return(Array.isArray(e)?e:[e]).filter((function(t){return"string"==typeof t&&""!==t.trim()})).map((function(t){return"file="+encodeURIComponent(t.trim())}))}(0,t).join("&")},terminalHeight:function(t){return N("terminalHeight",t)},theme:function(t){return h("theme",["light","dark"],t)},view:function(t){return h("view",["preview","editor"],t)}};function f(t){void 0===t&&(t={});var e=Object.entries(t).map((function(t){var e=t[0],n=t[1];return null!=n&&k.hasOwnProperty(e)?k[e](n):""})).filter(Boolean);return e.length?"?"+e.join("&"):""}function v(t,e){return!0===e?t+"=1":""}function N(t,e){return"number"==typeof e&&e>=0&&e<=100?t+"="+Math.round(e):""}function h(t,e,n){return"string"==typeof n&&e.includes(n)?t+"="+n:""}function w(t,e){return""+x(e)+t+f(e)}function x(t){return void 0===t&&(t={}),"string"==typeof t.origin?t.origin:"https://stackblitz.com"}function y(t){return t&&!1===t.newWindow?"_self":"_blank"}function _(t,e){var n=document.createElement("input");return n.type="hidden",n.name=t,n.value=e,n}function C(t){if(!b.includes(t.template)){var e=b.map((function(t){return"'"+t+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+e)}var n="node"===t.template,a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.appendChild(_("project[title]",t.title)),a.appendChild(_("project[description]",t.description)),a.appendChild(_("project[template]",t.template)),t.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a.appendChild(_("project[dependencies]",JSON.stringify(t.dependencies)))),t.settings&&a.appendChild(_("project[settings]",JSON.stringify(t.settings))),Object.keys(t.files).forEach((function(e){"string"==typeof t.files[e]&&a.appendChild(_("project[files]["+e+"]",t.files[e]))})),a}var T=function(t,e){!function(t,e){var n=C(t);n.action=w("/run",e),n.target=y(e),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(t,e)};const E="https://github.com/siemens/ix/tree/main/packages";function A(t){let{name:e,framework:n}=t;const a=function(t){let{name:e,framework:n}=t;return n===g.ANGULAR?`${E}/angular-test-app/src/preview-examples/${e}.ts`:n===g.JAVASCRIPT?`${E}/html-test-app/src/preview-examples/${e}.html`:n===g.REACT?`${E}/react-test-app/src/preview-examples/${e}.tsx`:void 0}({framework:n,name:e});window.open(a,"_blank")}async function D(t){const e=await Promise.all(t.map((t=>fetch(t))));return Promise.all(e.map((t=>t.text())))}async function I(t){let{name:e,framework:n,files:a,baseUrl:r}=t;const i=await async function(t,e,n){const a=[];return(await D(n.map((n=>`${t}auto-generated/previews/${e}/${n}.txt`)))).forEach(((t,e)=>{a.push({filename:n[e],sourceCode:t})})),a}(r,n,a);return n===g.REACT?async function(t,e){const[n,a,r,i,o]=await D([`${t}code-runtime/react/App.tsx`,`${t}code-runtime/react/index.html`,`${t}code-runtime/react/index.tsx`,`${t}code-runtime/react/package.json`,`${t}code-runtime/react/tsconfig.json`]),[l]=e,s={};e.forEach((t=>{let{filename:e,sourceCode:n}=t;s[`src/${e}`]=n})),T({template:"node",title:"iX React App",description:"iX react playground",files:{...s,"public/index.html":a,"src/index.tsx":r,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${l.filename.substring(0,l.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":i,"tsconfig.json":o,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${l.filename}`})}(r,i):n===g.ANGULAR?async function(t,e,n){const[a,r,i,o,l,s,p,u,c,d,m]=await D([`${t}code-runtime/angular/src/app/app.component.css`,`${t}code-runtime/angular/src/app/app.component.html`,`${t}code-runtime/angular/src/app/app.component.ts`,`${t}code-runtime/angular/src/app/app.module.ts`,`${t}code-runtime/angular/src/index.html`,`${t}code-runtime/angular/src/main.ts`,`${t}code-runtime/angular/src/styles.css`,`${t}code-runtime/angular/angular.json`,`${t}code-runtime/angular/package.json`,`${t}code-runtime/angular/tsconfig.app.json`,`${t}code-runtime/angular/tsconfig.json`]),g=[];n.forEach((t=>{let{filename:e,sourceCode:n}=t;/@Component/gms.test(n)&&g.push(e)}));const b=`\n    ${g.map(((t,e)=>`import COMPONENT_${e} from './${t.substring(0,t.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${g.map(((t,e)=>`COMPONENT_${e},`))}\n    ];\n  `,k={};n.forEach((t=>{let{filename:e,sourceCode:n}=t;k[`src/app/${e}`]=n})),T({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":b,"src/app/app.component.css":a,"src/app/app.component.html":r,"src/app/app.component.ts":i,"src/app/app.module.ts":o,"src/index.html":l,"src/main.ts":s,"src/styles.css":p,"angular.json":u,"package.json":c,"tsconfig.app.json":d,"tsconfig.json":m,...k}},{openFile:`src/app/${e}.ts`})}(r,e,i):n===g.JAVASCRIPT?async function(t,e){const[n,a,r,i]=await D([`${t}code-runtime/html/src/index.html`,`${t}code-runtime/html/src/main.js`,`${t}code-runtime/html/package.json`,`${t}code-runtime/html/vite.config.ts`]),[o,...l]=e,s={};l.forEach((t=>{s[`src/${t.filename}`]=t.sourceCode})),T({template:"node",title:"iX html app",description:"iX html playground",files:{...s,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",o.sourceCode),"src/main.js":a,"package.json":r,"vite.config.ts":i}},{openFile:["src/index.html"]})}(r,i):void 0}function j(t){let{name:e,framework:n}=t;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>A({name:e,framework:n})},l.createElement(p,null))}function M(t){let{name:e,files:n,framework:a,baseUrl:r}=t;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>I({name:e,files:n,framework:a,baseUrl:r})},l.createElement(d,null))}function O(t){let{onClick:e,showCode:n}=t;return l.createElement("ix-button",{onClick:e,ghost:!0},n?"Hide Code":"Show Code")}function P(t){const[e,n]=(0,l.useState)(t.files[0].filename);return l.createElement(l.Fragment,null,l.createElement(o.Vp,null,t.files.map((t=>{t.node;return l.createElement(o.t3,{key:t.filename,onClick:()=>{return e=t.filename,n(e);var e}},t.filename)}))),function(){var n;const a=null==(n=t.files.find((t=>t.filename===e)))?void 0:n.node;return a?l.createElement(a,null):null}())}function S(t){let{name:e,height:n,noMargin:a,theme:s,frameworks:p,hideInitalCodePreview:u,availableFrameworks:c}=t;const{pathname:d}=(0,r.TH)(),b=(0,i.Z)("/"),[k,f]=(0,l.useState)(!u),[v,N]=(0,l.useState)(function(t){return t&&(0!==t.length?t[0]:void 0)||g.ANGULAR}(c)),[h,w]=(0,l.useState)();(0,l.useEffect)((()=>{const t=function(t){return`docusaurus.playground${t.replace(/\//g,".")}`}(d),e=localStorage.getItem(t);var n;e&&((n=e)===g.ANGULAR||n===g.JAVASCRIPT||n===g.REACT)&&N(e)}),[]),(0,l.useEffect)((()=>{const t={};Object.keys(p).forEach((n=>{if("function"==typeof p[n]){let a=e;n===g.REACT&&(a=a.concat(".tsx")),n===g.JAVASCRIPT&&(a=a.concat(".html")),n===g.ANGULAR&&(a=a.concat(".ts")),t[n]=[{filename:a,node:p[n]({})}]}"object"==typeof p[n]&&(t[n]||(t[n]=[]),Object.keys(p[n]).forEach((e=>{t[n].push({filename:e,node:p[n][e]})})))})),w(t)}),[p,w]);const x=t=>{N(t),d&&localStorage.setItem(`docusaurus.playground${d.replace(/\//g,".")}`,t)};function y(t){return!c||(0===c.length||c.includes(t))}return l.createElement("div",{className:"Playground"},l.createElement("div",{className:"Playground__Toolbar Location__Top"},l.createElement("div",{className:"Playground__Toolbar__Actions"},l.createElement(O,{onClick:()=>f(!k),showCode:k}))),l.createElement(m.Z,{name:e,height:n,noMargin:a,theme:s}),k?l.createElement(l.Fragment,null,l.createElement("div",{className:"Playground__Toolbar Location__Bottom"},y(g.ANGULAR)?l.createElement(o._h,{className:"Playground__Framework__Button",ghost:v!==g.ANGULAR,onClick:()=>x(g.ANGULAR)},"Angular"):null,y(g.REACT)?l.createElement(o._h,{className:"Playground__Framework__Button",ghost:v!==g.REACT,onClick:()=>x(g.REACT)},"React"):null,y(g.JAVASCRIPT)?l.createElement(o._h,{className:"Playground__Framework__Button",ghost:v!==g.JAVASCRIPT,onClick:()=>x(g.JAVASCRIPT)},"JavaScript"):null,l.createElement("div",{className:"Playground__Toolbar__Actions"},l.createElement(j,{name:e,framework:v}),l.createElement(M,{name:e,framework:v,baseUrl:b,files:h?h[v].map((t=>t.filename)):[]}))),function(){if(!h||!h[v])return null;if(1===h[v].length){const[{node:t}]=h[v];return t}return l.createElement(P,{files:h[v]})}()):null)}},34003:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/ix-split-button-item/events",id:"auto-generated/ix-split-button-item/events",title:"events",description:"| Name       | Description                   | Type        |",source:"@site/docs/auto-generated/ix-split-button-item/events.md",sourceDirName:"auto-generated/ix-split-button-item",slug:"/auto-generated/ix-split-button-item/events",permalink:"/docs/auto-generated/ix-split-button-item/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-split-button-item/events.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"itemClick"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Dropdown item clicked"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MouseEvent"))))))}c.isMDXComponent=!0},12791:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/ix-split-button-item/props",id:"auto-generated/ix-split-button-item/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-split-button-item/props.md",sourceDirName:"auto-generated/ix-split-button-item",slug:"/auto-generated/ix-split-button-item/props",permalink:"/docs/auto-generated/ix-split-button-item/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-split-button-item/props.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"icon"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Dropdown icon"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"icon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Dropdown label"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))))}c.isMDXComponent=!0},16069:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/ix-split-button/events",id:"auto-generated/ix-split-button/events",title:"events",description:"| Name       | Description                   | Type        |",source:"@site/docs/auto-generated/ix-split-button/events.md",sourceDirName:"auto-generated/ix-split-button",slug:"/auto-generated/ix-split-button/events",permalink:"/docs/auto-generated/ix-split-button/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-split-button/events.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buttonClick"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Button clicked"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MouseEvent"))))))}c.isMDXComponent=!0},94890:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/ix-split-button/props",id:"auto-generated/ix-split-button/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-split-button/props.md",sourceDirName:"auto-generated/ix-split-button",slug:"/auto-generated/ix-split-button/props",permalink:"/docs/auto-generated/ix-split-button/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-split-button/props.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Disabled"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ghost"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Button invisible"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ghost")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"icon"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Button icon"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"icon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"''"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invisible"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Button invisible"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"},(0,r.kt)("span",{className:"Api__Table Docs__Tag Docs__Tag__Deprecated",title:"Will be removed in 2.0.0. Use ghost property"},"Deprecated: Will be removed in 2.0.0. Use ghost property")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invisible")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Button label"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outline"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Button outline variant"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"outline")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"placement"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Placement of the dropdown"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"placement")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"auto" \uff5c "auto-end" \uff5c "auto-start" \uff5c "bottom" \uff5c "bottom-end" \uff5c "bottom-start" \uff5c "left" \uff5c "left-end" \uff5c "left-start" \uff5c "right" \uff5c "right-end" \uff5c "right-start" \uff5c "top" \uff5c "top-end" \uff5c "top-start"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'bottom-start'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"splitIcon"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Splitbutton icon"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"split-icon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'context-menu'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variant"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Color variant of button"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"variant")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Primary" \uff5c "Secondary"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'Primary'"))))))}c.isMDXComponent=!0},10300:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/angular/split-button-icons.ts",id:"auto-generated/previews/angular/split-button-icons.ts",title:"split-button-icons.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/split-button-icons.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/split-button-icons.ts",permalink:"/docs/auto-generated/previews/angular/split-button-icons.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/split-button-icons.ts.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: ` <ix-split-button icon="document" splitIcon="chevron-down-small">\n    <ix-split-button-item icon="cut"></ix-split-button-item>\n    <ix-split-button-item icon="bulb"></ix-split-button-item>\n  </ix-split-button>`,\n})\nexport default class SplitButtonIcons {}\n')))}c.isMDXComponent=!0},72360:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/angular/split-button.ts",id:"auto-generated/previews/angular/split-button.ts",title:"split-button.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/split-button.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/split-button.ts",permalink:"/docs/auto-generated/previews/angular/split-button.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/split-button.ts.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-split-button label="Action text" splitIcon="chevron-down-small">\n      <ix-split-button-item label="Item 1"></ix-split-button-item>\n      <ix-split-button-item label="Item 2"></ix-split-button-item>\n    </ix-split-button>\n  `,\n})\nexport default class SplitButton {}\n')))}c.isMDXComponent=!0},1398:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/react/split-button-icons",id:"auto-generated/previews/react/split-button-icons",title:"split-button-icons",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/split-button-icons.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/split-button-icons",permalink:"/docs/auto-generated/previews/react/split-button-icons",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/split-button-icons.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxSplitButton, IxSplitButtonItem } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <IxSplitButton label="Action text" splitIcon=\'chevron-down-small\'>\n      <IxSplitButtonItem label="Item 1" icon="cut"></IxSplitButtonItem>\n      <IxSplitButtonItem label="Item 2" icon="bulb"></IxSplitButtonItem>\n    </IxSplitButton>\n  );\n};\n')))}c.isMDXComponent=!0},8102:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/react/split-button",id:"auto-generated/previews/react/split-button",title:"split-button",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/split-button.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/split-button",permalink:"/docs/auto-generated/previews/react/split-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/split-button.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxSplitButton, IxSplitButtonItem } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  return (\n    <IxSplitButton label=\"Action text\" splitIcon='chevron-down-small'>\n      <IxSplitButtonItem label=\"Item 1\"></IxSplitButtonItem>\n      <IxSplitButtonItem label=\"Item 2\"></IxSplitButtonItem>\n    </IxSplitButton>\n  );\n};\n")))}c.isMDXComponent=!0},34905:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/web-component/split-button-icons",id:"auto-generated/previews/web-component/split-button-icons",title:"split-button-icons",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/split-button-icons.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/split-button-icons",permalink:"/docs/auto-generated/previews/web-component/split-button-icons",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/split-button-icons.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ix-split-button icon="document" split-icon="chevron-down-small">\n  <ix-split-button-item icon="cut"></ix-split-button-item>\n  <ix-split-button-item icon="bulb"></ix-split-button-item>\n</ix-split-button>\n')))}c.isMDXComponent=!0},68945:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/web-component/split-button",id:"auto-generated/previews/web-component/split-button",title:"split-button",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/split-button.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/split-button",permalink:"/docs/auto-generated/previews/web-component/split-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/split-button.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ix-split-button label="Action text" split-icon="chevron-down-small">\n  <ix-split-button-item label="Item 1"></ix-split-button-item>\n  <ix-split-button-item label="Item 2"></ix-split-button-item>\n</ix-split-button>\n')))}c.isMDXComponent=!0},72103:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>N,contentTitle:()=>f,default:()=>x,frontMatter:()=>k,metadata:()=>v,toc:()=>h});var a=n(7896),r=(n(2784),n(30876)),i=n(30024),o=n(94890),l=n(16069),s=n(12791),p=n(34003),u=n(68945),c=n(34905),d=n(8102),m=n(1398),g=n(72360),b=n(10300);const k={},f="Split button",v={unversionedId:"controls/split-button",id:"controls/split-button",title:"Split button",description:"Usage",source:"@site/docs/controls/split-button.md",sourceDirName:"controls",slug:"/controls/split-button",permalink:"/docs/controls/split-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/split-button.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Spinner",permalink:"/docs/controls/spinner"},next:{title:"Tabs",permalink:"/docs/controls/tabs"}},N={},h=[{value:"Usage",id:"usage",level:2},{value:"With icon only",id:"with-icon-only",level:3},{value:"Properties (ix-split-button)",id:"properties-ix-split-button",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3},{value:"Properties (ix-split-button-item)",id:"properties-ix-split-button-item",level:2},{value:"Props",id:"props-1",level:3},{value:"Events",id:"events-1",level:3}],w={toc:h};function x(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},w,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"split-button"},"Split button"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(i.Z,{name:"split-button",height:"16rem",frameworks:{react:d.default,angular:g.default,javascript:u.default},mdxType:"Playground"}),(0,r.kt)("h3",{id:"with-icon-only"},"With icon only"),(0,r.kt)(i.Z,{name:"split-button-icons",height:"16rem",hideInitalCodePreview:!0,frameworks:{react:m.default,angular:b.default,javascript:c.default},mdxType:"Playground"}),(0,r.kt)("h2",{id:"properties-ix-split-button"},"Properties (ix-split-button)"),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(o.default,{mdxType:"Props"}),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)(l.default,{mdxType:"Events"}),(0,r.kt)("h2",{id:"properties-ix-split-button-item"},"Properties (ix-split-button-item)"),(0,r.kt)("h3",{id:"props-1"},"Props"),(0,r.kt)(s.default,{mdxType:"ItemProps"}),(0,r.kt)("h3",{id:"events-1"},"Events"),(0,r.kt)(p.default,{mdxType:"ItemEvents"}))}x.isMDXComponent=!0}}]);