import{_ as B}from"./BvIlu0t3.js";import{_ as R,a as q}from"./EwZAERIy.js";import{Z as T,K as j,i as D,u as $}from"./CA2Ut2yR.js";import{_ as E}from"./DjMDzfwj.js";import{r as M,w as N,G as S,$ as l,u as o,a4 as t,ad as I,a5 as H,a6 as C,D as K,X as G,W as O,V as i}from"./Dg7Bj1Dn.js";import"./B2gxhBFR.js";import"./C_FskyzK.js";import"./B0kZBdZc.js";import"./DVO2Euut.js";import"./p9mG-Oq9.js";import"./C0F30SrC.js";import"./DLm7LKaQ.js";import"./2GdDCiU5.js";import"./BhZwMSgh.js";import"./CepIFHq7.js";import"./DRcLs4ac.js";import"./ClRULgZ7.js";import"./CECZEjtU.js";import"./sWyiCvQk.js";import"./CLFzEa0p.js";import"./CCE6mm5I.js";import"./Bhg1sG2r.js";import"./DP_f_eJI.js";import"./DHqEE7Hx.js";import"./BcJeu6Se.js";import"./D_4OiXLP.js";import"./DkgJn5kV.js";import"./CTg8croq.js";import"./CLYo8nIm.js";const P={class:"sm:bg-white"},U={key:0},W={class:"video_lesson w-full md:p-[30px] sm:p-4"},X={class:"flex items-center justify-between _c92 border-b border-[#EDEDED] bg-white pb-4 mb-5 sm:pt-0 sm:px-0 pt-4 px-4"},Z=t("img",{src:E,alt:""},null,-1),z=t("p",{class:"text-lg font-semibold sm:block hidden"},"Orqaga",-1),A=[Z,z],F=t("p",{class:"text-xl font-semibold text-black"},"Video dars",-1),J={key:0,class:"bg-white"},Q={key:0,class:"xl:h-[312px] md:h-[270px] sm:h-[250px] h-[172px] sm:rounded-lg relative overflow-hidden"},Y=["src"],ee={class:"sm:px-0 px-4"},te={class:"md:text-[28px] text-xl font-semibold md:mt-[30px] mt-5 sm:mb-6 mb-5 md:text-center"},se=["innerHTML"],oe={class:"full_flex sm:mt-14 mt-10 pb-[60px]"},re={key:2,class:"w-[55%] font-medium bg-[red] h-10 px-5 rounded-full white"},ie={key:1,class:"flex flex-col items-center justify-center gap-5 max-h-[312px] min-h-[312px] overflow-hidden"},ne={key:2,class:"flex flex-col items-center justify-center gap-5 max-h-[312px] min-h-[312px] overflow-hidden"},Se={__name:"index",setup(le){const n=T(),u=j(),m=D(),r=$();M({is_playing:!1,create_lesson:!1});function L(){const s=r.currentRoute.value.path.split("/");let e="/"+s[1]+"/"+s[2];e+="?class="+r.currentRoute.value.query.class,r.push(e)}function p(s,e){const c=r.currentRoute.value.path.split("/");let a;e=="create_test"?a="/"+e+"?lesson_id="+s:(a="/"+c[1]+"/"+c[2]+"/"+c[3]+"/"+s,a+="?class="+r.currentRoute.value.query.class),r.push(a)}function V(){u.store.create_lesson=!0;const s=r.currentRoute.value.path.split("/");let e="/"+s[1]+"/"+s[2]+"/"+s[3];e+="?class="+r.currentRoute.value.query.class+"&create_lesson=true",r.push(e)}return N(()=>r.currentRoute.value.query,()=>{n.getById()}),S(()=>{n.getById()}),(s,e)=>{var _,h,f,x,v,g,b,y,w;const c=B,a=q;return i(),l("main",P,[o(u).store.create_lesson?(i(),O(a,{key:1})):(i(),l("section",U,[t("div",W,[t("nav",X,[t("div",{onClick:e[0]||(e[0]=k=>s.$router.back()),class:"flex items-center gap-4 cursor-pointer max-w-fit"},A),F,t("div",{class:"flex items-center gap-3"},[t("img",{onClick:L,class:"cursor-pointer",src:R,alt:""})])]),(h=(_=o(n).store.video_lesson)==null?void 0:_.video_lesson)!=null&&h.length?(i(),l("div",J,[o(m).isLoadingType("getLessonById")?I("",!0):(i(),l("div",Q,[t("iframe",{src:(x=(f=o(n).store.video_lesson)==null?void 0:f.video_lesson[0].video)==null?void 0:x.url,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:"",class:"w-full h-full"},null,8,Y)])),t("div",ee,[t("h1",te,H((v=o(n).store.video_lesson)==null?void 0:v.title),1),t("div",{innerHTML:(b=(g=o(n).store.video_lesson)==null?void 0:g.video_lesson[0])==null?void 0:b.content,class:"md:w-[55%] mx-auto sm:text-lg space-y-5"},null,8,se),t("div",oe,[(w=(y=o(n).store.video_lesson)==null?void 0:y.tests[0])!=null&&w.id?(i(),l("button",{key:0,onClick:e[1]||(e[1]=k=>{var d;return p((d=o(n).store.video_lesson.video_lesson[0])==null?void 0:d.lesson_id)}),class:"w-[55%] font-medium bg_orange h-10 px-5 rounded-full white"}," Keyingi ")):o(m).user.data.current_role=="main_teacher"?(i(),l("button",{key:1,onClick:e[2]||(e[2]=k=>{var d;return p((d=o(n).store.video_lesson.video_lesson[0])==null?void 0:d.lesson_id,"create_test")}),class:"w-[55%] font-medium b_c40 h-10 px-5 rounded-full white"}," Test qo'shish ")):(i(),l("button",re," Test mavjud emas "))])])])):o(m).user.data.current_role=="main_teacher"?(i(),l("div",ie,[C(" Video darslik mavjud emas "),t("div",null,[K(c,{onClick:V,class:"bg_orange white"},{default:G(()=>[C("Darslik qo'shish")]),_:1})])])):(i(),l("div",ne," Video darslik mavjud emas "))])]))])}}};export{Se as default};