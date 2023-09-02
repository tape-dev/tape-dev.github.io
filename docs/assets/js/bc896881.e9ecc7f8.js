"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[2443],{4757:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(7294);function r(e){var a,t=e.method,r=e.url;switch(t){case"GET":a="#007959";break;case"POST":a="#0071BB";break;case"PUT":a="#DEA700";break;case"DELETE":a="#DF245E"}return n.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"15px",lineHeight:"15px",marginBottom:"13px"}},n.createElement("span",{style:{backgroundColor:a,color:"var(--tape-color-lightest)",borderRadius:"999px",padding:"4px 9px 3px 9px",fontWeight:700,fontSize:"11px",lineHeight:"11px"}},t.toUpperCase()),n.createElement("span",{style:{color:"var(--tape-color-darker)",marginLeft:"9px",marginTop:"2px"}},r))}},8215:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(7294);function r(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},9877:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(7462),r=t(7294),o=t(2389),i=t(3725),l=t(6010);const p="tabItem_LplD";function s(e){var a,t,o,s=e.lazy,c=e.block,u=e.defaultValue,d=e.values,m=e.groupId,v=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:k.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),h=(0,i.lx)(f,(function(e,a){return e.value===a.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(a=null!=u?u:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(o=k[0])?void 0:o.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),w=b.tabGroupChoices,x=b.setTabGroupChoices,_=(0,r.useState)(g),T=_[0],E=_[1],y=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var N=w[m];null!=N&&N!==T&&f.some((function(e){return e.value===N}))&&E(N)}var R=function(e){var a=e.currentTarget,t=y.indexOf(a),n=f[t].value;n!==T&&(C(a),E(n),null!=m&&x(m,n))},Z=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=y.indexOf(e.currentTarget)+1;t=y[n]||y[0];break;case"ArrowLeft":var r=y.indexOf(e.currentTarget)-1;t=y[r]||y[y.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},v)},f.map((function(e){var a=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:function(e){return y.push(e)},onKeyDown:Z,onFocus:R,onClick:R},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===a})}),null!=t?t:a)}))),s?(0,r.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==T})}))))}function c(e){var a=(0,o.Z)();return r.createElement(s,(0,n.Z)({key:String(a)},e))}},4890:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),i=t(4757),l=(t(9877),t(8215),t(7859)),p=["components"],s={id:"app",title:"App",sidebar_label:"App"},c=void 0,u={unversionedId:"api/resource/app",id:"api/resource/app",title:"App",description:"Retrieve apps for a workspace",source:"@site/docs/api/resource/app.md",sourceDirName:"api/resource",slug:"/api/resource/app",permalink:"/docs/api/resource/app",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/app.md",tags:[],version:"current",frontMatter:{id:"app",title:"App",sidebar_label:"App"},sidebar:"mainSidebar",previous:{title:"Record Revision",permalink:"/docs/api/resource/record-revision"},next:{title:"Workspace",permalink:"/docs/api/resource/workspace"}},d={},m=[{value:"Retrieve apps for a workspace",id:"retrieve-apps-for-a-workspace",level:2},{value:"Retrieve all available apps",id:"retrieve-all-available-apps",level:2},{value:"Retrieve a single app",id:"retrieve-a-single-app",level:2},{value:"Create, delete or update Apps",id:"create-delete-or-update-apps",level:2}],v={toc:m};function k(e){var a=e.components,t=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"retrieve-apps-for-a-workspace"},"Retrieve apps for a workspace"),(0,o.kt)(i.Z,{method:"GET",url:"https://api.tapeapp.com/v1/app/workspace/{workspaceId}",mdxType:"EndpointBadge"}),(0,o.kt)("p",null,"Retrieve all apps for the workspace with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"200")," (Note that the response does not contain the fields):"),(0,o.kt)(l.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/app/workspace/200 \\\n  -u #USER_API_KEY:"),(0,o.kt)(l.Z,{language:"json",title:"\u2b05\ufe0f \xa0\xa0   Response",mdxType:"ContextCodeBlock"},'{\n  "total": 2,\n  "apps": [\n    {\n      "app_id": 1,\n      "workspace_id": 200,\n      "name": "Tasks",\n      "slug": "tasks",\n      "config": {\n        "item_name": "Task",\n        "name": "Tasks",\n        "description": ""\n      }\n    },\n    {\n      "app_id": 2,\n      "workspace_id": 200,\n      "name": "Projects",\n      "slug": "projects",\n      "config": { \n        "item_name": "Project",\n        "name": "Projects",\n        "description": ""\n      }\n    }\n]\n}'),(0,o.kt)("h2",{id:"retrieve-all-available-apps"},"Retrieve all available apps"),(0,o.kt)(i.Z,{method:"GET",url:"https://api.tapeapp.com/v1/app/workspace/{workspaceId}",mdxType:"EndpointBadge"}),(0,o.kt)("p",null,"Retrieve all apps inside the workspaces that you have access to (Note that the response does not contain the fields):"),(0,o.kt)(l.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/app \\\n  -u #USER_API_KEY:"),(0,o.kt)(l.Z,{language:"json",title:"\u2b05\ufe0f \xa0\xa0   Response",mdxType:"ContextCodeBlock"},'{\n  "total": 3,\n  "apps": [\n    {\n      "app_id": 1,\n      "workspace_id": 200,\n      "name": "Tasks",\n      "slug": "tasks",\n      "config": {\n        "item_name": "Task",\n        "name": "Tasks",\n        "description": ""\n      }\n    },\n    {\n      "app_id": 2,\n      "workspace_id": 200,\n      "name": "Projects",\n      "slug": "projects",\n      "config": { \n        "item_name": "Project",\n        "name": "Projects",\n        "description": ""\n      },\n    },\n    {\n    "app_id": 3,\n    "workspace_id": 300,\n    "name": "Contacts",\n    "slug": "contacts",\n    "config": { \n      "item_name": "Contact",\n      "name": "Contacts",\n      "description": ""\n    }\n  }\n]\n}'),(0,o.kt)("h2",{id:"retrieve-a-single-app"},"Retrieve a single app"),(0,o.kt)(i.Z,{method:"GET",url:"https://api.tapeapp.com/v1/app/{appId}",mdxType:"EndpointBadge"}),(0,o.kt)("p",null,"Retrieve an app with fields by its ID ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),":"),(0,o.kt)(l.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/app/1 \\\n  -u #USER_API_KEY:"),(0,o.kt)(l.Z,{language:"json",title:"\u2b05\ufe0f \xa0\xa0   Response",mdxType:"ContextCodeBlock"},'\n  {\n    "app_id": 1,\n    "workspace_id": 200,\n    "name": "Tasks",\n    "slug": "tasks",\n    "config": {\n      "item_name": "Task",\n      "name": "Tasks",\n      "description": ""\n    },\n    "fields": [\n      {\n        "field_id": 1,\n        "external_id": "full_name",\n        "label": "Full Name",\n        "type": "text",\n        "field_type": "single_text",\n        "config": {\n          "description": null,\n          "required": false,\n          "label": "FST",\n          "settings": {\n            "format": "plain",\n            "size": "small"\n          }\n        },\n      }\n    ]\n  }\n'),(0,o.kt)("h2",{id:"create-delete-or-update-apps"},"Create, delete or update Apps"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Not available")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Mutating ",(0,o.kt)("strong",{parentName:"p"},"App")," endpoints are not available yet. Contact us if those are important for your integrations."))))}k.isMDXComponent=!0}}]);