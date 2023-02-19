import{k as y,z as a,i as C,U as u,t as d,M as p,c as e,a as m}from"./index-294efc99.js";import{t as E,f as B,w as g,a as f,b as D}from"./index-90aa55b6.js";import{u as b}from"./index-e5443aae.js";import{i as v}from"./interval-d36236de.js";import{m as N,a as A}from"./mapTo-689f6d56.js";import"./Observable-f2594621.js";const x=d("<div><button>count is: </button><button>stop</button></div>",6),j=()=>{const[n,l]=a(0),[o,c]=a(null);return b(v(1e3).pipe(N(1),E(B(o,"click")),g(f(n,{})),A(([r,s])=>r+s)).subscribe(D(l))),(()=>{const r=x.cloneNode(!0),s=r.firstChild;s.firstChild;const h=s.nextSibling;return s.$$click=()=>l(F=>F+1),C(s,n,null),u(c,h),r})()};y(["click"]);const k=d('<p class="demo-source-link"><a href="https://github.com/solidjs-use/solidjs-use/blob/main/packages/rxjs/src/from/demo.tsx" target="_blank">source</a></p>',4);function i(n){const l=Object.assign({div:"div",h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre",span:"span"},p(),n.components),{FunctionInfo:o,DemoContainer:c,ContextualNav:r}=l;return r||t("ContextualNav",!0),c||t("DemoContainer",!0),o||t("FunctionInfo",!0),e(l.div,{className:"markdown-body",get children(){return[e(l.h1,{children:"from / fromEvent"}),`
`,e(l.p,{get children(){return["Wrappers around RxJS's ",e(l.a,{href:"https://rxjs.dev/api/index/function/from",get children(){return e(l.code,{children:"from()"})}})," and ",e(l.a,{href:"https://rxjs.dev/api/index/function/fromEvent",get children(){return e(l.code,{children:"fromEvent()"})}})," to allow them to accept ",e(l.code,{children:"ref"}),"s."]}}),`
`,e(l.h2,{children:"Demo"}),`
`,e(o,{fn:"from"}),`
`,`
`,e(c,{get children(){return[k.cloneNode(!0),e(j,{})]}}),`
`,e(l.p,{get children(){return["Available in the ",e(l.a,{href:"/solidjs-use/rxjs/README",children:"@solidjs-use/rxjs"})," add-on."]}}),`
`,e(l.h2,{children:"Usage"}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",get children(){return e(l.pre,{style:{backgroundColor:"#1F2028"},"data-language":"tsx","data-theme":"default",get children(){return e(l.code,{"data-language":"tsx","data-theme":"default",get children(){return[e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#86E1FC"},children:"import"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{ "}),e(l.span,{style:{color:"#C8D3F5"},children:"from"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"fromEvent"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"toObserver"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"useSubscription"}),e(l.span,{style:{color:"#B4C2F0"},children:" }"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"from"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"@solidjs-use/rxjs"}),e(l.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#86E1FC"},children:"import"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{ "}),e(l.span,{style:{color:"#C8D3F5"},children:"interval"}),e(l.span,{style:{color:"#B4C2F0"},children:" }"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"from"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"rxjs"}),e(l.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#86E1FC"},children:"import"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{ "}),e(l.span,{style:{color:"#C8D3F5"},children:"map"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"mapTo"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"takeUntil"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"withLatestFrom"}),e(l.span,{style:{color:"#B4C2F0"},children:" }"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"from"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"rxjs/operators"}),e(l.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#86E1FC"},children:"import"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{ "}),e(l.span,{style:{color:"#C8D3F5"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"createSignal"}),e(l.span,{style:{color:"#B4C2F0"},children:" }"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"from"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"solid-js"}),e(l.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(l.span,{className:"line",children:" "}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"const"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#82AAFF"},children:"Demo"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"()"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"=>"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"  "}),e(l.span,{style:{color:"#C099FF"},children:"const"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"["}),e(l.span,{style:{color:"#FF98A4"},children:"count"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#FF98A4"},children:"setCount"}),e(l.span,{style:{color:"#86E1FC"},children:"]"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#65BCFF"},children:"createSignal"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#FF966C"},children:"0"}),e(l.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"  "}),e(l.span,{style:{color:"#C099FF"},children:"const"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"["}),e(l.span,{style:{color:"#FF98A4"},children:"button"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#FF98A4"},children:"setButton"}),e(l.span,{style:{color:"#86E1FC"},children:"]"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#65BCFF"},children:"createSignal"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"HTMLButtonElement"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"null"}),e(l.span,{style:{color:"#86E1FC"},children:">"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#7F85A3"},children:"null"}),e(l.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,e(l.span,{className:"line",children:" "}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"  "}),e(l.span,{style:{color:"#65BCFF"},children:"useSubscription"}),e(l.span,{style:{color:"#B4C2F0"},children:"("})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"    "}),e(l.span,{style:{color:"#65BCFF"},children:"interval"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#FF966C"},children:"1000"}),e(l.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"      "}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#65BCFF"},children:"pipe"}),e(l.span,{style:{color:"#B4C2F0"},children:"("})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"        "}),e(l.span,{style:{color:"#65BCFF"},children:"mapTo"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#FF966C"},children:"1"}),e(l.span,{style:{color:"#B4C2F0"},children:")"}),e(l.span,{style:{color:"#86E1FC"},children:","})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"        "}),e(l.span,{style:{color:"#65BCFF"},children:"takeUntil"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#65BCFF"},children:"fromEvent"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#C8D3F5"},children:"button"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"as"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"HTMLButtonElement"}),e(l.span,{style:{color:"#86E1FC"},children:">,"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"click"}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#B4C2F0"},children:"))"}),e(l.span,{style:{color:"#86E1FC"},children:","})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"        "}),e(l.span,{style:{color:"#65BCFF"},children:"withLatestFrom"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#65BCFF"},children:"from"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#C8D3F5"},children:"count"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" {}))"}),e(l.span,{style:{color:"#86E1FC"},children:","})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"        "}),e(l.span,{style:{color:"#65BCFF"},children:"map"}),e(l.span,{style:{color:"#B4C2F0"},children:"(("}),e(l.span,{style:{color:"#86E1FC"},children:"["}),e(l.span,{style:{color:"#FCA7EA"},children:"curr"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#FCA7EA"},children:"total"}),e(l.span,{style:{color:"#86E1FC"},children:"]"}),e(l.span,{style:{color:"#B4C2F0"},children:") "}),e(l.span,{style:{color:"#C099FF"},children:"=>"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"curr"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"+"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"total"}),e(l.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#B4C2F0"},children:"      )"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"      "}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#65BCFF"},children:"subscribe"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#65BCFF"},children:"toObserver"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#C8D3F5"},children:"setCount"}),e(l.span,{style:{color:"#B4C2F0"},children:"))"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#B4C2F0"},children:"  )"})}}),`
`,e(l.span,{className:"line",children:" "}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"  "}),e(l.span,{style:{color:"#86E1FC"},children:"return"}),e(l.span,{style:{color:"#B4C2F0"},children:" ("})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"    "}),e(l.span,{style:{color:"#86E1FC"},children:"<>"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"      "}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FF757F"},children:"div"}),e(l.span,{style:{color:"#86E1FC"},children:">"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"        "}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FF757F"},children:"button "}),e(l.span,{style:{color:"#C099FF"},children:"onClick"}),e(l.span,{style:{color:"#86E1FC"},children:"={"}),e(l.span,{style:{color:"#B4C2F0"},children:"()"}),e(l.span,{style:{color:"#FF757F"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"=>"}),e(l.span,{style:{color:"#FF757F"},children:" "}),e(l.span,{style:{color:"#65BCFF"},children:"setCount"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#FCA7EA"},children:"state"}),e(l.span,{style:{color:"#FF757F"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"=>"}),e(l.span,{style:{color:"#FF757F"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"state"}),e(l.span,{style:{color:"#FF757F"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"+"}),e(l.span,{style:{color:"#FF757F"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"1"}),e(l.span,{style:{color:"#B4C2F0"},children:")"}),e(l.span,{style:{color:"#86E1FC"},children:"}>"}),e(l.span,{style:{color:"#B4C2F0"},children:"count is: "}),e(l.span,{style:{color:"#86E1FC"},children:"{"}),e(l.span,{style:{color:"#65BCFF"},children:"count"}),e(l.span,{style:{color:"#B4C2F0"},children:"()"}),e(l.span,{style:{color:"#86E1FC"},children:"}</"}),e(l.span,{style:{color:"#FF757F"},children:"button"}),e(l.span,{style:{color:"#86E1FC"},children:">"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"        "}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FF757F"},children:"button "}),e(l.span,{style:{color:"#C099FF"},children:"ref"}),e(l.span,{style:{color:"#86E1FC"},children:"={"}),e(l.span,{style:{color:"#C8D3F5"},children:"setButton"}),e(l.span,{style:{color:"#86E1FC"},children:"}>"}),e(l.span,{style:{color:"#B4C2F0"},children:"stop"}),e(l.span,{style:{color:"#86E1FC"},children:"</"}),e(l.span,{style:{color:"#FF757F"},children:"button"}),e(l.span,{style:{color:"#86E1FC"},children:">"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"      "}),e(l.span,{style:{color:"#86E1FC"},children:"</"}),e(l.span,{style:{color:"#FF757F"},children:"div"}),e(l.span,{style:{color:"#86E1FC"},children:">"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"    "}),e(l.span,{style:{color:"#86E1FC"},children:"</>"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#B4C2F0"},children:"  )"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#B4C2F0"},children:"}"})}})]}})}})}}),`
`,e(l.h2,{children:"Type Declarations"}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",get children(){return e(l.pre,{style:{backgroundColor:"#1F2028"},"data-language":"typescript","data-theme":"default",get children(){return e(l.code,{"data-language":"typescript","data-theme":"default",get children(){return[e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"declare"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"function"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#82AAFF"},children:"from"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#86E1FC"},children:">"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#FCA7EA"},children:"value"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"ObservableInput"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#86E1FC"},children:">"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#86E1FC"},children:">,"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FCA7EA"},children:"onOptions"}),e(l.span,{style:{color:"#86E1FC"},children:"?:"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"OnOptions"}),e(l.span,{style:{color:"#B4C2F0"},children:")"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"Observable"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"declare"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"function"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#82AAFF"},children:"fromEvent"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"extends"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"HTMLElement"}),e(l.span,{style:{color:"#86E1FC"},children:">"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#FCA7EA"},children:"value"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"MaybeAccessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#86E1FC"},children:">,"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FCA7EA"},children:"event"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"string"}),e(l.span,{style:{color:"#B4C2F0"},children:")"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"Observable"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"Event"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}})]}})}})}}),`
`,e(l.h2,{children:"Source"}),`
`,e(l.p,{get children(){return[e(l.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/rxjs/src/from/index.ts",children:"Source"})," • ",e(l.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/rxjs/src/from/demo.tsx",children:"Demo"})," • ",e(l.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/rxjs/src/from/index.md",children:"Docs"})," • ",e(l.a,{href:"https://vueuse.org/rxjs/from",children:"VueUse Docs"})]}}),`
`,e(r,{links:[{href:"#demo",label:"Demo",indent:!1},{href:"#usage",label:"Usage",indent:!1},{href:"#type-declarations",label:"Type Declarations",indent:!1},{href:"#source",label:"Source",indent:!1}]})]}})}function $(n={}){const{wrapper:l}=Object.assign({},p(),n.components);return l?e(l,m(n,{get children(){return e(i,n)}})):i(n)}function t(n,l){throw new Error("Expected "+(l?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{$ as default};
