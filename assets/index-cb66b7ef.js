import{z as d,U as B,i as F,c as l,F as D,g as b,j as f,y as N,t as p,M as C,a as v}from"./index-294efc99.js";import{u as A}from"./index-52186e44.js";import"./index-572fa03a.js";import"./index-47c342e1.js";import"./index-333ddb48.js";import"./scheduler-3ae68f06.js";const M=p("<div><div></div></div>",4),O=p("<div>Mutation Attribute: </div>",2),j=()=>{const[n,e]=d(null),[o,t]=d([]),[a,u]=d({}),[m,g]=d({});return A(n,i=>{const s=i[0];s&&t(r=>[...r,s.attributeName])},{attributes:!0}),setTimeout(()=>{u({test:!0,test2:!0})},1e3),setTimeout(()=>{g({color:"red"})},1550),(()=>{const i=M.cloneNode(!0),s=i.firstChild;return B(e,s),F(s,l(D,{get each(){return o()},children:r=>(()=>{const c=O.cloneNode(!0);return c.firstChild,F(c,r,null),c})()})),b(r=>{const c=a(),E=m();return r._v$=f(s,c,r._v$),r._v$2=N(s,E,r._v$2),r},{_v$:void 0,_v$2:void 0}),i})()},x=p('<p class="demo-source-link"><a href="https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useMutationObserver/demo.tsx" target="_blank">source</a></p>',4);function y(n){const e=Object.assign({div:"div",h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",span:"span"},C(),n.components),{FunctionInfo:o,DemoContainer:t,ContextualNav:a}=e;return a||h("ContextualNav",!0),t||h("DemoContainer",!0),o||h("FunctionInfo",!0),l(e.div,{className:"markdown-body",get children(){return[l(e.h1,{children:"useMutationObserver"}),`
`,l(o,{fn:"useMutationObserver"}),`
`,l(e.p,{get children(){return["Watch for changes being made to the DOM tree. ",l(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver",children:"MutationObserver MDN"})]}}),`
`,l(e.h2,{children:"Demo"}),`
`,`
`,l(t,{get children(){return[x.cloneNode(!0),l(j,{})]}}),`
`,l(e.h2,{children:"Usage"}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return l(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"jsx","data-theme":"default",get children(){return l(e.code,{"data-language":"jsx","data-theme":"default",get children(){return[l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#86E1FC"},children:"import"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{ "}),l(e.span,{style:{color:"#C8D3F5"},children:"createSignal"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#C8D3F5"},children:"For"}),l(e.span,{style:{color:"#B4C2F0"},children:" }"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"from"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:'"'}),l(e.span,{style:{color:"#C3E88D"},children:"solid-js"}),l(e.span,{style:{color:"#86E1FC"},children:'"'}),l(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#86E1FC"},children:"import"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{ "}),l(e.span,{style:{color:"#C8D3F5"},children:"useMutationObserver"}),l(e.span,{style:{color:"#B4C2F0"},children:" }"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"from"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:'"'}),l(e.span,{style:{color:"#C3E88D"},children:"solidjs-use"}),l(e.span,{style:{color:"#86E1FC"},children:'"'}),l(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#82AAFF"},children:"Demo"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"()"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"=>"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"  "}),l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"["}),l(e.span,{style:{color:"#FF98A4"},children:"el"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#FF98A4"},children:"setEl"}),l(e.span,{style:{color:"#86E1FC"},children:"]"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#65BCFF"},children:"createSignal"}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#7F85A3"},children:"null"}),l(e.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"  "}),l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"["}),l(e.span,{style:{color:"#FF98A4"},children:"messages"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#FF98A4"},children:"setMessage"}),l(e.span,{style:{color:"#86E1FC"},children:"]"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#65BCFF"},children:"createSignal"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FF966C"},children:"string"}),l(e.span,{style:{color:"#86E1FC"},children:"[]>"}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#86E1FC"},children:"[]"}),l(e.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"  "}),l(e.span,{style:{color:"#65BCFF"},children:"useMutationObserver"}),l(e.span,{style:{color:"#B4C2F0"},children:"("})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"    "}),l(e.span,{style:{color:"#C8D3F5"},children:"el"}),l(e.span,{style:{color:"#86E1FC"},children:","})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"    ("}),l(e.span,{style:{color:"#FCA7EA"},children:"mutations"}),l(e.span,{style:{color:"#B4C2F0"},children:") "}),l(e.span,{style:{color:"#C099FF"},children:"=>"}),l(e.span,{style:{color:"#B4C2F0"},children:" {"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"      "}),l(e.span,{style:{color:"#86E1FC"},children:"if"}),l(e.span,{style:{color:"#B4C2F0"},children:" ("}),l(e.span,{style:{color:"#86E1FC"},children:"!"}),l(e.span,{style:{color:"#C8D3F5"},children:"mutations"}),l(e.span,{style:{color:"#86E1FC"},children:"["}),l(e.span,{style:{color:"#FF966C"},children:"0"}),l(e.span,{style:{color:"#86E1FC"},children:"]"}),l(e.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"        "}),l(e.span,{style:{color:"#86E1FC"},children:"return"})]}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"      "}),l(e.span,{style:{color:"#65BCFF"},children:"setMessage"}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#FCA7EA"},children:"state"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"=>"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"["}),l(e.span,{style:{color:"#FF757F",fontWeight:"bold"},children:"..."}),l(e.span,{style:{color:"#C8D3F5"},children:"state"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#C8D3F5"},children:"mutations"}),l(e.span,{style:{color:"#86E1FC"},children:"["}),l(e.span,{style:{color:"#FF966C"},children:"0"}),l(e.span,{style:{color:"#86E1FC"},children:"]."}),l(e.span,{style:{color:"#A9B8E8"},children:"attributeName"}),l(e.span,{style:{color:"#86E1FC"},children:"]"}),l(e.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"    }"}),l(e.span,{style:{color:"#86E1FC"},children:","})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"    { "}),l(e.span,{style:{color:"#4FD6BE"},children:"attributes"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#A9B8E8"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"true"}),l(e.span,{style:{color:"#A9B8E8"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"}"}),l(e.span,{style:{color:"#86E1FC"},children:","})]}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#B4C2F0"},children:"  )"})}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"  "}),l(e.span,{style:{color:"#86E1FC"},children:"return"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FF757F"},children:"div"}),l(e.span,{style:{color:"#86E1FC"},children:">"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"    "}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FF757F"},children:"div "}),l(e.span,{style:{color:"#C099FF"},children:"ref"}),l(e.span,{style:{color:"#86E1FC"},children:"={"}),l(e.span,{style:{color:"#C8D3F5"},children:"setEl"}),l(e.span,{style:{color:"#86E1FC"},children:"}>"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"      "}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"For"}),l(e.span,{style:{color:"#FF757F"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"each"}),l(e.span,{style:{color:"#86E1FC"},children:"={"}),l(e.span,{style:{color:"#65BCFF"},children:"messages"}),l(e.span,{style:{color:"#B4C2F0"},children:"()"}),l(e.span,{style:{color:"#86E1FC"},children:"}>"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"        "}),l(e.span,{style:{color:"#86E1FC"},children:"{"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"          ("}),l(e.span,{style:{color:"#FCA7EA"},children:"text"}),l(e.span,{style:{color:"#B4C2F0"},children:") "}),l(e.span,{style:{color:"#C099FF"},children:"=>"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FF757F"},children:"div"}),l(e.span,{style:{color:"#86E1FC"},children:">"}),l(e.span,{style:{color:"#B4C2F0"},children:"Mutation Attribute: "}),l(e.span,{style:{color:"#86E1FC"},children:"{"}),l(e.span,{style:{color:"#C8D3F5"},children:"text"}),l(e.span,{style:{color:"#86E1FC"},children:"}</"}),l(e.span,{style:{color:"#FF757F"},children:"div"}),l(e.span,{style:{color:"#86E1FC"},children:">"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"        "}),l(e.span,{style:{color:"#86E1FC"},children:"}"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"      "}),l(e.span,{style:{color:"#86E1FC"},children:"</"}),l(e.span,{style:{color:"#FFC777"},children:"For"}),l(e.span,{style:{color:"#86E1FC"},children:">"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"    "}),l(e.span,{style:{color:"#86E1FC"},children:"</"}),l(e.span,{style:{color:"#FF757F"},children:"div"}),l(e.span,{style:{color:"#86E1FC"},children:">"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"  "}),l(e.span,{style:{color:"#86E1FC"},children:"</"}),l(e.span,{style:{color:"#FF757F"},children:"div"}),l(e.span,{style:{color:"#86E1FC"},children:">"})]}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#B4C2F0"},children:"}"})}})]}})}})}}),`
`,l(e.h2,{children:"Type Declarations"}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return l(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"typescript","data-theme":"default",get children(){return l(e.code,{"data-language":"typescript","data-theme":"default",get children(){return[l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"interface"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"UseMutationObserverOptions"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"extends"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C3E88D"},children:"MutationObserverInit"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C3E88D"},children:"ConfigurableWindow"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#B4C2F0"},children:"}"})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:"/**"})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:" * Watch for changes being made to the DOM tree."})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:" *"})}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#7A88CF"},children:" * "}),l(e.span,{style:{color:"#86E1FC"},children:"@"}),l(e.span,{style:{color:"#C099FF"},children:"see"}),l(e.span,{style:{color:"#7A88CF"},children:" "}),l(e.span,{style:{color:"#C8D3F5"},children:"https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver"}),l(e.span,{style:{color:"#7A88CF"},children:" MutationObserver MDN"})]}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:" */"})}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"declare"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"function"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#82AAFF"},children:"useMutationObserver"}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#FCA7EA"},children:"target"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"MaybeElementAccessor"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FCA7EA"},children:"callback"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"MutationCallback"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FCA7EA"},children:"options"}),l(e.span,{style:{color:"#86E1FC"},children:"?:"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"UseMutationObserverOptions"}),l(e.span,{style:{color:"#B4C2F0"},children:")"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#4FD6BE"},children:"isSupported"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"solid_js"}),l(e.span,{style:{color:"#86E1FC"},children:"."}),l(e.span,{style:{color:"#FFC777"},children:"Accessor"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FF966C"},children:"boolean"}),l(e.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#82AAFF"},children:"stop"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"()"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"=>"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"void"}),l(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"}"}),l(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"type"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"UseMutationObserverReturn"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"ReturnType"}),l(e.span,{style:{color:"#86E1FC"},children:"<typeof"}),l(e.span,{style:{color:"#C8D3F5"},children:" useMutationObserver"}),l(e.span,{style:{color:"#86E1FC"},children:">;"})]}})]}})}})}}),`
`,l(e.h2,{children:"Source"}),`
`,l(e.p,{get children(){return[l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useMutationObserver/index.ts",children:"Source"})," • ",l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useMutationObserver/demo.tsx",children:"Demo"})," • ",l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useMutationObserver/index.md",children:"Docs"})," • ",l(e.a,{href:"https://vueuse.org/core/useMutationObserver",children:"VueUse Docs"})]}}),`
`,l(a,{links:[{href:"#demo",label:"Demo",indent:!1},{href:"#usage",label:"Usage",indent:!1},{href:"#type-declarations",label:"Type Declarations",indent:!1},{href:"#source",label:"Source",indent:!1}]})]}})}function w(n={}){const{wrapper:e}=Object.assign({},C(),n.components);return e?l(e,v(n,{get children(){return l(y,n)}})):y(n)}function h(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{w as default};
