import{_ as S}from"./rXyetKoS.js";import{_ as R}from"./DypygR38.js";import{_ as N,b as P,a as E}from"./CusvXpT6.js";import{r as M,c as I,w as H,G as K,$ as r,u as t,a4 as s,D as C,aa as z,ap as A,ad as G,a5 as O,a6 as F,X as U,W,V as n}from"./Dg7Bj1Dn.js";import{a as X,Z,K as J,i as Q,u as Y}from"./rmVoKyAr.js";import{_ as ee}from"./DjMDzfwj.js";import"./A-HS0ZFN.js";import"./L75Ugayu.js";import"./DRv3q06g.js";import"./DqaMT-AZ.js";import"./B2W3Qw7L.js";import"./BVGygAPM.js";import"./xpujLuAn.js";import"./_eVe-hpD.js";import"./ByTfTYi2.js";import"./vqpIx3q4.js";import"./C8ToOUwg.js";import"./B83x48NT.js";import"./Bi9N8uqL.js";import"./OZUmrK_A.js";import"./CECZEjtU.js";import"./NGD3Z_RD.js";import"./CLFzEa0p.js";import"./DCj94CgU.js";import"./smLjY0U4.js";import"./DP_f_eJI.js";import"./DHqEE7Hx.js";import"./Dm9o5LlW.js";import"./D_4OiXLP.js";import"./DkgJn5kV.js";import"./B2TCpOrA.js";import"./BDTnF8Yp.js";const se={class:"sm:bg-white"},te={key:0},oe={class:"video_lesson w-full md:p-[30px] sm:p-4"},ie={class:"flex items-center justify-between _c92 border-b border-[#EDEDED] bg-white pb-4 mb-5 sm:pt-0 sm:px-0 pt-4 px-4"},ne=s("img",{src:ee,alt:""},null,-1),re=s("p",{class:"text-lg font-semibold sm:block hidden"},"Orqaga",-1),le=[ne,re],ae=s("p",{class:"text-xl font-semibold text-black"},"Video dars",-1),ce={key:0,class:"bg-white"},de={key:0,class:"lessons xl:h-[312px] md:h-[270px] sm:h-[250px] h-[172px] sm:rounded-lg relative overflow-hidden"},me=s("img",{src:P,alt:""},null,-1),pe=[me],ue={class:"sm:px-0 px-4"},_e={class:"md:text-[28px] text-xl font-semibold md:mt-[30px] mt-5 sm:mb-6 mb-5 md:text-center"},he=["innerHTML"],xe={class:"full_flex sm:mt-14 mt-10 pb-[60px]"},fe={key:2,class:"w-[55%] font-medium bg-[red] h-10 px-5 rounded-full white"},ve={key:1,class:"flex flex-col items-center justify-center gap-5 max-h-[312px] min-h-[312px] overflow-hidden"},ge={key:2,class:"flex flex-col items-center justify-center gap-5 max-h-[312px] min-h-[312px] overflow-hidden"},es={__name:"index",setup(be){const{$cloudinary:B}=X();console.log(B);const i=Z(),p=J(),d=Q(),l=Y(),u=M({is_playing:!1,create_lesson:!1}),L={accent:"#FFFFFF",base:"#000",text:"#FFFFFF"};I("");function ye(o){}function $(){var e;const o=document.querySelector(".vjs-tech");o.currentTime=0,(e=document.querySelector(".vjs-big-play-button"))==null||e.click(),u.is_playing=!0}function j(){const o=l.currentRoute.value.path.split("/");let e="/"+o[1]+"/"+o[2];e+="?class="+l.currentRoute.value.query.class,l.push(e)}function _(o,e){l.currentRoute.value.path.split("/");let a;e=="create_test"?a="/"+e+"?lesson_id="+o:a=`/test?t=${o}`,l.push(a)}function T(){p.store.create_lesson=!0,l.currentRoute.value.path.split("/"),l.push("?create_lesson=true")}return H(()=>l.currentRoute.value.query,()=>{i.getById()}),K(()=>{i.getById()}),(o,e)=>{var h,x,f,v,g,b,y,k,w,V;const a=S,q=R,D=E;return n(),r("main",se,[t(p).store.create_lesson?(n(),W(D,{key:1})):(n(),r("section",te,[s("div",oe,[s("nav",ie,[s("div",{onClick:e[0]||(e[0]=m=>o.$router.back()),class:"flex items-center gap-4 cursor-pointer max-w-fit"},le),ae,s("div",{class:"flex items-center gap-3"},[s("img",{onClick:j,class:"cursor-pointer",src:N,alt:""})])]),(x=(h=t(i).store.video_lesson)==null?void 0:h.video_lesson)!=null&&x.length?(n(),r("div",ce,[!t(d).isLoadingType("getLessonById")&&((f=t(i).store.video_lesson)!=null&&f.video_lesson[0].video)?(n(),r("div",de,[C(a,{class:"xl:h-[312px] md:h-[270px] sm:h-[250px] h-[172px] w-full sm:rounded-lg overflow-hidden",src:(g=(v=t(i).store.video_lesson)==null?void 0:v.video_lesson[0].video)==null?void 0:g.public_id,colors:L,onPause:({player:m})=>void 0},null,8,["src","onPause"]),z(s("div",{onClick:$,class:"full_flex cursor-pointer absolute top-0 left-0 w-full xl:h-[312px] md:h-[270px] sm:h-[250px] h-[172px] bg-[#242424B2] z-10"},pe,512),[[A,!t(u).is_playing]])])):G("",!0),s("div",ue,[s("h1",_e,O((b=t(i).store.video_lesson)==null?void 0:b.title),1),s("div",{innerHTML:(k=(y=t(i).store.video_lesson)==null?void 0:y.video_lesson[0])==null?void 0:k.content,class:"md:w-[55%] mx-auto sm:text-lg space-y-5"},null,8,he),s("div",xe,[(V=(w=t(i).store.video_lesson)==null?void 0:w.tests[0])!=null&&V.id?(n(),r("button",{key:0,onClick:e[1]||(e[1]=m=>{var c;return _((c=t(i).store.video_lesson.video_lesson[0])==null?void 0:c.lesson_id)}),class:"w-[55%] font-medium bg_orange h-10 px-5 rounded-full white"}," Keyingi ")):t(d).user.data.current_role=="teacher"?(n(),r("button",{key:1,onClick:e[2]||(e[2]=m=>{var c;return _((c=t(i).store.video_lesson.video_lesson[0])==null?void 0:c.lesson_id,"create_test")}),class:"w-[55%] font-medium b_c40 h-10 px-5 rounded-full white"}," Test qo'shish ")):(n(),r("button",fe," Test mavjud emas "))])])])):t(d).user.data.current_role=="teacher"?(n(),r("div",ve,[F(" Video darslik mavjud emas "),s("div",null,[C(q,{onClick:T,class:"bg_orange white"},{default:U(()=>[F("Darslik qo'shish")]),_:1})])])):(n(),r("div",ge," Video darslik mavjud emas "))])]))])}}};export{es as default};
