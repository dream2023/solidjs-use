import{N as B,n as l,b as p,O as D,K as F}from"./index-6297abcc.js";import{c as M}from"./index-49282938.js";const N=n=>n,I=(n,s)=>n(s);function J(n){return n?typeof n=="function"?n:M:N}function K(n){return n?typeof n=="function"?n:M:N}function T(n,s={}){const[i,O]=B(n),{clone:S=!1,dump:U=J(S),parse:V=K(S),setSource:_=I}=s;function m(){return{snapshot:U(i()),timestamp:F()}}const[r,d]=l(m()),[o,a]=l([]),[c,u]=l([]),f=t=>{_(O,V(t.snapshot)),d(t)},h=()=>{a(t=>[r(),...t]),d(m()),s.capacity&&o().length>s.capacity&&a(([...t])=>(t.splice(s.capacity,1/0),t)),c().length&&u(([...t])=>(t.splice(0,c().length),t))},y=()=>{a([]),u([])},b=()=>{const t=o()[0];a(([...e])=>(e.shift(),e)),t&&(u(e=>[r(),...e]),f(t))},v=()=>{const t=c()[0];u(([...e])=>(e.shift(),e)),t&&(a(e=>[r(),...e]),f(t))},x=()=>{f(r())},g=p(()=>[r(),...o()]),R=p(()=>o().length>0),H=p(()=>c().length>0);return D(n)?{source:i,undoStack:o,redoStack:c,last:r,history:g,canUndo:R,canRedo:H,clear:y,commit:h,reset:x,undo:b,redo:v}:{source:i,undoStack:o,redoStack:c,last:r,history:g,canUndo:R,canRedo:H,clear:y,commit:h}}export{T as u};
