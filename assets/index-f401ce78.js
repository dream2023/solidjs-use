import{v as h,w as v,r as d,x as m,u as l}from"./index-6297abcc.js";function w(...n){let s,r,e,u;if(typeof n[0]=="string"||Array.isArray(n[0])?([r,e,u]=n,s=m):[s,r,e,u]=n,!s)return h;Array.isArray(r)||(r=[r]),Array.isArray(e)||(e=[e]);const p=[],c=()=>{p.forEach(t=>t()),p.length=0},y=(t,a,o,i)=>(t.addEventListener(a,o,i),()=>t.removeEventListener(a,o,i)),A=v(()=>[l(s),l(u)],([t,a])=>{c(),t&&p.push(...r.flatMap(o=>e.map(i=>y(t,o,i,a))))}),f=()=>{A(),c()};return d(f),f}export{w as u};
