"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50023],{30876:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>l});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(t),l=a,y=d["".concat(c,".").concat(l)]||d[l]||u[l]||o;return t?r.createElement(y,i(i({ref:n},m),{},{components:t})):r.createElement(y,i({ref:n},m))}));function l(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26401:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(7896),a=(t(2784),t(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/web-component/echarts",id:"auto-generated/previews/web-component/echarts",title:"echarts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/echarts.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/echarts",permalink:"/docs/auto-generated/previews/web-component/echarts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/echarts.md",tags:[],version:"current",frontMatter:{}},c={},p=[],m={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<div\n  id=\"main\"\n  style=\"display: block; position: relative; width: 100%; height: 40rem\"\n></div>\n<script type=\"module\">\n  import { registerTheme } from '@siemens/ix-echarts';\n\n  registerTheme(echarts);\n\n  var myChart = echarts.init(\n    document.querySelector('#main'),\n    window.demoTheme // brand-dark, brand-light, classic-dark or classic-light\n  );\n  // Draw the chart\n  myChart.setOption({\n    tooltip: {\n      trigger: 'axis',\n      axisPointer: {\n        type: 'shadow',\n      },\n    },\n    legend: {},\n    grid: {\n      left: '3%',\n      right: '4%',\n      bottom: '3%',\n      containLabel: true,\n    },\n    xAxis: [\n      {\n        type: 'category',\n        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n      },\n    ],\n    yAxis: [\n      {\n        type: 'value',\n      },\n    ],\n    series: [\n      {\n        name: 'Direct',\n        type: 'bar',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [320, 332, 301, 334, 390, 330, 320],\n      },\n      {\n        name: 'Email',\n        type: 'bar',\n        stack: 'Ad',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [120, 132, 101, 134, 90, 230, 210],\n      },\n      {\n        name: 'Union Ads',\n        type: 'bar',\n        stack: 'Ad',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [220, 182, 191, 234, 290, 330, 310],\n      },\n      {\n        name: 'Video Ads',\n        type: 'bar',\n        stack: 'Ad',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [150, 232, 201, 154, 190, 330, 410],\n      },\n      {\n        name: 'Search Engine',\n        type: 'bar',\n        data: [862, 1018, 964, 1026, 1679, 1600, 1570],\n        emphasis: {\n          focus: 'series',\n        },\n        markLine: {\n          lineStyle: {\n            type: 'dashed',\n          },\n          data: [[{ type: 'min' }, { type: 'max' }]],\n        },\n      },\n      {\n        name: 'Baidu',\n        type: 'bar',\n        barWidth: 5,\n        stack: 'Search Engine',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [620, 732, 701, 734, 1090, 1130, 1120],\n      },\n      {\n        name: 'Google',\n        type: 'bar',\n        stack: 'Search Engine',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [120, 132, 101, 134, 290, 230, 220],\n      },\n      {\n        name: 'Bing',\n        type: 'bar',\n        stack: 'Search Engine',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [60, 72, 71, 74, 190, 130, 110],\n      },\n      {\n        name: 'Others',\n        type: 'bar',\n        stack: 'Search Engine',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [62, 82, 91, 84, 109, 110, 120],\n      },\n    ],\n  });\n<\/script>\n")))}u.isMDXComponent=!0}}]);