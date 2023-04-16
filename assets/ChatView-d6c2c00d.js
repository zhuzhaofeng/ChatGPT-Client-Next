import{g as ie,R as Re,I as Je,h as Ye,t as ze,i as Ce,u as Qe,r as g,j as E,k as Xe,l as ge,m as Ze,n as et,q as te,s as be,v as Ne,x as tt,y as Ke,z as Me,A as ot,C as Te,D as U,o as h,E as S,F,G as nt,H as ne,J as W,b as c,w as B,a as ee,K as ae,L as ke,M as at,N as lt,O as st,P as qe,T as Oe,Q as rt,U as it,V as ut,W as ct,c as re,X as Se,d as Ee,Y as dt,Z as Ie,$ as We,a0 as pt,a1 as ft,a2 as Pe,a3 as Ve,a4 as Le,a5 as vt,a6 as yt,a7 as ht,a8 as z,_ as mt,a9 as oe,aa as gt,ab as Ct,ac as bt,ad as xt,ae as Ae,af as wt,ag as _t,ah as kt,ai as Tt,aj as Et,ak as St,B as $t,S as Bt,al as Rt,am as It,an as me,ao as Pt,ap as zt}from"./index-47f78a3b.js";import{M as Nt,H as _e,m as Ot,a as Lt}from"./index-b7903ef7.js";const Mt=["border-width","box-sizing","font-family","font-weight","font-size","font-variant","letter-spacing","line-height","padding-top","padding-bottom","padding-left","padding-right","text-indent","text-rendering","text-transform","white-space","overflow-wrap","width"],Vt=e=>{const t={};return Mt.forEach(o=>{t[o]=e.getPropertyValue(o)}),t},At=ie({name:"Textarea",components:{ResizeObserver:Re,IconHover:Je,IconClose:Ye},inheritAttrs:!1,props:{modelValue:String,defaultValue:{type:String,default:""},placeholder:String,disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},maxLength:{type:[Number,Object],default:0},showWordLimit:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},autoSize:{type:[Boolean,Object],default:!1},wordLength:{type:Function},wordSlice:{type:Function}},emits:{"update:modelValue":e=>!0,input:(e,t)=>!0,change:(e,t)=>!0,clear:e=>!0,focus:e=>!0,blur:e=>!0},setup(e,{emit:t,attrs:o}){const{disabled:i,error:f,modelValue:p}=ze(e),r=Ce("textarea"),{mergedDisabled:s,mergedError:v,eventHandlers:a}=Qe({disabled:i,error:f}),m=g(),P=g(),K=g(),A=g(),H=g(e.defaultValue),C=E(()=>{var n;return(n=p.value)!=null?n:H.value}),[R,N]=Xe(m);ge(p,n=>{(Ze(n)||et(n))&&(H.value="")});const l=E(()=>te(e.maxLength)&&!!e.maxLength.errorOnly),u=E(()=>te(e.maxLength)?e.maxLength.length:e.maxLength),w=n=>{var y;return tt(e.wordLength)?e.wordLength(n):(y=n.length)!=null?y:0},_=E(()=>w(C.value)),O=E(()=>v.value||!!(u.value&&l.value&&_.value>u.value)),I=g(!1),L=g(!1),le=E(()=>e.allowClear&&!s.value&&C.value),q=g(!1),M=g(""),Y=()=>{R(),Te(()=>{m.value&&C.value!==m.value.value&&(m.value.value=C.value,N())})},$=(n,y=!0)=>{var x,b;u.value&&!l.value&&w(n)>u.value&&(n=(b=(x=e.wordSlice)==null?void 0:x.call(e,n,u.value))!=null?b:n.slice(0,u.value)),H.value=n,y&&t("update:modelValue",n),Y()};let G=C.value;const se=(n,y)=>{var x,b;n!==G&&(G=n,t("change",n,y),(b=(x=a.value)==null?void 0:x.onChange)==null||b.call(x,y))},ue=n=>{var y,x;L.value=!0,G=C.value,t("focus",n),(x=(y=a.value)==null?void 0:y.onFocus)==null||x.call(y,n)},ve=n=>{var y,x;L.value=!1,t("blur",n),(x=(y=a.value)==null?void 0:y.onBlur)==null||x.call(y,n),se(C.value,n)},Q=n=>{var y,x;const{value:b}=n.target;if(n.type==="compositionend"){if(q.value=!1,M.value="",u.value&&!l.value&&C.value.length>=u.value&&w(b)>u.value){Y();return}t("input",b,n),$(b),(x=(y=a.value)==null?void 0:y.onInput)==null||x.call(y,n)}else q.value=!0},X=n=>{var y,x;const{value:b}=n.target;if(q.value)M.value=b;else{if(u.value&&!l.value&&C.value.length>=u.value&&w(b)>u.value&&n.inputType==="insertText"){Y();return}t("input",b,n),$(b),(x=(y=a.value)==null?void 0:y.onInput)==null||x.call(y,n)}},ce=n=>{$(""),se("",n),t("clear",n)};ge(p,n=>{n!==C.value&&$(n!=null?n:"",!1)});const V=n=>Ke(o,Me),j=n=>ot(o,Me),k=E(()=>[`${r}-wrapper`,{[`${r}-focus`]:L.value,[`${r}-disabled`]:s.value,[`${r}-error`]:O.value,[`${r}-scroll`]:I.value}]);let de;const d=g(0),D=g(0),ye=E(()=>!te(e.autoSize)||!e.autoSize.minRows?0:e.autoSize.minRows*d.value+D.value),he=E(()=>!te(e.autoSize)||!e.autoSize.maxRows?0:e.autoSize.maxRows*d.value+D.value),pe=()=>{const n=Vt(de);d.value=Number.parseInt(n["line-height"]||0,10),D.value=Number.parseInt(n["border-width"]||0,10)*2+Number.parseInt(n["padding-top"]||0,10)+Number.parseInt(n["padding-bottom"]||0,10),A.value=n,Te(()=>{var y;const x=(y=K.value)==null?void 0:y.offsetHeight;let b=x!=null?x:0,J="hidden";ye.value&&b<ye.value&&(b=ye.value),he.value&&b>he.value&&(b=he.value,J="auto"),P.value={height:`${b}px`,resize:"none",overflow:J}})};be(()=>{m.value&&(de=window.getComputedStyle(m.value),e.autoSize&&pe()),Z()});const xe=()=>{e.autoSize&&K.value&&pe(),Z()},we=n=>{m.value&&n.target!==m.value&&(n.preventDefault(),m.value.focus())},Z=()=>{m.value&&(m.value.scrollHeight>m.value.offsetHeight?I.value||(I.value=!0):I.value&&(I.value=!1))};return ge(C,()=>{e.autoSize&&K.value&&pe(),Z()}),{prefixCls:r,wrapperCls:k,textareaRef:m,textareaStyle:P,mirrorRef:K,mirrorStyle:A,computedValue:C,showClearBtn:le,valueLength:_,computedMaxLength:u,mergedDisabled:s,getWrapperAttrs:V,getTextareaAttrs:j,handleInput:X,handleFocus:ue,handleBlur:ve,handleComposition:Q,handleClear:ce,handleResize:xe,handleMousedown:we}},methods:{focus(){var e;(e=this.$refs.textareaRef)==null||e.focus()},blur(){var e;(e=this.$refs.textareaRef)==null||e.blur()}}}),Ht=["disabled","value","placeholder"];function jt(e,t,o,i,f,p){const r=U("resize-observer"),s=U("icon-close"),v=U("icon-hover");return h(),S("div",ae(e.getWrapperAttrs(e.$attrs),{class:e.wrapperCls,onMousedown:t[7]||(t[7]=(...a)=>e.handleMousedown&&e.handleMousedown(...a))}),[e.autoSize?(h(),S("div",{key:0,ref:"mirrorRef",class:F(`${e.prefixCls}-mirror`),style:nt(e.mirrorStyle)},ne(`${e.computedValue}
`),7)):W("v-if",!0),c(r,{onResize:e.handleResize},{default:B(()=>[ee("textarea",ae({ref:"textareaRef"},e.getTextareaAttrs(e.$attrs),{disabled:e.mergedDisabled,class:e.prefixCls,style:e.textareaStyle,value:e.computedValue,placeholder:e.placeholder,onInput:t[0]||(t[0]=(...a)=>e.handleInput&&e.handleInput(...a)),onFocus:t[1]||(t[1]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onBlur:t[2]||(t[2]=(...a)=>e.handleBlur&&e.handleBlur(...a)),onCompositionstart:t[3]||(t[3]=(...a)=>e.handleComposition&&e.handleComposition(...a)),onCompositionupdate:t[4]||(t[4]=(...a)=>e.handleComposition&&e.handleComposition(...a)),onCompositionend:t[5]||(t[5]=(...a)=>e.handleComposition&&e.handleComposition(...a))}),null,16,Ht)]),_:1},8,["onResize"]),ke(e.$slots,"suffix"),e.computedMaxLength&&e.showWordLimit?(h(),S("div",{key:1,class:F(`${e.prefixCls}-word-limit`)},ne(e.valueLength)+"/"+ne(e.computedMaxLength),3)):W("v-if",!0),e.showClearBtn?(h(),S("div",{key:2,class:F(`${e.prefixCls}-clear-btn`),onClick:t[6]||(t[6]=(...a)=>e.handleClear&&e.handleClear(...a))},[c(v,null,{default:B(()=>[c(s)]),_:1})],2)):W("v-if",!0)],16)}var $e=Ne(At,[["render",jt]]);const Dt=Object.assign($e,{install:(e,t)=>{at(e,t);const o=lt(t);e.component(o+$e.name,$e)}}),Ft=ie({name:"TypographyEditContent",components:{Input:st},props:{text:{type:String,required:!0}},emits:["change","end","update:text"],setup(e,{emit:t}){const i=[`${Ce("typography")}-edit-content`],f=g();function p(s){t("update:text",s),t("change",s)}function r(){t("end")}return be(()=>{if(!f.value||!f.value.$el)return;const s=f.value.$el.querySelector("input");if(!s)return;s.focus&&s.focus();const{length:v}=s.value;s.setSelectionRange(v,v)}),{classNames:i,inputRef:f,onBlur:r,onChange:p,onEnd:r}}});function Kt(e,t,o,i,f,p){const r=U("Input");return h(),S("div",{class:F(e.classNames)},[c(r,{ref:"inputRef","auto-size":"","model-value":e.text,onBlur:e.onBlur,onInput:e.onChange,onKeydown:qe(e.onEnd,["enter"])},null,8,["model-value","onBlur","onInput","onKeydown"])],2)}var qt=Ne(Ft,[["render",Kt]]);const Wt=ie({name:"TypographyOperations",components:{Tooltip:Oe,IconCheckCircleFill:rt,IconCopy:it,IconEdit:ut},props:{editable:Boolean,copyable:Boolean,expandable:Boolean,isCopied:Boolean,isEllipsis:Boolean,expanded:Boolean,forceRenderExpand:Boolean,editTooltipProps:Object,copyTooltipProps:Object},emits:{edit:()=>!0,copy:()=>!0,expand:()=>!0},setup(e,{emit:t}){const o=Ce("typography"),i=E(()=>e.forceRenderExpand||e.expandable&&e.isEllipsis),{t:f}=ct();return{prefixCls:o,showExpand:i,t:f,onEditClick(){t("edit")},onCopyClick(){t("copy")},onExpandClick(){t("expand")}}}});function Ut(e,t,o,i,f,p){const r=U("IconEdit"),s=U("Tooltip"),v=U("IconCheckCircleFill"),a=U("IconCopy");return h(),S(Ie,null,[e.editable?(h(),re(s,ae({key:0,content:e.t("typography.edit")},e.editTooltipProps),{default:B(()=>[ee("span",{class:F(`${e.prefixCls}-operation-edit`),onClick:t[0]||(t[0]=Se((...m)=>e.onEditClick&&e.onEditClick(...m),["stop"]))},[c(r)],2)]),_:1},16,["content"])):W("v-if",!0),e.copyable?(h(),re(s,dt(ae({key:1},e.copyTooltipProps)),{content:B(()=>[ke(e.$slots,"copy-tooltip",{copied:e.isCopied},()=>[Ee(ne(e.isCopied?e.t("typography.copied"):e.t("typography.copy")),1)])]),default:B(()=>[ee("span",{class:F({[`${e.prefixCls}-operation-copied`]:e.isCopied,[`${e.prefixCls}-operation-copy`]:!e.isCopied}),onClick:t[1]||(t[1]=Se((...m)=>e.onCopyClick&&e.onCopyClick(...m),["stop"]))},[ke(e.$slots,"copy-icon",{copied:e.isCopied},()=>[e.isCopied?(h(),re(v,{key:0})):(h(),re(a,{key:1}))])],2)]),_:3},16)):W("v-if",!0),e.showExpand?(h(),S("a",{key:2,class:F(`${e.prefixCls}-operation-expand`),onClick:t[2]||(t[2]=Se((...m)=>e.onExpandClick&&e.onExpandClick(...m),["stop"]))},[ke(e.$slots,"expand-node",{expanded:e.expanded},()=>[Ee(ne(e.expanded?e.t("typography.collapse"):e.t("typography.expand")),1)])],2)):W("v-if",!0)],64)}var He=Ne(Wt,[["render",Ut]]);let T;function Gt(e){return Array.prototype.slice.apply(e).map(o=>`${o}: ${e.getPropertyValue(o)};`).join("")}function Be(e){if(!e)return 0;const t=e.match(/^\d*(\.\d*)?/);return t?Number(t[0]):0}var Jt=(e,t,o,i)=>{T||(T=document.createElement("div"),document.body.appendChild(T));const{rows:f,suffix:p,ellipsisStr:r}=t,s=window.getComputedStyle(e),v=Gt(s),a=Be(s.lineHeight),m=Math.round(a*f+Be(s.paddingTop)+Be(s.paddingBottom));T.setAttribute("style",v),T.setAttribute("aria-hidden","true"),T.style.height="auto",T.style.minHeight="auto",T.style.maxHeight="auto",T.style.position="fixed",T.style.left="0",T.style.top="-99999999px",T.style.zIndex="-200",T.style.whiteSpace="normal";const P=We({render(){return c("span",null,[o])}});P.mount(T);const K=Array.prototype.slice.apply(T.childNodes[0].cloneNode(!0).childNodes);P.unmount(),T.innerHTML="";const A=document.createTextNode(`${r}${p}`);T.appendChild(A),K.forEach(N=>{T.appendChild(N)});const H=document.createTextNode(i);T.insertBefore(H,A);function C(){return T.offsetHeight<=m}if(C())return{ellipsis:!1,text:i};function R(N,l=0,u=i.length,w=0){const _=Math.floor((l+u)/2),O=i.slice(0,_);if(N.textContent=O,l>=u-1)for(let I=u;I>=l;I-=1){const L=i.slice(0,I);if(N.textContent=L,C()||!L)return}C()?R(N,_,u,_):R(N,l,_,w)}return R(H),{text:H.textContent,ellipsis:!0}};const Yt=async e=>{var t;if((t=navigator.clipboard)!=null&&t.writeText)try{await navigator.clipboard.writeText(e);return}catch(p){console.error(p!=null?p:new DOMException("The request is not allowed","NotAllowedError"))}const o=document.createElement("span");o.textContent=e,o.style.whiteSpace="pre",document.body.appendChild(o);const i=window.getSelection(),f=window.document.createRange();i==null||i.removeAllRanges(),f.selectNode(o),i==null||i.addRange(f);try{window.document.execCommand("copy")}catch(p){console.error(`execCommand Error: ${p}`)}i==null||i.removeAllRanges(),window.document.body.removeChild(o)};let fe;function Qt(e){if(!e)return"";fe||(fe=document.createElement("div"),fe.setAttribute("aria-hidden","true"),document.body.appendChild(fe));const t=We({render(){return c("div",null,[e])}});t.mount(fe);const o=fe.innerText;return t.unmount(),o}var Xt=Object.defineProperty,Zt=Object.defineProperties,eo=Object.getOwnPropertyDescriptors,je=Object.getOwnPropertySymbols,to=Object.prototype.hasOwnProperty,oo=Object.prototype.propertyIsEnumerable,De=(e,t,o)=>t in e?Xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,no=(e,t)=>{for(var o in t||(t={}))to.call(t,o)&&De(e,o,t[o]);if(je)for(var o of je(t))oo.call(t,o)&&De(e,o,t[o]);return e},ao=(e,t)=>Zt(e,eo(t));function Ue(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!vt(e)}function lo(e){const{bold:t,mark:o,underline:i,delete:f,code:p}=e,r=[];return t&&r.push("b"),i&&r.push("u"),f&&r.push("del"),p&&r.push("code"),o&&r.push("mark"),r}function Fe(e,t){const{mark:o}=e,i=lo(e),f=te(o)&&o.color?{backgroundColor:o.color}:{};return i.reduce((p,r)=>c(r,r==="mark"?{style:f}:{},Ue(p)?p:{default:()=>[p]}),t)}function so(e){const t=!!e.showTooltip,o=te(e.showTooltip)&&e.showTooltip.type==="popover"?yt:Oe,i=te(e.showTooltip)&&e.showTooltip.props||{};return ao(no({rows:1,suffix:"",ellipsisStr:"...",expandable:!1,css:!1},Ke(e,["showTooltip"])),{showTooltip:t,TooltipComponent:o,tooltipProps:i})}var ro=ie({name:"TypographyBase",inheritAttrs:!1,props:{component:{type:String,required:!0},type:{type:String},bold:{type:Boolean},mark:{type:[Boolean,Object],default:!1},underline:{type:Boolean},delete:{type:Boolean},code:{type:Boolean},disabled:{type:Boolean},editable:{type:Boolean},editing:{type:Boolean,default:void 0},defaultEditing:{type:Boolean},editText:{type:String},copyable:{type:Boolean},copyText:{type:String},copyDelay:{type:Number,default:3e3},ellipsis:{type:[Boolean,Object],default:!1},editTooltipProps:{type:Object},copyTooltipProps:{type:Object}},emits:{editStart:()=>!0,change:e=>!0,"update:editText":e=>!0,editEnd:()=>!0,"update:editing":e=>!0,copy:e=>!0,ellipsis:e=>!0,expand:e=>!0},setup(e,{slots:t,emit:o,attrs:i}){const{editing:f,defaultEditing:p,ellipsis:r,copyable:s,editable:v,copyText:a,editText:m,copyDelay:P,component:K}=ze(e),A=Ce("typography"),H=E(()=>[A,{[`${A}-${e.type}`]:e.type,[`${A}-disabled`]:e.disabled}]),C=g(),R=g(""),[N,l]=pt(p.value,ft({value:f})),u=E(()=>v.value&&N.value);function w(){o("update:editing",!0),o("editStart"),l(!0)}function _(d){o("update:editText",d),o("change",d)}function O(){N.value&&(o("update:editing",!1),o("editEnd"),l(!1))}const I=g(!1);let L=null;function le(){var d;const D=(d=a.value)!=null?d:R.value;Yt(D||""),I.value=!0,o("copy",D),L=setTimeout(()=>{I.value=!1},P.value)}Pe(()=>{L&&clearTimeout(L),L=null});const q=g(!1),M=g(!1),Y=g(""),$=E(()=>so(te(r.value)&&r.value||{}));let G=null;function se(){const d=!M.value;M.value=d,o("expand",d)}function ue(d=!1){return $.value.css?c(He,{editable:v.value,copyable:s.value,expandable:$.value.expandable,isCopied:I.value,isEllipsis:j.value,expanded:M.value,forceRenderExpand:d||M.value,editTooltipProps:e.editTooltipProps,copyTooltipProps:e.copyTooltipProps,onEdit:w,onCopy:le,onExpand:se},{"copy-tooltip":t["copy-tooltip"],"copy-icon":t["copy-icon"],"expand-node":t["expand-node"]}):c(He,{editable:v.value,copyable:s.value,expandable:$.value.expandable,isCopied:I.value,isEllipsis:q.value,expanded:M.value,forceRenderExpand:d,editTooltipProps:e.editTooltipProps,copyTooltipProps:e.copyTooltipProps,onEdit:w,onCopy:le,onExpand:se},{"copy-tooltip":t["copy-tooltip"],"copy-icon":t["copy-icon"],"expand-node":t["expand-node"]})}function ve(){if(!C.value)return;const{ellipsis:d,text:D}=Jt(C.value,$.value,ue(!!$.value.expandable),R.value);q.value!==d&&(q.value=d,$.value.css||o("ellipsis",d)),Y.value!==D&&(Y.value=D||"")}function Q(){r.value&&!M.value&&(Ve(G),G=ht(()=>{ve()}))}Pe(()=>{Ve(G)}),ge(()=>$.value.rows,()=>{Q()}),ge(r,d=>{d?Q():q.value=!1});let X=[];const ce=()=>{if(r.value||s.value||v.value){const d=Qt(X);d!==R.value&&(R.value=d,Q())}};be(ce),Le(ce);const V=g(),j=g(!1),k=()=>{if(C.value&&V.value){const d=V.value.offsetHeight>C.value.offsetHeight;d!==j.value&&(j.value=d,o("ellipsis",d))}},de=E(()=>M.value?{}:{overflow:"hidden","text-overflow":"ellipsis",display:"-webkit-box","-webkit-line-clamp":$.value.rows,"-webkit-box-orient":"vertical"});return()=>{var d,D;if(X=((d=t.default)==null?void 0:d.call(t))||[],u.value){const b=(D=m.value)!=null?D:R.value;return c(qt,{text:b,onChange:J=>{J!==b&&_(J)},onEnd:O},null)}const{suffix:ye,ellipsisStr:he,showTooltip:pe,tooltipProps:xe,TooltipComponent:we}=$.value,Z=q.value&&!M.value,n=Z&&!pe?{title:R.value}:{},y=K.value;if($.value.css){const b=Fe(e,X),J=c(y,ae({class:H.value,ref:C,style:de.value},n,i),{default:()=>[c("span",{ref:V},[b])]});return j.value?c(we,ae(xe,{onResize:()=>k()}),{default:()=>[J],content:()=>R.value}):c(Re,{onResize:()=>{k()}},Ue(J)?J:{default:()=>[J]})}const x=Fe(e,Z?Y.value:X);return c(Re,{onResize:()=>Q()},{default:()=>[c(y,ae({class:H.value,ref:C},n,i),{default:()=>[Z&&pe?c(we,xe,{default:()=>[c("span",null,[x])],content:()=>R.value}):x,Z?he:null,ye,ue()]})]})}}}),io=ie({name:"TypographyParagraph",inheritAttrs:!1,props:{blockquote:{type:Boolean},spacing:{type:String,default:"default"}},setup(e){const{blockquote:t,spacing:o}=ze(e),i=Ce("typography"),f=E(()=>t!=null&&t.value?"blockquote":"div"),p=E(()=>[{[`${i}-spacing-close`]:(o==null?void 0:o.value)==="close"}]);return{component:f,classNames:p}},render(){const{component:e,classNames:t}=this;return c(ro,ae({class:t},this.$attrs,{component:e}),this.$slots)}});const uo={key:0,class:"dark:text-white w-[4px] h-[20px] block animate-blink"},co={key:0},po=["innerHTML"],fo=["textContent"],vo=["textContent"],yo=ie({__name:"MessageContent",props:{inversion:{type:Boolean},error:{type:Boolean},text:null,loading:{type:Boolean},asRawText:{type:Boolean}},setup(e){const t=e,o=g(),i=new Nt({linkify:!0,highlight(v,a){if(!!(a&&_e.getLanguage(a))){const P=a!=null?a:"";return s(_e.highlight(v,{language:P}).value,P)}return s(_e.highlightAuto(v).value,"")}});i.use(Ot,{attrs:{target:"_blank",rel:"noopener"}}),i.use(Lt,{blockClass:"katexmath-block rounded-md p-[10px]",errorColor:" #cc0000"});const f=E(()=>["message-content","min-w-[20px]","rounded-md",t.inversion?"text-[#f1f1f1]":"bg-[#e5e6eb]",t.inversion?"text-[]":"dark:bg-[#1e1e20]",t.inversion?"message-request":"message-reply",{"text-red-500":t.error}]),p=v=>v.replace(/\n+$/g,""),r=E(()=>{var a;const v=p((a=t.text)!=null?a:"");return!t.asRawText&&!t.inversion?i.render(v):v});function s(v,a){return`<pre class="code-block-wrapper"><div class="code-block-header"><span class="code-block-header__lang">${a}</span><span class="code-block-header__copy">复制代码</span></div><code class="hljs code-block-body ${a}">${v}</code></pre>`}return Le(()=>{Te(()=>{o.value&&_e.highlightBlock(o.value)})}),(v,a)=>(h(),S("div",{class:F(z(f))},[e.loading?(h(),S("span",uo)):(h(),S("div",{key:1,ref_key:"textRef",ref:o,class:"leading-relaxed break-words"},[e.inversion?(h(),S("div",{key:1,class:"whitespace-pre-wrap",textContent:ne(z(r))},null,8,vo)):(h(),S("div",co,[e.asRawText?(h(),S("div",{key:1,class:"whitespace-pre-wrap",textContent:ne(z(r))},null,8,fo)):(h(),S("div",{key:0,class:"markdown-body",innerHTML:z(r)},null,8,po))]))],512))],2))}});const ho=mt(yo,[["__scopeId","data-v-cf02b953"]]);const mo="/assets/openai-white-1b79b841.svg";function Ge(e){const t={origin:!0,...e};let o;t.origin?o=document.createElement("textarea"):o=document.createElement("input"),o.setAttribute("readonly","readonly"),o.value=t.text,document.body.appendChild(o),o.select(),document.execCommand("copy")&&document.execCommand("copy"),document.body.removeChild(o)}function go(){function e(){document.querySelectorAll(".code-block-wrapper").forEach(o=>{const i=o.querySelector(".code-block-header__copy"),f=o.querySelector(".code-block-body");i&&f&&i.addEventListener("click",()=>{var p,r,s;(p=navigator.clipboard)!=null&&p.writeText?(navigator.clipboard.writeText((r=f.textContent)!=null?r:""),oe.clear(),oe.success("复制成功")):(Ge({text:(s=f.textContent)!=null?s:"",origin:!0}),oe.clear(),oe.success("复制成功"))})})}be(()=>e()),Le(()=>e())}const Co=e=>/^[\s\n\r]*$/.test(e),bo={key:0,class:"flex-1"},xo={class:"chat-wrapper"},wo=["src"],_o={key:0,class:"text-info"},ko={key:0,class:"message-item__actions"},To={class:"chat-footer"},$o=ie({__name:"ChatView",setup(e){go();const t=gt(),o=Ct(),i=E(()=>t.session),{isMobileScreen:f}=bt(),p=g(!1),r={user:It,assistant:mo},s=g(),v=g("新的聊天");xt(()=>{var l;v.value=((l=t.session)==null?void 0:l.topic)||"新的聊天"});const a=g(""),m=l=>{p.value=!1,t.messageRetryAction(l,()=>{var u,w,_,O;p.value||(O=s.value)==null||O.scrollTop(((_=(w=(u=s.value)==null?void 0:u.containerRef)==null?void 0:w.scrollHeight)!=null?_:0)-200)},u=>{P.value=u})},P=g(),K=()=>{if(Co(a.value)){oe.clear(),oe.error("请输入消息内容");return}p.value=!1,t.sendMessageAction(a.value,()=>{var l,u,w,_;p.value||(_=s.value)==null||_.scrollTop(((w=(u=(l=s.value)==null?void 0:l.containerRef)==null?void 0:u.scrollHeight)!=null?w:0)-200)},l=>{P.value=l}),a.value=""},A=l=>{l.deltaY>0&&(p.value=!0)};be(()=>{Te(()=>{var l,u,w,_,O;(_=s.value)==null||_.scrollTop(((w=(u=(l=s.value)==null?void 0:l.containerRef)==null?void 0:u.scrollHeight)!=null?w:0)-200),(O=s.value)==null||O.$el.addEventListener("wheel",A)})}),Pe(()=>{var l;(l=s.value)==null||l.$el.removeEventListener("wheel",A)});const H=()=>{t.handleChangeSessionTopicAction(v.value)},C=l=>{o.submitKey===me.Enter&&(l.shiftKey&&l.code==="Enter"?(l.preventDefault(),a.value+=`
`):!l.shiftKey&&l.code==="Enter"&&(l.preventDefault(),K())),o.submitKey===me.ShiftEnter&&(!l.shiftKey&&l.code==="Enter"?(l.preventDefault(),a.value+=`
`):l.shiftKey&&l.code==="Enter"&&(l.preventDefault(),K()))},R=l=>{Ge({text:l}),oe.clear(),oe.success("复制成功")},N=E(()=>`请输入您的消息，${o.submitKey} 发送，${o.submitKey===me.Enter?me.ShiftEnter:me.Enter} 换行`);return(l,u)=>{const w=io,_=_t,O=kt,I=Tt,L=Et,le=St,q=Pt,M=zt,Y=U("icon-copy"),$=$t,G=Oe,se=U("icon-sync"),ue=ho,ve=Bt,Q=U("icon-record-stop"),X=Dt,ce=Rt;return h(),S(Ie,null,[c(L,{class:"h-14 px-4 flex items-center bg-white dark:bg-dark"},{default:B(()=>[ee("div",{class:F(["flex flex-col editable-title__wrapper",{"is-mobile":z(f)}])},[c(w,{class:"m-0",editable:"",editText:z(v),"onUpdate:editText":u[0]||(u[0]=V=>Ae(v)?v.value=V:null),onEditEnd:H},{default:B(()=>[Ee(ne(z(v)),1)]),_:1},8,["editText"])],2),z(f)?W("",!0):(h(),S("i",bo)),z(f)?W("",!0):(h(),re(I,{key:1},{default:B(()=>[c(_,{class:"w-44"}),c(O,{class:"w-60"})]),_:1}))]),_:1}),c(le,{class:"m-0"}),c(ce,{class:"flex flex-col flex-1 overflow-hidden"},{default:B(()=>[ee("main",xo,[c(ve,{ref_key:"scrollbarRef",ref:s,"outer-style":"flex: 1; overflow: hidden; ",class:"overflow-y-auto h-full p-4 flex flex-col gap-y-2 pb-20"},{default:B(()=>{var V,j;return[(h(!0),S(Ie,null,wt((j=(V=z(i))==null?void 0:V.messages)!=null?j:[],(k,de)=>(h(),S("section",{key:k.id,class:F(["message-item",[k.role==="assistant"?"is-reply":"is-request"]])},[c(M,{loading:k.streaming&&k.role==="assistant"},{default:B(()=>[c(q,{size:32,class:F(k.role==="assistant"?"bg-primary p-2":"bg-success")},{default:B(()=>{var d;return[ee("img",{src:(d=r[k.role])!=null?d:""},null,8,wo)]}),_:2},1032,["class"])]),_:2},1032,["loading"]),k.streaming&&k.role==="assistant"?(h(),S("small",_o," 正在输入... ")):W("",!0),ee("section",{class:F(["message-item__content",{"is-user":k.role==="user"},{"is-assistant":k.role==="assistant"}])},[k.role==="assistant"?(h(),S("div",ko,[c(G,{"content-class":"text-xs",content:"复制",position:"top"},{default:B(()=>[c($,{onClick:d=>R(k.content),size:"mini",shape:"circle",type:"text"},{default:B(()=>[c(Y,{class:"text-base"})]),_:2},1032,["onClick"])]),_:2},1024),c(G,{"content-class":"text-xs",content:"重试",position:"top"},{default:B(()=>[c($,{onClick:d=>m(de),size:"mini",shape:"circle",type:"text"},{default:B(()=>[c(se,{class:"text-base"})]),_:2},1032,["onClick"])]),_:2},1024)])):W("",!0),(h(),re(ue,{key:k.content,text:k.content,inversion:k.role!=="assistant"},null,8,["text","inversion"]))],2)],2))),128))]}),_:1},512),c(le,{class:"m-0"}),ee("footer",To,[z(t).fetching?(h(),re($,{key:0,onClick:u[1]||(u[1]=V=>{var j;return(j=z(P))==null?void 0:j.abort()}),shape:"round",status:"danger",class:"stop-receiving"},{default:B(()=>[c(Q,{class:"text-lg"}),Ee(" 停止 ")]),_:1})):W("",!0),c(X,{modelValue:z(a),"onUpdate:modelValue":u[2]||(u[2]=V=>Ae(a)?a.value=V:null),onKeydown:qe(C,["enter"]),class:"bg-white dark:bg-dark-900 border-none","auto-size":{minRows:4,maxRows:6},placeholder:z(N)},null,8,["modelValue","onKeydown","placeholder"])])])]),_:1})],64)}}});export{$o as default};
