"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[167],{855:(e,t,n)=>{n.d(t,{BZ:()=>u,IB:()=>l,U4:()=>r,Wb:()=>i,hU:()=>p,j6:()=>s,rD:()=>c,zM:()=>a});var a="Tape Developer",r="user_key_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiLvv71cdTAwMDZcdTAwMTLvv73vv71cdTAwMWXvv73vv71U77-9Iiwic2NvcGUiOiJ1a192MSJ9.JTmsHguUWkP0b2dvwIZc2q8dsbjkDXg2FbZyC4_Sh20";function i(e){return e.activeUserState||{}}function o(e){return i(e).context}function s(e,t){e.activeUserState=e.activeUserState||{},e.activeUserState.context=t}function u(e){var t,n=i(e);return!n||(null==(t=n.isLoading)||t)}function c(e,t){e.activeUserState=e.activeUserState||{},e.activeUserState.isLoading=t}function l(e){var t=o(e);if(t)return t.apiKey}function p(e){var t=o(e);if(t&&t.user)return t.user.primaryName}},9484:(e,t,n)=>{n.d(t,{B:()=>h});var a=n(855),r=n(5861),i=n(7757),o=n.n(i),s=n(6188),u=JSON.stringify({operationName:null,variables:{},query:"{\n  getActiveUserDevPortalContext {\n    ... on ActiveUserDevPortalContextDto {\n      userId\n      apiKey\n      user {\n        id\n        primaryName\n      }\n    }\n  }\n}\n"}),c=JSON.stringify({operationName:null,variables:{},query:"{\n      getUserSessions {\n        active\n        userId\n      }\n    }\n"}),l={"content-type":"application/json"};function p(e,t){return fetch((0,s.S)(t)+"/graphql/getActiveUserDevPortalContext",{method:"POST",headers:Object.assign({},l,{uid:e}),credentials:"include",mode:"cors",body:u}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getActiveUserDevPortalContext)||{}}))}function d(e){return fetch((0,s.S)(e)+"/graphql/getUserSessions",{method:"POST",headers:l,credentials:"include",mode:"cors",body:c}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getUserSessions)||[]}))}function v(){return(v=(0,r.Z)(o().mark((function e(t){var n,a,r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:if(n=e.sent,(a=n.filter((function(e){return e.active}))).length){e.next=6;break}return e.abrupt("return",{});case 6:return r=a[0].userId,e.next=9,p(r,t);case 9:return i=e.sent,e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=!1,h=function(e,t){var n=e.customFields.runtime,r=(0,a.Wb)(e);f||r.isLoading||r.context||(f=!0,function(e){return v.apply(this,arguments)}(n).then((function(n){(0,a.rD)(e,!1),(0,a.j6)(e,n),t(Date.now())})).catch((function(e){console.error(e),f=!1})))}},6188:(e,t,n)=>{n.d(t,{S:()=>i});var a="http://localhost:3000",r="https://tapeapp.com";function i(e){var t,n,i="string"==typeof e?e:null==e||null==(t=e.customFields)?void 0:t.runtime;return"PRD"===i.toUpperCase()?r:"DEV"===i.toUpperCase()||(null!=(n=window.location.href)?n:"").includes("localhost")?a:r}},6101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>A,default:()=>P,frontMatter:()=>m,metadata:()=>g,toc:()=>y});var a=n(7462),r=n(3366),i=n(7294),o=n(3905),s=n(2263),u=n(1736),c=n(9484),l=n(855),p=n(6188),d=n(2389);function v(e){var t=e.children,n=e.fallback;return(0,d.Z)()?i.createElement(i.Fragment,null,t()):n||null}function f(e){var t,n=e.children,a=e.language,r=(0,i.useState)(Date.now()),o=(r[0],r[1]),d=(0,s.Z)().siteConfig;(0,i.useEffect)((function(){(0,c.B)(d,o)}),[]);var f=null!=(t=(0,l.IB)(d))?t:l.U4,h="string"==typeof n?[n]:Array.isArray(n)?n:[];return i.createElement(v,null,(function(){var e=(0,p.S)(d),t=h.map((function(t){return"string"==typeof t?t.replace(new RegExp("#USER_API_KEY","g"),f).replace(new RegExp("#BASE_URL","g"),e):t}));return i.createElement(u.Z,{language:a},t)}))}var h=["components"],m={id:"api-reference",title:"API Reference",sidebar_label:"API Reference"},A="API Reference",g={unversionedId:"api/api-reference",id:"api/api-reference",title:"API Reference",description:"The Tape API follows the REST specification. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.",source:"@site/docs/api/api-reference.md",sourceDirName:"api",slug:"/api/api-reference",permalink:"/docs/api/api-reference",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/api-reference.md",tags:[],version:"current",frontMatter:{id:"api-reference",title:"API Reference",sidebar_label:"API Reference"},sidebar:"mainSidebar",next:{title:"Pagination",permalink:"/docs/api/pagination"}},k={},y=[{value:"First example",id:"first-example",level:2},{value:"Base URL",id:"base-url",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Personal API keys",id:"personal-api-keys",level:3},{value:"OAuth2 Authentication Flow",id:"oauth2-authentication-flow",level:3}],b={toc:y};function P(e){var t=e.components,n=(0,r.Z)(e,h);return(0,o.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api-reference"},"API Reference"),(0,o.kt)("p",null,"The Tape API follows the REST specification. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs."),(0,o.kt)("h2",{id:"first-example"},"First example"),(0,o.kt)(f,{language:"sh",mdxType:"ApiKeyCodeblock"},"curl #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY:\n"),(0,o.kt)("h2",{id:"base-url"},"Base URL"),(0,o.kt)(f,{language:"sh",mdxType:"ApiKeyCodeblock"},"#BASE_URL"),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("h3",{id:"personal-api-keys"},"Personal API keys"),(0,o.kt)("p",null,"The easiest way to get started with the Tape API is to use personal API keys to authenticate requests. You can view and manage your API keys in your ",(0,o.kt)("a",{parentName:"p",href:"https://tapeapp.com/tape/(focus//root-modal:user-settings/profile)"},"Tape user settings"),"."),(0,o.kt)("p",null,"Your personal API key carries many privileges, so to keep it secure! Avoid sharing it in public environments, such as GitHub, client-side code, and so forth. You can regenerate it anytime, the previuos one will not work in that case."),(0,o.kt)("p",null,"Authentication to the API is performed via HTTP Basic Auth. Provide your API key as the basic auth username value, providing a password is not required."),(0,o.kt)("p",null,"In case you need to authenticate via bearer auth, use ",(0,o.kt)("inlineCode",{parentName:"p"},'-H "Authorization: Bearer KEY"')," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"-u KEY"),"."),(0,o.kt)("p",null,"All API requests are to be made over HTTPS, while calls made over plain HTTP will fail. API requests without authentication will also fail."),(0,o.kt)("h3",{id:"oauth2-authentication-flow"},"OAuth2 Authentication Flow"),(0,o.kt)("p",null,"In order to develop scalable integrations and applications around Tape, there will be an OAuth2 authentication flow in the future. Feel free to reach out to ",(0,o.kt)("a",{parentName:"p",href:"mailto:developers@tapeapp.com"},"developers@tapeapp.com")," to vote for that feature."))}P.isMDXComponent=!0}}]);