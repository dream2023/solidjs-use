import{c as f}from"./index-9cc34db9.js";import{n as g,Z as l,B as S,C as y}from"./index-6297abcc.js";import{u as d}from"./index-f401ce78.js";import{u as h}from"./index-d5922f8f.js";function O(e,u={}){const{controls:c=!1,navigator:r=l}=u,n=h(()=>r&&"permissions"in r);let t;const m=typeof e=="string"?{name:e}:e,[s,o]=g(),a=()=>{t&&o(t.state)},p=y(),i=f(async()=>{if(n()){if(!t)try{t=await r.permissions.query(m),S(p,()=>{d(t,"change",a)}),a()}catch{o("prompt")}return t}});return i(),c?{state:s,isSupported:n,query:i}:s}export{O as u};
