"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74629,72991,6176,18718],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77942:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(37949),o=n(90077),a=n(37614),i=n(2784),c=n(90943);function l(e){const t=(0,a.Z)(),[n]=(0,i.useState)(!1),l=(0,o.Z)("/"),[s,u]=(0,i.useState)(""),[p,d]=(0,i.useState)((0,c.V)(t)),{preferredVersion:m}=(0,r.J)();return(0,i.useEffect)((()=>{const t=null==m?void 0:m.name;u(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,null==m?void 0:m.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,c.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),d(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):i.createElement("iframe",{src:`${s}?theme=${e.theme?e.theme:p}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>M});var r,o=n(7267),a=n(90077),i=n(55061),c=n(2784);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const s=e=>{let{title:t,titleId:n,...o}=e;return c.createElement("svg",l({style:{transform:"scale(2)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},o),t?c.createElement("title",{id:n},t):null,r||(r=c.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var u;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}const d=e=>{let{title:t,titleId:n,...r}=e;return c.createElement("svg",p({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},r),t?c.createElement("title",{id:n},t):null,u||(u=c.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var m=n(77942);let f;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript"}(f||(f={}));var g=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],b={clickToLoad:function(e){return v("ctl",e)},devToolsHeight:function(e){return w("devtoolsheight",e)},forceEmbedLayout:function(e){return v("embed",e)},hideDevTools:function(e){return v("hidedevtools",e)},hideExplorer:function(e){return v("hideExplorer",e)},hideNavigation:function(e){return v("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return w("terminalHeight",e)},theme:function(e){return y("theme",["light","dark"],e)},view:function(e){return y("view",["preview","editor"],e)}};function h(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&b.hasOwnProperty(t)?b[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function v(e,t){return!0===t?e+"=1":""}function w(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function y(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function k(e,t){return""+_(t)+e+h(t)}function _(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function E(e){return e&&!1===e.newWindow?"_self":"_blank"}function x(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function C(e){if(!g.includes(e.template)){var t=g.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,r=document.createElement("form");return r.method="POST",r.setAttribute("style","display:none!important;"),r.appendChild(x("project[title]",e.title)),r.appendChild(x("project[description]",e.description)),r.appendChild(x("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):r.appendChild(x("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&r.appendChild(x("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&r.appendChild(x("project[files]["+t+"]",e.files[t]))})),r}var j=function(e,t){!function(e,t){var n=C(e);n.action=k("/run",t),n.target=E(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const O="https://github.com/siemens/ix/tree/main/packages";function A(e){let{name:t,framework:n}=e;const r=function(e){let{name:t,framework:n}=e;return n===f.ANGULAR?`${O}/angular-test-app/src/preview-examples/${t}.ts`:n===f.JAVASCRIPT?`${O}/html-test-app/src/preview-examples/${t}.html`:n===f.REACT?`${O}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:n,name:t});window.open(r,"_blank")}async function N(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function T(e){let{name:t,framework:n,files:r,baseUrl:o}=e;const a=await async function(e,t,n){const r=[];return(await N(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{r.push({filename:n[t],sourceCode:e})})),r}(o,n,r);return n===f.REACT?async function(e,t){const[n,r,o,a,i]=await N([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[c]=t,l={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;l[`src/${t}`]=n})),j({template:"node",title:"iX React App",description:"iX react playground",files:{...l,"public/index.html":r,"src/index.tsx":o,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${c.filename.substring(0,c.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":a,"tsconfig.json":i,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${c.filename}`})}(o,a):n===f.ANGULAR?async function(e,t,n){const[r,o,a,i,c,l,s,u,p,d,m]=await N([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),f=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&f.push(t)}));const g=`\n    ${f.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${f.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,b={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;b[`src/app/${t}`]=n})),j({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":g,"src/app/app.component.css":r,"src/app/app.component.html":o,"src/app/app.component.ts":a,"src/app/app.module.ts":i,"src/index.html":c,"src/main.ts":l,"src/styles.css":s,"angular.json":u,"package.json":p,"tsconfig.app.json":d,"tsconfig.json":m,...b}},{openFile:`src/app/${t}.ts`})}(o,t,a):n===f.JAVASCRIPT?async function(e,t){const[n,r,o,a]=await N([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[i,...c]=t,l={};c.forEach((e=>{l[`src/${e.filename}`]=e.sourceCode})),j({template:"node",title:"iX html app",description:"iX html playground",files:{...l,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",i.sourceCode),"src/main.js":r,"package.json":o,"vite.config.ts":a}},{openFile:["src/index.html"]})}(o,a):void 0}function $(e){let{name:t,framework:n}=e;return c.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>A({name:t,framework:n})},c.createElement(s,null))}function P(e){let{name:t,files:n,framework:r,baseUrl:o}=e;return c.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>T({name:t,files:n,framework:r,baseUrl:o})},c.createElement(d,null))}function R(e){let{onClick:t,showCode:n}=e;return c.createElement("ix-button",{onClick:t,ghost:!0},n?"Hide Code":"Show Code")}function S(e){const[t,n]=(0,c.useState)(e.files[0].filename);return c.createElement(c.Fragment,null,c.createElement(i.Vp,null,e.files.map((e=>{e.node;return c.createElement(i.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const r=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return r?c.createElement(r,null):null}())}function M(e){let{name:t,height:n,noMargin:r,theme:l,frameworks:s,hideInitalCodePreview:u,availableFrameworks:p}=e;const{pathname:d}=(0,o.TH)(),g=(0,a.Z)("/"),[b,h]=(0,c.useState)(!u),[v,w]=(0,c.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||f.ANGULAR}(p)),[y,k]=(0,c.useState)();(0,c.useEffect)((()=>{const e=function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(d),t=localStorage.getItem(e);var n;t&&((n=t)===f.ANGULAR||n===f.JAVASCRIPT||n===f.REACT)&&w(t)}),[]),(0,c.useEffect)((()=>{const e={};Object.keys(s).forEach((n=>{if("function"==typeof s[n]){let r=t;n===f.REACT&&(r=r.concat(".tsx")),n===f.JAVASCRIPT&&(r=r.concat(".html")),n===f.ANGULAR&&(r=r.concat(".ts")),e[n]=[{filename:r,node:s[n]({})}]}"object"==typeof s[n]&&(e[n]||(e[n]=[]),Object.keys(s[n]).forEach((t=>{e[n].push({filename:t,node:s[n][t]})})))})),k(e)}),[s,k]);const _=e=>{w(e),d&&localStorage.setItem(`docusaurus.playground${d.replace(/\//g,".")}`,e)};function E(e){return!p||(0===p.length||p.includes(e))}return c.createElement("div",{className:"Playground"},c.createElement("div",{className:"Playground__Toolbar Location__Top"},c.createElement("div",{className:"Playground__Toolbar__Actions"},c.createElement(R,{onClick:()=>h(!b),showCode:b}))),c.createElement(m.Z,{name:t,height:n,noMargin:r,theme:l}),b?c.createElement(c.Fragment,null,c.createElement("div",{className:"Playground__Toolbar Location__Bottom"},E(f.ANGULAR)?c.createElement(i._h,{className:"Playground__Framework__Button",ghost:v!==f.ANGULAR,onClick:()=>_(f.ANGULAR)},"Angular"):null,E(f.REACT)?c.createElement(i._h,{className:"Playground__Framework__Button",ghost:v!==f.REACT,onClick:()=>_(f.REACT)},"React"):null,E(f.JAVASCRIPT)?c.createElement(i._h,{className:"Playground__Framework__Button",ghost:v!==f.JAVASCRIPT,onClick:()=>_(f.JAVASCRIPT)},"JavaScript"):null,c.createElement("div",{className:"Playground__Toolbar__Actions"},c.createElement($,{name:t,framework:v}),c.createElement(P,{name:t,framework:v,baseUrl:g,files:y?y[v].map((e=>e.filename)):[]}))),function(){if(!y||!y[v])return null;if(1===y[v].length){const[{node:e}]=y[v];return e}return c.createElement(S,{files:y[v]})}()):null)}},65525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/angular/radio-button.ts",id:"auto-generated/previews/angular/radio-button.ts",title:"radio-button.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/radio-button.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/radio-button.ts",permalink:"/docs/auto-generated/previews/angular/radio-button.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/radio-button.ts.md",tags:[],version:"current",frontMatter:{}},l={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <input checked id="checkbox_1_1" name="group_1" type="radio" />\n    <label for="checkbox_1_1"> Checked </label>\n\n    <input id="checkbox_1_2" name="group_1" type="radio" />\n    <label for="checkbox_1_2"> Normal </label>\n\n    <input disabled id="checkbox_1_3" name="group_1" type="radio" />\n    <label for="checkbox_1_3"> Disabled </label>\n  `,\n})\nexport default class Radiobutton {}\n')))}p.isMDXComponent=!0},69482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/react/radio-button",id:"auto-generated/previews/react/radio-button",title:"radio-button",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/radio-button.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/radio-button",permalink:"/docs/auto-generated/previews/react/radio-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/radio-button.md",tags:[],version:"current",frontMatter:{}},l={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\n\nexport default () => {\n  return (\n    <>\n      <input defaultChecked id="checkbox_1_1" name="group_1" type="radio" />\n      <label htmlFor="checkbox_1_1"> Checked </label>\n\n      <input id="checkbox_1_2" name="group_1" type="radio" />\n      <label htmlFor="checkbox_1_2"> Normal </label>\n\n      <input disabled id="checkbox_1_3" name="group_1" type="radio" />\n      <label htmlFor="checkbox_1_3"> Disabled </label>\n    </>\n  );\n};\n')))}p.isMDXComponent=!0},79014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/web-component/radio-button",id:"auto-generated/previews/web-component/radio-button",title:"radio-button",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/radio-button.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/radio-button",permalink:"/docs/auto-generated/previews/web-component/radio-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/radio-button.md",tags:[],version:"current",frontMatter:{}},l={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div class="example-list">\n  <input checked id="checkbox_1_1" name="group_1" type="radio" />\n  <label for="checkbox_1_1"> Checked </label>\n\n  <input id="checkbox_1_2" name="group_1" type="radio" />\n  <label for="checkbox_1_2"> Normal </label>\n\n  <input disabled id="checkbox_1_3" name="group_1" type="radio" />\n  <label for="checkbox_1_3"> Disabled </label>\n</div>\n')))}p.isMDXComponent=!0},57477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=n(7896),o=(n(2784),n(30876)),a=n(30024),i=n(79014),c=n(69482),l=n(65525);const s={},u="Radio button",p={unversionedId:"controls/radiobutton",id:"controls/radiobutton",title:"Radio button",description:"Usage",source:"@site/docs/controls/radiobutton.md",sourceDirName:"controls",slug:"/controls/radiobutton",permalink:"/docs/controls/radiobutton",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/radiobutton.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Pill",permalink:"/docs/controls/pill"},next:{title:"Select",permalink:"/docs/controls/select"}},d={},m=[{value:"Usage",id:"usage",level:2}],f={toc:m};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"radio-button"},"Radio button"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(a.Z,{name:"radio-button",frameworks:{react:c.default,angular:l.default,javascript:i.default},mdxType:"Playground"}))}g.isMDXComponent=!0}}]);