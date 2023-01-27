"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44543],{30876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=i(t),p=o,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||a;return t?r.createElement(f,c(c({ref:n},d),{},{components:t})):r.createElement(f,c({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=t[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93086:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=t(7896),o=(t(2784),t(30876));const a={},c=void 0,s={unversionedId:"auto-generated/previews/react/modal",id:"auto-generated/previews/react/modal",title:"modal",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/modal.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/modal",permalink:"/docs/auto-generated/previews/react/modal",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/modal.md",tags:[],version:"current",frontMatter:{}},l={},i=[],d={toc:i};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  IxButton,\n  IxIconButton,\n  Modal,\n  ModalRef,\n  showModal,\n} from '@siemens/ix-react';\nimport React, { useRef } from 'react';\n\nfunction CustomModal() {\n  const modalRef = useRef<ModalRef>(null);\n\n  const close = () => {\n    modalRef.current?.close('close payload!');\n  };\n  const dismiss = () => {\n    modalRef.current?.dismiss('dismiss payload');\n  };\n\n  return (\n    <Modal ref={modalRef}>\n      <div className=\"modal-header\">\n        Message headline\n        <IxIconButton\n          data-button-close\n          ghost\n          icon=\"close\"\n          onClick={() => dismiss()}\n        ></IxIconButton>\n      </div>\n      <div className=\"modal-body\">Message text lorem ipsum</div>\n      <div className=\"modal-footer\">\n        <IxButton outline onClick={() => dismiss()}>\n          Cancel\n        </IxButton>\n        <IxButton onClick={() => close()}>OK</IxButton>\n      </div>\n    </Modal>\n  );\n}\n\nexport default () => {\n  async function show() {\n    const modal = await showModal({\n      title: 'test',\n      content: <CustomModal />,\n    });\n\n    modal.htmlElement.addEventListener('keypress', (keyboardEvent) => {\n      console.log(keyboardEvent.key);\n    });\n  }\n\n  return (\n    <>\n      <IxButton onClick={show}>Show modal</IxButton>\n    </>\n  );\n};\n")))}u.isMDXComponent=!0}}]);