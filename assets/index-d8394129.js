import{a8 as b,z as e,w as q,q as z}from"./index-294efc99.js";import{u as A}from"./index-19b02b1c.js";import{u as B}from"./index-c656bc70.js";function T(p,u={}){const{handleOutside:E=!0,window:t=z}=u,{x:s,y:n,sourceType:w}=A(u),m=b(p??t?.document.body),[X,Y]=e(0),[O,P]=e(0),[r,y]=e(0),[a,W]=e(0),[v,x]=e(0),[H,I]=e(0),[d,f]=e(!0);let g=()=>{};return t&&(g=q([m,s,n],()=>{const h=m();if(!h)return;const{left:M,top:R,width:o,height:i}=h.getBoundingClientRect();y(M+t.pageXOffset),W(R+t.pageYOffset),x(i),I(o);const c=s()-r(),l=n()-a();f(o===0||i===0||c<=0||l<=0||c>o||l>i),(E||!d())&&(Y(c),P(l))}),B(document,"mouseleave",()=>{f(!0)})),{x:s,y:n,sourceType:w,elementX:X,elementY:O,elementPositionX:r,elementPositionY:a,elementHeight:v,elementWidth:H,isOutside:d,stop:g}}export{T as u};
