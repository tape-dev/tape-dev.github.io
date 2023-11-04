"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[5897],{3417:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=a(7859),s=a(9877),d=a(8215),c=["components"],l={id:"authentication",title:"Authentication",sidebar_label:"Authentication"},h=void 0,u={unversionedId:"api/authentication",id:"api/authentication",title:"Authentication",description:"Requests use the HTTP Authorization header to both authenticate and authorize operations. The Tape API accepts bearer tokens in this header. Each Tape user has an user API key associated with it that acts as a bearer token to authentciate with the API.",source:"@site/docs/api/authentication.md",sourceDirName:"api",slug:"/api/authentication",permalink:"/docs/api/authentication",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/authentication.md",tags:[],version:"current",frontMatter:{id:"authentication",title:"Authentication",sidebar_label:"Authentication"},sidebar:"mainSidebar",previous:{title:"Introduction",permalink:"/docs/api/introduction"},next:{title:"Pagination",permalink:"/docs/api/pagination"}},p={},m=[{value:"Authentication errors",id:"authentication-errors",level:2}],v={toc:m};function k(e){var t=e.components,a=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Requests use the HTTP ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header to both authenticate and authorize operations. The Tape API accepts bearer tokens in this header. Each Tape user has an user API key associated with it that acts as a bearer token to authentciate with the API."),(0,o.kt)("p",null,"Note that your API key carries the same privileges as your user account, so be sure to keep it secret! However, if your API key gets leaked, you can always deactivate it and generate a new one inside your user settings."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"User API key implications and limitations")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'It is also notable that as each API key belongs to a user, all changes made using that API key will show the respective user as author, e.g. inside the record\'s activity stream. This also leads to the fact that you will not receive notifications, if you follow a record and make a change using your own API key. A workaround is to have a dedicated user, e.g. called "API User" that will then act as a host to yield the key that will then be utilized.'))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Authentication via OAuth")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In the future, Tape plans to support authentication flows via OAuth. For now, the user API key is the only way of authentication."))),(0,o.kt)("p",null,"Here's an example of how to correctly set the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header:"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)(r.Z,{language:"shell",mdxType:"ContextCodeBlock"},'curl #BASE_URL/v1/record/1 \\\n  -H "Authorization: Bearer #USER_API_KEY"\n')),(0,o.kt)(d.Z,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,o.kt)(r.Z,{language:"http",mdxType:"ContextCodeBlock"},"GET /v1/record/1 HTTP/1.1\nHost: api.tapeapp.com\nAuthorization: Bearer #USER_API_KEY\n"))),(0,o.kt)("h2",{id:"authentication-errors"},"Authentication errors"),(0,o.kt)("p",null,"Tape returns comprehensive error messages for authentication failures:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Invalid key format validation error"',title:'"Invalid',key:!0,format:!0,validation:!0,'error"':!0},'{\n  "status_code": 400,\n  "endpoint": "/v1/record/1",\n  "error_code": "validation",\n  "error_message": "Invalid user API key for accessing endpoint \'/v1/record/1\' (key has to start with \'user_key_\')"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Invalid key signature validation error"',title:'"Invalid',key:!0,signature:!0,validation:!0,'error"':!0},'{\n  "status_code": 400,\n  "endpoint": "/v1/record/1",\n  "error_code": "validation",\n  "error_message": "Invalid user API key for accessing endpoint \'/v1/record/1\' (signature check not passed, key is malformed)"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Authentication missing error"',title:'"Authentication',missing:!0,'error"':!0},'{\n  "status_code": 401,\n  "endpoint": "/v1/record/1",\n  "error_code": "dev_api_authentication",\n  "error_message": "Missing authentication for Dev-API endpoint: \'/v1/record/1\' (no user API key provided)"\n}\n')))}k.isMDXComponent=!0}}]);