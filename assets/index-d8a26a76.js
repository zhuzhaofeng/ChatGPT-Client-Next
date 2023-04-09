import{g as te,m as ae,s as f,v as S,E as oe,aW as P,aX as F,o as k,c as L,w as I,a as B,n as _,a0 as re,N as ne,aQ as ue,aO as ce,C as fe,A as de,r as J,i as ve,b as x,Q as he,S as be,P as ee,T as me,U as ze}from"./index-dcda80a3.js";const Se=te({name:"Thumb",props:{data:{type:Object},direction:{type:String,default:"horizontal"},alwaysShow:{type:Boolean,default:!1},both:{type:Boolean,default:!1}},emits:["scroll"],setup(e,{emit:l}){const n=ae("scrollbar"),o=f(!1),v=f(),s=f(),a=S(()=>e.direction==="horizontal"?{size:"width",direction:"left",offset:"offsetWidth",client:"clientX"}:{size:"height",direction:"top",offset:"offsetHeight",client:"clientY"}),i=f(0),h=f(!1),y=f(0),g=S(()=>{var t,d;return{[a.value.size]:`${(d=(t=e.data)==null?void 0:t.thumbSize)!=null?d:0}px`,[a.value.direction]:`${i.value}px`}}),$=t=>{t.preventDefault(),s.value&&(y.value=t[a.value.client]-s.value.getBoundingClientRect()[a.value.direction],h.value=!0,P(window,"mousemove",w),P(window,"mouseup",p),P(window,"contextmenu",p))},m=t=>{var d,r,u,c;if(t.preventDefault(),s.value){const b=R(t[a.value.client]>s.value.getBoundingClientRect()[a.value.direction]?i.value+((r=(d=e.data)==null?void 0:d.thumbSize)!=null?r:0):i.value-((c=(u=e.data)==null?void 0:u.thumbSize)!=null?c:0));b!==i.value&&(i.value=b,l("scroll",b))}},R=t=>t<0?0:e.data&&t>e.data.max?e.data.max:t,w=t=>{if(v.value&&s.value){const d=R(t[a.value.client]-v.value.getBoundingClientRect()[a.value.direction]-y.value);d!==i.value&&(i.value=d,l("scroll",d))}},p=()=>{h.value=!1,F(window,"mousemove",w),F(window,"mouseup",p)},H=t=>{h.value||(t=R(t),t!==i.value&&(i.value=t))},V=S(()=>[`${n}-thumb`,`${n}-thumb-direction-${e.direction}`,{[`${n}-thumb-dragging`]:h.value}]);return{visible:o,trackRef:v,thumbRef:s,prefixCls:n,thumbCls:V,thumbStyle:g,handleThumbMouseDown:$,handleTrackClick:m,setOffset:H}}});function ge(e,l,n,o,v,s){return k(),L(ue,null,{default:I(()=>[B("div",{ref:"trackRef",class:_([`${e.prefixCls}-track`,`${e.prefixCls}-track-direction-${e.direction}`]),onMousedown:l[1]||(l[1]=re((...a)=>e.handleTrackClick&&e.handleTrackClick(...a),["self"]))},[B("div",{ref:"thumbRef",class:_(e.thumbCls),style:ne(e.thumbStyle),onMousedown:l[0]||(l[0]=(...a)=>e.handleThumbMouseDown&&e.handleThumbMouseDown(...a))},[B("div",{class:_(`${e.prefixCls}-thumb-bar`)},null,2)],38)],34)]),_:1})}var $e=oe(Se,[["render",ge]]);const le=20,M=15,Re=te({name:"Scrollbar",components:{ResizeObserver:ce,Thumb:$e},inheritAttrs:!1,props:{type:{type:String,default:"embed"},outerClass:[String,Object,Array],outerStyle:{type:[String,Object,Array]},hide:{type:Boolean,default:!1},disableHorizontal:{type:Boolean,default:!1},disableVertical:{type:Boolean,default:!1}},emits:{scroll:e=>!0},setup(e,{emit:l}){const n=ae("scrollbar"),o=f(),v=f(),s=f(),a=f(),i=f(),h=f(!1),y=f(!1),g=S(()=>h.value&&!e.disableHorizontal),$=S(()=>y.value&&!e.disableVertical),m=f(!1),R=()=>{var r,u,c,b,C,O;if(o.value){const{clientWidth:T,clientHeight:z,offsetWidth:U,offsetHeight:Q,scrollWidth:D,scrollHeight:W,scrollTop:X,scrollLeft:Z}=o.value;h.value=D>T,y.value=W>z,m.value=g.value&&$.value;const j=e.type==="embed"&&m.value?U-M:U,A=e.type==="embed"&&m.value?Q-M:Q,G=Math.round(j/Math.min(D/T,j/le)),K=j-G,ie=(D-T)/K,Y=Math.round(A/Math.min(W/z,A/le)),q=A-Y,se=(W-z)/q;if(v.value={ratio:ie,thumbSize:G,max:K},s.value={ratio:se,thumbSize:Y,max:q},X>0){const N=Math.round(X/((u=(r=s.value)==null?void 0:r.ratio)!=null?u:1));(c=i.value)==null||c.setOffset(N)}if(Z>0){const N=Math.round(Z/((C=(b=s.value)==null?void 0:b.ratio)!=null?C:1));(O=a.value)==null||O.setOffset(N)}}};fe(()=>{R()});const w=()=>{R()},p=r=>{var u,c,b,C,O,T;if(o.value){if(g.value&&!e.disableHorizontal){const z=Math.round(o.value.scrollLeft/((c=(u=v.value)==null?void 0:u.ratio)!=null?c:1));(b=a.value)==null||b.setOffset(z)}if($.value&&!e.disableVertical){const z=Math.round(o.value.scrollTop/((O=(C=s.value)==null?void 0:C.ratio)!=null?O:1));(T=i.value)==null||T.setOffset(z)}}l("scroll",r)},H=r=>{var u,c;o.value&&o.value.scrollTo({left:r*((c=(u=v.value)==null?void 0:u.ratio)!=null?c:1)})},V=r=>{var u,c;o.value&&o.value.scrollTo({top:r*((c=(u=s.value)==null?void 0:u.ratio)!=null?c:1)})},t=S(()=>{const r={};return e.type==="track"&&(g.value&&(r.paddingBottom=`${M}px`),$.value&&(r.paddingRight=`${M}px`)),[r,e.outerStyle]}),d=S(()=>[`${n}`,`${n}-type-${e.type}`,{[`${n}-both`]:m.value},e.outerClass]);return{prefixCls:n,cls:d,style:t,containerRef:o,horizontalThumbRef:a,verticalThumbRef:i,horizontalData:v,verticalData:s,isBoth:m,hasHorizontalScrollbar:g,hasVerticalScrollbar:$,handleResize:w,handleScroll:p,handleHorizontalScroll:H,handleVerticalScroll:V}},methods:{scrollTo(e,l){var n,o;de(e)?(n=this.$refs.containerRef)==null||n.scrollTo(e):(e||l)&&((o=this.$refs.containerRef)==null||o.scrollTo(e,l))},scrollTop(e){var l;(l=this.$refs.containerRef)==null||l.scrollTo({top:e})},scrollLeft(e){var l;(l=this.$refs.containerRef)==null||l.scrollTo({left:e})}}});function Te(e,l,n,o,v,s){const a=J("ResizeObserver"),i=J("thumb");return k(),ve("div",{class:_(e.cls),style:ne(e.style)},[x(a,{onResize:e.handleResize},{default:I(()=>[B("div",he({ref:"containerRef",class:`${e.prefixCls}-container`},e.$attrs,{onScroll:l[0]||(l[0]=(...h)=>e.handleScroll&&e.handleScroll(...h))}),[x(a,{onResize:e.handleResize},{default:I(()=>[be(e.$slots,"default")]),_:3},8,["onResize"])],16)]),_:3},8,["onResize"]),!e.hide&&e.hasHorizontalScrollbar?(k(),L(i,{key:0,ref:"horizontalThumbRef",data:e.horizontalData,direction:"horizontal",both:e.isBoth,onScroll:e.handleHorizontalScroll},null,8,["data","both","onScroll"])):ee("v-if",!0),!e.hide&&e.hasVerticalScrollbar?(k(),L(i,{key:1,ref:"verticalThumbRef",data:e.verticalData,direction:"vertical",both:e.isBoth,onScroll:e.handleVerticalScroll},null,8,["data","both","onScroll"])):ee("v-if",!0)],6)}var E=oe(Re,[["render",Te]]);const pe=Object.assign(E,{install:(e,l)=>{me(e,l);const n=ze(l);e.component(n+E.name,E)}});export{pe as S};
