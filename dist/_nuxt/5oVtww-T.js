import{s as v}from"./C08X4gtQ.js";import{s as P}from"./Bcg-GCfy.js";import{aU as w,be as c,bh as S}from"./dGlScG6Q.js";import{s as O}from"./D2GSvSv4.js";import{ar as D,V as d,$ as u,a4 as s,ao as p,S as l,a5 as g,ad as f,aa as m,W as B,a0 as j,D as E,X as I,ap as K,E as C}from"./Dg7Bj1Dn.js";import"./D-SuCNWA.js";var L={root:function(t){var o=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":o.toggleable}]},legend:"p-fieldset-legend",legendtitle:"p-fieldset-legend-text",togglericon:"p-fieldset-toggler",toggleablecontent:"p-toggleable-content",content:"p-fieldset-content"},N=w.extend({name:"fieldset",classes:L}),V={name:"BaseFieldset",extends:O,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:N,provide:function(){return{$parentInstance:this}}},k={name:"Fieldset",extends:V,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(t){this.id=t||c()},collapsed:function(t){this.d_collapsed=t}},mounted:function(){this.id=this.id||c()},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend}},directives:{ripple:S},components:{PlusIcon:P,MinusIcon:v}};function a(e){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(e)}function b(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,n)}return o}function y(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?b(Object(o),!0).forEach(function(n){A(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function A(e,t,o){return t=F(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function F(e){var t=$(e,"string");return a(t)=="symbol"?t:String(t)}function $(e,t){if(a(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t||"default");if(a(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var M=["id"],T=["id","aria-controls","aria-expanded","aria-label"],U=["id","aria-labelledby"];function _(e,t,o,n,r,i){var h=D("ripple");return d(),u("fieldset",l({class:e.cx("root")},e.ptm("root")),[s("legend",l({class:e.cx("legend")},e.ptm("legend")),[e.toggleable?f("",!0):p(e.$slots,"legend",{key:0},function(){return[s("span",l({id:r.id+"_header",class:e.cx("legendtitle")},e.ptm("legendtitle")),g(e.legend),17,M)]}),e.toggleable?m((d(),u("a",l({key:1,id:r.id+"_header",tabindex:"0",role:"button","aria-controls":r.id+"_content","aria-expanded":!r.d_collapsed,"aria-label":i.buttonAriaLabel,onClick:t[0]||(t[0]=function(){return i.toggle&&i.toggle.apply(i,arguments)}),onKeydown:t[1]||(t[1]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)})},y(y({},e.toggleButtonProps),e.ptm("toggler"))),[p(e.$slots,"togglericon",{collapsed:r.d_collapsed},function(){return[(d(),B(j(r.d_collapsed?"PlusIcon":"MinusIcon"),l({class:e.cx("togglericon")},e.ptm("togglericon")),null,16,["class"]))]}),p(e.$slots,"legend",{},function(){return[s("span",l({class:e.cx("legendtitle")},e.ptm("legendtitle")),g(e.legend),17)]})],16,T)),[[h]]):f("",!0)],16),E(C,l({name:"p-toggleable-content"},e.ptm("transition")),{default:I(function(){return[m(s("div",l({id:r.id+"_content",class:e.cx("toggleablecontent"),role:"region","aria-labelledby":r.id+"_header"},e.ptm("toggleablecontent")),[s("div",l({class:e.cx("content")},e.ptm("content")),[p(e.$slots,"default")],16)],16,U),[[K,!r.d_collapsed]])]}),_:3},16)],16)}k.render=_;export{k as default};
