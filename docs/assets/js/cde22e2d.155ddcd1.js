"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[3438],{4757:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);function n(e){var t,r=e.method,n=e.url;switch(r){case"GET":t="#007959";break;case"POST":t="#0071BB";break;case"PUT":t="#DEA700";break;case"DELETE":t="#DF245E"}return a.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"15px",lineHeight:"15px",marginBottom:"13px"}},a.createElement("span",{style:{backgroundColor:t,color:"var(--tape-color-lightest)",borderRadius:"999px",padding:"4px 9px 3px 9px",fontWeight:700,fontSize:"11px",lineHeight:"11px"}},r.toUpperCase()),a.createElement("span",{style:{color:"var(--tape-color-darker)",marginLeft:"9px",marginTop:"2px"}},n))}},8215:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);function n(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},9877:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(7462),n=r(7294),o=r(2389),i=r(3725),l=r(6010);const s="tabItem_LplD";function u(e){var t,r,o,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,h=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),x=k.tabGroupChoices,E=k.setTabGroupChoices,y=(0,n.useState)(g),w=y[0],N=y[1],T=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var _=x[m];null!=_&&_!==w&&f.some((function(e){return e.value===_}))&&N(_)}var U=function(e){var t=e.currentTarget,r=T.indexOf(t),a=f[r].value;a!==w&&(C(t),N(a),null!=m&&E(m,a))},D=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;r=T[a]||T[0];break;case"ArrowLeft":var n=T.indexOf(e.currentTarget)-1;r=T[n]||T[T.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},v)},f.map((function(e){var t=e.value,r=e.label,o=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:U,onClick:U},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=r?r:t)}))),u?(0,n.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,o.Z)();return n.createElement(u,(0,a.Z)({key:String(t)},e))}},6970:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=r(4757),l=(r(9877),r(8215),r(7859)),s=["components"],u={id:"user",title:"User",sidebar_label:"User"},c=void 0,p={unversionedId:"api/resource/user",id:"api/resource/user",title:"User",description:"Retrieve Users",source:"@site/docs/api/resource/user.md",sourceDirName:"api/resource",slug:"/api/resource/user",permalink:"/docs/api/resource/user",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/user.md",tags:[],version:"current",frontMatter:{id:"user",title:"User",sidebar_label:"User"},sidebar:"mainSidebar",previous:{title:"Organization",permalink:"/docs/api/resource/organization"},next:{title:"File",permalink:"/docs/api/resource/file"}},d={},m=[{value:"Retrieve Users",id:"retrieve-users",level:2},{value:"Create, update or delete users",id:"create-update-or-delete-users",level:2}],v={toc:m};function h(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"retrieve-users"},"Retrieve Users"),(0,o.kt)(i.Z,{method:"GET",url:"https://api.tapeapp.com/v1/org/user",mdxType:"EndpointBadge"}),(0,o.kt)("p",null,"Retrieve your current organization's users (e.g. the organization with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"1337"),"):"),(0,o.kt)(l.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/org/user \\\n  -u #USER_API_KEY:"),(0,o.kt)(l.Z,{language:"json",title:"\u2b05\ufe0f \xa0\xa0   Response",mdxType:"ContextCodeBlock"},'{\n  "users": [\n    {\n      "user_id": 10000,\n      "name": "John Doe",\n      "org_id": 1337,\n      "status": "active",\n      "email": "john@doe.com",\n      "phone": "555 123 456",\n      "role": "owner",\n      "job_description": "Founder & CEO"\n    },\n    {\n      "user_id": 10001,\n      "name": "Zoe Maxwell",\n      "org_id": 1337,\n      "status": "active",\n      "email": "zoemaxwell10001@me.com",\n      "phone": "555 123 457",\n      "role": "member",\n      "job_description": "Executive"\n    }\n  ]\n}'),(0,o.kt)("h2",{id:"create-update-or-delete-users"},"Create, update or delete users"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Not available")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Modifying ",(0,o.kt)("strong",{parentName:"p"},"User")," endpoints are not available yet. ",(0,o.kt)("a",{parentName:"p",href:"https://community.tapeapp.com/c/requests/8"},"Create a community feature request")," if those are important for your integrations."))))}h.isMDXComponent=!0}}]);