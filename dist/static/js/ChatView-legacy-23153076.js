System.register(["./.pnpm-legacy-73a9bb17.js","./index-legacy-727c645b.js"],(function(t,e){"use strict";var a,r,o,n,i,s,l,m,c,p,d,w,u,x,g,b,f,y,v,k,h,_,z,C,Y,R,T,E,S,j,X,q,$,H,Z,L,B,A,M,K,V,D,F,I,J,U=document.createElement("style");return U.textContent=".message-content[data-v-65fe8662]{max-width:-webkit-max-content!important;max-width:-moz-max-content!important;max-width:max-content!important}.chat-wrapper{display:-webkit-box!important;display:-ms-flexbox!important;display:-webkit-flex!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;-webkit-flex-direction:column!important;flex-direction:column!important;-webkit-box-flex:1!important;-ms-flex:1 1 0%!important;-webkit-flex:1 1 0%!important;flex:1 1 0%!important;height:100%!important;overflow:hidden!important}.chat-wrapper .message-item{display:-webkit-box!important;display:-ms-flexbox!important;display:-webkit-flex!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;-webkit-flex-direction:column!important;flex-direction:column!important;-webkit-box-align:start!important;-ms-flex-align:start!important;-webkit-align-items:flex-start!important;align-items:flex-start!important;justify-items:start!important;padding-left:0!important;grid-gap:.5rem!important;gap:.5rem!important}.chat-wrapper .message-item.is-request{-webkit-box-align:end!important;-ms-flex-align:end!important;-webkit-align-items:flex-end!important;align-items:flex-end!important;margin-left:auto!important;max-width:-webkit-max-content!important;max-width:-moz-max-content!important;max-width:max-content!important;padding-left:2.5rem!important}.chat-wrapper .message-item .message-item__content{border-radius:.5rem!important;display:-webkit-box!important;display:-ms-flexbox!important;display:-webkit-flex!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;-webkit-flex-direction:column!important;flex-direction:column!important;font-size:.875rem!important;line-height:1.25rem!important;max-width:100%!important;min-width:18rem!important;padding:.75rem 1rem!important;position:relative!important}.chat-wrapper .message-item .message-item__content.is-user{--tw-bg-opacity: 1 !important;background-color:rgba(16,163,127,var(--tw-bg-opacity))!important;-webkit-box-pack:end!important;-ms-flex-pack:end!important;-webkit-justify-content:flex-end!important;justify-content:flex-end!important;--tw-text-opacity: 1 !important;color:rgba(255,255,255,var(--tw-text-opacity))!important}.chat-wrapper .message-item .message-item__content.is-assistant{--tw-bg-opacity: 1 !important;background-color:rgba(255,255,255,var(--tw-bg-opacity))!important}.dark .chat-wrapper .message-item .message-item__content.is-assistant{--tw-bg-opacity: 1 !important;background-color:rgba(35,35,36,var(--tw-bg-opacity))!important}.chat-wrapper .message-item .message-item__actions{display:-webkit-box!important;display:-ms-flexbox!important;display:-webkit-flex!important;display:flex!important;-webkit-box-align:center!important;-ms-flex-align:center!important;-webkit-align-items:center!important;align-items:center!important;opacity:0!important;padding-left:1rem!important;position:absolute!important;top:-2.25rem!important;right:2rem!important;-webkit-column-gap:.25rem!important;-moz-column-gap:.25rem!important;grid-column-gap:.25rem!important;column-gap:.25rem!important;-webkit-transition-property:all!important;-o-transition-property:all!important;transition-property:all!important;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1)!important;-o-transition-timing-function:cubic-bezier(.4,0,.2,1)!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important;-webkit-transition-duration:.15s!important;-o-transition-duration:.15s!important;transition-duration:.15s!important;-webkit-transition-duration:.5s!important;-o-transition-duration:.5s!important;transition-duration:.5s!important}.chat-wrapper .message-item:hover .message-item__actions{opacity:1!important;right:0px!important}.chat-footer{--tw-bg-opacity: 1 !important;background-color:rgba(255,255,255,var(--tw-bg-opacity))!important;display:-webkit-box!important;display:-ms-flexbox!important;display:-webkit-flex!important;display:flex!important;-webkit-box-align:end!important;-ms-flex-align:end!important;-webkit-align-items:flex-end!important;align-items:flex-end!important;-webkit-box-pack:end!important;-ms-flex-pack:end!important;-webkit-justify-content:flex-end!important;justify-content:flex-end!important;padding:.75rem 1rem .5rem .5rem!important;position:relative!important;width:100%!important}.dark .chat-footer{--tw-bg-opacity: 1 !important;background-color:rgba(23,23,26,var(--tw-bg-opacity))!important}.chat-footer .stop-receiving{position:absolute!important;top:-3rem!important;left:50%!important;--tw-translate-x: 0 !important;--tw-translate-y: 0 !important;--tw-translate-z: 0 !important;--tw-rotate: 0 !important;--tw-rotate-x: 0 !important;--tw-rotate-y: 0 !important;--tw-rotate-z: 0 !important;--tw-skew-x: 0 !important;--tw-skew-y: 0 !important;--tw-scale-x: 1 !important;--tw-scale-y: 1 !important;--tw-scale-z: 1 !important;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))!important;-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))!important;transform:translate(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotate(var(--tw-rotate-z)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))!important;--tw-translate-x: -50% !important}.date-time{color:rgb(var(--gray-8))}\n",document.head.appendChild(U),{setters:[t=>{a=t.c,r=t.r,o=t.ag,n=t.ah,i=t.ai,s=t.aj,l=t.m,m=t.am,c=t.an,p=t.e,d=t.p,w=t.u,u=t.t,x=t.a0,g=t.o,b=t.l,f=t.b,y=t.w,v=t.a,k=t.n,h=t.ao,_=t.f,z=t.g,C=t.h,Y=t.i,R=t.z,T=t.F,E=t.j,S=t.v,j=t.k,X=t.B,q=t.L,$=t.J,H=t.ap,Z=t.aq,L=t.ar,B=t.as,A=t.S,M=t.y},t=>{K=t.a,V=t.u,D=t.c,F=t.d,I=t.e,J=t.S}],execute:function(){const e={key:0,class:"dark:text-white w-[4px] h-[20px] block animate-blink"},U={key:0},G=["innerHTML"],N=["textContent"],O=["textContent"],P=a({__name:"MessageContent",props:{inversion:{type:Boolean},error:{type:Boolean},text:null,loading:{type:Boolean},asRawText:{type:Boolean}},setup(t){const a=t,g=r(),b=new o({linkify:!0,highlight(t,e){if(e&&n.getLanguage(e)){const a=e??"";return v(n.highlight(t,{language:a}).value,a)}return v(n.highlightAuto(t).value,"")}});b.use(i,{attrs:{target:"_blank",rel:"noopener"}}),b.use(s,{blockClass:"katexmath-block rounded-md p-[10px]",errorColor:" #cc0000"});const f=l((()=>["message-content","min-w-[20px]","rounded-md",a.inversion?"text-[#f1f1f1]":"bg-[#e5e6eb]",a.inversion?"text-[]":"dark:bg-[#1e1e20]",a.inversion?"message-request":"message-reply",{"text-red-500":a.error}])),y=l((()=>{const t=(a.text??"").replace(/\n+$/g,"");return a.asRawText||a.inversion?t:b.render(t)}));function v(t,e){return`<pre class="code-block-wrapper"><div class="code-block-header"><span class="code-block-header__lang">${e}</span><span class="code-block-header__copy">复制代码</span></div><code class="hljs code-block-body ${e}">${t}</code></pre>`}return m((()=>{c((()=>{g.value&&n.highlightBlock(g.value)}))})),(a,r)=>(p(),d("div",{class:x(w(f))},[t.loading?(p(),d("span",e)):(p(),d("div",{key:1,ref_key:"textRef",ref:g,class:"leading-relaxed break-words"},[t.inversion?(p(),d("div",{key:1,class:"whitespace-pre-wrap",textContent:u(w(y))},null,8,O)):(p(),d("div",U,[t.asRawText?(p(),d("div",{key:1,class:"whitespace-pre-wrap",textContent:u(w(y))},null,8,N)):(p(),d("div",{key:0,class:"markdown-body",innerHTML:w(y)},null,8,G))]))],512))],2))}}),Q=K(P,[["__scopeId","data-v-65fe8662"]]);function W(t){const e={origin:!0,...t};let a;a=e.origin?document.createElement("textarea"):document.createElement("input"),a.setAttribute("readonly","readonly"),a.value=e.text,document.body.appendChild(a),a.select(),document.execCommand("copy")&&document.execCommand("copy"),document.body.removeChild(a)}function tt(){function t(){document.querySelectorAll(".code-block-wrapper").forEach((t=>{const e=t.querySelector(".code-block-header__copy"),a=t.querySelector(".code-block-body");e&&a&&e.addEventListener("click",(()=>{navigator.clipboard?.writeText?(navigator.clipboard.writeText(a.textContent??""),b.clear(),b.success("复制成功")):(W({text:a.textContent??"",origin:!0}),b.clear(),b.success("复制成功"))}))}))}t(),g((()=>t())),m((()=>t()))}const et={class:"chat-wrapper"},at=["src"],rt={class:"date-time"},ot={key:0,class:"text-info"},nt={key:0,class:"message-item__actions"},it={class:"chat-footer"};t("default",a({__name:"ChatView",setup(t){tt();const e=V(),a=D(),o=l((()=>e.session)),{isMobileScreen:n}=F(),i=r(!1),s={user:I,assistant:"/static/svg/openai-white-1b79b841.svg"},m=r(),K=r("新的聊天");f((()=>{K.value=e.session?.topic||"新的聊天"})),y((()=>e.currentChat),(()=>{c((()=>{m.value?.scrollTop((m.value?.containerRef?.scrollHeight??0)-200)}))}));const U=r(""),G=()=>{if(t=U.value,/^[\s\n\r]*$/.test(t))return b.clear(),void b.error("请输入消息内容");var t;i.value=!1,e.sendMessageAction(U.value,(t=>{i.value||m.value?.scrollTop((m.value?.containerRef?.scrollHeight??0)-200),t&&c((()=>{tt()}))})),U.value=""},N=t=>{t.deltaY<10&&(i.value=!0)};g((()=>{c((()=>{m.value?.scrollTop((m.value?.containerRef?.scrollHeight??0)-200),m.value?.$el.querySelector(".arco-scrollbar-container").addEventListener("wheel",N)}))}));const O=t=>{(t?.target?.scrollTop||0)+(t?.target?.offsetHeight||0)>=(t?.target?.scrollHeight||0)-70&&(i.value=!1)};v((()=>{e.abortController?.abort&&e.abortController?.abort(),m.value?.$el.querySelector(".arco-scrollbar-container").removeEventListener("wheel",N)}));const P=t=>{n.value||"Enter"!==t.key||t.shiftKey||(t.preventDefault(),G())},st=l((()=>{let t="请输入您的消息";return n.value||(t+=`，${a.submitKey} 发送，${a.submitKey===J.Enter?J.ShiftEnter:J.Enter} 换行`),t}));return(t,a)=>{const r=B,l=A,c=k("icon-copy"),g=X,f=M,y=k("icon-sync"),v=Q,K=q,V=$,D=k("icon-record-stop"),F=H,I=Z,J=h("date-time");return p(),_(I,{class:"flex flex-col flex-1 overflow-hidden"},{default:z((()=>[C("main",et,[Y(K,{ref_key:"scrollbarRef",ref:m,onScroll:O,"outer-style":"flex: 1; overflow: hidden; ",class:"overflow-y-auto h-full p-4 flex flex-col gap-y-2 pb-20"},{default:z((()=>[(p(!0),d(T,null,R(w(o)?.messages??[],((t,a)=>(p(),d("section",{key:t.id,class:x(["message-item",["assistant"===t.role?"is-reply":"is-request",w(n)?"max-w-full":"max-w-4/5"]])},[C("div",{class:x(["flex items-center gap-x-4",{"flex-row-reverse":"assistant"!==t.role}])},["assistant"===t.role?(p(),_(l,{key:0,loading:t.streaming},{default:z((()=>[Y(r,{size:32,class:x("assistant"===t.role?"bg-primary p-2":"bg-success")},{default:z((()=>[C("img",{src:s[t.role]??""},null,8,at)])),_:2},1032,["class"])])),_:2},1032,["loading"])):S("",!0),L((p(),d("small",rt,[E(u(t.date),1)])),[[J,t.date]])],2),t.streaming&&"assistant"===t.role?(p(),d("small",ot," 正在输入... ")):S("",!0),C("section",{class:x(["message-item__content",{"is-user":"user"===t.role},{"is-assistant":"assistant"===t.role}])},["assistant"===t.role?(p(),d("div",nt,[Y(f,{"content-class":"text-xs",content:"复制",position:"top"},{default:z((()=>[Y(g,{onClick:e=>(W({text:t.content}),b.clear(),void b.success("复制成功")),size:"mini",shape:"circle",type:"text"},{default:z((()=>[Y(c,{class:"text-base"})])),_:2},1032,["onClick"])])),_:2},1024),Y(f,{"content-class":"text-xs",content:"重试",position:"top"},{default:z((()=>[Y(g,{onClick:t=>(t=>{i.value=!1,e.messageRetryAction(t,(()=>{i.value||m.value?.scrollTop((m.value?.containerRef?.scrollHeight??0)-200)}))})(a),size:"mini",shape:"circle",type:"text"},{default:z((()=>[Y(y,{class:"text-base"})])),_:2},1032,["onClick"])])),_:2},1024)])):S("",!0),(p(),_(v,{key:t.content,text:t.content,inversion:"assistant"!==t.role},null,8,["text","inversion"]))],2)],2)))),128))])),_:1},512),Y(V,{class:"m-0"}),C("footer",it,[w(e).fetching?(p(),_(g,{key:0,onClick:a[0]||(a[0]=t=>w(e).abortController?.abort()),shape:"round",status:"danger",class:"stop-receiving"},{default:z((()=>[Y(D,{class:"text-lg mr-2"}),E(" 停止 ")])),_:1})):S("",!0),Y(F,{readonly:w(e).fetching,modelValue:w(U),"onUpdate:modelValue":a[1]||(a[1]=t=>j(U)?U.value=t:null),onKeypress:P,class:"bg-white dark:bg-dark-900 border-none","auto-size":{minRows:w(n)?1:3,maxRows:6},placeholder:w(st)},null,8,["readonly","modelValue","auto-size","placeholder"]),w(n)&&w(U).trim().length>0?(p(),_(g,{key:1,size:"medium",class:"rounded text-xs",onClick:G,type:"primary"},{default:z((()=>[E(" 发送 ")])),_:1})):S("",!0)])])])),_:1})}}}))}}}));