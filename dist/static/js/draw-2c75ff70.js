import{d as r,r as o,o as a,l as e}from"./.pnpm-dd960497.js";import{d as t,I as n,M as s}from"./index-c4a252cc.js";const l=r("__AI_1024_STORE_DRAW",(()=>{const r=t(),l=o(!1),u=o({date:1683130381673,prompt:"",image_id:"",image_url:"",actions:[]}),i=o();a((()=>{}));return{dallEImage:i,loading:l,imageDrawAction:o=>{l.value=!0,async function(r,o){const a=new AbortController,e=setTimeout((()=>a.abort()),3e5);try{const s=`${t().bootstrap.api}${n}`,l=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r),signal:a.signal});if(clearTimeout(e),l.ok){const r=await l.json();500===r.code?null==o||o.onError(new Error(r.msg),r.code):null==o||o.onSuccess(r)}else if(401===l.status)null==o||o.onError(new Error("Anauthorized"),l.status);else if(500===l.status){const r=await l.json();null==o||o.onError(new Error(r),l.status)}else null==o||o.onError(new Error("Stream Error"),l.status)}catch(s){null==o||o.onError(s)}}({...o,card:r.card},{onController(r){},onSuccess(r){l.value=!1,i.value={prompt:o.prompt,size:o.size,urls:r.data.map((r=>r.url)),date:r.created}},onError(r){var o;l.value=!1,e.error(null!=(o=null==r?void 0:r.message)?o:"")}})},mjGenAction:o=>{l.value=!0,async function(r,o){try{const a=`${t().bootstrap.api}${s}`,e=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(e.ok){const r=await e.json();500===r.code?null==o||o.onError(new Error(r.msg),r.code):null==o||o.onSuccess(r)}else if(401===e.status)null==o||o.onError(new Error("Anauthorized"),e.status);else if(500===e.status){const r=await e.json();null==o||o.onError(new Error(r),e.status)}else null==o||o.onError(new Error("Stream Error"),e.status)}catch(a){null==o||o.onError(a)}}({...o,card:r.card},{onSuccess(r){l.value=!1,u.value={...r,prompt:o.prompt,date:(new Date).getDate()}},onError(r){var o;l.value=!1,e.error(null!=(o=null==r?void 0:r.message)?o:"")}})},mjImage:u}}),{persist:{storage:sessionStorage,paths:["dallEImage","mjImage"]}});export{l as u};