var W=Object.defineProperty,z=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var E=(t,l,s)=>l in t?W(t,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[l]=s,q=(t,l)=>{for(var s in l||(l={}))J.call(l,s)&&E(t,s,l[s]);if(X)for(var s of X(l))K.call(l,s)&&E(t,s,l[s]);return t},M=(t,l)=>z(t,G(l));import{o as n,d,p as Y,t as p,i as x,b as e,F as A,e as N,E as R,R as Q,a as Z,C as F,c as H,w as V,r as c,u as ee,K as se,k as ae,h as u,g as i,L as m,f as y}from"./vendor.e8a4f362.js";import{c as te,a as v,u as le,b as _}from"./object.0b360f5b.js";import{B as k}from"./BaseInput.4ed820f8.js";import{_ as I}from"./index.0426234a.js";import{P as oe}from"./PrimaryButton.6e5ad2c7.js";import{A as re}from"./Alert.0468f80b.js";const ne={props:{label:{type:String,default:""},modelValue:{type:[String,Number],default:""},labelClass:{type:String,default:""},options:{type:Array,required:!0},error:{type:String,default:""}}},ie=["value"],de=e("option",{value:"",selected:"",disabled:""},"Please select one",-1),ue=["value"],ce={key:1,class:"validation-error","aria-live":"assertive"};function pe(t,l,s,b,$,h){return n(),d(A,null,[s.label?(n(),d("label",{key:0,class:Y(s.labelClass)},p(s.label),3)):x("",!0),e("select",R({class:"field",value:s.modelValue},M(q({},t.$attrs),{onChange:r=>{t.$emit("update:modelValue",r.target.value)}})),[de,(n(!0),d(A,null,N(s.options,r=>(n(),d("option",{value:r,key:r},p(r),9,ue))),128))],16,ie),s.error?(n(),d("p",ce,p(s.error),1)):x("",!0)],64)}var D=I(ne,[["render",pe]]);const me={props:q({},Q.props),computed:{isExternal(){return typeof this.to=="string"&&this.to.startsWith("http")}}},ve=["href"];function _e(t,l,s,b,$,h){const r=Z("router-link");return h.isExternal?(n(),d("a",{key:0,href:t.to},[F(t.$slots,"default")],8,ve)):(n(),H(r,R({key:1},t.$props,{class:"internal-link"}),{default:V(()=>[F(t.$slots,"default")]),_:3},16))}var be=I(me,[["render",_e]]);const ge={class:"pt-4"},fe={class:"min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"},ye={class:"px-4 md:px-12 sm:mx-auto mx-2"},he={class:"dark:bg-gray-700 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},xe=y(" hey, successfully regisaterd your user name is "),Ve=e("br",null,null,-1),ke={class:"font-bold"},$e={class:"space-y-8 divide-y divide-gray-200"},we={class:"pt-8"},Ce=e("div",null,[e("h3",{class:"text-lg leading-6 font-medium text-gray-900 dark:text-gray-50"}," Account Information "),e("p",{class:"mt-1 text-sm text-gray-500 dark:text-gray-200"}," Use a permanent address where you can receive mail. ")],-1),Se={class:"mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"},Be={class:"sm:col-span-3"},je={class:"sm:col-span-3"},qe={class:"sm:col-span-6"},Ae={class:"sm:col-span-6"},Le={class:"sm:col-span-3"},Pe={class:"sm:col-span-3"},Ue={class:"pt-5"},Xe={class:"flex justify-end"},Ee={class:"mt-2 dark:text-gray-200"},Me=y(" have an account? click "),Ne=y(" here "),Re=y("to login "),Fe={class:"mb-2"},Ge={setup(t){const l=c(["OT","EM","WM","SG"]),s=c(["air","ship"]),b=c(""),$=c(te({phone:v().required().matches(/^[0-9]+$/,"Must be only digits").min(11,"Must be exactly 11 digits").max(11,"Must be exactly 11 digits"),password:v().required().min(6),location:v().required(),option:v().required(),name:v().required().min(3),street:v().required()})),{handleSubmit:h,errors:r}=le({validationSchema:$}),{value:w}=_("phone"),{value:C}=_("name"),{value:L}=_("location"),{value:P}=_("option"),{value:S}=_("password"),{value:B}=_("street"),g=c(!1),j=c({}),U=c(h(f=>{O(f),console.log("registering",f)}));ee(),se();function O(f){g.value=!0,axios.post("api/register",f).then(a=>{g.value=!1,b.value=a.data.username,console.log(a.data.username)}).catch(a=>{g.value=!1,j.value=a.response.data.errors,console.log(a.response.data.errors)})}return(f,a)=>(n(),d("div",ge,[e("div",fe,[e("div",ye,[e("div",he,[b.value?(n(),H(re,{key:0},{default:V(()=>[xe,Ve,e("span",ke,p(b.value),1)]),_:1})):x("",!0),e("form",{onSubmit:a[6]||(a[6]=ae((...o)=>U.value&&U.value(...o),["prevent"])),class:"space-y-8 divide-y divide-gray-200"},[e("div",$e,[e("div",we,[Ce,e("div",Se,[e("div",Be,[u(k,{labelClass:"base-label",placeHolder:"John Doe",class:"mt-1 base-input",label:"Name",type:"name",modelValue:i(C),"onUpdate:modelValue":a[0]||(a[0]=o=>m(C)?C.value=o:null),error:i(r).name},null,8,["modelValue","error"])]),e("div",je,[u(k,{labelClass:"base-label",placeHolder:"xxxxxxxxxx",class:"mt-1 base-input",label:"Phone",type:"text",modelValue:i(w),"onUpdate:modelValue":a[1]||(a[1]=o=>m(w)?w.value=o:null),error:i(r).phone},null,8,["modelValue","error"])]),e("div",qe,[u(k,{labelClass:"base-label",placeHolder:"Your strong password",class:"mt-1 base-input",label:"Password",type:"password",modelValue:i(S),"onUpdate:modelValue":a[2]||(a[2]=o=>m(S)?S.value=o:null),error:i(r).password},null,8,["modelValue","error"])]),e("div",Ae,[u(k,{labelClass:"base-label",placeHolder:"XXXX street , XXX city",class:"mt-1 base-input",label:"Address",type:"text",modelValue:i(B),"onUpdate:modelValue":a[3]||(a[3]=o=>m(B)?B.value=o:null),error:i(r).street},null,8,["modelValue","error"])]),e("div",Le,[u(D,{labelClass:"base-label",class:"mt-1 base-input",label:"Location",options:l.value,modelValue:"","onUpdate:modelValue":a[4]||(a[4]=o=>m(L)?L.value=o:null),error:i(r).location},null,8,["options","modelValue","error"])]),e("div",Pe,[u(D,{labelClass:"base-label",class:"mt-1 base-input",label:"Options",options:s.value,modelValue:"","onUpdate:modelValue":a[5]||(a[5]=o=>m(P)?P.value=o:null),error:i(r).option},null,8,["options","modelValue","error"])])])])]),e("div",Ue,[e("div",Xe,[u(oe,{isLoading:g.value,class:"w-full"},{default:V(()=>[y(p(g.value?"Registering":"Register"),1)]),_:1},8,["isLoading"])])])],32),e("div",Ee,[Me,u(be,{class:"text-red-500",to:{name:"login"}},{default:V(()=>[Ne]),_:1}),Re]),e("div",Fe,[j.value?(n(!0),d(A,{key:0},N(j.value,(o,T)=>(n(),d("p",{class:"validation-error",key:T},p(o[0]),1))),128)):x("",!0)])])])])]))}};export{Ge as default};
