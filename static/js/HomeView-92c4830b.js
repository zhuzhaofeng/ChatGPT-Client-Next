import{c as a,e as s,f as l,g as e,h as t,u as o,t as n,i,aa as d,k as r,B as c,W as u,P as g,Q as _}from"./.pnpm-7eaa164f.js";import{u as m,_ as p,A as h,a as T}from"./index-73185875.js";const E=a=>(g("data-v-9492c713"),a=a(),_(),a),f={class:"home-logo__wrapper"},v=["alt"],P={class:"title"},A={class:"feature-grid xl:max-w-4xl max-w-11/12"},C={class:"flex items-center gap-x-4"},x=E((()=>t("img",{class:"w-2/3",src:p,alt:"GPT-3.5 Turbo"},null,-1))),k=E((()=>t("h2",{class:"title"},"GPT 3.5",-1))),I=E((()=>t("p",{class:"details"},"人工智能聊天工具，模拟人类思维，适用于多种语境。",-1))),b={class:"flex items-center gap-x-4"},w=E((()=>t("img",{class:"w-2/3",src:p,alt:"GPT-3.5 Turbo"},null,-1))),L=E((()=>t("h2",{class:"title"},"GPT 4",-1))),R=E((()=>t("p",{class:"details"}," 延续 Chat GPT 系列，以更先进的架构提供更多样的自然语言生成服务。 ",-1))),D=T(a({__name:"HomeView",setup(a){const{VITE_FEATURES:g}={VITE_BASE_URL:"/",VITE_PORT:"3000",VITE_DROP_CONSOLE:"true",VITE_FEATURES:"CHAT",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,LEGACY:!1},_=d(),T=m(),E=a=>{var s,l,e,t,o,n,i;const d=T.sessions;"Chat_3.5"===a&&((d.length<1||"gpt-4"===(null==(s=d[0])?void 0:s.model)||(!(null==(l=d[0])?void 0:l.model)||"gpt-3.5-turbo"==(null==(e=d[0])?void 0:e.model))&&(null==(t=d[0])?void 0:t.messages.length)>0)&&T.newChatAction(),_.push({name:"Chat"})),"Chat_4"===a&&((d.length<1||"gpt-3.5-turbo"===(null==(o=d[0])?void 0:o.model)||"gpt-4"==(null==(n=d[0])?void 0:n.model)&&(null==(i=d[0])?void 0:i.messages.length)>0)&&T.newChatAction("gpt-4"),_.push({name:"Chat"})),"Midjourney"===a&&(g.includes("MIDJOURNEY")?_.push({name:"Midjourney"}):r.info("即将上线~")),"Dall_E"===a&&(g.includes("DALL_E")?_.push({name:"DallE"}):r.info("即将上线~"))};return(a,d)=>{const r=c,g=u;return s(),l(g,{"outer-style":"flex: 1; overflow: hidden;",class:"overflow-y-auto h-full p-4 flex flex-col gap-y-2"},{default:e((()=>[t("div",f,[t("img",{class:"logo",src:p,alt:"APP_TITLE"in a?a.APP_TITLE:o(h)},null,8,v),t("h1",P,n("APP_TITLE"in a?a.APP_TITLE:o(h)),1)]),t("div",A,[t("div",{onClick:d[0]||(d[0]=a=>E("Chat_3.5")),class:"feature dark:bg-dark"},[t("div",C,[i(r,{class:"icon bg-gray-200 dark:bg-dark-900"},{default:e((()=>[x])),_:1}),k]),I]),t("div",{onClick:d[1]||(d[1]=a=>E("Chat_4")),class:"feature dark:bg-dark"},[t("div",b,[i(r,{class:"icon bg-gray-200 dark:bg-dark-900"},{default:e((()=>[w])),_:1}),L]),R])])])),_:1})}}}),[["__scopeId","data-v-9492c713"]]);export{D as default};
