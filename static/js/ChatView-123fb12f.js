import{c as e,r as l,ag as a,ah as s,ai as t,aj as n,m as o,am as r,an as i,e as c,p as u,u as d,t as v,a0 as p,o as g,l as m,b as x,w as f,a as y,n as h,ao as b,f as k,g as w,h as _,i as C,v as R,z as T,F as E,j as S,k as $,B as q,L as H,J as z,ap as L,aq as j,ar as B,as as A,S as M,y as K}from"./.pnpm-22857cbc.js";import{a as Q,u as V,d as D,e as F,f as I,S as J,b as U,c as W}from"./index-03ab0723.js";const Y={key:0,class:"dark:text-white w-[4px] h-[20px] block animate-blink"},G={key:0},N=["innerHTML"],O=["textContent"],P=["textContent"],X=Q(e({__name:"MessageContent",props:{inversion:{type:Boolean},error:{type:Boolean},text:null,loading:{type:Boolean},asRawText:{type:Boolean}},setup(e){const g=e,m=l(),x=new a({linkify:!0,highlight(e,l){if(!(!l||!s.getLanguage(l))){const a=null!=l?l:"";return h(s.highlight(e,{language:a}).value,a)}return h(s.highlightAuto(e).value,"")}});x.use(t,{attrs:{target:"_blank",rel:"noopener"}}),x.use(n,{blockClass:"katexmath-block rounded-md p-[10px]",errorColor:" #cc0000"});const f=o((()=>["message-content","min-w-[20px]","rounded-md",g.inversion?"text-[#f1f1f1]":"bg-[#e5e6eb]",g.inversion?"text-[]":"dark:bg-[#1e1e20]",g.inversion?"message-request":"message-reply",{"text-red-500":g.error}])),y=o((()=>{var e;const l=(null!=(e=g.text)?e:"").replace(/\n+$/g,"");return g.asRawText||g.inversion?l:x.render(l)}));function h(e,l){return`<pre class="code-block-wrapper"><div class="code-block-header"><span class="code-block-header__lang">${l}</span><span class="code-block-header__copy">复制代码</span></div><code class="hljs code-block-body ${l}">${e}</code></pre>`}return r((()=>{i((()=>{m.value&&s.highlightBlock(m.value)}))})),(l,a)=>(c(),u("div",{class:p(d(f))},[e.loading?(c(),u("span",Y)):(c(),u("div",{key:1,ref_key:"textRef",ref:m,class:"leading-relaxed break-words"},[e.inversion?(c(),u("div",{key:1,class:"whitespace-pre-wrap",textContent:v(d(y))},null,8,P)):(c(),u("div",G,[e.asRawText?(c(),u("div",{key:1,class:"whitespace-pre-wrap",textContent:v(d(y))},null,8,O)):(c(),u("div",{key:0,class:"markdown-body",innerHTML:d(y)},null,8,N))]))],512))],2))}}),[["__scopeId","data-v-65fe8662"]]);function Z(e){const l={origin:!0,...e};let a;a=l.origin?document.createElement("textarea"):document.createElement("input"),a.setAttribute("readonly","readonly"),a.value=l.text,document.body.appendChild(a),a.select(),document.execCommand("copy")&&document.execCommand("copy"),document.body.removeChild(a)}function ee(){function e(){document.querySelectorAll(".code-block-wrapper").forEach((e=>{const l=e.querySelector(".code-block-header__copy"),a=e.querySelector(".code-block-body");l&&a&&l.addEventListener("click",(()=>{var e,l,s;(null==(e=navigator.clipboard)?void 0:e.writeText)?(navigator.clipboard.writeText(null!=(l=a.textContent)?l:""),m.clear(),m.success("复制成功")):(Z({text:null!=(s=a.textContent)?s:"",origin:!0}),m.clear(),m.success("复制成功"))}))}))}e(),g((()=>e())),r((()=>e()))}const le={class:"chat-wrapper"},ae={key:0,class:"flex flex-col items-center justify-center mt-10 gap-y-10 text-center text-gray-600"},se=[_("span",null," 国内最快最好用的gpt站点，网址经常变更，所以使用前一定要记得先加群！！！ ",-1),_("div",{class:"grid grid-cols-2"},[_("div",{class:"flex flex-col items-center gap-y-2 py-2"},[_("img",{class:"max-w-40 w-11/12 border-solid border border-gray-200 p-1",alt:"QQ",src:U}),_("span",{class:""},"QQ群")]),_("div",{class:"flex flex-col items-center gap-y-2 py-2"},[_("img",{class:"max-w-40 w-11/12 border-solid border border-gray-200 p-1",alt:"WeChat",src:W}),_("span",{class:""},"微信群")])],-1)],te=["src"],ne={class:"date-time"},oe={key:0,class:"text-info"},re={key:0,class:"message-item__actions"},ie={class:"chat-footer"},ce=e({__name:"ChatView",setup(e){ee();const a=V(),s=D(),t=o((()=>a.session)),{isMobileScreen:n}=F(),r=l(!1),Q={user:I,assistant:"/static/svg/openai-white-1b79b841.svg"},U=l(),W=l("新的聊天");x((()=>{var e;W.value=(null==(e=a.session)?void 0:e.topic)||"新的聊天"})),f((()=>a.currentChat),(()=>{i((()=>{var e,l,a,s;null==(s=U.value)||s.scrollTop((null!=(a=null==(l=null==(e=U.value)?void 0:e.containerRef)?void 0:l.scrollHeight)?a:0)-200)}))}));const Y=l(""),G=()=>{if(e=Y.value,/^[\s\n\r]*$/.test(e))return m.clear(),void m.error("请输入消息内容");var e;r.value=!1,a.sendMessageAction(Y.value,(e=>{var l,a,s,t;r.value||null==(t=U.value)||t.scrollTop((null!=(s=null==(a=null==(l=U.value)?void 0:l.containerRef)?void 0:a.scrollHeight)?s:0)-200),e&&i((()=>{ee()}))})),Y.value=""},N=e=>{e.deltaY<10&&(r.value=!0)};g((()=>{i((()=>{var e,l,a,s,t;null==(s=U.value)||s.scrollTop((null!=(a=null==(l=null==(e=U.value)?void 0:e.containerRef)?void 0:l.scrollHeight)?a:0)-200),null==(t=U.value)||t.$el.querySelector(".arco-scrollbar-container").addEventListener("wheel",N)}))}));const O=e=>{var l,a,s;((null==(l=null==e?void 0:e.target)?void 0:l.scrollTop)||0)+((null==(a=null==e?void 0:e.target)?void 0:a.offsetHeight)||0)>=((null==(s=null==e?void 0:e.target)?void 0:s.scrollHeight)||0)-70&&(r.value=!1)};y((()=>{var e,l,s;(null==(e=a.abortController)?void 0:e.abort)&&(null==(l=a.abortController)||l.abort()),null==(s=U.value)||s.$el.querySelector(".arco-scrollbar-container").removeEventListener("wheel",N)}));const P=e=>{n.value||"Enter"!==e.key||e.shiftKey||(e.preventDefault(),G())},ce=o((()=>{let e="请输入您的消息";return n.value||(e+=`，${s.submitKey} 发送，${s.submitKey===J.Enter?J.ShiftEnter:J.Enter} 换行`),e}));return(e,l)=>{const s=A,o=M,i=h("icon-copy"),g=q,x=K,f=h("icon-sync"),y=X,V=H,D=z,F=h("icon-record-stop"),I=L,J=j,W=b("date-time");return c(),k(J,{class:"flex flex-col flex-1 overflow-hidden"},{default:w((()=>[_("main",le,[C(V,{ref_key:"scrollbarRef",ref:U,onScroll:O,"outer-style":"flex: 1; overflow: hidden; ",class:"overflow-y-auto h-full p-4 flex flex-col gap-y-2 pb-20"},{default:w((()=>{var e,l,h,b;return[(null==(l=null==(e=d(t))?void 0:e.messages)?void 0:l.length)?R("",!0):(c(),u("div",ae,se)),(c(!0),u(E,null,T(null!=(b=null==(h=d(t))?void 0:h.messages)?b:[],((e,l)=>(c(),u("section",{key:e.id,class:p(["message-item",["assistant"===e.role?"is-reply":"is-request",d(n)?"max-w-full":"max-w-4/5"]])},[_("div",{class:p(["flex items-center gap-x-4",{"flex-row-reverse":"assistant"!==e.role}])},["assistant"===e.role?(c(),k(o,{key:0,loading:e.streaming},{default:w((()=>[C(s,{size:32,class:p("assistant"===e.role?"bg-primary p-2":"bg-success")},{default:w((()=>{var l;return[_("img",{src:null!=(l=Q[e.role])?l:""},null,8,te)]})),_:2},1032,["class"])])),_:2},1032,["loading"])):R("",!0),B((c(),u("small",ne,[S(v(e.date),1)])),[[W,e.date]])],2),e.streaming&&"assistant"===e.role?(c(),u("small",oe," 正在输入... ")):R("",!0),_("section",{class:p(["message-item__content",{"is-user":"user"===e.role},{"is-assistant":"assistant"===e.role}])},["assistant"===e.role?(c(),u("div",re,[C(x,{"content-class":"text-xs",content:"复制",position:"top"},{default:w((()=>[C(g,{onClick:l=>(Z({text:e.content}),m.clear(),void m.success("复制成功")),size:"mini",shape:"circle",type:"text"},{default:w((()=>[C(i,{class:"text-base"})])),_:2},1032,["onClick"])])),_:2},1024),C(x,{"content-class":"text-xs",content:"重试",position:"top"},{default:w((()=>[C(g,{onClick:e=>(e=>{r.value=!1,a.messageRetryAction(e,(()=>{var e,l,a,s;r.value||null==(s=U.value)||s.scrollTop((null!=(a=null==(l=null==(e=U.value)?void 0:e.containerRef)?void 0:l.scrollHeight)?a:0)-200)}))})(l),size:"mini",shape:"circle",type:"text"},{default:w((()=>[C(f,{class:"text-base"})])),_:2},1032,["onClick"])])),_:2},1024)])):R("",!0),(c(),k(y,{key:e.content,text:e.content,inversion:"assistant"!==e.role},null,8,["text","inversion"]))],2)],2)))),128))]})),_:1},512),C(D,{class:"m-0"}),_("footer",ie,[d(a).fetching?(c(),k(g,{key:0,onClick:l[0]||(l[0]=e=>{var l;return null==(l=d(a).abortController)?void 0:l.abort()}),shape:"round",status:"danger",class:"stop-receiving"},{default:w((()=>[C(F,{class:"text-lg mr-2"}),S(" 停止 ")])),_:1})):R("",!0),C(I,{readonly:d(a).fetching,modelValue:d(Y),"onUpdate:modelValue":l[1]||(l[1]=e=>$(Y)?Y.value=e:null),onKeypress:P,class:"bg-white dark:bg-dark-900 border-none","auto-size":{minRows:d(n)?1:3,maxRows:6},placeholder:d(ce)},null,8,["readonly","modelValue","auto-size","placeholder"]),d(n)&&d(Y).trim().length>0?(c(),k(g,{key:1,size:"medium",class:"rounded text-xs",onClick:G,type:"primary"},{default:w((()=>[S(" 发送 ")])),_:1})):R("",!0)])])])),_:1})}}});export{ce as default};