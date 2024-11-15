import{R as Bo,ae as No,af as eo,x as no,q as Lo,P as Oo,v as vo,ay as fo,m as r,S as lo,a9 as Ao,az as _o,Y as Eo,y as Mo,t as _}from"./DOrSSs2S.js";import{u as I,w as bo,h as Go,d as To,e as jo}from"./BkJZ7M5a.js";import{N as wo,D as g,d as D,b as P,H as ao,A as io,E as Io,f as H,w as Ho,n as zo,a as Vo,r as Fo,z as Uo,I as Xo,T as qo}from"./Dg7Bj1Dn.js";import{g as Yo,c as Jo,u as Ko}from"./DQuh_HN2.js";const Qo=o=>{const{componentCls:e,colorPrimary:t}=o;return{[e]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${t})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${o.motionEaseOutCirc}`,`opacity 2s ${o.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0}}}}},Zo=Bo("Wave",o=>[Qo(o)]);function ko(o){const e=(o||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return e&&e[1]&&e[2]&&e[3]?!(e[1]===e[2]&&e[2]===e[3]):!0}function k(o){return o&&o!=="#fff"&&o!=="#ffffff"&&o!=="rgb(255, 255, 255)"&&o!=="rgba(255, 255, 255, 1)"&&ko(o)&&!/rgba\((?:\d*, ){3}0\)/.test(o)&&o!=="transparent"}function oe(o){const{borderTopColor:e,borderColor:t,backgroundColor:l}=getComputedStyle(o);return k(e)?e:k(t)?t:k(l)?l:null}function oo(o){return Number.isNaN(o)?0:o}const ee=D({props:{target:No(),className:String},setup(o){const e=P(null),[t,l]=I(null),[a,c]=I([]),[p,d]=I(0),[u,x]=I(0),[i,y]=I(0),[B,F]=I(0),[z,T]=I(!1);function w(){const{target:s}=o,m=getComputedStyle(s);l(oe(s));const R=m.position==="static",{borderLeftWidth:X,borderTopWidth:q}=m;d(R?s.offsetLeft:oo(-parseFloat(X))),x(R?s.offsetTop:oo(-parseFloat(q))),y(s.offsetWidth),F(s.offsetHeight);const{borderTopLeftRadius:Y,borderTopRightRadius:uo,borderBottomLeftRadius:po,borderBottomRightRadius:n}=m;c([Y,uo,n,po].map(v=>oo(parseFloat(v))))}let $,b,E;const W=()=>{clearTimeout(E),bo.cancel(b),$==null||$.disconnect()},N=()=>{var s;const m=(s=e.value)===null||s===void 0?void 0:s.parentElement;m&&(wo(null,m),m.parentElement&&m.parentElement.removeChild(m))};ao(()=>{W(),E=setTimeout(()=>{N()},5e3);const{target:s}=o;s&&(b=bo(()=>{w(),T(!0)}),typeof ResizeObserver<"u"&&($=new ResizeObserver(w),$.observe(s)))}),io(()=>{W()});const U=s=>{s.propertyName==="opacity"&&N()};return()=>{if(!z.value)return null;const s={left:`${p.value}px`,top:`${u.value}px`,width:`${i.value}px`,height:`${B.value}px`,borderRadius:a.value.map(m=>`${m}px`).join(" ")};return t&&(s["--wave-color"]=t.value),g(Io,{appear:!0,name:"wave-motion",appearFromClass:"wave-motion-appear",appearActiveClass:"wave-motion-appear",appearToClass:"wave-motion-appear wave-motion-appear-active"},{default:()=>[g("div",{ref:e,class:o.className,style:s,onTransitionend:U},null)]})}}});function te(o,e){const t=document.createElement("div");t.style.position="absolute",t.style.left="0px",t.style.top="0px",o==null||o.insertBefore(t,o==null?void 0:o.firstChild),wo(g(ee,{target:o,className:e},null),t)}function re(o,e,t){function l(){var a;const c=eo(o);!((a=t==null?void 0:t.value)===null||a===void 0)&&a.disabled||!c||te(c,e.value)}return l}const ne=D({compatConfig:{MODE:3},name:"Wave",props:{disabled:Boolean},setup(o,e){let{slots:t}=e;const l=Vo(),{prefixCls:a,wave:c}=no("wave",o),[,p]=Zo(a),d=re(l,H(()=>Lo(a.value,p.value)),c);let u;const x=()=>{eo(l).removeEventListener("click",u,!0)};return ao(()=>{Ho(()=>o.disabled,()=>{x(),zo(()=>{const i=eo(l);i==null||i.removeEventListener("click",u,!0),!(!i||i.nodeType!==1||o.disabled)&&(u=y=>{y.target.tagName==="INPUT"||!Go(y.target)||!i.getAttribute||i.getAttribute("disabled")||i.disabled||i.className.includes("disabled")||i.className.includes("-leave")||d()},i.addEventListener("click",u,!0))})},{immediate:!0,flush:"post"})}),io(()=>{x()}),()=>{var i;return(i=t.default)===null||i===void 0?void 0:i.call(t)[0]}}});function We(o){return o==="danger"?{danger:!0}:{type:o}}const le=()=>({prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:()=>!1},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:Oo.any,href:String,target:String,title:String,onClick:vo(),onMousedown:vo()}),ho=o=>{o&&(o.style.width="0px",o.style.opacity="0",o.style.transform="scale(0)")},yo=o=>{zo(()=>{o&&(o.style.width=`${o.scrollWidth}px`,o.style.opacity="1",o.style.transform="scale(1)")})},$o=o=>{o&&o.style&&(o.style.width=null,o.style.opacity=null,o.style.transform=null)},ae=D({compatConfig:{MODE:3},name:"LoadingIcon",props:{prefixCls:String,loading:[Boolean,Object],existIcon:Boolean},setup(o){return()=>{const{existIcon:e,prefixCls:t,loading:l}=o;if(e)return g("span",{class:`${t}-loading-icon`},[g(fo,null,null)]);const a=!!l;return g(Io,{name:`${t}-loading-icon-motion`,onBeforeEnter:ho,onEnter:yo,onAfterEnter:$o,onBeforeLeave:yo,onLeave:c=>{setTimeout(()=>{ho(c)})},onAfterLeave:$o},{default:()=>[a?g("span",{class:`${t}-loading-icon`},[g(fo,null,null)]):null]})}}}),Co=(o,e)=>({[`> span, > ${o}`]:{"&:not(:last-child)":{[`&, & > ${o}`]:{"&:not(:disabled)":{borderInlineEndColor:e}}},"&:not(:first-child)":{[`&, & > ${o}`]:{"&:not(:disabled)":{borderInlineStartColor:e}}}}}),ie=o=>{const{componentCls:e,fontSize:t,lineWidth:l,colorPrimaryHover:a,colorErrorHover:c}=o;return{[`${e}-group`]:[{position:"relative",display:"inline-flex",[`> span, > ${e}`]:{"&:not(:last-child)":{[`&, & > ${e}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},"&:not(:first-child)":{marginInlineStart:-l,[`&, & > ${e}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}},[e]:{position:"relative",zIndex:1,"&:hover,\n          &:focus,\n          &:active":{zIndex:2},"&[disabled]":{zIndex:0}},[`${e}-icon-only`]:{fontSize:t}},Co(`${e}-primary`,a),Co(`${e}-danger`,c)]}},se=ie;function ce(o,e){return{[`&-item:not(${e}-last-item)`]:{marginBottom:-o.lineWidth},"&-item":{"&:hover,&:focus,&:active":{zIndex:2},"&[disabled]":{zIndex:0}}}}function de(o,e){return{[`&-item:not(${e}-first-item):not(${e}-last-item)`]:{borderRadius:0},[`&-item${e}-first-item:not(${e}-last-item)`]:{[`&, &${o}-sm, &${o}-lg`]:{borderEndEndRadius:0,borderEndStartRadius:0}},[`&-item${e}-last-item:not(${e}-first-item)`]:{[`&, &${o}-sm, &${o}-lg`]:{borderStartStartRadius:0,borderStartEndRadius:0}}}}function ue(o){const e=`${o.componentCls}-compact-vertical`;return{[e]:r(r({},ce(o,e)),de(o.componentCls,e))}}const pe=o=>{const{componentCls:e,iconCls:t}=o;return{[e]:{outline:"none",position:"relative",display:"inline-block",fontWeight:400,whiteSpace:"nowrap",textAlign:"center",backgroundImage:"none",backgroundColor:"transparent",border:`${o.lineWidth}px ${o.lineType} transparent`,cursor:"pointer",transition:`all ${o.motionDurationMid} ${o.motionEaseInOut}`,userSelect:"none",touchAction:"manipulation",lineHeight:o.lineHeight,color:o.colorText,"> span":{display:"inline-block"},[`> ${t} + span, > span + ${t}`]:{marginInlineStart:o.marginXS},"> a":{color:"currentColor"},"&:not(:disabled)":r({},Ao(o)),[`&-icon-only${e}-compact-item`]:{flex:"none"},[`&-compact-item${e}-primary`]:{[`&:not([disabled]) + ${e}-compact-item${e}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:-o.lineWidth,insetInlineStart:-o.lineWidth,display:"inline-block",width:o.lineWidth,height:`calc(100% + ${o.lineWidth*2}px)`,backgroundColor:o.colorPrimaryHover,content:'""'}}},"&-compact-vertical-item":{[`&${e}-primary`]:{[`&:not([disabled]) + ${e}-compact-vertical-item${e}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:-o.lineWidth,insetInlineStart:-o.lineWidth,display:"inline-block",width:`calc(100% + ${o.lineWidth*2}px)`,height:o.lineWidth,backgroundColor:o.colorPrimaryHover,content:'""'}}}}}}},S=(o,e)=>({"&:not(:disabled)":{"&:hover":o,"&:active":e}}),ge=o=>({minWidth:o.controlHeight,paddingInlineStart:0,paddingInlineEnd:0,borderRadius:"50%"}),me=o=>({borderRadius:o.controlHeight,paddingInlineStart:o.controlHeight/2,paddingInlineEnd:o.controlHeight/2}),to=o=>({cursor:"not-allowed",borderColor:o.colorBorder,color:o.colorTextDisabled,backgroundColor:o.colorBgContainerDisabled,boxShadow:"none"}),j=(o,e,t,l,a,c,p)=>({[`&${o}-background-ghost`]:r(r({color:e||void 0,backgroundColor:"transparent",borderColor:t||void 0,boxShadow:"none"},S(r({backgroundColor:"transparent"},c),r({backgroundColor:"transparent"},p))),{"&:disabled":{cursor:"not-allowed",color:l||void 0,borderColor:a||void 0}})}),so=o=>({"&:disabled":r({},to(o))}),Wo=o=>r({},so(o)),V=o=>({"&:disabled":{cursor:"not-allowed",color:o.colorTextDisabled}}),Ro=o=>r(r(r(r(r({},Wo(o)),{backgroundColor:o.colorBgContainer,borderColor:o.colorBorder,boxShadow:`0 ${o.controlOutlineWidth}px 0 ${o.controlTmpOutline}`}),S({color:o.colorPrimaryHover,borderColor:o.colorPrimaryHover},{color:o.colorPrimaryActive,borderColor:o.colorPrimaryActive})),j(o.componentCls,o.colorBgContainer,o.colorBgContainer,o.colorTextDisabled,o.colorBorder)),{[`&${o.componentCls}-dangerous`]:r(r(r({color:o.colorError,borderColor:o.colorError},S({color:o.colorErrorHover,borderColor:o.colorErrorBorderHover},{color:o.colorErrorActive,borderColor:o.colorErrorActive})),j(o.componentCls,o.colorError,o.colorError,o.colorTextDisabled,o.colorBorder)),so(o))}),ve=o=>r(r(r(r(r({},Wo(o)),{color:o.colorTextLightSolid,backgroundColor:o.colorPrimary,boxShadow:`0 ${o.controlOutlineWidth}px 0 ${o.controlOutline}`}),S({color:o.colorTextLightSolid,backgroundColor:o.colorPrimaryHover},{color:o.colorTextLightSolid,backgroundColor:o.colorPrimaryActive})),j(o.componentCls,o.colorPrimary,o.colorPrimary,o.colorTextDisabled,o.colorBorder,{color:o.colorPrimaryHover,borderColor:o.colorPrimaryHover},{color:o.colorPrimaryActive,borderColor:o.colorPrimaryActive})),{[`&${o.componentCls}-dangerous`]:r(r(r({backgroundColor:o.colorError,boxShadow:`0 ${o.controlOutlineWidth}px 0 ${o.colorErrorOutline}`},S({backgroundColor:o.colorErrorHover},{backgroundColor:o.colorErrorActive})),j(o.componentCls,o.colorError,o.colorError,o.colorTextDisabled,o.colorBorder,{color:o.colorErrorHover,borderColor:o.colorErrorHover},{color:o.colorErrorActive,borderColor:o.colorErrorActive})),so(o))}),fe=o=>r(r({},Ro(o)),{borderStyle:"dashed"}),be=o=>r(r(r({color:o.colorLink},S({color:o.colorLinkHover},{color:o.colorLinkActive})),V(o)),{[`&${o.componentCls}-dangerous`]:r(r({color:o.colorError},S({color:o.colorErrorHover},{color:o.colorErrorActive})),V(o))}),he=o=>r(r(r({},S({color:o.colorText,backgroundColor:o.colorBgTextHover},{color:o.colorText,backgroundColor:o.colorBgTextActive})),V(o)),{[`&${o.componentCls}-dangerous`]:r(r({color:o.colorError},V(o)),S({color:o.colorErrorHover,backgroundColor:o.colorErrorBg},{color:o.colorErrorHover,backgroundColor:o.colorErrorBg}))}),ye=o=>r(r({},to(o)),{[`&${o.componentCls}:hover`]:r({},to(o))}),$e=o=>{const{componentCls:e}=o;return{[`${e}-default`]:Ro(o),[`${e}-primary`]:ve(o),[`${e}-dashed`]:fe(o),[`${e}-link`]:be(o),[`${e}-text`]:he(o),[`${e}-disabled`]:ye(o)}},co=function(o){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const{componentCls:t,iconCls:l,controlHeight:a,fontSize:c,lineHeight:p,lineWidth:d,borderRadius:u,buttonPaddingHorizontal:x}=o,i=Math.max(0,(a-c*p)/2-d),y=x-d,B=`${t}-icon-only`;return[{[`${t}${e}`]:{fontSize:c,height:a,padding:`${i}px ${y}px`,borderRadius:u,[`&${B}`]:{width:a,paddingInlineStart:0,paddingInlineEnd:0,[`&${t}-round`]:{width:"auto"},"> span":{transform:"scale(1.143)"}},[`&${t}-loading`]:{opacity:o.opacityLoading,cursor:"default"},[`${t}-loading-icon`]:{transition:`width ${o.motionDurationSlow} ${o.motionEaseInOut}, opacity ${o.motionDurationSlow} ${o.motionEaseInOut}`},[`&:not(${B}) ${t}-loading-icon > ${l}`]:{marginInlineEnd:o.marginXS}}},{[`${t}${t}-circle${e}`]:ge(o)},{[`${t}${t}-round${e}`]:me(o)}]},Ce=o=>co(o),Se=o=>{const e=lo(o,{controlHeight:o.controlHeightSM,padding:o.paddingXS,buttonPaddingHorizontal:8,borderRadius:o.borderRadiusSM});return co(e,`${o.componentCls}-sm`)},xe=o=>{const e=lo(o,{controlHeight:o.controlHeightLG,fontSize:o.fontSizeLG,borderRadius:o.borderRadiusLG});return co(e,`${o.componentCls}-lg`)},Be=o=>{const{componentCls:e}=o;return{[e]:{[`&${e}-block`]:{width:"100%"}}}},Ee=Bo("Button",o=>{const{controlTmpOutline:e,paddingContentHorizontal:t}=o,l=lo(o,{colorOutlineDefault:e,buttonPaddingHorizontal:t});return[pe(l),Se(l),Ce(l),xe(l),Be(l),$e(l),se(l),Yo(o,{focus:!1}),ue(o)]}),Te=()=>({prefixCls:String,size:{type:String}}),Po=Jo(),ro=D({compatConfig:{MODE:3},name:"AButtonGroup",props:Te(),setup(o,e){let{slots:t}=e;const{prefixCls:l,direction:a}=no("btn-group",o),[,,c]=_o();Po.useProvide(Fo({size:H(()=>o.size)}));const p=H(()=>{const{size:d}=o;let u="";switch(d){case"large":u="lg";break;case"small":u="sm";break;case"middle":case void 0:break;default:To(!d,"Button.Group","Invalid prop `size`.")}return{[`${l.value}`]:!0,[`${l.value}-${u}`]:u,[`${l.value}-rtl`]:a.value==="rtl",[c.value]:!0}});return()=>{var d;return g("div",{class:p.value},[Eo((d=t.default)===null||d===void 0?void 0:d.call(t))])}}}),So=/^[\u4e00-\u9fa5]{2}$/,xo=So.test.bind(So);function M(o){return o==="text"||o==="link"}const G=D({compatConfig:{MODE:3},name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:jo(le(),{type:"default"}),slots:Object,setup(o,e){let{slots:t,attrs:l,emit:a,expose:c}=e;const{prefixCls:p,autoInsertSpaceInButton:d,direction:u,size:x}=no("btn",o),[i,y]=Ee(p),B=Po.useInject(),F=Mo(),z=H(()=>{var n;return(n=o.disabled)!==null&&n!==void 0?n:F.value}),T=P(null),w=P(void 0);let $=!1;const b=P(!1),E=P(!1),W=H(()=>d.value!==!1),{compactSize:N,compactItemClassnames:U}=Ko(p,u),s=H(()=>typeof o.loading=="object"&&o.loading.delay?o.loading.delay||!0:!!o.loading);Ho(s,n=>{clearTimeout(w.value),typeof s.value=="number"?w.value=setTimeout(()=>{b.value=n},s.value):b.value=n},{immediate:!0});const m=H(()=>{const{type:n,shape:v="default",ghost:C,block:h,danger:J}=o,f=p.value,L={large:"lg",small:"sm",middle:void 0},O=N.value||(B==null?void 0:B.size)||x.value,A=O&&L[O]||"";return[U.value,{[y.value]:!0,[`${f}`]:!0,[`${f}-${v}`]:v!=="default"&&v,[`${f}-${n}`]:n,[`${f}-${A}`]:A,[`${f}-loading`]:b.value,[`${f}-background-ghost`]:C&&!M(n),[`${f}-two-chinese-chars`]:E.value&&W.value,[`${f}-block`]:h,[`${f}-dangerous`]:!!J,[`${f}-rtl`]:u.value==="rtl"}]}),R=()=>{const n=T.value;if(!n||d.value===!1)return;const v=n.textContent;$&&xo(v)?E.value||(E.value=!0):E.value&&(E.value=!1)},X=n=>{if(b.value||z.value){n.preventDefault();return}a("click",n)},q=n=>{a("mousedown",n)},Y=(n,v)=>{const C=v?" ":"";if(n.type===qo){let h=n.children.trim();return xo(h)&&(h=h.split("").join(C)),g("span",null,[h])}return n};return Uo(()=>{To(!(o.ghost&&M(o.type)),"Button","`link` or `text` button can't be a `ghost` button.")}),ao(R),Xo(R),io(()=>{w.value&&clearTimeout(w.value)}),c({focus:()=>{var n;(n=T.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=T.value)===null||n===void 0||n.blur()}}),()=>{var n,v;const{icon:C=(n=t.icon)===null||n===void 0?void 0:n.call(t)}=o,h=Eo((v=t.default)===null||v===void 0?void 0:v.call(t));$=h.length===1&&!C&&!M(o.type);const{type:J,htmlType:f,href:L,title:O,target:A}=o,Do=b.value?"loading":C,K=r(r({},l),{title:O,disabled:z.value,class:[m.value,l.class,{[`${p.value}-icon-only`]:h.length===0&&!!Do}],onClick:X,onMousedown:q});z.value||delete K.disabled;const go=C&&!b.value?C:g(ae,{existIcon:!!C,prefixCls:p.value,loading:!!b.value},null),mo=h.map(Z=>Y(Z,$&&W.value));if(L!==void 0)return i(g("a",_(_({},K),{},{href:L,target:A,ref:T}),[go,mo]));let Q=g("button",_(_({},K),{},{ref:T,type:f}),[go,mo]);if(!M(J)){const Z=function(){return Q}();Q=g(ne,{ref:"wave",disabled:!!b.value},{default:()=>[Z]})}return i(Q)}}});G.Group=ro;G.install=function(o){return o.component(G.name,G),o.component(ro.name,ro),o};export{G as B,ne as W,le as b,We as c};