import{s as D}from"./BfXMZmbu.js";import{s as T}from"./nOgztPZe.js";import{aU as B,be as H,b0 as c,aW as m,bh as U}from"./dGlScG6Q.js";import{S as o,a3 as A,ar as _,V as d,$ as f,F as v,ac as C,a4 as y,aa as K,W as g,a0 as b,ad as p,ae as k,a5 as F,D as w,X as L,ap as x,E as N,ao as R}from"./Dg7Bj1Dn.js";import{s as E}from"./D2GSvSv4.js";import"./D-SuCNWA.js";var G={root:"p-panelmenu p-component",panel:"p-panelmenu-panel",header:function(e){var t=e.instance,a=e.item;return["p-panelmenu-header",{"p-highlight":t.isItemActive(a)&&!!a.items,"p-disabled":t.isItemDisabled(a)}]},headerContent:"p-panelmenu-header-content",headerAction:"p-panelmenu-header-action",headerIcon:"p-menuitem-icon",headerLabel:"p-menuitem-text",toggleableContent:"p-toggleable-content",menuContent:"p-panelmenu-content",menu:"p-panelmenu-root-list",menuitem:function(e){var t=e.instance,a=e.processedItem;return["p-menuitem",{"p-focus":t.isItemFocused(a),"p-disabled":t.isItemDisabled(a)}]},content:"p-menuitem-content",action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text",submenuIcon:"p-submenu-icon",submenu:"p-submenu-list",separator:"p-menuitem-separator"},q=B.extend({name:"panelmenu",classes:G}),z={name:"BasePanelMenu",extends:E,props:{model:{type:Array,default:null},expandedKeys:{type:Object,default:null},multiple:{type:Boolean,default:!1},tabindex:{type:Number,default:0}},style:q,provide:function(){return{$parentInstance:this}}},V={name:"PanelMenuSub",hostName:"PanelMenu",extends:E,emits:["item-toggle"],props:{panelId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:-1}},methods:{getItemId:function(e){return"".concat(this.panelId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,a){return e&&e.item?c.getItemValue(e.item[t],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,t,a){return this.ptm(e,{context:{item:t,index:a,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t)}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return c.isNotEmpty(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-toggle",{processedItem:t,expanded:!this.isItemActive(t)})},onItemToggle:function(e){this.$emit("item-toggle",e)},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(a){return t.isItemVisible(a)&&t.getItemProp(a,"separator")}).length+1},getMenuItemProps:function(e,t){return{action:o({class:this.cx("action"),tabindex:-1,"aria-hidden":!0},this.getPTOptions("action",e,t)),icon:o({class:[this.cx("icon"),this.getItemProp(e,"icon")]},this.getPTOptions("icon",e,t)),label:o({class:this.cx("label")},this.getPTOptions("label",e,t)),submenuicon:o({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",e,t))}}},components:{ChevronRightIcon:T,ChevronDownIcon:D},directives:{ripple:U}},W=["tabindex"],X=["id","aria-label","aria-expanded","aria-level","aria-setsize","aria-posinset","data-p-focused","data-p-disabled"],J=["onClick"],Q=["href","target"];function Y(n,e,t,a,s,i){var u=A("PanelMenuSub",!0),l=_("ripple");return d(),f("ul",{class:k(n.cx("submenu")),tabindex:t.tabindex},[(d(!0),f(v,null,C(t.items,function(r,h){return d(),f(v,{key:i.getItemKey(r)},[i.isItemVisible(r)&&!i.getItemProp(r,"separator")?(d(),f("li",o({key:0,id:i.getItemId(r),class:[n.cx("menuitem",{processedItem:r}),i.getItemProp(r,"class")],style:i.getItemProp(r,"style"),role:"treeitem","aria-label":i.getItemLabel(r),"aria-expanded":i.isItemGroup(r)?i.isItemActive(r):void 0,"aria-level":t.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(h)},i.getPTOptions("menuitem",r,h),{"data-p-focused":i.isItemFocused(r),"data-p-disabled":i.isItemDisabled(r)}),[y("div",o({class:n.cx("content"),onClick:function(j){return i.onItemClick(j,r)}},i.getPTOptions("content",r,h)),[t.templates.item?(d(),g(b(t.templates.item),{key:1,item:r.item,root:!1,active:i.isItemActive(r),hasSubmenu:i.isItemGroup(r),label:i.getItemLabel(r),props:i.getMenuItemProps(r,h)},null,8,["item","active","hasSubmenu","label","props"])):K((d(),f("a",o({key:0,href:i.getItemProp(r,"url"),class:n.cx("action"),target:i.getItemProp(r,"target"),tabindex:"-1","aria-hidden":"true"},i.getPTOptions("action",r,h)),[i.isItemGroup(r)?(d(),f(v,{key:0},[t.templates.submenuicon?(d(),g(b(t.templates.submenuicon),o({key:0,class:n.cx("submenuIcon"),active:i.isItemActive(r)},i.getPTOptions("submenuIcon",r,h)),null,16,["class","active"])):(d(),g(b(i.isItemActive(r)?"ChevronDownIcon":"ChevronRightIcon"),o({key:1,class:n.cx("submenuIcon")},i.getPTOptions("submenuIcon",r,h)),null,16,["class"]))],64)):p("",!0),t.templates.itemicon?(d(),g(b(t.templates.itemicon),{key:1,item:r.item,class:k([n.cx("icon"),i.getItemProp(r,"icon")])},null,8,["item","class"])):i.getItemProp(r,"icon")?(d(),f("span",o({key:2,class:[n.cx("icon"),i.getItemProp(r,"icon")]},i.getPTOptions("icon",r,h)),null,16)):p("",!0),y("span",o({class:n.cx("label")},i.getPTOptions("label",r,h)),F(i.getItemLabel(r)),17)],16,Q)),[[l]])],16,J),w(N,o({name:"p-toggleable-content"},n.ptm("transition")),{default:L(function(){return[K(y("div",o({class:n.cx("toggleableContent")},n.ptm("toggleableContent")),[i.isItemVisible(r)&&i.isItemGroup(r)?(d(),g(u,o({key:0,id:i.getItemId(r)+"_list",role:"group",panelId:t.panelId,focusedItemId:t.focusedItemId,items:r.items,level:t.level+1,templates:t.templates,activeItemPath:t.activeItemPath,onItemToggle:i.onItemToggle,pt:n.pt,unstyled:n.unstyled},n.ptm("submenu")),null,16,["id","panelId","focusedItemId","items","level","templates","activeItemPath","onItemToggle","pt","unstyled"])):p("",!0)],16),[[x,i.isItemActive(r)]])]}),_:2},1040)],16,X)):p("",!0),i.isItemVisible(r)&&i.getItemProp(r,"separator")?(d(),f("li",o({key:1,style:i.getItemProp(r,"style"),class:[n.cx("separator"),i.getItemProp(r,"class")],role:"separator"},n.ptm("separator")),null,16)):p("",!0)],64)}),128))],10,W)}V.render=Y;function Z(n,e){return ne(n)||te(n,e)||ee(n,e)||$()}function $(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(n,e){if(n){if(typeof n=="string")return S(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(n,e)}}function S(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}function te(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var a,s,i,u,l=[],r=!0,h=!1;try{if(i=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;r=!1}else for(;!(r=(a=i.call(t)).done)&&(l.push(a.value),l.length!==e);r=!0);}catch(I){h=!0,s=I}finally{try{if(!r&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(h)throw s}}return l}}function ne(n){if(Array.isArray(n))return n}var M={name:"PanelMenuList",hostName:"PanelMenu",extends:E,emits:["item-toggle","header-focus"],props:{panelId:{type:String,default:null},items:{type:Array,default:null},templates:{type:Object,default:null},expandedKeys:{type:Object,default:null}},searchTimeout:null,searchValue:null,data:function(){return{focused:!1,focusedItem:null,activeItemPath:[]}},watch:{expandedKeys:function(e){this.autoUpdateActiveItemPath(e)}},mounted:function(){this.autoUpdateActiveItemPath(this.expandedKeys)},methods:{getItemProp:function(e,t){return e&&e.item?c.getItemValue(e.item[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.parentKey})},isItemGroup:function(e){return c.isNotEmpty(e.items)},onFocus:function(e){this.focused=!0,this.focusedItem=this.focusedItem||(this.isElementInPanel(e,e.relatedTarget)?this.findFirstItem():this.findLastItem())},onBlur:function(){this.focused=!1,this.focusedItem=null,this.searchValue=""},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&c.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onArrowDownKey:function(e){var t=c.isNotEmpty(this.focusedItem)?this.findNextItem(this.focusedItem):this.findFirstItem();this.changeFocusedItem({originalEvent:e,processedItem:t,focusOnNext:!0}),e.preventDefault()},onArrowUpKey:function(e){var t=c.isNotEmpty(this.focusedItem)?this.findPrevItem(this.focusedItem):this.findLastItem();this.changeFocusedItem({originalEvent:e,processedItem:t,selfCheck:!0}),e.preventDefault()},onArrowLeftKey:function(e){var t=this;if(c.isNotEmpty(this.focusedItem)){var a=this.activeItemPath.some(function(s){return s.key===t.focusedItem.key});a?this.activeItemPath=this.activeItemPath.filter(function(s){return s.key!==t.focusedItem.key}):this.focusedItem=c.isNotEmpty(this.focusedItem.parent)?this.focusedItem.parent:this.focusedItem,e.preventDefault()}},onArrowRightKey:function(e){var t=this;if(c.isNotEmpty(this.focusedItem)){var a=this.isItemGroup(this.focusedItem);if(a){var s=this.activeItemPath.some(function(i){return i.key===t.focusedItem.key});s?this.onArrowDownKey(e):(this.activeItemPath=this.activeItemPath.filter(function(i){return i.parentKey!==t.focusedItem.parentKey}),this.activeItemPath.push(this.focusedItem))}e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),e.preventDefault()},onEndKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),e.preventDefault()},onEnterKey:function(e){if(c.isNotEmpty(this.focusedItem)){var t=m.findSingle(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]')),a=t&&(m.findSingle(t,'[data-pc-section="action"]')||m.findSingle(t,"a,button"));a?a.click():t&&t.click()}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onItemToggle:function(e){var t=e.processedItem,a=e.expanded;this.expandedKeys?this.$emit("item-toggle",{item:t.item,expanded:a}):(this.activeItemPath=this.activeItemPath.filter(function(s){return s.parentKey!==t.parentKey}),a&&this.activeItemPath.push(t)),this.focusedItem=t,m.focus(this.$el)},isElementInPanel:function(e,t){var a=e.currentTarget.closest('[data-pc-section="panel"]');return a&&a.contains(t)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)))},isVisibleItem:function(e){return!!e&&(e.level===0||this.isItemActive(e))&&this.isItemVisible(e)},isValidItem:function(e){return!!e&&!this.isItemDisabled(e)&&!this.getItemProp(e,"separator")},findFirstItem:function(){var e=this;return this.visibleItems.find(function(t){return e.isValidItem(t)})},findLastItem:function(){var e=this;return c.findLast(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItem:function(e){var t=this,a=this.visibleItems.findIndex(function(i){return i.key===e.key}),s=a<this.visibleItems.length-1?this.visibleItems.slice(a+1).find(function(i){return t.isValidItem(i)}):void 0;return s||e},findPrevItem:function(e){var t=this,a=this.visibleItems.findIndex(function(i){return i.key===e.key}),s=a>0?c.findLast(this.visibleItems.slice(0,a),function(i){return t.isValidItem(i)}):void 0;return s||e},searchItems:function(e,t){var a=this;this.searchValue=(this.searchValue||"")+t;var s=null,i=!1;if(c.isNotEmpty(this.focusedItem)){var u=this.visibleItems.findIndex(function(l){return l.key===a.focusedItem.key});s=this.visibleItems.slice(u).find(function(l){return a.isItemMatched(l)}),s=c.isEmpty(s)?this.visibleItems.slice(0,u).find(function(l){return a.isItemMatched(l)}):s}else s=this.visibleItems.find(function(l){return a.isItemMatched(l)});return c.isNotEmpty(s)&&(i=!0),c.isEmpty(s)&&c.isEmpty(this.focusedItem)&&(s=this.findFirstItem()),c.isNotEmpty(s)&&this.changeFocusedItem({originalEvent:e,processedItem:s,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItem:function(e){var t=e.originalEvent,a=e.processedItem,s=e.focusOnNext,i=e.selfCheck,u=e.allowHeaderFocus,l=u===void 0?!0:u;c.isNotEmpty(this.focusedItem)&&this.focusedItem.key!==a.key?(this.focusedItem=a,this.scrollInView()):l&&this.$emit("header-focus",{originalEvent:t,focusOnNext:s,selfCheck:i})},scrollInView:function(){var e=m.findSingle(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]'));e&&e.scrollIntoView&&e.scrollIntoView({block:"nearest",inline:"start"})},autoUpdateActiveItemPath:function(e){var t=this;this.activeItemPath=Object.entries(e||{}).reduce(function(a,s){var i=Z(s,2),u=i[0],l=i[1];if(l){var r=t.findProcessedItemByItemKey(u);r&&a.push(r)}return a},[])},findProcessedItemByItemKey:function(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(t=t||a===0&&this.processedItems,!t)return null;for(var s=0;s<t.length;s++){var i=t[s];if(this.getItemProp(i,"key")===e)return i;var u=this.findProcessedItemByItemKey(e,i.items,a+1);if(u)return u}},createProcessedItems:function(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=[];return e&&e.forEach(function(l,r){var h=(i!==""?i+"_":"")+r,I={item:l,index:r,level:a,key:h,parent:s,parentKey:i};I.items=t.createProcessedItems(l.items,a+1,I,h),u.push(I)}),u},flatItems:function(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e&&e.forEach(function(s){t.isVisibleItem(s)&&(a.push(s),t.flatItems(s.items,a))}),a}},computed:{processedItems:function(){return this.createProcessedItems(this.items||[])},visibleItems:function(){return this.flatItems(this.processedItems)},focusedItemId:function(){return c.isNotEmpty(this.focusedItem)?"".concat(this.panelId,"_").concat(this.focusedItem.key):null}},components:{PanelMenuSub:V}};function ie(n,e,t,a,s,i){var u=A("PanelMenuSub");return d(),g(u,o({id:t.panelId+"_list",class:n.cx("menu"),role:"tree",tabindex:-1,"aria-activedescendant":s.focused?i.focusedItemId:void 0,panelId:t.panelId,focusedItemId:s.focused?i.focusedItemId:void 0,items:i.processedItems,templates:t.templates,activeItemPath:s.activeItemPath,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemToggle:i.onItemToggle,pt:n.pt,unstyled:n.unstyled},n.ptm("menu")),null,16,["id","class","aria-activedescendant","panelId","focusedItemId","items","templates","activeItemPath","onFocus","onBlur","onKeydown","onItemToggle","pt","unstyled"])}M.render=ie;function P(n){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(n)}function O(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,a)}return t}function ae(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?O(Object(t),!0).forEach(function(a){re(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function re(n,e,t){return e=se(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function se(n){var e=le(n,"string");return P(e)=="symbol"?e:String(e)}function le(n,e){if(P(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var a=t.call(n,e||"default");if(P(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var ue={name:"PanelMenu",extends:z,emits:["update:expandedKeys","panel-open","panel-close"],data:function(){return{id:this.$attrs.id,activeItem:null,activeItems:[]}},watch:{"$attrs.id":function(e){this.id=e||H()}},mounted:function(){this.id=this.id||H()},methods:{getItemProp:function(e,t){return e?c.getItemValue(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,t,a){return this.ptm(e,{context:{index:a,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t)}})},isItemActive:function(e){return this.expandedKeys?this.expandedKeys[this.getItemProp(e,"key")]:this.multiple?this.activeItems.some(function(t){return c.equals(e,t)}):c.equals(e,this.activeItem)},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return c.equals(e,this.activeItem)},getPanelId:function(e){return"".concat(this.id,"_").concat(e)},getPanelKey:function(e){return this.getPanelId(e)},getHeaderId:function(e){return"".concat(this.getPanelId(e),"_header")},getContentId:function(e){return"".concat(this.getPanelId(e),"_content")},onHeaderClick:function(e,t){if(this.isItemDisabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.changeActiveItem(e,t),m.focus(e.currentTarget)},onHeaderKeyDown:function(e,t){switch(e.code){case"ArrowDown":this.onHeaderArrowDownKey(e);break;case"ArrowUp":this.onHeaderArrowUpKey(e);break;case"Home":this.onHeaderHomeKey(e);break;case"End":this.onHeaderEndKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onHeaderEnterKey(e,t);break}},onHeaderArrowDownKey:function(e){var t=m.getAttribute(e.currentTarget,"data-p-highlight")===!0?m.findSingle(e.currentTarget.nextElementSibling,'[data-pc-section="menu"]'):null;t?m.focus(t):this.updateFocusedHeader({originalEvent:e,focusOnNext:!0}),e.preventDefault()},onHeaderArrowUpKey:function(e){var t=this.findPrevHeader(e.currentTarget.parentElement)||this.findLastHeader(),a=m.getAttribute(t,"data-p-highlight")===!0?m.findSingle(t.nextElementSibling,'[data-pc-section="menu"]'):null;a?m.focus(a):this.updateFocusedHeader({originalEvent:e,focusOnNext:!1}),e.preventDefault()},onHeaderHomeKey:function(e){this.changeFocusedHeader(e,this.findFirstHeader()),e.preventDefault()},onHeaderEndKey:function(e){this.changeFocusedHeader(e,this.findLastHeader()),e.preventDefault()},onHeaderEnterKey:function(e,t){var a=m.findSingle(e.currentTarget,'[data-pc-section="headeraction"]');a?a.click():this.onHeaderClick(e,t),e.preventDefault()},findNextHeader:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=t?e:e.nextElementSibling,s=m.findSingle(a,'[data-pc-section="header"]');return s?m.getAttribute(s,"data-p-disabled")?this.findNextHeader(s.parentElement):s:null},findPrevHeader:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=t?e:e.previousElementSibling,s=m.findSingle(a,'[data-pc-section="header"]');return s?m.getAttribute(s,"data-p-disabled")?this.findPrevHeader(s.parentElement):s:null},findFirstHeader:function(){return this.findNextHeader(this.$el.firstElementChild,!0)},findLastHeader:function(){return this.findPrevHeader(this.$el.lastElementChild,!0)},updateFocusedHeader:function(e){var t=e.originalEvent,a=e.focusOnNext,s=e.selfCheck,i=t.currentTarget.closest('[data-pc-section="panel"]'),u=s?m.findSingle(i,'[data-pc-section="header"]'):a?this.findNextHeader(i):this.findPrevHeader(i);u?this.changeFocusedHeader(t,u):a?this.onHeaderHomeKey(t):this.onHeaderEndKey(t)},changeActiveItem:function(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(!this.isItemDisabled(t)){var s=this.isItemActive(t),i=s?"panel-close":"panel-open";this.activeItem=a?t:this.activeItem&&c.equals(t,this.activeItem)?null:t,this.multiple&&(this.activeItems.some(function(u){return c.equals(t,u)})?this.activeItems=this.activeItems.filter(function(u){return!c.equals(t,u)}):this.activeItems.push(t)),this.changeExpandedKeys({item:t,expanded:!s}),this.$emit(i,{originalEvent:e,item:t})}},changeExpandedKeys:function(e){var t=e.item,a=e.expanded,s=a===void 0?!1:a;if(this.expandedKeys){var i=ae({},this.expandedKeys);s?i[t.key]=!0:delete i[t.key],this.$emit("update:expandedKeys",i)}},changeFocusedHeader:function(e,t){t&&m.focus(t)},getMenuItemProps:function(e,t){return{icon:o({class:[this.cx("headerIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("headerIcon",e,t)),label:o({class:this.cx("headerLabel")},this.getPTOptions("headerLabel",e,t))}}},components:{PanelMenuList:M,ChevronRightIcon:T,ChevronDownIcon:D}},oe=["id"],ce=["id","tabindex","aria-label","aria-expanded","aria-controls","aria-disabled","onClick","onKeydown","data-p-highlight","data-p-disabled"],de=["href"],me=["id","aria-labelledby"];function he(n,e,t,a,s,i){var u=A("PanelMenuList");return d(),f("div",o({id:s.id,class:n.cx("root")},n.ptm("root")),[(d(!0),f(v,null,C(n.model,function(l,r){return d(),f(v,{key:i.getPanelKey(r)},[i.isItemVisible(l)?(d(),f("div",o({key:0,style:i.getItemProp(l,"style"),class:[n.cx("panel"),i.getItemProp(l,"class")]},n.ptm("panel")),[y("div",o({id:i.getHeaderId(r),class:[n.cx("header",{item:l}),i.getItemProp(l,"headerClass")],tabindex:i.isItemDisabled(l)?-1:n.tabindex,role:"button","aria-label":i.getItemLabel(l),"aria-expanded":i.isItemActive(l),"aria-controls":i.getContentId(r),"aria-disabled":i.isItemDisabled(l),onClick:function(I){return i.onHeaderClick(I,l)},onKeydown:function(I){return i.onHeaderKeyDown(I,l)}},i.getPTOptions("header",l,r),{"data-p-highlight":i.isItemActive(l),"data-p-disabled":i.isItemDisabled(l)}),[y("div",o({class:n.cx("headerContent")},i.getPTOptions("headerContent",l,r)),[n.$slots.item?(d(),g(b(n.$slots.item),{key:1,item:l,root:!0,active:i.isItemActive(l),hasSubmenu:i.getItemProp(l,"items"),label:i.getItemLabel(l),props:i.getMenuItemProps(l,r)},null,8,["item","active","hasSubmenu","label","props"])):(d(),f("a",o({key:0,href:i.getItemProp(l,"url"),class:n.cx("headerAction"),tabindex:-1},i.getPTOptions("headerAction",l,r)),[i.getItemProp(l,"items")?R(n.$slots,"submenuicon",{key:0,active:i.isItemActive(l)},function(){return[(d(),g(b(i.isItemActive(l)?"ChevronDownIcon":"ChevronRightIcon"),o({class:n.cx("submenuIcon")},i.getPTOptions("submenuIcon",l,r)),null,16,["class"]))]}):p("",!0),n.$slots.headericon?(d(),g(b(n.$slots.headericon),{key:1,item:l,class:k([n.cx("headerIcon"),i.getItemProp(l,"icon")])},null,8,["item","class"])):i.getItemProp(l,"icon")?(d(),f("span",o({key:2,class:[n.cx("headerIcon"),i.getItemProp(l,"icon")]},i.getPTOptions("headerIcon",l,r)),null,16)):p("",!0),y("span",o({class:n.cx("headerLabel")},i.getPTOptions("headerLabel",l,r)),F(i.getItemLabel(l)),17)],16,de))],16)],16,ce),w(N,o({name:"p-toggleable-content"},n.ptm("transition")),{default:L(function(){return[K(y("div",o({id:i.getContentId(r),class:n.cx("toggleableContent"),role:"region","aria-labelledby":i.getHeaderId(r)},n.ptm("toggleableContent")),[i.getItemProp(l,"items")?(d(),f("div",o({key:0,class:n.cx("menuContent")},n.ptm("menuContent")),[w(u,{panelId:i.getPanelId(r),items:i.getItemProp(l,"items"),templates:n.$slots,expandedKeys:n.expandedKeys,onItemToggle:i.changeExpandedKeys,onHeaderFocus:i.updateFocusedHeader,pt:n.pt,unstyled:n.unstyled},null,8,["panelId","items","templates","expandedKeys","onItemToggle","onHeaderFocus","pt","unstyled"])],16)):p("",!0)],16,me),[[x,i.isItemActive(l)]])]}),_:2},1040)],16)):p("",!0)],64)}),128))],16,oe)}ue.render=he;export{ue as default};
