import{h as l,r as u,o as i,c as m,a as _,w as e,F as f,d as s,S as t,X as d,g as h}from"../app.6250c322.js";const C=s("Show message"),y=s("VNode"),S=l({__name:"basic",setup(p){const o=()=>{t("this is a message.")},r=()=>{t({message:d("p",null,[d("span",null,"Message can be "),d("i",{style:"color: teal"},"VNode")])})};return(c,n)=>{const g=u("el-button");return i(),m(f,null,[_(g,{plain:!0,onClick:o},{default:e(()=>[C]),_:1}),_(g,{plain:!0,onClick:r},{default:e(()=>[y]),_:1})],64)}}});var F=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));const k=s("Centered text"),w=l({__name:"centered-content",setup(p){const o=()=>{t({showClose:!0,message:"Centered text",center:!0})};return(r,c)=>{const n=u("el-button");return i(),h(n,{plain:"",onClick:o},{default:e(()=>[k]),_:1})}}});var U=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"}));const O=s("message"),$=s("success"),v=s("warning"),T=s("error"),j=l({__name:"closable",setup(p){const o=()=>{t({showClose:!0,message:"This is a message."})},r=()=>{t({showClose:!0,message:"Congrats, this is a success message.",type:"success"})},c=()=>{t({showClose:!0,message:"Warning, this is a warning message.",type:"warning"})},n=()=>{t({showClose:!0,message:"Oops, this is a error message.",type:"error"})};return(g,b)=>{const a=u("el-button");return i(),m(f,null,[_(a,{plain:!0,onClick:o},{default:e(()=>[O]),_:1}),_(a,{plain:!0,onClick:r},{default:e(()=>[$]),_:1}),_(a,{plain:!0,onClick:c},{default:e(()=>[v]),_:1}),_(a,{plain:!0,onClick:n},{default:e(()=>[T]),_:1})],64)}}});var W=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));const M=s("success"),x=s("warning"),z=s("message"),P=s("error"),V=l({__name:"different-types",setup(p){const o=()=>{t("this is a message.")},r=()=>{t({message:"Congrats, this is a success message.",type:"success"})},c=()=>{t({message:"Warning, this is a warning message.",type:"warning"})},n=()=>{t.error("Oops, this is a error message.")};return(g,b)=>{const a=u("el-button");return i(),m(f,null,[_(a,{plain:!0,onClick:r},{default:e(()=>[M]),_:1}),_(a,{plain:!0,onClick:c},{default:e(()=>[x]),_:1}),_(a,{plain:!0,onClick:o},{default:e(()=>[z]),_:1}),_(a,{plain:!0,onClick:n},{default:e(()=>[P]),_:1})],64)}}});var X=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));const H=s("Show message"),L=l({__name:"grouping",setup(p){const o=()=>{t({message:"this is a message.",grouping:!0,type:"success"})};return(r,c)=>{const n=u("el-button");return i(),h(n,{plain:!0,onClick:o},{default:e(()=>[H]),_:1})}}});var q=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));const N=s("Use HTML String"),B=l({__name:"raw-html",setup(p){const o=()=>{t({dangerouslyUseHTMLString:!0,message:"<strong>This is <i>HTML</i> string</strong>"})};return(r,c)=>{const n=u("el-button");return i(),h(n,{plain:!0,onClick:o},{default:e(()=>[N]),_:1})}}});var A=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));export{F as _,U as a,W as b,X as c,q as d,A as e};
