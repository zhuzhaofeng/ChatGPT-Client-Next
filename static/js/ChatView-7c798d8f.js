import{c as e,r as l,ae as a,af as t,ag as s,ah as n,e as o,ai as r,aj as i,g as c,l as u,u as d,t as v,_ as p,o as m,M as g,b as f,w as x,a as y,f as h,ak as b,h as k,i as w,k as _,j as C,x as R,F as T,m as E,s as S,q as $,B as q,J as H,G as z,al as B,am as L,an as M,ao as j,S as A,v as K}from"./.pnpm-fe859a32.js";import{_ as V,u as D,b as F,c as G,d as I,S as J}from"./index-bd6f331d.js";const U={key:0,class:"dark:text-white w-[4px] h-[20px] block animate-blink"},Y={key:0},N=["innerHTML"],O=["textContent"],P=["textContent"],Q=V(e({__name:"MessageContent",props:{inversion:{type:Boolean},error:{type:Boolean},text:null,loading:{type:Boolean},asRawText:{type:Boolean}},setup(e){const m=e,g=l(),f=new a({linkify:!0,highlight(e,l){if(!(!l||!t.getLanguage(l))){const a=null!=l?l:"";return h(t.highlight(e,{language:a}).value,a)}return h(t.highlightAuto(e).value,"")}});f.use(s,{attrs:{target:"_blank",rel:"noopener"}}),f.use(n,{blockClass:"katexmath-block rounded-md p-[10px]",errorColor:" #cc0000"});const x=o((()=>["message-content","min-w-[20px]","rounded-md",m.inversion?"text-[#f1f1f1]":"bg-[#e5e6eb]",m.inversion?"text-[]":"dark:bg-[#1e1e20]",m.inversion?"message-request":"message-reply",{"text-red-500":m.error}])),y=o((()=>{var e;const l=(null!=(e=m.text)?e:"").replace(/\n+$/g,"");return m.asRawText||m.inversion?l:f.render(l)}));function h(e,l){return`<pre class="code-block-wrapper"><div class="code-block-header"><span class="code-block-header__lang">${l}</span><span class="code-block-header__copy">复制代码</span></div><code class="hljs code-block-body ${l}">${e}</code></pre>`}return r((()=>{i((()=>{g.value&&t.highlightBlock(g.value)}))})),(l,a)=>(c(),u("div",{class:p(d(x))},[e.loading?(c(),u("span",U)):(c(),u("div",{key:1,ref_key:"textRef",ref:g,class:"leading-relaxed break-words"},[e.inversion?(c(),u("div",{key:1,class:"whitespace-pre-wrap",textContent:v(d(y))},null,8,P)):(c(),u("div",Y,[e.asRawText?(c(),u("div",{key:1,class:"whitespace-pre-wrap",textContent:v(d(y))},null,8,O)):(c(),u("div",{key:0,class:"markdown-body",innerHTML:d(y)},null,8,N))]))],512))],2))}}),[["__scopeId","data-v-cf02b953"]]);function W(e){const l={origin:!0,...e};let a;a=l.origin?document.createElement("textarea"):document.createElement("input"),a.setAttribute("readonly","readonly"),a.value=l.text,document.body.appendChild(a),a.select(),document.execCommand("copy")&&document.execCommand("copy"),document.body.removeChild(a)}function X(){function e(){document.querySelectorAll(".code-block-wrapper").forEach((e=>{const l=e.querySelector(".code-block-header__copy"),a=e.querySelector(".code-block-body");l&&a&&l.addEventListener("click",(()=>{var e,l,t;(null==(e=navigator.clipboard)?void 0:e.writeText)?(navigator.clipboard.writeText(null!=(l=a.textContent)?l:""),g.clear(),g.success("复制成功")):(W({text:null!=(t=a.textContent)?t:"",origin:!0}),g.clear(),g.success("复制成功"))}))}))}e(),m((()=>e())),r((()=>e()))}const Z={class:"chat-wrapper"},ee=["src"],le={class:"date-time"},ae={key:0,class:"text-info"},te={key:0,class:"message-item__actions"},se={class:"chat-footer"},ne=e({__name:"ChatView",setup(e){X();const a=D(),t=F(),s=o((()=>a.session)),{isMobileScreen:n}=G(),r=l(!1),V={user:I,assistant:"/static/svg/openai-white-1b79b841.svg"},U=l(),Y=l("新的聊天");f((()=>{var e;Y.value=(null==(e=a.session)?void 0:e.topic)||"新的聊天"})),x((()=>a.currentChat),(()=>{i((()=>{var e,l,a,t;null==(t=U.value)||t.scrollTop((null!=(a=null==(l=null==(e=U.value)?void 0:e.containerRef)?void 0:l.scrollHeight)?a:0)-200)}))}));const N=l(""),O=()=>{if(e=N.value,/^[\s\n\r]*$/.test(e))return g.clear(),void g.error("请输入消息内容");var e;r.value=!1,a.sendMessageAction(N.value,(e=>{var l,a,t,s;r.value||null==(s=U.value)||s.scrollTop((null!=(t=null==(a=null==(l=U.value)?void 0:l.containerRef)?void 0:a.scrollHeight)?t:0)-200),e&&i((()=>{X()}))})),N.value=""},P=e=>{e.deltaY<10&&(r.value=!0)};m((()=>{i((()=>{var e,l,a,t,s;null==(t=U.value)||t.scrollTop((null!=(a=null==(l=null==(e=U.value)?void 0:e.containerRef)?void 0:l.scrollHeight)?a:0)-200),null==(s=U.value)||s.$el.querySelector(".arco-scrollbar-container").addEventListener("wheel",P)}))}));const ne=e=>{var l,a,t;((null==(l=null==e?void 0:e.target)?void 0:l.scrollTop)||0)+((null==(a=null==e?void 0:e.target)?void 0:a.offsetHeight)||0)>=((null==(t=null==e?void 0:e.target)?void 0:t.scrollHeight)||0)-70&&(r.value=!1)};y((()=>{var e,l,t;(null==(e=a.abortController)?void 0:e.abort)&&(null==(l=a.abortController)||l.abort()),null==(t=U.value)||t.$el.querySelector(".arco-scrollbar-container").removeEventListener("wheel",P)}));const oe=e=>{n.value||"Enter"!==e.key||e.shiftKey||(e.preventDefault(),O())},re=o((()=>{let e="请输入您的消息";return n.value||(e+=`，${t.submitKey} 发送，${t.submitKey===J.Enter?J.ShiftEnter:J.Enter} 换行`),e}));return(e,l)=>{const t=j,o=A,i=h("icon-copy"),m=q,f=K,x=h("icon-sync"),y=Q,D=H,F=z,G=h("icon-record-stop"),I=B,J=L,Y=b("date-time");return c(),k(J,{class:"flex flex-col flex-1 overflow-hidden"},{default:w((()=>[_("main",Z,[C(D,{ref_key:"scrollbarRef",ref:U,onScroll:ne,"outer-style":"flex: 1; overflow: hidden; ",class:"overflow-y-auto h-full p-4 flex flex-col gap-y-2 pb-20"},{default:w((()=>{var e,l;return[(c(!0),u(T,null,R(null!=(l=null==(e=d(s))?void 0:e.messages)?l:[],((e,l)=>(c(),u("section",{key:e.id,class:p(["message-item",["assistant"===e.role?"is-reply":"is-request",d(n)?"max-w-full":"max-w-4/5"]])},[_("div",{class:p(["flex items-center gap-x-4",{"flex-row-reverse":"assistant"!==e.role}])},["assistant"===e.role?(c(),k(o,{key:0,loading:e.streaming},{default:w((()=>[C(t,{size:32,class:p("assistant"===e.role?"bg-primary p-2":"bg-success")},{default:w((()=>{var l;return[_("img",{src:null!=(l=V[e.role])?l:""},null,8,ee)]})),_:2},1032,["class"])])),_:2},1032,["loading"])):S("",!0),M((c(),u("small",le,[E(v(e.date),1)])),[[Y,e.date]])],2),e.streaming&&"assistant"===e.role?(c(),u("small",ae," 正在输入... ")):S("",!0),_("section",{class:p(["message-item__content",{"is-user":"user"===e.role},{"is-assistant":"assistant"===e.role}])},["assistant"===e.role?(c(),u("div",te,[C(f,{"content-class":"text-xs",content:"复制",position:"top"},{default:w((()=>[C(m,{onClick:l=>(W({text:e.content}),g.clear(),void g.success("复制成功")),size:"mini",shape:"circle",type:"text"},{default:w((()=>[C(i,{class:"text-base"})])),_:2},1032,["onClick"])])),_:2},1024),C(f,{"content-class":"text-xs",content:"重试",position:"top"},{default:w((()=>[C(m,{onClick:e=>(e=>{r.value=!1,a.messageRetryAction(e,(()=>{var e,l,a,t;r.value||null==(t=U.value)||t.scrollTop((null!=(a=null==(l=null==(e=U.value)?void 0:e.containerRef)?void 0:l.scrollHeight)?a:0)-200)}))})(l),size:"mini",shape:"circle",type:"text"},{default:w((()=>[C(x,{class:"text-base"})])),_:2},1032,["onClick"])])),_:2},1024)])):S("",!0),(c(),k(y,{key:e.content,text:e.content,inversion:"assistant"!==e.role},null,8,["text","inversion"]))],2)],2)))),128))]})),_:1},512),C(F,{class:"m-0"}),_("footer",se,[d(a).fetching?(c(),k(m,{key:0,onClick:l[0]||(l[0]=e=>{var l;return null==(l=d(a).abortController)?void 0:l.abort()}),shape:"round",status:"danger",class:"stop-receiving"},{default:w((()=>[C(G,{class:"text-lg mr-2"}),E(" 停止 ")])),_:1})):S("",!0),C(I,{modelValue:d(N),"onUpdate:modelValue":l[1]||(l[1]=e=>$(N)?N.value=e:null),onKeypress:oe,class:"bg-white dark:bg-dark-900 border-none","auto-size":{minRows:d(n)?1:3,maxRows:6},placeholder:d(re)},null,8,["modelValue","auto-size","placeholder"]),d(n)&&d(N).trim().length>0?(c(),k(m,{key:1,size:"medium",class:"rounded text-xs",onClick:O,type:"primary"},{default:w((()=>[E(" 发送 ")])),_:1})):S("",!0)])])])),_:1})}}});export{ne as default};
