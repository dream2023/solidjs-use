import{G as M,n as l,b as p,O as P,L as U}from"./index-26ba2b2a.js";import{c as O}from"./index-855a5cab.js";const R=e=>e,v=(e,s)=>e(s);function x(e){return e?typeof e=="function"?e:O:R}function B(e){return e?typeof e=="function"?e:O:R}function G(e,s={}){const[i,T]=M(e),{clone:S=!1,dump:V=x(S),parse:_=B(S),setSource:b=v}=s;function m(){return{snapshot:V(i()),timestamp:U()}}const[r,d]=l(m()),[o,a]=l([]),[c,u]=l([]),f=t=>{b(T,_(t.snapshot)),d(t)},h=()=>{a(t=>[r(),...t]),d(m()),s.capacity&&o().length>s.capacity&&a(([...t])=>(t.splice(s.capacity,Number.POSITIVE_INFINITY),t)),c().length&&u(([...t])=>(t.splice(0,c().length),t))},g=()=>{a([]),u([])},F=()=>{const t=o()[0];a(([...n])=>(n.shift(),n)),t&&(u(n=>[r(),...n]),f(t))},H=()=>{const t=c()[0];u(([...n])=>(n.shift(),n)),t&&(a(n=>[r(),...n]),f(t))},L=()=>{f(r())},y=p(()=>[r(),...o()]),I=p(()=>o().length>0),N=p(()=>c().length>0);return P(e)?{source:i,undoStack:o,redoStack:c,last:r,history:y,canUndo:I,canRedo:N,clear:g,commit:h,reset:L,undo:F,redo:H}:{source:i,undoStack:o,redoStack:c,last:r,history:y,canUndo:I,canRedo:N,clear:g,commit:h}}export{G as u};
