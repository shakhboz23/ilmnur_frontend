import{s as g}from"./nOgztPZe.js";import{s as v}from"./D2GSvSv4.js";import{aU as B}from"./dGlScG6Q.js";import{S as a,V as r,$ as s,W as c,ae as I,a0 as h,ad as l,a5 as O,a3 as b,a4 as P,F as f,ac as S,ao as U,D as y}from"./Dg7Bj1Dn.js";import"./D-SuCNWA.js";var w={root:"p-breadcrumb p-component",menu:"p-breadcrumb-list",home:"p-breadcrumb-home",separator:"p-menuitem-separator",menuitem:function(i){var t=i.instance;return["p-menuitem",{"p-disabled":t.disabled()}]},action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text"},N=B.extend({name:"breadcrumb",classes:w}),V={name:"BaseBreadcrumb",extends:v,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:N,provide:function(){return{$parentInstance:this}}},k={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:v,props:{item:null,templates:null,index:null},methods:{onClick:function(i){this.item.command&&this.item.command({originalEvent:i,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var i=this.item,t=i.to,m=i.url,o=typeof window<"u"?window.location.pathname:"";return t===o||m===o?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var i=this;return{action:a({class:this.cx("action"),"aria-current":this.isCurrentUrl(),onClick:function(m){return i.onClick(m)}},this.ptm("action",this.ptmOptions)),icon:a({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:a({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},D=["href","target","aria-current"];function M(e,i,t,m,o,n){return n.visible()?(r(),s("li",a({key:0,class:[e.cx("menuitem"),t.item.class]},e.ptm("menuitem",n.ptmOptions)),[t.templates.item?(r(),c(h(t.templates.item),{key:1,item:t.item,label:n.label(),props:n.getMenuItemProps},null,8,["item","label","props"])):(r(),s("a",a({key:0,href:t.item.url||"#",class:e.cx("action"),target:t.item.target,"aria-current":n.isCurrentUrl(),onClick:i[0]||(i[0]=function(){return n.onClick&&n.onClick.apply(n,arguments)})},e.ptm("action",n.ptmOptions)),[t.templates&&t.templates.itemicon?(r(),c(h(t.templates.itemicon),{key:0,item:t.item,class:I(e.cx("icon",n.ptmOptions))},null,8,["item","class"])):t.item.icon?(r(),s("span",a({key:1,class:[e.cx("icon"),t.item.icon]},e.ptm("icon",n.ptmOptions)),null,16)):l("",!0),t.item.label?(r(),s("span",a({key:2,class:e.cx("label")},e.ptm("label",n.ptmOptions)),O(n.label()),17)):l("",!0)],16,D))],16)):l("",!0)}k.render=M;var R={name:"Breadcrumb",extends:V,components:{BreadcrumbItem:k,ChevronRightIcon:g}};function E(e,i,t,m,o,n){var p=b("BreadcrumbItem"),C=b("ChevronRightIcon");return r(),s("nav",a({class:e.cx("root")},e.ptm("root")),[P("ol",a({class:e.cx("menu")},e.ptm("menu")),[e.home?(r(),c(p,a({key:0,item:e.home,class:e.cx("home"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("home")),null,16,["item","class","templates","pt","unstyled"])):l("",!0),(r(!0),s(f,null,S(e.model,function(d,u){return r(),s(f,{key:d.label+"_"+u},[e.home||u!==0?(r(),s("li",a({key:0,class:e.cx("separator")},e.ptm("separator")),[U(e.$slots,"separator",{},function(){return[y(C,a({"aria-hidden":"true"},e.ptm("separatorIcon")),null,16)]})],16)):l("",!0),y(p,{item:d,index:u,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}R.render=E;export{R as default};
