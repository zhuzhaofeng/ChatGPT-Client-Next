import{o as a,au as e,d as l,r as s,l as t,c as o,av as r,m as n,aw as d,n as u,ao as i,e as c,f as m,g as p,h as f,i as x,j as g,p as b,z as w,u as v,F as y,a0 as _,v as h,ax as V,ay as k,az as z,B as E,aA as S,Z as j,W as A,$ as C,aB as D,aC as T,aD as I,L as U,t as O,ar as $,aE as L,M as B,x as F,aF as M,aG as P,aH as R,aI as W}from"./.pnpm-22857cbc.js";import{c as G,I as H,d as J,D as N,a as Z}from"./index-e8ed8090.js";const q=l("__AI_1024_STORE_DRAW",(()=>{const e=G(),l=s(!1),o=s([]);a((()=>{}));return{draws:o,loading:l,imageDrawAction:a=>{l.value=!0,async function(a,e){const l=new AbortController,s=setTimeout((()=>l.abort()),3e5);try{const t=`${G().bootstrap.api}${H}`,o=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),signal:l.signal});if(clearTimeout(s),o.ok){const a=await o.json();500===a.code?null==e||e.onError(new Error(a.msg),a.code):null==e||e.onSuccess(a)}else if(401===o.status)null==e||e.onError(new Error("Anauthorized"),o.status);else if(500===o.status){const a=await o.json();null==e||e.onError(new Error(a),o.status)}else null==e||e.onError(new Error("Stream Error"),o.status)}catch(t){null==e||e.onError(t)}}({...a,card:e.card},{onController(a){},onSuccess(e){l.value=!1,o.value.push({prompt:a.prompt,size:a.size,urls:e.data.map((a=>`data:image/png;base64, ${a.b64_json}`)),date:e.created})},onError(a){var e;l.value=!1,t.error(null!=(e=null==a?void 0:a.message)?e:"")}})}}}),{persist:{storage:localStorage,paths:["draws"]}}),K={class:"flex items-center gap-x-5"},Q={class:"text-xs px-2 py-1"},X={class:"flex flex-col gap-y-1 select-none"},Y=Z(o({__name:"DrawView",setup(l){const{isMobileScreen:o}=J(),G=r({prompt:"",size:"256x256",n:1,response_format:"b64_json"}),H=s(0),Z=n((()=>V(N,2)[H.value])),Y=()=>{const a=V(N,2).length-1,e=H.value+1>a?0:H.value+1;H.value=e},aa=q(),ea=n((()=>aa.loading));(l=>{const s=a=>{l&&(a.returnValue="浏览器正在关闭或刷新页面！")};a((()=>{window.addEventListener("beforeunload",s)})),e((()=>{window.removeEventListener("beforeunload",s)}))})(ea),d((async()=>!ea.value||await new Promise(((a,e)=>{B.warning({title:"提示",okText:"离开",hideCancel:!1,content:"AI已经开始处理您的请求，此时刷新或离开页面，也会造成您的积分扣除，确定刷新或离开吗？",onOk(){a(!0)},onCancel(){e(!1)}})}))));const la=()=>{G.prompt.trim().length<1?t.error("关键词不能为空"):aa.imageDrawAction(G)},sa=n((()=>aa.draws));return(a,e)=>{const l=u("icon-exclamation-circle-fill"),s=k,t=z,r=u("icon-loop"),n=E,d=F,V=u("icon-robot"),B=S,H=j,J=A,N=C,q=M,aa=P,ta=R,oa=W,ra=D,na=T,da=I,ua=U,ia=i("date-time");return c(),m(ua,{"outer-style":"flex: 1; overflow: hidden;",class:"overflow-y-auto h-full p-4 flex flex-col gap-y-2"},{default:p((()=>[f("div",{class:_(["draw-view",{"is-mobile":v(o)}])},[x(s,{type:"info",class:"max-w-max mx-auto rounded-full text-xs"},{icon:p((()=>[x(l)])),default:p((()=>[g(" 根据输入关键词生成~大约需要30s左右时间 ")])),_:1}),f("div",K,[x(t,{class:"h-12 flex items-center",bold:""},{default:p((()=>[g(" 关键词示例 ")])),_:1}),x(n,{type:"text",size:"mini",onClick:Y},{default:p((()=>[x(r)])),_:1})]),(c(!0),b(y,null,w(v(Z),(a=>(c(),b("div",{key:a.tag,class:"flex items-center gap-x-1 mb-2"},[f("mark",Q,O(a.tag),1),x(d,{type:"secondary",copyable:"",class:"mb-0"},{default:p((()=>[g(O(a.keywords),1)])),_:2},1024)])))),128)),x(B,{loading:v(ea),class:"w-full mt-4",size:"large",autofocus:"",modelValue:v(G).prompt,"onUpdate:modelValue":e[0]||(e[0]=a=>v(G).prompt=a),placeholder:"请用中文输入关键词如上，参考形式: 画面主体，细节描述，修饰词","search-button":"",onSearch:la},{"button-icon":p((()=>[x(V)])),"button-default":p((()=>[g("生成")])),_:1},8,["loading","modelValue"]),x(N,{model:v(G),class:_([{"is-mobile":v(o)},"mt-4 p-4 bg-light-300 dark:bg-dark-900 rounded"]),"label-col-props":{span:v(o)?24:void 0},"auto-label-width":!v(o),"label-align":"left"},{default:p((()=>[x(t,{class:"block",bold:""},{default:p((()=>[g(" 参数设置 ")])),_:1}),x(J,{label:"图片尺寸",class:"mb-2"},{default:p((()=>[f("div",{class:_(["w-full",{"grid grid-cols-2 gap-y-2":v(o)}])},[x(H,{class:"min-w-max",modelValue:v(G).size,"onUpdate:modelValue":e[1]||(e[1]=a=>v(G).size=a),type:"button",value:"256x256"},{default:p((()=>[g(" 256x256(小图) ")])),_:1},8,["modelValue"]),x(H,{class:"min-w-max",modelValue:v(G).size,"onUpdate:modelValue":e[2]||(e[2]=a=>v(G).size=a),type:"button",value:"512x512"},{default:p((()=>[g(" 512x512(中图) ")])),_:1},8,["modelValue"]),x(H,{class:"min-w-max",modelValue:v(G).size,"onUpdate:modelValue":e[3]||(e[3]=a=>v(G).size=a),type:"button",value:"1024x1024"},{default:p((()=>[g(" 1024x1024(大图) ")])),_:1},8,["modelValue"])],2)])),_:1}),x(J,{help:"每张图片 20 积分","validate-status":"warning",label:"图片数量",class:"mb-2"},{default:p((()=>[f("div",{class:_(["w-full",{"grid grid-cols-5 gap-y-2":v(o)}])},[(c(),b(y,null,w(10,(a=>x(H,{class:"min-w-max",modelValue:v(G).n,"onUpdate:modelValue":e[4]||(e[4]=a=>v(G).n=a),type:"button",key:a,value:a},{default:p((()=>[g(O(a)+"张 ",1)])),_:2},1032,["modelValue","value"]))),64))],2)])),_:1})])),_:1},8,["model","class","label-col-props","auto-label-width"]),v(sa).length?(c(),m(da,{key:0,class:"mt-6",type:"capsule"},{default:p((()=>[x(na,{key:"1",title:"我的作品"},{default:p((()=>[x(ra,{"default-active-key":[1],accordion:""},{default:p((()=>[(c(!0),b(y,null,w(v(sa).reverse(),(a=>(c(),m(oa,{key:a.date},{extra:p((()=>[x(q,{color:"red",size:"small"},{default:p((()=>[g(O(a.urls.length)+"张",1)])),_:2},1024)])),header:p((()=>[f("div",X,[x(d,{class:"mb-0",ellipsis:{rows:1,expandable:!0}},{default:p((()=>[g(O(a.prompt),1)])),_:2},1024),$(f("small",{style:L({color:"var(--color-text-3)"})},null,4),[[ia,1e3*a.date]])])])),default:p((()=>[x(ta,{infinite:""},{default:p((()=>[f("div",{class:_(["grid gap-3",[v(o)?"grid-cols-2":"grid-cols-5"]])},[(c(!0),b(y,null,w(a.urls,(a=>(c(),m(aa,{key:a,src:a},null,8,["src"])))),128))],2)])),_:2},1024),x(s,{type:"info",class:"max-w-max mx-auto rounded-full text-xs my-4"},{icon:p((()=>[x(l)])),default:p((()=>[g(" 尺寸: "+O(a.size),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})):h("",!0)],2)])),_:1})}}}),[["__scopeId","data-v-6a846abb"]]);export{Y as default};