import{_ as he}from"./DzQh8g0I.js";import{_ as ve,a as ge,b as xe,c as be,d as G,e as we}from"./Lf_qzwKW.js";import{_ as ke}from"./CpyYrgoO.js";import{v as ye}from"./CjoZzTIj.js";import{d as ie,c as re,D as u,r as Ce,w as Se,$ as c,a4 as e,X as p,u as o,F as x,ac as b,a5 as P,a6 as S,aa as ee,W as B,ag as qe,V as d,ae as Te,ah as Fe,ad as K,ab as de,ai as Ue}from"./Dg7Bj1Dn.js";import{m as q,t as $,I,s as Pe,J as Be,K as Ve,i as Oe}from"./DOrSSs2S.js";import{_ as oe}from"./bKiWB3AL.js";import{_ as Ee}from"./GSLu8eWi.js";import{_ as je}from"./COfAGGZC.js";import{s as ce}from"./Bu3FxfTn.js";import{l as $e}from"./B1salZU1.js";import{M as Ie}from"./aLlVS1nM.js";import{B as Me}from"./CsMoZ7Gi.js";import{C as Re}from"./CVbeTxF1.js";import{g as De,c as ue,d as He,r as Ne,a as Le,D as Ae}from"./CXju7QtD.js";import{d as ze,a as _e}from"./BkJZ7M5a.js";import{u as pe}from"./BjbtIhIC.js";import{_ as Ke,b as We}from"./CIBfKwWz.js";import"./CuLS-Qea.js";import"./E0irLdR6.js";import"./BdXHfILR.js";import"./DXpYY72Q.js";import"./BfoaZM67.js";import"./DQuh_HN2.js";import"./CXhMJMfa.js";import"./DkgJn5kV.js";import"./Bsoo2y_8.js";import"./CECZEjtU.js";import"./VtAB9k1s.js";import"./CGVW4lrr.js";import"./D_4OiXLP.js";import"./Buvq70YL.js";const te=()=>({format:String,showNow:I(),showHour:I(),showMinute:I(),showSecond:I(),use12Hours:I(),hourStep:Number,minuteStep:Number,secondStep:Number,hideDisabledOptions:I(),popupClassName:String,status:Pe()});function Xe(E){const J=De(E,q(q({},te()),{order:{type:Boolean,default:!0}})),{TimePicker:s,RangePicker:M}=J,a=ie({name:"ATimePicker",inheritAttrs:!1,props:q(q(q(q({},ue()),He()),te()),{addon:{type:Function}}),slots:Object,setup(R,D){let{slots:T,expose:H,emit:h,attrs:N}=D;const w=R,C=pe();ze(!(T.addon||w.addon),"TimePicker","`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");const F=re();H({focus:()=>{var n;(n=F.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=F.value)===null||n===void 0||n.blur()}});const L=(n,g)=>{h("update:value",n),h("change",n,g),C.onFieldChange()},A=n=>{h("update:open",n),h("openChange",n)},j=n=>{h("focus",n)},i=n=>{h("blur",n),C.onFieldBlur()},t=n=>{h("ok",n)};return()=>{const{id:n=C.id.value}=w;return u(s,$($($({},N),_e(w,["onUpdate:value","onUpdate:open"])),{},{id:n,dropdownClassName:w.popupClassName,mode:void 0,ref:F,renderExtraFooter:w.addon||T.addon||w.renderExtraFooter||T.renderExtraFooter,onChange:L,onOpenChange:A,onFocus:j,onBlur:i,onOk:t}),T)}}}),Y=ie({name:"ATimeRangePicker",inheritAttrs:!1,props:q(q(q(q({},ue()),Ne()),te()),{order:{type:Boolean,default:!0}}),slots:Object,setup(R,D){let{slots:T,expose:H,emit:h,attrs:N}=D;const w=R,C=re(),F=pe();H({focus:()=>{var r;(r=C.value)===null||r===void 0||r.focus()},blur:()=>{var r;(r=C.value)===null||r===void 0||r.blur()}});const L=(r,f)=>{h("update:value",r),h("change",r,f),F.onFieldChange()},A=r=>{h("update:open",r),h("openChange",r)},j=r=>{h("focus",r)},i=r=>{h("blur",r),F.onFieldBlur()},t=(r,f)=>{h("panelChange",r,f)},n=r=>{h("ok",r)},g=(r,f,U)=>{h("calendarChange",r,f,U)};return()=>{const{id:r=F.id.value}=w;return u(M,$($($({},N),_e(w,["onUpdate:open","onUpdate:value"])),{},{id:r,dropdownClassName:w.popupClassName,picker:"time",mode:void 0,ref:C,onChange:L,onOpenChange:A,onFocus:j,onBlur:i,onPanelChange:t,onOk:n,onCalendarChange:g}),T)}}});return{TimePicker:a,TimeRangePicker:Y}}const{TimePicker:Q,TimeRangePicker:se}=Xe(Le),Qe=q(Q,{TimePicker:Q,TimeRangePicker:se,install:E=>(E.component(Q.name,Q),E.component(se.name,se),E)}),Ge="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%2012H6M12%2012V'%20stroke='%23FF852E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Je={class:"rounded-[6px] overflow-hidden overflow-y-auto h-full max-h-[calc(100vh_-_160px)]"},Ye={class:"rounded-[6px] overflow-hidden"},Ze=e("h1",{class:"text-xl font-semibold leading-[30px] pt-8 pb-6 bg-white px-9"}," Test yaratishni boshlang: ",-1),et={class:"mt-6 px-9"},tt={class:"flex items-center justify-between"},st=e("div",{class:"full_flex bg-[#FFF3EB] w-[42px] !h-[42px]"},[e("img",{src:oe,alt:""})],-1),ot={class:"flex gap-2"},lt=e("div",null,[e("label",{for:"import_file",class:"full_flex gap-2 bg-white p-1.5 rounded-md border_ced cursor-pointer"},[e("img",{class:"h-7 w-7",src:Ee,alt:""}),e("p",null,"WORD")])],-1),nt=e("img",{class:"mx-auto",src:ve,alt:""},null,-1),at=[nt],it={class:"flex gap-[10px] my-6"},rt=["onClick"],dt={class:"bg-white px-9 py-6"},ct={class:"flex items-center justify-between"},ut={class:"text-2xl"},_t={class:"font-semibold text-[28px]"},pt=e("div",{class:"full_flex bg-[#FFF3EB] w-[42px] !h-[42px]"},[e("img",{src:oe,alt:""})],-1),mt={class:"w-[70%]"},ft={class:"flex overflow-hidden overflow-x-auto"},ht={class:"max-h-min max-w-min min-h-fit min-w-fit"},vt=["src"],gt=e("label",{class:"font-medium",for:"resourses"},"Resurslarni biriktiring",-1),xt={class:"full_flex my-auto space-x-10 mt-5"},bt=e("div",{class:"full_flex mx-auto h-10 w-10 bg-[#FFF3EB] rounded-full"},[e("img",{class:"w-[40%]",src:ge,alt:""})],-1),wt=e("p",{class:"font-medium mt-4 text-xs _c24"},"Video",-1),kt=e("div",{class:"full_flex mx-auto h-10 w-10 bg-[#FFF3EB] rounded-full"},[e("img",{class:"w-[40%]",src:xe,alt:""})],-1),yt=e("p",{class:"font-medium mt-4 text-xs _c24"},"Tekst",-1),Ct=e("div",{class:"full_flex mx-auto h-10 w-10 bg-[#FFF3EB] rounded-full"},[e("img",{class:"w-[40%]",src:be,alt:""})],-1),St=e("p",{class:"font-medium mt-4 text-xs _c24"},"Rasm",-1),qt=e("img",{class:"cursor-pointer",src:G,alt:""},null,-1),Tt=e("hr",{class:"border_ced my-6 !border-b-0"},null,-1),Ft={class:"space-y-6"},Ut=e("h1",{class:"-mb-3"},"Variantlar",-1),Pt=e("p",null,"To‘g‘ri javobni belgilang",-1),Bt={key:0,class:"space-y-6"},Vt={class:"flex items-center gap-4"},Ot={class:"flex items-center gap-4 b_cf5 r_8 w-full px-4"},Et=["src"],jt=["onClick"],$t=e("img",{class:"cursor-pointer",src:G,alt:""},null,-1),It=[$t],Mt={key:1},Rt={key:0,class:"border_ced my-6 !border-b-0"},Dt={class:"grid grid-cols-2 gap-6"},Ht={class:"flex items-center gap-4"},Nt={class:"flex items-center gap-4 b_cf5 r_8 w-full px-4"},Lt=["src"],At=["onUpdate:modelValue"],zt=["onClick"],Kt=e("img",{class:"cursor-pointer",src:G,alt:""},null,-1),Wt=[Kt],Xt={key:2,class:"b_cf5 r_8 px-4"},Qt={class:"flex items-center gap-4"},Gt={class:"flex items-center gap-4 r_8 w-full"},Jt=["src"],Yt=["onUpdate:modelValue"],Zt=["onClick"],es=e("img",{class:"cursor-pointer",src:G,alt:""},null,-1),ts=[es],ss={key:0,class:"border_ced !border-b-0"},os={class:"text-end w-[70%] mt-6"},ls=e("div",{class:"flex justify-between items-center w-full"},[e("h1",{class:"font-semibold text-2xl"},"Sozlamalalar")],-1),ns={class:"mt-4 space-y-4"},as={class:"space-y-2"},is=e("label",{for:"name"},"Boshlanish vaqti",-1),rs={class:"flex gap-2"},ds={class:"space-y-2"},cs=e("label",{for:"name"},"Tugash vaqti",-1),us={class:"flex gap-2"},_s={class:"space-y-2"},ps=e("label",{for:"name"},"Test muddati",-1),ms={class:"space-y-2"},fs=e("h2",null,"Saralash",-1),hs=e("label",{for:"sortnum"},"Saralash bosqichi",-1),vs={class:"space-y-4"},gs={class:"flex items-center gap-4"},xs=["onClick"],bs=e("img",{src:je,alt:""},null,-1),ws=[bs],ks=["onClick"],ys=e("img",{src:Ge,alt:""},null,-1),Cs=[ys],Ss={class:"grid grid-cols-3"},qs={class:"space-y-2"},Ts=e("label",{for:"sortnum"},"Testlar soni",-1),Fs=e("div",{class:"full_flex bg-[#FFF3EB] w-[42px] !h-[42px]"},[e("img",{src:oe,alt:""})],-1),io={__name:"index",setup(E){const J=[qe],s=Be();Ve();const M=Oe(),a=Ce({questions:[],questionmodal:!1,cursorPosition:"",fileId:"",fileType:"",mouse_wheel:"",slideStep:1,questions_count:1,not_completed:[],is_completed:!1,convertedContent:"",settings:!1}),Y=["Matematika","Ingliz tili","Rus tili","Ona tili","Tarix"],R=[{label:"Variantli",value:"variant"},{label:"Ko'p tanlovli",value:"multiple"},{label:"To'ldiriladigan",value:"refillable"},{label:"Moslashtiriladigan",value:"customizable"}],D=[{value:1},{value:10},{value:16},{value:20},{value:40}];function T(i,t){console.log(t),i=="add"?(s.test_settings.sort_level[t+1]=[null,null,null],s.store.test_step+=1):(s.test_settings.sort_level.splice(t,1),s.store.test_step-=1)}async function H(i){const t=i.target.files[0],n=URL.createObjectURL(t);console.log(a.fileType),a.fileType=="question"?(s.test[a.slideStep].question.push(t),a.questions.push(n)):s.test[a.slideStep].variant[a.fileId]=[t,n],document.getElementById("upload_question").value=""}async function h(i){const t=i.target.files[0];if(!t)return;const n=await w(t);console.log(n),a.convertedContent=n.value,N(n.value)}function N(i){var g;const t=i.match(/<tr>.*?<\/tr>/gs);if(!t)return[];let n=t.map(r=>{const f=r.match(/<td>(.*?)<\/td>/gs);return f?f.map(U=>U.replace(/<\/?td>/g,"")):[]});n.shift(),console.log(n,"res"),s.store.questions_count=n.length;for(let r=0;r<n.length;r++){s.test[r+1].question[0]=n[r][1];for(let f=2;f<((g=n[r])==null?void 0:g.length);f++)s.test[r+1].variant[f-1]=n[r][f];console.log(s.test[r+1].variant)}}function w(i){return new Promise((t,n)=>{const g=new FileReader;g.onload=async r=>{const f=r.target.result;console.log(f);const U=await $e.convertToHtml({arrayBuffer:f},{styleMap:["p[style-name='Equation'] => span.math-display:fresh"]});console.log(U),t(U)},g.onerror=n,g.readAsArrayBuffer(i)})}function C(i,t){console.log(i,t),a.fileId=i,a.fileType=t}function F(){setTimeout(()=>{var i;a.slideStep=+((i=document.querySelector(".swiper-slide-visible"))==null?void 0:i.id)},200)}function L(i){i.deltaX>0?(a.mouse_wheel+=1,a.mouse_wheel%10==0&&(a.slideStep<s.store.questions_count&&(a.slideStep+=1),a.mouse_wheel=0),console.log("Scrolling to the right")):i.deltaX<0&&(a.mouse_wheel+=1,a.mouse_wheel%10==0&&(a.slideStep>1&&(a.slideStep-=1),a.mouse_wheel=0),console.log("Scrolling to the left"))}function A(i){var g;let t,n;if((g=s.test[i].question)!=null&&g.length){t=0;for(let r of Object.values(s.test[i].variant))if(r&&t++,t==2)return n=a.not_completed.indexOf(i),n==-1&&a.not_completed.push(i),!0}return n=a.not_completed.indexOf(i),n!=-1&&a.not_completed.splice(n,1),!1}function j(){var i;a.is_completed&&s.createTest(),a.not_completed.sort((t,n)=>t-n);for(let t=0;t<s.store.questions_count-1;t++)if(a.not_completed[t+1]-a.not_completed[t]!=1){a.slideStep=a.not_completed[t]+1;return}if(((i=Object.keys(a.not_completed))==null?void 0:i.length)==s.store.questions_count){a.is_completed=!0;return}a.slideStep!=s.store.questions_count&&(a.slideStep+=1)}return Se(()=>a.slideStep,()=>{const i=document.querySelector(".swiper-pagination-clickable");if(i&&i.children.length>=a.slideStep){const t=i.children[a.slideStep-1];t&&t.click()}}),(i,t)=>{const n=Ke,g=he,r=Me,f=Re,U=we,le=ke,ne=Ae,Z=Qe,z=We,me=Ie,fe=ye;return d(),c("main",Je,[e("section",Ye,[Ze,e("div",et,[e("div",tt,[u(n,{value:o(s).store.questions_count,"onUpdate:value":t[0]||(t[0]=l=>o(s).store.questions_count=l),class:"min-w-[145px] test_arrow !h-[44px] sr_12",options:D.map(l=>({label:`${l.value} talik savollar`,value:l.value})),required:""},{suffixIcon:p(()=>[st]),_:1},8,["value","options"]),e("div",ot,[lt,e("button",{onClick:t[1]||(t[1]=l=>o(a).settings=!0),class:"bg-white rounded-md p-1.5 w-10"},at)])]),e("div",it,[(d(!0),c(x,null,b(o(s).store.questions_count,l=>(d(),c("button",{onClick:v=>o(a).slideStep=l,class:Te([[o(a).slideStep==l?"border border-[#40E746]":"border_ced",A(l)?"bg-[#40E746]":""],"h-10 w-10 bg-white r_2 _c55"])},P(l),11,rt))),256))])]),e("div",dt,[e("div",ct,[e("p",ut,[e("span",_t,P(o(a).slideStep)+".",1),S(" Savol ")]),u(n,{value:o(s).test[o(a).slideStep].type,"onUpdate:value":t[2]||(t[2]=l=>o(s).test[o(a).slideStep].type=l),class:"!relative min-w-[145px] test_arrow !h-[44px] sr_12",options:R.map(l=>({label:l.label,value:l.value})),required:""},{suffixIcon:p(()=>[pt]),_:1},8,["value","options"])]),u(o(Ue),{onMousewheel:L,onSliderMove:F,watchSlidesProgress:!0,slidesPerView:1,spaceBetween:30,pagination:{clickable:!0},class:"mySwiper",modules:J},{default:p(()=>[(d(),c(x,null,b(16,l=>u(o(Fe),{id:l},{default:p(()=>{var v,m,W,ae;return[e("section",null,[e("div",mt,[e("div",ft,[(d(!0),c(x,null,b(o(a).questions,_=>(d(),c("div",ht,[e("img",{class:"max-h-[200px]",src:_,alt:""},null,8,vt)]))),256))]),u(g,null,{default:p(()=>[u(o(ce),{modelValue:o(s).test[l].question[0],"onUpdate:modelValue":_=>o(s).test[l].question[0]=_},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),gt,e("div",xt,[u(r,{ref_for:!0,ref:"ref1",onClick:t[3]||(t[3]=_=>i.openModal("video")),class:"text-center w-12 h-[100px] !p-0 border-0 shadow-none"},{default:p(()=>[bt,wt]),_:1},512),u(r,{ref_for:!0,ref:"ref2",onClick:t[4]||(t[4]=_=>i.openModal("tekst")),class:"text-center w-12 h-[100px] !p-0 border-0 shadow-none"},{default:p(()=>[kt,yt]),_:1},512),u(r,{ref_for:!0,ref:"ref3",onClick:t[5]||(t[5]=_=>i.openModal("image")),class:"text-center w-12 h-[100px] !p-0 border-0 shadow-none"},{default:p(()=>[Ct,St]),_:1},512)]),e("label",{onClick:t[6]||(t[6]=_=>o(a).fileType="question"),for:"upload_question",class:"max-w-fit full_flex mt-6 gap-4 h-[44px] border border-[#EDEDED] rounded-full px-8"},[qt,S(" Fayl biriktirish ")]),Tt,e("div",Ft,[Ut,Pt,((v=o(s).test[l])==null?void 0:v.type)=="variant"||((m=o(s).test[l])==null?void 0:m.type)=="refillable"?(d(),c("div",Bt,[(d(),c(x,null,b(5,_=>{var k,V,O;return e("div",Vt,[e("div",Ot,[u(f,{checked:i.checked,"onUpdate:checked":t[7]||(t[7]=y=>i.checked=y)},null,8,["checked"]),(k=o(s).test[l])!=null&&k.variant[_]&&typeof((V=o(s).test[l])==null?void 0:V.variant[_])=="object"?(d(),c("img",{key:0,class:"max-h-[160px] my-4",src:(O=o(s).test[l])==null?void 0:O.variant[_][1],alt:""},null,8,Et)):(d(),B(g,{key:1},{default:p(()=>[u(o(ce),{class:"w-full -mr-4",modelValue:o(s).test[l].variant[_],"onUpdate:modelValue":y=>o(s).test[l].variant[_]=y},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024))]),e("label",{onClick:y=>C(_,"variant"),for:"upload_question"},It,8,jt)])}),64))])):((W=o(s).test[l])==null?void 0:W.type)=="multiple"?(d(),c("div",Mt,[(d(),c(x,null,b(5,_=>e("div",null,[_!=1?(d(),c("hr",Rt)):K("",!0),e("div",Dt,[(d(),c(x,null,b(2,k=>{var V,O,y;return e("div",Ht,[e("div",Nt,[u(f,{checked:i.checked,"onUpdate:checked":t[8]||(t[8]=X=>i.checked=X)},null,8,["checked"]),(V=o(s).test[l])!=null&&V.variant[k]&&typeof((O=o(s).test[l])==null?void 0:O.variant[k])=="object"?(d(),c("img",{key:0,class:"max-h-[160px] my-4",src:(y=o(s).test[l])==null?void 0:y.variant[k][1],alt:""},null,8,Lt)):ee((d(),c("input",{key:1,"onUpdate:modelValue":X=>o(s).test[l].variant[k]=X,class:"border-0 bg-transparent p-0 rounded-[0]",type:"text",placeholder:"Variant uchun"},null,8,At)),[[de,o(s).test[l].variant[k]]])]),e("label",{onClick:X=>C(k,"variant"),for:"upload_question"},Wt,8,zt)])}),64))])])),64))])):((ae=o(s).test[l])==null?void 0:ae.type)=="customizable"?(d(),c("div",Xt,[(d(),c(x,null,b(3,_=>{var k,V,O;return e("div",null,[e("div",Qt,[e("div",Gt,[u(f,{checked:i.checked,"onUpdate:checked":t[9]||(t[9]=y=>i.checked=y)},null,8,["checked"]),(k=o(s).test[l])!=null&&k.variant[_]&&typeof((V=o(s).test[l])==null?void 0:V.variant[_])=="object"?(d(),c("img",{key:0,class:"max-h-[160px] my-4",src:(O=o(s).test[l])==null?void 0:O.variant[_][1],alt:""},null,8,Jt)):ee((d(),c("input",{key:1,"onUpdate:modelValue":y=>o(s).test[l].variant[_]=y,class:"border-0 bg-transparent p-0 rounded-[0]",type:"text",placeholder:"Variant uchun"},null,8,Yt)),[[de,o(s).test[l].variant[_]]])]),e("label",{onClick:y=>C(_,"variant"),for:"upload_question"},ts,8,Zt)]),_!=1?(d(),c("hr",ss)):K("",!0)])}),64))])):K("",!0)])])])]}),_:2},1032,["id"])),64))]),_:1}),e("div",os,[o(a).is_completed?ee((d(),B(le,{key:0,onClick:j,class:"!h-12 font-semibold b_c40 relative white !px-6"},{default:p(()=>[S(" Yuklash "),o(M).isLoadingType("createTest")?(d(),B(U,{key:0,class:"full_flex scale-75 rounded-lg"})):K("",!0)]),_:1})),[[fe,o(M).isLoadingType("createTest")]]):(d(),B(le,{key:1,onClick:j,class:"!h-12 font-semibold bg_orange relative white !px-6"},{default:p(()=>[S(" Keyingi "),o(M).isLoadingType("createTest")?(d(),B(U,{key:0,class:"full_flex scale-75 rounded-lg"})):K("",!0)]),_:1}))])])]),e("input",{onChange:H,class:"input_file",type:"file",id:"upload_question"},null,32),e("input",{onChange:h,class:"input_file",type:"file",id:"import_file"},null,32),u(me,{class:"max-w-[440px]",open:o(a).settings,"onUpdate:open":t[17]||(t[17]=l=>o(a).settings=l),centered:""},{default:p(()=>[ls,e("div",ns,[e("div",as,[is,e("div",rs,[u(ne,{class:"w-full",value:o(s).test_settings.start_date,"onUpdate:value":t[10]||(t[10]=l=>o(s).test_settings.start_date=l),placeholder:"0000-00-00"},null,8,["value"]),u(Z,{value:o(s).test_settings.start_date,"onUpdate:value":t[11]||(t[11]=l=>o(s).test_settings.start_date=l),format:"HH:mm",placeholder:"00:00"},null,8,["value"])])]),e("div",ds,[cs,e("div",us,[u(ne,{class:"w-full",value:o(s).test_settings.end_date,"onUpdate:value":t[12]||(t[12]=l=>o(s).test_settings.end_date=l),placeholder:"0000-00-00"},null,8,["value"]),u(Z,{value:o(s).test_settings.end_date,"onUpdate:value":t[13]||(t[13]=l=>o(s).test_settings.end_date=l),format:"HH:mm",placeholder:"00:00"},null,8,["value"])])]),e("div",_s,[ps,S(" "+P(o(s).test_settings.period)+" ",1),e("div",null,[u(Z,{onChange:t[14]||(t[14]=l=>{const v=l.split(":"),m=+v[0]*60,W=+v[1];o(s).test_settings.period=W+m}),format:"HH:mm","value-format":"HH:mm",placeholder:"00:00"})])]),e("div",ms,[fs,hs,e("div",vs,[u(n,{value:o(s).test_settings.sort_level[i.index],"onUpdate:value":t[15]||(t[15]=l=>o(s).test_settings.sort_level[i.index]=l),class:"min-w-[80px] w-full test_arrow !h-[42px] sr_12","show-search":"",required:""},{default:p(()=>[(d(!0),c(x,null,b(o(s).store.questions_count,l=>(d(),B(z,{value:l},{default:p(()=>[S(P(l),1)]),_:2},1032,["value"]))),256))]),_:1},8,["value"]),(d(!0),c(x,null,b(o(s).store.test_step,(l,v)=>(d(),c("div",gs,[S(P(v+1)+". ",1),u(n,{value:o(s).test_settings.sort_level[v][0],"onUpdate:value":m=>o(s).test_settings.sort_level[v][0]=m,class:"min-w-[80px] test_arrow w-full !h-[42px] sr_12","show-search":"",required:""},{default:p(()=>[(d(),c(x,null,b(Y,m=>u(z,{value:m},{default:p(()=>[S(P(m),1)]),_:2},1032,["value"])),64))]),_:2},1032,["value","onUpdate:value"]),u(n,{value:o(s).test_settings.sort_level[v][1],"onUpdate:value":m=>o(s).test_settings.sort_level[v][1]=m,class:"min-w-[80px] test_arrow !h-[42px] sr_12","show-search":"",required:""},{default:p(()=>[(d(!0),c(x,null,b(o(s).store.questions_count,m=>(d(),B(z,{value:m},{default:p(()=>[S(P(m),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["value","onUpdate:value"]),u(n,{value:o(s).test_settings.sort_level[v][2],"onUpdate:value":m=>o(s).test_settings.sort_level[v][2]=m,class:"min-w-[80px] test_arrow !h-[42px] sr_12","show-search":"",required:""},{default:p(()=>[(d(!0),c(x,null,b(o(s).store.questions_count,m=>(d(),B(z,{value:m},{default:p(()=>[S(P(m),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["value","onUpdate:value"]),o(s).store.test_step==v+1?(d(),c("p",{key:0,onClick:m=>T("add",v),class:"full_flex min-w-[50px] h-[50px] rounded-full border border-[#CCCCCC] cursor-pointer"},ws,8,xs)):(d(),c("p",{key:1,onClick:m=>T("remove",v),class:"full_flex min-w-[50px] h-[50px] rounded-full border border-[#CCCCCC] cursor-pointer"},Cs,8,ks))]))),256))]),e("div",Ss,[e("div",qs,[Ts,u(n,{value:o(s).test_settings.test_count,"onUpdate:value":t[16]||(t[16]=l=>o(s).test_settings.test_count=l),class:"min-w-[80px] test_arrow !h-[42px] sr_12","show-search":"",required:""},{suffixIcon:p(()=>[Fs]),default:p(()=>[(d(!0),c(x,null,b(o(s).store.test_count,l=>(d(),B(z,{value:l},{default:p(()=>[S(P(l),1)]),_:2},1032,["value"]))),256))]),_:1},8,["value"])])])])])]),_:1},8,["open"])])}}};export{io as default};
