import{c as a,ag as e,ah as l,ai as s,aj as t,r as o,e as n,o as r,f as u,g as i,h as c,i as d,k as f,j as h,m as g,u as m,P as p,at as k,au as w,N as x}from"./.pnpm-689552e7.js";const v={class:"max-w-4xl w-full mx-auto"},_=["innerHTML"],y=a({__name:"TutorialView",setup(a){const y=new e({linkify:!0,highlight(a,e){if(!(!e||!l.getLanguage(e))){const s=null!=e?e:"";return l.highlight(a,{language:s}).value}return l.highlightAuto(a).value}});y.use(s,{attrs:{target:"_blank",rel:"noopener"}}),y.use(t,{blockClass:"katexmath-block rounded-md p-[10px]",errorColor:" #cc0000"});const b=o(""),C=n((()=>y.render(b.value)));return r((()=>{(async()=>{const a=await fetch("/tutorial.md").then((a=>a.text()));b.value=a})()})),(a,e)=>{const l=u("icon-arrow-left"),s=p,t=k,o=w,n=x;return i(),c(n,{"outer-style":"flex: 1; overflow: hidden;",class:"overflow-y-auto h-full p-4 flex flex-col gap-y-2"},{default:d((()=>[f("div",v,[h(o,{class:"my-6"},{default:d((()=>[h(t,null,{default:d((()=>[h(s,{onClick:a.$router.back},{default:d((()=>[h(l),g(" 返回 ")])),_:1},8,["onClick"])])),_:1}),h(t,null,{default:d((()=>[g("使用说明")])),_:1})])),_:1}),f("div",{class:"markdown-body p-6 rounded shadow",innerHTML:m(C)},null,8,_)])])),_:1})}}});export{y as default};
