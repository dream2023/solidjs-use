import{V as y,n as k,q as s,p as w}from"./index-ade7b45a.js";import{u as c}from"./index-8ca1c4a8.js";let d=!1;function L(n,u,f={}){const{window:t=w,ignore:m=[],capture:p=!0,detectIframe:h=!1}=f;if(!t)return;y&&!d&&(d=!0,Array.from(t.document.body.children).forEach(e=>e.addEventListener("click",k)));let r=!0;const a=e=>m.some(o=>{if(typeof o=="string")return Array.from(t.document.querySelectorAll(o)).some(l=>l===e.target||e.composedPath().includes(l));const i=s(o);return i&&(e.target===i||e.composedPath().includes(i))}),E=[c(t,"click",e=>{const o=s(n);if(!(!o||o===e.target||e.composedPath().includes(o))){if(e.detail===0&&(r=!a(e)),!r){r=!0;return}u(e)}},{passive:!0,capture:p}),c(t,"pointerdown",e=>{const o=s(n);o&&(r=!e.composedPath().includes(o)&&!a(e))},{passive:!0}),h&&c(t,"blur",e=>{const o=s(n);t.document.activeElement?.tagName==="IFRAME"&&!o?.contains(t.document.activeElement)&&u(e)})].filter(Boolean);return()=>E.forEach(e=>e())}export{L as o};
