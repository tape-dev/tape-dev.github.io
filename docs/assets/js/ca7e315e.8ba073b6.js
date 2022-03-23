"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[906],{7859:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(2263),a=t(1483),i=t(1736),l=t(6010),o=t(7294);const u="codeBlock_FKPJ";function s(e){var n=e.children,t=e.language,s=e.title,d=(0,o.useState)((0,a.W5)()),p=d[0],c=d[1];(0,o.useEffect)((0,a.kw)((0,r.Z)(),c),[]);var v=(0,a.hd)(p),m=(0,a.jM)(p),f=(0,a.dz)(p),g=(0,a.xe)(p);function h(e){return(e||"").replace(new RegExp("#USER_API_KEY","g"),v).replace(new RegExp("#BASE_URL","g"),g).replace(new RegExp("#RECORD_ID","g"),m).replace(new RegExp("#RECORD_TITLE","g"),f)}var b=("string"==typeof n?[n]:Array.isArray(n)?n:[]).map((function(e){return"string"==typeof e?h(e):e})),y=h(s);return o.createElement("div",{className:(0,l.Z)(u)},o.createElement(i.Z,{title:y,language:t},b))}},4757:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(7294);function a(e){var n,t=e.method,a=e.url;switch(t){case"GET":n="#007959";break;case"POST":n="#0071BB";break;case"PUT":n="#DEA700";break;case"DELETE":n="#DF245E"}return r.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"15px",lineHeight:"15px",marginBottom:"13px"}},r.createElement("span",{style:{backgroundColor:n,color:"var(--tape-color-lightest)",borderRadius:"999px",padding:"4px 9px 3px 9px",fontWeight:700,fontSize:"11px",lineHeight:"11px"}},t.toUpperCase()),r.createElement("span",{style:{color:"var(--tape-color-darker)",marginLeft:"9px",marginTop:"2px"}},a))}},1483:(e,n,t)=>{t.d(n,{hd:()=>S,M:()=>R,hU:()=>U,S$:()=>I,W5:()=>l,jM:()=>N,dz:()=>w,xe:()=>x,kw:()=>D});var r,a,i=(r=[],a={initializing:!1,runtime:"PRD",activeUserContext:void 0,activeUserContextIsLoading:!0,demoRecord:void 0,demoRecordIsLoading:!0},{get:function(){return a},set:function(e){a!==e&&(a=e,r.forEach((function(e){return e(a)})))},subscribe:function(e){return r.push(e),function(){return function(e){r=r.filter((function(n){return n!==e}))}(e)}}});function l(){return i.get()}function o(e){i.set(e)}var u=t(5861),s=t(7757),d=t.n(s);function p(e){return"DEV"===e?"http://localhost:3000":"https://tapeapp.com"}var c=JSON.stringify({operationName:null,variables:{},query:"{\n  getActiveUserDevPortalContext {\n    ... on ActiveUserDevPortalContextDto {\n      userId\n      apiKey\n      user {\n        id\n        primaryName\n      }\n    }\n  }\n}\n"}),v=JSON.stringify({operationName:null,variables:{},query:"{\n      getUserSessions {\n        active\n        userId\n      }\n    }\n"});function m(e,n){return fetch(e+"/graphql/getActiveUserDevPortalContext",{method:"POST",headers:{"content-type":"application/json",uid:n},credentials:"include",mode:"cors",body:c}).then((function(e){return e.text()})).then((function(e){var n,t=JSON.parse(e);return(null==t||null==(n=t.data)?void 0:n.getActiveUserDevPortalContext)||{}}))}function f(e){return fetch(e+"/graphql/getUserSessions",{method:"POST",headers:{"content-type":"application/json"},credentials:"include",mode:"cors",body:v}).then((function(e){return e.text()})).then((function(e){var n,t=JSON.parse(e);return(null==t||null==(n=t.data)?void 0:n.getUserSessions)||[]}))}function g(e){return h.apply(this,arguments)}function h(){return(h=(0,u.Z)(d().mark((function e(n){var t,r,a,i;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(n);case 2:if(t=e.sent,(r=t.filter((function(e){return e.active}))).length){e.next=6;break}return e.abrupt("return",{});case 6:return a=r[0].userId,e.next=9,m(n,a);case 9:return i=e.sent,e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=JSON.stringify({operationName:null,variables:{},query:"{\n  getActiveUserDevPortalDemoBlabItem {\n    id\n    title\n  }\n}"});function y(e,n){return fetch(e+"/graphql/getActiveUserDevPortalDemoRecord",{method:"POST",headers:{"content-type":"application/json",uid:n},credentials:"include",mode:"cors",body:b}).then((function(e){return e.text()})).then((function(e){var n,t=JSON.parse(e);return(null==t||null==(n=t.data)?void 0:n.getActiveUserDevPortalDemoBlabItem)||{}}))}function _(){return(_=(0,u.Z)(d().mark((function e(n){var t,r,a,i,u;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l().initializing){e.next=2;break}return e.abrupt("return");case 2:return o(Object.assign({},l(),{initializing:!0})),t=p(n),e.prev=4,e.next=7,g(t);case 7:if(a=e.sent,o(Object.assign({},l(),{activeUserContext:a,activeUserContextIsLoading:!1})),!(i=null==(r=a.user)?void 0:r.id)){e.next=15;break}return e.next=13,y(t,i);case 13:u=e.sent,o(Object.assign({},l(),{demoRecord:u,demoRecordIsLoading:!1}));case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(4),console.error(e.t0),o(Object.assign({},l(),{activeUserContextIsLoading:!1,demoRecordIsLoading:!1}));case 21:case"end":return e.stop()}}),e,null,[[4,17]])})))).apply(this,arguments)}function k(e){return e.runtime}function x(e){return function(e){return"DEV"===e?"http://localhost:3000":"https://api.tapeapp.com"}(k(e))}function E(e){var n;return null!=(n=e.activeUserContext)?n:{}}function R(e){return e.activeUserContextIsLoading}function S(e){var n;return null!=(n=function(e){return E(e).apiKey}(e))?n:"user_key_replace_with_your_api_key"}function U(e){var n;return null==(n=E(e).user)?void 0:n.primaryName}function I(e){var n;return null!=(n=U(e))?n:"Developer"}function T(e){var n;return null!=(n=e.demoRecord)?n:{}}function N(e){var n;return null!=(n=function(e){return T(e).id}(e))?n:123}function w(e){var n;return null!=(n=function(e){return T(e).title}(e))?n:"Demo Record"}function D(e,n){var t,r,a=((null==e||null==(t=e.siteConfig)||null==(r=t.customFields)?void 0:r.runtime)||"PRD").trim().toUpperCase();return k(l())!==a&&o(Object.assign({},l(),{runtime:a})),function(e){_.apply(this,arguments)}(a),function(){return function(e){return i.subscribe(e)}(n)}}},8215:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(7294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(7462),a=t(7294),i=t(2389),l=t(3725),o=t(6010);const u="tabItem_LplD";function s(e){var n,t,i,s=e.lazy,d=e.block,p=e.defaultValue,c=e.values,v=e.groupId,m=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,l.lx)(g,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(n=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=f[0])?void 0:i.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),_=y.tabGroupChoices,k=y.setTabGroupChoices,x=(0,a.useState)(b),E=x[0],R=x[1],S=[],U=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var I=_[v];null!=I&&I!==E&&g.some((function(e){return e.value===I}))&&R(I)}var T=function(e){var n=e.currentTarget,t=S.indexOf(n),r=g[t].value;r!==E&&(U(n),R(r),null!=v&&k(v,r))},N=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=S.indexOf(e.currentTarget)+1;t=S[r]||S[0];break;case"ArrowLeft":var a=S.indexOf(e.currentTarget)-1;t=S[a]||S[S.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},m)},g.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return S.push(e)},onKeyDown:N,onFocus:T,onClick:T},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function d(e){var n=(0,i.Z)();return a.createElement(s,(0,r.Z)({key:String(n)},e))}},7681:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>v,toc:()=>f});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=t(4757),o=t(9877),u=t(8215),s=t(7859),d=["components"],p={id:"user",title:"User Field Value",sidebar_label:"User"},c=void 0,v={unversionedId:"api/resource/field-value/user",id:"api/resource/field-value/user",title:"User Field Value",description:"A user field value consists of its value property which holds a reference to a user. A user has the properties userid (unique ID), name (the username), orgId (ID of the user's organization) and others. A SINGLEUSER field value holds at most one user while a MULTIUSER field value can hold multiple users.",source:"@site/docs/api/resource/field-value/user.md",sourceDirName:"api/resource/field-value",slug:"/api/resource/field-value/user",permalink:"/docs/api/resource/field-value/user",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/field-value/user.md",tags:[],version:"current",frontMatter:{id:"user",title:"User Field Value",sidebar_label:"User"},sidebar:"mainSidebar",previous:{title:"Status",permalink:"/docs/api/resource/field-value/status"},next:{title:"Category",permalink:"/docs/api/resource/field-value/category"}},m={},f=[{value:"Record creation",id:"record-creation",level:2},{value:"Record retrieval",id:"record-retrieval",level:2},{value:"Record update",id:"record-update",level:2}],g={toc:f};function h(e){var n=e.components,t=(0,a.Z)(e,d);return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A user field value consists of its ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," property which holds a reference to a user. A user has the properties ",(0,i.kt)("inlineCode",{parentName:"p"},"user_id")," (unique ID), ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," (the username), ",(0,i.kt)("inlineCode",{parentName:"p"},"org_Id")," (ID of the user's organization) and others. A ",(0,i.kt)("inlineCode",{parentName:"p"},"SINGLE_USER")," field value holds at most one user while a ",(0,i.kt)("inlineCode",{parentName:"p"},"MULTI_USER")," field value can hold multiple users."),(0,i.kt)("h2",{id:"record-creation"},"Record creation"),(0,i.kt)(l.Z,{method:"POST",url:"https://api.tapeapp.com/v1/record/app/{app_id}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,'A user field value can be created as part of a record creation. Here is an example request body for creating a record with a value for the "Supervisor" field with ID 2, type ',(0,i.kt)("inlineCode",{parentName:"p"},"SINGLE_USER")," and external ID ",(0,i.kt)("inlineCode",{parentName:"p"},"supervisor"),' and a value for the "Interviewed by" field with ID 3, type ',(0,i.kt)("inlineCode",{parentName:"p"},"MULTI_USER")," and external ID ",(0,i.kt)("inlineCode",{parentName:"p"},"interviewed_by"),":"),(0,i.kt)(o.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)(s.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X POST #BASE_URL/v1/record/app/1  \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "supervisor": 1,\n      "interviewed_by": [4, 5]\n    }\n  }\' \n')),(0,i.kt)(u.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "supervisor": 1,\n    "interviewed_by": [4, 5]\n  }\n}\n')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "id": 1,\n  "title": "Zoe Maxwell",\n  "fields": [\n    {\n      "field_id": 2,\n      "slug": "supervisor",\n      "label": "Supervisor",\n      "type": "user",\n      "field_type": "SINGLE_USER",\n      "values": [\n        {\n          "value": {\n            "user_id": 1,\n            "mail": ["zoe@tapeapp.com"],\n            "image": null,\n            "name": "Zoe Maxwell",\n            "org_id": 1,\n            "type": "user"\n          }\n        }\n      ]\n    },\n    {\n      "field_id": 3,\n      "slug": "interviewed_by",\n      "label": "Interviewed by",\n      "field_type": "MULTI_USER",\n      "type": "user",\n      "values": [\n        {\n          "value": {\n            "user_id": 4,\n            "mail": ["dan@tapeapp.com"],\n            "image": null,\n            "name": "Dan Jacob",\n            "org_id": 1,\n            "type": "user"\n          }\n        },\n        {\n          "value": {\n            "user_id": 5,\n            "mail": ["sierra@tapeapp.com"],\n            "image": null,\n            "name": "Sierra Johns",\n            "org_id": 1,\n            "type": "user"\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"record-retrieval"},"Record retrieval"),(0,i.kt)(l.Z,{method:"GET",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,"A user field value can be retrieved as part of a record retrieval:"),(0,i.kt)(s.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "id": 1,\n  "title": "Zoe Maxwell",\n  "fields": [\n    {\n      "field_id": 2,\n      "slug": "supervisor",\n      "label": "Supervisor",\n      "type": "user",\n      "field_type": "SINGLE_USER",\n      "values": [\n        {\n          "value": {\n            "user_id": 1,\n            "mail": ["zoe@tapeapp.com"],\n            "image": null,\n            "name": "Zoe Maxwell",\n            "org_id": 1,\n            "type": "user"\n          }\n        }\n      ]\n    },\n    {\n      "field_id": 3,\n      "slug": "interviewed_by",\n      "label": "Interviewed by",\n      "field_type": "MULTI_USER",\n      "type": "user",\n      "values": [\n        {\n          "value": {\n            "user_id": 4,\n            "mail": ["dan@tapeapp.com"],\n            "image": null,\n            "name": "Dan Jacob",\n            "org_id": 1,\n            "type": "user"\n          }\n        },\n        {\n          "value": {\n            "user_id": 5,\n            "mail": ["sierra@tapeapp.com"],\n            "image": null,\n            "name": "Sierra Johns",\n            "org_id": 1,\n            "type": "user"\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"record-update"},"Record update"),(0,i.kt)(l.Z,{method:"PUT",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,"One or more user field values can be updated as part of a record update. Here is an example request body for updating multiple user field values of a record:"),(0,i.kt)(o.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)(s.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X PUT #BASE_URL/v1/record/1  \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "supervisor": 2,\n      "interviewed_by": [5]\n    }\n  }\' \n')),(0,i.kt)(u.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "supervisor": 2,\n    "interviewed_by": [5]\n  }\n}\n')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "id": 1,\n  "title": "Delaney Beatty",\n  "fields": [\n    {\n      "field_id": 2,\n      "slug": "supervisor",\n      "label": "Supervisor",\n      "type": "user",\n      "field_type": "SINGLE_USER",\n      "values": [\n        {\n          "value": {\n            "user_id": 2,\n            "mail": ["delaney@tapeapp.com"],\n            "image": null,\n            "name": "Delaney Beatty",\n            "org_id": 1,\n            "type": "user"\n          }\n        }\n      ]\n    },\n    {\n      "field_id": 3,\n      "slug": "interviewed_by",\n      "label": "Interviewed by",\n      "field_type": "MULTI_USER",\n      "type": "user",\n      "values": [\n        {\n          "value": {\n            "user_id": 5,\n            "mail": ["sierra@tapeapp.com"],\n            "image": null,\n            "name": "Sierra Johns",\n            "org_id": 1,\n            "type": "user"\n          }\n        }\n      ]\n    }\n  ]\n}\n')))}h.isMDXComponent=!0}}]);