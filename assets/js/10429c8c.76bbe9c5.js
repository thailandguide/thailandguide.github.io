"use strict";(self.webpackChunkthailand_guide=self.webpackChunkthailand_guide||[]).push([[7181],{3905:(e,t,p)=>{p.d(t,{Zo:()=>d,kt:()=>h});var a=p(7294);function r(e,t,p){return t in e?Object.defineProperty(e,t,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[t]=p,e}function n(e,t){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),p.push.apply(p,a)}return p}function o(e){for(var t=1;t<arguments.length;t++){var p=null!=arguments[t]?arguments[t]:{};t%2?n(Object(p),!0).forEach((function(t){r(e,t,p[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):n(Object(p)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(p,t))}))}return e}function l(e,t){if(null==e)return{};var p,a,r=function(e,t){if(null==e)return{};var p,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)p=n[a],t.indexOf(p)>=0||(r[p]=e[p]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)p=n[a],t.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(e,p)&&(r[p]=e[p])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),p=t;return e&&(p="function"==typeof e?e(t):o(o({},t),e)),p},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var p=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(p),u=r,h=m["".concat(i,".").concat(u)]||m[u]||c[u]||n;return p?a.createElement(h,o(o({ref:t},d),{},{components:p})):a.createElement(h,o({ref:t},d))}));function h(e,t){var p=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=p.length,o=new Array(n);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<n;s++)o[s]=p[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,p)}u.displayName="MDXCreateElement"},6930:(e,t,p)=>{p.r(t),p.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=p(7462),r=(p(7294),p(3905));const n={title:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",sidebar_position:8,slug:"/general-guide/apps"},o=void 0,l={unversionedId:"general-guide/apps",id:"general-guide/apps",title:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",description:"\u0412 \u0422\u0430\u0438\u043b\u0430\u043d\u0434\u0435 \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0430\u043c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0438\u043c\u0435\u0442\u044c \u0434\u043b\u044f \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u0430. \u0417\u0434\u0435\u0441\u044c \u043c\u044b \u0441\u043e\u0431\u0440\u0430\u043b\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0442\u0430\u043a\u0441\u0438, \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438, \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u044b \u0438 \u0434\u0430\u0436\u0435 \u043e\u043d\u043b\u0430\u0439\u043d \u0440\u0435\u0442\u0435\u0439\u043b \u0446\u0435\u043d\u0442\u0440\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0434\u0435\u0441\u044c \u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u044c\u044e (\u0434\u0430\u0436\u0435 \u0442\u0435\u0445\u043d\u0438\u043a\u0443 \u043b\u0443\u0447\u0448\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u043d\u0438\u0445).",source:"@site/docs/general-guide/apps.md",sourceDirName:"general-guide",slug:"/general-guide/apps",permalink:"/docs/general-guide/apps",draft:!1,editUrl:"https://github.com/thailandguide/thailandguide.github.io/tree/main/docs/general-guide/apps.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",sidebar_position:8,slug:"/general-guide/apps"},sidebar:"generalSidebar",previous:{title:"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043f\u0440\u0430\u0432\u0430",permalink:"/docs/general-guide/driving-license"},next:{title:"\u041e\u043f\u0430\u0441\u043d\u044b\u0435 \u0436\u0438\u0432\u043e\u0442\u043d\u044b\u0435",permalink:"/docs/general-guide/animals"}},i={},s=[{value:"\u0422\u0430\u043a\u0441\u0438",id:"\u0442\u0430\u043a\u0441\u0438",level:3},{value:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0435\u0434\u044b",id:"\u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430-\u0435\u0434\u044b",level:3},{value:"\u041c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440",id:"\u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440",level:3},{value:"\u041c\u0430\u0440\u043a\u0435\u0442\u043f\u043b\u0435\u0439\u0441\u044b",id:"\u043c\u0430\u0440\u043a\u0435\u0442\u043f\u043b\u0435\u0439\u0441\u044b",level:3},{value:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435",id:"\u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435",level:3}],d={toc:s},m="wrapper";function c(e){let{components:t,...p}=e;return(0,r.kt)(m,(0,a.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u0412 \u0422\u0430\u0438\u043b\u0430\u043d\u0434\u0435 \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0430\u043c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0438\u043c\u0435\u0442\u044c \u0434\u043b\u044f \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u0430. \u0417\u0434\u0435\u0441\u044c \u043c\u044b \u0441\u043e\u0431\u0440\u0430\u043b\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0442\u0430\u043a\u0441\u0438, \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438, \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u044b \u0438 \u0434\u0430\u0436\u0435 \u043e\u043d\u043b\u0430\u0439\u043d \u0440\u0435\u0442\u0435\u0439\u043b \u0446\u0435\u043d\u0442\u0440\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0434\u0435\u0441\u044c \u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u044c\u044e (\u0434\u0430\u0436\u0435 \u0442\u0435\u0445\u043d\u0438\u043a\u0443 \u043b\u0443\u0447\u0448\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u043d\u0438\u0445)."),(0,r.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, \u0432\u0430\u043c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0435\u0433\u0438\u043e\u043d AppStore (\u043d\u0435 \u043f\u0443\u0442\u0430\u0439\u0442\u0435 \u0441 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u043c \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430). \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0435\u0440\u0435\u0434 \u0441\u043c\u0435\u043d\u043e\u0439 \u0440\u0435\u0433\u0438\u043e\u043d\u0430 \u0432\u0430\u043c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0432\u0441\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438, \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0432 \u0443\u0447\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c \u0420\u0424 \u0438\u0445 \u0443\u0436\u0435 \u0431\u0443\u0434\u0435\u0442 \u043d\u0435 \u0432\u0435\u0440\u043d\u0443\u0442\u044c. \u0422\u0430\u043a\u0436\u0435 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 \u0442\u043e, \u0447\u0442\u043e\u0431\u044b \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u043f\u043e\u0434 \u0432\u0430\u0448\u0438\u043c AppleID \u043d\u0435 \u0431\u044b\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043f\u0430\u0440\u043e\u043b\u044c. \u0415\u0441\u043b\u0438 \u0442\u0430\u043a\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0438\u043c\u0435\u0435\u0442\u0441\u044f - \u0432\u0430\u043c \u043d\u0435 \u0443\u0434\u0430\u0441\u0442\u0441\u044f \u0432\u043d\u0435\u0441\u0442\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u0443\u0447\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c, \u0445\u043e\u0442\u044f \u0441\u0430\u043c iPhone \u043e\u0431 \u044d\u0442\u043e\u043c \u043d\u0435 \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0434\u0438\u0442, \u0430 \u043f\u0440\u043e\u0441\u0442\u043e \u0432\u044b\u0434\u0430\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0443 \u0432 AppStore \u201cAccount Not In This Store\u201d.\n",(0,r.kt)("a",{parentName:"p",href:"https://support.apple.com/ru-ru/HT201389"},"https://support.apple.com/ru-ru/HT201389")," - \u0441\u0442\u0430\u0442\u044c\u044f \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0441\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0443 \u0438\u043b\u0438 \u0440\u0435\u0433\u0438\u043e\u043d. "),(0,r.kt)("h3",{id:"\u0442\u0430\u043a\u0441\u0438"},"\u0422\u0430\u043a\u0441\u0438"),(0,r.kt)("p",null,"Grab ",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/th/app/grab-superapp/id647268330"},"iOS")," ",(0,r.kt)("strong",{parentName:"p"},"|")," ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.grabtaxi.passenger&hl=en&gl=US&pli=1"},"Android")),(0,r.kt)("p",null,"Bolt ",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/ee/app/bolt-fast-affordable-rides/id675033630"},"iOS")," ",(0,r.kt)("strong",{parentName:"p"},"|")," ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=ee.mtakso.client&hl=en&gl=US"},"Android")),(0,r.kt)("h3",{id:"\u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430-\u0435\u0434\u044b"},"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0435\u0434\u044b"),(0,r.kt)("p",null,"Foodpanda ",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/th/app/foodpanda-food-delivery/id758103884"},"iOS")," ",(0,r.kt)("strong",{parentName:"p"},"|")," ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.global.foodpanda.android&hl=en&gl=US"},"Android")),(0,r.kt)("p",null,"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 PandaBox \u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443 Pro \u0437\u0430 \u043f\u043e\u0440\u044f\u0434\u043a\u0430 50-60 \u0431\u0430\u0442 \u0432 \u043c\u0435\u0441\u044f\u0446. PandaBox \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0443\u0440\u043e\u0432\u043d\u0435\u0439 \u0441\u043a\u0438\u0434\u043a\u0438, \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u0443\u044e\u0449\u0438\u0445\u0441\u044f \u043f\u043e\u0441\u043b\u0435 \u043d\u0430\u0431\u043e\u0440\u0430 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u0443\u044e \u0441\u0443\u043c\u043c\u0443. \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 Pro \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0430\u043a\u0446\u0438\u044f\u043c \u0438 \u0441\u043a\u0438\u0434\u043a\u0430\u043c \u0434\u043e 50% \u0432 \u043a\u0440\u0443\u043f\u043d\u044b\u0445 \u0441\u0435\u0442\u044f\u0445. \u0414\u043b\u044f \u0437\u0430\u043a\u0430\u0437\u0430 \u0438\u0437 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u043e\u0432 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0434\u043d\u0438 \u0431\u044b\u0432\u0430\u044e\u0442 \u0430\u043a\u0446\u0438\u0438 \u043d\u0430 \u0441\u043a\u0438\u0434\u043a\u0443 \u0434\u043e 15% \u043e\u0442 \u0447\u0435\u043a\u0430, \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e\u0431 \u044d\u0442\u043e\u043c \u043c\u043e\u0436\u043d\u043e \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 Promotions. "),(0,r.kt)("p",null,"Grab ",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/th/app/grab-superapp/id647268330"},"iOS")," ",(0,r.kt)("strong",{parentName:"p"},"|")," ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.grabtaxi.passenger&hl=en&gl=US&pli=1"},"Android")),(0,r.kt)("p",null,"Big C Plus ",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/th/app/big-c-plus/id1423112528"},"iOS")," ",(0,r.kt)("strong",{parentName:"p"},"|")," ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.t2p.bigc&hl=en&gl=US"},"Android")),(0,r.kt)("p",null,"Line Man ",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/th/app/line-man-food-delivery-more/id1076238296"},"iOS")," ",(0,r.kt)("strong",{parentName:"p"},"|")," ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.linecorp.linemanth&hl=en&gl=US"},"Android")),(0,r.kt)("p",null,"7-11 ",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/th/app/7-eleven-th/id514262377"},"iOS")," ",(0,r.kt)("strong",{parentName:"p"},"|")," ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=asuk.com.android.app&hl=th"},"Android")),(0,r.kt)("p",null,"\u0416\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0432\u0430\u0448\u0435\u0433\u043e \u0430\u0440\u0435\u043d\u0434\u043e\u0434\u0430\u0442\u0435\u043b\u044f/\u0434\u0440\u0443\u0433\u0430/\u0437\u043d\u0430\u043a\u043e\u043c\u043e\u0433\u043e \u0438\u043b\u0438 \u0434\u0430\u0436\u0435 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043f\u043e\u043f\u0430\u0432\u0448\u0435\u0433\u043e\u0441\u044f \u043f\u0440\u043e\u0445\u043e\u0436\u0435\u0433\u043e \u0441 ThaiID \u0437\u0430\u0439\u0442\u0438 \u0432 \u0441\u0432\u043e\u044e \u0443\u0447\u0435\u0442\u043a\u0443/\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u043c \u0432\u0430\u0448\u0443 \u0443\u0447\u0435\u0442\u043a\u0443 \u043f\u043e \u0435\u0433\u043e ID. \u042d\u0442\u043e \u0434\u0430\u0441\u0442 \u0432\u0430\u043c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u043a\u0438\u0434\u043a\u0430\u043c \u0430 \u0435\u043c\u0443 - \u0431\u0430\u043b\u043b\u044b \u0434\u043b\u044f 7-11. \u0415\u0441\u043b\u0438 \u0432\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0435\u0433\u043e \u0431\u0430\u043b\u043b\u044b \u0442\u043e \u043a\u043e\u043d\u0435\u0447\u043d\u043e \u043e\u043d \u043f\u043e\u043c\u0435\u043d\u044f\u0435\u0442 \u043f\u0430\u0440\u043e\u043b\u044c \u0438 \u0434\u0435\u0430\u043a\u0442\u0438\u0432\u0438\u0440\u0443\u0435\u0442 \u0432\u0430\u0448 \u043b\u043e\u0433\u0438\u043d."),(0,r.kt)("p",null,"MAKRO ",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/th/app/makro/id974609864"},"iOS")," ",(0,r.kt)("strong",{parentName:"p"},"|")," ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.eggdigital.makroapp&hl=en&gl=US"},"Android")),(0,r.kt)("h3",{id:"\u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440"},"\u041c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440"),(0,r.kt)("p",null,"Line ",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/line/id443904275"},"iOS")," ",(0,r.kt)("strong",{parentName:"p"},"|")," ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=jp.naver.line.android&hl=en&gl=US"},"Android")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u041f\u043e\u0447\u0442\u0438 \u0432\u0441\u0435 \u0442\u0430\u0439\u0446\u044b \u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0438\u043c, \u0442\u0430\u043a \u0431\u0443\u0434\u0435\u0442 \u043b\u0435\u0433\u0447\u0435 \u043e\u0431\u0449\u0430\u0442\u044c\u0441\u044f \u0441 \u0440\u0438\u0435\u043b\u0442\u043e\u0440\u0430\u043c\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043c\u0438.")),(0,r.kt)("h3",{id:"\u043c\u0430\u0440\u043a\u0435\u0442\u043f\u043b\u0435\u0439\u0441\u044b"},"\u041c\u0430\u0440\u043a\u0435\u0442\u043f\u043b\u0435\u0439\u0441\u044b"),(0,r.kt)("p",null,"Lazada ",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/th/app/lazada-12-12/id785385147?l=th"},"iOS")," ",(0,r.kt)("strong",{parentName:"p"},"|")," ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.lazada.android&hl=en&gl=US"},"Android")),(0,r.kt)("p",null,"Shopee ",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/th/app/shopee-th-%E0%B8%8A-%E0%B8%AD%E0%B8%9B%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99-%E0%B8%AA-%E0%B8%94%E0%B8%84-%E0%B8%A1/id959841453"},"iOS")," ",(0,r.kt)("strong",{parentName:"p"},"|")," ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.shopee.th&hl=th"},"Android")),(0,r.kt)("h3",{id:"\u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435"},"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://www.queq.me/"},"QueQ")," ",(0,r.kt)("a",{parentName:"p",href:"https://itunes.apple.com/th/app/queq-cxng-khiw-ran-dang-mi/id876343584?l=th&mt=8"},"iOS")," ",(0,r.kt)("strong",{parentName:"p"},"|")," ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.jorlek.queqcustomer&hl=th"},"Android")),(0,r.kt)("p",null,"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u0433\u043e\u0441\u043f\u0438\u0442\u0430\u043b\u044f\u0445, \u0431\u043e\u043b\u044c\u043d\u0438\u0446\u0430\u0445, \u0431\u0430\u043d\u043a\u0430\u0445, \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0445 \u0441\u043b\u0443\u0436\u0431\u0430\u0445 \u0438 \u0434\u0430\u0436\u0435 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430\u0445 \u0422\u0430\u0438\u043b\u0430\u043d\u0434\u0430, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0438\u0445 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432 \u0432 \u042e\u0412\u0410.\n\u0414\u043b\u044f \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0441\u0432\u043e\u0435\u0439 \u043e\u0447\u0435\u0440\u0435\u0434\u0438, \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043d\u043e\u043c\u0435\u0440\u043a\u0430, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 QueQ. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0432 \u043d\u0435\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439, \u043f\u0440\u0438\u0441\u0432\u043e\u0435\u043d\u043d\u044b\u0439 \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u043d\u043e\u043c\u0435\u0440\u0443 QR \u043a\u043e\u0434.\n\u042d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u0438 \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u043c\u043d\u043e\u0433\u043e\u0447\u0430\u0441\u043e\u0432\u043e\u0433\u043e \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u0432 \u0438\u043b\u0438 \u0432\u043e\u0437\u043b\u0435 \u0437\u0434\u0430\u043d\u0438\u044f \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u0441\u043b\u0443\u0436\u0431\u044b."))}c.isMDXComponent=!0}}]);