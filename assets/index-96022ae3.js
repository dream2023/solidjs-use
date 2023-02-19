import{z as p,A as u,p as y,q as F,B as C,i as m,t as i,M as h,c as n,a as g}from"./index-294efc99.js";import{s as f}from"./index-4d16561d.js";function D({window:l=F}={}){const[e,o]=p(1),s=C();if(l){let r=function(){o(l.devicePixelRatio),a(),c=l.matchMedia(`(resolution: ${e()}dppx)`),c.addEventListener("change",r,{once:!0})},a=function(){c?.removeEventListener("change",r)},c;r(),u(s,()=>{y(a)})}return{pixelRatio:e}}const v=i('<pre lang="yaml"></pre>',2),x=i('<span class="opacity-50">Zoom in and out (or move the window to a screen with a different scaling factor) to see the value changes</span>',2),b=()=>{const l=D();return[(()=>{const e=v.cloneNode(!0);return m(e,()=>f(l)),e})(),x.cloneNode(!0)]},E=i('<p class="demo-source-link"><a href="https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useDevicePixelRatio/demo.tsx" target="_blank">source</a></p>',4);function d(l){const e=Object.assign({div:"div",h1:"h1",p:"p",a:"a",code:"code",blockquote:"blockquote",h2:"h2",pre:"pre",span:"span"},h(),l.components),{FunctionInfo:o,DemoContainer:s,ContextualNav:r}=e;return r||t("ContextualNav",!0),s||t("DemoContainer",!0),o||t("FunctionInfo",!0),n(e.div,{className:"markdown-body",get children(){return[n(e.h1,{children:"useDevicePixelRatio"}),`
`,n(o,{fn:"useDevicePixelRatio"}),`
`,n(e.p,{get children(){return["Reactively track ",n(e.a,{href:"https://developer.mozilla.org/ru/docs/Web/API/Window/devicePixelRatio",get children(){return n(e.code,{children:"window.devicePixelRatio"})}})]}}),`
`,n(e.blockquote,{get children(){return[`
`,n(e.p,{get children(){return["NOTE: there is no event listener for ",n(e.code,{children:"window.devicePixelRatio"})," change. So this function uses ",n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries",get children(){return n(e.code,{children:"Testing media queries programmatically (window.matchMedia)"})}})," applying the same mechanism as described in ",n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes",children:"this example"}),"."]}}),`
`]}}),`
`,n(e.h2,{children:"Demo"}),`
`,`
`,n(s,{get children(){return[E.cloneNode(!0),n(b,{})]}}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return n(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"js","data-theme":"default",get children(){return n(e.code,{"data-language":"js","data-theme":"default",get children(){return[n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#86E1FC"},children:"import"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#B4C2F0"},children:"{ "}),n(e.span,{style:{color:"#C8D3F5"},children:"useDevicePixelRatio"}),n(e.span,{style:{color:"#B4C2F0"},children:" }"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"from"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"'"}),n(e.span,{style:{color:"#C3E88D"},children:"solidjs-use"}),n(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,n(e.span,{className:"line",children:" "}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#C099FF"},children:"const"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#82AAFF"},children:"Demo"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"="}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#B4C2F0"},children:"()"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#C099FF"},children:"=>"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#B4C2F0"},children:"  "}),n(e.span,{style:{color:"#C099FF"},children:"const"}),n(e.span,{style:{color:"#B4C2F0"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"{"}),n(e.span,{style:{color:"#B4C2F0"},children:" "}),n(e.span,{style:{color:"#FF98A4"},children:"pixelRatio"}),n(e.span,{style:{color:"#B4C2F0"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"}"}),n(e.span,{style:{color:"#B4C2F0"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"="}),n(e.span,{style:{color:"#B4C2F0"},children:" "}),n(e.span,{style:{color:"#65BCFF"},children:"useDevicePixelRatio"}),n(e.span,{style:{color:"#B4C2F0"},children:"()"})]}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#86E1FC"},children:"  "}),n(e.span,{style:{color:"#7A88CF"},children:"// ..."})]}}),`
`,n(e.span,{className:"line",get children(){return n(e.span,{style:{color:"#B4C2F0"},children:"}"})}})]}})}})}}),`
`,n(e.h2,{children:"Type Declarations"}),`
`,n(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return n(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"typescript","data-theme":"default",get children(){return n(e.code,{"data-language":"typescript","data-theme":"default",get children(){return[n(e.span,{className:"line",get children(){return n(e.span,{style:{color:"#7A88CF"},children:"/**"})}}),`
`,n(e.span,{className:"line",get children(){return n(e.span,{style:{color:"#7A88CF"},children:" * Reactively track `window.devicePixelRatio`."})}}),`
`,n(e.span,{className:"line",get children(){return n(e.span,{style:{color:"#7A88CF"},children:" */"})}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#C099FF"},children:"declare"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#C099FF"},children:"function"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#82AAFF"},children:"useDevicePixelRatio"}),n(e.span,{style:{color:"#B4C2F0"},children:"("}),n(e.span,{style:{color:"#86E1FC"},children:"{"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#FCA7EA"},children:"window"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"}"}),n(e.span,{style:{color:"#C8D3F5"},children:"?"}),n(e.span,{style:{color:"#86E1FC"},children:":"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#FFC777"},children:"ConfigurableWindow"}),n(e.span,{style:{color:"#B4C2F0"},children:")"}),n(e.span,{style:{color:"#86E1FC"},children:":"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#C8D3F5"},children:"    "}),n(e.span,{style:{color:"#4FD6BE"},children:"pixelRatio"}),n(e.span,{style:{color:"#86E1FC"},children:":"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#FFC777"},children:"solid_js"}),n(e.span,{style:{color:"#86E1FC"},children:"."}),n(e.span,{style:{color:"#FFC777"},children:"Accessor"}),n(e.span,{style:{color:"#86E1FC"},children:"<"}),n(e.span,{style:{color:"#FF966C"},children:"number"}),n(e.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#B4C2F0"},children:"}"}),n(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#C099FF"},children:"type"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#FFC777"},children:"UseDevicePixelRatioReturn"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"="}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#FFC777"},children:"ReturnType"}),n(e.span,{style:{color:"#86E1FC"},children:"<typeof"}),n(e.span,{style:{color:"#C8D3F5"},children:" useDevicePixelRatio"}),n(e.span,{style:{color:"#86E1FC"},children:">;"})]}})]}})}})}}),`
`,n(e.h2,{children:"Source"}),`
`,n(e.p,{get children(){return[n(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useDevicePixelRatio/index.ts",children:"Source"})," • ",n(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useDevicePixelRatio/demo.tsx",children:"Demo"})," • ",n(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useDevicePixelRatio/index.md",children:"Docs"})," • ",n(e.a,{href:"https://vueuse.org/core/useDevicePixelRatio",children:"VueUse Docs"})]}}),`
`,n(r,{links:[{href:"#demo",label:"Demo",indent:!1},{href:"#usage",label:"Usage",indent:!1},{href:"#type-declarations",label:"Type Declarations",indent:!1},{href:"#source",label:"Source",indent:!1}]})]}})}function w(l={}){const{wrapper:e}=Object.assign({},h(),l.components);return e?n(e,g(l,{get children(){return n(d,l)}})):d(l)}function t(l,e){throw new Error("Expected "+(e?"component":"object")+" `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}export{w as default};
