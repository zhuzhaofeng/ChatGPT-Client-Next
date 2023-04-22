import{c as e,r as l,ag as t,ah as a,ai as s,aj as n,e as o,ak as r,al as i,g as c,l as u,u as d,t as v,n as p,f as m,j as x,i as g,k as f,v as h,F as b,am as y,M as k,B as w,W as _,o as C,b as T,w as $,a as E,an as R,m as S,J as q,h as H,y as j,ao as z,a5 as A,K as B,N as L,ap as M,aq as K,ar as V,as as U,S as D,T as W}from"./.pnpm-689552e7.js";import{_ as F,u as G,b as I,c as J,d as N,S as O}from"./index-8dd6fb11.js";const P={key:0,class:"dark:text-white w-[4px] h-[20px] block animate-blink"},Y={key:0},Q=["innerHTML"],X=["textContent"],Z=["textContent"],ee=F(e({__name:"MessageContent",props:{inversion:{type:Boolean},error:{type:Boolean},text:null,loading:{type:Boolean},asRawText:{type:Boolean}},setup(e){const m=e,x=l(),g=new t({linkify:!0,highlight(e,l){if(!(!l||!a.getLanguage(l))){const t=null!=l?l:"";return b(a.highlight(e,{language:t}).value,t)}return b(a.highlightAuto(e).value,"")}});g.use(s,{attrs:{target:"_blank",rel:"noopener"}}),g.use(n,{blockClass:"katexmath-block rounded-md p-[10px]",errorColor:" #cc0000"});const f=o((()=>["message-content","min-w-[20px]","rounded-md",m.inversion?"text-[#f1f1f1]":"bg-[#e5e6eb]",m.inversion?"text-[]":"dark:bg-[#1e1e20]",m.inversion?"message-request":"message-reply",{"text-red-500":m.error}])),h=o((()=>{var e;const l=(null!=(e=m.text)?e:"").replace(/\n+$/g,"");return m.asRawText||m.inversion?l:g.render(l)}));function b(e,l){return`<pre class="code-block-wrapper"><div class="code-block-header"><span class="code-block-header__lang">${l}</span><span class="code-block-header__copy">复制代码</span></div><code class="hljs code-block-body ${l}">${e}</code></pre>`}return r((()=>{i((()=>{x.value&&a.highlightBlock(x.value)}))})),(l,t)=>(c(),u("div",{class:p(d(f))},[e.loading?(c(),u("span",P)):(c(),u("div",{key:1,ref_key:"textRef",ref:x,class:"leading-relaxed break-words"},[e.inversion?(c(),u("div",{key:1,class:"whitespace-pre-wrap",textContent:v(d(h))},null,8,Z)):(c(),u("div",Y,[e.asRawText?(c(),u("div",{key:1,class:"whitespace-pre-wrap",textContent:v(d(h))},null,8,X)):(c(),u("div",{key:0,class:"markdown-body",innerHTML:d(h)},null,8,Q))]))],512))],2))}}),[["__scopeId","data-v-cf02b953"]]);function le(e){const l={origin:!0,...e};let t;t=l.origin?document.createElement("textarea"):document.createElement("input"),t.setAttribute("readonly","readonly"),t.value=l.text,document.body.appendChild(t),t.select(),document.execCommand("copy")&&document.execCommand("copy"),document.body.removeChild(t)}const te={class:"break-words break-all whitespace-pre-wrap"},ae=e({__name:"DownloadSession",setup(e){const t=l(!1),a=G(),s=o((()=>{var e;return`导出聊天: ${(null==(e=a.session)?void 0:e.topic)||""}`})),n=o((()=>{var e;const{session:l}=a,t=(null!=(e=null==l?void 0:l.messages)?e:[]).map((({content:e,role:l})=>`\n## 来自${"user"===l?"您":"GPT"}的消息: \n${e}`));return(null==l?void 0:l.topic)&&t.unshift(`# ${l.topic}`),t.join("\n")})),r=()=>{const{session:e}=a;let l=new Blob([n.value],{type:"text/plain;charset=utf-8"});y.saveAs(l,(null==e?void 0:e.topic)?`${e.topic}.md`:"新的聊天.md")},i=()=>{le({text:n.value}),k.clear(),k.success("复制成功")};return(e,l)=>{const a=m("icon-share-external"),o=w,v=ee,p=_;return c(),u(b,null,[x(o,{onClick:l[0]||(l[0]=e=>t.value=!0),size:"small",type:"text"},{default:g((()=>[x(a)])),_:1}),x(p,{visible:d(t),"onUpdate:visible":l[1]||(l[1]=e=>h(t)?t.value=e:null),width:"90%",title:d(s),class:"message-drawer","cancel-text":"复制文本","ok-text":"导出文件(.md)","drawer-style":{maxWidth:"500px"},onOk:r,onCancel:i},{default:g((()=>[f("div",te,[x(v,{"as-raw-text":"",class:"p-3 bg-[#fafafa] w-full hljs",text:d(n)},null,8,["text"])])])),_:1},8,["visible","title"])],64)}}});function se(){function e(){document.querySelectorAll(".code-block-wrapper").forEach((e=>{const l=e.querySelector(".code-block-header__copy"),t=e.querySelector(".code-block-body");l&&t&&l.addEventListener("click",(()=>{var e,l,a;(null==(e=navigator.clipboard)?void 0:e.writeText)?(navigator.clipboard.writeText(null!=(l=t.textContent)?l:""),k.clear(),k.success("复制成功")):(le({text:null!=(a=t.textContent)?a:"",origin:!0}),k.clear(),k.success("复制成功"))}))}))}e(),C((()=>e())),r((()=>e()))}const ne={key:0,class:"flex-1"},oe={class:"chat-wrapper"},re=["src"],ie={class:"date-time"},ce={key:0,class:"text-info"},ue={key:0,class:"message-item__actions"},de={class:"chat-footer"},ve=e({__name:"ChatView",setup(e){se();const t=G(),a=I(),s=o((()=>t.session)),{isMobileScreen:n}=J(),r=l(!1),y={user:N,assistant:"/static/svg/openai-white-1b79b841.svg"},_=l(),F=l("新的聊天");T((()=>{var e;F.value=(null==(e=t.session)?void 0:e.topic)||"新的聊天"})),$((()=>t.currentChat),(()=>{i((()=>{var e,l,t,a;null==(a=_.value)||a.scrollTop((null!=(t=null==(l=null==(e=_.value)?void 0:e.containerRef)?void 0:l.scrollHeight)?t:0)-200)}))}));const P=l(""),Y=()=>{if(e=P.value,/^[\s\n\r]*$/.test(e))return k.clear(),void k.error("请输入消息内容");var e;r.value=!1,t.sendMessageAction(P.value,(e=>{var l,t,a,s;r.value||null==(s=_.value)||s.scrollTop((null!=(a=null==(t=null==(l=_.value)?void 0:l.containerRef)?void 0:t.scrollHeight)?a:0)-200),e&&i((()=>{se()}))})),P.value=""},Q=e=>{e.deltaY<10&&(r.value=!0)};C((()=>{i((()=>{var e,l,t,a,s;null==(a=_.value)||a.scrollTop((null!=(t=null==(l=null==(e=_.value)?void 0:e.containerRef)?void 0:l.scrollHeight)?t:0)-200),null==(s=_.value)||s.$el.querySelector(".arco-scrollbar-container").addEventListener("wheel",Q)}))}));const X=e=>{var l,t,a;((null==(l=null==e?void 0:e.target)?void 0:l.scrollTop)||0)+((null==(t=null==e?void 0:e.target)?void 0:t.offsetHeight)||0)>=((null==(a=null==e?void 0:e.target)?void 0:a.scrollHeight)||0)-70&&(r.value=!1)};E((()=>{var e,l,a;(null==(e=t.abortController)?void 0:e.abort)&&(null==(l=t.abortController)||l.abort()),null==(a=_.value)||a.$el.querySelector(".arco-scrollbar-container").removeEventListener("wheel",Q)}));const Z=()=>{t.handleChangeSessionTopicAction(F.value)},te=e=>{n.value||"Enter"!==e.key||e.shiftKey||(e.preventDefault(),Y())},ve=o((()=>{let e="请输入您的消息";return n.value||(e+=`，${a.submitKey} 发送，${a.submitKey===O.Enter?O.ShiftEnter:O.Enter} 换行`),e}));return(e,l)=>{const a=z,o=ae,i=A,C=B,T=U,$=D,E=m("icon-copy"),G=w,I=W,J=m("icon-sync"),N=ee,O=L,Q=m("icon-record-stop"),se=M,pe=K,me=R("date-time");return c(),u(b,null,[x(i,{class:"h-14 px-4 flex items-center gap-x-3 bg-white dark:bg-dark"},{default:g((()=>{var e,t;return[f("div",{class:p(["flex flex-col editable-title__wrapper",{"is-mobile":d(n)}])},[x(a,{class:"m-0",editable:"",editText:d(F),"onUpdate:editText":l[0]||(l[0]=e=>h(F)?F.value=e:null),onEditEnd:Z},{default:g((()=>[S(v(d(F)),1)])),_:1},8,["editText"])],2),d(n)?q("",!0):(c(),u("i",ne)),(null==(t=null==(e=d(s))?void 0:e.messages)?void 0:t.length)?(c(),H(o,{key:1})):q("",!0)]})),_:1}),x(C,{class:"m-0"}),x(pe,{class:"flex flex-col flex-1 overflow-hidden"},{default:g((()=>[f("main",oe,[x(O,{ref_key:"scrollbarRef",ref:_,onScroll:X,"outer-style":"flex: 1; overflow: hidden; ",class:"overflow-y-auto h-full p-4 flex flex-col gap-y-2 pb-20"},{default:g((()=>{var e,l;return[(c(!0),u(b,null,j(null!=(l=null==(e=d(s))?void 0:e.messages)?l:[],((e,l)=>(c(),u("section",{key:e.id,class:p(["message-item",["assistant"===e.role?"is-reply":"is-request",d(n)?"max-w-full":"max-w-4/5"]])},[f("div",{class:p(["flex items-center gap-x-4",{"flex-row-reverse":"assistant"!==e.role}])},[x($,{loading:e.streaming&&"assistant"===e.role},{default:g((()=>[x(T,{size:32,class:p("assistant"===e.role?"bg-primary p-2":"bg-success")},{default:g((()=>{var l;return[f("img",{src:null!=(l=y[e.role])?l:""},null,8,re)]})),_:2},1032,["class"])])),_:2},1032,["loading"]),V((c(),u("small",ie,[S(v(e.date),1)])),[[me,e.date]])],2),e.streaming&&"assistant"===e.role?(c(),u("small",ce," 正在输入... ")):q("",!0),f("section",{class:p(["message-item__content",{"is-user":"user"===e.role},{"is-assistant":"assistant"===e.role}])},["assistant"===e.role?(c(),u("div",ue,[x(I,{"content-class":"text-xs",content:"复制",position:"top"},{default:g((()=>[x(G,{onClick:l=>(le({text:e.content}),k.clear(),void k.success("复制成功")),size:"mini",shape:"circle",type:"text"},{default:g((()=>[x(E,{class:"text-base"})])),_:2},1032,["onClick"])])),_:2},1024),x(I,{"content-class":"text-xs",content:"重试",position:"top"},{default:g((()=>[x(G,{onClick:e=>(e=>{r.value=!1,t.messageRetryAction(e,(()=>{var e,l,t,a;r.value||null==(a=_.value)||a.scrollTop((null!=(t=null==(l=null==(e=_.value)?void 0:e.containerRef)?void 0:l.scrollHeight)?t:0)-200)}))})(l),size:"mini",shape:"circle",type:"text"},{default:g((()=>[x(J,{class:"text-base"})])),_:2},1032,["onClick"])])),_:2},1024)])):q("",!0),(c(),H(N,{key:e.content,text:e.content,inversion:"assistant"!==e.role},null,8,["text","inversion"]))],2)],2)))),128))]})),_:1},512),x(C,{class:"m-0"}),f("footer",de,[d(t).fetching?(c(),H(G,{key:0,onClick:l[1]||(l[1]=e=>{var l;return null==(l=d(t).abortController)?void 0:l.abort()}),shape:"round",status:"danger",class:"stop-receiving"},{default:g((()=>[x(Q,{class:"text-lg mr-2"}),S(" 停止 ")])),_:1})):q("",!0),x(se,{modelValue:d(P),"onUpdate:modelValue":l[2]||(l[2]=e=>h(P)?P.value=e:null),onKeypress:te,class:"bg-white dark:bg-dark-900 border-none","auto-size":{minRows:d(n)?1:3,maxRows:6},placeholder:d(ve)},null,8,["modelValue","auto-size","placeholder"]),d(n)&&d(P).trim().length>0?(c(),H(G,{key:1,size:"medium",class:"rounded text-xs",onClick:Y,type:"primary"},{default:g((()=>[S(" 发送 ")])),_:1})):q("",!0)])])])),_:1})],64)}}});export{ve as default};
