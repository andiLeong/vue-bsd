import{o as a,d as t,p as c,t as u,i as o,b as m,E as f,F as p}from"./vendor.e8a4f362.js";import{_ as b}from"./index.ce267980.js";let n=5e3;function g(){return{getID:()=>(n++,n)}}const _={props:{label:{type:String,default:""},labelClass:{type:String,default:""},modelValue:{type:[String,Number],default:""},placeHolder:{type:[String]},error:{type:String,default:""}},data(){return{uuid:g().getID()}},computed:{placeHolderValue(){return this.placeHolder||this.label}}},v=["for"],y=["value","placeholder","id","aria-describedby","aria-invalid"],I=["id"];function V(l,i,e,h,r,s){return a(),t(p,null,[e.label?(a(),t("label",{key:0,for:r.uuid,class:c(e.labelClass)},u(e.label),11,v)):o("",!0),m("input",f(l.$attrs,{value:e.modelValue,placeholder:s.placeHolderValue,onInput:i[0]||(i[0]=d=>l.$emit("update:modelValue",d.target.value)),class:"field",id:r.uuid,"aria-describedby":e.error?`${r.uuid}-error`:null,"aria-invalid":e.error?!0:null}),null,16,y),e.error?(a(),t("p",{key:1,class:"validation-error",id:`${r.uuid}-error`,"aria-live":"assertive"},u(e.error),9,I)):o("",!0)],64)}var B=b(_,[["render",V]]);export{B};
