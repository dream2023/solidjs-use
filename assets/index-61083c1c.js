import{r as F,p as j,q as T,k as x,b as m,i as N,c as l,t as p,M as $,a as U}from"./index-084e3fd9.js";import{N as v}from"./Note-37e1e90f.js";import{n as _}from"./scheduler-3ae68f06.js";import{u as I}from"./index-79f4e36c.js";import{u as P}from"./index-1d023082.js";const M=r=>e=>{const c=e.data[0];return Promise.resolve(r.apply(void 0,c)).then(o=>{postMessage(["SUCCESS",o])}).catch(o=>{postMessage(["ERROR",o])})},O=M,G=r=>r.length===0?"":`importScripts(${r.map(c=>`'${c}'`).toString()})`,L=G,Y=(r,e)=>{const c=`${L(e)}; onmessage=(${O})(${r})`,o=new Blob([c],{type:"text/javascript"});return URL.createObjectURL(o)},X=Y,V=(r,e={})=>{const{dependencies:c=[],timeout:o,window:i=T}=e,[g,E]=F(),[y,d]=F("PENDING"),[D,C]=F({}),[b,k]=F(),n=(a="PENDING")=>{const t=g();t?._url&&i&&(t.terminate(),URL.revokeObjectURL(t._url),C({}),E(void 0),i.clearTimeout(b()),d(a))};n(),j(n);const s=()=>{const a=X(r,c),t=new Worker(a);return t._url=a,t.onmessage=h=>{const{resolve:W=()=>{},reject:R=()=>{}}=D(),[w,B]=h.data;switch(w){case"SUCCESS":W(B),n(w);break;default:R(B),n("ERROR");break}},t.onerror=h=>{const{reject:W=()=>{}}=D();W(h),n("ERROR")},o&&k(setTimeout(()=>n("TIMEOUT_EXPIRED"),o)),t},u=(...a)=>new Promise((t,h)=>{C({resolve:t,reject:h}),g()?.postMessage([[...a]]),d("RUNNING")});return{workerFn:(...a)=>y()==="RUNNING"?(console.error("[useWebWorkerFn] You can only run one instance of the worker at a time."),Promise.reject()):(E(s()),u(...a)),workerStatus:y,workerTerminate:n}},H=p("<p>Current Time: <b></b></p>",4),q=p("<br>",1),z=p("<button>Sort in Main Thread</button>",2),K=p("<button>Sort in Worker</button>",2),J=p('<button class="orange">Terminate Worker</button>',2),Q=p("<p>Thread: <strong></strong><br>Result: <strong></strong></p>",7),Z=()=>{const r=()=>{const n=()=>Math.trunc(Math.random()*5e5),s=Array(5e6).fill(void 0).map(n);return s.sort(),s.slice(0,5)},{workerFn:e,workerStatus:c,workerTerminate:o}=V(r),[i]=P(),g=I(i,"YYYY-MM-DD HH:mm:ss SSS"),E=m(()=>c()==="RUNNING"),[y,d]=F(null),[D,C]=F(""),b=async()=>{d(null),await _(),d(r()),C("Main")},k=async()=>{d(null),await _();const n=await e();d(n),C("Worker")};return[(()=>{const n=H.cloneNode(!0),s=n.firstChild,u=s.nextSibling;return N(u,g),n})(),l(v,{class:"mb-2",get children(){return["This is a demo showing sort for large array (5 million numbers) with or w/o WebWorker.",q.cloneNode(!0),"Clock stops when UI blocking happens."]}}),(()=>{const n=z.cloneNode(!0);return n.$$click=b,n})(),m((()=>{const n=m(()=>!E());return()=>n()?(()=>{const s=K.cloneNode(!0);return s.$$click=k,s})():(()=>{const s=J.cloneNode(!0);return s.$$click=()=>o("PENDING"),s})()})()),m((()=>{const n=m(()=>!!y());return()=>n()&&(()=>{const s=Q.cloneNode(!0),u=s.firstChild,f=u.nextSibling,a=f.nextSibling,t=a.nextSibling,h=t.nextSibling;return N(f,D),N(h,y),s})()})())]};x(["click"]);const ee=p('<p class="demo-source-link"><a href="https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useWebWorkerFn/demo.tsx" target="_blank">source</a></p>',4);function S(r){const e=Object.assign({div:"div",h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",pre:"pre",code:"code",span:"span"},$(),r.components),{FunctionInfo:c,DemoContainer:o,ContextualNav:i}=e;return i||A("ContextualNav",!0),o||A("DemoContainer",!0),c||A("FunctionInfo",!0),l(e.div,{className:"markdown-body",get children(){return[l(e.h1,{children:"useWebWorkerFn"}),`
`,l(c,{fn:"useWebWorkerFn"}),`
`,l(e.p,{get children(){return["Run expensive functions without blocking the UI, using a simple syntax that makes use of Promise. A port of ",l(e.a,{href:"https://github.com/alewin/useWorker",children:"alewin/useWorker"}),"."]}}),`
`,l(e.h2,{children:"Demo"}),`
`,`
`,l(o,{get children(){return[ee.cloneNode(!0),l(Z,{})]}}),`
`,l(e.h2,{children:"Usage"}),`
`,l(e.h3,{children:"Basic example"}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return l(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"js","data-theme":"default",get children(){return l(e.code,{"data-language":"js","data-theme":"default",get children(){return[l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#86E1FC"},children:"import"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{ "}),l(e.span,{style:{color:"#C8D3F5"},children:"useWebWorkerFn"}),l(e.span,{style:{color:"#B4C2F0"},children:" }"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"from"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"solidjs-use"}),l(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"{"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF98A4"},children:"workerFn"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"}"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#65BCFF"},children:"useWebWorkerFn"}),l(e.span,{style:{color:"#B4C2F0"},children:"(()"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"=>"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#86E1FC"},children:"  "}),l(e.span,{style:{color:"#7A88CF"},children:"// some heavy works to do in web worker"})]}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#B4C2F0"},children:"})"})}})]}})}})}}),`
`,l(e.h3,{children:"With dependencies"}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return l(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"ts","data-theme":"default",get children(){return l(e.code,{"data-language":"ts","data-theme":"default",get children(){return[l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#86E1FC"},children:"import"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{ "}),l(e.span,{style:{color:"#C8D3F5"},children:"useWebWorkerFn"}),l(e.span,{style:{color:"#B4C2F0"},children:" }"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"from"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"solidjs-use"}),l(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"{"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF98A4"},children:"workerFn"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF98A4"},children:"workerStatus"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF98A4"},children:"workerTerminate"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"}"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#65BCFF"},children:"useWebWorkerFn"}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#FCA7EA"},children:"dates"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"=>"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"dates"}),l(e.span,{style:{color:"#86E1FC"},children:"."}),l(e.span,{style:{color:"#65BCFF"},children:"sort"}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#FFC777"},children:"dateFns"}),l(e.span,{style:{color:"#86E1FC"},children:"."}),l(e.span,{style:{color:"#A9B8E8"},children:"compareAsc"}),l(e.span,{style:{color:"#B4C2F0"},children:")"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"  "}),l(e.span,{style:{color:"#4FD6BE"},children:"timeout"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#A9B8E8"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"50000"}),l(e.span,{style:{color:"#86E1FC"},children:","})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"  "}),l(e.span,{style:{color:"#4FD6BE"},children:"dependencies"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#A9B8E8"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"["})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#A9B8E8"},children:"    "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"https://cdnjs.cloudflare.com/ajax/libs/date-fns/1.30.1/date_fns.js"}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#A9B8E8"},children:" "}),l(e.span,{style:{color:"#7A88CF"},children:"// dateFns"})]}}),`
`,l(e.span,{className:"line line--highlighted",get children(){return[l(e.span,{style:{color:"#A9B8E8"},children:"  "}),l(e.span,{style:{color:"#86E1FC"},children:"]"})]}}),`
`,l(e.span,{className:"line line--highlighted",get children(){return l(e.span,{style:{color:"#B4C2F0"},children:"})"})}})]}})}})}}),`
`,l(e.h2,{children:"Web Worker"}),`
`,l(e.p,{get children(){return["Before you start using this function, we suggest you read the ",l(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers",children:"Web Worker"})," documentation."]}}),`
`,l(e.h2,{children:"Credit"}),`
`,l(e.p,{get children(){return["This function is a Vue port of ",l(e.a,{href:"https://github.com/alewin/useWorker",children:"https://github.com/alewin/useWorker"})," by Alessio Koci."]}}),`
`,l(e.h2,{children:"Type Declarations"}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return l(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"typescript","data-theme":"default",get children(){return l(e.code,{"data-language":"typescript","data-theme":"default",get children(){return[l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"type"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"WebWorkerStatus"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"PENDING"}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"|"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"SUCCESS"}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"|"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"RUNNING"}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"|"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"ERROR"}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"|"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"TIMEOUT_EXPIRED"}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"interface"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"UseWebWorkerOptions"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"extends"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C3E88D"},children:"ConfigurableWindow"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#7A88CF"},children:"/**"})]}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:"     * Number of milliseconds before killing the worker"})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:"     *"})}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#7A88CF"},children:"     * "}),l(e.span,{style:{color:"#86E1FC"},children:"@"}),l(e.span,{style:{color:"#C099FF"},children:"default"}),l(e.span,{style:{color:"#7A88CF"},children:" "}),l(e.span,{style:{color:"#C8D3F5"},children:"undefined"})]}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:"     */"})}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#4FD6BE"},children:"timeout"}),l(e.span,{style:{color:"#86E1FC"},children:"?:"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"number"}),l(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#7A88CF"},children:"/**"})]}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:"     * An array that contains the external dependencies needed to run the worker"})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:"     */"})}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#4FD6BE"},children:"dependencies"}),l(e.span,{style:{color:"#86E1FC"},children:"?:"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"string"}),l(e.span,{style:{color:"#86E1FC"},children:"[];"})]}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#B4C2F0"},children:"}"})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:"/**"})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:" * Run expensive function without blocking the UI, using a simple syntax that makes use of Promise."})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:" *"})}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#7A88CF"},children:" * "}),l(e.span,{style:{color:"#86E1FC"},children:"@"}),l(e.span,{style:{color:"#C099FF"},children:"see"}),l(e.span,{style:{color:"#7A88CF"},children:" "}),l(e.span,{style:{color:"#C8D3F5"},children:"https://solidjs-use.github.io/solidjs-use/core/useWebWorkerFn"})]}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:" */"})}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"declare"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#82AAFF"},children:"useWebWorkerFn"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"T"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"extends"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#FF757F",fontWeight:"bold"},children:"..."}),l(e.span,{style:{color:"#FCA7EA"},children:"fnArgs"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"any"}),l(e.span,{style:{color:"#86E1FC"},children:"[]"}),l(e.span,{style:{color:"#B4C2F0"},children:")"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"=>"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"any"}),l(e.span,{style:{color:"#86E1FC"},children:">"}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#FCA7EA"},children:"fn"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"T"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FCA7EA"},children:"options"}),l(e.span,{style:{color:"#86E1FC"},children:"?:"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"UseWebWorkerOptions"}),l(e.span,{style:{color:"#B4C2F0"},children:")"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"=>"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#82AAFF"},children:"workerFn"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#FF757F",fontWeight:"bold"},children:"..."}),l(e.span,{style:{color:"#FCA7EA"},children:"fnArgs"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"Parameters"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"T"}),l(e.span,{style:{color:"#86E1FC"},children:">"}),l(e.span,{style:{color:"#B4C2F0"},children:")"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"=>"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"Promise"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"ReturnType"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"T"}),l(e.span,{style:{color:"#86E1FC"},children:">>;"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#4FD6BE"},children:"workerStatus"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"solid_js"}),l(e.span,{style:{color:"#86E1FC"},children:"."}),l(e.span,{style:{color:"#FFC777"},children:"Accessor"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"WebWorkerStatus"}),l(e.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#82AAFF"},children:"workerTerminate"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#FCA7EA"},children:"status"}),l(e.span,{style:{color:"#86E1FC"},children:"?:"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"WebWorkerStatus"}),l(e.span,{style:{color:"#B4C2F0"},children:")"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"=>"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"void"}),l(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"}"}),l(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"type"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"UseWebWorkerFnReturn"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"ReturnType"}),l(e.span,{style:{color:"#86E1FC"},children:"<typeof"}),l(e.span,{style:{color:"#C8D3F5"},children:" useWebWorkerFn"}),l(e.span,{style:{color:"#86E1FC"},children:">;"})]}})]}})}})}}),`
`,l(e.h2,{children:"Source"}),`
`,l(e.p,{get children(){return[l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useWebWorkerFn/index.ts",children:"Source"})," • ",l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useWebWorkerFn/demo.tsx",children:"Demo"})," • ",l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useWebWorkerFn/index.md",children:"Docs"})," • ",l(e.a,{href:"https://vueuse.org/core/useWebWorkerFn",children:"VueUse Docs"})]}}),`
`,l(i,{links:[{href:"#demo",label:"Demo",indent:!1},{href:"#usage",label:"Usage",indent:!1},{href:"#basic-example",label:"Basic example",indent:!0},{href:"#with-dependencies",label:"With dependencies",indent:!0},{href:"#web-worker",label:"Web Worker",indent:!1},{href:"#credit",label:"Credit",indent:!1},{href:"#type-declarations",label:"Type Declarations",indent:!1},{href:"#source",label:"Source",indent:!1}]})]}})}function ce(r={}){const{wrapper:e}=Object.assign({},$(),r.components);return e?l(e,U(r,{get children(){return l(S,r)}})):S(r)}function A(r,e){throw new Error("Expected "+(e?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{ce as default};
