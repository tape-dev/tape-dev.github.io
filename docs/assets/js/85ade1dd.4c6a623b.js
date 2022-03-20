"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[9440],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),d=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(r),m=n,k=s["".concat(i,".").concat(m)]||s[m]||u[m]||l;return r?a.createElement(k,p(p({ref:t},c),{},{components:r})):a.createElement(k,p({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var d=2;d<l;d++)p[d]=r[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2566:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);function n(e){var t,r=e.method,n=e.url;switch(r){case"GET":t="#007959";break;case"POST":t="#0071BB";break;case"PUT":t="#DEA700";break;case"DELETE":t="#DF245E"}return a.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"15px",lineHeight:"15px",marginBottom:"13px"}},a.createElement("span",{style:{backgroundColor:t,color:"var(--tape-color-lightest)",borderRadius:"999px",padding:"4px 9px 3px 9px",fontWeight:700,fontSize:"11px",lineHeight:"11px"}},r.toUpperCase()),a.createElement("span",{style:{color:"var(--tape-color-darker)",marginLeft:"9px",marginTop:"2px"}},n))}},6229:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),p=r(2566),o=["components"],i={id:"record",title:"Record",sidebar_label:"Record"},d=void 0,c={unversionedId:"api/resource/record",id:"api/resource/record",title:"Record",description:"Records are the place where work gets done inside a Tape organization.",source:"@site/docs/api/resource/record.md",sourceDirName:"api/resource",slug:"/api/resource/record",permalink:"/docs/api/resource/record",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/record.md",tags:[],version:"current",frontMatter:{id:"record",title:"Record",sidebar_label:"Record"},sidebar:"mainSidebar",previous:{title:"Date & Timezone",permalink:"/docs/api/date-timezone"},next:{title:"App",permalink:"/docs/api/resource/app"}},u={},s=[{value:"Create Record",id:"create-record",level:2},{value:"Retrieve Record",id:"retrieve-record",level:2},{value:"Update Record",id:"update-record",level:2},{value:"Delete Record",id:"delete-record",level:2},{value:"Get Records for App",id:"get-records-for-app",level:2},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Filter Records for App",id:"filter-records-for-app",level:2},{value:"Query Parameters",id:"query-parameters-1",level:3},{value:"Request body",id:"request-body",level:3}],m={toc:s};function k(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Records are the place where work gets done inside a Tape organization."),(0,l.kt)("h2",{id:"create-record"},"Create Record"),(0,l.kt)(p.Z,{method:"POST",url:"https://api.tapeapp.com/v1/record/app/{app_id}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"Creates a new record for the App with the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"app_id")," and returns the newly created record.`."),(0,l.kt)("h2",{id:"retrieve-record"},"Retrieve Record"),(0,l.kt)(p.Z,{method:"GET",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"Returns the record with the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"record_id"),"."),(0,l.kt)("h2",{id:"update-record"},"Update Record"),(0,l.kt)(p.Z,{method:"PUT",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"Updates the record with the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"record_id")," and returns the updated record.`."),(0,l.kt)("h2",{id:"delete-record"},"Delete Record"),(0,l.kt)(p.Z,{method:"DELETE",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"Delete the record with the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"record_id"),"."),(0,l.kt)("h2",{id:"get-records-for-app"},"Get Records for App"),(0,l.kt)(p.Z,{method:"GET",url:"https://api.tapeapp.com/v1/record/app/{app_id}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"Returns records for the App with the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"app_id"),"."),(0,l.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"}," Type")),(0,l.kt)("th",{parentName:"tr",align:null},"Min"),(0,l.kt)("th",{parentName:"tr",align:null},"Max"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of records to return. Defaults to 50."),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"500")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cursor"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Cursor for pagination"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sort_by"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Slug of the field that should be sorted by."),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"filter-records-for-app"},"Filter Records for App"),(0,l.kt)(p.Z,{method:"POST",url:"https://api.tapeapp.com/v1/record/app/{app_id}/filter",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"Returns records for the App with the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"app_id")," based on the filters and sorts."),(0,l.kt)("h3",{id:"query-parameters-1"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Min"),(0,l.kt)("th",{parentName:"tr",align:null},"Max"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of records to return. Defaults to 50."),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"500")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cursor"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Cursor for pagination"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sort_by"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Slug of the field that should be sorted by."),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"request-body"},"Request body"))}k.isMDXComponent=!0}}]);