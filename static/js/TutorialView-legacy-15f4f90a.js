System.register(["./.pnpm-legacy-73a9bb17.js"],(function(e,t){"use strict";var l,a,n,r,u,o,s,c,i,d,f,g,h,m,k,w,x,p,v,y;return{setters:[e=>{l=e.c,a=e.ag,n=e.ah,r=e.ai,u=e.aj,o=e.r,s=e.m,c=e.o,i=e.n,d=e.e,f=e.f,g=e.g,h=e.h,m=e.i,k=e.j,w=e.u,x=e.N,p=e.ak,v=e.al,y=e.L}],execute:function(){const t={class:"max-w-4xl w-full mx-auto"},_=["innerHTML"];e("default",l({__name:"TutorialView",setup(e){const l=new a({linkify:!0,highlight(e,t){if(t&&n.getLanguage(t)){const l=t??"";return n.highlight(e,{language:l}).value}return n.highlightAuto(e).value}});l.use(r,{attrs:{target:"_blank",rel:"noopener"}}),l.use(u,{blockClass:"katexmath-block rounded-md p-[10px]",errorColor:" #cc0000"});const b=o(""),C=s((()=>l.render(b.value)));return c((()=>{(async()=>{const e=await fetch("/tutorial.md").then((e=>e.text()));b.value=e})()})),(e,l)=>{const a=i("icon-arrow-left"),n=x,r=p,u=v,o=y;return d(),f(o,{"outer-style":"flex: 1; overflow: hidden;",class:"overflow-y-auto h-full p-4 flex flex-col gap-y-2"},{default:g((()=>[h("div",t,[m(u,{class:"my-6"},{default:g((()=>[m(r,null,{default:g((()=>[m(n,{onClick:e.$router.back},{default:g((()=>[m(a),k(" 返回 ")])),_:1},8,["onClick"])])),_:1}),m(r,null,{default:g((()=>[k("使用说明")])),_:1})])),_:1}),h("div",{class:"markdown-body p-6 rounded shadow",innerHTML:w(C)},null,8,_)])])),_:1})}}}))}}}));