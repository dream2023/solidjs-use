import{t as p}from"./index-e55613d4.js";import{r as v,b as g,q as s,A as c,B as l,p as w}from"./index-ade7b45a.js";import{u as A}from"./index-40115a07.js";function M(a,f,m={}){const{window:t=w,initialValue:o="",observe:d=!1}=m,n=v(o),[b,y]=n,e=g(()=>s(f)??t?.document?.documentElement);function i(){const r=s(a),u=s(e);if(u&&t){const V=t.getComputedStyle(u).getPropertyValue(r)?.trim();y(()=>V||o)}}return d&&A(e,i,{attributes:!0,window:t}),c(l([e,p(a)],i)),c(l(b,r=>{e()?.style&&e()?.style.setProperty(s(a),r)},{defer:!0})),n}export{M as u};
