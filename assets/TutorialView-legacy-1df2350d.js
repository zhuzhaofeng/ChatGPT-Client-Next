System.register(["./index-legacy-7474d731.js","./index-legacy-b1ac5c8a.js","./index-legacy-2c8b5ef7.js","./dropdown-button-legacy-6d18f1f2.js"],(function(e,t){"use strict";var l,a,n,r,o,u,s,c,i,d,f,g,h,x,w,y,m,k,v,p;return{setters:[e=>{l=e.g,a=e.r,n=e.j,r=e.s,o=e.D,u=e.o,s=e.c,c=e.w,i=e.a,d=e.b,f=e.d,g=e.a8,h=e.at,x=e.S},e=>{w=e.B,y=e.a},e=>{m=e.M,k=e.H,v=e.m,p=e.a},null],execute:function(){const t={class:"max-w-4xl w-full mx-auto"},_=["innerHTML"];e("default",l({__name:"TutorialView",setup(e){const l=new m({linkify:!0,highlight(e,t){if(t&&k.getLanguage(t)){const l=t??"";return k.highlight(e,{language:l}).value}return k.highlightAuto(e).value}});l.use(v,{attrs:{target:"_blank",rel:"noopener"}}),l.use(p,{blockClass:"katexmath-block rounded-md p-[10px]",errorColor:" #cc0000"});const b=a(""),j=n((()=>l.render(b.value)));return r((()=>{(async()=>{const e=await fetch("/tutorial.md").then((e=>e.text()));b.value=e})()})),(e,l)=>{const a=o("icon-arrow-left"),n=h,r=w,m=y,k=x;return u(),s(k,{"outer-style":"flex: 1; overflow: hidden;",class:"overflow-y-auto h-full p-4 flex flex-col gap-y-2"},{default:c((()=>[i("div",t,[d(m,{class:"my-6"},{default:c((()=>[d(r,null,{default:c((()=>[d(n,{onClick:e.$router.back},{default:c((()=>[d(a),f(" 返回 ")])),_:1},8,["onClick"])])),_:1}),d(r,null,{default:c((()=>[f("使用说明")])),_:1})])),_:1}),i("div",{class:"markdown-body p-6 rounded shadow",innerHTML:g(j)},null,8,_)])])),_:1})}}}))}}}));
