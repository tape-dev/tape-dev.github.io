"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[53],{5601:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"mainSidebar":[{"type":"category","label":"Developer API","collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/docs/api/introduction","docId":"api/introduction"},{"type":"link","label":"Authentication","href":"/docs/api/authentication","docId":"api/authentication"},{"type":"link","label":"Pagination","href":"/docs/api/pagination","docId":"api/pagination"},{"type":"link","label":"Versioning","href":"/docs/api/versioning","docId":"api/versioning"},{"type":"link","label":"Errors","href":"/docs/api/errors","docId":"api/errors"},{"type":"link","label":"Request Limits","href":"/docs/api/request-limits","docId":"api/request-limits"},{"type":"link","label":"Date & Timezone","href":"/docs/api/date-timezone","docId":"api/date-timezone"},{"type":"category","label":"Resources","collapsed":false,"items":[{"type":"link","label":"Record","href":"/docs/api/resource/record","docId":"api/resource/record"},{"type":"link","label":"App","href":"/docs/api/resource/app","docId":"api/resource/app"},{"type":"link","label":"Workspace","href":"/docs/api/resource/workspace","docId":"api/resource/workspace"},{"type":"link","label":"File","href":"/docs/api/resource/files","docId":"api/resource/files"}],"collapsible":true}],"collapsible":true},{"type":"category","label":"Calculation Field","collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/docs/calculation/introduction","docId":"calculation/introduction"},{"type":"link","label":"Libraries","href":"/docs/calculation/libraries","docId":"calculation/libraries"},{"type":"link","label":"Markdown","href":"/docs/calculation/markdown","docId":"calculation/markdown"},{"type":"link","label":"HTML & CSS","href":"/docs/calculation/html","docId":"calculation/html"},{"type":"category","label":"Components","collapsed":false,"items":[{"type":"link","label":"Links","href":"/docs/calculation/component/link","docId":"calculation/component/link"},{"type":"link","label":"Buttons","href":"/docs/calculation/component/button","docId":"calculation/component/button"}],"collapsible":true}],"collapsible":true},{"type":"link","label":"Contribute","href":"/docs/contribute","docId":"contribute"},{"type":"link","label":"Roadmap","href":"https://get.tapeapp.com/roadmap/"}],"guidesSidebar":[{"type":"link","label":"Getting Started","href":"/docs/guide/getting-started","docId":"guide/getting-started"},{"type":"link","label":"Contribute","href":"/docs/contribute","docId":"contribute"},{"type":"link","label":"Roadmap","href":"https://get.tapeapp.com/roadmap/"}]},"docs":{"api/authentication":{"id":"api/authentication","title":"Authentication","description":"Requests use the HTTP Authorization header to both authenticate and authorize operations. The Tape API accepts bearer tokens in this header. Each Tape user has an user API key associated with it that acts as a bearer token to authentciate with the API.","sidebar":"mainSidebar"},"api/date-timezone":{"id":"api/date-timezone","title":"Date & Timezone","description":"Datetime format","sidebar":"mainSidebar"},"api/errors":{"id":"api/errors","title":"Errors","description":"Responses from the API use HTTP response codes to indicate general classes of success and error. Error responses contain more detail about the error in the response body, in the errorcode and errormessage properties.","sidebar":"mainSidebar"},"api/introduction":{"id":"api/introduction","title":"Tape Developer API","description":"Developers use the API to access Tape\'s core resources like records, apps or workspaces. Developers can connect services to Tape and build interactive experiences for users within Tape. Using the navigation on the left, you\'ll find details for each endpoint and type of resource used in the API.","sidebar":"mainSidebar"},"api/pagination":{"id":"api/pagination","title":"Pagination","description":"Endpoints which return a list of objects use pagination. Pagination allows an integration to request a part of the list, receiving an array of results and a nextcursor in the response. The integration can use the nextcursor in another request to receive the next part of the list. Using this technique, the integration can continue to make requests to receive the whole list (or just the parts the integration needs).","sidebar":"mainSidebar"},"api/request-limits":{"id":"api/request-limits","title":"Request Limits","description":"To ensure a consistent developer experience for all API users, the Tape API is rate limited and basic size limits apply to request parameters.","sidebar":"mainSidebar"},"api/resource/app":{"id":"api/resource/app","title":"App","description":"App endpoints are not available. Contact us if those are important for your integrations.","sidebar":"mainSidebar"},"api/resource/files":{"id":"api/resource/files","title":"File","description":"A file is a container for data and primarily identified by its file name. A file could be a spreadsheet, an image, PDF, video, or just binary data. Tape supports various file formats to be attached to resources like records, comments and chat messages.","sidebar":"mainSidebar"},"api/resource/record":{"id":"api/resource/record","title":"Record","description":"Records are the place where work gets done inside a Tape organization.","sidebar":"mainSidebar"},"api/resource/workspace":{"id":"api/resource/workspace","title":"Workspace","description":"Workspace endpoints are not available. Contact us if those are important for your integrations.","sidebar":"mainSidebar"},"api/versioning":{"id":"api/versioning","title":"Versioning","description":"The Tape API is versioned. A new API version is released when we introduce a backwards-incompatible change to the API. For example, changing a property\'s name. The current version is v1.","sidebar":"mainSidebar"},"calculation/component/button":{"id":"calculation/component/button","title":"Buttons","description":"The calculation field has support for HTML buttons. The \\"type\\" attribute can be used to pick one of the available colors & styles:","sidebar":"mainSidebar"},"calculation/component/iframe":{"id":"calculation/component/iframe","title":"iframe","description":""},"calculation/component/link":{"id":"calculation/component/link","title":"Links","description":"It is quite easy to generate a clickable link inside the calculation field:","sidebar":"mainSidebar"},"calculation/component/timespan":{"id":"calculation/component/timespan","title":"Timespan","description":"A common use-case is to calculate how many days something took."},"calculation/html":{"id":"calculation/html","title":"HTML & CSS Support","description":"HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Cascading Style Sheets (CSS) describes how elements should be rendered on screen or on other media.","sidebar":"mainSidebar"},"calculation/introduction":{"id":"calculation/introduction","title":"Calculation Field","description":"Calculated fields can be used to easily manipulate data added to an app. With this very powerful tool, you can not only do math on numbers in your app, but also concatenate values \u200b\u200bin specific fields. Use variables to add values \u200b\u200bto calculated fields. Use the \\"@\\" symbol to search for variables in your app. You can reference any field in your app, and any field in the referenced app.","sidebar":"mainSidebar"},"calculation/libraries":{"id":"calculation/libraries","title":"Available Libraries","description":"Tape makes several Node.js libraries available for you to reference inside your calculation field script:","sidebar":"mainSidebar"},"calculation/markdown":{"id":"calculation/markdown","title":"Markdown Support","description":"Markdown is a lightweight markup language for creating formatted text. The Tape calculation field supports Markdown syntax inside the result of a calculation. The result will be run through a markdown parser when the client displays it (both web and mobile).","sidebar":"mainSidebar"},"contribute":{"id":"contribute","title":"Contribute","description":"Tape is about community, and evolution. If you would like to help us improve the docs, use the \\"Edit this page\\" button and open a pull request on GitHub. Your help is much appreciated and all changes will be live right after they are approved by a team member.","sidebar":"guidesSidebar"},"guide/getting-started":{"id":"guide/getting-started","title":"Getting Started","description":"If you\'re new to the Tape API, you\'ve come to the right place. In this guide you\'ll learn how to use the Tape API by interacting with a record.","sidebar":"guidesSidebar"}}}')}}]);