import{z as p,L as m,a1 as F,J as b}from"./index-294efc99.js";function g(c={}){const{controls:u=!1,offset:t=0,immediate:s=!0,interval:e="requestAnimationFrame",callback:a}=c,n=p(m()+t),[o,l]=n,r=()=>l(m()+t),i=a?()=>{r(),a(o())}:r,f=e==="requestAnimationFrame"?F(i,{immediate:s}):b(i,e,{immediate:s});return u?{timestamp:o,...f}:n}export{g as u};
