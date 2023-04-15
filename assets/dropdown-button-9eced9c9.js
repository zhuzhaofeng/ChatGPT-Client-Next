import{g as C,S as j,aF as M,i as v,az as V,r as k,j as $,aG as N,v as B,D as b,o as m,E as y,F as c,L as r,b as g,J as h,w as d,a as w,G as E,av as R,t as P,ax as D,aD as A,a1 as G,c as O,ay as T,aB as F,B as I,aH as K,K as J}from"./index-6d52b8b7.js";const S=Symbol("ArcoDropdown"),L=C({name:"DropdownPanel",components:{Scrollbar:j,Empty:M},props:{loading:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},bottomOffset:{type:Number,default:0},onScroll:{type:[Function,Array]},onReachBottom:{type:[Function,Array]}},emits:["scroll","reachBottom"],setup(e,{emit:o,slots:n}){const s=v("dropdown"),p=V(S,{}),a=k(),t=l=>{const{scrollTop:f,scrollHeight:z,offsetHeight:H}=l.target;z-(f+H)<=e.bottomOffset&&o("reachBottom",l),o("scroll",l)},i=$(()=>{if(N(p.popupMaxHeight))return{maxHeight:`${p.popupMaxHeight}px`};if(!p.popupMaxHeight)return{maxHeight:"none",overflowY:"hidden"}}),u=$(()=>[s,{[`${s}-has-footer`]:!!n.footer}]);return{prefixCls:s,cls:u,style:i,wrapperRef:a,handleScroll:t}}});function Y(e,o,n,s,p,a){const t=b("empty"),i=b("Scrollbar");return m(),y("div",{class:c(e.cls)},[e.isEmpty?(m(),y("div",{key:0,class:c(`${e.prefixCls}-empty`)},[r(e.$slots,"empty",{},()=>[g(t)])],2)):h("v-if",!0),g(i,{ref:"wrapperRef",class:c(`${e.prefixCls}-list-wrapper`),style:E(e.style),onScroll:e.handleScroll},{default:d(()=>[w("ul",{class:c(`${e.prefixCls}-list`)},[r(e.$slots,"default")],2)]),_:3},8,["class","style","onScroll"]),e.$slots.footer&&!e.isEmpty?(m(),y("div",{key:1,class:c(`${e.prefixCls}-footer`)},[r(e.$slots,"footer")],2)):h("v-if",!0)],2)}var q=B(L,[["render",Y]]);const Q=C({name:"Dropdown",components:{Trigger:R,DropdownPanel:q},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"bottom"},popupContainer:{type:[String,Object]},popupMaxHeight:{type:[Boolean,Number],default:!0},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,select:(e,o)=>!0},setup(e,{emit:o}){const{defaultPopupVisible:n,popupVisible:s,popupMaxHeight:p}=P(e),a=v("dropdown"),{computedPopupVisible:t,handlePopupVisibleChange:i}=D({defaultPopupVisible:n,popupVisible:s,emit:o});return A(S,G({popupMaxHeight:p,onOptionClick:(l,f)=>{o("select",l,f),e.hideOnSelect&&i(!1)}})),{prefixCls:a,computedPopupVisible:t,handlePopupVisibleChange:i}}});function U(e,o,n,s,p,a){const t=b("DropdownPanel"),i=b("Trigger");return m(),O(i,{"popup-visible":e.computedPopupVisible,"animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",trigger:e.trigger,position:e.position,"popup-offset":4,"popup-container":e.popupContainer,"opened-class":`${e.prefixCls}-open`,onPopupVisibleChange:e.handlePopupVisibleChange},{content:d(()=>[g(t,null,T({default:d(()=>[r(e.$slots,"content")]),_:2},[e.$slots.footer?{name:"footer",fn:d(()=>[r(e.$slots,"footer")])}:void 0]),1024)]),default:d(()=>[r(e.$slots,"default")]),_:3},8,["popup-visible","trigger","position","popup-container","opened-class","onPopupVisibleChange"])}var W=B(Q,[["render",U]]);const X=C({name:"Doption",props:{value:{type:[String,Number,Object]},disabled:{type:Boolean,default:!1},active:Boolean,uninjectContext:Boolean},emits:{click:e=>!0},setup(e,{emit:o}){const n=v("dropdown-option"),s=k(),p=$(()=>{var u,l,f;return(f=(l=e.value)!=null?l:(u=s.value)==null?void 0:u.textContent)!=null?f:void 0}),a=e.uninjectContext?void 0:V(S,void 0),t=u=>{e.disabled||(o("click",u),a==null||a.onOptionClick(p.value,u))},i=$(()=>[n,{[`${n}-disabled`]:e.disabled,[`${n}-active`]:e.active}]);return{prefixCls:n,cls:i,liRef:s,handleClick:t}}});function Z(e,o,n,s,p,a){return m(),y("li",{ref:"liRef",class:c([e.cls,{[`${e.prefixCls}-has-suffix`]:!!e.$slots.suffix}]),onClick:o[0]||(o[0]=(...t)=>e.handleClick&&e.handleClick(...t))},[e.$slots.icon?(m(),y("span",{key:0,class:c(`${e.prefixCls}-icon`)},[r(e.$slots,"icon")],2)):h("v-if",!0),w("span",{class:c(`${e.prefixCls}-content`)},[r(e.$slots,"default")],2),e.$slots.suffix?(m(),y("span",{key:1,class:c(`${e.prefixCls}-suffix`)},[r(e.$slots,"suffix")],2)):h("v-if",!0)],2)}var te=B(X,[["render",Z]]);const _=C({name:"DropdownButton",components:{IconMore:F,Button:I,ButtonGroup:K,Dropdown:W},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"br"},popupContainer:{type:[String,Object]},disabled:{type:Boolean,default:!1},type:{type:String},size:{type:String},buttonProps:{type:Object},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,click:e=>!0,select:(e,o)=>!0},setup(e,{emit:o}){const{defaultPopupVisible:n,popupVisible:s}=P(e),p=v("dropdown"),{computedPopupVisible:a,handlePopupVisibleChange:t}=D({defaultPopupVisible:n,popupVisible:s,emit:o});return{prefixCls:p,computedPopupVisible:a,handleClick:l=>{o("click",l)},handleSelect:(l,f)=>{o("select",l,f)},handlePopupVisibleChange:t}}});function x(e,o,n,s,p,a){const t=b("Button"),i=b("IconMore"),u=b("Dropdown"),l=b("ButtonGroup");return m(),O(l,null,{default:d(()=>[g(t,J({size:e.size,type:e.type,disabled:e.disabled},e.buttonProps,{onClick:e.handleClick}),{default:d(()=>[r(e.$slots,"default")]),_:3},16,["size","type","disabled","onClick"]),g(u,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,"popup-container":e.popupContainer,"hide-on-select":e.hideOnSelect,onSelect:e.handleSelect,onPopupVisibleChange:e.handlePopupVisibleChange},{content:d(()=>[r(e.$slots,"content")]),default:d(()=>[g(t,{size:e.size,type:e.type,disabled:e.disabled},{icon:d(()=>[r(e.$slots,"icon",{popupVisible:e.computedPopupVisible},()=>[g(i)])]),_:3},8,["size","type","disabled"])]),_:3},8,["popup-visible","trigger","position","popup-container","hide-on-select","onSelect","onPopupVisibleChange"])]),_:3})}var ne=B(_,[["render",x]]);export{ne as D,W as _,te as a,q as b};
