"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[5367],{4757:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){var t,n=e.method,r=e.url;switch(n){case"GET":t="#007959";break;case"POST":t="#0071BB";break;case"PUT":t="#DEA700";break;case"DELETE":t="#DF245E"}return a.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"15px",lineHeight:"15px",marginBottom:"13px"}},a.createElement("span",{style:{backgroundColor:t,color:"var(--tape-color-lightest)",borderRadius:"999px",padding:"4px 9px 3px 9px",fontWeight:700,fontSize:"11px",lineHeight:"11px"}},n.toUpperCase()),a.createElement("span",{style:{color:"var(--tape-color-darker)",marginLeft:"9px",marginTop:"2px"}},r))}},3123:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010),o={note:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),tip:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),danger:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})),info:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),caution:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},l={note:"secondary",tip:"success",danger:"danger",info:"info",caution:"warning"};function i(e){var t=e.children,n=e.type,i=e.title,d=void 0===i?n:i,m=e.icon,c=void 0===m?o[n]:m;return a.createElement("div",{className:(0,r.Z)("admonition","admonition-"+n,"alert","alert--"+l[n])},a.createElement("div",{className:"admonition-heading"},a.createElement("h5",null,a.createElement("span",{className:"admonition-icon"},c),d)),a.createElement("div",{className:"admonition-content"},t))}},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),o=n(2389),l=n(3725),i=n(6010);const d="tabItem_LplD";function m(e){var t,n,o,m=e.lazy,c=e.block,p=e.defaultValue,s=e.values,u=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=s?s:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.lx)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==f&&!k.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.UB)(),b=N.tabGroupChoices,y=N.setTabGroupChoices,w=(0,r.useState)(f),C=w[0],E=w[1],T=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=u){var _=b[u];null!=_&&_!==C&&k.some((function(e){return e.value===_}))&&E(_)}var R=function(e){var t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==C&&(x(t),E(a),null!=u&&y(u,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},h)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:R,onClick:R},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),m?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},6919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>v});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(4757),i=n(9877),d=n(8215),m=n(7859),c=(n(3123),["components"]),p={id:"record-comment",title:"Record Comment",sidebar_label:"Record Comment"},s=void 0,u={unversionedId:"api/resource/record-comment",id:"api/resource/record-comment",title:"Record Comment",description:"While data is stored inside records, communication in Tape usually happens inside comments on those records. Comments can be created, retrieved, updated and deleted via the API.",source:"@site/docs/api/resource/record-comment.md",sourceDirName:"api/resource",slug:"/api/resource/record-comment",permalink:"/docs/api/resource/record-comment",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/record-comment.md",tags:[],version:"current",frontMatter:{id:"record-comment",title:"Record Comment",sidebar_label:"Record Comment"},sidebar:"mainSidebar",previous:{title:"Phone",permalink:"/docs/api/resource/field-value/phone"},next:{title:"Record Revision",permalink:"/docs/api/resource/record-revision"}},h={},v=[{value:"Create a record comment",id:"create-a-record-comment",level:2},{value:"Retrieve a comment",id:"retrieve-a-comment",level:2},{value:"Delete a comment",id:"delete-a-comment",level:2},{value:"Retrieve comments for a record",id:"retrieve-comments-for-a-record",level:2}],k={toc:v};function g(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"While data is stored inside records, communication in Tape usually happens inside comments on those records. Comments can be created, retrieved, updated and deleted via the API."),(0,o.kt)("h2",{id:"create-a-record-comment"},"Create a record comment"),(0,o.kt)(l.Z,{method:"POST",url:"https://api.tapeapp.com/v1/comment/record/{record_id}",mdxType:"EndpointBadge"}),(0,o.kt)("p",null,"To create a new record comment for the record with the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"record_id"),", issue a POST request to this endpoint. The POST body has to contain the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," property with the text of the comment. It may further specify ",(0,o.kt)("inlineCode",{parentName:"p"},"file_ids"),", an array of temporary file IDs analog to the attachment field type. More details on file uploads can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/resource/file"},"here"),"."),(0,o.kt)("p",null,"Apart from plain text, the comment ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," property supports limited formatting and extra options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Forcing newlines using ",(0,o.kt)("inlineCode",{parentName:"li"},"\\n")),(0,o.kt)("li",{parentName:"ul"},'Adding a user mention using the proper syntax, e.g. for this user with ID 123 and name "Dan Jacob": ',(0,o.kt)("inlineCode",{parentName:"li"},"@[Dan Jacob](user:123)"))),(0,o.kt)("p",null,"The following query paramters are available:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Query param"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"silent")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Do not generate notifications for this operation (default: ",(0,o.kt)("inlineCode",{parentName:"td"},"false"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"hook")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Execute webhooks for this operation (default: ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),")")))),(0,o.kt)("p",null,"The following example creates a plain text comment on the record with ID 1:"),(0,o.kt)(i.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)(m.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X POST #BASE_URL/v1/comment/record/1  \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "value": "This is a comment on record with ID 1."\n  }\' \n')),(0,o.kt)(d.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "value": "This is a comment on record with ID 1."\n}\n')))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "comment_id": 1000,\n  "value": "This is a comment on record with ID 1.",\n  "created_on": "2022-03-01 12:00:00",\n  "ref": { "type": "record", "id": 1 },\n  "created_by": {\n    "user_id": 600,\n    "mail": ["dan@tapeapp.com"],\n    "image": null,\n    "name": "Dan Jacob",\n    "org_id": 1,\n    "type": "user"\n  }\n}\n')),(0,o.kt)("h2",{id:"retrieve-a-comment"},"Retrieve a comment"),(0,o.kt)(l.Z,{method:"GET",url:"https://api.tapeapp.com/v1/comment/{comment_id}",mdxType:"EndpointBadge"}),(0,o.kt)("p",null,"Retrieve the comment with the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"comment_id"),":"),(0,o.kt)(m.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/comment/1000 \\\n  -u #USER_API_KEY:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "comment_id": 1000,\n  "value": "This is a comment on record with ID 1.",\n  "created_on": "2022-03-01 12:00:00",\n  "ref": { "type": "record", "id": 1 },\n  "created_by": {\n    "user_id": 600,\n    "mail": ["dan@tapeapp.com"],\n    "image": null,\n    "name": "Dan Jacob",\n    "org_id": 1,\n    "type": "user"\n  }\n}\n')),(0,o.kt)("h2",{id:"delete-a-comment"},"Delete a comment"),(0,o.kt)(l.Z,{method:"DELETE",url:"https://api.tapeapp.com/v1/comment/{comment_id}",mdxType:"EndpointBadge"}),(0,o.kt)("p",null,"Delete the comment with the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"comment_id"),".\nThe following query paramters are available:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Query param"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"silent")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Do not generate notifications for this operation (default: ",(0,o.kt)("inlineCode",{parentName:"td"},"false"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"hook")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Execute webhooks for this operation (default: ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),")")))),(0,o.kt)(m.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl -X DELETE #BASE_URL/v1/comment/1  \\\n  -u #USER_API_KEY:\n"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},"{}\n")),(0,o.kt)("h2",{id:"retrieve-comments-for-a-record"},"Retrieve comments for a record"),(0,o.kt)(l.Z,{method:"GET",url:"https://api.tapeapp.com/v1/comment/record/{record_id}",mdxType:"EndpointBadge"}),(0,o.kt)("p",null,"Retrieve comments for the record with the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"record_id"),". Note that results are ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/pagination"},"paginated"),"."),(0,o.kt)(m.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/record/app/1?limit=2 \\\n  -u #USER_API_KEY:"),(0,o.kt)(m.Z,{language:"json",title:"\u2b05\ufe0f \xa0\xa0   Response",mdxType:"ContextCodeBlock"},'{\n  "total": 2,\n  "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJibGFiRGVmSWQiOjgsInZhbHVlcyI6WzE1OV0sImV4cCI6MTY1MDYxODc3OH0.iY5TnLSBDGCnFXbStcrLPTmP6MATnS_JKywbvC4tx3g",\n  "comments": [\n    {\n      "comment_id": 1000,\n      "value": "This is a comment on record with ID 1.",\n      "created_on": "2022-03-01 12:00:00",\n      "ref": { "type": "record", "id": 1 },\n      "created_by": {\n        "user_id": 600,\n        "mail": ["dan@tapeapp.com"],\n        "image": null,\n        "name": "Dan Jacob",\n        "org_id": 1,\n        "type": "user"\n      }\n    },\n    {\n      "comment_id": 1001,\n      "value": "This is another comment on record with ID 1.",\n      "created_on": "2022-03-01 13:00:00",\n      "ref": { "type": "record", "id": 1 },\n      "created_by": {\n        "user_id": 600,\n        "mail": ["dan@tapeapp.com"],\n        "image": null,\n        "name": "Dan Jacob",\n        "org_id": 1,\n        "type": "user"\n      }\n    }\n  ]\n}'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Query Parameters")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"}," Type")),(0,o.kt)("th",{parentName:"tr",align:null},"Min"),(0,o.kt)("th",{parentName:"tr",align:null},"Max"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"limit")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"integer")),(0,o.kt)("td",{parentName:"tr",align:null},"Number of comments to return. Defaults to 100."),(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"100")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"cursor")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"Cursor for pagination"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))))}g.isMDXComponent=!0}}]);