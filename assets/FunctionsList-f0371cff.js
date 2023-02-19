import{b as u,f as W,d as w,i,c,e as j,g as p,F as h,h as q,S as g,j as C,s as S,k as B,t as s}from"./index-294efc99.js";import{F as D}from"./fuse.esm-88e2763d.js";import{A as k}from"./index-46233d0d.js";import{F as H}from"./index-ff299e3e.js";import{T as P}from"./index-1b331aaa.js";import{u as R}from"./index-c656bc70.js";import{u as V}from"./index-aecc9516.js";import{r as G}from"./index-4d16561d.js";import"./index-9573230b.js";import"./index-5c0b687b.js";import"./index-397a7132.js";import"./filters-810ea59d.js";const I=s('<span opacity="70">use</span>',2),J=s('<span opacity="70">try</span>',2),K=s('<span opacity="70">on</span>',2),Q=s(`<style>
        a {
          color: var(--hope-colors-primary9);
        }
        .select-button {
          border-radius: .25rem;
          background-color: #9ca3af0d;
          padding: .125rem .5rem;
          font-size: .875rem;
          line-height: 1.25rem;

        }

        .select-button.active {
          background-color: #3eaf7c0d;
          --un-text-opacity: 1;
          color: var(--hope-colors-primary9);
        }
        </style>`,2),X=s('<button class="select-button active">Search</button>',2),Y=s('<div class="grid grid-cols-[80px_auto] gap-y-2 mt-10"><div opacity="80" text="sm">Core</div><div flex="~ wrap" gap="2" m="b-2"></div><div opacity="80" text="sm">Add-ons</div><div flex="~ wrap" gap="2" m="b-2"></div><div opacity="80" text="sm">Sort by</div><div flex="~ wrap" gap="2" m="b-2"></div></div>',14),Z=s('<div h="1px" bg="$vp-c-divider-light" m="t-4"></div>',2),ee=s('<div flex="~" class="children:my-auto" p="2"><input class="w-full" type="text" role="search" placeholder="Search..."></div>',3),te=s('<div h="1px" bg="$vp-c-divider-light" m="b-4"></div>',2),re=s('<div class="transition mb-2 opacity-60 absolute -top-3 right-0 z-10"><button class="select-button flex gap-1 items-center !px-2 !py-1">Clear Filters</button></div>',4),oe=s('<div text-center pt-6><div m2 op50>No result matched</div><button class="select-button flex-inline gap-1 items-center !px-2 !py-1">Clear Filters</button></div>',6),ne=s('<div flex="~ col" gap="2" class="relative" p="t-5"></div>',2),F=s('<button class="select-button"></button>',2),ie=s('<button class="select-button capitalize"></button>',2),se=s('<h3 opacity="60" class="!text-16px !tracking-wide !m-0" p="y-2"></h3>',2),le=s('<div text="sm" flex="~ gap1" items-center><a bg="gray-400/5" p="x-1.5 y-0.5" class="rounded items-center" flex="inline gap-1 none" my-auto><span></span></a><span class="op50">-</span><span class="whitespace-wrap"></span></div>',10),ae="/solidjs-use",xe=()=>{const M=["category","name","updated"];R("click",t=>{t.target.tagName==="A"&&window.dispatchEvent(new Event("hashchange"))});const r=V("hash-params",{removeFalsyValues:!0}),L=u(()=>!r.search&&(!r.sortMethod||r.sortMethod==="category")),y=u(()=>{let t=W.filter(e=>!e.internal);return r.component&&(t=t.filter(e=>e.component)),r.directive&&(t=t.filter(e=>e.directive)),r.category?t.filter(e=>e.category===r.category):t}),E=u(()=>new D(y(),{keys:["name","description"]})),v=u(()=>{if(r.search)return E().search(String(r.search)).map(e=>e.item);const t=[...y()];return r.sortMethod==="updated"?t.sort((e,n)=>n.lastUpdated??0-(e.lastUpdated??0)):r.sortMethod==="name"?t.sort((e,n)=>e.name.localeCompare(n.name)):t.sort((e,n)=>w.indexOf(e.category??"")-w.indexOf(n.category??"")),t}),A=u(()=>Boolean(r.search||r.category||r.component||r.sortMethod));function _(){r.sortMethod="",r.category="",r.component="",r.search=""}function f(t){r.category=r.category===t?"":t}function T(t){r.sortMethod=t}function z(t){return t.startsWith("use")?[" ",I.cloneNode(!0),u(()=>t.slice(3))]:t.startsWith("try")?[" ",J.cloneNode(!0),u(()=>t.slice(3))]:t.startsWith("on")?[" ",K.cloneNode(!0),u(()=>t.slice(2))]:t}return[Q.cloneNode(!0),(()=>{const t=Y.cloneNode(!0),e=t.firstChild,n=e.nextSibling,l=n.nextSibling,d=l.nextSibling,$=d.nextSibling,m=$.nextSibling;return i(n,c(h,{each:j,children:a=>(()=>{const o=F.cloneNode(!0);return o.$$click=()=>f(a),i(o,a),p(()=>o.classList.toggle("active",r.category===a)),o})()})),i(d,c(h,{each:q,children:a=>(()=>{const o=F.cloneNode(!0);return o.$$click=()=>f(a),i(o,a),p(()=>o.classList.toggle("active",r.category===a)),o})()})),i(m,c(g,{get when(){return r.search},get children(){return X.cloneNode(!0)}}),null),i(m,c(h,{each:M,children:a=>(()=>{const o=ie.cloneNode(!0);return o.$$click=()=>T(a),i(o,a),p(()=>o.classList.toggle("active",a===(r.sortMethod||"category"))),o})()}),null),t})(),Z.cloneNode(!0),(()=>{const t=ee.cloneNode(!0),e=t.firstChild;return i(t,c(H,{style:{"margin-right":"0.5rem",opacity:"0.5"}}),e),e.$$input=n=>r.search=n.currentTarget.value,p(()=>e.value=r.search||""),t})(),te.cloneNode(!0),(()=>{const t=ne.cloneNode(!0);return i(t,c(g,{get when(){return A()},get children(){const e=re.cloneNode(!0),n=e.firstChild,l=n.firstChild;return n.$$click=_,i(n,c(k,{}),l),e}}),null),i(t,c(h,{get each(){return v()},children:(e,n)=>[" ",c(g,{get when(){return u(()=>!!L())()&&e.category!==v()[n()-1]?.category},get children(){const l=se.cloneNode(!0);return i(l,()=>e.category),l}}),(()=>{const l=le.cloneNode(!0),d=l.firstChild,$=d.firstChild,m=d.nextSibling,a=m.nextSibling;return i($,()=>z(e.name)),i(d,c(g,{get when(){return e.external},get children(){return c(P,{class:"opacity-80 text-xs"})}}),null),p(o=>{const O={"op80 saturate-0":e.deprecated},x=e.external?e.external:`${ae}/${e.package}/${e.name}/`,b=e.external?"_blank":void 0,U={"line-through !decoration-solid":e.deprecated},N=G(e.description);return o._v$=C(l,O,o._v$),x!==o._v$2&&S(d,"href",o._v$2=x),b!==o._v$3&&S(d,"target",o._v$3=b),o._v$4=C(d,U,o._v$4),N!==o._v$5&&(a.innerHTML=o._v$5=N),o},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),l})()]}),null),i(t,c(g,{get when(){return v().length===0},get children(){const e=oe.cloneNode(!0),n=e.firstChild,l=n.nextSibling,d=l.firstChild;return l.$$click=_,i(l,c(k,{}),d),e}}),null),t})()]};B(["input","click"]);export{xe as default};
