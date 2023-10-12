(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[8592],{7757:(e,t,n)=>{e.exports=n(5666)},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,h=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7859:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(2263),o=n(2792),a=n(1736),i=n(6010),c=n(7294);const l="codeBlock_FKPJ";function u(e){var t=e.children,n=e.language,u=e.title,s=(0,c.useState)((0,o.W5)()),p=s[0],f=s[1];(0,c.useEffect)((0,o.kw)((0,r.Z)(),f),[]);var d=(0,o.hd)(p),h=(0,o.jM)(p),v=(0,o.dz)(p),y=(0,o.xe)(p);function m(e){return(e||"").replace(new RegExp("#USER_API_KEY","g"),d).replace(new RegExp("#BASE_URL","g"),y).replace(new RegExp("#RECORD_ID","g"),h).replace(new RegExp("#RECORD_TITLE","g"),v)}var g=("string"==typeof t?[t]:Array.isArray(t)?t:[]).map((function(e){return"string"==typeof e?m(e):e})),b=m(u);return c.createElement("div",{className:(0,i.Z)(l)},c.createElement(a.Z,{title:b,language:n},g))}},2792:(e,t,n)=>{"use strict";n.d(t,{hd:()=>L,M:()=>N,hU:()=>j,S$:()=>P,W5:()=>i,jM:()=>_,dz:()=>S,xe:()=>E,kw:()=>C});var r,o,a=(r=[],o={initializing:!1,runtime:"PRD",activeUserContext:void 0,activeUserContextIsLoading:!0,demoRecord:void 0,demoRecordIsLoading:!0},{get:function(){return o},set:function(e){o!==e&&(o=e,r.forEach((function(e){return e(o)})))},subscribe:function(e){return r.push(e),function(){return function(e){r=r.filter((function(t){return t!==e}))}(e)}}});function i(){return a.get()}function c(e){a.set(e)}function l(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(u){return void n(u)}c.done?t(l):Promise.resolve(l).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){l(a,r,o,i,c,"next",e)}function c(e){l(a,r,o,i,c,"throw",e)}i(void 0)}))}}var s=n(7757),p=n.n(s);function f(e){return"DEV"===e?"http://localhost:3000":"https://tapeapp.com"}var d=JSON.stringify({operationName:null,variables:{},query:"{\n  getActiveUserDevPortalContext {\n    ... on ActiveUserDevPortalContextDto {\n      userId\n      apiKey\n      user {\n        id\n        primaryName\n      }\n    }\n  }\n}\n"}),h=JSON.stringify({operationName:null,variables:{},query:"{\n      getUserSessions {\n        active\n        userId\n      }\n    }\n"});function v(e,t){return fetch(e+"/graphql/getActiveUserDevPortalContext",{method:"POST",headers:{"content-type":"application/json",uid:t},credentials:"include",mode:"cors",body:d}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getActiveUserDevPortalContext)||{}}))}function y(e){return fetch(e+"/graphql/getUserSessions",{method:"POST",headers:{"content-type":"application/json"},credentials:"include",mode:"cors",body:h}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getUserSessions)||[]}))}function m(e){return g.apply(this,arguments)}function g(){return(g=u(p().mark((function e(t){var n,r,o,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:if(n=e.sent,(r=n.filter((function(e){return e.active}))).length){e.next=6;break}return e.abrupt("return",{});case 6:return o=r[0].userId,e.next=9,v(t,o);case 9:return a=e.sent,e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=JSON.stringify({operationName:null,variables:{},query:"{\n  getActiveUserDevPortalDemoBlabItem {\n    id\n    title\n  }\n}"});function k(e,t){return fetch(e+"/graphql/getActiveUserDevPortalDemoRecord",{method:"POST",headers:{"content-type":"application/json",uid:t},credentials:"include",mode:"cors",body:b}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getActiveUserDevPortalDemoBlabItem)||{}}))}function w(){return(w=u(p().mark((function e(t){var n,r,o,a,l;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i().initializing){e.next=2;break}return e.abrupt("return");case 2:return c(Object.assign({},i(),{initializing:!0})),n=f(t),e.prev=4,e.next=7,m(n);case 7:if(o=e.sent,c(Object.assign({},i(),{activeUserContext:o,activeUserContextIsLoading:!1})),!(a=null==(r=o.user)?void 0:r.id)){e.next=15;break}return e.next=13,k(n,a);case 13:l=e.sent,c(Object.assign({},i(),{demoRecord:l,demoRecordIsLoading:!1}));case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(4),console.error(e.t0),c(Object.assign({},i(),{activeUserContextIsLoading:!1,demoRecordIsLoading:!1}));case 21:case"end":return e.stop()}}),e,null,[[4,17]])})))).apply(this,arguments)}function x(e){return e.runtime}function E(e){return function(e){return"DEV"===e?"http://localhost:3000":"https://api.tapeapp.com"}(x(e))}function O(e){var t;return null!=(t=e.activeUserContext)?t:{}}function N(e){return e.activeUserContextIsLoading}function L(e){var t;return null!=(t=function(e){return O(e).apiKey}(e))?t:"user_key_replace_with_your_api_key"}function j(e){var t;return null==(t=O(e).user)?void 0:t.primaryName}function P(e){var t;return null!=(t=j(e))?t:"Developer"}function T(e){var t;return null!=(t=e.demoRecord)?t:{}}function _(e){var t;return null!=(t=function(e){return T(e).id}(e))?t:123}function S(e){var t;return null!=(t=function(e){return T(e).title}(e))?t:"Demo Record"}function C(e,t){var n,r,o=((null==e||null==(n=e.siteConfig)||null==(r=n.customFields)?void 0:r.runtime)||"PRD").trim().toUpperCase();return x(i())!==o&&c(Object.assign({},i(),{runtime:o})),function(e){w.apply(this,arguments)}(o),function(){return function(e){return a.subscribe(e)}(t)}}},1736:(e,t,n)=>{"use strict";n.d(t,{Z:()=>N});var r=n(7462),o=n(7294),a=n(6010);const i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var c={Prism:n(7410).default,theme:i};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var s=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},f=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=u({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=u({},n,{backgroundColor:null}),o};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const v=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=u({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==o&&(a.style=void 0!==a.style?u({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),l(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var i=r?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(c))}})),l(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,i=u({},h(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?u({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),l(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,i=0,c=[],l=[c];i>-1;){for(;(a=r[i]++)<o[i];){var u=void 0,d=t[i],h=n[i][a];if("string"==typeof h?(d=i>0?d:["plain"],u=h):(d=f(d,h.type),h.alias&&(d=f(d,h.alias)),u=h.content),"string"==typeof u){var v=u.split(s),y=v.length;c.push({types:d,content:v[0]});for(var m=1;m<y;m++)p(c),l.push(c=[]),c.push({types:d,content:v[m]})}else i++,t.push(d),n.push(u),r.push(0),o.push(u.length)}i--,t.pop(),n.pop(),r.pop(),o.pop()}return p(c),l}(void 0!==i?this.tokenize(t,r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var y=n(5999),m=n(3725);const g="codeBlockContainer_I0IT",b="codeBlockContent_wNvx",k="codeBlockTitle_BvAR",w="codeBlock_jd64",x="codeBlockStandalone_csWH",E="copyButton_wuS7",O="codeBlockLines_mRuA";function N(e){var t,n=e.children,i=e.className,l=void 0===i?"":i,u=e.metastring,s=e.title,p=e.language,f=(0,m.LU)().prism,d=(0,o.useState)(!1),h=d[0],N=d[1],L=(0,o.useState)(!1),j=L[0],P=L[1];(0,o.useEffect)((function(){P(!0)}),[]);var T=(0,m.bc)(u)||s,_=(0,m.pJ)();if(o.Children.toArray(n).some((function(e){return(0,o.isValidElement)(e)})))return o.createElement(v,(0,r.Z)({},c,{key:String(j),theme:_,code:"",language:"text"}),(function(e){var t=e.className,r=e.style;return o.createElement("pre",{tabIndex:0,className:(0,a.Z)(t,x,"thin-scrollbar",g,l,m.kM.common.codeBlock),style:r},o.createElement("code",{className:O},n))}));var S=Array.isArray(n)?n.join(""):n,C=null!=(t=null!=p?p:(0,m.Vo)(l))?t:f.defaultLanguage,D=(0,m.nZ)(S,u,C),R=D.highlightLines,I=D.code,A=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var i=document.getSelection(),c=!1;i.rangeCount>0&&(c=i.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var l=!1;try{l=document.execCommand("copy")}catch(u){}o.remove(),c&&(i.removeAllRanges(),i.addRange(c)),a&&a.focus()}(I),N(!0),setTimeout((function(){return N(!1)}),2e3)};return o.createElement(v,(0,r.Z)({},c,{key:String(j),theme:_,code:I,language:null!=C?C:"text"}),(function(e){var t,n=e.className,i=e.style,c=e.tokens,u=e.getLineProps,s=e.getTokenProps;return o.createElement("div",{className:(0,a.Z)(g,l,(t={},t["language-"+C]=C&&!l.includes("language-"+C),t),m.kM.common.codeBlock)},T&&o.createElement("div",{style:i,className:k},T),o.createElement("div",{className:(0,a.Z)(b,C)},o.createElement("pre",{tabIndex:0,className:(0,a.Z)(n,w,"thin-scrollbar"),style:i},o.createElement("code",{className:O},c.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=u({line:e,key:t});return R.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),o.createElement("span",(0,r.Z)({key:t},n),e.map((function(e,t){return o.createElement("span",(0,r.Z)({key:t},s({token:e,key:t})))})),o.createElement("br",null))})))),o.createElement("button",{type:"button","aria-label":(0,y.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.Z)(E,"clean-btn"),onClick:A},h?o.createElement(y.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(y.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7294);function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(7462),o=n(7294),a=n(2389),i=n(3725),c=n(6010);const l="tabItem_LplD";function u(e){var t,n,a,u=e.lazy,s=e.block,p=e.defaultValue,f=e.values,d=e.groupId,h=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),m=(0,i.lx)(y,(function(e,t){return e.value===t.value}));if(m.length>0)throw new Error('Docusaurus error: Duplicate values "'+m.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),k=b.tabGroupChoices,w=b.setTabGroupChoices,x=(0,o.useState)(g),E=x[0],O=x[1],N=[],L=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=k[d];null!=j&&j!==E&&y.some((function(e){return e.value===j}))&&O(j)}var P=function(e){var t=e.currentTarget,n=N.indexOf(t),r=y[n].value;r!==E&&(L(t),O(r),null!=d&&w(d,r))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;n=N[r]||N[0];break;case"ArrowLeft":var o=N.indexOf(e.currentTarget)-1;n=N[o]||N[N.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":s},h)},y.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:P,onClick:P},a,{className:(0,c.Z)("tabs__item",l,null==a?void 0:a.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),u?(0,o.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function s(e){var t=(0,a.Z)();return o.createElement(u,(0,r.Z)({key:String(t)},e))}},5666:e=>{var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),i=new P(r||[]);return a._invoke=function(e,t,n){var r=p;return function(o,a){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return _()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=N(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var l=s(e,t,n);if("normal"===l.type){if(r=n.done?h:f,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=h,n.method="throw",n.arg=l.arg)}}}(e,n,i),a}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var p="suspendedStart",f="suspendedYield",d="executing",h="completed",v={};function y(){}function m(){}function g(){}var b={};l(b,a,(function(){return this}));var k=Object.getPrototypeOf,w=k&&k(k(T([])));w&&w!==n&&r.call(w,a)&&(b=w);var x=g.prototype=y.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(o,a,i,c){var l=s(e[o],e,a);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==typeof p&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(p).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function N(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,N(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function T(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:_}}function _(){return{value:t,done:!0}}return m.prototype=g,l(x,"constructor",g),l(g,"constructor",m),m.displayName=l(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,l(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},E(O.prototype),l(O.prototype,i,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new O(u(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(x),l(x,c,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=T,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:T(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=t}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}}]);