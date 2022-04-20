"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[402],{3153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>_,frontMatter:()=>u,metadata:()=>c,toc:()=>x});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),r=n(4757),d=n(9877),s=n(8215),p=n(7859),o=["components"],u={id:"text",title:"Text Field Value",sidebar_label:"Text"},m=void 0,c={unversionedId:"api/resource/field-value/text",id:"api/resource/field-value/text",title:"Text Field Value",description:"A text field value consists of its value property of type string. The value is plaintext if the type of its corresponding field is singletext and rich-text (HTML) if the field's type is multitext.",source:"@site/docs/api/resource/field-value/text.md",sourceDirName:"api/resource/field-value",slug:"/api/resource/field-value/text",permalink:"/docs/api/resource/field-value/text",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/field-value/text.md",tags:[],version:"current",frontMatter:{id:"text",title:"Text Field Value",sidebar_label:"Text"},sidebar:"mainSidebar",previous:{title:"General",permalink:"/docs/api/resource/field-value/general"},next:{title:"Status",permalink:"/docs/api/resource/field-value/status"}},f={},x=[{value:"Record creation",id:"record-creation",level:2},{value:"Record retrieval",id:"record-retrieval",level:2},{value:"Record update",id:"record-update",level:2}],v={toc:x};function _(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A text field value consists of its ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," property of type ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),". The value is plaintext if the type of its corresponding field is ",(0,i.kt)("inlineCode",{parentName:"p"},"single_text")," and rich-text (HTML) if the field's type is ",(0,i.kt)("inlineCode",{parentName:"p"},"multi_text"),"."),(0,i.kt)("h2",{id:"record-creation"},"Record creation"),(0,i.kt)(r.Z,{method:"POST",url:"https://api.tapeapp.com/v1/record/app/{app_id}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,'A text field value can be created as part of a record creation. Here is an example request body for creating a record with a value for the "First Name" field with ID 1, type ',(0,i.kt)("inlineCode",{parentName:"p"},"single_text")," and external ID ",(0,i.kt)("inlineCode",{parentName:"p"},"first_name"),' and a value for the "Notes" field with ID 2, type ',(0,i.kt)("inlineCode",{parentName:"p"},"multi_text")," and external ID ",(0,i.kt)("inlineCode",{parentName:"p"},"notes"),":"),(0,i.kt)(d.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)(p.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X POST #BASE_URL/v1/record/app/1 \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "first_name": "Adam Smith",\n      "notes": "<p>Registered <b>10</b> month ago.</p>"\n    }\n  }\' \n')),(0,i.kt)(s.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "first_name": "Adam Smith",\n    "notes": "<p>Registered <b>10</b> month ago.</p>"\n  }\n}\n')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "record_id": 1,\n  "title": "Adam Smith",\n  "fields": [\n    {\n      "field_Id": 1,\n      "external_id": "first_name",\n      "type": "text",\n      "field_type": "single_text",\n      "label": "First Name",\n      "values": [{ "value": "Adam Smith" }]\n    },\n    {\n      "field_Id": 2,\n      "external_id": "notes",\n      "type": "text",\n      "field_type": "multi_text",\n      "label": "Notes",\n      "values": [{ "value": "<p>Registered <b>10</b> month ago.</p>" }]\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"record-retrieval"},"Record retrieval"),(0,i.kt)(r.Z,{method:"GET",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,"A text field value can be retrieved as part of a record retrieval:"),(0,i.kt)(p.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "Adam Smith",\n  "fields": [\n    {\n      "field_Id": 1,\n      "external_id": "first_name",\n      "type": "text",\n      "field_type": "single_text",\n      "label": "First Name",\n      "values": [{ "value": "Adam Smith" }]\n    },\n    {\n      "field_Id": 2,\n      "external_id": "notes",\n      "type": "text",\n      "field_type": "multi_text",\n      "label": "Notes",\n      "values": [{ "value": "<p>Registered <b>10</b> month ago.</p>" }]\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"record-update"},"Record update"),(0,i.kt)(r.Z,{method:"PUT",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,'One or more text field values can be updated as part of a record update. Here is an example request body for updating a record with a value for the "First Name" field with ID 1, type ',(0,i.kt)("inlineCode",{parentName:"p"},"single_text")," and external ID ",(0,i.kt)("inlineCode",{parentName:"p"},"first_name"),' and a value for the "Notes" field with ID 2, type ',(0,i.kt)("inlineCode",{parentName:"p"},"multi_text")," and external ID ",(0,i.kt)("inlineCode",{parentName:"p"},"notes"),":"),(0,i.kt)(d.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)(p.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X PUT #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "first_name": "Andrea Lim",\n      "notes": "<p>Has <b>not</b> registered yet.</p>"\n    }\n  }\' \n')),(0,i.kt)(s.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "first_name": "Andrea Lim",\n    "notes": "<p>Has <b>not</b> registered yet.</p>"\n  }\n}\n')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "record_id": 1,\n  "title": "Andrea Lim",\n  "fields": [\n    {\n      "field_Id": 1,\n      "external_id": "first_name",\n      "type": "text",\n      "field_type": "single_text",\n      "label": "First Name",\n      "values": [{ "value": "Andrea Lim" }]\n    },\n    {\n      "field_Id": 2,\n      "external_id": "notes",\n      "type": "text",\n      "field_type": "multi_text",\n      "label": "Notes",\n      "values": [{ "value": "<p>Has <b>not</b> registered yet.</p>" }]\n    }\n  ]\n}\n')))}_.isMDXComponent=!0}}]);