import{z as m,C as F,D as C,p as j,k as D,Y as v,A as S,a3 as w,i as x,t as b,B,M as f,c as r,a as A}from"./index-294efc99.js";import{_ as a,b as h,r as N,O as p,S as O}from"./Observable-f2594621.js";var _=function(){function s(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return s.prototype=Object.create(Error.prototype),s}(),i=_,k=function(s){a(e,s);function e(n,l){var o=s.call(this)||this;return o.subject=n,o.subscriber=l,o.closed=!1,o}return e.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var n=this.subject,l=n.observers;if(this.subject=null,!(!l||l.length===0||n.isStopped||n.closed)){var o=l.indexOf(this.subscriber);o!==-1&&l.splice(o,1)}}},e}(h),U=function(s){a(e,s);function e(n){var l=s.call(this,n)||this;return l.destination=n,l}return e}(O),E=function(s){a(e,s);function e(){var n=s.call(this)||this;return n.observers=[],n.closed=!1,n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype[N]=function(){return new U(this)},e.prototype.lift=function(n){var l=new u(this,this);return l.operator=n,l},e.prototype.next=function(n){if(this.closed)throw new i;if(!this.isStopped)for(var l=this.observers,o=l.length,t=l.slice(),c=0;c<o;c++)t[c].next(n)},e.prototype.error=function(n){if(this.closed)throw new i;this.hasError=!0,this.thrownError=n,this.isStopped=!0;for(var l=this.observers,o=l.length,t=l.slice(),c=0;c<o;c++)t[c].error(n);this.observers.length=0},e.prototype.complete=function(){if(this.closed)throw new i;this.isStopped=!0;for(var n=this.observers,l=n.length,o=n.slice(),t=0;t<l;t++)o[t].complete();this.observers.length=0},e.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},e.prototype._trySubscribe=function(n){if(this.closed)throw new i;return s.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){if(this.closed)throw new i;return this.hasError?(n.error(this.thrownError),h.EMPTY):this.isStopped?(n.complete(),h.EMPTY):(this.observers.push(n),new k(this,n))},e.prototype.asObservable=function(){var n=new p;return n.source=this,n},e.create=function(n,l){return new u(n,l)},e}(p),u=function(s){a(e,s);function e(n,l){var o=s.call(this)||this;return o.destination=n,o.source=l,o}return e.prototype.next=function(n){var l=this.destination;l&&l.next&&l.next(n)},e.prototype.error=function(n){var l=this.destination;l&&l.error&&this.destination.error(n)},e.prototype.complete=function(){var n=this.destination;n&&n.complete&&this.destination.complete()},e.prototype._subscribe=function(n){var l=this.source;return l?this.source.subscribe(n):h.EMPTY},e}(E),g=function(s){a(e,s);function e(n){var l=s.call(this)||this;return l._value=n,l}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),e.prototype._subscribe=function(n){var l=s.prototype._subscribe.call(this,n);return l&&!l.closed&&n.next(this._value),l},e.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new i;return this._value},e.prototype.next=function(n){s.prototype.next.call(this,this._value=n)},e}(E);function M(s,e){const n=m(s instanceof g?s.value:void 0),[l,o]=n,t=s.subscribe({next(c){o(()=>c)},error:e?.onError});return F(C(l,c=>{s.next(c)},{defer:!0})),j(()=>{t.unsubscribe()}),n}const I=b("<button>count is: </button>",2),H=()=>{const s=new g(0),[e,n]=M(s),l=B();return v(()=>{S(l,()=>{}),F(C(e,t=>{console.info("from watcher:",t)}));const o=s.subscribe(t=>console.info("from subscriber: ",t));w(()=>{o.unsubscribe()})}),(()=>{const o=I.cloneNode(!0);return o.firstChild,o.$$click=()=>n(t=>t+1),x(o,e,null),o})()};D(["click"]);const $=b('<p class="demo-source-link"><a href="https://github.com/solidjs-use/solidjs-use/blob/main/packages/rxjs/src/useSubject/demo.tsx" target="_blank">source</a></p>',4);function y(s){const e=Object.assign({div:"div",h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre",span:"span"},f(),s.components),{FunctionInfo:n,DemoContainer:l,ContextualNav:o}=e;return o||d("ContextualNav",!0),l||d("DemoContainer",!0),n||d("FunctionInfo",!0),r(e.div,{className:"markdown-body",get children(){return[r(e.h1,{children:"useSubject"}),`
`,r(n,{fn:"useSubject"}),`
`,r(e.p,{get children(){return["Bind an RxJS ",r(e.a,{href:"https://rxjs.dev/guide/subject",get children(){return r(e.code,{children:"Subject"})}})," to a ",r(e.code,{children:"ref"})," and propagate value changes both ways."]}}),`
`,r(e.h2,{children:"Demo"}),`
`,`
`,r(l,{get children(){return[$.cloneNode(!0),r(H,{})]}}),`
`,r(e.p,{get children(){return["Available in the ",r(e.a,{href:"/solidjs-use/rxjs/README",children:"@solidjs-use/rxjs"})," add-on."]}}),`
`,r(e.h2,{children:"Usage"}),`
`,r(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return r(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"ts","data-theme":"default",get children(){return r(e.code,{"data-language":"ts","data-theme":"default",get children(){return[r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#86E1FC"},children:"import"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#B4C2F0"},children:"{ "}),r(e.span,{style:{color:"#C8D3F5"},children:"useSubject"}),r(e.span,{style:{color:"#B4C2F0"},children:" }"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"from"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"'"}),r(e.span,{style:{color:"#C3E88D"},children:"@solidjs-use/rxjs"}),r(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#86E1FC"},children:"import"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#B4C2F0"},children:"{ "}),r(e.span,{style:{color:"#C8D3F5"},children:"Subject"}),r(e.span,{style:{color:"#B4C2F0"},children:" }"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"from"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"'"}),r(e.span,{style:{color:"#C3E88D"},children:"rxjs"}),r(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,r(e.span,{className:"line",children:" "}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C099FF"},children:"const"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FF98A4"},children:"subject"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"="}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"new"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#65BCFF"},children:"Subject"}),r(e.span,{style:{color:"#B4C2F0"},children:"()"})]}}),`
`,r(e.span,{className:"line",children:" "}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C099FF"},children:"const"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"["}),r(e.span,{style:{color:"#FF98A4"},children:"subjectData"}),r(e.span,{style:{color:"#86E1FC"},children:","}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FF98A4"},children:"setSubjectData"}),r(e.span,{style:{color:"#86E1FC"},children:"]"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"="}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#65BCFF"},children:"useSubject"}),r(e.span,{style:{color:"#B4C2F0"},children:"("}),r(e.span,{style:{color:"#C8D3F5"},children:"subject"}),r(e.span,{style:{color:"#B4C2F0"},children:")"})]}})]}})}})}}),`
`,r(e.p,{get children(){return["If you want to add custom error handling to a Subject that might error, you can supply an optional ",r(e.code,{children:"onError"}),' configuration. Without this, RxJS will treat any error in the supplied observable as an "unhandled error" and it will be thrown in a new call stack and reported to ',r(e.code,{children:"window.onerror"})," (or ",r(e.code,{children:"process.on('error')"})," if you happen to be in node)."]}}),`
`,r(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return r(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"ts","data-theme":"default",get children(){return r(e.code,{"data-language":"ts","data-theme":"default",get children(){return[r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#86E1FC"},children:"import"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#B4C2F0"},children:"{ "}),r(e.span,{style:{color:"#C8D3F5"},children:"useSubject"}),r(e.span,{style:{color:"#B4C2F0"},children:" }"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"from"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"'"}),r(e.span,{style:{color:"#C3E88D"},children:"@solidjs-use/rxjs"}),r(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#86E1FC"},children:"import"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#B4C2F0"},children:"{ "}),r(e.span,{style:{color:"#C8D3F5"},children:"Subject"}),r(e.span,{style:{color:"#B4C2F0"},children:" }"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"from"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"'"}),r(e.span,{style:{color:"#C3E88D"},children:"rxjs"}),r(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,r(e.span,{className:"line",children:" "}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C099FF"},children:"const"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FF98A4"},children:"subject"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"="}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"new"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#65BCFF"},children:"Subject"}),r(e.span,{style:{color:"#B4C2F0"},children:"()"})]}}),`
`,r(e.span,{className:"line",children:" "}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C099FF"},children:"const"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"["}),r(e.span,{style:{color:"#FF98A4"},children:"subjectData"}),r(e.span,{style:{color:"#86E1FC"},children:","}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FF98A4"},children:"setSubjectData"}),r(e.span,{style:{color:"#86E1FC"},children:"]"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"="}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#65BCFF"},children:"useSubject"}),r(e.span,{style:{color:"#B4C2F0"},children:"("}),r(e.span,{style:{color:"#C8D3F5"},children:"subject"}),r(e.span,{style:{color:"#86E1FC"},children:","}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C8D3F5"},children:"  "}),r(e.span,{style:{color:"#82AAFF"},children:"onError"}),r(e.span,{style:{color:"#86E1FC"},children:":"}),r(e.span,{style:{color:"#A9B8E8"},children:" "}),r(e.span,{style:{color:"#FCA7EA"},children:"err"}),r(e.span,{style:{color:"#A9B8E8"},children:" "}),r(e.span,{style:{color:"#C099FF"},children:"=>"}),r(e.span,{style:{color:"#A9B8E8"},children:" "}),r(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#B4C2F0"},children:"    "}),r(e.span,{style:{color:"#FFC777"},children:"console"}),r(e.span,{style:{color:"#86E1FC"},children:"."}),r(e.span,{style:{color:"#65BCFF"},children:"log"}),r(e.span,{style:{color:"#B4C2F0"},children:"("}),r(e.span,{style:{color:"#FFC777"},children:"err"}),r(e.span,{style:{color:"#86E1FC"},children:"."}),r(e.span,{style:{color:"#A9B8E8"},children:"message"}),r(e.span,{style:{color:"#B4C2F0"},children:") "}),r(e.span,{style:{color:"#7A88CF"},children:'// "oops"'})]}}),`
`,r(e.span,{className:"line",get children(){return r(e.span,{style:{color:"#B4C2F0"},children:"  }"})}}),`
`,r(e.span,{className:"line",get children(){return r(e.span,{style:{color:"#B4C2F0"},children:"})"})}})]}})}})}}),`
`,r(e.h2,{children:"Type Declarations"}),`
`,r(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return r(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"typescript","data-theme":"default",get children(){return r(e.code,{"data-language":"typescript","data-theme":"default",get children(){return[r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C099FF"},children:"type"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"UseSubjectOptions"}),r(e.span,{style:{color:"#86E1FC"},children:"<"}),r(e.span,{style:{color:"#FFC777"},children:"I"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"="}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FF966C"},children:"undefined"}),r(e.span,{style:{color:"#86E1FC"},children:">"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"="}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"Omit"}),r(e.span,{style:{color:"#86E1FC"},children:"<"}),r(e.span,{style:{color:"#FFC777"},children:"UseObservableOptions"}),r(e.span,{style:{color:"#86E1FC"},children:"<"}),r(e.span,{style:{color:"#FFC777"},children:"I"}),r(e.span,{style:{color:"#86E1FC"},children:">,"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"'"}),r(e.span,{style:{color:"#C3E88D"},children:"initialValue"}),r(e.span,{style:{color:"#86E1FC"},children:"'"}),r(e.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C099FF"},children:"declare"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#C099FF"},children:"function"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#82AAFF"},children:"useSubject"}),r(e.span,{style:{color:"#86E1FC"},children:"<"}),r(e.span,{style:{color:"#FFC777"},children:"H"}),r(e.span,{style:{color:"#86E1FC"},children:">"}),r(e.span,{style:{color:"#B4C2F0"},children:"("}),r(e.span,{style:{color:"#FCA7EA"},children:"subject"}),r(e.span,{style:{color:"#86E1FC"},children:":"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"BehaviorSubject"}),r(e.span,{style:{color:"#86E1FC"},children:"<"}),r(e.span,{style:{color:"#FFC777"},children:"H"}),r(e.span,{style:{color:"#86E1FC"},children:">,"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FCA7EA"},children:"options"}),r(e.span,{style:{color:"#86E1FC"},children:"?:"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"UseSubjectOptions"}),r(e.span,{style:{color:"#B4C2F0"},children:")"}),r(e.span,{style:{color:"#86E1FC"},children:":"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"Signal"}),r(e.span,{style:{color:"#86E1FC"},children:"<"}),r(e.span,{style:{color:"#FFC777"},children:"H"}),r(e.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C099FF"},children:"declare"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#C099FF"},children:"function"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#82AAFF"},children:"useSubject"}),r(e.span,{style:{color:"#86E1FC"},children:"<"}),r(e.span,{style:{color:"#FFC777"},children:"H"}),r(e.span,{style:{color:"#86E1FC"},children:">"}),r(e.span,{style:{color:"#B4C2F0"},children:"("}),r(e.span,{style:{color:"#FCA7EA"},children:"subject"}),r(e.span,{style:{color:"#86E1FC"},children:":"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"Subject"}),r(e.span,{style:{color:"#86E1FC"},children:"<"}),r(e.span,{style:{color:"#FFC777"},children:"H"}),r(e.span,{style:{color:"#86E1FC"},children:">,"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FCA7EA"},children:"options"}),r(e.span,{style:{color:"#86E1FC"},children:"?:"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"UseSubjectOptions"}),r(e.span,{style:{color:"#B4C2F0"},children:")"}),r(e.span,{style:{color:"#86E1FC"},children:":"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"Signal"}),r(e.span,{style:{color:"#86E1FC"},children:"<"}),r(e.span,{style:{color:"#FFC777"},children:"H"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"|"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FF966C"},children:"undefined"}),r(e.span,{style:{color:"#86E1FC"},children:">;"})]}})]}})}})}}),`
`,r(e.h2,{children:"Source"}),`
`,r(e.p,{get children(){return[r(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/rxjs/src/useSubject/index.ts",children:"Source"})," • ",r(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/rxjs/src/useSubject/demo.tsx",children:"Demo"})," • ",r(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/rxjs/src/useSubject/index.md",children:"Docs"})," • ",r(e.a,{href:"https://vueuse.org/rxjs/useSubject",children:"VueUse Docs"})]}}),`
`,r(o,{links:[{href:"#demo",label:"Demo",indent:!1},{href:"#usage",label:"Usage",indent:!1},{href:"#type-declarations",label:"Type Declarations",indent:!1},{href:"#source",label:"Source",indent:!1}]})]}})}function V(s={}){const{wrapper:e}=Object.assign({},f(),s.components);return e?r(e,A(s,{get children(){return r(y,s)}})):y(s)}function d(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{V as default};
