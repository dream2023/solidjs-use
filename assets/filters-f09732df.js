import{r as P,u as d,z as p,o as w,A}from"./index-6d417bac.js";function v(s,i){function r(...e){return new Promise((n,t)=>{Promise.resolve(s(()=>i.apply(this,e),{fn:i,thisArg:this,args:e})).then(n).catch(t)})}return r}const b=s=>s();function O(s,i={}){let r,e,n=w;const t=o=>{clearTimeout(o),n(),n=w},a=A();return o=>{const l=d(s),u=d(i.maxWait);return r&&t(r),l<=0||u!==void 0&&u<=0?(e&&(t(e),e=null),new Promise(c=>{p(a,()=>{c(o())})})):new Promise((c,h)=>{n=i.rejectOnCancel?h:c,u&&!e&&(e=setTimeout(()=>{r&&t(r),e=null,c(o())},u)),r=setTimeout(()=>{e&&t(e),e=null,c(o())},l)})}}function W(s,i=!0,r=!0,e=!1){let n=0,t,a=!0,f=w,o;const l=A(),u=()=>{t&&(clearTimeout(t),t=void 0,f(),f=w)};return h=>{const m=d(s),F=Date.now()-n,T=()=>o=h();if(u(),m<=0){n=Date.now(),p(l,()=>{T()});return}return F>m&&(r||!a)?(n=Date.now(),p(l,()=>{T()})):i&&(o=new Promise((x,D)=>{f=e?D:x,t=setTimeout(()=>{n=Date.now(),a=!0,p(l,()=>{x(T())}),u()},Math.max(0,m-F))})),!r&&!t&&(t=setTimeout(()=>a=!0,m)),a=!1,o}}function g(s=b){const[i,r]=P(!0);function e(){r(!1)}function n(){r(!0)}return{isActive:i,pause:e,resume:n,eventFilter:(...a)=>{i()&&s(...a)}}}export{b,v as c,O as d,g as p,W as t};
