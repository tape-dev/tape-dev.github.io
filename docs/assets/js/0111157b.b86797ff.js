"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[6858],{8253:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var a=t(7462),n=t(3366),l=(t(7294),t(3905)),r=["components"],d={id:"overview",title:"Field",sidebar_label:"Overview"},p=void 0,o={unversionedId:"api/resource/field/overview",id:"api/resource/field/overview",title:"Field",description:"An App consist of its static properties like app_id, name or config and its fields.",source:"@site/docs/api/resource/field/general.md",sourceDirName:"api/resource/field",slug:"/api/resource/field/overview",permalink:"/docs/api/resource/field/overview",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/field/general.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Field",sidebar_label:"Overview"},sidebar:"mainSidebar",previous:{title:"App",permalink:"/docs/api/resource/app"},next:{title:"Text",permalink:"/docs/api/resource/field/text"}},s={},h=[{value:"Common Properties",id:"common-properties",level:2},{value:"Field type",id:"field-type",level:2}],f={toc:h};function u(e){var i=e.components,t=(0,n.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},f,t,{components:i,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"An App consist of its static properties like ",(0,l.kt)("inlineCode",{parentName:"p"},"app_id"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"config"),' and its fields.\nAn example "Contacts" app could have the fields "First name" (text), "Last Name" (text) and "Phone number" (phone).'),(0,l.kt)("p",null,'The fields of an App determine the structure of the records within the app. Adding a record to this app includes specifying its field values for each of the fields "First Name", "Last Name" and "Phone number".'),(0,l.kt)("p",null,"Each field object can be uniquely identified via its ",(0,l.kt)("inlineCode",{parentName:"p"},"field_id"),". Fields are returned as part of an app and can be created and updated via the App endpoint.\nFields can be created as part of the create App endpoint and created or updated via the update App endpoint."),(0,l.kt)("h2",{id:"common-properties"},"Common Properties"),(0,l.kt)("p",null,"All fields share the following properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"label"),": The label (= name) of the field. This is the name of the field that is displayed to the user."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"description"),": The description of the field. This is the help text that is displayed to the user."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"slug"),": The slug of the field. This is the unique identifier of the field. The slug is used to identify the field in the record create and update endpoints of the API."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"external_id"),": equal to the property slug. The slug is used to identify the field in the record create and update endpoints of the API."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"required"),": Whether the field is required or not. If a field is required, it must have a value when creating or updating a record."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hidden_if_empty"),": Whether the field is hidden if it has no value. If a field is hidden if empty, it is not displayed in the record if it has no value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"always_hidden"),": Whether the field is always hidden. If a field is always hidden, it is not displayed in the record, even if it has a value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"field")," type: See below."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"settings"),": The field-type specific settings of a field. The structure of this object depends on the field type.")),(0,l.kt)("h2",{id:"field-type"},"Field type"),(0,l.kt)("p",null,"Each field has a ",(0,l.kt)("inlineCode",{parentName:"p"},"field_type")," property. The ",(0,l.kt)("inlineCode",{parentName:"p"},"field_type")," property specifies the type of the field like ",(0,l.kt)("inlineCode",{parentName:"p"},"single_text"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"multi_text"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"single_category")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"multi_phone"),". Whenever there is an option to specify whether to allow one or more values per field, the ",(0,l.kt)("inlineCode",{parentName:"p"},"field_type")," specifies this information in its prefix. Tape distinguishes between these field types down to the database level so that a field value for a field of type ",(0,l.kt)("inlineCode",{parentName:"p"},"single_category")," can never have multiple category options selected. Therefore, switching from e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"single_category"),"to ",(0,l.kt)("inlineCode",{parentName:"p"},"multi_category")," requires a field conversion where all field values are migrated."))}u.isMDXComponent=!0}}]);