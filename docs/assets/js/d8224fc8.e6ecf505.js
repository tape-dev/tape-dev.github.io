"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[196],{855:(e,t,n)=>{n.d(t,{BZ:()=>u,IB:()=>l,U4:()=>a,Wb:()=>i,hU:()=>d,j6:()=>s,rD:()=>c,zM:()=>r});var r="Developer",a="$YOUR_USER_API_KEY";function i(e){return e.activeUserState||{}}function o(e){return i(e).context}function s(e,t){e.activeUserState=e.activeUserState||{},e.activeUserState.context=t}function u(e){var t,n=i(e);return!n||(null==(t=n.isLoading)||t)}function c(e,t){e.activeUserState=e.activeUserState||{},e.activeUserState.isLoading=t}function l(e){var t=o(e);if(t)return t.apiKey}function d(e){var t=o(e);if(t&&t.user)return t.user.primaryName}},9484:(e,t,n)=>{n.d(t,{B:()=>v});var r=n(855),a=n(5861),i=n(7757),o=n.n(i),s=n(6188),u=JSON.stringify({operationName:null,variables:{},query:"{\n  getActiveUserDevPortalContext {\n    ... on ActiveUserDevPortalContextDto {\n      userId\n      apiKey\n      user {\n        id\n        primaryName\n      }\n    }\n  }\n}\n"}),c=JSON.stringify({operationName:null,variables:{},query:"{\n      getUserSessions {\n        active\n        userId\n      }\n    }\n"}),l={"content-type":"application/json"};function d(e,t){return fetch((0,s.S)(t)+"/graphql/getActiveUserDevPortalContext",{method:"POST",headers:Object.assign({},l,{uid:e}),credentials:"include",mode:"cors",body:u}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getActiveUserDevPortalContext)||{}}))}function p(e){return fetch((0,s.S)(e)+"/graphql/getUserSessions",{method:"POST",headers:l,credentials:"include",mode:"cors",body:c}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getUserSessions)||[]}))}function g(){return(g=(0,a.Z)(o().mark((function e(t){var n,r,a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:if(n=e.sent,(r=n.filter((function(e){return e.active}))).length){e.next=6;break}return e.abrupt("return",{});case 6:return a=r[0].userId,e.next=9,d(a,t);case 9:return i=e.sent,e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=!1,v=function(e,t){var n=e.customFields.runtime,a=(0,r.Wb)(e);f||a.isLoading||a.context||(f=!0,function(e){return g.apply(this,arguments)}(n).then((function(n){f=!1,(0,r.rD)(e,!1),(0,r.j6)(e,n),t(Date.now())})).catch((function(){f=!1,(0,r.rD)(e,!1),t(Date.now())})))}},8430:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(2263),a=n(1736),i=n(7294),o=n(855),s=n(9484),u=n(6188);function c(e){var t,n=e.children,c=e.language,l=(0,i.useState)(Date.now()),d=(l[0],l[1]),p=(0,r.Z)().siteConfig;(0,i.useEffect)((function(){(0,s.B)(p,d)}),[]);var g=null!=(t=(0,o.IB)(p))?t:o.U4,f="string"==typeof n?[n]:Array.isArray(n)?n:[],v=(0,u.S)(p),m=f.map((function(e){return"string"==typeof e?e.replace(new RegExp("#USER_API_KEY","g"),g).replace(new RegExp("#BASE_URL","g"),v):e}));return i.createElement(a.Z,{language:c},m)}},6188:(e,t,n)=>{n.d(t,{S:()=>a});var r="https://tapeapp.com";function a(e){var t,n="string"==typeof e?e:null==e||null==(t=e.customFields)?void 0:t.runtime;return"PRD"===n.toUpperCase()?r:"DEV"===n.toUpperCase()?"http://localhost:3000":r}},6956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>f,default:()=>S,frontMatter:()=>g,metadata:()=>v,toc:()=>h});var r=n(7462),a=n(3366),i=n(7294),o=n(3905),s=n(2263),u=n(855),c=n(9484),l=n(8430);function d(){var e,t=(0,i.useState)(Date.now()),n=(t[0],t[1]),r=(0,s.Z)().siteConfig,a=null!=(e=(0,u.hU)(r))?e:"",o=(0,u.BZ)(r);return(0,i.useEffect)((function(){(0,c.B)(r,n)}),[]),o?"":a?i.createElement("div",null,i.createElement("span",null,"Hey ",a," \ud83d\udc4b Looks like you are already logged into Tape, so we were able to prefill your user API key and some IDs for records, fields and so on in the examples requests below. Here's you personal User API token:",i.createElement("br",null),i.createElement("br",null),i.createElement(l.Z,null,"#USER_API_KEY"))):i.createElement("div",null,i.createElement("span",null,"Hey there \ud83d\udc4b Looks like you are currently not logged into Tape. All examples in this guide will be pre-filled with stub data. To change this, log into your Tape account and"," "),i.createElement("p",null,i.createElement("a",{target:"_blank",href:"https://tapeapp.com/signin"},i.createElement("button",{style:{margin:"9px 0px"}},"Login here"))))}var p=["components"],g={id:"getting-started",title:"Getting Started"},f=void 0,v={unversionedId:"guide/getting-started",id:"guide/getting-started",title:"Getting Started",description:"Fetch your first Record",source:"@site/docs/guide/getting-started.md",sourceDirName:"guide",slug:"/guide/getting-started",permalink:"/docs/guide/getting-started",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/guide/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"guidesSidebar"},m={},h=[{value:"Fetch your first Record",id:"fetch-your-first-record",level:2}],y={toc:h};function S(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(d,{mdxType:"UserLogin"}),(0,o.kt)("h2",{id:"fetch-your-first-record"},"Fetch your first Record"),(0,o.kt)(l.Z,{language:"shell",mdxType:"ApiKeyCodeblock"},"curl #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY:\n# The colon prevents curl from asking for a password.\n"))}S.isMDXComponent=!0}}]);