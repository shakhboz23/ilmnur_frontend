import{d as r}from"./rmVoKyAr.js";import{u as l}from"./A-HS0ZFN.js";import{d as s,c as m,V as u,$ as p}from"./Dg7Bj1Dn.js";const y={id:"widget_container"},g=s({__name:"CldMediaLibrary",props:{cloudName:{},apiKey:{},username:{},useSaml:{type:Boolean},buttonId:{},params:{}},emits:["onInsert"],setup(i,{emit:t}){const n=m(),e=i,d=t,c=()=>{if("cloudinary"in window){n.value=window.cloudinary;const o=Object.fromEntries(Object.entries(e).filter(a=>!!a[1]));n.value.createMediaLibrary({inline_container:"#widget_container",cloud_name:e.cloudName||r().public.cloudinary.cloudName,api_key:e.apiKey||r().public.cloudinary.apiKey,...o,...e.params},{insertHandler:function(a){d("onInsert",a)}},document.getElementById(e.buttonId))}};return l({script:[{id:`cloudinary-media-library-${Math.floor(Math.random()*100)}`,src:"https://media-library.cloudinary.com/global/all.js",onload:c,onerror:o=>console.error(`Failed to load Cloudinary Media Library: ${o.message}`)}]}),(o,a)=>(u(),p("div",y))}});export{g as default};
