import{aU as n,b0 as s}from"./dGlScG6Q.js";import{s as o}from"./D2GSvSv4.js";import{V as p,$ as i,ao as d,a6 as l,a5 as g,S as c}from"./Dg7Bj1Dn.js";var u={root:function(t){var e=t.props,r=t.instance;return["p-badge p-component",{"p-badge-no-gutter":s.isNotEmpty(e.value)&&String(e.value).length===1,"p-badge-dot":s.isEmpty(e.value)&&!r.$slots.default,"p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warning":e.severity==="warning","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]}},v=n.extend({name:"badge",classes:u}),y={name:"BaseBadge",extends:o,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:v,provide:function(){return{$parentInstance:this}}},m={name:"Badge",extends:y};function b(a,t,e,r,f,$){return p(),i("span",c({class:a.cx("root")},a.ptm("root")),[d(a.$slots,"default",{},function(){return[l(g(a.value),1)]})],16)}m.render=b;export{m as default};
