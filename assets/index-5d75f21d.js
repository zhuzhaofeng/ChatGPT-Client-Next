import{g as P,S as se,aC as ie,i as S,j as F,r as A,k as B,l as re,q as D,v as $,o as w,x as k,y as V,z as d,b as i,A as N,w as f,a as K,C as ae,aD as Z,t as R,aE as q,D as Q,E as W,c as J,aF as G,d as pe,Z as ue,F as X,aG as de,$ as j,aH as x,B as ce,aI as fe,H as ee,J as oe,aJ as me,aK as be,G as ve}from"./index-c28fd70a.js";const ne=Symbol("ArcoBreadcrumb"),U=Symbol("ArcoDropdown"),ge=P({name:"DropdownPanel",components:{Scrollbar:se,Empty:ie},props:{loading:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},bottomOffset:{type:Number,default:0},onScroll:{type:[Function,Array]},onReachBottom:{type:[Function,Array]}},emits:["scroll","reachBottom"],setup(e,{emit:o,slots:t}){const s=S("dropdown"),n=F(U,{}),r=A(),l=p=>{const{scrollTop:h,scrollHeight:g,offsetHeight:y}=p.target;g-(h+y)<=e.bottomOffset&&o("reachBottom",p),o("scroll",p)},a=B(()=>{if(re(n.popupMaxHeight))return{maxHeight:`${n.popupMaxHeight}px`};if(!n.popupMaxHeight)return{maxHeight:"none",overflowY:"hidden"}}),c=B(()=>[s,{[`${s}-has-footer`]:!!t.footer}]);return{prefixCls:s,cls:c,style:a,wrapperRef:r,handleScroll:l}}});function he(e,o,t,s,n,r){const l=$("empty"),a=$("Scrollbar");return w(),k("div",{class:V(e.cls)},[e.isEmpty?(w(),k("div",{key:0,class:V(`${e.prefixCls}-empty`)},[d(e.$slots,"empty",{},()=>[i(l)])],2)):N("v-if",!0),i(a,{ref:"wrapperRef",class:V(`${e.prefixCls}-list-wrapper`),style:ae(e.style),onScroll:e.handleScroll},{default:f(()=>[K("ul",{class:V(`${e.prefixCls}-list`)},[d(e.$slots,"default")],2)]),_:3},8,["class","style","onScroll"]),e.$slots.footer&&!e.isEmpty?(w(),k("div",{key:1,class:V(`${e.prefixCls}-footer`)},[d(e.$slots,"footer")],2)):N("v-if",!0)],2)}var te=D(ge,[["render",he]]);const ye=P({name:"Dropdown",components:{Trigger:Z,DropdownPanel:te},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"bottom"},popupContainer:{type:[String,Object]},popupMaxHeight:{type:[Boolean,Number],default:!0},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,select:(e,o)=>!0},setup(e,{emit:o}){const{defaultPopupVisible:t,popupVisible:s,popupMaxHeight:n}=R(e),r=S("dropdown"),{computedPopupVisible:l,handlePopupVisibleChange:a}=q({defaultPopupVisible:t,popupVisible:s,emit:o});return Q(U,W({popupMaxHeight:n,onOptionClick:(p,h)=>{o("select",p,h),e.hideOnSelect&&a(!1)}})),{prefixCls:r,computedPopupVisible:l,handlePopupVisibleChange:a}}});function $e(e,o,t,s,n,r){const l=$("DropdownPanel"),a=$("Trigger");return w(),J(a,{"popup-visible":e.computedPopupVisible,"animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",trigger:e.trigger,position:e.position,"popup-offset":4,"popup-container":e.popupContainer,"opened-class":`${e.prefixCls}-open`,onPopupVisibleChange:e.handlePopupVisibleChange},{content:f(()=>[i(l,null,G({default:f(()=>[d(e.$slots,"content")]),_:2},[e.$slots.footer?{name:"footer",fn:f(()=>[d(e.$slots,"footer")])}:void 0]),1024)]),default:f(()=>[d(e.$slots,"default")]),_:3},8,["popup-visible","trigger","position","popup-container","opened-class","onPopupVisibleChange"])}var I=D(ye,[["render",$e]]);const Ce=P({name:"Doption",props:{value:{type:[String,Number,Object]},disabled:{type:Boolean,default:!1},active:Boolean,uninjectContext:Boolean},emits:{click:e=>!0},setup(e,{emit:o}){const t=S("dropdown-option"),s=A(),n=B(()=>{var c,p,h;return(h=(p=e.value)!=null?p:(c=s.value)==null?void 0:c.textContent)!=null?h:void 0}),r=e.uninjectContext?void 0:F(U,void 0),l=c=>{e.disabled||(o("click",c),r==null||r.onOptionClick(n.value,c))},a=B(()=>[t,{[`${t}-disabled`]:e.disabled,[`${t}-active`]:e.active}]);return{prefixCls:t,cls:a,liRef:s,handleClick:l}}});function Ve(e,o,t,s,n,r){return w(),k("li",{ref:"liRef",class:V([e.cls,{[`${e.prefixCls}-has-suffix`]:!!e.$slots.suffix}]),onClick:o[0]||(o[0]=(...l)=>e.handleClick&&e.handleClick(...l))},[e.$slots.icon?(w(),k("span",{key:0,class:V(`${e.prefixCls}-icon`)},[d(e.$slots,"icon")],2)):N("v-if",!0),K("span",{class:V(`${e.prefixCls}-content`)},[d(e.$slots,"default")],2),e.$slots.suffix?(w(),k("span",{key:1,class:V(`${e.prefixCls}-suffix`)},[d(e.$slots,"suffix")],2)):N("v-if",!0)],2)}var O=D(Ce,[["render",Ve]]);const we=P({name:"Dgroup",props:{title:String},setup(){return{prefixCls:S("dropdown-group")}}});function Be(e,o,t,s,n,r){return w(),k(X,null,[K("li",{class:V(`${e.prefixCls}-title`)},[d(e.$slots,"title",{},()=>[pe(ue(e.title),1)])],2),d(e.$slots,"default")],64)}var z=D(we,[["render",Be]]);const Pe=P({name:"Dsubmenu",components:{Trigger:Z,DropdownPanel:te,DropdownOption:O,IconRight:de},props:{value:{type:[String,Number]},disabled:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"rt"},popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},optionProps:{type:Object}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:o}){const{defaultPopupVisible:t,popupVisible:s}=R(e),n=S("dropdown"),{computedPopupVisible:r,handlePopupVisibleChange:l}=q({defaultPopupVisible:t,popupVisible:s,emit:o});return{prefixCls:n,computedPopupVisible:r,handlePopupVisibleChange:l}}});function Se(e,o,t,s,n,r){const l=$("IconRight"),a=$("dropdown-option"),c=$("dropdown-panel"),p=$("Trigger");return w(),J(p,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,disabled:e.disabled,"popup-offset":4,onPopupVisibleChange:e.handlePopupVisibleChange},{content:f(()=>[i(c,{class:V(`${e.prefixCls}-submenu`)},G({default:f(()=>[d(e.$slots,"content")]),_:2},[e.$slots.footer?{name:"footer",fn:f(()=>[d(e.$slots,"footer")])}:void 0]),1032,["class"])]),default:f(()=>[i(a,j(e.optionProps,{active:e.computedPopupVisible,"uninject-context":""}),G({suffix:f(()=>[d(e.$slots,"suffix",{},()=>[i(l)])]),default:f(()=>[d(e.$slots,"default")]),_:2},[e.$slots.icon?{name:"icon",fn:f(()=>[d(e.$slots,"icon")])}:void 0]),1040,["active"])]),_:3},8,["popup-visible","trigger","position","disabled","onPopupVisibleChange"])}var E=D(Pe,[["render",Se]]);const ke=P({name:"DropdownButton",components:{IconMore:x,Button:ce,ButtonGroup:fe,Dropdown:I},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"br"},popupContainer:{type:[String,Object]},disabled:{type:Boolean,default:!1},type:{type:String},size:{type:String},buttonProps:{type:Object},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,click:e=>!0,select:(e,o)=>!0},setup(e,{emit:o}){const{defaultPopupVisible:t,popupVisible:s}=R(e),n=S("dropdown"),{computedPopupVisible:r,handlePopupVisibleChange:l}=q({defaultPopupVisible:t,popupVisible:s,emit:o});return{prefixCls:n,computedPopupVisible:r,handleClick:p=>{o("click",p)},handleSelect:(p,h)=>{o("select",p,h)},handlePopupVisibleChange:l}}});function De(e,o,t,s,n,r){const l=$("Button"),a=$("IconMore"),c=$("Dropdown"),p=$("ButtonGroup");return w(),J(p,null,{default:f(()=>[i(l,j({size:e.size,type:e.type,disabled:e.disabled},e.buttonProps,{onClick:e.handleClick}),{default:f(()=>[d(e.$slots,"default")]),_:3},16,["size","type","disabled","onClick"]),i(c,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,"popup-container":e.popupContainer,"hide-on-select":e.hideOnSelect,onSelect:e.handleSelect,onPopupVisibleChange:e.handlePopupVisibleChange},{content:f(()=>[d(e.$slots,"content")]),default:f(()=>[i(l,{size:e.size,type:e.type,disabled:e.disabled},{icon:f(()=>[d(e.$slots,"icon",{popupVisible:e.computedPopupVisible},()=>[i(a)])]),_:3},8,["size","type","disabled"])]),_:3},8,["popup-visible","trigger","position","popup-container","hide-on-select","onSelect","onPopupVisibleChange"])]),_:3})}var M=D(ke,[["render",De]]);const _e=Object.assign(I,{Option:O,Group:z,Submenu:E,Button:M,install:(e,o)=>{ee(e,o);const t=oe(o);e.component(t+I.name,I),e.component(t+O.name,O),e.component(t+z.name,z),e.component(t+E.name,E),e.component(t+M.name,M)}});var H=P({name:"BreadcrumbItem",inheritAttrs:!1,props:{separator:{type:[String,Number]},droplist:{type:Array},dropdownProps:{type:Object},index:{type:Number,default:0}},setup(e,{slots:o,attrs:t}){const s=S("breadcrumb-item"),n=F(ne,void 0),r=A(!1),l=B(()=>!(n&&n.needHide&&e.index>1&&e.index<=n.total-n.maxCount)),a=B(()=>n&&n.needHide?e.index===1:!1),c=B(()=>n?e.index<n.total-1:!0),p=u=>{r.value=u},h=()=>{var u,b,v,C,_,L,Y;if(!c.value)return null;const le=(Y=(L=(_=(b=(u=o.separator)==null?void 0:u.call(o))!=null?b:e.separator)!=null?_:(C=n==null?void 0:(v=n.slots).separator)==null?void 0:C.call(v))!=null?L:n==null?void 0:n.separator)!=null?Y:i(me,null,null);return i("div",{"aria-hidden":"true",class:`${s}-separator`},[le])},g=()=>{var u,b,v,C;return i("div",j({role:"listitem",class:[s,{[`${s}-with-dropdown`]:e.droplist||o.droplist}]},a.value?{"aria-label":"ellipses of breadcrumb items"}:void 0,t),[a.value?(v=(b=n==null?void 0:(u=n.slots)["more-icon"])==null?void 0:b.call(u))!=null?v:i(x,null,null):(C=o.default)==null?void 0:C.call(o),(e.droplist||o.droplist)&&i("span",{"aria-hidden":!0,class:[`${s}-dropdown-icon`,{[`${s}-dropdown-icon-active`]:r.value}]},[i(be,null,null)])])},y=()=>{var u,b,v;return(v=(u=o.droplist)==null?void 0:u.call(o))!=null?v:(b=e.droplist)==null?void 0:b.map(C=>i(O,{value:C.path},{default:()=>[C.label]}))},m=()=>i(_e,j({popupVisible:r.value,onPopupVisibleChange:p},e.dropdownProps),{default:()=>[g()],content:y});return()=>l.value?i(X,null,[o.droplist||e.droplist?m():g(),h()]):null}}),T=P({name:"Breadcrumb",props:{maxCount:{type:Number,default:0},routes:{type:Array},separator:{type:[String,Number]},customUrl:{type:Function}},setup(e,{slots:o}){const{maxCount:t,separator:s,routes:n}=R(e),r=S("breadcrumb"),l=A(0),a=B(()=>t.value>0&&l.value>t.value+1);Q(ne,W({total:l,maxCount:t,separator:s,needHide:a,slots:o}));const c=(g,y,m)=>{var u,b;if(y.indexOf(g)===y.length-1)return i("span",null,[g.label]);const v=(b=(u=e.customUrl)==null?void 0:u.call(e,m))!=null?b:`#/${m.join("/").replace(/^\//,"")}`;return i("a",{href:v},[g.label])},p=()=>{var g;if(!((g=n.value)!=null&&g.length))return null;l.value!==n.value.length&&(l.value=n.value.length);const y=[];return n.value.map((m,u,b)=>{y.push((m.path||"").replace(/^\//,""));const v=[...y];return i(H,{key:m.path||m.label,index:u,droplist:m.children},{default:()=>{var C,_;return[(_=(C=o["item-render"])==null?void 0:C.call(o,{route:m,routes:b,paths:v}))!=null?_:c(m,b,v)]}})})},h=()=>{var g,y;const m=ve((y=(g=o.default)==null?void 0:g.call(o))!=null?y:[]);return l.value!==m.length&&(l.value=m.length),m.map((u,b)=>{var v;return u.props=j((v=u.props)!=null?v:{},{index:b}),u})};return()=>i("div",{role:"list",class:r},[o.default?h():p()])}});const je=Object.assign(T,{Item:H,install:(e,o)=>{ee(e,o);const t=oe(o);e.component(t+T.name,T),e.component(t+H.name,H)}});export{H as B,je as a};
