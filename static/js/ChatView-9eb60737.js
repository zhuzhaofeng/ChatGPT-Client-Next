import{c as e,r as l,al as a,am as s,an as t,ao as n,m as o,ar as r,as as i,e as c,p as u,u as d,t as v,K as p,o as g,l as m,b as x,w as y,a as f,n as h,at as b,f as k,g as w,h as _,i as C,x as E,J as R,F as T,j as S,k as $,B as z,W as H,D as q,au as A,av as B,aw as L,ax as j,ay as K,S as M,z as F,az as Q,aA as V}from"./.pnpm-dd960497.js";import{a as D,u as W,d as I,e as J,f as U,S as Y,b as G,c as N}from"./index-f92fc2da.js";const O={key:0,class:"dark:text-white w-[4px] h-[20px] block animate-blink"},P={key:0},X=["innerHTML"],Z=["textContent"],ee=["textContent"],le=D(e({__name:"MessageContent",props:{inversion:{type:Boolean},error:{type:Boolean},text:null,loading:{type:Boolean},asRawText:{type:Boolean}},setup(e){const g=e,m=l(),x=new a({linkify:!0,highlight(e,l){if(!(!l||!s.getLanguage(l))){const a=null!=l?l:"";return h(s.highlight(e,{language:a}).value,a)}return h(s.highlightAuto(e).value,"")}});x.use(t,{attrs:{target:"_blank",rel:"noopener"}}),x.use(n,{blockClass:"katexmath-block rounded-md p-[10px]",errorColor:" #F53F3F"});const y=o((()=>["message-content","min-w-[20px]","rounded-md",g.inversion?"text-[#f1f1f1]":"bg-[#e5e6eb]",g.inversion?"text-[]":"dark:bg-[#1e1e20]",g.inversion?"message-request":"message-reply",{"text-red-500":g.error}])),f=o((()=>{var e;const l=(e=>{try{return null==e?void 0:e.replace(/\n+$/g,"")}catch(l){return e}})(null!=(e=g.text)?e:"");return g.asRawText||g.inversion?l:x.render(l)}));function h(e,l){return`<pre class="code-block-wrapper"><div class="code-block-header"><span class="code-block-header__lang">${l}</span><span class="code-block-header__copy">复制代码</span></div><code class="hljs code-block-body ${l}">${e}</code></pre>`}return r((()=>{i((()=>{m.value&&s.highlightBlock(m.value)}))})),(l,a)=>(c(),u("div",{class:p(d(y))},[e.loading?(c(),u("span",O)):(c(),u("div",{key:1,ref_key:"textRef",ref:m,class:"leading-relaxed break-words"},[e.inversion?(c(),u("div",{key:1,class:"whitespace-pre-wrap",textContent:v(d(f))},null,8,ee)):(c(),u("div",P,[e.asRawText?(c(),u("div",{key:1,class:"whitespace-pre-wrap",textContent:v(d(f))},null,8,Z)):(c(),u("div",{key:0,class:"markdown-body",innerHTML:d(f)},null,8,X))]))],512))],2))}}),[["__scopeId","data-v-4e421b92"]]);function ae(e){const l={origin:!0,...e};let a;a=l.origin?document.createElement("textarea"):document.createElement("input"),a.setAttribute("readonly","readonly"),a.value=l.text,document.body.appendChild(a),a.select(),document.execCommand("copy")&&document.execCommand("copy"),document.body.removeChild(a)}function se(){function e(){document.querySelectorAll(".code-block-wrapper").forEach((e=>{const l=e.querySelector(".code-block-header__copy"),a=e.querySelector(".code-block-body");l&&a&&l.addEventListener("click",(()=>{var e,l,s;(null==(e=navigator.clipboard)?void 0:e.writeText)?(navigator.clipboard.writeText(null!=(l=a.textContent)?l:""),m.clear(),m.success("复制成功")):(ae({text:null!=(s=a.textContent)?s:"",origin:!0}),m.clear(),m.success("复制成功"))}))}))}e(),g((()=>e())),r((()=>e()))}const te={class:"chat-wrapper"},ne={key:0,class:"flex flex-col items-center justify-center mt-10 gap-y-10 text-center text-gray-600"},oe=[_("span",null," 国内最快最好用的gpt站点，网址经常变更，所以使用前一定要记得先加群！！！ ",-1),_("div",{class:"grid grid-cols-2"},[_("div",{class:"flex flex-col items-center gap-y-2 py-2"},[_("img",{class:"max-w-40 w-11/12 border-solid border border-gray-200 p-1",alt:"QQ",src:G}),_("span",{class:""},"QQ群")]),_("div",{class:"flex flex-col items-center gap-y-2 py-2"},[_("img",{class:"max-w-40 w-11/12 border-solid border border-gray-200 p-1",alt:"WeChat",src:N}),_("span",{class:""},"微信群")])],-1)],re=["src"],ie={class:"date-time"},ce={key:0,class:"text-info"},ue={key:0,class:"message-item__actions"},de={key:0,class:"chat-footer"},ve=e({__name:"ChatView",setup(e){se();const a=W(),s=I(),t=o((()=>a.session)),{isMobileScreen:n}=J(),r=l(!1),D={user:U,assistant:"/static/svg/openai-white-1b79b841.svg"},G=l(),N=l("新的聊天");x((()=>{var e;N.value=(null==(e=a.session)?void 0:e.topic)||"新的聊天"})),y((()=>a.currentChat),(()=>{i((()=>{var e,l,a,s;null==(s=G.value)||s.scrollTop((null!=(a=null==(l=null==(e=G.value)?void 0:e.containerRef)?void 0:l.scrollHeight)?a:0)-200)}))}));const O=l(""),P=()=>{if(e=O.value,/^[\s\n\r]*$/.test(e))return m.clear(),void m.error("请输入消息内容");var e;r.value=!1,a.sendMessageAction(O.value,(e=>{var l,a,s,t;r.value||null==(t=G.value)||t.scrollTop((null!=(s=null==(a=null==(l=G.value)?void 0:l.containerRef)?void 0:a.scrollHeight)?s:0)-200),e&&i((()=>{se()}))})),O.value=""},X=e=>{e.deltaY<10&&(r.value=!0)};g((()=>{i((()=>{var e,l,a,s,t;null==(s=G.value)||s.scrollTop((null!=(a=null==(l=null==(e=G.value)?void 0:e.containerRef)?void 0:l.scrollHeight)?a:0)-200),null==(t=G.value)||t.$el.querySelector(".arco-scrollbar-container").addEventListener("wheel",X)}))}));const Z=e=>{var l,a,s;((null==(l=null==e?void 0:e.target)?void 0:l.scrollTop)||0)+((null==(a=null==e?void 0:e.target)?void 0:a.offsetHeight)||0)>=((null==(s=null==e?void 0:e.target)?void 0:s.scrollHeight)||0)-70&&(r.value=!1)};f((()=>{var e,l,s;(null==(e=a.abortController)?void 0:e.abort)&&(null==(l=a.abortController)||l.abort()),null==(s=G.value)||s.$el.querySelector(".arco-scrollbar-container").removeEventListener("wheel",X)}));const ee=e=>{n.value||"Enter"!==e.key||e.shiftKey||(e.preventDefault(),P())},ve=o((()=>{let e="请输入您的消息";return n.value||(e+=`，${s.submitKey} 发送，${s.submitKey===Y.Enter?Y.ShiftEnter:Y.Enter} 换行`),e}));return(e,l)=>{const s=K,o=M,i=h("icon-copy"),g=z,x=F,y=h("icon-sync"),f=Q,W=V,I=le,J=H,U=q,Y=h("icon-record-stop"),N=A,X=B,se=b("date-time");return c(),k(X,{class:"flex flex-col flex-1 overflow-hidden"},{default:w((()=>{var e;return[_("main",te,[C(J,{ref_key:"scrollbarRef",ref:G,onScroll:Z,"outer-style":"flex: 1; overflow: hidden; ",class:"overflow-y-auto h-full p-4 flex flex-col gap-y-2 pb-20"},{default:w((()=>{var e,l,h,b;return[(null==(l=null==(e=d(t))?void 0:e.messages)?void 0:l.length)?E("",!0):(c(),u("div",ne,oe)),(c(!0),u(T,null,R(null!=(b=null==(h=d(t))?void 0:h.messages)?b:[],((e,l)=>(c(),u("section",{key:e.id,class:p(["message-item",["assistant"===e.role?"is-reply":"is-request",d(n)?"max-w-full":"max-w-4/5"]])},[_("div",{class:p(["flex items-center gap-x-4",{"flex-row-reverse":"assistant"!==e.role}])},["assistant"===e.role?(c(),k(o,{key:0,loading:e.streaming},{default:w((()=>[C(s,{size:32,class:p("assistant"===e.role?"bg-primary p-2":"bg-success")},{default:w((()=>{var l;return[_("img",{src:null!=(l=D[e.role])?l:""},null,8,re)]})),_:2},1032,["class"])])),_:2},1032,["loading"])):E("",!0),L((c(),u("small",ie,[S(v(e.date),1)])),[[se,e.date]])],2),e.streaming&&"assistant"===e.role?(c(),u("small",ce," 正在输入... ")):E("",!0),_("section",{class:p(["message-item__content",{"is-user":"user"===e.role,"is-error":e.isError},{"is-assistant":"assistant"===e.role}])},["assistant"!==e.role||(null==e?void 0:e.streaming)?E("",!0):(c(),u("div",ue,[C(x,{"content-class":"text-xs",content:"复制",position:"top"},{default:w((()=>[C(g,{onClick:l=>(ae({text:e.content}),m.clear(),void m.success("复制成功")),size:"mini",shape:"circle",type:"text"},{default:w((()=>[C(i,{class:"text-base"})])),_:2},1032,["onClick"])])),_:2},1024),C(x,{"content-class":"text-xs",content:"重试",position:"top"},{default:w((()=>[C(g,{onClick:e=>(e=>{r.value=!1,a.messageRetryAction(e,(()=>{var e,l,a,s;r.value||null==(s=G.value)||s.scrollTop((null!=(a=null==(l=null==(e=G.value)?void 0:e.containerRef)?void 0:l.scrollHeight)?a:0)-200)}))})(l),size:"mini",shape:"circle",type:"text"},{default:w((()=>[C(y,{class:"text-base"})])),_:2},1032,["onClick"])])),_:2},1024)])),(null==e?void 0:e.streaming)&&!e.content?(c(),k(W,{key:1,animation:"",class:"rounded overflow-hidden"},{default:w((()=>[C(f)])),_:1})):(c(),k(I,{key:e.content,text:d(j)(e.content)?e.content:"",error:e.isError,inversion:"assistant"!==e.role},null,8,["text","error","inversion"]))],2)],2)))),128))]})),_:1},512),C(U,{class:"m-0"}),(null==(e=d(t))?void 0:e.id)?(c(),u("footer",de,[d(a).fetching?(c(),k(g,{key:0,onClick:l[0]||(l[0]=e=>{var l;return null==(l=d(a).abortController)?void 0:l.abort()}),shape:"round",status:"danger",class:"stop-receiving"},{default:w((()=>[C(Y,{class:"text-lg mr-2"}),S(" 停止 ")])),_:1})):E("",!0),C(N,{readonly:d(a).fetching,modelValue:d(O),"onUpdate:modelValue":l[1]||(l[1]=e=>$(O)?O.value=e:null),onKeypress:ee,class:"bg-white dark:bg-dark-900 border-none","auto-size":{minRows:d(n)?1:3,maxRows:6},placeholder:d(ve)},null,8,["readonly","modelValue","auto-size","placeholder"]),d(n)&&d(O).trim().length>0?(c(),k(g,{key:1,size:"medium",class:"rounded text-xs",onClick:P,type:"primary"},{default:w((()=>[S(" 发送 ")])),_:1})):E("",!0)])):E("",!0)])]})),_:1})}}});export{ve as default};
