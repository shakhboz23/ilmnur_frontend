import{aU as u,b0 as r}from"./C6-MAy6b.js";import{s as o}from"./DyE-Ov24.js";import{V as s,$ as p,a4 as d,S as i}from"./Dg7Bj1Dn.js";var b={root:function(a){var l=a.instance,n=a.props;return["p-radiobutton p-component",{"p-highlight":l.checked,"p-disabled":n.disabled,"p-invalid":n.invalid,"p-variant-filled":n.variant?n.variant==="filled":l.$primevue.config.inputStyle==="filled"}]},box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},c=u.extend({name:"radiobutton",classes:b}),h={name:"BaseRadioButton",extends:o,props:{value:null,modelValue:null,binary:Boolean,name:{type:String,default:null},variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:c,provide:function(){return{$parentInstance:this}}},f={name:"RadioButton",extends:h,emits:["update:modelValue","change","focus","blur"],methods:{getPTOptions:function(a){return this.ptm(a,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(a){if(!this.disabled&&!this.readonly){var l=this.binary?!this.checked:this.value;this.$emit("update:modelValue",l),this.$emit("change",a)}},onFocus:function(a){this.$emit("focus",a)},onBlur:function(a){this.$emit("blur",a)}},computed:{checked:function(){return this.modelValue!=null&&(this.binary?!!this.modelValue:r.equals(this.modelValue,this.value))}}},m=["data-p-highlight","data-p-disabled"],y=["id","value","name","checked","tabindex","disabled","readonly","aria-labelledby","aria-label"];function g(e,a,l,n,v,t){return s(),p("div",i({class:e.cx("root")},t.getPTOptions("root"),{"data-p-highlight":t.checked,"data-p-disabled":e.disabled}),[d("input",i({id:e.inputId,type:"radio",class:[e.cx("input"),e.inputClass],style:e.inputStyle,value:e.value,name:e.name,checked:t.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onFocus:a[0]||(a[0]=function(){return t.onFocus&&t.onFocus.apply(t,arguments)}),onBlur:a[1]||(a[1]=function(){return t.onBlur&&t.onBlur.apply(t,arguments)}),onChange:a[2]||(a[2]=function(){return t.onChange&&t.onChange.apply(t,arguments)})},t.getPTOptions("input")),null,16,y),d("div",i({class:e.cx("box")},t.getPTOptions("box")),[d("div",i({class:e.cx("icon")},t.getPTOptions("icon")),null,16)],16)],16,m)}f.render=g;export{f as default};