"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[404],{7859:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(2263),l=n(2792),i=n(1736),r=n(6010),o=n(7294);const s="codeBlock_FKPJ";function d(e){var t=e.children,n=e.language,d=e.title,c=(0,o.useState)((0,l.W5)()),u=c[0],p=c[1];(0,o.useEffect)((0,l.kw)((0,a.Z)(),p),[]);var m=(0,l.hd)(u),h=(0,l.jM)(u),k=(0,l.dz)(u),v=(0,l.xe)(u);function f(e){return(e||"").replace(new RegExp("#USER_API_KEY","g"),m).replace(new RegExp("#BASE_URL","g"),v).replace(new RegExp("#RECORD_ID","g"),h).replace(new RegExp("#RECORD_TITLE","g"),k)}var g=("string"==typeof t?[t]:Array.isArray(t)?t:[]).map((function(e){return"string"==typeof e?f(e):e})),b=f(d);return o.createElement("div",{className:(0,r.Z)(s)},o.createElement(i.Z,{title:b,language:n},g))}},4757:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);function l(e){var t,n=e.method,l=e.url;switch(n){case"GET":t="#007959";break;case"POST":t="#0071BB";break;case"PUT":t="#DEA700";break;case"DELETE":t="#DF245E"}return a.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"15px",lineHeight:"15px",marginBottom:"13px"}},a.createElement("span",{style:{backgroundColor:t,color:"var(--tape-color-lightest)",borderRadius:"999px",padding:"4px 9px 3px 9px",fontWeight:700,fontSize:"11px",lineHeight:"11px"}},n.toUpperCase()),a.createElement("span",{style:{color:"var(--tape-color-darker)",marginLeft:"9px",marginTop:"2px"}},l))}},8215:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),l=n(7294),i=n(2389),r=n(3725),o=n(6010);const s="tabItem_LplD";function d(e){var t,n,i,d=e.lazy,c=e.block,u=e.defaultValue,p=e.values,m=e.groupId,h=e.className,k=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,r.lx)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(t=null!=u?u:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,r.UB)(),y=b.tabGroupChoices,T=b.setTabGroupChoices,_=(0,l.useState)(g),x=_[0],E=_[1],C=[],N=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var R=y[m];null!=R&&R!==x&&v.some((function(e){return e.value===R}))&&E(R)}var w=function(e){var t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==x&&(N(t),E(a),null!=m&&T(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var l=C.indexOf(e.currentTarget)-1;n=C[l]||C[C.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},h)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return C.push(e)},onKeyDown:I,onFocus:w,onClick:w},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),d?(0,l.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function c(e){var t=(0,i.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},8428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>m,toc:()=>k});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),r=n(4757),o=n(9877),s=n(8215),d=n(7859),c=["components"],u={id:"checklist",title:"Checklist Field Value",sidebar_label:"Checklist"},p=void 0,m={unversionedId:"api/resource/field-value/checklist",id:"api/resource/field-value/checklist",title:"Checklist Field Value",description:"A checklist field value consists of its value property which holds one or multiple checklist entries. An entry contains a title a description, an assignee, and a due_at property. It further includes a boolean completed status indicating whether that individual entry has been completed.",source:"@site/docs/api/resource/field-value/checklist.md",sourceDirName:"api/resource/field-value",slug:"/api/resource/field-value/checklist",permalink:"/docs/api/resource/field-value/checklist",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/field-value/checklist.md",tags:[],version:"current",frontMatter:{id:"checklist",title:"Checklist Field Value",sidebar_label:"Checklist"},sidebar:"mainSidebar",previous:{title:"Attachment",permalink:"/docs/api/resource/field-value/attachment"},next:{title:"Number",permalink:"/docs/api/resource/field-value/number"}},h={},k=[{value:"Record creation",id:"record-creation",level:2},{value:"Record retrieval",id:"record-retrieval",level:2},{value:"Record update",id:"record-update",level:2}],v={toc:k};function f(e){var t=e.components,n=(0,l.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A checklist field value consists of its ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," property which holds one or multiple checklist entries. An entry contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"description"),", an ",(0,i.kt)("inlineCode",{parentName:"p"},"assignee"),", and a ",(0,i.kt)("inlineCode",{parentName:"p"},"due_at")," property. It further includes a boolean ",(0,i.kt)("inlineCode",{parentName:"p"},"completed")," status indicating whether that individual entry has been completed."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"due_at")," will be a date or datetime, depending on the data. More details on date and datetime strings can be found ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/date-timezone"},"here"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"assignee")," has to be a user inside the same organization. Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"user_id")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"assignee")," when updating or creating entries."),(0,i.kt)("h2",{id:"record-creation"},"Record creation"),(0,i.kt)(r.Z,{method:"POST",url:"https://api.tapeapp.com/v1/record/app/{app_id}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,"A checklist field value can be created as part of a record creation. It is possible to provide either a string, a checklist entry object or an array of those two. It is advised to use an array of objects for the best accuracy of the provided data."),(0,i.kt)("p",null,'Here is an example request body for creating a record with a value for the "Subtasks" field with ID 2, type ',(0,i.kt)("inlineCode",{parentName:"p"},"checklist")," and external ID ",(0,i.kt)("inlineCode",{parentName:"p"},"subtasks")," :"),(0,i.kt)(o.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)(d.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X POST #BASE_URL/v1/record/app/1  \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "subtasks": \n        [\n            {\n                "title": "Clean the kitchen",\n                "description": "Please do not forget the sink.",\n                "due": "2022-03-15"\n            },\n            {\n                "title": "Tidy up the living room",\n                "due": "2022-03-15 15:00"\n            }\n        ]\n    }\n  }\' \n')),(0,i.kt)(s.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "subtasks": [\n      {\n        "title": "Clean the kitchen",\n        "description": "Please do not forget the sink.",\n        "due": "2022-03-15",\n        "assignee": 600\n      },\n      {\n        "title": "Tidy up the living room",\n        "due": "2022-03-15 15:00"\n      }\n    ]\n  }\n}\n')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "record_id": 1,\n  "title": "Tape Technologies GmbH",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "subtasks",\n      "label": "Subtasks",\n      "type": "checklist",\n      "field_type": "checklist",\n      "values": [\n        {\n          "id": 300,\n          "title": "Clean the kitchen",\n          "description": "Please do not forget the sink.",\n          "due": "2022-03-15",\n          "completed": false,\n          "completed_at": null,\n          "assignee": {\n            "user_id": 600,\n            "mail": ["dan@tapeapp.com"],\n            "image": null,\n            "name": "Dan Jacob",\n            "org_id": 1,\n            "type": "user"\n          }\n        },\n        {\n          "id": 301,\n          "title": "Tidy up the living room",\n          "description": "",\n          "due": "2022-03-15 15:00",\n          "completed": false,\n          "completed_at": null,\n          "assignee": null\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Note that the individual checklist entries contain an ID. Be sure to include them in updates, to keep existing checklist entries and to update them. If you omit the ID, new entries will be created instead and the respective existing ones will be removed."),(0,i.kt)("h2",{id:"record-retrieval"},"Record retrieval"),(0,i.kt)(r.Z,{method:"GET",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,"A checklist field value can be retrieved as part of a record retrieval:"),(0,i.kt)(d.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "Tape Technologies GmbH",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "subtasks",\n      "label": "Subtasks",\n      "type": "checklist",\n      "field_type": "checklist",\n      "values": [\n        {\n          "id": 300,\n          "title": "Clean the kitchen",\n          "description": "Please do not forget the sink.",\n          "due": "2022-03-15",\n          "completed": false,\n          "completed_at": null,\n          "assignee": {\n            "user_id": 600,\n            "mail": ["dan@tapeapp.com"],\n            "image": null,\n            "name": "Dan Jacob",\n            "org_id": 1,\n            "type": "user"\n          }\n        },\n        {\n          "id": 301,\n          "title": "Tidy up the living room",\n          "description": "",\n          "due": "2022-03-15 15:00",\n          "completed": false,\n          "completed_at": null,\n          "assigne": null\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"record-update"},"Record update"),(0,i.kt)(r.Z,{method:"PUT",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,"One or more checklist field values can be updated as part of a record update, and individual entries can be updated via their ID. Here is an example request body for updating the entries of a checklist field with external ID ",(0,i.kt)("inlineCode",{parentName:"p"},"subtasks")," of a record, reassigning the first entry to another user and marking the second as completed:"),(0,i.kt)(o.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)(d.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X PUT #BASE_URL/v1/record/1  \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "subtasks": \n      [\n        {\n          "id": 300,\n          "title": "Clean the kitchen",\n          "description": "Please do not forget the sink.",\n          "due": "2022-03-15",\n          "completed": false,\n          "assignee": 601\n        },\n        {\n          "id": 301,\n          "title": "Tidy up the living room",\n          "description": "",\n          "due": "2022-03-15 15:00",\n          "completed": true\n        }\n      ]\n    }\n  }\' \n')),(0,i.kt)(s.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "subtasks": [\n      {\n        "id": 300,\n        "title": "Clean the kitchen",\n        "description": "Please do not forget the sink.",\n        "due": "2022-03-15",\n        "completed": false,\n        "assignee": 601\n      },\n      {\n        "id": 301,\n        "title": "Tidy up the living room",\n        "description": "",\n        "due": "2022-03-15 15:00",\n        "completed": true\n      }\n    ]\n  }\n}\n')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "Tape Technologies GmbH",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "subtasks",\n      "label": "Subtasks",\n      "type": "checklist",\n      "field_type": "checklist",\n      "values": [\n        {\n          "id": 300,\n          "title": "Clean the kitchen",\n          "description": "Please do not forget the sink.",\n          "due": "2022-03-15",\n          "completed": false,\n          "completed_at": null,\n          "assignee": {\n            "user_id": 601,\n            "mail": ["luke@tapeapp.com"],\n            "image": null,\n            "name": "Luke Walker",\n            "org_id": 1,\n            "type": "user"\n          }\n        },\n        {\n          "id": 301,\n          "title": "Tidy up the living room",\n          "description": "",\n          "due": "2022-03-15 15:00",\n          "completed": true,\n          "completed_at": "2022-03-15 14:55",\n          "assigne": null\n        }\n      ]\n    }\n  ]\n}\n')))}f.isMDXComponent=!0}}]);