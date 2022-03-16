"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[167],{855:(e,t,n)=>{n.d(t,{BZ:()=>u,IB:()=>l,U4:()=>r,Wb:()=>i,hU:()=>p,j6:()=>s,rD:()=>c,zM:()=>a});var a="Developer",r="$YOUR_USER_API_KEY";function i(e){return e.activeUserState||{}}function o(e){return i(e).context}function s(e,t){e.activeUserState=e.activeUserState||{},e.activeUserState.context=t}function u(e){var t,n=i(e);return!n||(null==(t=n.isLoading)||t)}function c(e,t){e.activeUserState=e.activeUserState||{},e.activeUserState.isLoading=t}function l(e){var t=o(e);if(t)return t.apiKey}function p(e){var t=o(e);if(t&&t.user)return t.user.primaryName}},9484:(e,t,n)=>{n.d(t,{B:()=>v});var a=n(855),r=n(5861),i=n(7757),o=n.n(i),s=n(6188),u=JSON.stringify({operationName:null,variables:{},query:"{\n  getActiveUserDevPortalContext {\n    ... on ActiveUserDevPortalContextDto {\n      userId\n      apiKey\n      user {\n        id\n        primaryName\n      }\n    }\n  }\n}\n"}),c=JSON.stringify({operationName:null,variables:{},query:"{\n      getUserSessions {\n        active\n        userId\n      }\n    }\n"}),l={"content-type":"application/json"};function p(e,t){return fetch((0,s.S)(t)+"/graphql/getActiveUserDevPortalContext",{method:"POST",headers:Object.assign({},l,{uid:e}),credentials:"include",mode:"cors",body:u}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getActiveUserDevPortalContext)||{}}))}function d(e){return fetch((0,s.S)(e)+"/graphql/getUserSessions",{method:"POST",headers:l,credentials:"include",mode:"cors",body:c}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getUserSessions)||[]}))}function f(){return(f=(0,r.Z)(o().mark((function e(t){var n,a,r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:if(n=e.sent,(a=n.filter((function(e){return e.active}))).length){e.next=6;break}return e.abrupt("return",{});case 6:return r=a[0].userId,e.next=9,p(r,t);case 9:return i=e.sent,e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=!1,v=function(e,t){var n=e.customFields.runtime,r=(0,a.Wb)(e);h||r.isLoading||r.context||(h=!0,function(e){return f.apply(this,arguments)}(n).then((function(n){h=!1,(0,a.rD)(e,!1),(0,a.j6)(e,n),t(Date.now())})).catch((function(){h=!1,(0,a.rD)(e,!1),t(Date.now())})))}},8430:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(2263),r=n(1736),i=n(7294),o=n(855),s=n(9484),u=n(6188);function c(e){var t,n=e.children,c=e.language,l=(0,i.useState)(Date.now()),p=(l[0],l[1]),d=(0,a.Z)().siteConfig;(0,i.useEffect)((function(){(0,s.B)(d,p)}),[]);var f=null!=(t=(0,o.IB)(d))?t:o.U4,h="string"==typeof n?[n]:Array.isArray(n)?n:[],v=(0,u.S)(d),m=h.map((function(e){return"string"==typeof e?e.replace(new RegExp("#USER_API_KEY","g"),f).replace(new RegExp("#BASE_URL","g"),v):e}));return i.createElement(r.Z,{language:c},m)}},6188:(e,t,n)=>{n.d(t,{S:()=>r});var a="https://tapeapp.com";function r(e){var t,n="string"==typeof e?e:null==e||null==(t=e.customFields)?void 0:t.runtime;return"PRD"===n.toUpperCase()?a:"DEV"===n.toUpperCase()?"http://localhost:3000":a}},5580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=(n(2263),n(1736),n(9484),n(8430),["components"]),s={id:"api-reference",title:"API Reference",sidebar_label:"API Reference"},u="API Reference",c={unversionedId:"api/api-reference",id:"api/api-reference",title:"API Reference",description:"The Tape API follows the REST specification. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.",source:"@site/docs/api/api-reference.md",sourceDirName:"api",slug:"/api/api-reference",permalink:"/docs/api/api-reference",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/api-reference.md",tags:[],version:"current",frontMatter:{id:"api-reference",title:"API Reference",sidebar_label:"API Reference"},sidebar:"mainSidebar",next:{title:"Pagination",permalink:"/docs/api/pagination"}},l={},p=[{value:"Base URL",id:"base-url",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Personal API keys",id:"personal-api-keys",level:3},{value:"OAuth2 Authentication Flow",id:"oauth2-authentication-flow",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-reference"},"API Reference"),(0,i.kt)("p",null,"The Tape API follows the REST specification. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs."),(0,i.kt)("h2",{id:"base-url"},"Base URL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"https://api.tapeapp.com/\n")),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("h3",{id:"personal-api-keys"},"Personal API keys"),(0,i.kt)("p",null,"The easiest way to get started with the Tape API is to use personal API keys to authenticate requests. You can view and manage your API keys in your ",(0,i.kt)("a",{parentName:"p",href:"https://tapeapp.com/tape/(focus//root-modal:user-settings/profile)"},"Tape user settings"),"."),(0,i.kt)("p",null,"Your personal API key carries many privileges, so to keep it secure! Avoid sharing it in public environments, such as GitHub, client-side code, and so forth. You can regenerate it anytime, the previuos one will not work in that case."),(0,i.kt)("p",null,"Authentication to the API is performed via HTTP Basic Auth. Provide your API key as the basic auth username value, providing a password is not required."),(0,i.kt)("p",null,"In case you need to authenticate via bearer auth, use ",(0,i.kt)("inlineCode",{parentName:"p"},'-H "Authorization: Bearer KEY"')," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"-u KEY"),"."),(0,i.kt)("p",null,"All API requests are to be made over HTTPS, while calls made over plain HTTP will fail. API requests without authentication will also fail."),(0,i.kt)("h3",{id:"oauth2-authentication-flow"},"OAuth2 Authentication Flow"),(0,i.kt)("p",null,"In order to develop scalable integrations and applications around Tape, there will be an OAuth2 authentication flow in the future. Feel free to reach out to ",(0,i.kt)("a",{parentName:"p",href:"mailto:developers@tapeapp.com"},"developers@tapeapp.com")," to vote for that feature."))}f.isMDXComponent=!0}}]);