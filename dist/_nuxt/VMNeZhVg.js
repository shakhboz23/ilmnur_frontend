import{d as c,r as l,H as d,$ as u,a4 as t,a9 as m,a6 as o,V as g}from"./Dg7Bj1Dn.js";import{g as p,i as x,d as _}from"./dGlScG6Q.js";const h={class:"py-10 md:px-0 px-4 max-h-screen min-h-[calc(100vh_-_100px)] overflow-y-auto"},b={class:"sm:w-[500px] bg_white mx-auto sm:p-[50px] p-5 pb-8 rounded-[16px]"},f=t("section",null,[t("h1",{class:"text-center md:text-[28px] text-xl font-bold"}," Tizimga kirish "),t("p",{class:"_c42 text-center md:text-lg text-sm font-medium mt-4 mb-7"}," Sizni qayta ko‘rganimizdan xursandmiz! ")],-1),v=t("div",{id:"googleButton"},null,-1),y={class:"pt-2 space-y-6 grid"},k=t("button",{class:"login_btn mx-auto"},"Kirish",-1),z=t("p",{class:"sm:w-[284px] text-[#323232] text-sm mx-auto text-center"},[o(" Davom etish orqali "),t("span",{class:"orange border-b border-[#FF852E]"},"Foydalanish shartlari"),o(" ga roziligingizni bildirasiz. ")],-1),A=c({__name:"index",setup(w){const i=_(),e=p(),n=x();n.store.verification=!0,l({show:!1});function a(){e.authLogin()}return d(()=>{google.accounts.id.initialize({client_id:i.public.client_id,callback:e.verifyGoogleCredential,context:"signin"}),google.accounts.id.renderButton(document.getElementById("googleButton"),{type:"standard",size:"large",text:"signin_with",shape:"rectangular",logo_alignment:"center",width:250})}),(r,s)=>(g(),u("main",h,[t("div",b,[f,t("form",{onSubmit:m(a,["prevent"]),class:"space-y-6 text-sm"},[v,t("div",y,[k,t("button",{onClick:s[0]||(s[0]=B=>r.$router.push("/register")),class:"register_btn mx-auto black_24"}," Akkaunt yaratish "),z])],32)])]))}});export{A as default};
