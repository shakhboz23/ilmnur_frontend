import{aU as Z,aW as u,bf as k,bo as q,bh as N,b0 as L,be as $}from"./rmVoKyAr.js";import{s as Y}from"./CGOXWSkS.js";import{s as C}from"./xpujLuAn.js";import{s as J}from"./jszmGgYI.js";import{s as H}from"./BTnGdwnw.js";import{s as M}from"./rE8WypVp.js";import{ar as O,V as s,$ as d,a4 as b,aa as g,S as l,W as f,a0 as p,ad as h,F as U,ac as G,a3 as A,D as z,X as D,E as Q}from"./Dg7Bj1Dn.js";import{s as ee}from"./CcuHWpcG.js";import{s as te}from"./CQqcvSgt.js";import"./Dr_hoa05.js";var ie={mask:function(e){var i=e.instance;return["p-galleria-mask p-component-overlay p-component-overlay-enter",{"p-ripple-disabled":i.$primevue.config.ripple===!1}]},root:function(e){var i=e.instance,n=i.$attrs.showThumbnails&&i.getPositionClass("p-galleria-thumbnails",i.$attrs.thumbnailsPosition),r=i.$attrs.showIndicators&&i.getPositionClass("p-galleria-indicators",i.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":i.$attrs.fullScreen,"p-galleria-indicator-onitem":i.$attrs.showIndicatorsOnItem,"p-galleria-item-nav-onhover":i.$attrs.showItemNavigatorsOnHover&&!i.$attrs.fullScreen},n,r]},closeButton:"p-galleria-close p-link",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemWrapper:"p-galleria-item-wrapper",itemContainer:"p-galleria-item-container",previousItemButton:function(e){var i=e.instance;return["p-galleria-item-prev p-galleria-item-nav p-link",{"p-disabled":i.isNavBackwardDisabled()}]},previousItemIcon:"p-galleria-item-prev-icon",item:"p-galleria-item",nextItemButton:function(e){var i=e.instance;return["p-galleria-item-next p-galleria-item-nav p-link",{"p-disabled":i.isNavForwardDisabled()}]},nextItemIcon:"p-galleria-item-next-icon",caption:"p-galleria-caption",indicators:"p-galleria-indicators p-reset",indicator:function(e){var i=e.instance,n=e.index;return["p-galleria-indicator",{"p-highlight":i.isIndicatorItemActive(n)}]},indicatorButton:"p-link",thumbnailWrapper:"p-galleria-thumbnail-wrapper",thumbnailContainer:"p-galleria-thumbnail-container",previousThumbnailButton:function(e){var i=e.instance;return["p-galleria-thumbnail-prev p-link",{"p-disabled":i.isNavBackwardDisabled()}]},previousThumbnailIcon:"p-galleria-thumbnail-prev-icon",thumbnailItemsContainer:"p-galleria-thumbnail-items-container",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:function(e){var i=e.instance,n=e.index,r=e.activeIndex;return["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":r===n,"p-galleria-thumbnail-item-active":i.isItemActive(n),"p-galleria-thumbnail-item-start":i.firstItemAciveIndex()===n,"p-galleria-thumbnail-item-end":i.lastItemActiveIndex()===n}]},thumbnailItemContent:"p-galleria-thumbnail-item-content",nextThumbnailButton:function(e){var i=e.instance;return["p-galleria-thumbnail-next p-link",{"p-disabled":i.isNavForwardDisabled()}]},nextThumbnailIcon:"p-galleria-thumbnail-next-icon"},ne=Z.extend({name:"galleria",classes:ie}),ae={name:"BaseGalleria",extends:C,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:"bottom"},verticalThumbnailViewPortHeight:{type:String,default:"300px"},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:"bottom"},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:ne,provide:function(){return{$parentInstance:this}}};function y(t){return le(t)||se(t)||oe(t)||re()}function re(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(t,e){if(t){if(typeof t=="string")return B(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return B(t,e)}}function se(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function le(t){if(Array.isArray(t))return B(t)}function B(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var W={name:"GalleriaItem",hostName:"Galleria",extends:C,emits:["start-slideshow","stop-slideshow","update:activeIndex"],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit("start-slideshow")},methods:{getIndicatorPTOptions:function(e){return{context:{highlighted:this.activeIndex===e}}},next:function(){var e=this.activeIndex+1,i=this.circular&&this.value.length-1===this.activeIndex?0:e;this.$emit("update:activeIndex",i)},prev:function(){var e=this.activeIndex!==0?this.activeIndex-1:0,i=this.circular&&this.activeIndex===0?this.value.length-1:e;this.$emit("update:activeIndex",i)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},navBackward:function(e){this.stopSlideShow(),this.prev(),e&&e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow(),this.next(),e&&e.cancelable&&e.preventDefault()},onIndicatorClick:function(e){this.stopSlideShow(),this.$emit("update:activeIndex",e)},onIndicatorMouseEnter:function(e){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit("update:activeIndex",e))},onIndicatorKeyDown:function(e,i){switch(e.code){case"Enter":case"NumpadEnter":case"Space":this.stopSlideShow(),this.$emit("update:activeIndex",i),e.preventDefault();break;case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"Tab":this.onTabKey();break;case"ArrowDown":case"ArrowUp":case"PageUp":case"PageDown":e.preventDefault();break}},onRightKey:function(){var e=y(u.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,i+1===e.length?e.length-1:i+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=y(u.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,e.length-1)},onTabKey:function(){var e=y(u.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),i=e.findIndex(function(a){return u.getAttribute(a,"data-p-highlight")===!0}),n=u.findSingle(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]'),r=e.findIndex(function(a){return a===n.parentElement});e[r].children[0].tabIndex="-1",e[i].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var e=y(u.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),i=u.findSingle(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]');return e.findIndex(function(n){return n===i.parentElement})},changedFocusedIndicator:function(e,i){var n=y(u.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));n[e].children[0].tabIndex="-1",n[i].children[0].tabIndex="0",n[i].children[0].focus()},isIndicatorItemActive:function(e){return this.activeIndex===e},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1},ariaSlideNumber:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,e):void 0},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0}},components:{ChevronLeftIcon:H,ChevronRightIcon:M},directives:{ripple:N}},ue=["disabled"],ce=["id","aria-label","aria-roledescription"],de=["disabled"],he=["aria-label","aria-selected","aria-controls","onClick","onMouseenter","onKeydown","data-p-highlight"],me=["tabindex"];function fe(t,e,i,n,r,a){var v=O("ripple");return s(),d("div",l({class:t.cx("itemWrapper")},t.ptm("itemWrapper")),[b("div",l({class:t.cx("itemContainer")},t.ptm("itemContainer")),[i.showItemNavigators?g((s(),d("button",l({key:0,type:"button",class:t.cx("previousItemButton"),onClick:e[0]||(e[0]=function(c){return a.navBackward(c)}),disabled:a.isNavBackwardDisabled()},t.ptm("previousItemButton"),{"data-pc-group-section":"itemnavigator"}),[(s(),f(p(i.templates.previousitemicon||"ChevronLeftIcon"),l({class:t.cx("previousItemIcon")},t.ptm("previousItemIcon")),null,16,["class"]))],16,ue)),[[v]]):h("",!0),b("div",l({id:i.id+"_item_"+i.activeIndex,class:t.cx("item"),role:"group","aria-label":a.ariaSlideNumber(i.activeIndex+1),"aria-roledescription":a.ariaSlideLabel},t.ptm("item")),[i.templates.item?(s(),f(p(i.templates.item),{key:0,item:a.activeItem},null,8,["item"])):h("",!0)],16,ce),i.showItemNavigators?g((s(),d("button",l({key:1,type:"button",class:t.cx("nextItemButton"),onClick:e[1]||(e[1]=function(c){return a.navForward(c)}),disabled:a.isNavForwardDisabled()},t.ptm("nextItemButton"),{"data-pc-group-section":"itemnavigator"}),[(s(),f(p(i.templates.nextitemicon||"ChevronRightIcon"),l({class:t.cx("nextItemIcon")},t.ptm("nextItemIcon")),null,16,["class"]))],16,de)),[[v]]):h("",!0),i.templates.caption?(s(),d("div",l({key:2,class:t.cx("caption")},t.ptm("caption")),[i.templates.caption?(s(),f(p(i.templates.caption),{key:0,item:a.activeItem},null,8,["item"])):h("",!0)],16)):h("",!0)],16),i.showIndicators?(s(),d("ul",l({key:0,ref:"indicatorContent",class:t.cx("indicators")},t.ptm("indicators")),[(s(!0),d(U,null,G(i.value,function(c,o){return s(),d("li",l({key:"p-galleria-indicator-".concat(o),class:t.cx("indicator",{index:o}),"aria-label":a.ariaPageLabel(o+1),"aria-selected":i.activeIndex===o,"aria-controls":i.id+"_item_"+o,onClick:function(I){return a.onIndicatorClick(o)},onMouseenter:function(I){return a.onIndicatorMouseEnter(o)},onKeydown:function(I){return a.onIndicatorKeyDown(I,o)}},t.ptm("indicator",a.getIndicatorPTOptions(o)),{"data-p-highlight":a.isIndicatorItemActive(o)}),[i.templates.indicator?h("",!0):(s(),d("button",l({key:0,type:"button",tabindex:i.activeIndex===o?"0":"-1",class:t.cx("indicatorButton")},t.ptm("indicatorButton",a.getIndicatorPTOptions(o))),null,16,me)),i.templates.indicator?(s(),f(p(i.templates.indicator),{key:1,index:o},null,8,["index"])):h("",!0)],16,he)}),128))],16)):h("",!0)],16)}W.render=fe;function T(t){return Ie(t)||be(t)||pe(t)||ve()}function ve(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(t,e){if(t){if(typeof t=="string")return V(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return V(t,e)}}function be(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ie(t){if(Array.isArray(t))return V(t)}function V(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var _={name:"GalleriaThumbnails",hostName:"Galleria",extends:C,emits:["stop-slideshow","update:activeIndex"],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:"300px"},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(e,i){this.d_numVisible=e,this.d_oldNumVisible=i},activeIndex:function(e,i){this.d_activeIndex=e,this.d_oldActiveItemIndex=i}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var e=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(this.d_activeIndex<=this.getMedianItemIndex()?e=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?e=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2===0?e=this.d_activeIndex*-1+this.getMedianItemIndex()+1:e=this.d_activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(e*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(e*(100/this.d_numVisible),"%, 0, 0)"),this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&u.removeClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(e){var i=this.totalShiftedItems+e;e<0&&-1*i+this.d_numVisible>this.value.length-1?i=this.d_numVisible-this.value.length:e>0&&i>0&&(i=0),this.circular&&(e<0&&this.value.length-1===this.d_activeIndex?i=0:e>0&&this.d_activeIndex===0&&(i=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&u.removeClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(i*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(i*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=i},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},getMedianItemIndex:function(){var e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1},navBackward:function(e){this.stopSlideShow();var i=this.d_activeIndex!==0?this.d_activeIndex-1:0,n=i+this.totalShiftedItems;this.d_numVisible-n-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:i;this.$emit("update:activeIndex",r),e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow();var i=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;i+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var n=this.circular&&this.value.length-1===this.d_activeIndex?0:i;this.$emit("update:activeIndex",n),e.cancelable&&e.preventDefault()},onItemClick:function(e){this.stopSlideShow();var i=e;if(i!==this.d_activeIndex){var n=i+this.totalShiftedItems,r=0;i<this.d_activeIndex?(r=this.d_numVisible-n-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!==0&&this.step(r)):(r=this.getMedianItemIndex()-n,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit("update:activeIndex",i)}},onThumbnailKeydown:function(e,i){switch((e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&(this.onItemClick(i),e.preventDefault()),e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var e=u.find(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,i+1===e.length?e.length-1:i+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=u.find(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,e.length-1)},onTabKey:function(){var e=T(u.find(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),i=e.findIndex(function(a){return u.getAttribute(a,"data-p-active")===!0}),n=u.findSingle(this.$refs.itemsContainer,'[tabindex="0"]'),r=e.findIndex(function(a){return a===n.parentElement});e[r].children[0].tabIndex="-1",e[i].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var e=T(u.find(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),i=u.findSingle(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return e.findIndex(function(n){return n===i.parentElement})},changedFocusedIndicator:function(e,i){var n=u.find(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]');n[e].children[0].tabIndex="-1",n[i].children[0].tabIndex="0",n[i].children[0].focus()},onTransitionEnd:function(){this.$refs.itemsContainer&&(document.body.setAttribute("data-p-items-hidden","true"),!this.isUnstyled&&u.addClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="")},onTouchStart:function(e){var i=e.changedTouches[0];this.startPos={x:i.pageX,y:i.pageY}},onTouchMove:function(e){e.cancelable&&e.preventDefault()},onTouchEnd:function(e){var i=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,i.pageY-this.startPos.y):this.changePageOnTouch(e,i.pageX-this.startPos.x)},changePageOnTouch:function(e,i){i<0?this.navForward(e):this.navBackward(e)},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var e;this.thumbnailsStyle=document.createElement("style"),this.thumbnailsStyle.type="text/css",u.setAttribute(this.thumbnailsStyle,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.body.appendChild(this.thumbnailsStyle)}var i=`
                #`.concat(this.containerId,` [data-pc-section="thumbnailitem"] {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=T(this.responsiveOptions);var n=L.localeComparator();this.sortedResponsiveOptions.sort(function(v,c){var o=v.breakpoint,m=c.breakpoint;return L.sort(o,m,-1,n)});for(var r=0;r<this.sortedResponsiveOptions.length;r++){var a=this.sortedResponsiveOptions[r];i+=`
                        @media screen and (max-width: `.concat(a.breakpoint,`) {
                            #`).concat(this.containerId,` .p-galleria-thumbnail-item {
                                flex: 1 0 `).concat(100/a.numVisible,`%
                            }
                        }
                    `)}}this.thumbnailsStyle.innerHTML=i},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var e=window.innerWidth,i={numVisible:this.numVisible},n=0;n<this.sortedResponsiveOptions.length;n++){var r=this.sortedResponsiveOptions[n];parseInt(r.breakpoint,10)>=e&&(i=r)}this.d_numVisible!==i.numVisible&&(this.d_numVisible=i.numVisible)}},bindDocumentListeners:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.calculatePosition()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0}},components:{ChevronLeftIcon:H,ChevronRightIcon:M,ChevronUpIcon:te,ChevronDownIcon:ee},directives:{ripple:N}};function S(t){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(t)}function E(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),i.push.apply(i,n)}return i}function P(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?E(Object(i),!0).forEach(function(n){ge(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):E(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function ge(t,e,i){return e=ye(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function ye(t){var e=Se(t,"string");return S(e)=="symbol"?e:String(e)}function Se(t,e){if(S(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e||"default");if(S(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var we=["disabled","aria-label"],xe=["data-p-active","aria-selected","aria-controls","onKeydown","data-p-galleria-thumbnail-item-current","data-p-galleria-thumbnail-item-active","data-p-galleria-thumbnail-item-start","data-p-galleria-thumbnail-item-end"],Pe=["tabindex","aria-label","aria-current","onClick"],Ae=["disabled","aria-label"];function Ce(t,e,i,n,r,a){var v=O("ripple");return s(),d("div",l({class:t.cx("thumbnailWrapper")},t.ptm("thumbnailWrapper")),[b("div",l({class:t.cx("thumbnailContainer")},t.ptm("thumbnailContainer")),[i.showThumbnailNavigators?g((s(),d("button",l({key:0,class:t.cx("previousThumbnailButton"),disabled:a.isNavBackwardDisabled(),type:"button","aria-label":a.ariaPrevButtonLabel,onClick:e[0]||(e[0]=function(c){return a.navBackward(c)})},P(P({},i.prevButtonProps),t.ptm("previousThumbnailButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(s(),f(p(i.templates.previousthumbnailicon||(i.isVertical?"ChevronUpIcon":"ChevronLeftIcon")),l({class:t.cx("previousThumbnailIcon")},t.ptm("previousThumbnailIcon")),null,16,["class"]))],16,we)),[[v]]):h("",!0),b("div",l({class:t.cx("thumbnailItemsContainer"),style:{height:i.isVertical?i.contentHeight:""}},t.ptm("thumbnailItemsContainer")),[b("div",l({ref:"itemsContainer",class:t.cx("thumbnailItems"),role:"tablist",onTransitionend:e[1]||(e[1]=function(){return a.onTransitionEnd&&a.onTransitionEnd.apply(a,arguments)}),onTouchstart:e[2]||(e[2]=function(c){return a.onTouchStart(c)}),onTouchmove:e[3]||(e[3]=function(c){return a.onTouchMove(c)}),onTouchend:e[4]||(e[4]=function(c){return a.onTouchEnd(c)})},t.ptm("thumbnailItems")),[(s(!0),d(U,null,G(i.value,function(c,o){return s(),d("div",l({key:"p-galleria-thumbnail-item-".concat(o),class:t.cx("thumbnailItem",{index:o,activeIndex:i.activeIndex}),role:"tab","data-p-active":i.activeIndex===o,"aria-selected":i.activeIndex===o,"aria-controls":i.containerId+"_item_"+o,onKeydown:function(I){return a.onThumbnailKeydown(I,o)}},t.ptm("thumbnailItem"),{"data-p-galleria-thumbnail-item-current":i.activeIndex===o,"data-p-galleria-thumbnail-item-active":a.isItemActive(o),"data-p-galleria-thumbnail-item-start":a.firstItemAciveIndex()===o,"data-p-galleria-thumbnail-item-end":a.lastItemActiveIndex()===o}),[b("div",l({class:t.cx("thumbnailItemContent"),tabindex:i.activeIndex===o?"0":"-1","aria-label":a.ariaPageLabel(o+1),"aria-current":i.activeIndex===o?"page":void 0,onClick:function(I){return a.onItemClick(o)}},t.ptm("thumbnailItemContent")),[i.templates.thumbnail?(s(),f(p(i.templates.thumbnail),{key:0,item:c},null,8,["item"])):h("",!0)],16,Pe)],16,xe)}),128))],16)],16),i.showThumbnailNavigators?g((s(),d("button",l({key:1,class:t.cx("nextThumbnailButton"),disabled:a.isNavForwardDisabled(),type:"button","aria-label":a.ariaNextButtonLabel,onClick:e[5]||(e[5]=function(c){return a.navForward(c)})},P(P({},i.nextButtonProps),t.ptm("nextThumbnailButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(s(),f(p(i.templates.nextthumbnailicon||(i.isVertical?"ChevronDownIcon":"ChevronRightIcon")),l({class:t.cx("nextThumbnailIcon")},t.ptm("nextThumbnailIcon")),null,16,["class"]))],16,Ae)),[[v]]):h("",!0)],16)],16)}_.render=Ce;function w(t){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(t)}function K(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),i.push.apply(i,n)}return i}function j(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?K(Object(i),!0).forEach(function(n){Oe(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):K(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function Oe(t,e,i){return e=ke(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function ke(t){var e=Te(t,"string");return w(e)=="symbol"?e:String(e)}function Te(t,e){if(w(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e||"default");if(w(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var X={name:"GalleriaContent",hostName:"Galleria",extends:C,inheritAttrs:!1,interval:null,emits:["activeitem-change","mask-hide"],data:function(){return{id:this.$attrs.id,activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.id":function(e){this.id=e||$()},"$attrs.value":function(e){e&&e.length<this.numVisible&&(this.numVisible=e.length)},"$attrs.activeIndex":function(e){this.activeIndex=e},"$attrs.numVisible":function(e){this.numVisible=e},"$attrs.autoPlay":function(e){e?this.startSlideShow():this.stopSlideShow()}},mounted:function(){this.id=this.id||$()},updated:function(){this.$emit("activeitem-change",this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(e){return this.ptm(e,{props:j(j({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var e=this;this.interval=setInterval(function(){var i=e.$attrs.circular&&e.$attrs.value.length-1===e.activeIndex?0:e.activeIndex+1;e.activeIndex=i},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(e,i){var n=["top","left","bottom","right"],r=n.find(function(a){return a===i});return r?"".concat(e,"-").concat(r):""},isVertical:function(){return this.$attrs.thumbnailsPosition==="left"||this.$attrs.thumbnailsPosition==="right"}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:W,GalleriaThumbnails:_,TimesIcon:J},directives:{ripple:N}};function x(t){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(t)}function F(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),i.push.apply(i,n)}return i}function R(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?F(Object(i),!0).forEach(function(n){Be(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):F(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function Be(t,e,i){return e=Ve(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Ve(t){var e=Ne(t,"string");return x(e)=="symbol"?e:String(e)}function Ne(t,e){if(x(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e||"default");if(x(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Le=["id","aria-label","aria-roledescription"],$e=["aria-label"],De=["aria-live"];function Ee(t,e,i,n,r,a){var v=A("GalleriaItem"),c=A("GalleriaThumbnails"),o=O("ripple");return t.$attrs.value&&t.$attrs.value.length>0?(s(),d("div",l({key:0,id:r.id,role:"region",class:[t.cx("root"),t.$attrs.containerClass],style:t.$attrs.containerStyle,"aria-label":t.$attrs.ariaLabel,"aria-roledescription":t.$attrs.ariaRoledescription},R(R({},t.$attrs.containerProps),a.getPTOptions("root"))),[t.$attrs.fullScreen?g((s(),d("button",l({key:0,autofocus:"",type:"button",class:t.cx("closeButton"),"aria-label":a.closeAriaLabel,onClick:e[0]||(e[0]=function(m){return t.$emit("mask-hide")})},a.getPTOptions("closeButton")),[(s(),f(p(t.$attrs.templates.closeicon||"TimesIcon"),l({class:t.cx("closeIcon")},a.getPTOptions("closeIcon")),null,16,["class"]))],16,$e)),[[o]]):h("",!0),t.$attrs.templates&&t.$attrs.templates.header?(s(),d("div",l({key:1,class:t.cx("header")},a.getPTOptions("header")),[(s(),f(p(t.$attrs.templates.header)))],16)):h("",!0),b("div",l({class:t.cx("content"),"aria-live":t.$attrs.autoPlay?"polite":"off"},a.getPTOptions("content")),[z(v,{id:r.id,activeIndex:r.activeIndex,"onUpdate:activeIndex":e[1]||(e[1]=function(m){return r.activeIndex=m}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":e[2]||(e[2]=function(m){return r.slideShowActive=m}),value:t.$attrs.value,circular:t.$attrs.circular,templates:t.$attrs.templates,showIndicators:t.$attrs.showIndicators,changeItemOnIndicatorHover:t.$attrs.changeItemOnIndicatorHover,showItemNavigators:t.$attrs.showItemNavigators,autoPlay:t.$attrs.autoPlay,onStartSlideshow:a.startSlideShow,onStopSlideshow:a.stopSlideShow,pt:t.pt,unstyled:t.unstyled},null,8,["id","activeIndex","slideShowActive","value","circular","templates","showIndicators","changeItemOnIndicatorHover","showItemNavigators","autoPlay","onStartSlideshow","onStopSlideshow","pt","unstyled"]),t.$attrs.showThumbnails?(s(),f(c,{key:0,activeIndex:r.activeIndex,"onUpdate:activeIndex":e[3]||(e[3]=function(m){return r.activeIndex=m}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":e[4]||(e[4]=function(m){return r.slideShowActive=m}),containerId:r.id,value:t.$attrs.value,templates:t.$attrs.templates,numVisible:r.numVisible,responsiveOptions:t.$attrs.responsiveOptions,circular:t.$attrs.circular,isVertical:a.isVertical(),contentHeight:t.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:t.$attrs.showThumbnailNavigators,prevButtonProps:t.$attrs.prevButtonProps,nextButtonProps:t.$attrs.nextButtonProps,onStopSlideshow:a.stopSlideShow,pt:t.pt,unstyled:t.unstyled},null,8,["activeIndex","slideShowActive","containerId","value","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","prevButtonProps","nextButtonProps","onStopSlideshow","pt","unstyled"])):h("",!0)],16,De),t.$attrs.templates&&t.$attrs.templates.footer?(s(),d("div",l({key:2,class:t.cx("footer")},a.getPTOptions("footer")),[(s(),f(p(t.$attrs.templates.footer)))],16)):h("",!0)],16,Le)):h("",!0)}X.render=Ee;var Ke={name:"Galleria",extends:ae,inheritAttrs:!1,emits:["update:activeIndex","update:visible"],container:null,mask:null,data:function(){return{containerVisible:this.visible}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&u.unblockBodyScroll(),this.mask=null,this.container&&(k.clear(this.container),this.container=null)},methods:{onBeforeEnter:function(e){k.set("modal",e,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(e){this.mask.style.zIndex=String(parseInt(e.style.zIndex,10)-1),u.blockBodyScroll(),this.focus()},onBeforeLeave:function(){!this.isUnstyled&&u.addClass(this.mask,"p-component-overlay-leave")},onAfterLeave:function(e){k.clear(e),this.containerVisible=!1,u.unblockBodyScroll()},onActiveItemChange:function(e){this.activeIndex!==e&&this.$emit("update:activeIndex",e)},maskHide:function(){this.$emit("update:visible",!1)},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},focus:function(){var e=this.container.$el.querySelector("[autofocus]");e&&e.focus()}},components:{GalleriaContent:X,Portal:Y},directives:{focustrap:q}},je=["aria-modal"];function Fe(t,e,i,n,r,a){var v=A("GalleriaContent"),c=A("Portal"),o=O("focustrap");return t.fullScreen?(s(),f(c,{key:0},{default:D(function(){return[r.containerVisible?(s(),d("div",l({key:0,ref:a.maskRef,class:[t.cx("mask"),t.maskClass],role:"dialog","aria-modal":t.fullScreen?"true":void 0},t.ptm("mask")),[z(Q,l({name:"p-galleria",onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onAfterLeave:a.onAfterLeave,appear:""},t.ptm("transition")),{default:D(function(){return[t.visible?g((s(),f(v,l({key:0,ref:a.containerRef,onMaskHide:a.maskHide,templates:t.$slots,onActiveitemChange:a.onActiveItemChange,pt:t.pt,unstyled:t.unstyled},t.$props),null,16,["onMaskHide","templates","onActiveitemChange","pt","unstyled"])),[[o]]):h("",!0)]}),_:1},16,["onBeforeEnter","onEnter","onBeforeLeave","onAfterLeave"])],16,je)):h("",!0)]}),_:1})):(s(),f(v,l({key:1,templates:t.$slots,onActiveitemChange:a.onActiveItemChange,pt:t.pt,unstyled:t.unstyled},t.$props),null,16,["templates","onActiveitemChange","pt","unstyled"]))}Ke.render=Fe;export{Ke as default};
