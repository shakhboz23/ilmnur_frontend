import{_ as fe}from"./D6Nfc-Ej.js";import{_ as he,a as ve,b as ge,c as xe,d as Q,e as be}from"./DDcqhrVE.js";import{_ as ke}from"./CYcx8QYm.js";import{v as we}from"./DC-GUIco.js";import{d as ae,c as ie,D as p,r as ye,w as Ce,$ as u,a4 as e,X as h,u as o,F as C,ac as S,a5 as $,a6 as B,aa as ee,W as V,ag as Se,V as c,ae as Fe,ah as Te,ad as A,ab as re,ai as qe}from"./Dg7Bj1Dn.js";import{m as y,t as I,I as D,s as Pe,J as Ue,K as Be,i as Ve}from"./DN9M9UsZ.js";import{_ as G}from"./bKiWB3AL.js";import{_ as Ee}from"./BJ2PpTJ2.js";import{_ as Oe}from"./COfAGGZC.js";import{s as de}from"./Cl3OhVGE.js";import{l as je}from"./CvIbi6IC.js";import{M as $e}from"./CPzA58vh.js";import{B as Ie}from"./C8wT_rSg.js";import{C as De}from"./B_qLhyRg.js";import{g as He,c as ce,d as Me,r as Ne,a as Re,D as Le}from"./Ctj3THky.js";import{d as Ae,a as ue}from"./JxdlUtni.js";import{u as _e}from"./_WSP63MP.js";import{_ as ze,b as Ke}from"./DfAwJjeu.js";import"./DtNTMMvd.js";import"./CWo-bsA5.js";import"./CdTN4ARe.js";import"./CuNN9SyI.js";import"./DHTHNUX6.js";import"./T1IwbLPJ.js";import"./CkTcpljv.js";import"./DkgJn5kV.js";import"./D_Z95qdx.js";import"./CECZEjtU.js";import"./CjCXnCB5.js";import"./DmU_NVdH.js";import"./D_4OiXLP.js";import"./Bxsy_6AC.js";const te=()=>({format:String,showNow:D(),showHour:D(),showMinute:D(),showSecond:D(),use12Hours:D(),hourStep:Number,minuteStep:Number,secondStep:Number,hideDisabledOptions:D(),popupClassName:String,status:Pe()});function We(E){const J=He(E,y(y({},te()),{order:{type:Boolean,default:!0}})),{TimePicker:s,RangePicker:H}=J,l=ae({name:"ATimePicker",inheritAttrs:!1,props:y(y(y(y({},ce()),Me()),te()),{addon:{type:Function}}),slots:Object,setup(M,O){let{slots:q,expose:N,emit:f,attrs:R}=O;const v=M,F=_e();Ae(!(q.addon||v.addon),"TimePicker","`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");const T=ie();N({focus:()=>{var r;(r=T.value)===null||r===void 0||r.focus()},blur:()=>{var r;(r=T.value)===null||r===void 0||r.blur()}});const L=(r,m)=>{f("update:value",r),f("change",r,m),F.onFieldChange()},j=r=>{f("update:open",r),f("openChange",r)},a=r=>{f("focus",r)},t=r=>{f("blur",r),F.onFieldBlur()},d=r=>{f("ok",r)};return()=>{const{id:r=F.id.value}=v;return p(s,I(I(I({},R),ue(v,["onUpdate:value","onUpdate:open"])),{},{id:r,dropdownClassName:v.popupClassName,mode:void 0,ref:T,renderExtraFooter:v.addon||q.addon||v.renderExtraFooter||q.renderExtraFooter,onChange:L,onOpenChange:j,onFocus:a,onBlur:t,onOk:d}),q)}}}),Y=ae({name:"ATimeRangePicker",inheritAttrs:!1,props:y(y(y(y({},ce()),Ne()),te()),{order:{type:Boolean,default:!0}}),slots:Object,setup(M,O){let{slots:q,expose:N,emit:f,attrs:R}=O;const v=M,F=ie(),T=_e();N({focus:()=>{var i;(i=F.value)===null||i===void 0||i.focus()},blur:()=>{var i;(i=F.value)===null||i===void 0||i.blur()}});const L=(i,g)=>{f("update:value",i),f("change",i,g),T.onFieldChange()},j=i=>{f("update:open",i),f("openChange",i)},a=i=>{f("focus",i)},t=i=>{f("blur",i),T.onFieldBlur()},d=(i,g)=>{f("panelChange",i,g)},r=i=>{f("ok",i)},m=(i,g,z)=>{f("calendarChange",i,g,z)};return()=>{const{id:i=T.id.value}=v;return p(H,I(I(I({},R),ue(v,["onUpdate:open","onUpdate:value"])),{},{id:i,dropdownClassName:v.popupClassName,picker:"time",mode:void 0,ref:F,onChange:L,onOpenChange:j,onFocus:a,onBlur:t,onPanelChange:d,onOk:r,onCalendarChange:m}),q)}}});return{TimePicker:l,TimeRangePicker:Y}}const{TimePicker:X,TimeRangePicker:se}=We(Re),Xe=y(X,{TimePicker:X,TimeRangePicker:se,install:E=>(E.component(X.name,X),E.component(se.name,se),E)}),Qe="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%2012H6M12%2012V'%20stroke='%23FF852E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Ge={class:"rounded-[6px] overflow-hidden overflow-y-auto h-full max-h-[calc(100vh_-_160px)]"},Je={class:"rounded-[6px] overflow-hidden"},Ye=e("h1",{class:"text-xl font-semibold leading-[30px] pt-8 pb-6 bg-white px-9"}," Test yaratishni boshlang: ",-1),Ze={class:"mt-6 px-9"},et={class:"flex items-center justify-between"},tt=e("div",{class:"full_flex bg-[#FFF3EB] w-[42px] !h-[42px]"},[e("img",{src:G,alt:""})],-1),st={class:"flex gap-2"},ot=e("div",null,[e("label",{for:"import_file",class:"full_flex gap-2 bg-white p-1.5 rounded-md border_ced cursor-pointer"},[e("img",{class:"h-7 w-7",src:Ee,alt:""}),e("p",null,"WORD")])],-1),nt=e("img",{class:"mx-auto",src:he,alt:""},null,-1),lt=[nt],at={class:"flex gap-[10px] my-6"},it=["onClick"],rt={class:"bg-white px-9 py-6"},dt={class:"flex items-center justify-between"},ct={class:"text-2xl"},ut={class:"font-semibold text-[28px]"},_t=e("div",{class:"full_flex bg-[#FFF3EB] w-[42px] !h-[42px]"},[e("img",{src:G,alt:""})],-1),pt={class:"w-[70%]"},mt={class:"flex overflow-hidden overflow-x-auto"},ft={class:"max-h-min max-w-min min-h-fit min-w-fit"},ht=["src"],vt=e("label",{class:"font-medium",for:"resourses"},"Resurslarni biriktiring",-1),gt={class:"full_flex my-auto space-x-10 mt-5"},xt=e("div",{class:"full_flex mx-auto h-10 w-10 bg-[#FFF3EB] rounded-full"},[e("img",{class:"w-[40%]",src:ve,alt:""})],-1),bt=e("p",{class:"font-medium mt-4 text-xs _c24"},"Video",-1),kt=e("div",{class:"full_flex mx-auto h-10 w-10 bg-[#FFF3EB] rounded-full"},[e("img",{class:"w-[40%]",src:ge,alt:""})],-1),wt=e("p",{class:"font-medium mt-4 text-xs _c24"},"Tekst",-1),yt=e("div",{class:"full_flex mx-auto h-10 w-10 bg-[#FFF3EB] rounded-full"},[e("img",{class:"w-[40%]",src:xe,alt:""})],-1),Ct=e("p",{class:"font-medium mt-4 text-xs _c24"},"Rasm",-1),St=e("img",{class:"cursor-pointer",src:Q,alt:""},null,-1),Ft=e("hr",{class:"border_ced my-6 !border-b-0"},null,-1),Tt={class:"space-y-6"},qt=e("h1",{class:"-mb-3"},"Variantlar",-1),Pt=e("p",null,"To‘g‘ri javobni belgilang",-1),Ut={key:0,class:"space-y-6"},Bt={class:"flex items-center gap-4"},Vt={class:"flex items-center gap-4 b_cf5 r_8 w-full px-4"},Et=["src"],Ot=["onClick"],jt=e("img",{class:"cursor-pointer",src:Q,alt:""},null,-1),$t=[jt],It={key:1},Dt={key:0,class:"border_ced my-6 !border-b-0"},Ht={class:"grid grid-cols-2 gap-6"},Mt={class:"flex items-center gap-4"},Nt={class:"flex items-center gap-4 b_cf5 r_8 w-full px-4"},Rt=["src"],Lt=["onUpdate:modelValue"],At=["onClick"],zt=e("img",{class:"cursor-pointer",src:Q,alt:""},null,-1),Kt=[zt],Wt={key:2,class:"b_cf5 r_8 px-4"},Xt={class:"flex items-center gap-4"},Qt={class:"flex items-center gap-4 r_8 w-full"},Gt=["src"],Jt=["onUpdate:modelValue"],Yt=["onClick"],Zt=e("img",{class:"cursor-pointer",src:Q,alt:""},null,-1),es=[Zt],ts={key:0,class:"border_ced !border-b-0"},ss={class:"text-end w-[70%] mt-6"},os=e("div",{class:"flex justify-between items-center w-full"},[e("h1",{class:"font-semibold text-2xl"},"Sozlamalalar")],-1),ns={class:"mt-4 space-y-4"},ls={class:"space-y-2"},as=e("label",{for:"name"},"Boshlanish vaqti",-1),is={class:"flex gap-2"},rs={class:"space-y-2"},ds=e("label",{for:"name"},"Tugash vaqti",-1),cs={class:"flex gap-2"},us={class:"space-y-2"},_s=e("label",{for:"name"},"Test muddati",-1),ps={class:"space-y-2"},ms=e("h2",null,"Saralash",-1),fs=e("label",{for:"sortnum"},"Saralash bosqichi",-1),hs={class:"flex items-center gap-4"},vs=e("div",{class:"full_flex bg-[#FFF3EB] w-[42px] !h-[42px]"},[e("img",{src:G,alt:""})],-1),gs=e("img",{src:Oe,alt:""},null,-1),xs=[gs],bs=["onClick"],ks=e("img",{src:Qe,alt:""},null,-1),ws=[ks],ys={class:"grid grid-cols-3"},Cs={class:"space-y-2"},Ss=e("label",{for:"sortnum"},"Testlar soni",-1),Fs=e("div",{class:"full_flex bg-[#FFF3EB] w-[42px] !h-[42px]"},[e("img",{src:G,alt:""})],-1),lo={__name:"index",setup(E){const J=[Se],s=Ue();Be();const H=Ve(),l=ye({questions:[],questionmodal:!1,cursorPosition:"",fileId:"",fileType:"",mouse_wheel:"",slideStep:1,questions_count:1,not_completed:[],is_completed:!1,convertedContent:"",settings:!1}),Y=[{label:"Variantli",value:"variant"},{label:"Ko'p tanlovli",value:"multiple"},{label:"To'ldiriladigan",value:"refillable"},{label:"Moslashtiriladigan",value:"customizable"}],M=[{value:1},{value:10},{value:16},{value:20},{value:40}];function O(a,t){a=="add"?(s.test_settings.sort_level.push([]),s.store.test_step+=1):(s.test_settings.sort_level.splice(t,1),s.store.test_step-=1)}async function q(a){const t=a.target.files[0],d=URL.createObjectURL(t);console.log(l.fileType),l.fileType=="question"?(s.test[l.slideStep].question.push(t),l.questions.push(d)):s.test[l.slideStep].variant[l.fileId]=[t,d],document.getElementById("upload_question").value=""}async function N(a){const t=a.target.files[0];if(!t)return;const d=await R(t);console.log(d),l.convertedContent=d.value,f(d.value)}function f(a){var r;const t=a.match(/<tr>.*?<\/tr>/gs);if(!t)return[];let d=t.map(m=>{const i=m.match(/<td>(.*?)<\/td>/gs);return i?i.map(g=>g.replace(/<\/?td>/g,"")):[]});d.shift(),console.log(d,"res"),s.store.questions_count=d.length;for(let m=0;m<d.length;m++){s.test[m+1].question[0]=d[m][1];for(let i=2;i<((r=d[m])==null?void 0:r.length);i++)s.test[m+1].variant[i-1]=d[m][i];console.log(s.test[m+1].variant)}}function R(a){return new Promise((t,d)=>{const r=new FileReader;r.onload=async m=>{const i=m.target.result;console.log(i);const g=await je.convertToHtml({arrayBuffer:i},{styleMap:["p[style-name='Equation'] => span.math-display:fresh"]});console.log(g),t(g)},r.onerror=d,r.readAsArrayBuffer(a)})}function v(a,t){console.log(a,t),l.fileId=a,l.fileType=t}function F(){setTimeout(()=>{var a;l.slideStep=+((a=document.querySelector(".swiper-slide-visible"))==null?void 0:a.id)},200)}function T(a){a.deltaX>0?(l.mouse_wheel+=1,l.mouse_wheel%10==0&&(l.slideStep<s.store.questions_count&&(l.slideStep+=1),l.mouse_wheel=0),console.log("Scrolling to the right")):a.deltaX<0&&(l.mouse_wheel+=1,l.mouse_wheel%10==0&&(l.slideStep>1&&(l.slideStep-=1),l.mouse_wheel=0),console.log("Scrolling to the left"))}function L(a){var r;let t,d;if((r=s.test[a].question)!=null&&r.length){t=0;for(let m of Object.values(s.test[a].variant))if(m&&t++,t==2)return d=l.not_completed.indexOf(a),d==-1&&l.not_completed.push(a),!0}return d=l.not_completed.indexOf(a),d!=-1&&l.not_completed.splice(d,1),!1}function j(){var a;l.is_completed&&s.createTest(),l.not_completed.sort((t,d)=>t-d);for(let t=0;t<s.store.questions_count-1;t++)if(l.not_completed[t+1]-l.not_completed[t]!=1){l.slideStep=l.not_completed[t]+1;return}if(((a=Object.keys(l.not_completed))==null?void 0:a.length)==s.store.questions_count){l.is_completed=!0;return}l.slideStep!=s.store.questions_count&&(l.slideStep+=1)}return Ce(()=>l.slideStep,()=>{const a=document.querySelector(".swiper-pagination-clickable");if(a&&a.children.length>=l.slideStep){const t=a.children[l.slideStep-1];t&&t.click()}}),(a,t)=>{const d=ze,r=fe,m=Ie,i=De,g=be,z=ke,oe=Le,Z=Xe,ne=Ke,pe=$e,me=we;return c(),u("main",Ge,[e("section",Je,[Ye,e("div",Ze,[e("div",et,[p(d,{value:o(s).store.questions_count,"onUpdate:value":t[0]||(t[0]=n=>o(s).store.questions_count=n),class:"min-w-[145px] test_arrow !h-[44px] sr_12",options:M.map(n=>({label:`${n.value} talik savollar`,value:n.value})),required:""},{suffixIcon:h(()=>[tt]),_:1},8,["value","options"]),e("div",st,[ot,e("button",{onClick:t[1]||(t[1]=n=>o(l).settings=!0),class:"bg-white rounded-md p-1.5 w-10"},lt)])]),e("div",at,[(c(!0),u(C,null,S(o(s).store.questions_count,n=>(c(),u("button",{onClick:x=>o(l).slideStep=n,class:Fe([[o(l).slideStep==n?"border border-[#40E746]":"border_ced",L(n)?"bg-[#40E746]":""],"h-10 w-10 bg-white r_2 _c55"])},$(n),11,it))),256))])]),e("div",rt,[e("div",dt,[e("p",ct,[e("span",ut,$(o(l).slideStep)+".",1),B(" Savol ")]),p(d,{value:o(s).test[o(l).slideStep].type,"onUpdate:value":t[2]||(t[2]=n=>o(s).test[o(l).slideStep].type=n),class:"!relative min-w-[145px] test_arrow !h-[44px] sr_12",options:Y.map(n=>({label:n.label,value:n.value})),required:""},{suffixIcon:h(()=>[_t]),_:1},8,["value","options"])]),p(o(qe),{onMousewheel:T,onSliderMove:F,watchSlidesProgress:!0,slidesPerView:1,spaceBetween:30,pagination:{clickable:!0},class:"mySwiper",modules:J},{default:h(()=>[(c(),u(C,null,S(16,n=>p(o(Te),{id:n},{default:h(()=>{var x,w,K,le;return[e("section",null,[e("div",pt,[e("div",mt,[(c(!0),u(C,null,S(o(l).questions,_=>(c(),u("div",ft,[e("img",{class:"max-h-[200px]",src:_,alt:""},null,8,ht)]))),256))]),p(r,null,{default:h(()=>[p(o(de),{modelValue:o(s).test[n].question[0],"onUpdate:modelValue":_=>o(s).test[n].question[0]=_},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),vt,e("div",gt,[p(m,{ref_for:!0,ref:"ref1",onClick:t[3]||(t[3]=_=>a.openModal("video")),class:"text-center w-12 h-[100px] !p-0 border-0 shadow-none"},{default:h(()=>[xt,bt]),_:1},512),p(m,{ref_for:!0,ref:"ref2",onClick:t[4]||(t[4]=_=>a.openModal("tekst")),class:"text-center w-12 h-[100px] !p-0 border-0 shadow-none"},{default:h(()=>[kt,wt]),_:1},512),p(m,{ref_for:!0,ref:"ref3",onClick:t[5]||(t[5]=_=>a.openModal("image")),class:"text-center w-12 h-[100px] !p-0 border-0 shadow-none"},{default:h(()=>[yt,Ct]),_:1},512)]),e("label",{onClick:t[6]||(t[6]=_=>o(l).fileType="question"),for:"upload_question",class:"max-w-fit full_flex mt-6 gap-4 h-[44px] border border-[#EDEDED] rounded-full px-8"},[St,B(" Fayl biriktirish ")]),Ft,e("div",Tt,[qt,Pt,((x=o(s).test[n])==null?void 0:x.type)=="variant"||((w=o(s).test[n])==null?void 0:w.type)=="refillable"?(c(),u("div",Ut,[(c(),u(C,null,S(5,_=>{var b,P,U;return e("div",Bt,[e("div",Vt,[p(i,{checked:a.checked,"onUpdate:checked":t[7]||(t[7]=k=>a.checked=k)},null,8,["checked"]),(b=o(s).test[n])!=null&&b.variant[_]&&typeof((P=o(s).test[n])==null?void 0:P.variant[_])=="object"?(c(),u("img",{key:0,class:"max-h-[160px] my-4",src:(U=o(s).test[n])==null?void 0:U.variant[_][1],alt:""},null,8,Et)):(c(),V(r,{key:1},{default:h(()=>[p(o(de),{class:"w-full -mr-4",modelValue:o(s).test[n].variant[_],"onUpdate:modelValue":k=>o(s).test[n].variant[_]=k},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024))]),e("label",{onClick:k=>v(_,"variant"),for:"upload_question"},$t,8,Ot)])}),64))])):((K=o(s).test[n])==null?void 0:K.type)=="multiple"?(c(),u("div",It,[(c(),u(C,null,S(5,_=>e("div",null,[_!=1?(c(),u("hr",Dt)):A("",!0),e("div",Ht,[(c(),u(C,null,S(2,b=>{var P,U,k;return e("div",Mt,[e("div",Nt,[p(i,{checked:a.checked,"onUpdate:checked":t[8]||(t[8]=W=>a.checked=W)},null,8,["checked"]),(P=o(s).test[n])!=null&&P.variant[b]&&typeof((U=o(s).test[n])==null?void 0:U.variant[b])=="object"?(c(),u("img",{key:0,class:"max-h-[160px] my-4",src:(k=o(s).test[n])==null?void 0:k.variant[b][1],alt:""},null,8,Rt)):ee((c(),u("input",{key:1,"onUpdate:modelValue":W=>o(s).test[n].variant[b]=W,class:"border-0 bg-transparent p-0 rounded-[0]",type:"text",placeholder:"Variant uchun"},null,8,Lt)),[[re,o(s).test[n].variant[b]]])]),e("label",{onClick:W=>v(b,"variant"),for:"upload_question"},Kt,8,At)])}),64))])])),64))])):((le=o(s).test[n])==null?void 0:le.type)=="customizable"?(c(),u("div",Wt,[(c(),u(C,null,S(3,_=>{var b,P,U;return e("div",null,[e("div",Xt,[e("div",Qt,[p(i,{checked:a.checked,"onUpdate:checked":t[9]||(t[9]=k=>a.checked=k)},null,8,["checked"]),(b=o(s).test[n])!=null&&b.variant[_]&&typeof((P=o(s).test[n])==null?void 0:P.variant[_])=="object"?(c(),u("img",{key:0,class:"max-h-[160px] my-4",src:(U=o(s).test[n])==null?void 0:U.variant[_][1],alt:""},null,8,Gt)):ee((c(),u("input",{key:1,"onUpdate:modelValue":k=>o(s).test[n].variant[_]=k,class:"border-0 bg-transparent p-0 rounded-[0]",type:"text",placeholder:"Variant uchun"},null,8,Jt)),[[re,o(s).test[n].variant[_]]])]),e("label",{onClick:k=>v(_,"variant"),for:"upload_question"},es,8,Yt)]),_!=1?(c(),u("hr",ts)):A("",!0)])}),64))])):A("",!0)])])])]}),_:2},1032,["id"])),64))]),_:1}),e("div",ss,[o(l).is_completed?ee((c(),V(z,{key:0,onClick:j,class:"!h-12 font-semibold b_c40 relative white !px-6"},{default:h(()=>[B(" Yuklash "),o(H).isLoadingType("createTest")?(c(),V(g,{key:0,class:"full_flex scale-75 rounded-lg"})):A("",!0)]),_:1})),[[me,o(H).isLoadingType("createTest")]]):(c(),V(z,{key:1,onClick:j,class:"!h-12 font-semibold bg_orange relative white !px-6"},{default:h(()=>[B(" Keyingi "),o(H).isLoadingType("createTest")?(c(),V(g,{key:0,class:"full_flex scale-75 rounded-lg"})):A("",!0)]),_:1}))])])]),e("input",{onChange:q,class:"input_file",type:"file",id:"upload_question"},null,32),e("input",{onChange:N,class:"input_file",type:"file",id:"import_file"},null,32),p(pe,{class:"max-w-[440px]",open:o(l).settings,"onUpdate:open":t[17]||(t[17]=n=>o(l).settings=n),centered:""},{default:h(()=>[os,e("div",ns,[e("div",ls,[as,e("div",is,[p(oe,{class:"w-full",value:o(s).test_settings.start_date,"onUpdate:value":t[10]||(t[10]=n=>o(s).test_settings.start_date=n),placeholder:"0000-00-00"},null,8,["value"]),p(Z,{value:o(s).test_settings.start_date,"onUpdate:value":t[11]||(t[11]=n=>o(s).test_settings.start_date=n),format:"HH:mm",placeholder:"00:00"},null,8,["value"])])]),e("div",rs,[ds,e("div",cs,[p(oe,{class:"w-full",value:o(s).test_settings.end_date,"onUpdate:value":t[12]||(t[12]=n=>o(s).test_settings.end_date=n),placeholder:"0000-00-00"},null,8,["value"]),p(Z,{value:o(s).test_settings.end_date,"onUpdate:value":t[13]||(t[13]=n=>o(s).test_settings.end_date=n),format:"HH:mm",placeholder:"00:00"},null,8,["value"])])]),e("div",us,[_s,B(" "+$(o(s).test_settings.period)+" ",1),e("div",null,[p(Z,{onChange:t[14]||(t[14]=n=>{const x=n.split(":"),w=+x[0]*60,K=+x[1];o(s).test_settings.period=K+w}),format:"HH:mm","value-format":"HH:mm",placeholder:"00:00"})])]),e("div",ps,[ms,fs,(c(!0),u(C,null,S(o(s).store.test_step,(n,x)=>(c(),u("div",hs,[B($(x+1)+". ",1),p(d,{value:o(s).test_settings.sort_level[x],"onUpdate:value":w=>o(s).test_settings.sort_level[x]=w,class:"min-w-[80px] test_arrow !h-[42px] sr_12","show-search":"",required:""},{suffixIcon:h(()=>[vs]),default:h(()=>[(c(!0),u(C,null,S(o(s).store.test_count,w=>(c(),V(ne,{value:w},{default:h(()=>[B($(w),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["value","onUpdate:value"]),o(s).store.test_step==x+1?(c(),u("p",{key:0,onClick:t[15]||(t[15]=w=>O("add")),class:"full_flex min-w-[50px] h-[50px] rounded-full border border-[#CCCCCC] cursor-pointer"},xs)):(c(),u("p",{key:1,onClick:w=>O("remove",x),class:"full_flex min-w-[50px] h-[50px] rounded-full border border-[#CCCCCC] cursor-pointer"},ws,8,bs))]))),256)),e("div",ys,[e("div",Cs,[Ss,p(d,{value:o(s).test_settings.test_count,"onUpdate:value":t[16]||(t[16]=n=>o(s).test_settings.test_count=n),class:"min-w-[80px] test_arrow !h-[42px] sr_12","show-search":"",required:""},{suffixIcon:h(()=>[Fs]),default:h(()=>[(c(!0),u(C,null,S(o(s).store.test_count,n=>(c(),V(ne,{value:n},{default:h(()=>[B($(n),1)]),_:2},1032,["value"]))),256))]),_:1},8,["value"])])])])])]),_:1},8,["open"])])}}};export{lo as default};
