import{_ as k}from"./Rpf-HwKc.js";import{_ as L}from"./znoIVrSW.js";import{_ as M}from"./C73BqAvG.js";import{_ as S}from"./7WDu-kZ7.js";import{_ as q}from"./Dlat3K50.js";import{r as A,$ as l,a4 as t,D as a,X as r,u as o,F as u,ac as f,ad as C,V as i,a6 as _,a5 as c,aa as x,ab as h,a9 as F}from"./Dg7Bj1Dn.js";import{F as T,i as B}from"./B-bks5JU.js";import{u as N}from"./j5w3CbAX.js";import{_ as $}from"./D3OYlhAI.js";import{M as j}from"./DASsLSGy.js";import{_ as I,M as O}from"./BG0YTuJd.js";import{D as Y}from"./DczqWyCm.js";import"./Bqx3TaVY.js";import"./1uDyd419.js";import"./C6PeG3Yx.js";import"./CR1K4Q6C.js";import"./Ble3GC-2.js";import"./DD5tuRru.js";import"./Cs9HPQyc.js";import"./Do11PQxe.js";import"./CECZEjtU.js";import"./CAGM7sKK.js";import"./CLFzEa0p.js";import"./DCLKR33z.js";import"./DP_f_eJI.js";import"./CwvLUgNx.js";import"./D0eSQUGA.js";const Q={class:"bg-white pb-10 rounded-lg overflow-hidden overflow-y-auto max-h-[calc(100vh_-_160px)]"},R={class:"flex items-center justify-between p-5 border-b border-[#EDEDED]"},X=t("button",{class:"font-semibold text-xl"},"O'quvchilar",-1),z={class:"table-auto mt-5 w-full"},G=t("thead",null,[t("tr",{class:"text-sm b_cff3 whitespace-nowrap"},[t("th",{class:"text-start font-medium _c66 px-5 py-3"},"№"),t("th",{class:"text-start font-medium _c66 px-5 py-3"},"Ism"),t("th",{class:"text-start font-medium _c66 px-5 py-3"},"Reyting"),t("th",{class:"text-start font-medium _c66 px-5 py-3"},"Telefon raqam"),t("th",{class:"text-start font-medium _c66 px-5 py-3"},"Status"),t("th",{class:"text-start font-medium _c66 px-5 py-3"},"Yaratilgan"),t("th",{class:"_c66 px-5 py-3"})])],-1),H={class:"border-b border-[#EDEDED]"},J={class:"py-6 px-5 text-sm"},K={class:"py-6 px-5"},P={class:"flex items-center h-full gap-2"},W=t("td",{class:"py-6 px-5"},"12",-1),Z={class:"py-6 px-5"},tt={class:"py-6 px-5"},et={class:"py-6 px-5"},ot={class:"py-6 px-5"},st=t("img",{class:"cursor-pointer",src:$,alt:""},null,-1),at={key:0,class:"w-full space-y-1 mt-1"},nt=t("div",{class:"flex justify-between items-center w-full"},[t("h1",{class:"font-semibold text-2xl"},"O'quvchi qo'shish")],-1),rt={class:"space-y-2"},lt=t("label",{for:"name"},"Ism familiya",-1),it={class:"space-y-2"},_t=t("label",{for:"phone"},"Telefon raqami",-1),jt={__name:"index",setup(pt){const{formateCreatedAt:y}=N(),n=T(),b=B(),p=A({create:!1});return n.store.getall=[],n.create.role=["student"],n.getAll(),(ct,s)=>{const m=k,g=L,w=M,d=I,v=O,D=Y,U=S,E=q,V=j;return i(),l("main",Q,[t("nav",R,[X,a(m,{onClick:s[0]||(s[0]=e=>o(p).create=!0),class:"bg_orange font-semibold white !px-6"},{default:r(()=>[_("Qo‘shish")]),_:1})]),t("section",null,[t("table",z,[G,t("tbody",null,[(i(!0),l(u,null,f(o(n).store.getall,e=>(i(),l("tr",H,[t("td",J,"#"+c(e.id),1),t("td",K,[t("div",P,[a(g,{class:"max-h-[32px] max-w-[32px]"}),_(" "+c(e.full_name),1)])]),W,t("td",Z,c(e.phone),1),t("td",tt,[a(w,{status:1})]),t("td",et,c(o(y)(e.createdAt)),1),t("td",ot,[a(D,{trigger:["click"]},{overlay:r(()=>[a(v,null,{default:r(()=>[a(d,null,{default:r(()=>[_("Edit")]),_:1}),a(d,null,{default:r(()=>[_("Delete")]),_:1})]),_:1})]),default:r(()=>[st]),_:1})])]))),256))])]),o(b).isLoadingType("getAllUsers")?(i(),l("div",at,[(i(),l(u,null,f(10,e=>a(U,{l_height:"60px"})),64))])):C("",!0)]),a(V,{class:"max-w-[440px]",open:o(p).create,"onUpdate:open":s[5]||(s[5]=e=>o(p).create=e),centered:""},{default:r(()=>[nt,t("form",{class:"space-y-5 _c45 mt-[30px]",onSubmit:s[4]||(s[4]=F((...e)=>o(n).register&&o(n).register(...e),["prevent"]))},[t("div",rt,[lt,x(t("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>o(n).create.full_name=e),class:"rounded-[12px]",id:"name",type:"text"},null,512),[[h,o(n).create.full_name]])]),t("div",it,[_t,x(t("input",{"onUpdate:modelValue":s[2]||(s[2]=e=>o(n).create.phone=e),class:"rounded-[12px]",id:"phone",type:"text"},null,512),[[h,o(n).create.phone]])]),a(m,{onClick:s[3]||(s[3]=e=>o(p).create=!1),type:"submit",class:"!h-12 w-full bg_orange !mt-[54px] font-semibold white"},{default:r(()=>[_(" Yaratish "),a(E)]),_:1})],32)]),_:1},8,["open"])])}}};export{jt as default};