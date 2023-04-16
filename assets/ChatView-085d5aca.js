import{g as ie,R as Be,I as Je,h as Qe,t as Ie,i as me,u as Xe,r as b,j as S,k as Ye,l as he,m as Ze,n as et,q as ne,s as Te,v as Pe,x as tt,y as Ke,z as Oe,A as ot,C as Re,D as j,o as m,E,F as D,G as nt,H as X,J as L,b as d,w as $,a as A,K as ae,L as _e,M as at,N as lt,O as st,P as qe,T as ze,Q as rt,U as it,V as ut,W as dt,c as Q,X as we,d as ke,Y as ct,Z as xe,$ as We,a0 as pt,a1 as ft,a2 as Ne,a3 as Ve,a4 as Ue,a5 as vt,a6 as yt,a7 as ht,a8 as P,_ as mt,a9 as gt,aa as bt,ab as Ct,ac as _t,ad as Me,ae as He,af as Ae,ag as wt,ah as xt,ai as kt,aj as Tt,ak as St,S as Et,al as $t,am as Se,an as Bt,ao as Rt,ap as It,B as Pt}from"./index-8c81aa3b.js";import{M as zt,H as Ce,m as Ot,a as Nt}from"./index-b7903ef7.js";import{D as Vt,a as Mt}from"./dropdown-button-3ea5ec24.js";const Ht=["border-width","box-sizing","font-family","font-weight","font-size","font-variant","letter-spacing","line-height","padding-top","padding-bottom","padding-left","padding-right","text-indent","text-rendering","text-transform","white-space","overflow-wrap","width"],At=e=>{const t={};return Ht.forEach(o=>{t[o]=e.getPropertyValue(o)}),t},Lt=ie({name:"Textarea",components:{ResizeObserver:Be,IconHover:Je,IconClose:Qe},inheritAttrs:!1,props:{modelValue:String,defaultValue:{type:String,default:""},placeholder:String,disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},maxLength:{type:[Number,Object],default:0},showWordLimit:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},autoSize:{type:[Boolean,Object],default:!1},wordLength:{type:Function},wordSlice:{type:Function}},emits:{"update:modelValue":e=>!0,input:(e,t)=>!0,change:(e,t)=>!0,clear:e=>!0,focus:e=>!0,blur:e=>!0},setup(e,{emit:t,attrs:o}){const{disabled:s,error:f,modelValue:v}=Ie(e),a=me("textarea"),{mergedDisabled:r,mergedError:c,eventHandlers:l}=Xe({disabled:s,error:f}),h=b(),V=b(),W=b(),F=b(),i=b(e.defaultValue),u=S(()=>{var n;return(n=v.value)!=null?n:i.value}),[w,T]=Ye(h);he(v,n=>{(Ze(n)||et(n))&&(i.value="")});const z=S(()=>ne(e.maxLength)&&!!e.maxLength.errorOnly),x=S(()=>ne(e.maxLength)?e.maxLength.length:e.maxLength),K=n=>{var y;return tt(e.wordLength)?e.wordLength(n):(y=n.length)!=null?y:0},M=S(()=>K(u.value)),le=S(()=>c.value||!!(x.value&&z.value&&M.value>x.value)),R=b(!1),O=b(!1),ue=S(()=>e.allowClear&&!r.value&&u.value),q=b(!1),N=b(""),G=()=>{w(),Re(()=>{h.value&&u.value!==h.value.value&&(h.value.value=u.value,T())})},B=(n,y=!0)=>{var C,g;x.value&&!z.value&&K(n)>x.value&&(n=(g=(C=e.wordSlice)==null?void 0:C.call(e,n,x.value))!=null?g:n.slice(0,x.value)),i.value=n,y&&t("update:modelValue",n),G()};let J=u.value;const se=(n,y)=>{var C,g;n!==J&&(J=n,t("change",n,y),(g=(C=l.value)==null?void 0:C.onChange)==null||g.call(C,y))},de=n=>{var y,C;O.value=!0,J=u.value,t("focus",n),(C=(y=l.value)==null?void 0:y.onFocus)==null||C.call(y,n)},fe=n=>{var y,C;O.value=!1,t("blur",n),(C=(y=l.value)==null?void 0:y.onBlur)==null||C.call(y,n),se(u.value,n)},Y=n=>{var y,C;const{value:g}=n.target;if(n.type==="compositionend"){if(q.value=!1,N.value="",x.value&&!z.value&&u.value.length>=x.value&&K(g)>x.value){G();return}t("input",g,n),B(g),(C=(y=l.value)==null?void 0:y.onInput)==null||C.call(y,n)}else q.value=!0},Z=n=>{var y,C;const{value:g}=n.target;if(q.value)N.value=g;else{if(x.value&&!z.value&&u.value.length>=x.value&&K(g)>x.value&&n.inputType==="insertText"){G();return}t("input",g,n),B(g),(C=(y=l.value)==null?void 0:y.onInput)==null||C.call(y,n)}},I=n=>{B(""),se("",n),t("clear",n)};he(v,n=>{n!==u.value&&B(n!=null?n:"",!1)});const ee=n=>Ke(o,Oe),_=n=>ot(o,Oe),te=S(()=>[`${a}-wrapper`,{[`${a}-focus`]:O.value,[`${a}-disabled`]:r.value,[`${a}-error`]:le.value,[`${a}-scroll`]:R.value}]);let re;const p=b(0),H=b(0),ve=S(()=>!ne(e.autoSize)||!e.autoSize.minRows?0:e.autoSize.minRows*p.value+H.value),ye=S(()=>!ne(e.autoSize)||!e.autoSize.maxRows?0:e.autoSize.maxRows*p.value+H.value),ce=()=>{const n=At(re);p.value=Number.parseInt(n["line-height"]||0,10),H.value=Number.parseInt(n["border-width"]||0,10)*2+Number.parseInt(n["padding-top"]||0,10)+Number.parseInt(n["padding-bottom"]||0,10),F.value=n,Re(()=>{var y;const C=(y=W.value)==null?void 0:y.offsetHeight;let g=C!=null?C:0,U="hidden";ve.value&&g<ve.value&&(g=ve.value),ye.value&&g>ye.value&&(g=ye.value,U="auto"),V.value={height:`${g}px`,resize:"none",overflow:U}})};Te(()=>{h.value&&(re=window.getComputedStyle(h.value),e.autoSize&&ce()),oe()});const ge=()=>{e.autoSize&&W.value&&ce(),oe()},be=n=>{h.value&&n.target!==h.value&&(n.preventDefault(),h.value.focus())},oe=()=>{h.value&&(h.value.scrollHeight>h.value.offsetHeight?R.value||(R.value=!0):R.value&&(R.value=!1))};return he(u,()=>{e.autoSize&&W.value&&ce(),oe()}),{prefixCls:a,wrapperCls:te,textareaRef:h,textareaStyle:V,mirrorRef:W,mirrorStyle:F,computedValue:u,showClearBtn:ue,valueLength:M,computedMaxLength:x,mergedDisabled:r,getWrapperAttrs:ee,getTextareaAttrs:_,handleInput:Z,handleFocus:de,handleBlur:fe,handleComposition:Y,handleClear:I,handleResize:ge,handleMousedown:be}},methods:{focus(){var e;(e=this.$refs.textareaRef)==null||e.focus()},blur(){var e;(e=this.$refs.textareaRef)==null||e.blur()}}}),jt=["disabled","value","placeholder"];function Dt(e,t,o,s,f,v){const a=j("resize-observer"),r=j("icon-close"),c=j("icon-hover");return m(),E("div",ae(e.getWrapperAttrs(e.$attrs),{class:e.wrapperCls,onMousedown:t[7]||(t[7]=(...l)=>e.handleMousedown&&e.handleMousedown(...l))}),[e.autoSize?(m(),E("div",{key:0,ref:"mirrorRef",class:D(`${e.prefixCls}-mirror`),style:nt(e.mirrorStyle)},X(`${e.computedValue}
`),7)):L("v-if",!0),d(a,{onResize:e.handleResize},{default:$(()=>[A("textarea",ae({ref:"textareaRef"},e.getTextareaAttrs(e.$attrs),{disabled:e.mergedDisabled,class:e.prefixCls,style:e.textareaStyle,value:e.computedValue,placeholder:e.placeholder,onInput:t[0]||(t[0]=(...l)=>e.handleInput&&e.handleInput(...l)),onFocus:t[1]||(t[1]=(...l)=>e.handleFocus&&e.handleFocus(...l)),onBlur:t[2]||(t[2]=(...l)=>e.handleBlur&&e.handleBlur(...l)),onCompositionstart:t[3]||(t[3]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onCompositionupdate:t[4]||(t[4]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onCompositionend:t[5]||(t[5]=(...l)=>e.handleComposition&&e.handleComposition(...l))}),null,16,jt)]),_:1},8,["onResize"]),_e(e.$slots,"suffix"),e.computedMaxLength&&e.showWordLimit?(m(),E("div",{key:1,class:D(`${e.prefixCls}-word-limit`)},X(e.valueLength)+"/"+X(e.computedMaxLength),3)):L("v-if",!0),e.showClearBtn?(m(),E("div",{key:2,class:D(`${e.prefixCls}-clear-btn`),onClick:t[6]||(t[6]=(...l)=>e.handleClear&&e.handleClear(...l))},[d(c,null,{default:$(()=>[d(r)]),_:1})],2)):L("v-if",!0)],16)}var Ee=Pe(Lt,[["render",Dt]]);const Ft=Object.assign(Ee,{install:(e,t)=>{at(e,t);const o=lt(t);e.component(o+Ee.name,Ee)}}),Kt=ie({name:"TypographyEditContent",components:{Input:st},props:{text:{type:String,required:!0}},emits:["change","end","update:text"],setup(e,{emit:t}){const s=[`${me("typography")}-edit-content`],f=b();function v(r){t("update:text",r),t("change",r)}function a(){t("end")}return Te(()=>{if(!f.value||!f.value.$el)return;const r=f.value.$el.querySelector("input");if(!r)return;r.focus&&r.focus();const{length:c}=r.value;r.setSelectionRange(c,c)}),{classNames:s,inputRef:f,onBlur:a,onChange:v,onEnd:a}}});function qt(e,t,o,s,f,v){const a=j("Input");return m(),E("div",{class:D(e.classNames)},[d(a,{ref:"inputRef","auto-size":"","model-value":e.text,onBlur:e.onBlur,onInput:e.onChange,onKeydown:qe(e.onEnd,["enter"])},null,8,["model-value","onBlur","onInput","onKeydown"])],2)}var Wt=Pe(Kt,[["render",qt]]);const Ut=ie({name:"TypographyOperations",components:{Tooltip:ze,IconCheckCircleFill:rt,IconCopy:it,IconEdit:ut},props:{editable:Boolean,copyable:Boolean,expandable:Boolean,isCopied:Boolean,isEllipsis:Boolean,expanded:Boolean,forceRenderExpand:Boolean,editTooltipProps:Object,copyTooltipProps:Object},emits:{edit:()=>!0,copy:()=>!0,expand:()=>!0},setup(e,{emit:t}){const o=me("typography"),s=S(()=>e.forceRenderExpand||e.expandable&&e.isEllipsis),{t:f}=dt();return{prefixCls:o,showExpand:s,t:f,onEditClick(){t("edit")},onCopyClick(){t("copy")},onExpandClick(){t("expand")}}}});function Gt(e,t,o,s,f,v){const a=j("IconEdit"),r=j("Tooltip"),c=j("IconCheckCircleFill"),l=j("IconCopy");return m(),E(xe,null,[e.editable?(m(),Q(r,ae({key:0,content:e.t("typography.edit")},e.editTooltipProps),{default:$(()=>[A("span",{class:D(`${e.prefixCls}-operation-edit`),onClick:t[0]||(t[0]=we((...h)=>e.onEditClick&&e.onEditClick(...h),["stop"]))},[d(a)],2)]),_:1},16,["content"])):L("v-if",!0),e.copyable?(m(),Q(r,ct(ae({key:1},e.copyTooltipProps)),{content:$(()=>[_e(e.$slots,"copy-tooltip",{copied:e.isCopied},()=>[ke(X(e.isCopied?e.t("typography.copied"):e.t("typography.copy")),1)])]),default:$(()=>[A("span",{class:D({[`${e.prefixCls}-operation-copied`]:e.isCopied,[`${e.prefixCls}-operation-copy`]:!e.isCopied}),onClick:t[1]||(t[1]=we((...h)=>e.onCopyClick&&e.onCopyClick(...h),["stop"]))},[_e(e.$slots,"copy-icon",{copied:e.isCopied},()=>[e.isCopied?(m(),Q(c,{key:0})):(m(),Q(l,{key:1}))])],2)]),_:3},16)):L("v-if",!0),e.showExpand?(m(),E("a",{key:2,class:D(`${e.prefixCls}-operation-expand`),onClick:t[2]||(t[2]=we((...h)=>e.onExpandClick&&e.onExpandClick(...h),["stop"]))},[_e(e.$slots,"expand-node",{expanded:e.expanded},()=>[ke(X(e.expanded?e.t("typography.collapse"):e.t("typography.expand")),1)])],2)):L("v-if",!0)],64)}var Le=Pe(Ut,[["render",Gt]]);let k;function Jt(e){return Array.prototype.slice.apply(e).map(o=>`${o}: ${e.getPropertyValue(o)};`).join("")}function $e(e){if(!e)return 0;const t=e.match(/^\d*(\.\d*)?/);return t?Number(t[0]):0}var Qt=(e,t,o,s)=>{k||(k=document.createElement("div"),document.body.appendChild(k));const{rows:f,suffix:v,ellipsisStr:a}=t,r=window.getComputedStyle(e),c=Jt(r),l=$e(r.lineHeight),h=Math.round(l*f+$e(r.paddingTop)+$e(r.paddingBottom));k.setAttribute("style",c),k.setAttribute("aria-hidden","true"),k.style.height="auto",k.style.minHeight="auto",k.style.maxHeight="auto",k.style.position="fixed",k.style.left="0",k.style.top="-99999999px",k.style.zIndex="-200",k.style.whiteSpace="normal";const V=We({render(){return d("span",null,[o])}});V.mount(k);const W=Array.prototype.slice.apply(k.childNodes[0].cloneNode(!0).childNodes);V.unmount(),k.innerHTML="";const F=document.createTextNode(`${a}${v}`);k.appendChild(F),W.forEach(T=>{k.appendChild(T)});const i=document.createTextNode(s);k.insertBefore(i,F);function u(){return k.offsetHeight<=h}if(u())return{ellipsis:!1,text:s};function w(T,z=0,x=s.length,K=0){const M=Math.floor((z+x)/2),le=s.slice(0,M);if(T.textContent=le,z>=x-1)for(let R=x;R>=z;R-=1){const O=s.slice(0,R);if(T.textContent=O,u()||!O)return}u()?w(T,M,x,M):w(T,z,M,K)}return w(i),{text:i.textContent,ellipsis:!0}};const Xt=async e=>{var t;if((t=navigator.clipboard)!=null&&t.writeText)try{await navigator.clipboard.writeText(e);return}catch(v){console.error(v!=null?v:new DOMException("The request is not allowed","NotAllowedError"))}const o=document.createElement("span");o.textContent=e,o.style.whiteSpace="pre",document.body.appendChild(o);const s=window.getSelection(),f=window.document.createRange();s==null||s.removeAllRanges(),f.selectNode(o),s==null||s.addRange(f);try{window.document.execCommand("copy")}catch(v){console.error(`execCommand Error: ${v}`)}s==null||s.removeAllRanges(),window.document.body.removeChild(o)};let pe;function Yt(e){if(!e)return"";pe||(pe=document.createElement("div"),pe.setAttribute("aria-hidden","true"),document.body.appendChild(pe));const t=We({render(){return d("div",null,[e])}});t.mount(pe);const o=pe.innerText;return t.unmount(),o}var Zt=Object.defineProperty,eo=Object.defineProperties,to=Object.getOwnPropertyDescriptors,je=Object.getOwnPropertySymbols,oo=Object.prototype.hasOwnProperty,no=Object.prototype.propertyIsEnumerable,De=(e,t,o)=>t in e?Zt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,ao=(e,t)=>{for(var o in t||(t={}))oo.call(t,o)&&De(e,o,t[o]);if(je)for(var o of je(t))no.call(t,o)&&De(e,o,t[o]);return e},lo=(e,t)=>eo(e,to(t));function Ge(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!vt(e)}function so(e){const{bold:t,mark:o,underline:s,delete:f,code:v}=e,a=[];return t&&a.push("b"),s&&a.push("u"),f&&a.push("del"),v&&a.push("code"),o&&a.push("mark"),a}function Fe(e,t){const{mark:o}=e,s=so(e),f=ne(o)&&o.color?{backgroundColor:o.color}:{};return s.reduce((v,a)=>d(a,a==="mark"?{style:f}:{},Ge(v)?v:{default:()=>[v]}),t)}function ro(e){const t=!!e.showTooltip,o=ne(e.showTooltip)&&e.showTooltip.type==="popover"?yt:ze,s=ne(e.showTooltip)&&e.showTooltip.props||{};return lo(ao({rows:1,suffix:"",ellipsisStr:"...",expandable:!1,css:!1},Ke(e,["showTooltip"])),{showTooltip:t,TooltipComponent:o,tooltipProps:s})}var io=ie({name:"TypographyBase",inheritAttrs:!1,props:{component:{type:String,required:!0},type:{type:String},bold:{type:Boolean},mark:{type:[Boolean,Object],default:!1},underline:{type:Boolean},delete:{type:Boolean},code:{type:Boolean},disabled:{type:Boolean},editable:{type:Boolean},editing:{type:Boolean,default:void 0},defaultEditing:{type:Boolean},editText:{type:String},copyable:{type:Boolean},copyText:{type:String},copyDelay:{type:Number,default:3e3},ellipsis:{type:[Boolean,Object],default:!1},editTooltipProps:{type:Object},copyTooltipProps:{type:Object}},emits:{editStart:()=>!0,change:e=>!0,"update:editText":e=>!0,editEnd:()=>!0,"update:editing":e=>!0,copy:e=>!0,ellipsis:e=>!0,expand:e=>!0},setup(e,{slots:t,emit:o,attrs:s}){const{editing:f,defaultEditing:v,ellipsis:a,copyable:r,editable:c,copyText:l,editText:h,copyDelay:V,component:W}=Ie(e),F=me("typography"),i=S(()=>[F,{[`${F}-${e.type}`]:e.type,[`${F}-disabled`]:e.disabled}]),u=b(),w=b(""),[T,z]=pt(v.value,ft({value:f})),x=S(()=>c.value&&T.value);function K(){o("update:editing",!0),o("editStart"),z(!0)}function M(p){o("update:editText",p),o("change",p)}function le(){T.value&&(o("update:editing",!1),o("editEnd"),z(!1))}const R=b(!1);let O=null;function ue(){var p;const H=(p=l.value)!=null?p:w.value;Xt(H||""),R.value=!0,o("copy",H),O=setTimeout(()=>{R.value=!1},V.value)}Ne(()=>{O&&clearTimeout(O),O=null});const q=b(!1),N=b(!1),G=b(""),B=S(()=>ro(ne(a.value)&&a.value||{}));let J=null;function se(){const p=!N.value;N.value=p,o("expand",p)}function de(p=!1){return B.value.css?d(Le,{editable:c.value,copyable:r.value,expandable:B.value.expandable,isCopied:R.value,isEllipsis:_.value,expanded:N.value,forceRenderExpand:p||N.value,editTooltipProps:e.editTooltipProps,copyTooltipProps:e.copyTooltipProps,onEdit:K,onCopy:ue,onExpand:se},{"copy-tooltip":t["copy-tooltip"],"copy-icon":t["copy-icon"],"expand-node":t["expand-node"]}):d(Le,{editable:c.value,copyable:r.value,expandable:B.value.expandable,isCopied:R.value,isEllipsis:q.value,expanded:N.value,forceRenderExpand:p,editTooltipProps:e.editTooltipProps,copyTooltipProps:e.copyTooltipProps,onEdit:K,onCopy:ue,onExpand:se},{"copy-tooltip":t["copy-tooltip"],"copy-icon":t["copy-icon"],"expand-node":t["expand-node"]})}function fe(){if(!u.value)return;const{ellipsis:p,text:H}=Qt(u.value,B.value,de(!!B.value.expandable),w.value);q.value!==p&&(q.value=p,B.value.css||o("ellipsis",p)),G.value!==H&&(G.value=H||"")}function Y(){a.value&&!N.value&&(Ve(J),J=ht(()=>{fe()}))}Ne(()=>{Ve(J)}),he(()=>B.value.rows,()=>{Y()}),he(a,p=>{p?Y():q.value=!1});let Z=[];const I=()=>{if(a.value||r.value||c.value){const p=Yt(Z);p!==w.value&&(w.value=p,Y())}};Te(I),Ue(I);const ee=b(),_=b(!1),te=()=>{if(u.value&&ee.value){const p=ee.value.offsetHeight>u.value.offsetHeight;p!==_.value&&(_.value=p,o("ellipsis",p))}},re=S(()=>N.value?{}:{overflow:"hidden","text-overflow":"ellipsis",display:"-webkit-box","-webkit-line-clamp":B.value.rows,"-webkit-box-orient":"vertical"});return()=>{var p,H;if(Z=((p=t.default)==null?void 0:p.call(t))||[],x.value){const g=(H=h.value)!=null?H:w.value;return d(Wt,{text:g,onChange:U=>{U!==g&&M(U)},onEnd:le},null)}const{suffix:ve,ellipsisStr:ye,showTooltip:ce,tooltipProps:ge,TooltipComponent:be}=B.value,oe=q.value&&!N.value,n=oe&&!ce?{title:w.value}:{},y=W.value;if(B.value.css){const g=Fe(e,Z),U=d(y,ae({class:i.value,ref:u,style:re.value},n,s),{default:()=>[d("span",{ref:ee},[g])]});return _.value?d(be,ae(ge,{onResize:()=>te()}),{default:()=>[U],content:()=>w.value}):d(Be,{onResize:()=>{te()}},Ge(U)?U:{default:()=>[U]})}const C=Fe(e,oe?G.value:Z);return d(Be,{onResize:()=>Y()},{default:()=>[d(y,ae({class:i.value,ref:u},n,s),{default:()=>[oe&&ce?d(be,ge,{default:()=>[d("span",null,[C])],content:()=>w.value}):C,oe?ye:null,ve,de()]})]})}}}),uo=ie({name:"TypographyParagraph",inheritAttrs:!1,props:{blockquote:{type:Boolean},spacing:{type:String,default:"default"}},setup(e){const{blockquote:t,spacing:o}=Ie(e),s=me("typography"),f=S(()=>t!=null&&t.value?"blockquote":"div"),v=S(()=>[{[`${s}-spacing-close`]:(o==null?void 0:o.value)==="close"}]);return{component:f,classNames:v}},render(){const{component:e,classNames:t}=this;return d(io,ae({class:t},this.$attrs,{component:e}),this.$slots)}});const co={key:0},po=["innerHTML"],fo=["textContent"],vo=["textContent"],yo=ie({__name:"MessageContent",props:{inversion:{type:Boolean},error:{type:Boolean},text:null,loading:{type:Boolean},asRawText:{type:Boolean}},setup(e){const t=e,o=b(),s=new zt({linkify:!0,highlight(c,l){if(!!(l&&Ce.getLanguage(l))){const V=l!=null?l:"";return r(Ce.highlight(c,{language:V}).value,V)}return r(Ce.highlightAuto(c).value,"")}});s.use(Ot,{attrs:{target:"_blank",rel:"noopener"}}),s.use(Nt,{blockClass:"katexmath-block rounded-md p-[10px]",errorColor:" #cc0000"});const f=S(()=>["message-content","min-w-[20px]","rounded-md",t.inversion?"text-[#f1f1f1]":"bg-[#e5e6eb]",t.inversion?"text-[]":"dark:bg-[#1e1e20]",t.inversion?"message-request":"message-reply",{"text-red-500":t.error}]),v=c=>c.replace(/\n+$/g,""),a=S(()=>{var l;const c=v((l=t.text)!=null?l:"");return!t.asRawText&&!t.inversion?s.render(c):c});function r(c,l){return`<pre class="code-block-wrapper"><div class="code-block-header"><span class="code-block-header__lang">${l}</span><span class="code-block-header__copy">复制代码</span></div><code class="hljs code-block-body ${l}">${c}</code></pre>`}return Ue(()=>{o.value&&Ce.highlightBlock(o.value)}),(c,l)=>(m(),E("div",{class:D(P(f))},[A("div",{ref_key:"textRef",ref:o,class:"leading-relaxed break-words relative"},[e.inversion?(m(),E("div",{key:1,class:"whitespace-pre-wrap",textContent:X(P(a))},null,8,vo)):(m(),E("div",co,[e.asRawText?(m(),E("div",{key:1,class:"whitespace-pre-wrap",textContent:X(P(a))},null,8,fo)):(m(),E("div",{key:0,class:"markdown-body",innerHTML:P(a)},null,8,po))]))],512)],2))}});const ho=mt(yo,[["__scopeId","data-v-507bd603"]]);const mo="/assets/openai-white-1b79b841.svg",go=e=>/^[\s\n\r]*$/.test(e),bo={key:0,class:"flex-1"},Co={class:"chat-wrapper"},_o={class:"flex items-center gap-x-2"},wo=["src"],xo={key:0,class:"flex items-center gap-x-1 pl-4"},ko={key:0,class:"text-info"},To={class:"chat-footer"},So={class:"flex items-center gap-x-2 w-32"},Eo={class:"flex-1"},Io=ie({__name:"ChatView",setup(e){const t=gt(),o=bt(),s=S(()=>t.session),{isMobileScreen:f}=Ct(),v={user:Bt,assistant:mo},a=b(),r=b("新的聊天");_t(()=>{var i;r.value=((i=t.session)==null?void 0:i.topic)||"新的聊天"});const c=b(""),l=b(),h=()=>{if(go(c.value)){Ae.clear(),Ae.error("请输入消息内容");return}t.sendMessageAction(c.value,()=>{var i,u,w,T;(T=a.value)==null||T.scrollTop(((w=(u=(i=a.value)==null?void 0:i.containerRef)==null?void 0:u.scrollHeight)!=null?w:0)-200)},i=>{l.value=i}),c.value=""};Te(()=>{Re(()=>{var i,u,w,T;(T=a.value)==null||T.scrollTop(((w=(u=(i=a.value)==null?void 0:i.containerRef)==null?void 0:u.scrollHeight)!=null?w:0)-200)})});const V=i=>{o.changeSubmitKeyAction(i)},W=()=>{t.handleChangeSessionTopicAction(r.value)},F=i=>{o.submitKey===Se.Enter&&(i.shiftKey&&i.code==="Enter"?(i.preventDefault(),c.value+=`
`):!i.shiftKey&&i.code==="Enter"&&(i.preventDefault(),h())),o.submitKey===Se.ShiftEnter&&(!i.shiftKey&&i.code==="Enter"?(i.preventDefault(),c.value+=`
`):i.shiftKey&&i.code==="Enter"&&(i.preventDefault(),h()))};return(i,u)=>{const w=uo,T=wt,z=xt,x=kt,K=Tt,M=St,le=Rt,R=It,O=j("icon-record-stop"),ue=Pt,q=ze,N=ho,G=Et,B=Ft,J=j("icon-send"),se=j("icon-down"),de=j("icon-check"),fe=Mt,Y=Vt,Z=$t;return m(),E(xe,null,[d(K,{class:"h-14 px-4 flex items-center bg-white dark:bg-dark"},{default:$(()=>[A("div",{class:D(["flex flex-col editable-title__wrapper",{"is-mobile":P(f)}])},[d(w,{class:"m-0",editable:"",editText:P(r),"onUpdate:editText":u[0]||(u[0]=I=>Me(r)?r.value=I:null),onEditEnd:W},{default:$(()=>[ke(X(P(r)),1)]),_:1},8,["editText"])],2),P(f)?L("",!0):(m(),E("i",bo)),P(f)?L("",!0):(m(),Q(x,{key:1},{default:$(()=>[d(T,{class:"w-44"}),d(z,{class:"w-60"})]),_:1}))]),_:1}),d(M,{class:"m-0"}),d(Z,{class:"flex flex-col flex-1 overflow-hidden"},{default:$(()=>[A("main",Co,[d(G,{ref_key:"scrollbarRef",ref:a,"outer-style":"flex: 1; overflow: hidden;",class:"overflow-y-auto h-full p-4 flex flex-col gap-y-2"},{default:$(()=>{var I,ee;return[(m(!0),E(xe,null,He((ee=(I=P(s))==null?void 0:I.messages)!=null?ee:[],_=>(m(),E("section",{key:_.id,class:D(["message-item",[_.role==="assistant"?"is-reply":"is-request"]])},[A("div",_o,[d(R,{loading:_.streaming&&_.role==="assistant"},{default:$(()=>[d(le,{size:32,class:D(_.role==="assistant"?"bg-primary p-2":"bg-success")},{default:$(()=>{var te;return[A("img",{src:(te=v[_.role])!=null?te:""},null,8,wo)]}),_:2},1032,["class"])]),_:2},1032,["loading"]),_.role==="assistant"?(m(),E("div",xo,[_.streaming?(m(),Q(q,{key:0,"content-class":"text-xs",content:"停止",position:"top"},{default:$(()=>[d(ue,{onClick:u[1]||(u[1]=te=>{var re;return(re=P(l))==null?void 0:re.abort()}),size:"mini",shape:"circle",type:"text",status:"danger"},{default:$(()=>[d(O,{class:"text-base"})]),_:1})]),_:1})):L("",!0)])):L("",!0)]),_.streaming&&_.role==="assistant"?(m(),E("small",ko,"正在输入...")):L("",!0),A("section",{class:D(["flex flex-col overflow-hidden px-4 py-3 text-sm rounded-lg max-w-max",{"justify-end bg-primary text-white":_.role==="user"},{"bg-white dark:bg-dark":_.role==="assistant"}])},[(m(),Q(N,{loading:_.streaming,key:_.content,text:_.content,inversion:_.role!=="assistant"},null,8,["loading","text","inversion"]))],2)],2))),128))]}),_:1},512),d(M,{class:"m-0"}),A("footer",To,[d(B,{disabled:P(t).fetching,modelValue:P(c),"onUpdate:modelValue":u[2]||(u[2]=I=>Me(c)?c.value=I:null),onKeydown:qe(we(F,["prevent"]),["enter"]),class:"bg-white dark:bg-dark-900 border-none","auto-size":{minRows:3,maxRows:5},placeholder:"请输入您的消息..."},null,8,["disabled","modelValue","onKeydown"]),d(Y,{disabled:P(t).fetching,onClick:h,onSelect:V,type:"primary"},{icon:$(()=>[d(se)]),content:$(()=>[(m(!0),E(xe,null,He(Object.values(P(Se)),I=>(m(),Q(fe,{key:I,value:I},{default:$(()=>[A("div",So,[A("span",Eo,X(I),1),I===P(o).submitKey?(m(),Q(de,{key:0,class:"text-primary"})):L("",!0)])]),_:2},1032,["value"]))),128))]),default:$(()=>[d(J,{class:"mr-2"}),ke(" 发送 ")]),_:1},8,["disabled"])])])]),_:1})],64)}}});export{Io as default};
