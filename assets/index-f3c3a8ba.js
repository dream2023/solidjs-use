import{b as v,u as c,w as l,p as m,q as w}from"./index-7d65a80d.js";import{u as O}from"./index-7516a8db.js";function A(s,i,p={}){const{window:o=w,...u}=p;let e;const r=O(()=>o&&"ResizeObserver"in o),t=()=>{e&&(e.disconnect(),e=void 0)},f=v(()=>Array.isArray(s)?s.map(c):[c(s)]),d=l(f,b=>{if(t(),r()&&o){e=new ResizeObserver(i);for(const a of b)a&&e.observe(a,u)}},{defer:!1}),n=()=>{t(),d()};return m(n),{isSupported:r,stop:n}}export{A as u};
