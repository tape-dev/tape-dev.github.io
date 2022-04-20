"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[896],{5480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>m,toc:()=>k});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),l=t(4757),i=t(9877),p=t(8215),d=t(7859),s=["components"],u={id:"phone",title:"Phone Field Value",sidebar_label:"Phone"},c=void 0,m={unversionedId:"api/resource/field-value/phone",id:"api/resource/field-value/phone",title:"Phone Field Value",description:"A phone field value consists of its value property which holds one or multiple phone number entries. An entry contains the phone number itself, plus its type, e.g. work or home.",source:"@site/docs/api/resource/field-value/phone.md",sourceDirName:"api/resource/field-value",slug:"/api/resource/field-value/phone",permalink:"/docs/api/resource/field-value/phone",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/field-value/phone.md",tags:[],version:"current",frontMatter:{id:"phone",title:"Phone Field Value",sidebar_label:"Phone"},sidebar:"mainSidebar",previous:{title:"Email",permalink:"/docs/api/resource/field-value/email"},next:{title:"Record Comment",permalink:"/docs/api/resource/record-comment"}},h={},k=[{value:"Record creation",id:"record-creation",level:2},{value:"Record retrieval",id:"record-retrieval",level:2},{value:"Record update",id:"record-update",level:2}],v={toc:k};function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A phone field value consists of its ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," property which holds one or multiple phone number entries. An entry contains the phone number itself, plus its type, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"work")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"home"),"."),(0,r.kt)("p",null,"Currently the following values are allowed as type: ",(0,r.kt)("inlineCode",{parentName:"p"},"work"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"work_fax"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"home"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"home_fax"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mobile"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"other"),". If no type is provided, phone address entries always default to ",(0,r.kt)("inlineCode",{parentName:"p"},"work"),"."),(0,r.kt)("h2",{id:"record-creation"},"Record creation"),(0,r.kt)(l.Z,{method:"POST",url:"https://api.tapeapp.com/v1/record/app/{app_id}",mdxType:"EndpointBadge"}),(0,r.kt)("p",null,"A phone field value can be created as part of a record creation. It is possible to provide either a string, an object following the phone number entry structure or an array of those two. It is advised to use an array of objects for the best accuracy of the provided data."),(0,r.kt)("p",null,'Here is an example request body for creating a record with a value for the "Customer phone" field with ID 2, type ',(0,r.kt)("inlineCode",{parentName:"p"},"multi_phone")," and external ID ",(0,r.kt)("inlineCode",{parentName:"p"},"customer_phone")," :"),(0,r.kt)(i.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)(d.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X POST #BASE_URL/v1/record/app/1  \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "customer_phone": \n        [\n          {"type": "work", "phone": "+1 444 555"},\n          {"type": "home", "phone": "+1 777 111"}\n        ]\n    }\n  }\' \n')),(0,r.kt)(p.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "customer_phone": [\n      { "type": "work", "phone": "+1 444 555" },\n      { "type": "home", "phone": "+1 777 111" }\n    ]\n  }\n}\n')))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "record_id": 1,\n  "title": "Tape Technologies GmbH",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "customer_phone",\n      "label": "Customer phone",\n      "type": "phone",\n      "field_type": "multi_phone",\n      "values": [\n        {\n          "id": 100,\n          "value": "+1 444 555",\n          "type": "work"\n        },\n        {\n          "id": 101,\n          "value": "+1 777 111",\n          "type": "home"\n        }\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Note that the individual phone number entries contain an ID. Be sure to include them in updates, to keep existing phone entries. If you omit the ID, new entries will be created instead and the respective existing ones will be removed."),(0,r.kt)("h2",{id:"record-retrieval"},"Record retrieval"),(0,r.kt)(l.Z,{method:"GET",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,r.kt)("p",null,"A phone field value can be retrieved as part of a record retrieval:"),(0,r.kt)(d.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "Tape Technologies GmbH",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "customer_phone",\n      "label": "Customer phone",\n      "type": "phone",\n      "field_type": "multi_phone",\n      "values": [\n        {\n          "id": 100,\n          "value": "+1 444 555",\n          "type": "work"\n        },\n        {\n          "id": 101,\n          "value": "+1 777 111",\n          "type": "home"\n        }\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"record-update"},"Record update"),(0,r.kt)(l.Z,{method:"PUT",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,r.kt)("p",null,"One or more phone field values can be updated as part of a record update, and individual entries can be updated via their ID. Here is an example request body for updating the phone entries of a phone field with external ID ",(0,r.kt)("inlineCode",{parentName:"p"},"customer_phone")," of a record:"),(0,r.kt)(i.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)(d.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X PUT #BASE_URL/v1/record/1  \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "customer_phone": \n      [\n        { "id": 100, "type": "work", "phone": "+1 444 333" },\n        { "type": "other", "phone": "+1 888 888" }\n      ]\n    }\n  }\' \n')),(0,r.kt)(p.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "customer_phone": [\n      { "id": 100, "type": "work", "phone": "+1 444 333" },\n      { "type": "other", "phone": "+1 888 888" }\n    ]\n  }\n}\n')))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "Tape Technologies GmbH",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "customer_phone",\n      "label": "Customer phone",\n      "type": "phone",\n      "field_type": "multi_phone",\n      "values": [\n        {\n          "id": 100,\n          "value": "+1 444 333",\n          "type": "work"\n        },\n        {\n          "id": 102,\n          "value": "+1 888 888",\n          "type": "other"\n        }\n      ]\n    }\n  ]\n}\n')))}f.isMDXComponent=!0}}]);