(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2962:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>x,routeModule:()=>u,tree:()=>c});var s=r(3137),a=r(4647),n=r(4183),i=r.n(n),l=r(1775),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let d=s.AppPageRouteModule,c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,419)),"/Users/puneetjain/Projects/LearnByBuilding/IPv4-Format-Converter/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,9958)),"/Users/puneetjain/Projects/LearnByBuilding/IPv4-Format-Converter/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,1918,23)),"next/dist/client/components/not-found-error"]}],x=["/Users/puneetjain/Projects/LearnByBuilding/IPv4-Format-Converter/app/page.tsx"],m="/page",p={require:r,loadChunk:()=>Promise.resolve()},u=new d({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4476:(e,t,r)=>{Promise.resolve().then(r.bind(r,8204))},8204:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>IPAddressConverter});var s=r(80),a=r(9885),n=r(5606);function IPAddressConverter(){let[e,t]=(0,a.useState)(""),[r,i]=(0,a.useState)({dotDecimal:"",integer:"",hexadecimal:"",binary:"",cidr:""});return s.jsx("div",{className:"w-full max-w-md mx-auto",children:(0,s.jsxs)("div",{className:"bg-[#121212] rounded-3xl overflow-hidden shadow-2xl p-6",children:[s.jsx("h2",{className:"text-2xl font-bold text-white mb-6",children:"IP Address Converter"}),(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsxs)("div",{children:[s.jsx("label",{className:"text-sm text-gray-400 mb-2 block",children:"INPUT FORMAT"}),s.jsx("div",{className:"relative",children:s.jsx("input",{type:"text",value:e,onChange:e=>t(e.target.value),className:"w-full bg-transparent text-white text-2xl border-b border-gray-800 pb-2 focus:outline-none focus:border-[#FF4747]",placeholder:"Enter IP address"})})]}),(0,s.jsxs)("button",{onClick:()=>{let t;if(e.includes(".")){let r=e.split(".");t=r.reduce((e,t)=>(e<<8)+parseInt(t),0)>>>0}else if(e.startsWith("0x"))t=parseInt(e.slice(2),16);else if(e.includes("/")){let[r]=e.split("/"),s=r.split(".");t=s.reduce((e,t)=>(e<<8)+parseInt(t),0)>>>0}else t=parseInt(e);let r=[t>>>24&255,t>>>16&255,t>>>8&255,255&t].join(".");i({dotDecimal:r,integer:t.toString(),hexadecimal:"0x"+t.toString(16).padStart(8,"0"),binary:t.toString(2).padStart(32,"0"),cidr:`${r}/32`})},className:"w-full flex items-center justify-center space-x-2 bg-transparent border border-gray-800 hover:border-[#FF4747] text-white rounded-xl py-3 transition-colors",children:[s.jsx(n.Z,{className:"w-4 h-4"}),s.jsx("span",{children:"Convert Format"})]}),r.dotDecimal&&(0,s.jsxs)("div",{className:"space-y-4 mt-6",children:[(0,s.jsxs)("div",{children:[s.jsx("label",{className:"text-sm text-gray-400 mb-1 block",children:"Dot Decimal"}),s.jsx("div",{className:"text-xl text-white",children:r.dotDecimal})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{className:"text-sm text-gray-400 mb-1 block",children:"Integer"}),s.jsx("div",{className:"text-xl text-white",children:r.integer})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{className:"text-sm text-gray-400 mb-1 block",children:"Hexadecimal"}),s.jsx("div",{className:"text-xl text-white",children:r.hexadecimal})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{className:"text-sm text-gray-400 mb-1 block",children:"Binary"}),s.jsx("div",{className:"text-xl text-white font-mono text-sm",children:r.binary})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{className:"text-sm text-gray-400 mb-1 block",children:"CIDR"}),s.jsx("div",{className:"text-xl text-white",children:r.cidr})]})]})]})]})})}},419:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Home});var s=r(8144),a=r(7536);let n=(0,a.createProxy)(String.raw`/Users/puneetjain/Projects/LearnByBuilding/IPv4-Format-Converter/components/IPAddressConverter.tsx`),{__esModule:i,$$typeof:l}=n,o=n.default;function Home(){return s.jsx("main",{className:"min-h-screen bg-[#FF4747] p-4 sm:p-8 md:p-16 lg:p-24 flex items-center justify-center",children:s.jsx(o,{})})}}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[255,340,795],()=>__webpack_exec__(2962));module.exports=r})();