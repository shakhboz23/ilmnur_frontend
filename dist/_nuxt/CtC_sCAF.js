import{a as _e,b as ge,c as be,_ as Ie,d as Oe,e as De}from"./BU73lrAx.js";import{_ as Re}from"./yLeZWo8z.js";import{_ as Me}from"./kmg9x5MK.js";import{s as Ve}from"./B-rxkhj3.js";import{m as E,X as A,au as L,s as xe,ae,t as _,q,a5 as Ne,I as re,W as Le,ac as Fe,an as je,b3 as Ae,R as qe,S as He,as as ee,T as Ue,aC as ze,x as We,i as ye,K as Ze,O as Xe}from"./dGlScG6Q.js";import{z as we,H as ke,w as oe,A as Ke,f as P,d as H,D as n,a6 as T,F as de,c as N,x as ue,b as Ye,ar as Ge,V as x,$ as y,X as R,a4 as r,aa as O,u as f,r as Je,G as Qe,ad as K,W as pe,ap as et,ab as tt,ak as ot}from"./Dg7Bj1Dn.js";import{B as ie}from"./D4WAMzfQ.js";import{_ as lt,T as nt}from"./DsRK4tgI.js";import{M as st}from"./CKiwIc-3.js";import{T as rt,t as it}from"./Czqq-Fiw.js";import{u as fe}from"./DkgJn5kV.js";import{u as ve,P as Ce,e as at}from"./Rdz3xBL6.js";import{M as dt,b as ut,a as ct}from"./DYLgWWxQ.js";function pt(t){const e=window.innerWidth||document.documentElement.clientWidth,d=window.innerHeight||document.documentElement.clientHeight,{top:l,right:o,bottom:v,left:m}=t.getBoundingClientRect();return l>=0&&m>=0&&o<=e&&v<=d}function ft(t,e,d,l){const[o,v]=ve(void 0);we(()=>{const i=typeof t.value=="function"?t.value():t.value;v(i||null)},{flush:"post"});const[m,c]=ve(null),w=()=>{if(!e.value){c(null);return}if(o.value){!pt(o.value)&&e.value&&o.value.scrollIntoView(l.value);const{left:i,top:u,width:h,height:k}=o.value.getBoundingClientRect(),g={left:i,top:u,width:h,height:k,radius:0};JSON.stringify(m.value)!==JSON.stringify(g)&&c(g)}else c(null)};return ke(()=>{oe([e,o],()=>{w()},{flush:"post",immediate:!0}),window.addEventListener("resize",w)}),Ke(()=>{window.removeEventListener("resize",w)}),[P(()=>{var i,u;if(!m.value)return m.value;const h=((i=d.value)===null||i===void 0?void 0:i.offset)||6,k=((u=d.value)===null||u===void 0?void 0:u.radius)||2;return{left:m.value.left-h,top:m.value.top-h,width:m.value.width+h*2,height:m.value.height+h*2,radius:k}}),o]}const vt=()=>({arrow:L([Boolean,Object]),target:L([String,Function,Object]),title:L([String,Object]),description:L([String,Object]),placement:xe(),mask:L([Object,Boolean],!0),className:{type:String},style:ae(),scrollIntoViewOptions:L([Boolean,Object])}),ce=()=>E(E({},vt()),{prefixCls:{type:String},total:{type:Number},current:{type:Number},onClose:A(),onFinish:A(),renderPanel:A(),onPrev:A(),onNext:A()}),mt=H({name:"DefaultPanel",inheritAttrs:!1,props:ce(),setup(t,e){let{attrs:d}=e;return()=>{const{prefixCls:l,current:o,total:v,title:m,description:c,onClose:w,onPrev:a,onNext:i,onFinish:u}=t;return n("div",_(_({},d),{},{class:q(`${l}-content`,d.class)}),[n("div",{class:`${l}-inner`},[n("button",{type:"button",onClick:w,"aria-label":"Close",class:`${l}-close`},[n("span",{class:`${l}-close-x`},[T("×")])]),n("div",{class:`${l}-header`},[n("div",{class:`${l}-title`},[m])]),n("div",{class:`${l}-description`},[c]),n("div",{class:`${l}-footer`},[n("div",{class:`${l}-sliders`},[v>1?[...Array.from({length:v}).keys()].map((h,k)=>n("span",{key:h,class:k===o?"active":""},null)):null]),n("div",{class:`${l}-buttons`},[o!==0?n("button",{class:`${l}-prev-btn`,onClick:a},[T("Prev")]):null,o===v-1?n("button",{class:`${l}-finish-btn`,onClick:u},[T("Finish")]):n("button",{class:`${l}-next-btn`,onClick:i},[T("Next")])])])])])}}}),ht=mt,_t=H({name:"TourStep",inheritAttrs:!1,props:ce(),setup(t,e){let{attrs:d}=e;return()=>{const{current:l,renderPanel:o}=t;return n(de,null,[typeof o=="function"?o(E(E({},d),t),l):n(ht,_(_({},d),t),null)])}}}),gt=_t;let me=0;const bt=Ne();function xt(){let t;return bt?(t=me,me+=1):t="TEST_OR_SSR",t}function yt(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:N("");const e=`vc_unique_${xt()}`;return t.value||e}const te={fill:"transparent","pointer-events":"auto"},wt=H({name:"TourMask",props:{prefixCls:{type:String},pos:ae(),rootClassName:{type:String},showMask:re(),fill:{type:String,default:"rgba(0,0,0,0.5)"},open:re(),animated:L([Boolean,Object]),zIndex:{type:Number}},setup(t,e){let{attrs:d}=e;const l=yt();return()=>{const{prefixCls:o,open:v,rootClassName:m,pos:c,showMask:w,fill:a,animated:i,zIndex:u}=t,h=`${o}-mask-${l}`,k=typeof i=="object"?i==null?void 0:i.placeholder:i;return n(Ce,{visible:v,autoLock:!0},{default:()=>v&&n("div",_(_({},d),{},{class:q(`${o}-mask`,m,d.class),style:[{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:u,pointerEvents:"none"},d.style]}),[w?n("svg",{style:{width:"100%",height:"100%"}},[n("defs",null,[n("mask",{id:h},[n("rect",{x:"0",y:"0",width:"100vw",height:"100vh",fill:"white"},null),c&&n("rect",{x:c.left,y:c.top,rx:c.radius,width:c.width,height:c.height,fill:"black",class:k?`${o}-placeholder-animated`:""},null)])]),n("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:a,mask:`url(#${h})`},null),c&&n(de,null,[n("rect",_(_({},te),{},{x:"0",y:"0",width:"100%",height:c.top}),null),n("rect",_(_({},te),{},{x:"0",y:"0",width:c.left,height:"100%"}),null),n("rect",_(_({},te),{},{x:"0",y:c.top+c.height,width:"100%",height:`calc(100vh - ${c.top+c.height}px)`}),null),n("rect",_(_({},te),{},{x:c.left+c.width,y:"0",width:`calc(100vw - ${c.left+c.width}px)`,height:"100%"}),null)])]):null])})}}}),kt=wt,Ct=[0,0],he={left:{points:["cr","cl"],offset:[-8,0]},right:{points:["cl","cr"],offset:[8,0]},top:{points:["bc","tc"],offset:[0,-8]},bottom:{points:["tc","bc"],offset:[0,8]},topLeft:{points:["bl","tl"],offset:[0,-8]},leftTop:{points:["tr","tl"],offset:[-8,0]},topRight:{points:["br","tr"],offset:[0,-8]},rightTop:{points:["tl","tr"],offset:[8,0]},bottomRight:{points:["tr","br"],offset:[0,8]},rightBottom:{points:["bl","br"],offset:[8,0]},bottomLeft:{points:["tl","bl"],offset:[0,8]},leftBottom:{points:["br","bl"],offset:[-8,0]}};function $e(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const e={};return Object.keys(he).forEach(d=>{e[d]=E(E({},he[d]),{autoArrow:t,targetOffset:Ct})}),e}$e();var $t=function(t,e){var d={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&e.indexOf(l)<0&&(d[l]=t[l]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(t);o<l.length;o++)e.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(t,l[o])&&(d[l[o]]=t[l[o]]);return d};const se={left:"50%",top:"50%",width:"1px",height:"1px"},Se=()=>{const{builtinPlacements:t,popupAlign:e}=it();return{builtinPlacements:t,popupAlign:e,steps:Le(),open:re(),defaultCurrent:{type:Number},current:{type:Number},onChange:A(),onClose:A(),onFinish:A(),mask:L([Boolean,Object],!0),arrow:L([Boolean,Object],!0),rootClassName:{type:String},placement:xe("bottom"),prefixCls:{type:String,default:"rc-tour"},renderPanel:A(),gap:ae(),animated:L([Boolean,Object]),scrollIntoViewOptions:L([Boolean,Object],!0),zIndex:{type:Number,default:1001}}},St=H({name:"Tour",inheritAttrs:!1,props:at(Se(),{}),setup(t){const{defaultCurrent:e,placement:d,mask:l,scrollIntoViewOptions:o,open:v,gap:m,arrow:c}=ue(t),w=N(),[a,i]=fe(0,{value:P(()=>t.current),defaultValue:e.value}),[u,h]=fe(void 0,{value:P(()=>t.open),postState:s=>a.value<0||a.value>=t.steps.length?!1:s??!0}),k=Ye(u.value);we(()=>{u.value&&!k.value&&i(0),k.value=u.value});const g=P(()=>t.steps[a.value]||{}),F=P(()=>{var s;return(s=g.value.placement)!==null&&s!==void 0?s:d.value}),C=P(()=>{var s;return u.value&&((s=g.value.mask)!==null&&s!==void 0?s:l.value)}),B=P(()=>{var s;return(s=g.value.scrollIntoViewOptions)!==null&&s!==void 0?s:o.value}),[$,D]=ft(P(()=>g.value.target),v,m,B),M=P(()=>D.value?typeof g.value.arrow>"u"?c.value:g.value.arrow:!1),V=P(()=>typeof M.value=="object"?M.value.pointAtCenter:!1);oe(V,()=>{var s;(s=w.value)===null||s===void 0||s.forcePopupAlign()}),oe(a,()=>{var s;(s=w.value)===null||s===void 0||s.forcePopupAlign()});const b=s=>{var p;i(s),(p=t.onChange)===null||p===void 0||p.call(t,s)};return()=>{var s;const{prefixCls:p,steps:I,onClose:j,onFinish:U,rootClassName:W,renderPanel:Y,animated:le,zIndex:G}=t,J=$t(t,["prefixCls","steps","onClose","onFinish","rootClassName","renderPanel","animated","zIndex"]);if(D.value===void 0)return null;const Z=()=>{h(!1),j==null||j(a.value)},S=typeof C.value=="boolean"?C.value:!!C.value,z=typeof C.value=="boolean"?void 0:C.value,Pe=()=>D.value||document.body,Ee=()=>n(gt,_({arrow:M.value,key:"content",prefixCls:p,total:I.length,renderPanel:Y,onPrev:()=>{b(a.value-1)},onNext:()=>{b(a.value+1)},onClose:Z,current:a.value,onFinish:()=>{Z(),U==null||U()}},g.value),null),Be=P(()=>{const Q=$.value||se,ne={};return Object.keys(Q).forEach(X=>{typeof Q[X]=="number"?ne[X]=`${Q[X]}px`:ne[X]=Q[X]}),ne});return u.value?n(de,null,[n(kt,{zIndex:G,prefixCls:p,pos:$.value,showMask:S,style:z==null?void 0:z.style,fill:z==null?void 0:z.color,open:u.value,animated:le,rootClassName:W},null),n(rt,_(_({},J),{},{builtinPlacements:g.value.target?(s=J.builtinPlacements)!==null&&s!==void 0?s:$e(V.value):void 0,ref:w,popupStyle:g.value.target?g.value.style:E(E({},g.value.style),{position:"fixed",left:se.left,top:se.top,transform:"translate(-50%, -50%)"}),popupPlacement:F.value,popupVisible:u.value,popupClassName:q(W,g.value.className),prefixCls:p,popup:Ee,forceRender:!1,destroyPopupOnHide:!0,zIndex:G,mask:!1,getTriggerDOMNode:Pe}),{default:()=>[n(Ce,{visible:u.value,autoLock:!0},{default:()=>[n("div",{class:q(W,`${p}-target-placeholder`),style:E(E({},Be.value),{position:"fixed",pointerEvents:"none"})},null)]})]})]):null}}}),Tt=St,Pt=()=>E(E({},Se()),{steps:{type:Array},prefixCls:{type:String},current:{type:Number},type:{type:String},"onUpdate:current":Function}),Et=()=>E(E({},ce()),{cover:{type:Object},nextButtonProps:{type:Object},prevButtonProps:{type:Object},current:{type:Number},type:{type:String}}),Bt=H({name:"ATourPanel",inheritAttrs:!1,props:Et(),setup(t,e){let{attrs:d,slots:l}=e;const{current:o,total:v}=ue(t),m=P(()=>o.value===v.value-1),c=a=>{var i;const u=t.prevButtonProps;(i=t.onPrev)===null||i===void 0||i.call(t,a),typeof(u==null?void 0:u.onClick)=="function"&&(u==null||u.onClick())},w=a=>{var i,u;const h=t.nextButtonProps;m.value?(i=t.onFinish)===null||i===void 0||i.call(t,a):(u=t.onNext)===null||u===void 0||u.call(t,a),typeof(h==null?void 0:h.onClick)=="function"&&(h==null||h.onClick())};return()=>{const{prefixCls:a,title:i,onClose:u,cover:h,description:k,type:g,arrow:F}=t,C=t.prevButtonProps,B=t.nextButtonProps;let $;i&&($=n("div",{class:`${a}-header`},[n("div",{class:`${a}-title`},[i])]));let D;k&&(D=n("div",{class:`${a}-description`},[k]));let M;h&&(M=n("div",{class:`${a}-cover`},[h]));let V;l.indicatorsRender?V=l.indicatorsRender({current:o.value,total:v}):V=[...Array.from({length:v.value}).keys()].map((p,I)=>n("span",{key:p,class:q(I===o.value&&`${a}-indicator-active`,`${a}-indicator`)},null));const b=g==="primary"?"default":"primary",s={type:"default",ghost:g==="primary"};return n(Ae,{componentName:"Tour",defaultLocale:je.Tour},{default:p=>{var I,j;return n("div",_(_({},d),{},{class:q(g==="primary"?`${a}-primary`:"",d.class,`${a}-content`)}),[F&&n("div",{class:`${a}-arrow`,key:"arrow"},null),n("div",{class:`${a}-inner`},[n(Fe,{class:`${a}-close`,onClick:u},null),M,$,D,n("div",{class:`${a}-footer`},[v.value>1&&n("div",{class:`${a}-indicators`},[V]),n("div",{class:`${a}-buttons`},[o.value!==0?n(ie,_(_(_({},s),C),{},{onClick:c,size:"small",class:q(`${a}-prev-btn`,C==null?void 0:C.className)}),{default:()=>[(I=C==null?void 0:C.children)!==null&&I!==void 0?I:p.Previous]}):null,n(ie,_(_({type:b},B),{},{onClick:w,size:"small",class:q(`${a}-next-btn`,B==null?void 0:B.className)}),{default:()=>[(j=B==null?void 0:B.children)!==null&&j!==void 0?j:m.value?p.Finish:p.Next]})])])])])}})}}}),It=Bt,Ot=t=>{let{defaultType:e,steps:d,current:l,defaultCurrent:o}=t;const v=N(o==null?void 0:o.value),m=P(()=>l==null?void 0:l.value);oe(m,i=>{v.value=i??(o==null?void 0:o.value)},{immediate:!0});const c=i=>{v.value=i},w=P(()=>{var i,u;return typeof v.value=="number"?d&&((u=(i=d.value)===null||i===void 0?void 0:i[v.value])===null||u===void 0?void 0:u.type):e==null?void 0:e.value});return{currentMergedType:P(()=>{var i;return(i=w.value)!==null&&i!==void 0?i:e==null?void 0:e.value}),updateInnerCurrent:c}},Dt=t=>{const{componentCls:e,lineHeight:d,padding:l,paddingXS:o,borderRadius:v,borderRadiusXS:m,colorPrimary:c,colorText:w,colorFill:a,indicatorHeight:i,indicatorWidth:u,boxShadowTertiary:h,tourZIndexPopup:k,fontSize:g,colorBgContainer:F,fontWeightStrong:C,marginXS:B,colorTextLightSolid:$,tourBorderRadius:D,colorWhite:M,colorBgTextHover:V,tourCloseSize:b,motionDurationSlow:s,antCls:p}=t;return[{[e]:E(E({},Ue(t)),{color:w,position:"absolute",zIndex:k,display:"block",visibility:"visible",fontSize:g,lineHeight:d,width:520,"--antd-arrow-background-color":F,"&-pure":{maxWidth:"100%",position:"relative"},[`&${e}-hidden`]:{display:"none"},[`${e}-content`]:{position:"relative"},[`${e}-inner`]:{textAlign:"start",textDecoration:"none",borderRadius:D,boxShadow:h,position:"relative",backgroundColor:F,border:"none",backgroundClip:"padding-box",[`${e}-close`]:{position:"absolute",top:l,insetInlineEnd:l,color:t.colorIcon,outline:"none",width:b,height:b,borderRadius:t.borderRadiusSM,transition:`background-color ${t.motionDurationMid}, color ${t.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:t.colorIconHover,backgroundColor:t.wireframe?"transparent":t.colorFillContent}},[`${e}-cover`]:{textAlign:"center",padding:`${l+b+o}px ${l}px 0`,img:{width:"100%"}},[`${e}-header`]:{padding:`${l}px ${l}px ${o}px`,[`${e}-title`]:{lineHeight:d,fontSize:g,fontWeight:C}},[`${e}-description`]:{padding:`0 ${l}px`,lineHeight:d,wordWrap:"break-word"},[`${e}-footer`]:{padding:`${o}px ${l}px ${l}px`,textAlign:"end",borderRadius:`0 0 ${m}px ${m}px`,display:"flex",[`${e}-indicators`]:{display:"inline-block",[`${e}-indicator`]:{width:u,height:i,display:"inline-block",borderRadius:"50%",background:a,"&:not(:last-child)":{marginInlineEnd:i},"&-active":{background:c}}},[`${e}-buttons`]:{marginInlineStart:"auto",[`${p}-btn`]:{marginInlineStart:B}}}},[`${e}-primary, &${e}-primary`]:{"--antd-arrow-background-color":c,[`${e}-inner`]:{color:$,textAlign:"start",textDecoration:"none",backgroundColor:c,borderRadius:v,boxShadow:h,[`${e}-close`]:{color:$},[`${e}-indicators`]:{[`${e}-indicator`]:{background:new ee($).setAlpha(.15).toRgbString(),"&-active":{background:$}}},[`${e}-prev-btn`]:{color:$,borderColor:new ee($).setAlpha(.15).toRgbString(),backgroundColor:c,"&:hover":{backgroundColor:new ee($).setAlpha(.15).toRgbString(),borderColor:"transparent"}},[`${e}-next-btn`]:{color:c,borderColor:"transparent",background:M,"&:hover":{background:new ee(V).onBackground(M).toRgbString()}}}}}),[`${e}-mask`]:{[`${e}-placeholder-animated`]:{transition:`all ${s}`}},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${e}-inner`]:{borderRadius:Math.min(D,dt)}}},ut(t,{colorBg:"var(--antd-arrow-background-color)",contentRadius:D,limitVerticalRadius:!0})]},Rt=qe("Tour",t=>{const{borderRadiusLG:e,fontSize:d,lineHeight:l}=t,o=He(t,{tourZIndexPopup:t.zIndexPopupBase+70,indicatorWidth:6,indicatorHeight:6,tourBorderRadius:e,tourCloseSize:d*l});return[Dt(o)]});var Mt=function(t,e){var d={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&e.indexOf(l)<0&&(d[l]=t[l]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(t);o<l.length;o++)e.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(t,l[o])&&(d[l[o]]=t[l[o]]);return d};const Vt=H({name:"ATour",inheritAttrs:!1,props:Pt(),setup(t,e){let{attrs:d,emit:l,slots:o}=e;const{current:v,type:m,steps:c,defaultCurrent:w}=ue(t),{prefixCls:a,direction:i}=We("tour",t),[u,h]=Rt(a),{currentMergedType:k,updateInnerCurrent:g}=Ot({defaultType:m,steps:c,current:v,defaultCurrent:w});return()=>{const{steps:F,current:C,type:B,rootClassName:$}=t,D=Mt(t,["steps","current","type","rootClassName"]),M=q({[`${a.value}-primary`]:k.value==="primary",[`${a.value}-rtl`]:i.value==="rtl"},h.value,$),V=(p,I)=>n(It,_(_({},p),{},{type:B,current:I}),{indicatorsRender:o.indicatorsRender}),b=p=>{g(p),l("update:current",p),l("change",p)},s=P(()=>ct({arrowPointAtCenter:!0,autoAdjustOverflow:!0}));return u(n(Tt,_(_(_({},d),D),{},{rootClassName:M,prefixCls:a.value,current:C,defaultCurrent:t.defaultCurrent,animated:!0,renderPanel:V,onChange:b,steps:F,builtinPlacements:s.value}),null))}}}),Nt=ze(Vt),Lt={class:"editor"},Ft={class:"ql-formats h-[52px] !flex items-center my-auto"},jt={class:"ql-bold"},At={class:"ql-italic"},qt={class:"ql-strike"},Ht={class:"ql-underline"},Ut={class:"ql-align",value:""},zt={class:"ql-align",value:"center"},Wt={class:"ql-align",value:"right"},Zt={class:"ql-code"},Xt={id:"ql-ol",class:"ql-list",value:"ordered"},Kt={id:"ql-ul",class:"ql-list",value:"bullet"},Yt={class:"ql-blockquote"},Gt={class:"ql-code-block"},Jt={class:"ql-link"},Qt={__name:"Editor",setup(t){const e=ye();return e.store.editor=N("Content"),(d,l)=>{const o=Ge("tooltip");return x(),y("div",Lt,[n(f(Ve),{modelValue:f(e).store.editor,"onUpdate:modelValue":l[0]||(l[0]=v=>f(e).store.editor=v),editorStyle:"height: 320px"},{toolbar:R(()=>[r("div",Ft,[O(r("button",jt,null,512),[[o,"Bold",void 0,{bottom:!0}]]),O(r("button",At,null,512),[[o,"Italic",void 0,{bottom:!0}]]),O(r("button",qt,null,512),[[o,"Strikethrough",void 0,{bottom:!0}]]),O(r("button",Ht,null,512),[[o,"Underline",void 0,{bottom:!0}]]),O(r("button",Ut,null,512),[[o,"Left",void 0,{bottom:!0}]]),O(r("button",zt,null,512),[[o,"Center",void 0,{bottom:!0}]]),O(r("button",Wt,null,512),[[o,"Right",void 0,{bottom:!0}]]),O(r("button",Zt,null,512),[[o,"Code",void 0,{bottom:!0}]]),O((x(),y("button",Xt,[T("OL")])),[[o,"Ordered List",void 0,{bottom:!0}]]),O((x(),y("button",Kt,[T("UL")])),[[o,"Unordered List",void 0,{bottom:!0}]]),O((x(),y("button",Yt,[T("Blockquote")])),[[o,"Blockquote",void 0,{bottom:!0}]]),O(r("button",Gt,null,512),[[o,"Code Block",void 0,{bottom:!0}]]),O((x(),y("button",Jt,[T("Link")])),[[o,"Insert Link",void 0,{bottom:!0}]])])]),_:1},8,["modelValue"])])}}},eo=Qt,Te="data:image/svg+xml,%3csvg%20width='41'%20height='40'%20viewBox='0%200%2041%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.4987%2026.667H18.832V21.667H23.832V18.3337H18.832V13.3337H15.4987V18.3337H10.4987V21.667H15.4987V26.667ZM7.16536%2033.3337C6.2487%2033.3337%205.46425%2033.0075%204.81203%2032.3553C4.15981%2031.7031%203.83314%2030.9181%203.83203%2030.0003V10.0003C3.83203%209.08366%204.1587%208.29921%204.81203%207.64699C5.46536%206.99477%206.24981%206.6681%207.16536%206.66699H27.1654C28.082%206.66699%2028.867%206.99366%2029.5204%207.64699C30.1737%208.30033%2030.4998%209.08477%2030.4987%2010.0003V17.5003L37.1654%2010.8337V29.167L30.4987%2022.5003V30.0003C30.4987%2030.917%2030.1726%2031.702%2029.5204%2032.3553C28.8681%2033.0087%2028.0831%2033.3348%2027.1654%2033.3337H7.16536ZM7.16536%2030.0003H27.1654V10.0003H7.16536V30.0003Z'%20fill='%23000000'/%3e%3c/svg%3e",to="data:image/svg+xml,%3csvg%20width='93'%20height='65'%20viewBox='0%200%2093%2065'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M90.8608%2010.1505C89.7915%206.153%2086.6515%203.01152%2082.6562%201.94144C75.4221%205.81145e-07%2046.4005%200%2046.4005%200C46.4005%200%2017.3792%205.81145e-07%2010.1449%201.94144C6.14958%203.01152%203.00985%206.153%201.94036%2010.1505C5.80823e-07%2017.3889%200%2032.5%200%2032.5C0%2032.5%205.80823e-07%2047.6112%201.94036%2054.8496C3.00985%2058.8471%206.14958%2061.9885%2010.1449%2063.0584C17.3792%2065%2046.4005%2065%2046.4005%2065C46.4005%2065%2075.4221%2065%2082.6562%2063.0584C86.6515%2061.9885%2089.7915%2058.8471%2090.8608%2054.8496C92.8013%2047.6112%2092.8013%2032.5%2092.8013%2032.5C92.8013%2032.5%2092.7935%2017.3889%2090.8608%2010.1505Z'%20fill='%23FF0000'/%3e%3cpath%20d='M37.1116%2046.4276L61.221%2032.5013L37.1116%2018.5748V46.4276Z'%20fill='white'/%3e%3c/svg%3e",oo="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.4689%2041.2502C11.8933%2041.2491%2011.3279%2041.0982%2010.8283%2040.8124C9.70328%2040.1749%209.00391%2038.9374%209.00391%2037.5939V10.4064C9.00391%209.05923%209.70328%207.82548%2010.8283%207.18798C11.3398%206.89401%2011.9209%206.74284%2012.5108%206.75026C13.1007%206.75768%2013.6778%206.92343%2014.1817%207.23017L37.4177%2021.1389C37.9019%2021.4426%2038.3011%2021.8642%2038.5778%2022.3644C38.8546%2022.8645%2038.9997%2023.4267%2038.9997%2023.9983C38.9997%2024.5699%2038.8546%2025.1321%2038.5778%2025.6322C38.3011%2026.1324%2037.9019%2026.554%2037.4177%2026.8577L14.178%2040.7702C13.6622%2041.082%2013.0715%2041.2479%2012.4689%2041.2502Z'%20fill='white'%20/%3e%3c/svg%3e",lo={class:"flex gap-6 bg-[#F6F6F6]"},no={class:"w-full rounded-md subject_shadow bg-white overflow-hidden"},so=r("h1",{class:"border-b border-[#EDEDED] py-[30px] px-5 text-xl font-semibold leading-[30px]"}," Mavzuni yaratishni boshlang: ",-1),ro={class:"flex items-center flex-col min-h-[calc(100vh_-_250.5px)] pb-10 max-h-[calc(100vh_-_250.5px)] overflow-hidden overflow-y-auto px-5"},io={key:0,class:"w-full"},ao=["src"],uo={key:1,class:"xl:h-[312px] md:h-[270px] sm:h-[250px] h-[172px] w-full sm:rounded-lg max-h-[312px] rounded-lg relative overflow-hidden bg-black",controls:""},co=["src"],po=["src"],fo={key:1,class:"full_flex flex-col cursor-pointer border-dashed border bg-[#F2F2F2] w-full my-5 min-h-[312px] rounded-lg"},vo=r("img",{src:Te,alt:""},null,-1),mo=r("p",{class:"font-medium"},"Add video",-1),ho=[vo,mo],_o={class:"py-6 px-5 w-full"},go={key:0,class:"xl:h-[312px] md:h-[270px] sm:h-[250px] h-[172px] sm:rounded-lg max-h-[312px] rounded-lg relative overflow-hidden bg-black"},bo=["src"],xo=["innerHTML"],yo={class:"full_flex my-auto gap-10"},wo=r("div",{class:"full_flex h-20 w-20 bg-[#FFF3EB] rounded-full"},[r("img",{src:_e,alt:""})],-1),ko=r("p",{class:"font-medium mt-4 text-md _c24"},"Video",-1),Co=r("div",{class:"full_flex h-20 w-20 bg-[#FFF3EB] rounded-full"},[r("img",{src:ge,alt:""})],-1),$o=r("p",{class:"font-medium mt-4 text-md _c24"},"Tekst",-1),So=r("div",{class:"full_flex h-20 w-20 bg-[#FFF3EB] rounded-full"},[r("img",{src:be,alt:""})],-1),To=r("p",{class:"font-medium mt-4 text-md _c24"},"Rasm",-1),Po={class:"min-w-[292px] bg-white rounded-md subject_shadow overflow-hidden"},Eo=r("h1",{class:"border-b border-[#EDEDED] py-[30px] px-5 font-semibold leading-[30px]"}," Kontent qo'shing ",-1),Bo={class:"max-h-[calc(100vh_-_250.5px)] overflow-hidden overflow-y-auto pb-8"},Io=ot('<div class="grid grid-cols-2"><div class="full_flex flex-col border-r border-b border-[#EDEDED] space-y-2 h-[120px]"><img class="mx-auto" src="'+_e+'" alt=""><p>Video</p></div><div class="full_flex flex-col border-b border-[#EDEDED] space-y-2 h-[120px]"><img class="mx-auto" src="'+ge+'" alt=""><p>Tekst</p></div><div class="full_flex flex-col border-r border-b border-[#EDEDED] space-y-2 h-[120px]"><img class="mx-auto" src="'+be+'" alt=""><p>Rasm</p></div><div class="full_flex flex-col border-b border-[#EDEDED] space-y-2 h-[120px]"><img class="mx-auto" src="'+Ie+'" alt=""><p>Sozlamalalar</p></div></div><div class="border-b border-[#EDEDED] px-5"><p class="pt-5">Resurslarni biriktiring</p><button class="full_flex mt-6 mb-8 gap-4 h-[44px] border border-[#EDEDED] rounded-full w-full"><img src="'+Oe+'" alt=""> Fayl biriktirish </button></div>',2),Oo={class:"space-y-5 mt-6 px-5"},Do={class:"relative"},Ro={class:"space-y-3"},Mo={class:"font-semibold text-2xl"},Vo={key:0},No={key:1},Lo={key:2},Fo={key:0,class:"full_flex gap-5"},jo=r("div",{class:"full_flex h-20 w-20 bg-[#FFF3EB] rounded-full"},[r("img",{class:"h-8 w-10",src:Te,alt:""})],-1),Ao=r("p",{class:"font-medium mt-4 text-md _c24"},"Fayl",-1),qo=r("div",{class:"full_flex h-20 w-20 bg-[#FFF3EB] rounded-full"},[r("img",{class:"h-6 w-8",src:to,alt:""})],-1),Ho=r("p",{class:"font-medium mt-4 text-md _c24"},"Youtube",-1),Uo={key:1},zo={key:0},Wo={key:0,class:"max-h-[312px] rounded-lg relative overflow-hidden bg-black"},Zo=r("img",{src:oo,alt:""},null,-1),Xo=[Zo],Ko={key:1,for:"upload_file",class:"rounded-lg border block border-dashed border-[#EDEDED] h-[250px] full_flex flex-col gap-10 mt-3"},Yo={class:"full_flex rounded-full !h-10 px-7 bg_orange font-semibold white"},Go=r("p",{class:"w-[220px] text-center leading-6"}," Minimal o'lcham - 808 x 632 piksel. GIF tasvirlari jonlantirilmaydi. ",-1),Jo={key:1},Qo=r("label",{for:"youtube_link"},"Youtube linkini kiriting",-1),el={key:2},tl={key:0,class:"max-h-[312px] rounded-lg relative overflow-hidden"},ol=["src"],ll={key:1,for:"upload_file",class:"rounded-lg border block border-dashed border-[#EDEDED] h-[290px] full_flex flex-col gap-10 mt-3"},nl={class:"full_flex rounded-full !h-10 px-7 bg_orange font-semibold white"},sl=r("p",{class:"w-[220px] text-center leading-6"}," Minimal o'lcham - 808 x 632 piksel. GIF tasvirlari jonlantirilmaydi. ",-1),rl={key:3},il={class:"text-end"},yl=H({__name:"CreateLesson",setup(t){const e=Ze(),d=Xe(),l=ye(),o=Je({uploadModal:!1,modalType:"video",uploadedVideo:"",uploadedImage:"",replace:!1,is_playing:!1,videoType:"",videoUploadStep:1,activeTab:0}),v=N(!1),m=N(null),c=N(null),w=N(null),a=N(null),i=N(null),u=N(0),h=[{title:"Video darslik",description:"Bu yerda video darslik yuklashingiz mumkin.",cover:n("img",{alt:"tour.png",src:"https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"}),target:()=>m.value&&m.value.$el},{title:"Tekst yuklash",description:"Bu yerda tekst yuklashingiz mumkin.",target:()=>c.value&&c.value.$el},{title:"Rasm yuklash",description:"Bu yerda rasm yuklashingiz mumkin.",target:()=>w.value&&w.value.$el},{title:"Darslikni ko'rib chiqish",description:"Ma'lumotlarni yuklashdan avval ko'rib chiqish tavsiya qilinadi",target:()=>a.value&&a.value.$el},{title:"Yakunlash",description:"Ushbu tugmani bosish orqali siz darslikni o'quvchilar uchun taqdim qilishingiz mumkin",target:()=>i.value&&i.value.$el}],k=b=>{v.value=b};function g(b){e.file.file_type=b,e.store.uploadModal=!0}function F(){var s;const b=document.querySelector(".vjs-tech");b.currentTime=0,(s=document.querySelector(".vjs-big-play-button"))==null||s.click(),o.is_playing=!0}function C(b){o.videoType=b,o.videoUploadStep=2}function B(b){var p;return`https://www.youtube.com/embed/${((p=b.split("v=")[1])==null?void 0:p.split("&")[0])||b.split("/").pop()}`}function $(){o.videoType=="youtube"&&(e.store.video.url=B(e.file.file)),e.create.content==null&&(e.create.content=""),console.log(e.create.content),o.replace?e.create.content=l.store.editor:e.file.file_type=="image"?e.create.content+=`<img class="max-h-[400px] mx-auto" src="${e.store.previewImageUrl}" alt="">`:e.create.content+=`<div>${l.store.editor}</div>`,e.store.uploadModal=!1,o.replace=!1,l.store.editor=""}function D(b,s){if(s=="youtube"){e.file.file_type="youtube",e.file.is_active=!0,e.uploadVideo();return}const p=b.target.files[0],I=URL.createObjectURL(p);e.file.file_type=="video"?(e.file.file=p,e.file.is_active=!0,e.store.video.file=p,e.store.video.url=I):e.create.content+=`<img class="max-h-[400px] mx-auto" src="${I}" alt="">`,document.getElementById("upload_file").value=""}function M(){e.store.video.url&&e.uploadContent()}function V(){var s;const b=((s=document.getElementById("content_data"))==null?void 0:s.innerHTML)||"";l.store.editor=b,e.file.file_type=="tekst",e.store.uploadModal=!0,o.replace=!0}return Qe(()=>{d.getLessonById()}),ke(()=>{k(!0)}),(b,s)=>{var Z;const p=ie,I=De,j=Re,U=lt,W=nt,Y=Me,le=eo,G=st,J=Nt;return x(),y("main",lo,[r("section",no,[so,r("div",ro,[f(e).store.video.url?(x(),y("div",io,[(Z=f(e).store.video.url)!=null&&Z.includes("youtu")?(x(),y("iframe",{key:0,src:f(e).store.video.url,class:"xl:h-[312px] md:h-[270px] sm:h-[250px] h-[172px] w-full sm:rounded-lg max-h-[312px] rounded-lg relative overflow-hidden bg-black",allowfullscreen:""},null,8,ao)):(x(),y("video",uo,[r("source",{src:f(e).store.video.url,type:"video/mp4"},null,8,co),r("source",{src:f(e).store.video.url,type:"video/ogg"},null,8,po),T(" Your browser does not support the video tag. ")]))])):(x(),y("div",fo,ho)),r("div",_o,[f(e).store.video_id?(x(),y("div",go,[r("iframe",{src:f(e).store.video_id,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:"",class:"w-full h-full"},null,8,bo)])):K("",!0),r("div",{innerHTML:f(e).create.content,onClick:V,id:"content_data",class:"my-6 space-y-6 w-[55%] mx-auto text-lg"},null,8,xo)]),r("div",yo,[n(p,{ref_key:"ref1",ref:m,onClick:s[0]||(s[0]=S=>g("video")),class:"text-center w-20 h-[120px] !p-0 border-0 shadow-none"},{default:R(()=>[wo,ko]),_:1},512),n(p,{ref_key:"ref2",ref:c,onClick:s[1]||(s[1]=S=>g("tekst")),class:"text-center w-20 h-[120px] !p-0 border-0 shadow-none"},{default:R(()=>[Co,$o]),_:1},512),n(p,{ref_key:"ref3",ref:w,onClick:s[2]||(s[2]=S=>g("image")),class:"text-center w-20 h-[120px] !p-0 border-0 shadow-none"},{default:R(()=>[So,To]),_:1},512)]),r("input",{onChange:s[3]||(s[3]=S=>D(S,"")),class:"input_file",type:"file",accept:"video/*",id:"upload_file"},null,32)])]),r("section",Po,[Eo,r("div",Bo,[Io,r("div",Oo,[r("div",Do,[n(p,{ref_key:"ref5",ref:i,onClick:M,class:"bg_orange font-semibold white w-full !px-6 h-12 !py-0 !rounded-full"},{default:R(()=>[T(" Davom etish ")]),_:1},512),f(l).isLoadingType("uploadVideoLesson")?(x(),pe(I,{key:0,class:"full_flex"})):K("",!0)]),n(j,{class:"b_c40 font-semibold white w-full !px-6"},{default:R(()=>[T(" Qoralamaga qo‘shish ")]),_:1})]),n(p,{ref_key:"ref4",ref:a,class:"_c55 mt-8 border-b max-w-fit mx-auto cursor-pointer border-[#555555] border-0 r_0 !p-0 block"},{default:R(()=>[T("Oldindan ko‘rish")]),_:1},512)])]),n(G,{class:"min-w-[720px]",open:f(e).store.uploadModal,"onUpdate:open":s[8]||(s[8]=S=>f(e).store.uploadModal=S),centered:""},{default:R(()=>[r("div",Ro,[r("h1",Mo,[f(e).file.file_type=="video"?(x(),y("span",Vo,"Video darslik (majburiy)")):f(e).file.file_type=="image"?(x(),y("span",No,"Rasm yuklash")):(x(),y("span",Lo,"Tekst"))]),n(W,{class:"max-w-fit mx-auto",activeKey:f(o).videoType,"onUpdate:activeKey":s[4]||(s[4]=S=>f(o).videoType=S)},{default:R(()=>[n(U,{key:"file"},{tab:R(()=>[T("Fayl")]),_:1}),n(U,{key:"youtube"},{tab:R(()=>[T("Youtube")]),_:1})]),_:1},8,["activeKey"]),f(o).videoUploadStep==1?(x(),y("div",Fo,[n(p,{ref_key:"ref1",ref:m,onClick:s[5]||(s[5]=S=>C("file")),class:"text-center w-20 h-[120px] !p-0 border-0 shadow-none"},{default:R(()=>[jo,Ao]),_:1},512),n(p,{ref_key:"ref1",ref:m,onClick:s[6]||(s[6]=S=>C("youtube")),class:"text-center w-20 h-[120px] !p-0 border-0 shadow-none"},{default:R(()=>[qo,Ho]),_:1},512)])):K("",!0),(f(e).file.file_type=="video"||f(e).file.file_type=="youtube")&&f(o).videoUploadStep==2?(x(),y("div",Uo,[f(o).videoType=="file"?(x(),y("div",zo,[f(e).store.video_id?(x(),y("div",Wo,[O(r("div",{onClick:F,class:"full_flex cursor-pointer absolute top-0 left-0 w-full h-[312px] bg-[#242424B2] z-10"},Xo,512),[[et,!f(o).is_playing]])])):(x(),y("label",Ko,[r("p",Yo,[T(" Video yuklash "),n(Y)]),Go]))])):(x(),y("div",Jo,[Qo,O(r("input",{id:"youtube_link",type:"text","onUpdate:modelValue":s[7]||(s[7]=S=>f(e).file.file=S)},null,512),[[tt,f(e).file.file]])]))])):f(e).file.file_type=="image"?(x(),y("div",el,[f(e).store.previewImageUrl?(x(),y("div",tl,[r("img",{class:"max-h-[312px] mx-auto",src:f(e).store.previewImageUrl,alt:""},null,8,ol)])):(x(),y("label",ll,[r("p",nl,[T(" Rasm yuklash "),n(Y)]),sl]))])):f(e).file.file_type=="tekst"?(x(),y("div",rl,[n(le)])):K("",!0),r("div",il,[n(j,{onClick:$,type:"button",class:"bg_orange !mt-[30px] px-[60px] font-semibold white"},{default:R(()=>[T(" Davom etish ")]),_:1})])]),f(l).isLoadingType("uploading")?(x(),pe(I,{key:0,class:"full_flex rounded-lg"})):K("",!0)]),_:1},8,["open"]),n(J,{current:u.value,"onUpdate:current":s[9]||(s[9]=S=>u.value=S),open:v.value,steps:h,onClose:s[10]||(s[10]=S=>k(!1))},null,8,["current","open"])])}}}),wl="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%2012V20C4%2020.5304%204.21071%2021.0391%204.58579%2021.4142C4.96086%2021.7893%205.46957%2022%206%2022H18C18.5304%2022%2019.0391%2021.7893%2019.4142%2021.4142C19.7893%2021.0391%2020%2020.5304%2020%2020V12'%20stroke='black'%20stroke-width='1.7'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M16%206L12%202L8%206'%20stroke='black'%20stroke-width='1.7'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M12%202V15'%20stroke='black'%20stroke-width='1.7'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e";export{wl as _,yl as a,oo as b};
