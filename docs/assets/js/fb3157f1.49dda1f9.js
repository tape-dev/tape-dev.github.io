"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[5452],{3167:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>k,contentTitle:()=>c,default:()=>T,frontMatter:()=>o,metadata:()=>m,toc:()=>f});var t=i(7462),a=i(3366),l=(i(7294),i(3905)),d=i(4757),p=i(9877),s=i(8215),u=i(7859),r=["components"],o={id:"unique-id",title:"Unique-Id Field",sidebar_label:"Unique-Id"},c=void 0,m={unversionedId:"api/resource/field/unique-id",id:"api/resource/field/unique-id",title:"Unique-Id Field",description:"There is only type of uniqueid field: uniqueid.",source:"@site/docs/api/resource/field/unique-id.md",sourceDirName:"api/resource/field",slug:"/api/resource/field/unique-id",permalink:"/docs/api/resource/field/unique-id",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/field/unique-id.md",tags:[],version:"current",frontMatter:{id:"unique-id",title:"Unique-Id Field",sidebar_label:"Unique-Id"},sidebar:"mainSidebar",previous:{title:"Checklist",permalink:"/docs/api/resource/field/checklist"},next:{title:"Calculation",permalink:"/docs/api/resource/field/calculation"}},k={},f=[{value:"App creation",id:"app-creation",level:2},{value:"App update",id:"app-update",level:2}],_={toc:f};function T(e){var n=e.components,i=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,t.Z)({},_,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"There is only type of unique_id field: ",(0,l.kt)("inlineCode",{parentName:"p"},"unique_id"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"unique_id"),' fields cannot be set manually, but are automatically generated by Tape. They are used to uniquely identify records within an app.\nThe first record of an app will have the unique_id "1", the second record "2", etc.'),(0,l.kt)("p",null,"In addition to the common field properties, a unique_id field has the following settings:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"min_digits")," (optional): minimum number of digits of the unique_id field-values. Can be any integer between 1 and 12. (default: 1). In case the number of digits of the unique_id field-value is smaller than ",(0,l.kt)("inlineCode",{parentName:"li"},"min_digits"),", the unique_id field-value will be padded with leading zeros."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prefix"),' (optional): prefix of the unique_id field-values. Can be any string, e.g. "DEAL-" for tickets, "Ticket-" for tickets, etc.')),(0,l.kt)("p",null,"Currently, unique_id field values are not returned in the API responses of the record endpoints. However, they can be used for viewing, searching for and filtering records in the web-application.\nThe unique_id value (without its prefix) however is returned as the property ",(0,l.kt)("inlineCode",{parentName:"p"},"app_record_id")," in the API responses of the record endpoints."),(0,l.kt)("h2",{id:"app-creation"},"App creation"),(0,l.kt)(d.Z,{method:"POST",url:"https://api.tapeapp.com/v1/app",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"A unique_id field can be created as part of an App creation. Here is an example request body for creating an excerpt for a Tickets app within a workspace with ID 1.\nThe app contains a ",(0,l.kt)("inlineCode",{parentName:"p"},"unique_id"),' field "Ticket-ID". Other useful fields for a tickets app, like "Title", "Status" or "Description" are omitted for brevity.'),(0,l.kt)(p.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,l.kt)(u.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'\ncurl -X POST #BASE_URL/v1/app/ \\\n   -u #USER_API_KEY: \\\n   -H "Content-Type: application/json" \\\n   --data \'{\n    "workspace_id": 1,\n    "name": "Tickets",\n    "item_name": "Ticket",\n    "fields": [\n      {\n        "field_type": "unique_id",\n        "config": {\n          "label": "Ticket-ID",\n          "settings": {\n            "min_digits": 4,\n            "prefix": "Ticket-"\n          }\n        }\n      }\n    ] \n  }\'\n')),(0,l.kt)(s.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "workspace_id": 1,\n  "name": "Tickets",\n  "item_name": "Ticket",\n  "fields": [\n    {\n      "field_type": "unique_id",\n      "config": {\n        "label": "Ticket-ID",\n        "settings": {\n          "min_digits": 4,\n          "prefix": "Ticket-"\n        }\n      }\n    }\n  ]\n}\n')))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "app_id": 1,\n  "workspace_id": 1,\n  "slug": "tickets",\n  "name": "Tickets",\n  "item_name": "Ticket",\n  "position": 0,\n  "config": {\n    "item_name": "Ticket",\n    "name": "Tickets"\n  },\n  "fields": [\n    {\n      "field_id": 1,\n      "slug": "ticket_id",\n      "label": "Ticket-ID",\n      "type": "unique_id",\n      "field_type": "unique_id",\n      "config": {\n        "label": "Ticket-ID",\n        "slug": "ticket_id",\n        "always_hidden": false,\n        "hidden_if_empty": false,\n        "settings": {\n          "prefix": "Ticket-",\n          "min_digits": 4\n        }\n      }\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"app-update"},"App update"),(0,l.kt)(d.Z,{method:"PUT",url:"https://api.tapeapp.com/v1/app/{appId}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"A unique_id field can be created or updated as part of an App update. Here is an example request body for updating the previously created tickets app with ID 1.\nThe update sets the ",(0,l.kt)("inlineCode",{parentName:"p"},"min_digits")," to 5."),(0,l.kt)(p.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,l.kt)(u.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'\ncurl -X PUT #BASE_URL/v1/app/1 \\\n  -u #USER_API_KEY: \\\n   -H "Content-Type: application/json"    --data \'{\n    "app_id": 1,\n    "name": "Tickets",\n    "item_name": "Ticket",\n    "fields": [\n      {\n        "field_id": 1,\n         "config": {\n            "label": "Ticket-ID",\n            "settings": {\n              "min_digits": 5,\n              "prefix": "Ticket-"\n            }\n        }\n      }\n    ] \n  }\'\n')),(0,l.kt)(s.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "app_id": 1,\n  "name": "Tickets",\n  "item_name": "Ticket",\n  "fields": [\n    {\n      "field_id": 1,\n      "config": {\n        "label": "Ticket-ID",\n        "settings": {\n          "min_digits": 5,\n          "prefix": "Ticket-"\n        }\n      }\n    }\n  ]\n}\n')))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "app_id": 1,\n  "workspace_id": 1,\n  "slug": "tickets",\n  "name": "Tickets",\n  "item_name": "Ticket",\n  "position": 0,\n  "config": {\n    "item_name": "Ticket",\n    "name": "Tickets"\n  },\n  "fields": [\n    {\n      "field_id": 1,\n      "slug": "ticket_id",\n      "label": "Ticket-ID",\n      "type": "unique_id",\n      "field_type": "unique_id",\n      "config": {\n        "label": "Ticket-ID",\n        "slug": "ticket_id",\n        "required": false,\n        "always_hidden": false,\n        "hidden_if_empty": false,\n        "settings": {\n          "prefix": "Ticket-",\n          "min_digits": 5\n        }\n      }\n    }\n  ]\n}```\n\n')))}T.isMDXComponent=!0}}]);