import{_ as p}from"./D_8WA59K.js";import{s as f}from"./BVGygAPM.js";import{K as _}from"./rmVoKyAr.js";import{c as g,W as y,X as b,V as v,D as x,u as s,k as V,a4 as B}from"./Dg7Bj1Dn.js";import"./xpujLuAn.js";const q={__name:"index",setup(C){const r=_(),t=g("<div>Hello World!</div><div>PrimeVue <b>Editor</b> Rocks</div><div><br></div>");async function i(){const o=document.getElementById("editor").querySelectorAll("img");let e=0;(async function(){for await(let a of o){const n=document.getElementById("editor").querySelectorAll("img"),c=n[e].src.split(";base64,").pop(),d=Uint8Array.from(atob(c),m=>m.charCodeAt(0)).buffer,u=new File([d],"file.png",{type:"image/png"});n[e].src=await r.create_url(u),console.log(n[e].src),e++}r.create.content=t.value,r.uploadContent()})()}return(l,o)=>{const e=p;return v(),y(e,{class:"editor card mt-40 px-20"},{default:b(()=>[x(s(f),{id:"editor",modelValue:s(t),"onUpdate:modelValue":o[0]||(o[0]=a=>V(t)?t.value=a:null),editorStyle:"height: 320px"},null,8,["modelValue"]),B("button",{onClick:i},"Send")]),_:1})}}};export{q as default};
