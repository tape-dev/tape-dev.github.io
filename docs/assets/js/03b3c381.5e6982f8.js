"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[7097],{7437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>v,frontMatter:()=>p,metadata:()=>u,toc:()=>h});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),r=n(4757),o=n(9877),d=n(8215),m=n(7859),s=["components"],p={id:"attachment",title:"Attachment Field Value",sidebar_label:"Attachment"},c=void 0,u={unversionedId:"api/resource/field-value/attachment",id:"api/resource/field-value/attachment",title:"Attachment Field Value",description:"An attachment field value consists of its value property which holds a reference to an attachment. An attachment has the properties id (unique ID), filename (the filename), size (filesize in bytes), download_url (URL to download the file) and others.",source:"@site/docs/api/resource/field-value/attachment.md",sourceDirName:"api/resource/field-value",slug:"/api/resource/field-value/attachment",permalink:"/docs/api/resource/field-value/attachment",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/field-value/attachment.md",tags:[],version:"current",frontMatter:{id:"attachment",title:"Attachment Field Value",sidebar_label:"Attachment"},sidebar:"mainSidebar",previous:{title:"Relation",permalink:"/docs/api/resource/field-value/relation"},next:{title:"Image",permalink:"/docs/api/resource/field-value/image"}},f={},h=[{value:"Record creation",id:"record-creation",level:2},{value:"Record retrieval",id:"record-retrieval",level:2},{value:"Record update",id:"record-update",level:2}],_={toc:h};function v(e){var t=e.components,n=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An attachment field value consists of its ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," property which holds a reference to an attachment. An attachment has the properties ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," (unique ID), ",(0,i.kt)("inlineCode",{parentName:"p"},"filename")," (the filename), ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," (filesize in bytes), ",(0,i.kt)("inlineCode",{parentName:"p"},"download_url")," (URL to download the file) and others.\nA ",(0,i.kt)("inlineCode",{parentName:"p"},"single_attachment")," field value holds at most one attachment reference while a ",(0,i.kt)("inlineCode",{parentName:"p"},"multi_attachment")," field value can hold multiple attachment references."),(0,i.kt)("p",null,"Attachment fields behave quite similarly to ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/resource/field-value/image"},"image fields"),", also allowing non-image files."),(0,i.kt)("p",null,"More details on the file object and the two-step file upload process can be found ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/resource/file"},"here"),"."),(0,i.kt)("h2",{id:"record-creation"},"Record creation"),(0,i.kt)(r.Z,{method:"POST",url:"https://api.tapeapp.com/v1/record/app/{app_id}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,'A attachment field value can be created as part of a record creation. Files can be specified as temporary file IDs (strings), existing file IDs of the same field (integers) and existing file IDs of different Attachment or Image fields (integers). Here is an example request body for creating a record with a value for the "Letter of recommendation" field with ID 2, type ',(0,i.kt)("inlineCode",{parentName:"p"},"single_attachment")," and external ID ",(0,i.kt)("inlineCode",{parentName:"p"},"letter_of_recommendation"),' and a value for the "HR documents" field with ID 3, type ',(0,i.kt)("inlineCode",{parentName:"p"},"multi_attachment")," and external ID ",(0,i.kt)("inlineCode",{parentName:"p"},"hr_documents"),":"),(0,i.kt)(o.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,i.kt)(d.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)(m.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X POST #BASE_URL/v1/record/app/1 \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "letter_of_recommendation": "temporary-file-1",\n      "hr_documents": ["temporary-file-2", "temporary-file-3"]\n    }\n  }\' \n')),(0,i.kt)(d.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "letter_of_recommendation": "temporary-file-1",\n    "hr_documents": ["temporary-file-2", "temporary-file-3"]\n  }\n}\n')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "record_id": 1,\n  "title": "200301_letter-of-recommendation.pdf",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "letter_of_recommendation",\n      "label": "Letter of recommendation",\n      "type": "attachment",\n      "field_type": "single_attachment",\n      "values": [\n        {\n          "value": {\n            "id": 100,\n            "filename": "200301_letter-of-recommendation.pdf",\n            "size": 12300\n          }\n        }\n      ]\n    },\n    {\n      "field_id": 3,\n      "external_id": "hr_documents",\n      "label": "HR Documents",\n      "field_type": "multi_attachment",\n      "type": "attachment",\n      "values": [\n        {\n          "value": {\n            "id": 101,\n            "filename": "200301_hr_document-1.pdf",\n            "size": 15000\n          }\n        },\n        {\n          "value": {\n            "id": 102,\n            "filename": "200301_hr_document-2.pdf",\n            "size": 16000\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"record-retrieval"},"Record retrieval"),(0,i.kt)(r.Z,{method:"GET",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,"A attachment field value can be retrieved as part of a record retrieval:"),(0,i.kt)(m.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "200301_letter-of-recommendation.pdf",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "letter_of_recommendation",\n      "label": "Letter of recommendation",\n      "type": "attachment",\n      "field_type": "single_attachment",\n      "values": [\n        {\n          "value": {\n            "id": 100,\n            "filename": "200301_letter-of-recommendation.pdf",\n            "size": 12300\n          }\n        }\n      ]\n    },\n    {\n      "field_id": 3,\n      "external_id": "hr_documents",\n      "label": "HR Documents",\n      "field_type": "multi_attachment",\n      "type": "attachment",\n      "values": [\n        {\n          "value": {\n            "id": 101,\n            "filename": "200301_hr_document-1.pdf",\n            "size": 15000\n          }\n        },\n        {\n          "value": {\n            "id": 102,\n            "filename": "200301_hr_document-2.pdf",\n            "size": 16000\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"record-update"},"Record update"),(0,i.kt)(r.Z,{method:"PUT",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,"One or more attachment field values can be updated as part of a record update. Existing IDs of the same field (integers), existing IDs of different Attachment or Image fields (integers) as well as temporary file IDs (strings) can be provided as input.\nHere is an example request body for updating multiple attachment field values of a record:"),(0,i.kt)(o.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,i.kt)(d.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)(m.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X PUT #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "letter_of_recommendation": "temporary-file-2",\n      "hr_documents": ["temporary-file-6", 102]\n    }\n  }\' \n')),(0,i.kt)(d.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "letter_of_recommendation": "temporary-file-2",\n    "hr_documents": ["temporary-file-6", 102]\n  }\n}\n')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "200301_letter-of-recommendation.pdf",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "letter_of_recommendation",\n      "label": "Letter of recommendation",\n      "type": "attachment",\n      "field_type": "single_attachment",\n      "values": [\n        {\n          "value": {\n            "id": 100,\n            "filename": "200301_letter-of-recommendation.pdf",\n            "size": 12300\n          }\n        }\n      ]\n    },\n    {\n      "field_id": 3,\n      "external_id": "hr_documents",\n      "label": "HR Documents",\n      "field_type": "multi_attachment",\n      "type": "attachment",\n      "values": [\n        {\n          "value": {\n            "id": 101,\n            "filename": "200301_hr_document-1.pdf",\n            "size": 15000\n          }\n        },\n        {\n          "value": {\n            "id": 102,\n            "filename": "200301_hr_document-2.pdf",\n            "size": 16000\n          }\n        }\n      ]\n    }\n  ]\n}\n')))}v.isMDXComponent=!0}}]);