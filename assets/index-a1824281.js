import{O as x,z as l,b as S,P as z,L as B,$ as H}from"./index-294efc99.js";import{c as L}from"./index-c605fb7a.js";const M=e=>e,D=(e,r)=>e(r);function I(e){return e?H(e)?e:L:M}function J(e){return e?H(e)?e:L:M}function $(e,r={}){const[i,O]=x(e),{clone:m=!1,dump:P=I(m),parse:U=J(m),setSource:V=D}=r;function p(){return{snapshot:P(i()),timestamp:B()}}const[s,d]=l(p()),[c,o]=l([]),[a,u]=l([]),f=t=>{V(O,U(t.snapshot)),d(t)},h=()=>{o(t=>[s(),...t]),d(p()),r.capacity&&c().length>r.capacity&&o(([...t])=>(t.splice(r.capacity,1/0),t)),a().length&&u(([...t])=>(t.splice(0,a().length),t))},g=()=>{o([]),u([])},_=()=>{const t=c()[0];o(([...n])=>(n.shift(),n)),t&&(u(n=>[s(),...n]),f(t))},b=()=>{const t=a()[0];u(([...n])=>(n.shift(),n)),t&&(o(n=>[s(),...n]),f(t))},v=()=>{f(s())},y=S(()=>[s(),...c()]),R=S(()=>c().length>0),F=S(()=>a().length>0);return z(e)?{source:i,undoStack:c,redoStack:a,last:s,history:y,canUndo:R,canRedo:F,clear:g,commit:h,reset:v,undo:_,redo:b}:{source:i,undoStack:c,redoStack:a,last:s,history:y,canUndo:R,canRedo:F,clear:g,commit:h}}export{$ as u};
