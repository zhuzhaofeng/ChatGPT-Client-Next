System.register(["./index-legacy-621268a9.js"],(function(e,o){"use strict";var t,l,i,n,p,r,a,s,u,d,c,b,f,m,g,v,h,y,x,C,V,P,$,w,S,B,k,O,D,j,H,A,z,_,M,N,R,E,I,T=document.createElement("style");return T.textContent=".arco-breadcrumb{display:inline-flex;align-items:center;color:var(--color-text-2);font-size:14px}.arco-breadcrumb-icon{color:var(--color-text-2)}.arco-breadcrumb-item{display:inline-block;padding:0 4px;color:var(--color-text-2);line-height:24px;vertical-align:middle}.arco-breadcrumb-item>.arco-icon{color:var(--color-text-3)}.arco-breadcrumb-item a{display:inline-block;margin:0 -4px;padding:0 4px;color:var(--color-text-2);text-decoration:none;border-radius:var(--border-radius-small);background-color:transparent}.arco-breadcrumb-item a:hover{color:rgb(var(--link-6));background-color:var(--color-fill-2)}.arco-breadcrumb-item:last-child{color:var(--color-text-1);font-weight:500}.arco-breadcrumb-item-ellipses{position:relative;top:-3px;display:inline-block;padding:0 4px;color:var(--color-text-2)}.arco-breadcrumb-item-separator{display:inline-block;margin:0 4px;color:var(--color-text-4);line-height:24px;vertical-align:middle}.arco-breadcrumb-item-with-dropdown{cursor:pointer}.arco-breadcrumb-item-dropdown-icon{margin-left:4px;color:var(--color-text-2);font-size:12px}.arco-breadcrumb-item-dropdown-icon-active svg{transform:rotate(180deg)}\n",document.head.appendChild(T),{setters:[e=>{t=e.g,l=e.S,i=e.au,n=e.m,p=e.av,r=e.s,a=e.v,s=e.aw,u=e.G,d=e.r,c=e.o,b=e.i,f=e.n,m=e.V,g=e.b,v=e.T,h=e.w,y=e.a,x=e.P,C=e.ax,V=e.t,P=e.ay,$=e.az,w=e.a8,S=e.c,B=e.aA,k=e.d,O=e.Q,D=e.F,j=e.aB,H=e.U,A=e.aC,z=e.B,_=e.aD,M=e.W,N=e.X,R=e.aE,E=e.aF,I=e.aG}],execute:function(){const o=Symbol("ArcoBreadcrumb"),T=Symbol("ArcoDropdown"),F=t({name:"DropdownPanel",components:{Scrollbar:l,Empty:i},props:{loading:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},bottomOffset:{type:Number,default:0},onScroll:{type:[Function,Array]},onReachBottom:{type:[Function,Array]}},emits:["scroll","reachBottom"],setup(e,{emit:o,slots:t}){const l=n("dropdown"),i=p(T,{}),u=r(),d=a((()=>s(i.popupMaxHeight)?{maxHeight:`${i.popupMaxHeight}px`}:i.popupMaxHeight?void 0:{maxHeight:"none",overflowY:"hidden"})),c=a((()=>[l,{[`${l}-has-footer`]:Boolean(t.footer)}]));return{prefixCls:l,cls:c,style:d,wrapperRef:u,handleScroll:t=>{const{scrollTop:l,scrollHeight:i,offsetHeight:n}=t.target;i-(l+n)<=e.bottomOffset&&o("reachBottom",t),o("scroll",t)}}}});var G=u(F,[["render",function(e,o,t,l,i,n){const p=d("empty"),r=d("Scrollbar");return c(),b("div",{class:f(e.cls)},[e.isEmpty?(c(),b("div",{key:0,class:f(`${e.prefixCls}-empty`)},[m(e.$slots,"empty",{},(()=>[g(p)]))],2)):v("v-if",!0),g(r,{ref:"wrapperRef",class:f(`${e.prefixCls}-list-wrapper`),style:x(e.style),onScroll:e.handleScroll},{default:h((()=>[y("ul",{class:f(`${e.prefixCls}-list`)},[m(e.$slots,"default")],2)])),_:3},8,["class","style","onScroll"]),e.$slots.footer&&!e.isEmpty?(c(),b("div",{key:1,class:f(`${e.prefixCls}-footer`)},[m(e.$slots,"footer")],2)):v("v-if",!0)],2)}]]);const U=t({name:"Dropdown",components:{Trigger:C,DropdownPanel:G},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"bottom"},popupContainer:{type:[String,Object]},popupMaxHeight:{type:[Boolean,Number],default:!0},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,select:(e,o)=>!0},setup(e,{emit:o}){const{defaultPopupVisible:t,popupVisible:l,popupMaxHeight:i}=V(e),p=n("dropdown"),{computedPopupVisible:r,handlePopupVisibleChange:a}=P({defaultPopupVisible:t,popupVisible:l,emit:o});return $(T,w({popupMaxHeight:i,onOptionClick:(t,l)=>{o("select",t,l),e.hideOnSelect&&a(!1)}})),{prefixCls:p,computedPopupVisible:r,handlePopupVisibleChange:a}}});var Q=u(U,[["render",function(e,o,t,l,i,n){const p=d("DropdownPanel"),r=d("Trigger");return c(),S(r,{"popup-visible":e.computedPopupVisible,"animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",trigger:e.trigger,position:e.position,"popup-offset":4,"popup-container":e.popupContainer,"opened-class":`${e.prefixCls}-open`,onPopupVisibleChange:e.handlePopupVisibleChange},{content:h((()=>[g(p,null,B({default:h((()=>[m(e.$slots,"content")])),_:2},[e.$slots.footer?{name:"footer",fn:h((()=>[m(e.$slots,"footer")]))}:void 0]),1024)])),default:h((()=>[m(e.$slots,"default")])),_:3},8,["popup-visible","trigger","position","popup-container","opened-class","onPopupVisibleChange"])}]]);const W=t({name:"Doption",props:{value:{type:[String,Number,Object]},disabled:{type:Boolean,default:!1},active:Boolean,uninjectContext:Boolean},emits:{click:e=>!0},setup(e,{emit:o}){const t=n("dropdown-option"),l=r(),i=a((()=>{var o,t,i;return null!=(i=null!=(t=e.value)?t:null==(o=l.value)?void 0:o.textContent)?i:void 0})),s=e.uninjectContext?void 0:p(T,void 0),u=a((()=>[t,{[`${t}-disabled`]:e.disabled,[`${t}-active`]:e.active}]));return{prefixCls:t,cls:u,liRef:l,handleClick:t=>{e.disabled||(o("click",t),null==s||s.onOptionClick(i.value,t))}}}});var X=u(W,[["render",function(e,o,t,l,i,n){return c(),b("li",{ref:"liRef",class:f([e.cls,{[`${e.prefixCls}-has-suffix`]:Boolean(e.$slots.suffix)}]),onClick:o[0]||(o[0]=(...o)=>e.handleClick&&e.handleClick(...o))},[e.$slots.icon?(c(),b("span",{key:0,class:f(`${e.prefixCls}-icon`)},[m(e.$slots,"icon")],2)):v("v-if",!0),y("span",{class:f(`${e.prefixCls}-content`)},[m(e.$slots,"default")],2),e.$slots.suffix?(c(),b("span",{key:1,class:f(`${e.prefixCls}-suffix`)},[m(e.$slots,"suffix")],2)):v("v-if",!0)],2)}]]);const Y=t({name:"Dgroup",props:{title:String},setup:()=>({prefixCls:n("dropdown-group")})});var q=u(Y,[["render",function(e,o,t,l,i,n){return c(),b(D,null,[y("li",{class:f(`${e.prefixCls}-title`)},[m(e.$slots,"title",{},(()=>[k(O(e.title),1)]))],2),m(e.$slots,"default")],64)}]]);const J=t({name:"Dsubmenu",components:{Trigger:C,DropdownPanel:G,DropdownOption:X,IconRight:j},props:{value:{type:[String,Number]},disabled:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"rt"},popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},optionProps:{type:Object}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:o}){const{defaultPopupVisible:t,popupVisible:l}=V(e),i=n("dropdown"),{computedPopupVisible:p,handlePopupVisibleChange:r}=P({defaultPopupVisible:t,popupVisible:l,emit:o});return{prefixCls:i,computedPopupVisible:p,handlePopupVisibleChange:r}}});var K=u(J,[["render",function(e,o,t,l,i,n){const p=d("IconRight"),r=d("dropdown-option"),a=d("dropdown-panel"),s=d("Trigger");return c(),S(s,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,disabled:e.disabled,"popup-offset":4,onPopupVisibleChange:e.handlePopupVisibleChange},{content:h((()=>[g(a,{class:f(`${e.prefixCls}-submenu`)},B({default:h((()=>[m(e.$slots,"content")])),_:2},[e.$slots.footer?{name:"footer",fn:h((()=>[m(e.$slots,"footer")]))}:void 0]),1032,["class"])])),default:h((()=>[g(r,H(e.optionProps,{active:e.computedPopupVisible,"uninject-context":""}),B({suffix:h((()=>[m(e.$slots,"suffix",{},(()=>[g(p)]))])),default:h((()=>[m(e.$slots,"default")])),_:2},[e.$slots.icon?{name:"icon",fn:h((()=>[m(e.$slots,"icon")]))}:void 0]),1040,["active"])])),_:3},8,["popup-visible","trigger","position","disabled","onPopupVisibleChange"])}]]);const L=t({name:"DropdownButton",components:{IconMore:A,Button:z,ButtonGroup:_,Dropdown:Q},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"br"},popupContainer:{type:[String,Object]},disabled:{type:Boolean,default:!1},type:{type:String},size:{type:String},buttonProps:{type:Object},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,click:e=>!0,select:(e,o)=>!0},setup(e,{emit:o}){const{defaultPopupVisible:t,popupVisible:l}=V(e),i=n("dropdown"),{computedPopupVisible:p,handlePopupVisibleChange:r}=P({defaultPopupVisible:t,popupVisible:l,emit:o});return{prefixCls:i,computedPopupVisible:p,handleClick:e=>{o("click",e)},handleSelect:(e,t)=>{o("select",e,t)},handlePopupVisibleChange:r}}});var Z=u(L,[["render",function(e,o,t,l,i,n){const p=d("Button"),r=d("IconMore"),a=d("Dropdown"),s=d("ButtonGroup");return c(),S(s,null,{default:h((()=>[g(p,H({size:e.size,type:e.type,disabled:e.disabled},e.buttonProps,{onClick:e.handleClick}),{default:h((()=>[m(e.$slots,"default")])),_:3},16,["size","type","disabled","onClick"]),g(a,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,"popup-container":e.popupContainer,"hide-on-select":e.hideOnSelect,onSelect:e.handleSelect,onPopupVisibleChange:e.handlePopupVisibleChange},{content:h((()=>[m(e.$slots,"content")])),default:h((()=>[g(p,{size:e.size,type:e.type,disabled:e.disabled},{icon:h((()=>[m(e.$slots,"icon",{popupVisible:e.computedPopupVisible},(()=>[g(r)]))])),_:3},8,["size","type","disabled"])])),_:3},8,["popup-visible","trigger","position","popup-container","hide-on-select","onSelect","onPopupVisibleChange"])])),_:3})}]]);const ee=Object.assign(Q,{Option:X,Group:q,Submenu:K,Button:Z,install:(e,o)=>{M(e,o);const t=N(o);e.component(t+Q.name,Q),e.component(t+X.name,X),e.component(t+q.name,q),e.component(t+K.name,K),e.component(t+Z.name,Z)}});var oe=e("B",t({name:"BreadcrumbItem",inheritAttrs:!1,props:{separator:{type:[String,Number]},droplist:{type:Array},dropdownProps:{type:Object},index:{type:Number,default:0}},setup(e,{slots:t,attrs:l}){const i=n("breadcrumb-item"),s=p(o,void 0),u=r(!1),d=a((()=>!(s&&s.needHide&&e.index>1&&e.index<=s.total-s.maxCount))),c=a((()=>!(!s||!s.needHide)&&1===e.index)),b=a((()=>!s||e.index<s.total-1)),f=e=>{u.value=e},m=()=>{var o,l,n,p,r,a,u;if(!b.value)return null;const d=null!=(u=null!=(a=null!=(r=null!=(l=null==(o=t.separator)?void 0:o.call(t))?l:e.separator)?r:null==(p=null==s?void 0:(n=s.slots).separator)?void 0:p.call(n))?a:null==s?void 0:s.separator)?u:g(R,null,null);return g("div",{"aria-hidden":"true",class:`${i}-separator`},[d])},v=()=>{var o,n,p,r;return g("div",H({role:"listitem",class:[i,{[`${i}-with-dropdown`]:e.droplist||t.droplist}]},c.value?{"aria-label":"ellipses of breadcrumb items"}:void 0,l),[c.value?null!=(p=null==(n=null==s?void 0:(o=s.slots)["more-icon"])?void 0:n.call(o))?p:g(A,null,null):null==(r=t.default)?void 0:r.call(t),(e.droplist||t.droplist)&&g("span",{"aria-hidden":!0,class:[`${i}-dropdown-icon`,{[`${i}-dropdown-icon-active`]:u.value}]},[g(E,null,null)])])},h=()=>{var o,l,i;return null!=(i=null==(o=t.droplist)?void 0:o.call(t))?i:null==(l=e.droplist)?void 0:l.map((e=>g(X,{value:e.path},{default:()=>[e.label]})))};return()=>d.value?g(D,null,[t.droplist||e.droplist?g(ee,H({popupVisible:u.value,onPopupVisibleChange:f},e.dropdownProps),{default:()=>[v()],content:h}):v(),m()]):null}})),te=t({name:"Breadcrumb",props:{maxCount:{type:Number,default:0},routes:{type:Array},separator:{type:[String,Number]},customUrl:{type:Function}},setup(e,{slots:t}){const{maxCount:l,separator:i,routes:p}=V(e),s=n("breadcrumb"),u=r(0),d=a((()=>l.value>0&&u.value>l.value+1));$(o,w({total:u,maxCount:l,separator:i,needHide:d,slots:t}));const c=(o,t,l)=>{var i,n;if(t.indexOf(o)===t.length-1)return g("span",null,[o.label]);const p=null!=(n=null==(i=e.customUrl)?void 0:i.call(e,l))?n:`#/${l.join("/").replace(/^\//,"")}`;return g("a",{href:p},[o.label])},b=()=>{var e;if(!(null==(e=p.value)?void 0:e.length))return null;u.value!==p.value.length&&(u.value=p.value.length);const o=[];return p.value.map(((e,l,i)=>{o.push((e.path||"").replace(/^\//,""));const n=[...o];return g(oe,{key:e.path||e.label,index:l,droplist:e.children},{default:()=>{var o,l;return[null!=(l=null==(o=t["item-render"])?void 0:o.call(t,{route:e,routes:i,paths:n}))?l:c(e,i,n)]}})}))},f=()=>{var e,o;const l=I(null!=(o=null==(e=t.default)?void 0:e.call(t))?o:[]);return u.value!==l.length&&(u.value=l.length),l.map(((e,o)=>{var t;return e.props=H(null!=(t=e.props)?t:{},{index:o}),e}))};return()=>g("div",{role:"list",class:s},[t.default?f():b()])}});e("a",Object.assign(te,{Item:oe,install:(e,o)=>{M(e,o);const t=N(o);e.component(t+te.name,te),e.component(t+oe.name,oe)}}))}}}));
