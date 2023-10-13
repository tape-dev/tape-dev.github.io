"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[9100],{8612:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>y,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>v});var t=a(7462),r=a(3366),o=(a(7294),a(3905)),s=a(4757),l=a(9877),i=a(8215),d=a(7859),c=["components"],p={id:"location",title:"Location Field Value",sidebar_label:"Location"},u=void 0,m={unversionedId:"api/resource/field-value/location",id:"api/resource/field-value/location",title:"Location Field Value",description:"A location field value consists of its value property, an object containing the properties describe a location. The value is a geographic location. A location field value holds at most one location value.",source:"@site/docs/api/resource/field-value/location.md",sourceDirName:"api/resource/field-value",slug:"/api/resource/field-value/location",permalink:"/docs/api/resource/field-value/location",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/field-value/location.md",tags:[],version:"current",frontMatter:{id:"location",title:"Location Field Value",sidebar_label:"Location"},sidebar:"mainSidebar",previous:{title:"Calculation",permalink:"/docs/api/resource/field-value/calculation"},next:{title:"Email",permalink:"/docs/api/resource/field-value/email"}},y={},v=[{value:"Record creation",id:"record-creation",level:2},{value:"Record retrieval",id:"record-retrieval",level:2},{value:"Record update",id:"record-update",level:2}],_={toc:v};function f(e){var n=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},_,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A location field value consists of its ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," property, an object containing the properties describe a location. The value is a geographic location. A ",(0,o.kt)("inlineCode",{parentName:"p"},"location")," field value holds at most one location value."),(0,o.kt)("h2",{id:"record-creation"},"Record creation"),(0,o.kt)(s.Z,{method:"POST",url:"https://api.tapeapp.com/v1/record/app/{app_id}",mdxType:"EndpointBadge"}),(0,o.kt)("p",null,'A location field value can be created as part of a record creation. Here is an example request body for creating a record with a value for the "Company Address" field with ID 2, type ',(0,o.kt)("inlineCode",{parentName:"p"},"location")," and external ID ",(0,o.kt)("inlineCode",{parentName:"p"},"company_address"),":"),(0,o.kt)(l.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)(d.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X POST #BASE_URL/v1/record/app/1 \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "company_address": {\n        "city": "Munich",\n        "country": "Germany",\n        "value": "Hessstr. 6, 80799 Munich, Germany",\n        "state": "Bavaria",\n        "postal_code": "80799",\n        "street_address": "Hessstr. 6"\n      }\n    }\n  }\' \n')),(0,o.kt)(i.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "company_address": {\n      "city": "Munich",\n      "map_in_sync": true,\n      "country": "Germany",\n      "value": "Hessstr. 6, 80799 Munich, Germany",\n      "state": "Bavaria",\n      "postal_code": "80799",\n      "street_address": "Hessstr. 6"\n    }\n  }\n}\n')))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "record_id": 1,\n  "title": "Hessstr. 6, 80799 Munich, Germany",\n  "fields": [\n    {\n      "field_Id": 2,\n      "external_id": "company_address",\n      "type": "location",\n      "field_type": "single_location",\n      "label": "Company Address",\n      "values": [\n        {\n          "city": "Munich",\n          "map_in_sync": true,\n          "country": "Germany",\n          "original_formatted_address": "Hessstr. 6, 80799 Munich, Germany",\n          "value": "Hessstr. 6, 80799 Munich, Germany",\n          "state": "Bavaria",\n          "postal_code": "80799",\n          "street_address": "Hessstr. 6"\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"record-retrieval"},"Record retrieval"),(0,o.kt)(s.Z,{method:"GET",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,o.kt)("p",null,"A location field value can be retrieved as part of a record retrieval:"),(0,o.kt)(d.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "Hessstr. 6, 80799 Munich, Germany",\n  "fields": [\n    {\n      "field_Id": 2,\n      "external_id": "company_address",\n      "type": "location",\n      "field_type": "single_location",\n      "label": "Company Address",\n      "values": [\n        {\n          "city": "Munich",\n          "map_in_sync": true,\n          "country": "Germany",\n          "original_formatted_address": "Hessstr. 6, 80799 Munich, Germany",\n          "value": "Hessstr. 6, 80799 Munich, Germany",\n          "state": "Bavaria",\n          "postal_code": "80799",\n          "street_address": "Hessstr. 6"\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"record-update"},"Record update"),(0,o.kt)(s.Z,{method:"PUT",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,o.kt)("p",null,'One or more location field values can be updated as part of a record update. Here is an example request body for updating a record with a value for the "Company Address" field with ID 2, type ',(0,o.kt)("inlineCode",{parentName:"p"},"location")," and external ID ",(0,o.kt)("inlineCode",{parentName:"p"},"company_address"),":"),(0,o.kt)(l.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)(d.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X PUT #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "company_address": {\n        "city": "Munich",\n        "country": "Germany",\n        "value": "Hessstr. 6, 80799 Munich, Germany",\n        "state": "Bavaria",\n        "postal_code": "80799",\n        "street_address": "Hessstr. 6"\n      }\n    }\n  }\' \n')),(0,o.kt)(i.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "company_address": {\n      "city": "Munich",\n      "map_in_sync": true,\n      "country": "Germany",\n      "value": "Hessstr. 6, 80799 Munich, Germany",\n      "state": "Bavaria",\n      "postal_code": "80799",\n      "street_address": "Hessstr. 6"\n    }\n  }\n}\n')))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "record_id": 1,\n  "title": "Hessstr. 6, 80799 Munich, Germany",\n  "fields": [\n    {\n      "field_Id": 2,\n      "external_id": "company_address",\n      "type": "location",\n      "field_type": "single_location",\n      "label": "Company Address",\n      "values": [\n        {\n          "city": "Munich",\n          "map_in_sync": true,\n          "country": "Germany",\n          "original_formatted_address": "Hessstr. 6, 80799 Munich, Germany",\n          "value": "Hessstr. 6, 80799 Munich, Germany",\n          "state": "Bavaria",\n          "postal_code": "80799",\n          "street_address": "Hessstr. 6"\n        }\n      ]\n    }\n  ]\n}\n')))}f.isMDXComponent=!0}}]);