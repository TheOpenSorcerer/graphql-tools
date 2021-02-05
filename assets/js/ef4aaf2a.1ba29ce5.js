(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{243:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return b})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return p})),t.d(a,"default",(function(){return i}));var r=t(3),n=t(7),l=(t(0),t(258)),b={},c={unversionedId:"api/classes/loaders_graphql_file_src.graphqlfileloader",id:"api/classes/loaders_graphql_file_src.graphqlfileloader",isDocsHomePage:!1,title:"loaders_graphql_file_src.graphqlfileloader",description:"Class: GraphQLFileLoader",source:"@site/docs/api/classes/loaders_graphql_file_src.graphqlfileloader.md",slug:"/api/classes/loaders_graphql_file_src.graphqlfileloader",permalink:"/docs/api/classes/loaders_graphql_file_src.graphqlfileloader",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/classes/loaders_graphql_file_src.graphqlfileloader.md",version:"current",sidebar:"someSidebar",previous:{title:"loaders_git_src.gitloader",permalink:"/docs/api/classes/loaders_git_src.gitloader"},next:{title:"wrap_src.hoistfield",permalink:"/docs/api/classes/wrap_src.hoistfield"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Table of contents",id:"table-of-contents",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"canLoad",id:"canload",children:[]},{value:"canLoadSync",id:"canloadsync",children:[]},{value:"handleFileContent",id:"handlefilecontent",children:[]},{value:"load",id:"load",children:[]},{value:"loadSync",id:"loadsync",children:[]},{value:"loaderId",id:"loaderid",children:[]}]}],o={toc:p};function i(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"class-graphqlfileloader"},"Class: GraphQLFileLoader"),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"../modules/loaders_graphql_file_src"}),"loaders/graphql-file/src"),".GraphQLFileLoader"),Object(l.b)("p",null,"This loader loads documents and type definitions from ",Object(l.b)("inlineCode",{parentName:"p"},".graphql")," files."),Object(l.b)("p",null,"You can load a single source:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const schema = await loadSchema('schema.graphql', {\n  loaders: [\n    new GraphQLFileLoader()\n  ]\n});\n")),Object(l.b)("p",null,"Or provide a glob pattern to load multiple sources:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const schema = await loadSchema('graphql/*.graphql', {\n  loaders: [\n    new GraphQLFileLoader()\n  ]\n});\n")),Object(l.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"GraphQLFileLoader"))),Object(l.b)("h2",{id:"implements"},"Implements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/modules/utils#universalloader"}),Object(l.b)("em",{parentName:"a"},"UniversalLoader")),"<",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(l.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")),"\\",">")),Object(l.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(l.b)("h3",{id:"constructors"},"Constructors"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders_graphql_file_src.graphqlfileloader#constructor"}),"constructor"))),Object(l.b)("h3",{id:"methods"},"Methods"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders_graphql_file_src.graphqlfileloader#canload"}),"canLoad")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders_graphql_file_src.graphqlfileloader#canloadsync"}),"canLoadSync")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders_graphql_file_src.graphqlfileloader#handlefilecontent"}),"handleFileContent")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders_graphql_file_src.graphqlfileloader#load"}),"load")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders_graphql_file_src.graphqlfileloader#loadsync"}),"loadSync")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders_graphql_file_src.graphqlfileloader#loaderid"}),"loaderId"))),Object(l.b)("h2",{id:"constructors-1"},"Constructors"),Object(l.b)("h3",{id:"constructor"},"constructor"),Object(l.b)("p",null,"+"," ",Object(l.b)("strong",{parentName:"p"},"new GraphQLFileLoader"),"(): ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"loaders_graphql_file_src.graphqlfileloader"}),Object(l.b)("em",{parentName:"a"},"GraphQLFileLoader"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"loaders_graphql_file_src.graphqlfileloader"}),Object(l.b)("em",{parentName:"a"},"GraphQLFileLoader"))),Object(l.b)("h2",{id:"methods-1"},"Methods"),Object(l.b)("h3",{id:"canload"},"canLoad"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"canLoad"),"(",Object(l.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(l.b)("em",{parentName:"p"},"string"),", ",Object(l.b)("inlineCode",{parentName:"p"},"options"),": ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(l.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")),"): ",Object(l.b)("em",{parentName:"p"},"Promise"),"<",Object(l.b)("em",{parentName:"p"},"boolean"),"\\",">"),Object(l.b)("h4",{id:"parameters"},"Parameters:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pointer")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"string"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"options")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(l.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," ",Object(l.b)("em",{parentName:"p"},"Promise"),"<",Object(l.b)("em",{parentName:"p"},"boolean"),"\\",">"),Object(l.b)("p",null,"Defined in: ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/index.ts#L62"}),"packages/loaders/graphql-file/src/index.ts:62")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"canloadsync"},"canLoadSync"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"canLoadSync"),"(",Object(l.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(l.b)("em",{parentName:"p"},"string"),", ",Object(l.b)("inlineCode",{parentName:"p"},"options"),": ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(l.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")),"): ",Object(l.b)("em",{parentName:"p"},"boolean")),Object(l.b)("h4",{id:"parameters-1"},"Parameters:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pointer")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"string"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"options")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(l.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," ",Object(l.b)("em",{parentName:"p"},"boolean")),Object(l.b)("p",null,"Defined in: ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/index.ts#L81"}),"packages/loaders/graphql-file/src/index.ts:81")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"handlefilecontent"},"handleFileContent"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"handleFileContent"),"(",Object(l.b)("inlineCode",{parentName:"p"},"rawSDL"),": ",Object(l.b)("em",{parentName:"p"},"string"),", ",Object(l.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(l.b)("em",{parentName:"p"},"string"),", ",Object(l.b)("inlineCode",{parentName:"p"},"options"),": ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(l.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")),"): { ",Object(l.b)("inlineCode",{parentName:"p"},"document"),": DocumentNode ; ",Object(l.b)("inlineCode",{parentName:"p"},"location"),": ",Object(l.b)("em",{parentName:"p"},"string")," ; ",Object(l.b)("inlineCode",{parentName:"p"},"rawSDL"),": ",Object(l.b)("em",{parentName:"p"},"string"),"  } ","|"," { ",Object(l.b)("inlineCode",{parentName:"p"},"document"),": DocumentNode ; ",Object(l.b)("inlineCode",{parentName:"p"},"location"),": ",Object(l.b)("em",{parentName:"p"},"string"),"  }"),Object(l.b)("h4",{id:"parameters-2"},"Parameters:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"rawSDL")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"string"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pointer")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"string"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"options")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(l.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," { ",Object(l.b)("inlineCode",{parentName:"p"},"document"),": DocumentNode ; ",Object(l.b)("inlineCode",{parentName:"p"},"location"),": ",Object(l.b)("em",{parentName:"p"},"string")," ; ",Object(l.b)("inlineCode",{parentName:"p"},"rawSDL"),": ",Object(l.b)("em",{parentName:"p"},"string"),"  } ","|"," { ",Object(l.b)("inlineCode",{parentName:"p"},"document"),": DocumentNode ; ",Object(l.b)("inlineCode",{parentName:"p"},"location"),": ",Object(l.b)("em",{parentName:"p"},"string"),"  }"),Object(l.b)("p",null,"Defined in: ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/index.ts#L110"}),"packages/loaders/graphql-file/src/index.ts:110")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"load"},"load"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"load"),"(",Object(l.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(l.b)("em",{parentName:"p"},"string"),", ",Object(l.b)("inlineCode",{parentName:"p"},"options"),": ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(l.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")),"): ",Object(l.b)("em",{parentName:"p"},"Promise"),"<",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/utils_src.source"}),Object(l.b)("em",{parentName:"a"},"Source")),"\\",">"),Object(l.b)("h4",{id:"parameters-3"},"Parameters:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pointer")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"string"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"options")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(l.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," ",Object(l.b)("em",{parentName:"p"},"Promise"),"<",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/utils_src.source"}),Object(l.b)("em",{parentName:"a"},"Source")),"\\",">"),Object(l.b)("p",null,"Defined in: ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/index.ts#L97"}),"packages/loaders/graphql-file/src/index.ts:97")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"loadsync"},"loadSync"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"loadSync"),"(",Object(l.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(l.b)("em",{parentName:"p"},"string"),", ",Object(l.b)("inlineCode",{parentName:"p"},"options"),": ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(l.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")),"): ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/utils_src.source"}),Object(l.b)("em",{parentName:"a"},"Source"))),Object(l.b)("h4",{id:"parameters-4"},"Parameters:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pointer")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"string"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"options")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/loaders_graphql_file_src.graphqlfileloaderoptions"}),Object(l.b)("em",{parentName:"a"},"GraphQLFileLoaderOptions")))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/utils_src.source"}),Object(l.b)("em",{parentName:"a"},"Source"))),Object(l.b)("p",null,"Defined in: ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/index.ts#L104"}),"packages/loaders/graphql-file/src/index.ts:104")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"loaderid"},"loaderId"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"loaderId"),"(): ",Object(l.b)("em",{parentName:"p"},"string")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," ",Object(l.b)("em",{parentName:"p"},"string")),Object(l.b)("p",null,"Defined in: ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/index.ts#L58"}),"packages/loaders/graphql-file/src/index.ts:58")))}i.isMDXComponent=!0},258:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return m}));var r=t(0),n=t.n(r);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=n.a.createContext({}),i=function(e){var a=n.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},s=function(e){var a=i(e.components);return n.a.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},O=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=i(t),O=r,m=s["".concat(b,".").concat(O)]||s[O]||d[O]||l;return t?n.a.createElement(m,c(c({ref:a},o),{},{components:t})):n.a.createElement(m,c({ref:a},o))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,b=new Array(l);b[0]=O;var c={};for(var p in a)hasOwnProperty.call(a,p)&&(c[p]=a[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var o=2;o<l;o++)b[o]=t[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"}}]);