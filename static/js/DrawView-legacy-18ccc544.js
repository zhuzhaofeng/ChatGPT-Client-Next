System.register(["./.pnpm-legacy-064981d5.js","./index-legacy-9a99036d.js"],(function(a,t){"use strict";var e,o,l,r,d,n,s,i,u,c,p,m,w,x,f,b,g,v,h,_,y,k,V,z,A,C,S,j,D,U,E,I,T,B,F,H=document.createElement("style");return H.textContent=".draw-view[data-v-a9341cd1]{--tw-bg-opacity: 1 !important;background-color:rgba(255,255,255,var(--tw-bg-opacity))!important;border-radius:.5rem!important;margin-left:auto!important;margin-right:auto!important;max-width:56rem!important;padding:2.5rem!important;--tw-shadow: 0 10px 15px -3px rgb(0 0 0/.1),0 4px 6px -4px rgb(0 0 0/.1) !important;--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color) !important;-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)!important;width:100%!important}.dark .draw-view[data-v-a9341cd1]{--tw-bg-opacity: 1 !important;background-color:rgba(35,35,36,var(--tw-bg-opacity))!important}\n",document.head.appendChild(H),{setters:[a=>{e=a.d,o=a.r,l=a.o,r=a.c,d=a.aw,n=a.e,s=a.f,i=a.g,u=a.h,c=a.i,p=a.k,m=a.j,w=a.m,x=a.l,f=a.y,b=a.u,g=a.F,v=a.ax,h=a.ay,_=a.az,y=a.B,k=a.aA,V=a._,z=a.$,A=a.X,C=a.a0,S=a.N,j=a.t,D=a.a7,U=a.a8,E=a.ao},a=>{I=a.b,T=a.r,B=a.D,F=a._}],execute:function(){const t=e("__AI_1024_STORE_CHAT",(()=>{const a=I(),t=o();return l((()=>{})),{draws:t,imageDrawAction:t=>{T({...t,card:a.card})}}}),{persist:{storage:localStorage}}),H={class:"draw-view"},N={class:"flex items-center gap-x-5"},O={class:"text-xs px-2 py-1"},R=(a=>(D("data-v-a9341cd1"),a=a(),U(),a))((()=>p("div",{class:"h-96"},null,-1)));a("default",F(r({__name:"DrawView",setup(a){const e=d({prompt:"一只白色的暹罗猫的摄影棚风的的近距离照，它看起来很好奇并且有光从它的耳朵处透过",size:"256x256",n:1,response_format:"url"}),l=o(0),r=n((()=>v(B,2)[l.value])),D=()=>{const a=v(B,2).length-1,t=l.value+1>a?0:l.value+1;l.value=t};t();const U=()=>{};return(a,t)=>{const o=s("icon-exclamation-circle-fill"),l=h,d=_,n=s("icon-loop"),v=y,I=E,T=s("icon-robot"),B=k,F=V,X=z,$=A,q=C,G=S;return i(),u(G,{"outer-style":"flex: 1; overflow: hidden;",class:"overflow-y-auto h-full p-4 flex flex-col gap-y-2"},{default:c((()=>[p("div",H,[m(l,{type:"info",class:"max-w-max mx-auto rounded-full text-xs"},{icon:c((()=>[m(o)])),default:c((()=>[w(" 根据输入关键词生成~大约需要30s左右时间 ")])),_:1}),p("div",N,[m(d,{class:"h-12 flex items-center",bold:""},{default:c((()=>[w(" 关键词示例 ")])),_:1}),m(v,{type:"text",size:"mini",onClick:D},{default:c((()=>[m(n)])),_:1})]),(i(!0),x(g,null,f(b(r),(a=>(i(),x("div",{key:a.tag,class:"flex items-center gap-x-1 mb-2"},[p("mark",O,j(a.tag),1),m(I,{type:"secondary",copyable:"",class:"mb-0"},{default:c((()=>[w(j(a.keywords),1)])),_:2},1024)])))),128)),m(B,{class:"w-full mb-6 mt-4",size:"large",autofocus:"",modelValue:b(e).prompt,"onUpdate:modelValue":t[0]||(t[0]=a=>b(e).prompt=a),placeholder:"请用中文输入关键词如上，参考形式: 画面主体，细节描述，修饰词","search-button":"",onSearch:U},{"button-icon":c((()=>[m(T)])),"button-default":c((()=>[w("生成")])),_:1},8,["modelValue"]),m(q,{model:b(e),"auto-label-width":"","label-align":"left",class:"mt-4 p-4 bg-light-300 dark:bg-dark-900 rounded"},{default:c((()=>[m(d,{class:"block",bold:""},{default:c((()=>[w(" 参数设置 ")])),_:1}),m($,{label:"图片尺寸",class:"mb-2"},{default:c((()=>[m(X,{modelValue:b(e).size,"onUpdate:modelValue":t[1]||(t[1]=a=>b(e).size=a),type:"button"},{default:c((()=>[m(F,{value:"256x256"},{default:c((()=>[w("256x256(小图)")])),_:1}),m(F,{value:"512x512"},{default:c((()=>[w("512x512(中图)")])),_:1}),m(F,{value:"1024x1024"},{default:c((()=>[w("1024x1024(大图)")])),_:1})])),_:1},8,["modelValue"])])),_:1}),m($,{label:"图片数量",class:"mb-2"},{default:c((()=>[m(X,{modelValue:b(e).n,"onUpdate:modelValue":t[2]||(t[2]=a=>b(e).n=a),type:"button"},{default:c((()=>[(i(),x(g,null,f(10,(a=>m(F,{key:a,value:a},{default:c((()=>[w(j(a)+"张 ",1)])),_:2},1032,["value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"]),R])])),_:1})}}}),[["__scopeId","data-v-a9341cd1"]]))}}}));
