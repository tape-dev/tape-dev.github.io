"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[6790],{7859:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(2263),i=n(2792),r=n(1736),l=n(6010),o=n(7294);const s="codeBlock_FKPJ";function p(e){var t=e.children,n=e.language,p=e.title,d=(0,o.useState)((0,i.W5)()),u=d[0],c=d[1];(0,o.useEffect)((0,i.kw)((0,a.Z)(),c),[]);var m=(0,i.hd)(u),f=(0,i.jM)(u),g=(0,i.dz)(u),v=(0,i.xe)(u);function h(e){return(e||"").replace(new RegExp("#USER_API_KEY","g"),m).replace(new RegExp("#BASE_URL","g"),v).replace(new RegExp("#RECORD_ID","g"),f).replace(new RegExp("#RECORD_TITLE","g"),g)}var k=("string"==typeof t?[t]:Array.isArray(t)?t:[]).map((function(e){return"string"==typeof e?h(e):e})),_=h(p);return o.createElement("div",{className:(0,l.Z)(s)},o.createElement(r.Z,{title:_,language:n},k))}},4757:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294);function i(e){var t,n=e.method,i=e.url;switch(n){case"GET":t="#007959";break;case"POST":t="#0071BB";break;case"PUT":t="#DEA700";break;case"DELETE":t="#DF245E"}return a.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"15px",lineHeight:"15px",marginBottom:"13px"}},a.createElement("span",{style:{backgroundColor:t,color:"var(--tape-color-lightest)",borderRadius:"999px",padding:"4px 9px 3px 9px",fontWeight:700,fontSize:"11px",lineHeight:"11px"}},n.toUpperCase()),a.createElement("span",{style:{color:"var(--tape-color-darker)",marginLeft:"9px",marginTop:"2px"}},i))}},8215:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294);function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),i=n(7294),r=n(2389),l=n(3725),o=n(6010);const s="tabItem_LplD";function p(e){var t,n,r,p=e.lazy,d=e.block,u=e.defaultValue,c=e.values,m=e.groupId,f=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===u?u:null!=(t=null!=u?u:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=(0,l.UB)(),b=_.tabGroupChoices,y=_.setTabGroupChoices,x=(0,i.useState)(k),E=x[0],N=x[1],R=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=b[m];null!=C&&C!==E&&v.some((function(e){return e.value===C}))&&N(C)}var w=function(e){var t=e.currentTarget,n=R.indexOf(t),a=v[n].value;a!==E&&(T(t),N(a),null!=m&&y(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=R.indexOf(e.currentTarget)+1;n=R[a]||R[0];break;case"ArrowLeft":var i=R.indexOf(e.currentTarget)-1;n=R[i]||R[R.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return R.push(e)},onKeyDown:I,onFocus:w,onClick:w},r,{className:(0,o.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),p?(0,i.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,r.Z)();return i.createElement(p,(0,a.Z)({key:String(t)},e))}},5853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>m,toc:()=>g});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=n(4757),o=n(9877),s=n(8215),p=n(7859),d=["components"],u={id:"image",title:"Image Field Value",sidebar_label:"Image"},c=void 0,m={unversionedId:"api/resource/field-value/image",id:"api/resource/field-value/image",title:"Image Field Value",description:"An image field value consists of its value property which holds a reference to an image. An image has the properties id (unique ID), filename (the filename), size (filesize in bytes), downloadurl (URL to download the file) and others. Right now, there is only a multiimage field, where the value can hold multiple image references.",source:"@site/docs/api/resource/field-value/image.md",sourceDirName:"api/resource/field-value",slug:"/api/resource/field-value/image",permalink:"/docs/api/resource/field-value/image",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/field-value/image.md",tags:[],version:"current",frontMatter:{id:"image",title:"Image Field Value",sidebar_label:"Image"},sidebar:"mainSidebar",previous:{title:"Attachment",permalink:"/docs/api/resource/field-value/attachment"},next:{title:"Checklist",permalink:"/docs/api/resource/field-value/checklist"}},f={},g=[{value:"Record creation",id:"record-creation",level:2},{value:"Record retrieval",id:"record-retrieval",level:2},{value:"Record update",id:"record-update",level:2}],v={toc:g};function h(e){var t=e.components,n=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An image field value consists of its ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," property which holds a reference to an image. An image has the properties ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," (unique ID), ",(0,r.kt)("inlineCode",{parentName:"p"},"filename")," (the filename), ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," (filesize in bytes), ",(0,r.kt)("inlineCode",{parentName:"p"},"download_url")," (URL to download the file) and others. Right now, there is only a ",(0,r.kt)("inlineCode",{parentName:"p"},"multi_image")," field, where the value can hold multiple image references."),(0,r.kt)("p",null,"Image fields behave quite similarly to ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/resource/field-value/attachment"},"attachment fields"),", allowing only image files."),(0,r.kt)("p",null,"More details on the file object and the two-step file upload process can be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/resource/file"},"here"),"."),(0,r.kt)("h2",{id:"record-creation"},"Record creation"),(0,r.kt)(l.Z,{method:"POST",url:"https://api.tapeapp.com/v1/record/app/{app_id}",mdxType:"EndpointBadge"}),(0,r.kt)("p",null,"A image field value can be created as part of a record creation. Files can be specified as temporary file IDs (strings), existing file IDs of the same field (integers) and existing file IDs of different Attachment or Image fields (integers). Existing files of Attachment fields can only be used as inputs to the image field, in case the files are of type ",(0,r.kt)("inlineCode",{parentName:"p"},"jpeg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"jpg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"png"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"gif"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tiff"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"svg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bmp")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"webp"),'.\nHere is an example request body for creating a record with a value for the "Recruting Photos" field with ID 3, type ',(0,r.kt)("inlineCode",{parentName:"p"},"multi_image")," and external ID ",(0,r.kt)("inlineCode",{parentName:"p"},"recruiting_photos"),":"),(0,r.kt)(o.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)(p.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X POST #BASE_URL/v1/record/app/1 \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "recruiting_photos": ["temporary-file-2", "temporary-file-3"]\n    }\n  }\' \n')),(0,r.kt)(s.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "recruiting_photos": ["temporary-file-2", "temporary-file-3"]\n  }\n}\n')))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "record_id": 1,\n  "title": "200301_recruiting_photo_1.jpeg",\n  "fields": [\n    {\n      "field_id": 3,\n      "external_id": "recruiting_photos",\n      "label": "Recruiting Photos",\n      "field_type": "multi_image",\n      "type": "image",\n      "values": [\n        {\n          "value": {\n            "id": 100,\n            "filename": "200301_recruiting_photo_1.jpeg",\n            "size": 12300\n          }\n        },\n        {\n          "value": {\n            "id": 101,\n            "filename": "200301_recruiting_photo_2.jpeg",\n            "size": 11300\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"record-retrieval"},"Record retrieval"),(0,r.kt)(l.Z,{method:"GET",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,r.kt)("p",null,"A image field value can be retrieved as part of a record retrieval:"),(0,r.kt)(p.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "200301_recruiting_photo_1.jpeg",\n  "fields": [\n    {\n      "field_id": 3,\n      "external_id": "recruiting_photos",\n      "label": "Recruiting Photos",\n      "field_type": "multi_image",\n      "type": "image",\n      "values": [\n        {\n          "value": {\n            "id": 100,\n            "filename": "200301_recruiting_photo_1.jpeg",\n            "size": 12300\n          }\n        },\n        {\n          "value": {\n            "id": 101,\n            "filename": "200301_recruiting_photo_2.jpeg",\n            "size": 11300\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"record-update"},"Record update"),(0,r.kt)(l.Z,{method:"PUT",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,r.kt)("p",null,"One or more image field values can be updated as part of a record update. Both existing IDs (integers) as well as temporary file IDs (strings) can be provided as input. Existing IDs of the same field (integers), existing IDs of different Attachment or Image fields (integers) as well as temporary file IDs (strings) can be provided as input. Existing files of Attachment fields can only be used as inputs to the image field, in case the files are of type ",(0,r.kt)("inlineCode",{parentName:"p"},"jpeg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"jpg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"png"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"gif"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tiff"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"svg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bmp")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"webp"),".\nHere is an example request body for updating multiple image field values of a record:"),(0,r.kt)(o.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)(p.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X PUT #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "letter_of_recommendation": "temporary-file-2",\n      "recruiting_photos": ["temporary-file-6", 102]\n    }\n  }\' \n')),(0,r.kt)(s.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "recruiting_photos": ["temporary-file-6", 102]\n  }\n}\n')))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "200301_recruiting_photo_1.jpeg",\n  "fields": [\n    {\n      "field_id": 3,\n      "external_id": "recruiting_photos",\n      "label": "Recruiting Photos",\n      "field_type": "multi_image",\n      "type": "image",\n      "values": [\n        {\n          "value": {\n            "id": 100,\n            "filename": "200301_recruiting_photo_1.jpeg",\n            "size": 12300\n          }\n        },\n        {\n          "value": {\n            "id": 101,\n            "filename": "200301_recruiting_photo_2.jpeg",\n            "size": 11300\n          }\n        }\n      ]\n    }\n  ]\n}\n')))}h.isMDXComponent=!0}}]);