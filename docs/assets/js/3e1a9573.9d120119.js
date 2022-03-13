"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[306],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),b=c(n),d=o,m=b["".concat(u,".").concat(d)]||b[d]||s[d]||a;return n?r.createElement(m,l(l({ref:e},p),{},{components:n})):r.createElement(m,l({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=b;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},6005:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={id:"button",title:"Buttons",sidebar_label:"Buttons"},u=void 0,c={unversionedId:"calculation/example/button",id:"calculation/example/button",title:"Buttons",description:'The calculation field has support for HTML buttons. The "type" attribute can be used to pick one of the available colors & styles:',source:"@site/docs/calculation/example/button.md",sourceDirName:"calculation/example",slug:"/calculation/example/button",permalink:"/docs/calculation/example/button",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/calculation/example/button.md",tags:[],version:"current",frontMatter:{id:"button",title:"Buttons",sidebar_label:"Buttons"},sidebar:"mainSidebar",previous:{title:"Links",permalink:"/docs/calculation/example/link"},next:{title:"Contribute",permalink:"/docs/contribute"}},p={},s=[],b={toc:s};function d(t){var e=t.components,n=(0,o.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'The calculation field has support for HTML buttons. The "type" attribute can be used to pick one of the available colors & styles:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<style>\n  button {\n    margin: 4px 4px;\n  }\n</style>\n\n<button>Default button</button>\n<button type="danger">Danger button</button>\n<button type="outline">Outline button</button>\n<button type="outline-danger">Outline danger button</button>\n')),(0,a.kt)("p",null,"Here's how the button types from above will be rendered:"),(0,a.kt)("img",{width:"300",src:"/img/docs/calculation/calculation-buttons.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"Executing custom JavaScript code in the browser of the user is not permitted due to security reasons. So you cannot execute JavaScript in the ",(0,a.kt)("inlineCode",{parentName:"p"},"onclick")," event handler of the button. However, wrapping the button in an anchor gives you a clickable button that opens the specified URL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<a target="_blank" href="https://get.tapeapp.com">\n  <button>Open Tape</button>\n</a>\n')),(0,a.kt)("p",null,"The full calculation field script might look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// Reference the "Link" field of your app, which can contain multiple links\nconst links = @Link;\n\n// Get the first link\nconst firstLinkUrl = links[0];\n\n// Result is the HTML button and anchor to open the link in a new tab\n`\n<a target="_blank" href="${firstLinkUrl}">\n  <button>Open Link</button>\n</a>\n`\n')))}d.isMDXComponent=!0}}]);