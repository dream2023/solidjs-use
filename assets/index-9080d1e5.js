import{u}from"./index-c656bc70.js";import{V as a}from"./index-294efc99.js";const i=()=>{const{activeElement:t,body:e}=document;if(!t||t===e)return!1;switch(t.tagName){case"INPUT":case"TEXTAREA":return!0}return t.hasAttribute("contenteditable")},o=({keyCode:t,metaKey:e,ctrlKey:n,altKey:r})=>e||n||r?!1:t>=48&&t<=57||t>=96&&t<=105||t>=65&&t<=90;function m(t,e={}){const{document:n=a}=e;n&&u(n,"keydown",s=>{!i()&&o(s)&&t(s)},{passive:!0})}export{m as o};
