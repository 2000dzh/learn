import{h as n,o as t,c as a,b as e,F as u,n as h,y as v,t as m,u as _,R as f,f as b,G as c,e as d,d as r}from"../app.6250c322.js";const k={class:"demo-typo-size"},x=e("tr",null,[e("td",null,"Level"),e("td",null,"Font Size"),e("td",{class:"color-dark-light"},"Demo")],-1),$=e("td",null,"Build with Element",-1),S=n({__name:"convention",setup(p){const s=[{level:"Supplementary text",type:"extra-small"},{level:"Body (small)",type:"small"},{level:"Body",type:"base"},{level:"Small Title",type:"medium"},{level:"Title",type:"large"},{level:"Main Title",type:"extra-large"}];function o(g){return g.split("-").map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(" ")}return(g,i)=>(t(),a("table",k,[e("tbody",null,[x,(t(),a(u,null,h(s,(l,y)=>e("tr",{key:y,style:v(`font-size: var(--el-font-size-${l.type})`)},[e("td",null,m(l.level),1),e("td",null,m(_(f)(`--el-font-size-${l.type}`).value+" "+o(l.type)),1),$],4)),64))])]))}});var W=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),T="/images/typography/term-pingfang.png",j="/images/typography/term-hiragino.png",z="/images/typography/term-microsoft.png",B="/images/typography/term-helvetica.png",O="/images/typography/term-arial.png",C="/images/typography/term-pingfang-dark.png",M="/images/typography/term-hiragino-dark.png",N="/images/typography/term-microsoft-dark.png",V="/images/typography/term-helvetica-dark.png",D="/images/typography/term-arial-dark.png";const F={key:0,class:"demo-term-box"},H=d('<img src="'+T+'" alt="" data-v-e1341f10><img src="'+j+'" alt="" data-v-e1341f10><img src="'+z+'" alt="" data-v-e1341f10><img src="'+B+'" alt="" data-v-e1341f10><img src="'+O+'" alt="" data-v-e1341f10>',5),L=[H],P={key:1,class:"demo-term-box"},E=d('<img src="'+C+'" alt="" data-v-e1341f10><img src="'+M+'" alt="" data-v-e1341f10><img src="'+N+'" alt="" data-v-e1341f10><img src="'+V+'" alt="" data-v-e1341f10><img src="'+D+'" alt="" data-v-e1341f10>',5),R=[E],w=n({__name:"font",setup(p){return(s,o)=>_(c)?(t(),a("div",P,R)):(t(),a("div",F,L))}});var A=b(w,[["__scopeId","data-v-e1341f10"]]),X=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"})),G="/images/typography/line-height-dark.png",I="/images/typography/line-height.png";const U={key:0,class:"lineH-left",src:G},q={key:1,class:"lineH-left",src:I},J=e("ul",{class:"lineH-right"},[e("li",null,[r("line-height:1 "),e("span",null,"No line height")]),e("li",null,[r("line-height:1.3 "),e("span",null,"Compact")]),e("li",null,[r("line-height:1.5 "),e("span",null,"Regular")]),e("li",null,[r("line-height:1.7 "),e("span",null,"Loose")])],-1),K=n({__name:"line-height",setup(p){return(s,o)=>(t(),a("div",null,[_(c)?(t(),a("img",U)):(t(),a("img",q)),J]))}});var Y=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));export{W as _,X as a,Y as b};
