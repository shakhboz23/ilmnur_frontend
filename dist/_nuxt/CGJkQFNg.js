import{_ as P}from"./DypygR38.js";import{_ as A}from"./7WDu-kZ7.js";import{_ as R}from"./DqaMT-AZ.js";import{v as X}from"./VMt8DGWR.js";import{al as z,r as E,w as W,H as Y,$ as c,a4 as e,u as s,W as b,X as i,ad as K,F as x,ac as g,D as r,ag as Q,V as n,a6 as m,ah as G,a5 as u,ai as I,aa as w,ab as J,a9 as O}from"./Dg7Bj1Dn.js";import{$ as Z,i as ee,u as te}from"./rmVoKyAr.js";import{u as se}from"./B8CyS364.js";import{_ as oe}from"./D3OYlhAI.js";import{_ as ne,a as ae,b as ie,c as le}from"./DFlDS4O2.js";import{u as ce}from"./j5w3CbAX.js";import{M as re}from"./B2TCpOrA.js";import{_ as de,M as _e}from"./B83x48NT.js";import{D as me}from"./C8qT9uG5.js";import"./B2W3Qw7L.js";import"./Dm9o5LlW.js";import"./ByTfTYi2.js";import"./OZUmrK_A.js";import"./DmIqEkhR.js";import"./DHqEE7Hx.js";import"./NGD3Z_RD.js";import"./Bi9N8uqL.js";import"./CLFzEa0p.js";import"./DCj94CgU.js";import"./smLjY0U4.js";import"./BDTnF8Yp.js";import"./_eVe-hpD.js";import"./vqpIx3q4.js";import"./CECZEjtU.js";import"./DP_f_eJI.js";import"./DvjpAFVN.js";import"./C1sj_x83.js";const ue={class:"sidebar lessons_view bg-white md:p-8 p-4 pt-6 sm:rounded-[6px] overflow-hidden overflow-y-auto md:max-h-[calc(100vh_-_160px)] md:min-h-[calc(100vh_-_160px)] max-h-[calc(100vh_-_135px)] min-h-[calc(100vh_-_135px)]"},pe=e("h1",{class:"font-semibold md:text-[28px] text-xl"},"Assalomu alaykum",-1),he=e("p",{class:"font-medium text-sm mt-1 _c66"},"Bugun nimani o‘rganmoqchisiz?",-1),fe={class:"flex items-center justify-between"},xe=e("h2",{class:"md:text-xl font-medium md:mt-[30px] mt-4"},"Fanlar",-1),ge={key:0,class:"grid xl:grid-cols-2 gap-5 mt-3 pb-20"},be={key:1},we={class:"grid xl:grid-cols-2 gap-5 mt-3 pb-20"},ve={class:"relative flex items-end justify-between lesson_shadow bg-white p-5 r_10 h-[160px]"},ye=e("img",{class:"cursor-pointer min-w-[20px]",src:oe,alt:""},null,-1),ke={class:"font-medium md:text-2xl text-xl"},Se={class:"flex items-center _c92 mt-[6px] mb-5 gap-4"},je={class:"flex gap-[10px]"},Ce=e("img",{src:ne,alt:""},null,-1),Be={class:"flex items-center gap-[10px]"},$e=e("img",{src:ae,alt:""},null,-1),Le={class:"flex gap-1"},qe=["onClick"],De={class:"full_flex relative"},Fe={class:"_c92 full_flex absolute flex-col min-w-fit"},Me=e("h1",{class:"text-[10px] _c92"},"Barchasi",-1),Ve={class:"text-center"},Te={class:"black_24 text-xl"},He=e("hr",{class:"border-[#929292]"},null,-1),Ue={class:"text-sm px-2 mt-1 _c92"},Ne={key:2,class:"full_flex h-full py-20 flex-col space-y-4"},Pe=e("img",{draggable:"false",class:"h-20",src:ie,alt:""},null,-1),Ae=e("p",null,"Hech qanday fan topilmadi",-1),Re=[Pe,Ae],Xe={class:"flex justify-between items-center w-full"},ze={class:"font-semibold text-2xl"},Ee={key:0},We={key:1},Ye={class:"space-y-2"},Ke=e("label",{for:"name"},"Fan nomi",-1),Qe=e("div",{class:"space-y-6"},[e("h1",{class:"font-semibold text-lg"},"Fanni o'chirish"),e("p",null,"Haqiqatdan ham bu fanni o'chirmoqchimisiz?")],-1),Ge={class:"flex items-center gap-5 mt-5"},Lt={__name:"index",async setup(Ie){let v,y;const B=[Q],{formatSecondsToHours:$}=ce(),t=Z(),p=ee(),L=te();[v,y]=z(()=>se(()=>t.getSubjects(),"$VW7CcoVkP5")),await v,y();const _=E({reyting:50,mouse_wheel:0});function q(){setTimeout(()=>{},200)}function D(a){a.deltaX>0?(_.mouse_wheel+=1,_.mouse_wheel%10==0&&(useLesson.store.class+=1,_.mouse_wheel=0),console.log("Scrolling to the right")):a.deltaX<0&&(_.mouse_wheel+=1,_.mouse_wheel%10==0&&(useLesson.store.class-=1,_.mouse_wheel=0),console.log("Scrolling to the left"))}function F(a){t.store.subject_id=a,t.modal.delete=!0}function M(a){for(let o in t.create)t.create[o]=a[o];t.store.subject_id=a.id,t.modal.edit=!0,t.modal.create=!0}return W(()=>t.modal.create,()=>{console.log(t.modal.create),t.modal.create||(t.modal.edit=!1,t.clearData())}),Y(()=>{const a=document.querySelector(".swiper-pagination-clickable"),o=a==null?void 0:a.children[+L.currentRoute.value.query.class];o&&o.click()}),(a,o)=>{var C;const h=P,V=A,k=de,T=_e,H=me,U=le,N=R,S=re,j=X;return n(),c("main",ue,[e("section",null,[pe,he,e("div",fe,[xe,s(p).user.data.current_role=="admin"?(n(),b(h,{key:0,onClick:o[0]||(o[0]=l=>s(t).modal.create=!0),class:"bg_orange font-semibold white !px-6"},{default:i(()=>[m("Qo‘shish")]),_:1})):K("",!0)])]),s(p).isLoadingType("get")?(n(),c("section",ge,[(n(),c(x,null,g(6,l=>r(V,{class:"!h-[168px]"})),64))])):(C=s(t).store.subjects)!=null&&C.length?(n(),c("section",be,[r(s(I),{onMousewheel:D,onSliderMove:q,watchSlidesProgress:!0,slidesPerView:1,spaceBetween:30,pagination:{clickable:!0},class:"mySwiper md:mt-[18px] mt-2",modules:B},{default:i(()=>[(n(),c(x,null,g(11,(l,Je)=>r(s(G),{id:l},{default:i(()=>[e("section",we,[(n(!0),c(x,null,g(s(t).store.subjects,d=>(n(),c("div",ve,[r(H,{class:"absolute top-4 right-4",trigger:["click"],placement:"bottomRight"},{overlay:i(()=>[r(T,null,{default:i(()=>[r(k,{onClick:f=>M(d)},{default:i(()=>[m("Edit")]),_:2},1032,["onClick"]),r(k,{onClick:f=>F(d.id)},{default:i(()=>[m("Delete")]),_:2},1032,["onClick"])]),_:2},1024)]),default:i(()=>[ye]),_:2},1024),e("div",null,[e("h1",ke,u(d.title),1),e("div",Se,[e("div",je,[Ce,m(" "+u(d.coursesCount),1)]),e("div",Be,[$e,e("p",Le,[(n(!0),c(x,null,g(s($)(d.totalDuration),f=>(n(),c("span",null,u(f),1))),256))])])]),e("button",{onClick:f=>a.$router.push(`/subjects/${d.title}/courses?class=${s(t).store.class}`),class:"bg_orange h-10 px-5 r_10 white"}," Keyingi ",8,qe)]),e("div",De,[r(U,{class:"!h-[92px] !w-[92px]",type:"circle",percent:s(_).reyting},null,8,["percent"]),e("div",Fe,[Me,e("div",Ve,[e("p",Te,u(d.finished_step),1),He,e("p",Ue,u(d.coursesCount),1)])])])]))),256))])]),_:2},1032,["id"])),64))]),_:1})])):(n(),c("section",Ne,Re)),r(S,{class:"max-w-[440px]",open:s(t).modal.create,"onUpdate:open":o[3]||(o[3]=l=>s(t).modal.create=l),centered:""},{default:i(()=>[e("div",Xe,[e("h1",ze,[s(t).modal.edit?(n(),c("span",Ee,"Fanni tahrirlash")):(n(),c("span",We,"Fan qo'shish"))])]),e("form",{class:"space-y-5 _c45 mt-[30px]",onSubmit:o[2]||(o[2]=O((...l)=>s(t).createSubjects&&s(t).createSubjects(...l),["prevent"]))},[e("div",Ye,[Ke,w(e("input",{"onUpdate:modelValue":o[1]||(o[1]=l=>s(t).create.title=l),class:"rounded-[12px]",id:"name",type:"text"},null,512),[[J,s(t).create.title]])]),w((n(),b(h,{type:"submit",class:"!h-12 w-full bg_orange !mt-[54px] font-semibold white"},{default:i(()=>[m(" Yaratish "),r(N)]),_:1})),[[j,s(p).isLoadingType("updateSubject")]])],32)]),_:1},8,["open"]),r(S,{width:"200",open:s(t).modal.delete,"onUpdate:open":o[5]||(o[5]=l=>s(t).modal.delete=l),centered:""},{default:i(()=>[Qe,e("div",Ge,[r(h,{onClick:o[4]||(o[4]=l=>s(t).modal.delete=!1),class:"border border-[#BBBBBB] !h-10"},{default:i(()=>[m("Yo'q")]),_:1}),w((n(),b(h,{onClick:s(t).deleteSubject,class:"bg_orange white !h-10"},{default:i(()=>[m("Ha")]),_:1},8,["onClick"])),[[j,s(p).isLoadingType("deleteSubject")]])])]),_:1},8,["open"])])}}};export{Lt as default};
