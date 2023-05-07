import{c as a,r as e,aA as l,m as o,aB as s,n as t,e as i,f as n,g as d,i as r,h as c,j as u,u as m,k as p,x as f,J as x,l as v,aD as g,at as y,B as w,D as h,K as _,aG as b,V as j,S as V,M as k}from"./.pnpm-75a79e04.js";import{e as C,d as M,g as P,O as G,a as I}from"./index-b69b7822.js";import{u as R}from"./draw-630e9235.js";const A={class:"flex flex-col relative items-start gap-y-2 mt-10"},T={class:"flex flex-col relative items-start gap-y-2 mt-4"},z={class:"flex flex-col items-start gap-y-3"},B={class:"flex flex-col gap-1"},D=I(a({__name:"MidjourneyView",setup(a){const{isMobileScreen:I}=C(),D=e(!1),O=e(""),S=l({action:"generate",prompt:"",image_id:void 0}),U=M(),J=R(),K=o((()=>J.loading));s((async()=>!K.value||await new Promise(((a,e)=>{k.warning({title:"提示",okText:"离开",hideCancel:!1,content:"AI已经开始处理您的请求，此时刷新或离开页面，也会造成您的积分扣除，确定刷新或离开吗？",onOk(){a(!0)},onCancel(){e(!1)}})}))));const q=()=>{S.prompt.trim().length<1?v.error("Prompt不能为空"):J.mjGenAction(S)},E=o((()=>J.mjImage));e(!1);const F=()=>{var a;O.value.trim().length<1?v.error("描述不能为空"):(D.value=!0,P(G(O.value,(null==(a=U.cardInfo)?void 0:a.enable)?U.card:void 0)).then((a=>{200===a.status&&(S.prompt=(null==a?void 0:a.data)||"")})).catch((a=>{v.error("优化失败, 请重试~")})).finally((()=>{D.value=!1})))};return(a,e)=>{const l=t("icon-exclamation-circle-fill"),o=g,s=y,v=t("icon-robot"),k=w,C=h,M=_,P=b,G=j,R=V;return i(),n(R,{class:"h-full overflow-hidden",loading:m(D)||m(K),tip:m(D)?"GPT 优化中, 请稍候...":"Midjourney绘图中,时间可能稍长, 请耐心等待..."},{default:d((()=>[r(G,{"outer-style":"height: 100%; overflow: hidden;",class:"overflow-y-auto h-full p-4 flex flex-col gap-y-2"},{default:d((()=>{var a;return[c("div",{class:x(["draw-view",{"is-mobile":m(I)}])},[r(o,{type:"info",class:"max-w-max mx-auto rounded-full text-xs"},{icon:d((()=>[r(l)])),default:d((()=>[u(" 根据输入关键词生成~大约需要10秒 - 10分钟左右时间, 每次生成消耗 35 积分 ")])),_:1}),c("div",A,[r(s,{loading:m(K),autofocus:"",modelValue:m(O),"onUpdate:modelValue":e[0]||(e[0]=a=>p(O)?O.value=a:null),placeholder:"请输入描述, 支持中文,通过ChatGPT3.5优化",class:"w-full","auto-size":{minRows:2,maxRows:5}},null,8,["loading","modelValue"]),r(k,{type:"outline",disabled:!m(O).trim(),onClick:F},{icon:d((()=>[r(v)])),default:d((()=>[u(" 立即优化 ")])),_:1},8,["disabled"])]),c("div",T,[r(s,{loading:m(K),autofocus:"",modelValue:m(S).prompt,"onUpdate:modelValue":e[1]||(e[1]=a=>m(S).prompt=a),placeholder:"输入 Midjourney 的 Prompt 仅支持英文",class:"w-full","auto-size":{minRows:2,maxRows:5}},null,8,["loading","modelValue"]),r(k,{disabled:!m(S).prompt.trim(),type:"primary",onClick:q},{icon:d((()=>[r(v)])),default:d((()=>[u(" 即刻生成 ")])),_:1},8,["disabled"])]),c("div",z,[r(C,{orientation:"center"},{default:d((()=>[u(" 结果区域 ")])),_:1}),r(o,{type:"warning"},{default:d((()=>[c("div",B,[r(M,{class:"text-xs font-semibold",type:"secondary"},{default:d((()=>[u(" 仅保存最近一次生成记录, 关闭浏览器不保存, 请及时下载 ")])),_:1}),r(M,{class:"text-xs",type:"secondary"},{default:d((()=>[u(" 在电脑浏览器中，可以通过右键点击图片并选择“另存为”选项将图片保存到本地。 ")])),_:1}),r(M,{class:"text-xs",type:"secondary"},{default:d((()=>[u(" 在手机浏览器中，可以通过长按图片并选择“保存图片”选项将图片保存到本地。 ")])),_:1})])])),_:1}),(null==(a=m(E))?void 0:a.image_id)?(i(),n(P,{key:0,class:"block mx-auto min-h-40",width:"300","show-loader":"",src:m(E).image_url},null,8,["src"])):f("",!0)])],2)]})),_:1})])),_:1},8,["loading","tip"])}}}),[["__scopeId","data-v-daabedee"]]);export{D as default};
