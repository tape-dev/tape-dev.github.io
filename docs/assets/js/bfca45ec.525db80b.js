"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[239],{4757:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(7294);function r(e){var a,t=e.method,r=e.url;switch(t){case"GET":a="#007959";break;case"POST":a="#0071BB";break;case"PUT":a="#DEA700";break;case"DELETE":a="#DF245E"}return n.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"15px",lineHeight:"15px",marginBottom:"13px"}},n.createElement("span",{style:{backgroundColor:a,color:"var(--tape-color-lightest)",borderRadius:"999px",padding:"4px 9px 3px 9px",fontWeight:700,fontSize:"11px",lineHeight:"11px"}},t.toUpperCase()),n.createElement("span",{style:{color:"var(--tape-color-darker)",marginLeft:"9px",marginTop:"2px"}},r))}},8215:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(7294);function r(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},9877:(e,a,t)=>{t.d(a,{Z:()=>u});var n=t(7462),r=t(7294),i=t(2389),l=t(3725),o=t(6010);const s="tabItem_LplD";function p(e){var a,t,i,p=e.lazy,u=e.block,c=e.defaultValue,d=e.values,m=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),k=(0,l.lx)(f,(function(e,a){return e.value===a.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(a=null!=c?c:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(i=h[0])?void 0:i.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.UB)(),g=w.tabGroupChoices,T=w.setTabGroupChoices,N=(0,r.useState)(b),y=N[0],x=N[1],E=[],C=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var L=g[m];null!=L&&L!==y&&f.some((function(e){return e.value===L}))&&x(L)}var R=function(e){var a=e.currentTarget,t=E.indexOf(a),n=f[t].value;n!==y&&(C(a),x(n),null!=m&&T(m,n))},D=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;t=E[n]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;t=E[r]||E[E.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},v)},f.map((function(e){var a=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,key:a,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:R,onClick:R},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":y===a})}),null!=t?t:a)}))),p?(0,r.cloneElement)(h.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==y})}))))}function u(e){var a=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(a)},e))}},7586:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>p,default:()=>v,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),l=(t(7859),t(4757)),o=(t(9877),t(8215),["components"]),s={id:"link-preview",title:"Link Preview",sidebar_label:"Link Preview"},p=void 0,u={unversionedId:"api/resource/link-preview",id:"api/resource/link-preview",title:"Link Preview",description:"Tape generates link previews for URLs inside link fields or that are shared via comments, replies and chat messages. A link preview always has the id and url properties, all other properties (title, description, previewImage) are optional, depending on whether Tape was able to access the provided URL.",source:"@site/docs/api/resource/link-preview.md",sourceDirName:"api/resource",slug:"/api/resource/link-preview",permalink:"/docs/api/resource/link-preview",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/link-preview.md",tags:[],version:"current",frontMatter:{id:"link-preview",title:"Link Preview",sidebar_label:"Link Preview"},sidebar:"mainSidebar",previous:{title:"File",permalink:"/docs/api/resource/file"},next:{title:"Webhook",permalink:"/docs/api/resource/webhook"}},c={},d=[{value:"Create a link preview",id:"create-a-link-preview",level:2}],m={toc:d};function v(e){var a=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tape generates link previews for URLs inside link fields or that are shared via comments, replies and chat messages. A link preview always has the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," properties, all other properties (",(0,i.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"previewImage"),") are optional, depending on whether Tape was able to access the provided URL."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There are many reasons why generating a link preview can take a long time or fail (website not reachable, website takes a long time to respond, ...). To prevent critical operations like creating a record to fail due to an unsuccessful link preview generation, Tape accepts only the URL as an input and will generate the full link preview after the operation was successful. Therefore, generating a link preview via the dedicated endpoint is optional and only needed if you want full control over the process."))),(0,i.kt)("h2",{id:"create-a-link-preview"},"Create a link preview"),(0,i.kt)(l.Z,{method:"POST",url:"https://api.tapeapp.com/v1/link-preview",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,"Create a link preview by providing the ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," property in the request body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request"',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request"':!0},'{\n  "url": "https://tapeapp.com" // The absolute url of the link to generate the preview for\n}\n')),(0,i.kt)("p",null,"The response will be a link preview object containing the information Tape could generate for the provided URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "id": 1, // The unique ID of the link preview object\n  "url": "https://tapeapp.com", // The absolute url of the link\n  "title": "Tape - Build your own powerful business platform", // The title of the link\'s website\n  "description": "Fully customizable. No-code. Low-code.", // The description of the link\'s website\n  "previewImage": {\n    // A representative thumbnail image for the link\'s website (e.g., the favicon)\n    "small": "https://s3.eu-central-1.amazonaws.com/tape-thumbnails/def09e9319ca30e9ab2bc13e061982",\n    "medium": "https://s3.eu-central-1.amazonaws.com/tape-thumbnails/82f3c2669deca95c16d1ad955734e0",\n    "large": "https://s3.eu-central-1.amazonaws.com/tape-thumbnails/f8f105f4daaced0f3f714b5ebb76ae"\n  }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"previewImage")," property is a thumbnail object. Read more about thumbnails ",(0,i.kt)("a",{parentName:"p",href:"file#thumbnails"},"here"),"."))}v.isMDXComponent=!0}}]);