import{P as R,t as T,q as $e,ao as Ot,D as Kt,m as b,Y as at,ae as ze,E as rt,a6 as Pt,ap as Ve,aq as st,U as Tt,ar as _t,R as Et,S as We,as as Ye,aa as Ge,T as At,at as kt,x as Bt}from"./rmVoKyAr.js";import{s as ut,S as Dt,c as Rt,T as ct,O as be,i as Xe}from"./Bi9N8uqL.js";import{S as Ae,c as ye,d as xe,K as zt,w as ke}from"./ByTfTYi2.js";import{d as Z,c as H,w as W,f as m,D as g,F as we,i as re,p as fe,t as Ue,b as j,A as Me,a as dt,E as Ft,aa as Ht,ap as jt,H as Nt,z as Be,u as Ce,J as Lt}from"./Dg7Bj1Dn.js";import{s as ge}from"./CECZEjtU.js";import{_ as Vt}from"./NGD3Z_RD.js";import{g as Wt,c as Yt}from"./DP_f_eJI.js";import{i as Gt}from"./smLjY0U4.js";function Xt(){}function Ut(e,n,t,o){for(var l=e.length,a=t+(o?1:-1);o?a--:++a<l;)if(n(e[a],a,e))return a;return-1}function qt(e){return e!==e}function Zt(e,n,t){for(var o=t-1,l=e.length;++o<l;)if(e[o]===n)return o;return-1}function Jt(e,n,t){return n===n?Zt(e,n,t):Ut(e,qt,t)}function Qt(e,n){var t=e==null?0:e.length;return!!t&&Jt(e,n,0)>-1}function en(e,n,t){for(var o=-1,l=e==null?0:e.length;++o<l;)if(t(n,e[o]))return!0;return!1}var tn=1/0,nn=Ae&&1/ut(new Ae([,-0]))[1]==tn?function(e){return new Ae(e)}:Xt,on=200;function ln(e,n,t){var o=-1,l=Qt,a=e.length,d=!0,r=[],u=r;if(t)d=!1,l=en;else if(a>=on){var f=n?null:nn(e);if(f)return ut(f);d=!1,l=Rt,u=new Dt}else u=n?[]:r;e:for(;++o<a;){var c=e[o],i=n?n(c):c;if(c=t||c!==0?c:0,d&&i===i){for(var $=u.length;$--;)if(u[$]===i)continue e;n&&u.push(i),r.push(c)}else l(u,i,t)||(u!==r&&u.push(i),r.push(c))}return r}function De(e){return e&&e.length?ln(e):[]}const de={adjustX:1,adjustY:1},me=[0,0],an={topLeft:{points:["bl","tl"],overflow:de,offset:[0,-4],targetOffset:me},topCenter:{points:["bc","tc"],overflow:de,offset:[0,-4],targetOffset:me},topRight:{points:["br","tr"],overflow:de,offset:[0,-4],targetOffset:me},bottomLeft:{points:["tl","bl"],overflow:de,offset:[0,4],targetOffset:me},bottomCenter:{points:["tc","bc"],overflow:de,offset:[0,4],targetOffset:me},bottomRight:{points:["tr","br"],overflow:de,offset:[0,4],targetOffset:me}},rn=an;var sn=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(t[o[l]]=e[o[l]]);return t};const Vn=Z({compatConfig:{MODE:3},props:{minOverlayWidthMatchTrigger:{type:Boolean,default:void 0},arrow:{type:Boolean,default:!1},prefixCls:R.string.def("rc-dropdown"),transitionName:String,overlayClassName:R.string.def(""),openClassName:String,animation:R.any,align:R.object,overlayStyle:{type:Object,default:void 0},placement:R.string.def("bottomLeft"),overlay:R.any,trigger:R.oneOfType([R.string,R.arrayOf(R.string)]).def("hover"),alignPoint:{type:Boolean,default:void 0},showAction:R.array,hideAction:R.array,getPopupContainer:Function,visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:!1},mouseEnterDelay:R.number.def(.15),mouseLeaveDelay:R.number.def(.1)},emits:["visibleChange","overlayClick"],setup(e,n){let{slots:t,emit:o,expose:l}=n;const a=H(!!e.visible);W(()=>e.visible,v=>{v!==void 0&&(a.value=v)});const d=H();l({triggerRef:d});const r=v=>{e.visible===void 0&&(a.value=!1),o("overlayClick",v)},u=v=>{e.visible===void 0&&(a.value=v),o("visibleChange",v)},f=()=>{var v;const p=(v=t.overlay)===null||v===void 0?void 0:v.call(t),C={prefixCls:`${e.prefixCls}-menu`,onClick:r};return g(we,{key:Ot},[e.arrow&&g("div",{class:`${e.prefixCls}-arrow`},null),ye(p,C,!1)])},c=m(()=>{const{minOverlayWidthMatchTrigger:v=!e.alignPoint}=e;return v}),i=()=>{var v;const p=(v=t.default)===null||v===void 0?void 0:v.call(t);return a.value&&p?ye(p[0],{class:e.openClassName||`${e.prefixCls}-open`},!1):p},$=m(()=>!e.hideAction&&e.trigger.indexOf("contextmenu")!==-1?["click"]:e.hideAction);return()=>{const{prefixCls:v,arrow:p,showAction:C,overlayStyle:x,trigger:K,placement:M,align:N,getPopupContainer:Y,transitionName:h,animation:O,overlayClassName:z}=e,B=sn(e,["prefixCls","arrow","showAction","overlayStyle","trigger","placement","align","getPopupContainer","transitionName","animation","overlayClassName"]);return g(ct,T(T({},B),{},{prefixCls:v,ref:d,popupClassName:$e(z,{[`${v}-show-arrow`]:p}),popupStyle:x,builtinPlacements:rn,action:K,showAction:C,hideAction:$.value||[],popupPlacement:M,popupAlign:N,popupTransitionName:h,popupAnimation:O,popupVisible:a.value,stretch:c.value?"minWidth":"",onPopupVisibleChange:u,getPopupContainer:Y}),{popup:f,default:i})}}});var un={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};const cn=un;function qe(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),o.forEach(function(l){dn(e,l,t[l])})}return e}function dn(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Fe=function(n,t){var o=qe({},n,t.attrs);return g(Kt,qe({},o,{icon:cn}),null)};Fe.displayName="EllipsisOutlined";Fe.inheritAttrs=!1;const mn=Fe,mt=Symbol("OverrideContextKey"),vt=()=>re(mt,void 0),Wn=e=>{var n,t,o;const{prefixCls:l,mode:a,selectable:d,validator:r,onClick:u,expandIcon:f}=vt()||{};fe(mt,{prefixCls:m(()=>{var c,i;return(i=(c=e.prefixCls)===null||c===void 0?void 0:c.value)!==null&&i!==void 0?i:l==null?void 0:l.value}),mode:m(()=>{var c,i;return(i=(c=e.mode)===null||c===void 0?void 0:c.value)!==null&&i!==void 0?i:a==null?void 0:a.value}),selectable:m(()=>{var c,i;return(i=(c=e.selectable)===null||c===void 0?void 0:c.value)!==null&&i!==void 0?i:d==null?void 0:d.value}),validator:(n=e.validator)!==null&&n!==void 0?n:r,onClick:(t=e.onClick)!==null&&t!==void 0?t:u,expandIcon:(o=e.expandIcon)!==null&&o!==void 0?o:f==null?void 0:f.value})},ft=Symbol("menuContextKey"),pt=e=>{fe(ft,e)},Q=()=>re(ft),gt=Symbol("ForceRenderKey"),vn=e=>{fe(gt,e)},bt=()=>re(gt,!1),$t=Symbol("menuFirstLevelContextKey"),yt=e=>{fe($t,e)},fn=()=>re($t,!0),Oe=Z({compatConfig:{MODE:3},name:"MenuContextProvider",inheritAttrs:!1,props:{mode:{type:String,default:void 0},overflowDisabled:{type:Boolean,default:void 0}},setup(e,n){let{slots:t}=n;const o=Q(),l=b({},o);return e.mode!==void 0&&(l.mode=Ue(e,"mode")),e.overflowDisabled!==void 0&&(l.overflowDisabled=Ue(e,"overflowDisabled")),pt(l),()=>{var a;return(a=t.default)===null||a===void 0?void 0:a.call(t)}}}),pn=pt,gn=Symbol("siderCollapsed"),Se="$$__vc-menu-more__key",ht=Symbol("KeyPathContext"),He=()=>re(ht,{parentEventKeys:m(()=>[]),parentKeys:m(()=>[]),parentInfo:{}}),bn=(e,n,t)=>{const{parentEventKeys:o,parentKeys:l}=He(),a=m(()=>[...o.value,e]),d=m(()=>[...l.value,n]);return fe(ht,{parentEventKeys:a,parentKeys:d,parentInfo:t}),d},It=Symbol("measure"),Ze=Z({compatConfig:{MODE:3},setup(e,n){let{slots:t}=n;return fe(It,!0),()=>{var o;return(o=t.default)===null||o===void 0?void 0:o.call(t)}}}),je=()=>re(It,!1),$n=bn;function Ct(e){const{mode:n,rtl:t,inlineIndent:o}=Q();return m(()=>n.value!=="inline"?null:t.value?{paddingRight:`${e.value*o.value}px`}:{paddingLeft:`${e.value*o.value}px`})}let yn=0;const hn=()=>({id:String,role:String,disabled:Boolean,danger:Boolean,title:{type:[String,Boolean],default:void 0},icon:R.any,onMouseenter:Function,onMouseleave:Function,onClick:Function,onKeydown:Function,onFocus:Function,originItemValue:ze()}),he=Z({compatConfig:{MODE:3},name:"AMenuItem",inheritAttrs:!1,props:hn(),slots:Object,setup(e,n){let{slots:t,emit:o,attrs:l}=n;const a=dt(),d=je(),r=typeof a.vnode.key=="symbol"?String(a.vnode.key):a.vnode.key;xe(typeof a.vnode.key!="symbol","MenuItem",`MenuItem \`:key="${String(r)}"\` not support Symbol type`);const u=`menu_item_${++yn}_$$_${r}`,{parentEventKeys:f,parentKeys:c}=He(),{prefixCls:i,activeKeys:$,disabled:v,changeActiveKeys:p,rtl:C,inlineCollapsed:x,siderCollapsed:K,onItemClick:M,selectedKeys:N,registerMenuInfo:Y,unRegisterMenuInfo:h}=Q(),O=fn(),z=j(!1),B=m(()=>[...c.value,r]);Y(u,{eventKey:u,key:r,parentEventKeys:f,parentKeys:c,isLeaf:!0}),Me(()=>{h(u)}),W($,()=>{z.value=!!$.value.find(I=>I===r)},{immediate:!0});const P=m(()=>v.value||e.disabled),X=m(()=>N.value.includes(r)),U=m(()=>{const I=`${i.value}-item`;return{[`${I}`]:!0,[`${I}-danger`]:e.danger,[`${I}-active`]:z.value,[`${I}-selected`]:X.value,[`${I}-disabled`]:P.value}}),q=I=>({key:r,eventKey:u,keyPath:B.value,eventKeyPath:[...f.value,u],domEvent:I,item:b(b({},e),l)}),se=I=>{if(P.value)return;const A=q(I);o("click",I),M(A)},ue=I=>{P.value||(p(B.value),o("mouseenter",I))},ee=I=>{P.value||(p([]),o("mouseleave",I))},te=I=>{if(o("keydown",I),I.which===zt.ENTER){const A=q(I);o("click",I),M(A)}},ce=I=>{p(B.value),o("focus",I)},V=(I,A)=>{const L=g("span",{class:`${i.value}-title-content`},[A]);return(!I||rt(A)&&A.type==="span")&&A&&x.value&&O&&typeof A=="string"?g("div",{class:`${i.value}-inline-collapsed-noicon`},[A.charAt(0)]):L},pe=Ct(m(()=>B.value.length));return()=>{var I,A,L,J,ne;if(d)return null;const s=(I=e.title)!==null&&I!==void 0?I:(A=t.title)===null||A===void 0?void 0:A.call(t),y=at((L=t.default)===null||L===void 0?void 0:L.call(t)),w=y.length;let _=s;typeof s>"u"?_=O&&w?y:"":s===!1&&(_="");const k={title:_};!K.value&&!x.value&&(k.title=null,k.open=!1);const F={};e.role==="option"&&(F["aria-selected"]=X.value);const E=(J=e.icon)!==null&&J!==void 0?J:(ne=t.icon)===null||ne===void 0?void 0:ne.call(t,e);return g(Vt,T(T({},k),{},{placement:C.value?"left":"right",overlayClassName:`${i.value}-inline-collapsed-tooltip`}),{default:()=>[g(be.Item,T(T(T({component:"li"},l),{},{id:e.id,style:b(b({},l.style||{}),pe.value),class:[U.value,{[`${l.class}`]:!!l.class,[`${i.value}-item-only-child`]:(E?w+1:w)===1}],role:e.role||"menuitem",tabindex:e.disabled?null:-1,"data-menu-id":r,"aria-disabled":e.disabled},F),{},{onMouseenter:ue,onMouseleave:ee,onClick:se,onKeydown:te,onFocus:ce,title:typeof s=="string"?s:void 0}),{default:()=>[ye(typeof E=="function"?E(e.originItemValue):E,{class:`${i.value}-item-icon`},!1),V(E,y)]})]})}}}),ie={adjustX:1,adjustY:1},In={topLeft:{points:["bl","tl"],overflow:ie,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:ie,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:ie,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:ie,offset:[4,0]}},Cn={topLeft:{points:["bl","tl"],overflow:ie,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:ie,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:ie,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:ie,offset:[4,0]}},Sn={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"},Je=Z({compatConfig:{MODE:3},name:"PopupTrigger",inheritAttrs:!1,props:{prefixCls:String,mode:String,visible:Boolean,popupClassName:String,popupOffset:Array,disabled:Boolean,onVisibleChange:Function},slots:Object,emits:["visibleChange"],setup(e,n){let{slots:t,emit:o}=n;const l=j(!1),{getPopupContainer:a,rtl:d,subMenuOpenDelay:r,subMenuCloseDelay:u,builtinPlacements:f,triggerSubMenuAction:c,forceSubMenuRender:i,motion:$,defaultMotions:v,rootClassName:p}=Q(),C=bt(),x=m(()=>d.value?b(b({},Cn),f.value):b(b({},In),f.value)),K=m(()=>Sn[e.mode]),M=j();W(()=>e.visible,h=>{ke.cancel(M.value),M.value=ke(()=>{l.value=h})},{immediate:!0}),Me(()=>{ke.cancel(M.value)});const N=h=>{o("visibleChange",h)},Y=m(()=>{var h,O;const z=$.value||((h=v.value)===null||h===void 0?void 0:h[e.mode])||((O=v.value)===null||O===void 0?void 0:O.other),B=typeof z=="function"?z():z;return B?Pt(B.name,{css:!0}):void 0});return()=>{const{prefixCls:h,popupClassName:O,mode:z,popupOffset:B,disabled:G}=e;return g(ct,{prefixCls:h,popupClassName:$e(`${h}-popup`,{[`${h}-rtl`]:d.value},O,p.value),stretch:z==="horizontal"?"minWidth":null,getPopupContainer:a.value,builtinPlacements:x.value,popupPlacement:K.value,popupVisible:l.value,popupAlign:B&&{offset:B},action:G?[]:[c.value],mouseEnterDelay:r.value,mouseLeaveDelay:u.value,onPopupVisibleChange:N,forceRender:C||i.value,popupAnimation:Y.value},{popup:t.popup,default:t.default})}}}),St=(e,n)=>{let{slots:t,attrs:o}=n;var l;const{prefixCls:a,mode:d}=Q();return g("ul",T(T({},o),{},{class:$e(a.value,`${a.value}-sub`,`${a.value}-${d.value==="inline"?"inline":"vertical"}`),"data-menu-list":!0}),[(l=t.default)===null||l===void 0?void 0:l.call(t)])};St.displayName="SubMenuList";const xt=St,xn=Z({compatConfig:{MODE:3},name:"InlineSubMenuList",inheritAttrs:!1,props:{id:String,open:Boolean,keyPath:Array},setup(e,n){let{slots:t}=n;const o=m(()=>"inline"),{motion:l,mode:a,defaultMotions:d}=Q(),r=m(()=>a.value===o.value),u=H(!r.value),f=m(()=>r.value?e.open:!1);W(a,()=>{r.value&&(u.value=!1)},{flush:"post"});const c=m(()=>{var i,$;const v=l.value||((i=d.value)===null||i===void 0?void 0:i[o.value])||(($=d.value)===null||$===void 0?void 0:$.other),p=typeof v=="function"?v():v;return b(b({},p),{appear:e.keyPath.length<=1})});return()=>{var i;return u.value?null:g(Oe,{mode:o.value},{default:()=>[g(Ft,c.value,{default:()=>[Ht(g(xt,{id:e.id},{default:()=>[(i=t.default)===null||i===void 0?void 0:i.call(t)]}),[[jt,f.value]])]})]})}}});let Qe=0;const wn=()=>({icon:R.any,title:R.any,disabled:Boolean,level:Number,popupClassName:String,popupOffset:Array,internalPopupClose:Boolean,eventKey:String,expandIcon:Function,theme:String,onMouseenter:Function,onMouseleave:Function,onTitleClick:Function,originItemValue:ze()}),ve=Z({compatConfig:{MODE:3},name:"ASubMenu",inheritAttrs:!1,props:wn(),slots:Object,setup(e,n){let{slots:t,attrs:o,emit:l}=n;var a,d;yt(!1);const r=je(),u=dt(),f=typeof u.vnode.key=="symbol"?String(u.vnode.key):u.vnode.key;xe(typeof u.vnode.key!="symbol","SubMenu",`SubMenu \`:key="${String(f)}"\` not support Symbol type`);const c=Ve(f)?f:`sub_menu_${++Qe}_$$_not_set_key`,i=(a=e.eventKey)!==null&&a!==void 0?a:Ve(f)?`sub_menu_${++Qe}_$$_${f}`:c,{parentEventKeys:$,parentInfo:v,parentKeys:p}=He(),C=m(()=>[...p.value,c]),x=j([]),K={eventKey:i,key:c,parentEventKeys:$,childrenEventKeys:x,parentKeys:p};(d=v.childrenEventKeys)===null||d===void 0||d.value.push(i),Me(()=>{var S;v.childrenEventKeys&&(v.childrenEventKeys.value=(S=v.childrenEventKeys)===null||S===void 0?void 0:S.value.filter(D=>D!=i))}),$n(i,c,K);const{prefixCls:M,activeKeys:N,disabled:Y,changeActiveKeys:h,mode:O,inlineCollapsed:z,openKeys:B,overflowDisabled:G,onOpenChange:P,registerMenuInfo:X,unRegisterMenuInfo:U,selectedSubMenuKeys:q,expandIcon:se,theme:ue}=Q(),ee=f!=null,te=!r&&(bt()||!ee);vn(te),(r&&ee||!r&&!ee||te)&&(X(i,K),Me(()=>{U(i)}));const ce=m(()=>`${M.value}-submenu`),V=m(()=>Y.value||e.disabled),pe=j(),I=j(),A=m(()=>B.value.includes(c)),L=m(()=>!G.value&&A.value),J=m(()=>q.value.includes(c)),ne=j(!1);W(N,()=>{ne.value=!!N.value.find(S=>S===c)},{immediate:!0});const s=S=>{V.value||(l("titleClick",S,c),O.value==="inline"&&P(c,!A.value))},y=S=>{V.value||(h(C.value),l("mouseenter",S))},w=S=>{V.value||(h([]),l("mouseleave",S))},_=Ct(m(()=>C.value.length)),k=S=>{O.value!=="inline"&&P(c,S)},F=()=>{h(C.value)},E=i&&`${i}-popup`,oe=m(()=>$e(M.value,`${M.value}-${e.theme||ue.value}`,e.popupClassName)),Ie=(S,D)=>{if(!D)return z.value&&!p.value.length&&S&&typeof S=="string"?g("div",{class:`${M.value}-inline-collapsed-noicon`},[S.charAt(0)]):g("span",{class:`${M.value}-title-content`},[S]);const le=rt(S)&&S.type==="span";return g(we,null,[ye(typeof D=="function"?D(e.originItemValue):D,{class:`${M.value}-item-icon`},!1),le?S:g("span",{class:`${M.value}-title-content`},[S])])},Te=m(()=>O.value!=="inline"&&C.value.length>1?"vertical":O.value),wt=m(()=>O.value==="horizontal"?"vertical":O.value),Mt=m(()=>Te.value==="horizontal"?"vertical":Te.value),Ne=()=>{var S,D;const le=ce.value,_e=(S=e.icon)!==null&&S!==void 0?S:(D=t.icon)===null||D===void 0?void 0:D.call(t,e),Le=e.expandIcon||t.expandIcon||se.value,Ee=Ie(st(t,e,"title"),_e);return g("div",{style:_.value,class:`${le}-title`,tabindex:V.value?null:-1,ref:pe,title:typeof Ee=="string"?Ee:null,"data-menu-id":c,"aria-expanded":L.value,"aria-haspopup":!0,"aria-controls":E,"aria-disabled":V.value,onClick:s,onFocus:F},[Ee,O.value!=="horizontal"&&Le?Le(b(b({},e),{isOpen:L.value})):g("i",{class:`${le}-arrow`},null)])};return()=>{var S;if(r)return ee?(S=t.default)===null||S===void 0?void 0:S.call(t):null;const D=ce.value;let le=()=>null;if(!G.value&&O.value!=="inline"){const _e=O.value==="horizontal"?[0,8]:[10,0];le=()=>g(Je,{mode:Te.value,prefixCls:D,visible:!e.internalPopupClose&&L.value,popupClassName:oe.value,popupOffset:e.popupOffset||_e,disabled:V.value,onVisibleChange:k},{default:()=>[Ne()],popup:()=>g(Oe,{mode:Mt.value},{default:()=>[g(xt,{id:E,ref:I},{default:t.default})]})})}else le=()=>g(Je,null,{default:Ne});return g(Oe,{mode:wt.value},{default:()=>[g(be.Item,T(T({component:"li"},o),{},{role:"none",class:$e(D,`${D}-${O.value}`,o.class,{[`${D}-open`]:L.value,[`${D}-active`]:ne.value,[`${D}-selected`]:J.value,[`${D}-disabled`]:V.value}),onMouseenter:y,onMouseleave:w,"data-submenu-id":c}),{default:()=>g(we,null,[le(),!G.value&&g(xn,{id:E,open:L.value,keyPath:C.value},{default:t.default})])})]})}}}),Mn=()=>({title:R.any,originItemValue:ze()}),Ke=Z({compatConfig:{MODE:3},name:"AMenuItemGroup",inheritAttrs:!1,props:Mn(),slots:Object,setup(e,n){let{slots:t,attrs:o}=n;const{prefixCls:l}=Q(),a=m(()=>`${l.value}-item-group`),d=je();return()=>{var r,u;return d?(r=t.default)===null||r===void 0?void 0:r.call(t):g("li",T(T({},o),{},{onClick:f=>f.stopPropagation(),class:a.value}),[g("div",{title:typeof e.title=="string"?e.title:void 0,class:`${a.value}-title`},[st(t,e,"title")]),g("ul",{class:`${a.value}-list`},[(u=t.default)===null||u===void 0?void 0:u.call(t)])])}}}),On=()=>({prefixCls:String,dashed:Boolean}),Pe=Z({compatConfig:{MODE:3},name:"AMenuDivider",props:On(),setup(e){const{prefixCls:n}=Q(),t=m(()=>({[`${n.value}-item-divider`]:!0,[`${n.value}-item-divider-dashed`]:!!e.dashed}));return()=>g("li",{class:t.value},null)}});var Kn=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(t[o[l]]=e[o[l]]);return t};function Re(e,n,t){return(e||[]).map((o,l)=>{if(o&&typeof o=="object"){const a=o,{label:d,children:r,key:u,type:f}=a,c=Kn(a,["label","children","key","type"]),i=u??`tmp-${l}`,$=t?t.parentKeys.slice():[],v=[],p={eventKey:i,key:i,parentEventKeys:H($),parentKeys:H($),childrenEventKeys:H(v),isLeaf:!1};if(r||f==="group"){if(f==="group"){const x=Re(r,n,t);return g(Ke,T(T({key:i},c),{},{title:d,originItemValue:o}),{default:()=>[x]})}n.set(i,p),t&&t.childrenEventKeys.push(i);const C=Re(r,n,{childrenEventKeys:v,parentKeys:[].concat($,i)});return g(ve,T(T({key:i},c),{},{title:d,originItemValue:o}),{default:()=>[C]})}return f==="divider"?g(Pe,T({key:i},c),null):(p.isLeaf=!0,n.set(i,p),g(he,T(T({key:i},c),{},{originItemValue:o}),{default:()=>[d]}))}return null}).filter(o=>o)}function Pn(e){const n=j([]),t=j(!1),o=j(new Map);return W(()=>e.items,()=>{const l=new Map;t.value=!1,e.items?(t.value=!0,n.value=Re(e.items,l)):n.value=void 0,o.value=l},{immediate:!0,deep:!0}),{itemsNodes:n,store:o,hasItmes:t}}const Tn=e=>{const{componentCls:n,motionDurationSlow:t,menuHorizontalHeight:o,colorSplit:l,lineWidth:a,lineType:d,menuItemPaddingInline:r}=e;return{[`${n}-horizontal`]:{lineHeight:`${o}px`,border:0,borderBottom:`${a}px ${d} ${l}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${n}-item, ${n}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:r},[`> ${n}-item:hover,
        > ${n}-item-active,
        > ${n}-submenu ${n}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${n}-item, ${n}-submenu-title`]:{transition:[`border-color ${t}`,`background ${t}`].join(",")},[`${n}-submenu-arrow`]:{display:"none"}}}},_n=e=>{let{componentCls:n,menuArrowOffset:t}=e;return{[`${n}-rtl`]:{direction:"rtl"},[`${n}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${n}-rtl${n}-vertical,
    ${n}-submenu-rtl ${n}-vertical`]:{[`${n}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(-${t})`},"&::after":{transform:`rotate(45deg) translateY(${t})`}}}}},et=e=>b({},Tt(e)),tt=(e,n)=>{const{componentCls:t,colorItemText:o,colorItemTextSelected:l,colorGroupTitle:a,colorItemBg:d,colorSubItemBg:r,colorItemBgSelected:u,colorActiveBarHeight:f,colorActiveBarWidth:c,colorActiveBarBorderSize:i,motionDurationSlow:$,motionEaseInOut:v,motionEaseOut:p,menuItemPaddingInline:C,motionDurationMid:x,colorItemTextHover:K,lineType:M,colorSplit:N,colorItemTextDisabled:Y,colorDangerItemText:h,colorDangerItemTextHover:O,colorDangerItemTextSelected:z,colorDangerItemBgActive:B,colorDangerItemBgSelected:G,colorItemBgHover:P,menuSubMenuBg:X,colorItemTextSelectedHorizontal:U,colorItemBgSelectedHorizontal:q}=e;return{[`${t}-${n}`]:{color:o,background:d,[`&${t}-root:focus-visible`]:b({},et(e)),[`${t}-item-group-title`]:{color:a},[`${t}-submenu-selected`]:{[`> ${t}-submenu-title`]:{color:l}},[`${t}-item-disabled, ${t}-submenu-disabled`]:{color:`${Y} !important`},[`${t}-item:hover, ${t}-submenu-title:hover`]:{[`&:not(${t}-item-selected):not(${t}-submenu-selected)`]:{color:K}},[`&:not(${t}-horizontal)`]:{[`${t}-item:not(${t}-item-selected)`]:{"&:hover":{backgroundColor:P},"&:active":{backgroundColor:u}},[`${t}-submenu-title`]:{"&:hover":{backgroundColor:P},"&:active":{backgroundColor:u}}},[`${t}-item-danger`]:{color:h,[`&${t}-item:hover`]:{[`&:not(${t}-item-selected):not(${t}-submenu-selected)`]:{color:O}},[`&${t}-item:active`]:{background:B}},[`${t}-item a`]:{"&, &:hover":{color:"inherit"}},[`${t}-item-selected`]:{color:l,[`&${t}-item-danger`]:{color:z},"a, a:hover":{color:"inherit"}},[`& ${t}-item-selected`]:{backgroundColor:u,[`&${t}-item-danger`]:{backgroundColor:G}},[`${t}-item, ${t}-submenu-title`]:{[`&:not(${t}-item-disabled):focus-visible`]:b({},et(e))},[`&${t}-submenu > ${t}`]:{backgroundColor:X},[`&${t}-popup > ${t}`]:{backgroundColor:d},[`&${t}-horizontal`]:b(b({},n==="dark"?{borderBottom:0}:{}),{[`> ${t}-item, > ${t}-submenu`]:{top:i,marginTop:-i,marginBottom:0,borderRadius:0,"&::after":{position:"absolute",insetInline:C,bottom:0,borderBottom:`${f}px solid transparent`,transition:`border-color ${$} ${v}`,content:'""'},"&:hover, &-active, &-open":{"&::after":{borderBottomWidth:f,borderBottomColor:U}},"&-selected":{color:U,backgroundColor:q,"&::after":{borderBottomWidth:f,borderBottomColor:U}}}}),[`&${t}-root`]:{[`&${t}-inline, &${t}-vertical`]:{borderInlineEnd:`${i}px ${M} ${N}`}},[`&${t}-inline`]:{[`${t}-sub${t}-inline`]:{background:r},[`${t}-item, ${t}-submenu-title`]:i&&c?{width:`calc(100% + ${i}px)`}:{},[`${t}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${c}px solid ${l}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${x} ${p}`,`opacity ${x} ${p}`].join(","),content:'""'},[`&${t}-item-danger`]:{"&::after":{borderInlineEndColor:z}}},[`${t}-selected, ${t}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${x} ${v}`,`opacity ${x} ${v}`].join(",")}}}}}},nt=e=>{const{componentCls:n,menuItemHeight:t,itemMarginInline:o,padding:l,menuArrowSize:a,marginXS:d,marginXXS:r}=e,u=l+a+d;return{[`${n}-item`]:{position:"relative"},[`${n}-item, ${n}-submenu-title`]:{height:t,lineHeight:`${t}px`,paddingInline:l,overflow:"hidden",textOverflow:"ellipsis",marginInline:o,marginBlock:r,width:`calc(100% - ${o*2}px)`},[`${n}-submenu`]:{paddingBottom:.02},[`> ${n}-item,
            > ${n}-submenu > ${n}-submenu-title`]:{height:t,lineHeight:`${t}px`},[`${n}-item-group-list ${n}-submenu-title,
            ${n}-submenu-title`]:{paddingInlineEnd:u}}},En=e=>{const{componentCls:n,iconCls:t,menuItemHeight:o,colorTextLightSolid:l,dropdownWidth:a,controlHeightLG:d,motionDurationMid:r,motionEaseOut:u,paddingXL:f,fontSizeSM:c,fontSizeLG:i,motionDurationSlow:$,paddingXS:v,boxShadowSecondary:p}=e,C={height:o,lineHeight:`${o}px`,listStylePosition:"inside",listStyleType:"disc"};return[{[n]:{"&-inline, &-vertical":b({[`&${n}-root`]:{boxShadow:"none"}},nt(e))},[`${n}-submenu-popup`]:{[`${n}-vertical`]:b(b({},nt(e)),{boxShadow:p})}},{[`${n}-submenu-popup ${n}-vertical${n}-sub`]:{minWidth:a,maxHeight:`calc(100vh - ${d*2.5}px)`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${n}-inline`]:{width:"100%",[`&${n}-root`]:{[`${n}-item, ${n}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${$}`,`background ${$}`,`padding ${r} ${u}`].join(","),[`> ${n}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${n}-sub${n}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${n}-submenu > ${n}-submenu-title`]:C,[`& ${n}-item-group-title`]:{paddingInlineStart:f}},[`${n}-item`]:C}},{[`${n}-inline-collapsed`]:{width:o*2,[`&${n}-root`]:{[`${n}-item, ${n}-submenu ${n}-submenu-title`]:{[`> ${n}-inline-collapsed-noicon`]:{fontSize:i,textAlign:"center"}}},[`> ${n}-item,
          > ${n}-item-group > ${n}-item-group-list > ${n}-item,
          > ${n}-item-group > ${n}-item-group-list > ${n}-submenu > ${n}-submenu-title,
          > ${n}-submenu > ${n}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${c}px)`,textOverflow:"clip",[`
            ${n}-submenu-arrow,
            ${n}-submenu-expand-icon
          `]:{opacity:0},[`${n}-item-icon, ${t}`]:{margin:0,fontSize:i,lineHeight:`${o}px`,"+ span":{display:"inline-block",opacity:0}}},[`${n}-item-icon, ${t}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${n}-item-icon, ${t}`]:{display:"none"},"a, a:hover":{color:l}},[`${n}-item-group-title`]:b(b({},_t),{paddingInline:v})}}]},ot=e=>{const{componentCls:n,fontSize:t,motionDurationSlow:o,motionDurationMid:l,motionEaseInOut:a,motionEaseOut:d,iconCls:r,controlHeightSM:u}=e;return{[`${n}-item, ${n}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${o}`,`background ${o}`,`padding ${o} ${a}`].join(","),[`${n}-item-icon, ${r}`]:{minWidth:t,fontSize:t,transition:[`font-size ${l} ${d}`,`margin ${o} ${a}`,`color ${o}`].join(","),"+ span":{marginInlineStart:u-t,opacity:1,transition:[`opacity ${o} ${a}`,`margin ${o}`,`color ${o}`].join(",")}},[`${n}-item-icon`]:b({},kt()),[`&${n}-item-only-child`]:{[`> ${r}, > ${n}-item-icon`]:{marginInlineEnd:0}}},[`${n}-item-disabled, ${n}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${n}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},lt=e=>{const{componentCls:n,motionDurationSlow:t,motionEaseInOut:o,borderRadius:l,menuArrowSize:a,menuArrowOffset:d}=e;return{[`${n}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:e.margin,width:a,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${t} ${o}, opacity ${t}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:a*.6,height:a*.15,backgroundColor:"currentcolor",borderRadius:l,transition:[`background ${t} ${o}`,`transform ${t} ${o}`,`top ${t} ${o}`,`color ${t} ${o}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(-${d})`},"&::after":{transform:`rotate(-45deg) translateY(${d})`}}}}},An=e=>{const{antCls:n,componentCls:t,fontSize:o,motionDurationSlow:l,motionDurationMid:a,motionEaseInOut:d,lineHeight:r,paddingXS:u,padding:f,colorSplit:c,lineWidth:i,zIndexPopup:$,borderRadiusLG:v,radiusSubMenuItem:p,menuArrowSize:C,menuArrowOffset:x,lineType:K,menuPanelMaskInset:M}=e;return[{"":{[`${t}`]:b(b({},Ge()),{"&-hidden":{display:"none"}})},[`${t}-submenu-hidden`]:{display:"none"}},{[t]:b(b(b(b(b(b(b({},At(e)),Ge()),{marginBottom:0,paddingInlineStart:0,fontSize:o,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${l} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${t}-item`]:{flex:"none"}},[`${t}-item, ${t}-submenu, ${t}-submenu-title`]:{borderRadius:e.radiusItem},[`${t}-item-group-title`]:{padding:`${u}px ${f}px`,fontSize:o,lineHeight:r,transition:`all ${l}`},[`&-horizontal ${t}-submenu`]:{transition:[`border-color ${l} ${d}`,`background ${l} ${d}`].join(",")},[`${t}-submenu, ${t}-submenu-inline`]:{transition:[`border-color ${l} ${d}`,`background ${l} ${d}`,`padding ${a} ${d}`].join(",")},[`${t}-submenu ${t}-sub`]:{cursor:"initial",transition:[`background ${l} ${d}`,`padding ${l} ${d}`].join(",")},[`${t}-title-content`]:{transition:`color ${l}`},[`${t}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${t}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:c,borderStyle:K,borderWidth:0,borderTopWidth:i,marginBlock:i,padding:0,"&-dashed":{borderStyle:"dashed"}}}),ot(e)),{[`${t}-item-group`]:{[`${t}-item-group-list`]:{margin:0,padding:0,[`${t}-item, ${t}-submenu-title`]:{paddingInline:`${o*2}px ${f}px`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:$,background:"transparent",borderRadius:v,boxShadow:"none",transformOrigin:"0 0","&::before":{position:"absolute",inset:`${M}px 0 0`,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'}},"&-placement-rightTop::before":{top:0,insetInlineStart:M},[`> ${t}`]:b(b(b({borderRadius:v},ot(e)),lt(e)),{[`${t}-item, ${t}-submenu > ${t}-submenu-title`]:{borderRadius:p},[`${t}-submenu-title::after`]:{transition:`transform ${l} ${d}`}})}}),lt(e)),{[`&-inline-collapsed ${t}-submenu-arrow,
        &-inline ${t}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${x})`},"&::after":{transform:`rotate(45deg) translateX(-${x})`}},[`${t}-submenu-open${t}-submenu-inline > ${t}-submenu-title > ${t}-submenu-arrow`]:{transform:`translateY(-${C*.2}px)`,"&::after":{transform:`rotate(-45deg) translateX(-${x})`},"&::before":{transform:`rotate(45deg) translateX(${x})`}}})},{[`${n}-layout-header`]:{[t]:{lineHeight:"inherit"}}}]},kn=(e,n)=>Et("Menu",(o,l)=>{let{overrideComponentToken:a}=l;if((n==null?void 0:n.value)===!1)return[];const{colorBgElevated:d,colorPrimary:r,colorError:u,colorErrorHover:f,colorTextLightSolid:c}=o,{controlHeightLG:i,fontSize:$}=o,v=$/7*5,p=We(o,{menuItemHeight:i,menuItemPaddingInline:o.margin,menuArrowSize:v,menuHorizontalHeight:i*1.15,menuArrowOffset:`${v*.25}px`,menuPanelMaskInset:-7,menuSubMenuBg:d}),C=new Ye(c).setAlpha(.65).toRgbString(),x=We(p,{colorItemText:C,colorItemTextHover:c,colorGroupTitle:C,colorItemTextSelected:c,colorItemBg:"#001529",colorSubItemBg:"#000c17",colorItemBgActive:"transparent",colorItemBgSelected:r,colorActiveBarWidth:0,colorActiveBarHeight:0,colorActiveBarBorderSize:0,colorItemTextDisabled:new Ye(c).setAlpha(.25).toRgbString(),colorDangerItemText:u,colorDangerItemTextHover:f,colorDangerItemTextSelected:c,colorDangerItemBgActive:u,colorDangerItemBgSelected:u,menuSubMenuBg:"#001529",colorItemTextSelectedHorizontal:c,colorItemBgSelectedHorizontal:r},b({},a));return[An(p),Tn(p),En(p),tt(p,"light"),tt(x,"dark"),_n(p),Wt(p),Xe(p,"slide-up"),Xe(p,"slide-down"),Gt(p,"zoom-big")]},o=>{const{colorPrimary:l,colorError:a,colorTextDisabled:d,colorErrorBg:r,colorText:u,colorTextDescription:f,colorBgContainer:c,colorFillAlter:i,colorFillContent:$,lineWidth:v,lineWidthBold:p,controlItemBgActive:C,colorBgTextHover:x}=o;return{dropdownWidth:160,zIndexPopup:o.zIndexPopupBase+50,radiusItem:o.borderRadiusLG,radiusSubMenuItem:o.borderRadiusSM,colorItemText:u,colorItemTextHover:u,colorItemTextHoverHorizontal:l,colorGroupTitle:f,colorItemTextSelected:l,colorItemTextSelectedHorizontal:l,colorItemBg:c,colorItemBgHover:x,colorItemBgActive:$,colorSubItemBg:i,colorItemBgSelected:C,colorItemBgSelectedHorizontal:"transparent",colorActiveBarWidth:0,colorActiveBarHeight:p,colorActiveBarBorderSize:v,colorItemTextDisabled:d,colorDangerItemText:a,colorDangerItemTextHover:a,colorDangerItemTextSelected:a,colorDangerItemBgActive:r,colorDangerItemBgSelected:r,itemMarginInline:o.marginXXS}})(e),Bn=()=>({id:String,prefixCls:String,items:Array,disabled:Boolean,inlineCollapsed:Boolean,disabledOverflow:Boolean,forceSubMenuRender:Boolean,openKeys:Array,selectedKeys:Array,activeKey:String,selectable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},tabindex:{type:[Number,String]},motion:Object,role:String,theme:{type:String,default:"light"},mode:{type:String,default:"vertical"},inlineIndent:{type:Number,default:24},subMenuOpenDelay:{type:Number,default:0},subMenuCloseDelay:{type:Number,default:.1},builtinPlacements:{type:Object},triggerSubMenuAction:{type:String,default:"hover"},getPopupContainer:Function,expandIcon:Function,onOpenChange:Function,onSelect:Function,onDeselect:Function,onClick:[Function,Array],onFocus:Function,onBlur:Function,onMousedown:Function,"onUpdate:openKeys":Function,"onUpdate:selectedKeys":Function,"onUpdate:activeKey":Function}),it=[],ae=Z({compatConfig:{MODE:3},name:"AMenu",inheritAttrs:!1,props:Bn(),slots:Object,setup(e,n){let{slots:t,emit:o,attrs:l}=n;const{direction:a,getPrefixCls:d}=Bt("menu",e),r=vt(),u=m(()=>{var s;return d("menu",e.prefixCls||((s=r==null?void 0:r.prefixCls)===null||s===void 0?void 0:s.value))}),[f,c]=kn(u,m(()=>!r)),i=j(new Map),$=re(gn,H(void 0)),v=m(()=>$.value!==void 0?$.value:e.inlineCollapsed),{itemsNodes:p}=Pn(e),C=j(!1);Nt(()=>{C.value=!0}),Be(()=>{xe(!(e.inlineCollapsed===!0&&e.mode!=="inline"),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),xe(!($.value!==void 0&&e.inlineCollapsed===!0),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.")});const x=H([]),K=H([]),M=H({});W(i,()=>{const s={};for(const y of i.value.values())s[y.key]=y;M.value=s},{flush:"post"}),Be(()=>{if(e.activeKey!==void 0){let s=[];const y=e.activeKey?M.value[e.activeKey]:void 0;y&&e.activeKey!==void 0?s=De([].concat(Ce(y.parentKeys),e.activeKey)):s=[],ge(x.value,s)||(x.value=s)}}),W(()=>e.selectedKeys,s=>{s&&(K.value=s.slice())},{immediate:!0,deep:!0});const N=H([]);W([M,K],()=>{let s=[];K.value.forEach(y=>{const w=M.value[y];w&&(s=s.concat(Ce(w.parentKeys)))}),s=De(s),ge(N.value,s)||(N.value=s)},{immediate:!0});const Y=s=>{if(e.selectable){const{key:y}=s,w=K.value.includes(y);let _;e.multiple?w?_=K.value.filter(F=>F!==y):_=[...K.value,y]:_=[y];const k=b(b({},s),{selectedKeys:_});ge(_,K.value)||(e.selectedKeys===void 0&&(K.value=_),o("update:selectedKeys",_),w&&e.multiple?o("deselect",k):o("select",k))}P.value!=="inline"&&!e.multiple&&h.value.length&&q(it)},h=H([]);W(()=>e.openKeys,function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:h.value;ge(h.value,s)||(h.value=s.slice())},{immediate:!0,deep:!0});let O;const z=s=>{clearTimeout(O),O=setTimeout(()=>{e.activeKey===void 0&&(x.value=s),o("update:activeKey",s[s.length-1])})},B=m(()=>!!e.disabled),G=m(()=>a.value==="rtl"),P=H("vertical"),X=j(!1);Be(()=>{var s;(e.mode==="inline"||e.mode==="vertical")&&v.value?(P.value="vertical",X.value=v.value):(P.value=e.mode,X.value=!1),!((s=r==null?void 0:r.mode)===null||s===void 0)&&s.value&&(P.value=r.mode.value)});const U=m(()=>P.value==="inline"),q=s=>{h.value=s,o("update:openKeys",s),o("openChange",s)},se=H(h.value),ue=j(!1);W(h,()=>{U.value&&(se.value=h.value)},{immediate:!0}),W(U,()=>{if(!ue.value){ue.value=!0;return}U.value?h.value=se.value:q(it)},{immediate:!0});const ee=m(()=>({[`${u.value}`]:!0,[`${u.value}-root`]:!0,[`${u.value}-${P.value}`]:!0,[`${u.value}-inline-collapsed`]:X.value,[`${u.value}-rtl`]:G.value,[`${u.value}-${e.theme}`]:!0})),te=m(()=>d()),ce=m(()=>({horizontal:{name:`${te.value}-slide-up`},inline:Yt(`${te.value}-motion-collapse`),other:{name:`${te.value}-zoom-big`}}));yt(!0);const V=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];const y=[],w=i.value;return s.forEach(_=>{const{key:k,childrenEventKeys:F}=w.get(_);y.push(k,...V(Ce(F)))}),y},pe=s=>{var y;o("click",s),Y(s),(y=r==null?void 0:r.onClick)===null||y===void 0||y.call(r)},I=(s,y)=>{var w;const _=((w=M.value[s])===null||w===void 0?void 0:w.childrenEventKeys)||[];let k=h.value.filter(F=>F!==s);if(y)k.push(s);else if(P.value!=="inline"){const F=V(Ce(_));k=De(k.filter(E=>!F.includes(E)))}ge(h,k)||q(k)},A=(s,y)=>{i.value.set(s,y),i.value=new Map(i.value)},L=s=>{i.value.delete(s),i.value=new Map(i.value)},J=H(0),ne=m(()=>{var s;return e.expandIcon||t.expandIcon||!((s=r==null?void 0:r.expandIcon)===null||s===void 0)&&s.value?y=>{let w=e.expandIcon||t.expandIcon;return w=typeof w=="function"?w(y):w,ye(w,{class:`${u.value}-submenu-expand-icon`},!1)}:null});return pn({prefixCls:u,activeKeys:x,openKeys:h,selectedKeys:K,changeActiveKeys:z,disabled:B,rtl:G,mode:P,inlineIndent:m(()=>e.inlineIndent),subMenuCloseDelay:m(()=>e.subMenuCloseDelay),subMenuOpenDelay:m(()=>e.subMenuOpenDelay),builtinPlacements:m(()=>e.builtinPlacements),triggerSubMenuAction:m(()=>e.triggerSubMenuAction),getPopupContainer:m(()=>e.getPopupContainer),inlineCollapsed:X,theme:m(()=>e.theme),siderCollapsed:$,defaultMotions:m(()=>C.value?ce.value:null),motion:m(()=>C.value?e.motion:null),overflowDisabled:j(void 0),onOpenChange:I,onItemClick:pe,registerMenuInfo:A,unRegisterMenuInfo:L,selectedSubMenuKeys:N,expandIcon:ne,forceSubMenuRender:m(()=>e.forceSubMenuRender),rootClassName:c}),()=>{var s,y;const w=p.value||at((s=t.default)===null||s===void 0?void 0:s.call(t)),_=J.value>=w.length-1||P.value!=="horizontal"||e.disabledOverflow,k=P.value!=="horizontal"||e.disabledOverflow?w:w.map((E,oe)=>g(Oe,{key:E.key,overflowDisabled:oe>J.value},{default:()=>E})),F=((y=t.overflowedIndicator)===null||y===void 0?void 0:y.call(t))||g(mn,null,null);return f(g(be,T(T({},l),{},{onMousedown:e.onMousedown,prefixCls:`${u.value}-overflow`,component:"ul",itemComponent:he,class:[ee.value,l.class,c.value],role:"menu",id:e.id,data:k,renderRawItem:E=>E,renderRawRest:E=>{const oe=E.length,Ie=oe?w.slice(-oe):null;return g(we,null,[g(ve,{eventKey:Se,key:Se,title:F,disabled:_,internalPopupClose:oe===0},{default:()=>Ie}),g(Ze,null,{default:()=>[g(ve,{eventKey:Se,key:Se,title:F,disabled:_,internalPopupClose:oe===0},{default:()=>Ie})]})])},maxCount:P.value!=="horizontal"||e.disabledOverflow?be.INVALIDATE:be.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:E=>{J.value=E}}),{default:()=>[g(Lt,{to:"body"},{default:()=>[g("div",{style:{display:"none"},"aria-hidden":!0},[g(Ze,null,{default:()=>[k]})])]})]}))}}});ae.install=function(e){return e.component(ae.name,ae),e.component(he.name,he),e.component(ve.name,ve),e.component(Pe.name,Pe),e.component(Ke.name,Ke),e};ae.Item=he;ae.Divider=Pe;ae.SubMenu=ve;ae.ItemGroup=Ke;export{Vn as D,mn as E,ae as M,he as _,Wn as u};
