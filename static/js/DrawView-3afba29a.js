import{d as a,r as e,o as l,c as s,ax as t,e as o,f as d,g as u,h as c,i as n,k as r,j as m,m as i,l as f,y as p,u as x,F as _,ay as b,az as v,aA as y,B as g,aB as w,$ as h,a0 as V,Y as k,a1 as z,P as A,t as j,a8 as D,a9 as S,ap as U}from"./.pnpm-d6690a6d.js";import{b as B,r as C,D as I,_ as T}from"./index-5ac3f262.js";const E=a("__AI_1024_STORE_CHAT",(()=>{const a=B(),s=e();l((()=>{}));return{draws:s,imageDrawAction:e=>{C({...e,card:a.card})}}}),{persist:{storage:localStorage}}),F={class:"draw-view"},H={class:"flex items-center gap-x-5"},O={class:"text-xs px-2 py-1"},P=(a=>(D("data-v-a9341cd1"),a=a(),S(),a))((()=>r("div",{class:"h-96"},null,-1))),R=T(s({__name:"DrawView",setup(a){const l=t({prompt:"一只白色的暹罗猫的摄影棚风的的近距离照，它看起来很好奇并且有光从它的耳朵处透过",size:"256x256",n:1,response_format:"url"}),s=e(0),D=o((()=>b(I,2)[s.value])),S=()=>{const a=b(I,2).length-1,e=s.value+1>a?0:s.value+1;s.value=e};E();const B=()=>{};return(a,e)=>{const s=d("icon-exclamation-circle-fill"),t=v,o=y,b=d("icon-loop"),C=g,I=U,T=d("icon-robot"),E=w,R=h,Y=V,$=k,q=z,G=A;return u(),c(G,{"outer-style":"flex: 1; overflow: hidden;",class:"overflow-y-auto h-full p-4 flex flex-col gap-y-2"},{default:n((()=>[r("div",F,[m(t,{type:"info",class:"max-w-max mx-auto rounded-full text-xs"},{icon:n((()=>[m(s)])),default:n((()=>[i(" 根据输入关键词生成~大约需要30s左右时间 ")])),_:1}),r("div",H,[m(o,{class:"h-12 flex items-center",bold:""},{default:n((()=>[i(" 关键词示例 ")])),_:1}),m(C,{type:"text",size:"mini",onClick:S},{default:n((()=>[m(b)])),_:1})]),(u(!0),f(_,null,p(x(D),(a=>(u(),f("div",{key:a.tag,class:"flex items-center gap-x-1 mb-2"},[r("mark",O,j(a.tag),1),m(I,{type:"secondary",copyable:"",class:"mb-0"},{default:n((()=>[i(j(a.keywords),1)])),_:2},1024)])))),128)),m(E,{class:"w-full mb-6 mt-4",size:"large",autofocus:"",modelValue:x(l).prompt,"onUpdate:modelValue":e[0]||(e[0]=a=>x(l).prompt=a),placeholder:"请用中文输入关键词如上，参考形式: 画面主体，细节描述，修饰词","search-button":"",onSearch:B},{"button-icon":n((()=>[m(T)])),"button-default":n((()=>[i("生成")])),_:1},8,["modelValue"]),m(q,{model:x(l),"auto-label-width":"","label-align":"left",class:"mt-4 p-4 bg-light-300 dark:bg-dark-900 rounded"},{default:n((()=>[m(o,{class:"block",bold:""},{default:n((()=>[i(" 参数设置 ")])),_:1}),m($,{label:"图片尺寸",class:"mb-2"},{default:n((()=>[m(Y,{modelValue:x(l).size,"onUpdate:modelValue":e[1]||(e[1]=a=>x(l).size=a),type:"button"},{default:n((()=>[m(R,{value:"256x256"},{default:n((()=>[i("256x256(小图)")])),_:1}),m(R,{value:"512x512"},{default:n((()=>[i("512x512(中图)")])),_:1}),m(R,{value:"1024x1024"},{default:n((()=>[i("1024x1024(大图)")])),_:1})])),_:1},8,["modelValue"])])),_:1}),m($,{label:"图片数量",class:"mb-2"},{default:n((()=>[m(Y,{modelValue:x(l).n,"onUpdate:modelValue":e[2]||(e[2]=a=>x(l).n=a),type:"button"},{default:n((()=>[(u(),f(_,null,p(10,(a=>m(R,{key:a,value:a},{default:n((()=>[i(j(a)+"张 ",1)])),_:2},1032,["value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"]),P])])),_:1})}}}),[["__scopeId","data-v-a9341cd1"]]);export{R as default};