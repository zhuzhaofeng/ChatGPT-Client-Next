System.register(["./.pnpm-legacy-6afcc80e.js","./index-legacy-fff5d143.js"],(function(t,a){"use strict";var i,e,r,o,n,m,p,d,l,c,s,g,u,h,f,w,b,x,_=document.createElement("style");return _.textContent=".home-logo__wrapper[data-v-9492c713]{display:none!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;-webkit-flex-direction:column!important;flex-direction:column!important;-webkit-box-align:center!important;-ms-flex-align:center!important;-webkit-align-items:center!important;align-items:center!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;-webkit-justify-content:center!important;justify-content:center!important;padding-top:.5rem!important;--tw-text-opacity: 1 !important;color:rgba(16,163,127,var(--tw-text-opacity))!important}@media (min-width: 1024px){.home-logo__wrapper[data-v-9492c713]{display:-webkit-box!important;display:-ms-flexbox!important;display:-webkit-flex!important;display:flex!important;padding-top:1rem!important;padding-top:2.5rem!important}}.home-logo__wrapper .logo[data-v-9492c713]{height:2rem!important;width:2rem!important}@media (min-width: 1024px){.home-logo__wrapper .logo[data-v-9492c713]{height:3.5rem!important;width:3.5rem!important}}.home-logo__wrapper .title[data-v-9492c713]{font-size:1rem!important;line-height:1.5rem!important}@media (min-width: 1024px){.home-logo__wrapper .title[data-v-9492c713]{font-size:1.25rem!important;line-height:1.75rem!important}}.feature-grid[data-v-9492c713]{display:-ms-grid!important;display:grid!important;margin-left:auto!important;margin-right:auto!important;padding-top:2.5rem!important;width:100%!important;grid-gap:.5rem!important;gap:.5rem!important;grid-template-columns:repeat(1,minmax(0,1fr))!important}@media (min-width: 1024px){.feature-grid[data-v-9492c713]{padding-top:1rem!important;grid-gap:1.5rem!important;gap:1.5rem!important;grid-template-columns:repeat(2,minmax(0,1fr))!important}}.feature-grid .feature[data-v-9492c713]{border-radius:.375rem!important;cursor:pointer!important;padding:.5rem!important;-webkit-transition-property:all!important;-o-transition-property:all!important;transition-property:all!important;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1)!important;-o-transition-timing-function:cubic-bezier(.4,0,.2,1)!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important;-webkit-transition-duration:.15s!important;-o-transition-duration:.15s!important;transition-duration:.15s!important;background-color:var(--color-secondary)!important}@media (min-width: 1024px){.feature-grid .feature[data-v-9492c713]{padding:1rem!important}}.feature-grid .feature[data-v-9492c713]:hover{--tw-bg-opacity: 1 !important;background-color:rgba(255,255,255,var(--tw-bg-opacity))!important}.dark .feature-grid .feature[data-v-9492c713]:hover{--tw-bg-opacity: 1 !important;background-color:rgba(35,35,36,var(--tw-bg-opacity))!important}.feature-grid .feature .icon[data-v-9492c713]{border-radius:.375rem!important;height:1.5rem!important;font-size:.875rem!important;line-height:1.25rem!important;padding:0!important;width:1.5rem!important}@media (min-width: 1024px){.feature-grid .feature .icon[data-v-9492c713]{height:2.5rem!important;font-size:1.25rem!important;line-height:1.75rem!important;width:2.5rem!important}}.feature-grid .feature .title[data-v-9492c713]{font-size:.875rem!important;line-height:1.25rem!important}.dark .feature-grid .feature .title[data-v-9492c713]{--tw-text-opacity: 1 !important;color:rgba(209,213,219,var(--tw-text-opacity))!important}@media (min-width: 1024px){.feature-grid .feature .title[data-v-9492c713]{font-size:1rem!important;line-height:1.5rem!important}}.feature-grid .feature .details[data-v-9492c713]{font-size:.75rem!important;line-height:1rem!important;color:var(--color-text-2)!important}@media (min-width: 1024px){.feature-grid .feature .details[data-v-9492c713]{font-size:.875rem!important;line-height:1.25rem!important}}\n",document.head.appendChild(_),{setters:[t=>{i=t.c,e=t.e,r=t.f,o=t.g,n=t.h,m=t.u,p=t.t,d=t.i,l=t.aa,c=t.k,s=t.B,g=t.W,u=t.P,h=t.Q},t=>{f=t.u,w=t._,b=t.A,x=t.a}],execute:function(){const a=t=>(u("data-v-9492c713"),t=t(),h(),t),_={class:"home-logo__wrapper"},v=["alt"],y={class:"title"},k={class:"feature-grid xl:max-w-4xl max-w-11/12"},E={class:"flex items-center gap-x-4"},T=a((()=>n("img",{class:"w-2/3",src:w,alt:"GPT-3.5 Turbo"},null,-1))),P=a((()=>n("h2",{class:"title"},"GPT 3.5",-1))),C=a((()=>n("p",{class:"details"},"人工智能聊天工具，模拟人类思维，适用于多种语境。",-1))),A={class:"flex items-center gap-x-4"},z=a((()=>n("img",{class:"w-2/3",src:w,alt:"GPT-3.5 Turbo"},null,-1))),I=a((()=>n("h2",{class:"title"},"GPT 4",-1))),L=a((()=>n("p",{class:"details"}," 延续 Chat GPT 系列，以更先进的架构提供更多样的自然语言生成服务。 ",-1)));t("default",x(i({__name:"HomeView",setup(t){const{VITE_FEATURES:a}={VITE_BASE_URL:"/",VITE_PORT:"3000",VITE_DROP_CONSOLE:"true",VITE_FEATURES:"CHAT",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,LEGACY:!0},i=l(),u=f(),h=t=>{const e=u.sessions;"Chat_3.5"===t&&((e.length<1||"gpt-4"===e[0]?.model||(!e[0]?.model||"gpt-3.5-turbo"==e[0]?.model)&&e[0]?.messages.length>0)&&u.newChatAction(),i.push({name:"Chat"})),"Chat_4"===t&&((e.length<1||"gpt-3.5-turbo"===e[0]?.model||"gpt-4"==e[0]?.model&&e[0]?.messages.length>0)&&u.newChatAction("gpt-4"),i.push({name:"Chat"})),"Midjourney"===t&&(a.includes("MIDJOURNEY")?i.push({name:"Midjourney"}):c.info("即将上线~")),"Dall_E"===t&&(a.includes("DALL_E")?i.push({name:"DallE"}):c.info("即将上线~"))};return(t,a)=>{const i=s,l=g;return e(),r(l,{"outer-style":"flex: 1; overflow: hidden;",class:"overflow-y-auto h-full p-4 flex flex-col gap-y-2"},{default:o((()=>[n("div",_,[n("img",{class:"logo",src:w,alt:"APP_TITLE"in t?t.APP_TITLE:m(b)},null,8,v),n("h1",y,p("APP_TITLE"in t?t.APP_TITLE:m(b)),1)]),n("div",k,[n("div",{onClick:a[0]||(a[0]=t=>h("Chat_3.5")),class:"feature dark:bg-dark"},[n("div",E,[d(i,{class:"icon bg-gray-200 dark:bg-dark-900"},{default:o((()=>[T])),_:1}),P]),C]),n("div",{onClick:a[1]||(a[1]=t=>h("Chat_4")),class:"feature dark:bg-dark"},[n("div",A,[d(i,{class:"icon bg-gray-200 dark:bg-dark-900"},{default:o((()=>[z])),_:1}),I]),L])])])),_:1})}}}),[["__scopeId","data-v-9492c713"]]))}}}));