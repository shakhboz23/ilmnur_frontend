import{_ as me}from"./1uzDQ0Ou.js";import{_ as fe,a as he,b as ve,c as ge,d as Q,e as xe}from"./B5w-Y57J.js";import{_ as be}from"./CWOH58H5.js";import{d as le,c as ae,D as p,r as ke,w as we,$ as u,a4 as e,X as h,u as o,F as C,ac as S,a5 as $,a6 as B,W as V,ag as ye,V as c,ae as Ce,ah as Se,ad as L,aa as ie,ab as re,ai as Fe}from"./Dg7Bj1Dn.js";import{m as y,t as I,I as D,s as Te,J as qe,K as Pe,i as Ue}from"./EGzRItca.js";import{_ as G}from"./bKiWB3AL.js";import{_ as Be}from"./DObO2eXP.js";import{_ as Ve}from"./COfAGGZC.js";import{s as de}from"./L8E0Fqhm.js";import{l as Ee}from"./aBABQFRA.js";import{M as Oe}from"./CTRF4KJ5.js";import{B as je}from"./DCwYVgvB.js";import{C as $e}from"./BH7UhTx1.js";import{g as Ie,c as ce,d as De,r as He,a as Me,D as Ne}from"./BYUIsaF3.js";import{d as Re,a as ue}from"./Bj0rUMwC.js";import{u as _e}from"./HhnenXbr.js";import{_ as Le,b as Ae}from"./BR3brOdA.js";import"./BX0bKWBI.js";import"./d_Gx2zIb.js";import"./CRfNdu21.js";import"./CbMNUQ5H.js";import"./CjMGAagW.js";import"./DkgJn5kV.js";import"./BmXzEDa7.js";import"./B4_QNEc3.js";import"./CECZEjtU.js";import"./BP_no5o-.js";import"./DUxgHyWd.js";import"./D_4OiXLP.js";import"./D6ZTGJJe.js";const ee=()=>({format:String,showNow:D(),showHour:D(),showMinute:D(),showSecond:D(),use12Hours:D(),hourStep:Number,minuteStep:Number,secondStep:Number,hideDisabledOptions:D(),popupClassName:String,status:Te()});function ze(E){const J=Ie(E,y(y({},ee()),{order:{type:Boolean,default:!0}})),{TimePicker:s,RangePicker:A}=J,l=le({name:"ATimePicker",inheritAttrs:!1,props:y(y(y(y({},ce()),De()),ee()),{addon:{type:Function}}),slots:Object,setup(H,O){let{slots:q,expose:M,emit:f,attrs:N}=O;const v=H,F=_e();Re(!(q.addon||v.addon),"TimePicker","`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");const T=ae();M({focus:()=>{var r;(r=T.value)===null||r===void 0||r.focus()},blur:()=>{var r;(r=T.value)===null||r===void 0||r.blur()}});const R=(r,m)=>{f("update:value",r),f("change",r,m),F.onFieldChange()},j=r=>{f("update:open",r),f("openChange",r)},a=r=>{f("focus",r)},t=r=>{f("blur",r),F.onFieldBlur()},d=r=>{f("ok",r)};return()=>{const{id:r=F.id.value}=v;return p(s,I(I(I({},N),ue(v,["onUpdate:value","onUpdate:open"])),{},{id:r,dropdownClassName:v.popupClassName,mode:void 0,ref:T,renderExtraFooter:v.addon||q.addon||v.renderExtraFooter||q.renderExtraFooter,onChange:R,onOpenChange:j,onFocus:a,onBlur:t,onOk:d}),q)}}}),Y=le({name:"ATimeRangePicker",inheritAttrs:!1,props:y(y(y(y({},ce()),He()),ee()),{order:{type:Boolean,default:!0}}),slots:Object,setup(H,O){let{slots:q,expose:M,emit:f,attrs:N}=O;const v=H,F=ae(),T=_e();M({focus:()=>{var i;(i=F.value)===null||i===void 0||i.focus()},blur:()=>{var i;(i=F.value)===null||i===void 0||i.blur()}});const R=(i,g)=>{f("update:value",i),f("change",i,g),T.onFieldChange()},j=i=>{f("update:open",i),f("openChange",i)},a=i=>{f("focus",i)},t=i=>{f("blur",i),T.onFieldBlur()},d=(i,g)=>{f("panelChange",i,g)},r=i=>{f("ok",i)},m=(i,g,z)=>{f("calendarChange",i,g,z)};return()=>{const{id:i=T.id.value}=v;return p(A,I(I(I({},N),ue(v,["onUpdate:open","onUpdate:value"])),{},{id:i,dropdownClassName:v.popupClassName,picker:"time",mode:void 0,ref:F,onChange:R,onOpenChange:j,onFocus:a,onBlur:t,onPanelChange:d,onOk:r,onCalendarChange:m}),q)}}});return{TimePicker:l,TimeRangePicker:Y}}const{TimePicker:X,TimeRangePicker:te}=ze(Me),Ke=y(X,{TimePicker:X,TimeRangePicker:te,install:E=>(E.component(X.name,X),E.component(te.name,te),E)}),We="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%2012H6M12%2012V'%20stroke='%23FF852E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Xe={class:"rounded-[6px] overflow-hidden overflow-y-auto h-full max-h-[calc(100vh_-_160px)]"},Qe={class:"rounded-[6px] overflow-hidden"},Ge=e("h1",{class:"text-xl font-semibold leading-[30px] pt-8 pb-6 bg-white px-9"}," Test yaratishni boshlang: ",-1),Je={class:"mt-6 px-9"},Ye={class:"flex items-center justify-between"},Ze=e("div",{class:"full_flex bg-[#FFF3EB] w-[42px] !h-[42px]"},[e("img",{src:G,alt:""})],-1),et={class:"flex gap-2"},tt=e("div",null,[e("label",{for:"import_file",class:"full_flex gap-2 bg-white p-1.5 rounded-md border_ced cursor-pointer"},[e("img",{class:"h-7 w-7",src:Be,alt:""}),e("p",null,"WORD")])],-1),st=e("img",{class:"mx-auto",src:fe,alt:""},null,-1),ot=[st],nt={class:"flex gap-[10px] my-6"},lt=["onClick"],at={class:"bg-white px-9 py-6"},it={class:"flex items-center justify-between"},rt={class:"text-2xl"},dt={class:"font-semibold text-[28px]"},ct=e("div",{class:"full_flex bg-[#FFF3EB] w-[42px] !h-[42px]"},[e("img",{src:G,alt:""})],-1),ut={class:"w-[70%]"},_t={class:"flex overflow-hidden overflow-x-auto"},pt={class:"max-h-min max-w-min min-h-fit min-w-fit"},mt=["src"],ft=e("label",{class:"font-medium",for:"resourses"},"Resurslarni biriktiring",-1),ht={class:"full_flex my-auto space-x-10 mt-5"},vt=e("div",{class:"full_flex mx-auto h-10 w-10 bg-[#FFF3EB] rounded-full"},[e("img",{class:"w-[40%]",src:he,alt:""})],-1),gt=e("p",{class:"font-medium mt-4 text-xs _c24"},"Video",-1),xt=e("div",{class:"full_flex mx-auto h-10 w-10 bg-[#FFF3EB] rounded-full"},[e("img",{class:"w-[40%]",src:ve,alt:""})],-1),bt=e("p",{class:"font-medium mt-4 text-xs _c24"},"Tekst",-1),kt=e("div",{class:"full_flex mx-auto h-10 w-10 bg-[#FFF3EB] rounded-full"},[e("img",{class:"w-[40%]",src:ge,alt:""})],-1),wt=e("p",{class:"font-medium mt-4 text-xs _c24"},"Rasm",-1),yt=e("img",{class:"cursor-pointer",src:Q,alt:""},null,-1),Ct=e("hr",{class:"border_ced my-6 !border-b-0"},null,-1),St={class:"space-y-6"},Ft=e("h1",{class:"-mb-3"},"Variantlar",-1),Tt=e("p",null,"To‘g‘ri javobni belgilang",-1),qt={key:0,class:"space-y-6"},Pt={class:"flex items-center gap-4"},Ut={class:"flex items-center gap-4 b_cf5 r_8 w-full px-4"},Bt=["src"],Vt=["onClick"],Et=e("img",{class:"cursor-pointer",src:Q,alt:""},null,-1),Ot=[Et],jt={key:1},$t={key:0,class:"border_ced my-6 !border-b-0"},It={class:"grid grid-cols-2 gap-6"},Dt={class:"flex items-center gap-4"},Ht={class:"flex items-center gap-4 b_cf5 r_8 w-full px-4"},Mt=["src"],Nt=["onUpdate:modelValue"],Rt=["onClick"],Lt=e("img",{class:"cursor-pointer",src:Q,alt:""},null,-1),At=[Lt],zt={key:2,class:"b_cf5 r_8 px-4"},Kt={class:"flex items-center gap-4"},Wt={class:"flex items-center gap-4 r_8 w-full"},Xt=["src"],Qt=["onUpdate:modelValue"],Gt=["onClick"],Jt=e("img",{class:"cursor-pointer",src:Q,alt:""},null,-1),Yt=[Jt],Zt={key:0,class:"border_ced !border-b-0"},es={class:"text-end w-[70%] mt-6"},ts=e("div",{class:"flex justify-between items-center w-full"},[e("h1",{class:"font-semibold text-2xl"},"Sozlamalalar")],-1),ss={class:"mt-4 space-y-4"},os={class:"space-y-2"},ns=e("label",{for:"name"},"Boshlanish vaqti",-1),ls={class:"flex gap-2"},as={class:"space-y-2"},is=e("label",{for:"name"},"Tugash vaqti",-1),rs={class:"flex gap-2"},ds={class:"space-y-2"},cs=e("label",{for:"name"},"Test muddati",-1),us={class:"space-y-2"},_s=e("h2",null,"Saralash",-1),ps=e("label",{for:"sortnum"},"Saralash bosqichi",-1),ms={class:"flex items-center gap-4"},fs=e("div",{class:"full_flex bg-[#FFF3EB] w-[42px] !h-[42px]"},[e("img",{src:G,alt:""})],-1),hs=e("img",{src:Ve,alt:""},null,-1),vs=[hs],gs=["onClick"],xs=e("img",{src:We,alt:""},null,-1),bs=[xs],ks={class:"grid grid-cols-3"},ws={class:"space-y-2"},ys=e("label",{for:"sortnum"},"Testlar soni",-1),Cs=e("div",{class:"full_flex bg-[#FFF3EB] w-[42px] !h-[42px]"},[e("img",{src:G,alt:""})],-1),to={__name:"index",setup(E){const J=[ye],s=qe();Pe();const A=Ue(),l=ke({questions:[],questionmodal:!1,cursorPosition:"",fileId:"",fileType:"",mouse_wheel:"",slideStep:1,questions_count:1,not_completed:[],is_completed:!1,convertedContent:"",settings:!1}),Y=[{label:"Variantli",value:"variant"},{label:"Ko'p tanlovli",value:"multiple"},{label:"To'ldiriladigan",value:"refillable"},{label:"Moslashtiriladigan",value:"customizable"}],H=[{value:1},{value:10},{value:16},{value:20},{value:40}];function O(a,t){a=="add"?(s.test_settings.sort_level.push([]),s.store.test_step+=1):(s.test_settings.sort_level.splice(t,1),s.store.test_step-=1)}async function q(a){const t=a.target.files[0],d=URL.createObjectURL(t);console.log(l.fileType),l.fileType=="question"?(s.test[l.slideStep].question.push(t),l.questions.push(d)):s.test[l.slideStep].variant[l.fileId]=[t,d],document.getElementById("upload_question").value=""}async function M(a){const t=a.target.files[0];if(!t)return;const d=await N(t);console.log(d),l.convertedContent=d.value,f(d.value)}function f(a){var r;const t=a.match(/<tr>.*?<\/tr>/gs);if(!t)return[];let d=t.map(m=>{const i=m.match(/<td>(.*?)<\/td>/gs);return i?i.map(g=>g.replace(/<\/?td>/g,"")):[]});d.shift(),console.log(d,"res"),s.store.questions_count=d.length;for(let m=0;m<d.length;m++){s.test[m+1].question[0]=d[m][1];for(let i=2;i<((r=d[m])==null?void 0:r.length);i++)s.test[m+1].variant[i-1]=d[m][i];console.log(s.test[m+1].variant)}}function N(a){return new Promise((t,d)=>{const r=new FileReader;r.onload=async m=>{const i=m.target.result;console.log(i);const g=await Ee.convertToHtml({arrayBuffer:i},{styleMap:["p[style-name='Equation'] => span.math-display:fresh"]});console.log(g),t(g)},r.onerror=d,r.readAsArrayBuffer(a)})}function v(a,t){console.log(a,t),l.fileId=a,l.fileType=t}function F(){setTimeout(()=>{var a;l.slideStep=+((a=document.querySelector(".swiper-slide-visible"))==null?void 0:a.id)},200)}function T(a){a.deltaX>0?(l.mouse_wheel+=1,l.mouse_wheel%10==0&&(l.slideStep<s.store.questions_count&&(l.slideStep+=1),l.mouse_wheel=0),console.log("Scrolling to the right")):a.deltaX<0&&(l.mouse_wheel+=1,l.mouse_wheel%10==0&&(l.slideStep>1&&(l.slideStep-=1),l.mouse_wheel=0),console.log("Scrolling to the left"))}function R(a){var r;let t,d;if((r=s.test[a].question)!=null&&r.length){t=0;for(let m of Object.values(s.test[a].variant))if(m&&t++,t==2)return d=l.not_completed.indexOf(a),d==-1&&l.not_completed.push(a),!0}return d=l.not_completed.indexOf(a),d!=-1&&l.not_completed.splice(d,1),!1}function j(){var a;l.is_completed&&s.createTest(),l.not_completed.sort((t,d)=>t-d);for(let t=0;t<s.store.questions_count-1;t++)if(l.not_completed[t+1]-l.not_completed[t]!=1){l.slideStep=l.not_completed[t]+1;return}if(((a=Object.keys(l.not_completed))==null?void 0:a.length)==s.store.questions_count){l.is_completed=!0;return}l.slideStep!=s.store.questions_count&&(l.slideStep+=1)}return we(()=>l.slideStep,()=>{const a=document.querySelector(".swiper-pagination-clickable");if(a&&a.children.length>=l.slideStep){const t=a.children[l.slideStep-1];t&&t.click()}}),(a,t)=>{const d=Le,r=me,m=je,i=$e,g=xe,z=be,se=Ne,Z=Ke,oe=Ae,pe=Oe;return c(),u("main",Xe,[e("section",Qe,[Ge,e("div",Je,[e("div",Ye,[p(d,{value:o(s).store.questions_count,"onUpdate:value":t[0]||(t[0]=n=>o(s).store.questions_count=n),class:"min-w-[145px] test_arrow !h-[44px] sr_12",options:H.map(n=>({label:`${n.value} talik savollar`,value:n.value})),required:""},{suffixIcon:h(()=>[Ze]),_:1},8,["value","options"]),e("div",et,[tt,e("button",{onClick:t[1]||(t[1]=n=>o(l).settings=!0),class:"bg-white rounded-md p-1.5 w-10"},ot)])]),e("div",nt,[(c(!0),u(C,null,S(o(s).store.questions_count,n=>(c(),u("button",{onClick:x=>o(l).slideStep=n,class:Ce([[o(l).slideStep==n?"border border-[#40E746]":"border_ced",R(n)?"bg-[#40E746]":""],"h-10 w-10 bg-white r_2 _c55"])},$(n),11,lt))),256))])]),e("div",at,[e("div",it,[e("p",rt,[e("span",dt,$(o(l).slideStep)+".",1),B(" Savol ")]),p(d,{value:o(s).test[o(l).slideStep].type,"onUpdate:value":t[2]||(t[2]=n=>o(s).test[o(l).slideStep].type=n),class:"!relative min-w-[145px] test_arrow !h-[44px] sr_12",options:Y.map(n=>({label:n.label,value:n.value})),required:""},{suffixIcon:h(()=>[ct]),_:1},8,["value","options"])]),p(o(Fe),{onMousewheel:T,onSliderMove:F,watchSlidesProgress:!0,slidesPerView:1,spaceBetween:30,pagination:{clickable:!0},class:"mySwiper",modules:J},{default:h(()=>[(c(),u(C,null,S(16,n=>p(o(Se),{id:n},{default:h(()=>{var x,w,K,ne;return[e("section",null,[e("div",ut,[e("div",_t,[(c(!0),u(C,null,S(o(l).questions,_=>(c(),u("div",pt,[e("img",{class:"max-h-[200px]",src:_,alt:""},null,8,mt)]))),256))]),p(r,null,{default:h(()=>[p(o(de),{modelValue:o(s).test[n].question[0],"onUpdate:modelValue":_=>o(s).test[n].question[0]=_},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),ft,e("div",ht,[p(m,{ref_for:!0,ref:"ref1",onClick:t[3]||(t[3]=_=>a.openModal("video")),class:"text-center w-12 h-[100px] !p-0 border-0 shadow-none"},{default:h(()=>[vt,gt]),_:1},512),p(m,{ref_for:!0,ref:"ref2",onClick:t[4]||(t[4]=_=>a.openModal("tekst")),class:"text-center w-12 h-[100px] !p-0 border-0 shadow-none"},{default:h(()=>[xt,bt]),_:1},512),p(m,{ref_for:!0,ref:"ref3",onClick:t[5]||(t[5]=_=>a.openModal("image")),class:"text-center w-12 h-[100px] !p-0 border-0 shadow-none"},{default:h(()=>[kt,wt]),_:1},512)]),e("label",{onClick:t[6]||(t[6]=_=>o(l).fileType="question"),for:"upload_question",class:"max-w-fit full_flex mt-6 gap-4 h-[44px] border border-[#EDEDED] rounded-full px-8"},[yt,B(" Fayl biriktirish ")]),Ct,e("div",St,[Ft,Tt,((x=o(s).test[n])==null?void 0:x.type)=="variant"||((w=o(s).test[n])==null?void 0:w.type)=="refillable"?(c(),u("div",qt,[(c(),u(C,null,S(5,_=>{var b,P,U;return e("div",Pt,[e("div",Ut,[p(i,{checked:a.checked,"onUpdate:checked":t[7]||(t[7]=k=>a.checked=k)},null,8,["checked"]),(b=o(s).test[n])!=null&&b.variant[_]&&typeof((P=o(s).test[n])==null?void 0:P.variant[_])=="object"?(c(),u("img",{key:0,class:"max-h-[160px] my-4",src:(U=o(s).test[n])==null?void 0:U.variant[_][1],alt:""},null,8,Bt)):(c(),V(r,{key:1},{default:h(()=>[p(o(de),{class:"w-full -mr-4",modelValue:o(s).test[n].variant[_],"onUpdate:modelValue":k=>o(s).test[n].variant[_]=k},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024))]),e("label",{onClick:k=>v(_,"variant"),for:"upload_question"},Ot,8,Vt)])}),64))])):((K=o(s).test[n])==null?void 0:K.type)=="multiple"?(c(),u("div",jt,[(c(),u(C,null,S(5,_=>e("div",null,[_!=1?(c(),u("hr",$t)):L("",!0),e("div",It,[(c(),u(C,null,S(2,b=>{var P,U,k;return e("div",Dt,[e("div",Ht,[p(i,{checked:a.checked,"onUpdate:checked":t[8]||(t[8]=W=>a.checked=W)},null,8,["checked"]),(P=o(s).test[n])!=null&&P.variant[b]&&typeof((U=o(s).test[n])==null?void 0:U.variant[b])=="object"?(c(),u("img",{key:0,class:"max-h-[160px] my-4",src:(k=o(s).test[n])==null?void 0:k.variant[b][1],alt:""},null,8,Mt)):ie((c(),u("input",{key:1,"onUpdate:modelValue":W=>o(s).test[n].variant[b]=W,class:"border-0 bg-transparent p-0 rounded-[0]",type:"text",placeholder:"Variant uchun"},null,8,Nt)),[[re,o(s).test[n].variant[b]]])]),e("label",{onClick:W=>v(b,"variant"),for:"upload_question"},At,8,Rt)])}),64))])])),64))])):((ne=o(s).test[n])==null?void 0:ne.type)=="customizable"?(c(),u("div",zt,[(c(),u(C,null,S(3,_=>{var b,P,U;return e("div",null,[e("div",Kt,[e("div",Wt,[p(i,{checked:a.checked,"onUpdate:checked":t[9]||(t[9]=k=>a.checked=k)},null,8,["checked"]),(b=o(s).test[n])!=null&&b.variant[_]&&typeof((P=o(s).test[n])==null?void 0:P.variant[_])=="object"?(c(),u("img",{key:0,class:"max-h-[160px] my-4",src:(U=o(s).test[n])==null?void 0:U.variant[_][1],alt:""},null,8,Xt)):ie((c(),u("input",{key:1,"onUpdate:modelValue":k=>o(s).test[n].variant[_]=k,class:"border-0 bg-transparent p-0 rounded-[0]",type:"text",placeholder:"Variant uchun"},null,8,Qt)),[[re,o(s).test[n].variant[_]]])]),e("label",{onClick:k=>v(_,"variant"),for:"upload_question"},Yt,8,Gt)]),_!=1?(c(),u("hr",Zt)):L("",!0)])}),64))])):L("",!0)])])])]}),_:2},1032,["id"])),64))]),_:1}),e("div",es,[o(l).is_completed?(c(),V(z,{key:0,onClick:j,class:"!h-12 font-semibold b_c40 relative white !px-6"},{default:h(()=>[B(" Yuklash "),o(A).isLoadingType("createTest")?(c(),V(g,{key:0,class:"full_flex scale-75 rounded-lg"})):L("",!0)]),_:1})):(c(),V(z,{key:1,onClick:j,class:"!h-12 font-semibold bg_orange relative white !px-6"},{default:h(()=>[B(" Keyingi "),o(A).isLoadingType("createTest")?(c(),V(g,{key:0,class:"full_flex scale-75 rounded-lg"})):L("",!0)]),_:1}))])])]),e("input",{onChange:q,class:"input_file",type:"file",id:"upload_question"},null,32),e("input",{onChange:M,class:"input_file",type:"file",id:"import_file"},null,32),p(pe,{class:"max-w-[440px]",open:o(l).settings,"onUpdate:open":t[17]||(t[17]=n=>o(l).settings=n),centered:""},{default:h(()=>[ts,e("div",ss,[e("div",os,[ns,e("div",ls,[p(se,{class:"w-full",value:o(s).test_settings.start_date,"onUpdate:value":t[10]||(t[10]=n=>o(s).test_settings.start_date=n),placeholder:"0000-00-00"},null,8,["value"]),p(Z,{value:o(s).test_settings.start_date,"onUpdate:value":t[11]||(t[11]=n=>o(s).test_settings.start_date=n),format:"HH:mm",placeholder:"00:00"},null,8,["value"])])]),e("div",as,[is,e("div",rs,[p(se,{class:"w-full",value:o(s).test_settings.end_date,"onUpdate:value":t[12]||(t[12]=n=>o(s).test_settings.end_date=n),placeholder:"0000-00-00"},null,8,["value"]),p(Z,{value:o(s).test_settings.end_date,"onUpdate:value":t[13]||(t[13]=n=>o(s).test_settings.end_date=n),format:"HH:mm",placeholder:"00:00"},null,8,["value"])])]),e("div",ds,[cs,B(" "+$(o(s).test_settings.period)+" ",1),e("div",null,[p(Z,{onChange:t[14]||(t[14]=n=>{const x=n.split(":"),w=+x[0]*60,K=+x[1];o(s).test_settings.period=K+w}),format:"HH:mm","value-format":"HH:mm",placeholder:"00:00"})])]),e("div",us,[_s,ps,(c(!0),u(C,null,S(o(s).store.test_step,(n,x)=>(c(),u("div",ms,[B($(x+1)+". ",1),p(d,{value:o(s).test_settings.sort_level[x],"onUpdate:value":w=>o(s).test_settings.sort_level[x]=w,class:"min-w-[80px] test_arrow !h-[42px] sr_12","show-search":"",required:""},{suffixIcon:h(()=>[fs]),default:h(()=>[(c(!0),u(C,null,S(o(s).store.test_count,w=>(c(),V(oe,{value:w},{default:h(()=>[B($(w),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["value","onUpdate:value"]),o(s).store.test_step==x+1?(c(),u("p",{key:0,onClick:t[15]||(t[15]=w=>O("add")),class:"full_flex min-w-[50px] h-[50px] rounded-full border border-[#CCCCCC] cursor-pointer"},vs)):(c(),u("p",{key:1,onClick:w=>O("remove",x),class:"full_flex min-w-[50px] h-[50px] rounded-full border border-[#CCCCCC] cursor-pointer"},bs,8,gs))]))),256)),e("div",ks,[e("div",ws,[ys,p(d,{value:o(s).test_settings.test_count,"onUpdate:value":t[16]||(t[16]=n=>o(s).test_settings.test_count=n),class:"min-w-[80px] test_arrow !h-[42px] sr_12","show-search":"",required:""},{suffixIcon:h(()=>[Cs]),default:h(()=>[(c(!0),u(C,null,S(o(s).store.test_count,n=>(c(),V(oe,{value:n},{default:h(()=>[B($(n),1)]),_:2},1032,["value"]))),256))]),_:1},8,["value"])])])])])]),_:1},8,["open"])])}}};export{to as default};
