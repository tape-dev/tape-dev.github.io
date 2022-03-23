"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[283],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5028:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"date-timezone",title:"Date & Timezone",sidebar_label:"Date & Timezone"},p="Date & Timezone",s={unversionedId:"api/date-timezone",id:"api/date-timezone",title:"Date & Timezone",description:"Datetime format",source:"@site/docs/api/date-timezone.md",sourceDirName:"api",slug:"/api/date-timezone",permalink:"/docs/api/date-timezone",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/date-timezone.md",tags:[],version:"current",frontMatter:{id:"date-timezone",title:"Date & Timezone",sidebar_label:"Date & Timezone"},sidebar:"mainSidebar",previous:{title:"Request Limits",permalink:"/docs/api/request-limits"},next:{title:"Record",permalink:"/docs/api/resource/record"}},m={},c=[{value:"Datetime format",id:"datetime-format",level:2},{value:"Date format",id:"date-format",level:2},{value:"Timezone support",id:"timezone-support",level:2}],d={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"date--timezone"},"Date & Timezone"),(0,o.kt)("h2",{id:"datetime-format"},"Datetime format"),(0,o.kt)("p",null,"The Tape API returns all dates as a formatted string, similar to ISO 8601 and in UTC timezone."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2022-02-01 15:00\n")),(0,o.kt)("p",null,"which would be equal to the following in standardized ISO 8601:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2022-02-01T15:00Z\n")),(0,o.kt)("p",null,"The format chosen by Tape is optimized for readability. While not included in the official ISO 8601 standard, most programming languages & libraries support the chosen format."),(0,o.kt)("h2",{id:"date-format"},"Date format"),(0,o.kt)("p",null,"Dates are represented as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2022-02-01\n")),(0,o.kt)("h2",{id:"timezone-support"},"Timezone support"),(0,o.kt)("p",null,"Tape supports time zone settings for users, however the API only works with UTC format, both for response and request bodies. When using the Tape web and mobile clients, users will see their dates properly formatted in their timezone, which is handled by browsers / client devices."))}u.isMDXComponent=!0}}]);