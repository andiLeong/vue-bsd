var D=Object.defineProperty,O=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var L=(o,t,s)=>t in o?D(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s,M=(o,t)=>{for(var s in t||(t={}))z.call(t,s)&&L(o,s,t[s]);if(X)for(var s of X(t))G.call(t,s)&&L(o,s,t[s]);return o},N=(o,t)=>O(o,T(t));import{o as i,d,p as J,t as y,i as C,b as e,F as S,e as $,E as K,r as m,u as W,K as Y,a as Q,k as Z,h as u,g as r,L as p,w as A,f as x}from"./vendor.e8a4f362.js";import{c as ee,a as v,u as se,b}from"./object.0b360f5b.js";import{B as f}from"./BaseInput.40b204d4.js";import{_ as ae}from"./index.edbab88f.js";import{P as te}from"./PrimaryButton.e2163449.js";const le={props:{label:{type:String,default:""},modelValue:{type:[String,Number],default:""},labelClass:{type:String,default:""},options:{type:Array,required:!0},error:{type:String,default:""}}},oe=["value"],re=e("option",{value:"",selected:"",disabled:""},"Please select one",-1),ne=["value"],ie={key:1,class:"validation-error","aria-live":"assertive"};function de(o,t,s,B,j,c){return i(),d(S,null,[s.label?(i(),d("label",{key:0,class:J(s.labelClass)},y(s.label),3)):C("",!0),e("select",K({class:"field",value:s.modelValue},N(M({},o.$attrs),{onChange:n=>{o.$emit("update:modelValue",n.target.value)}})),[re,(i(!0),d(S,null,$(s.options,n=>(i(),d("option",{value:n,key:n},y(n),9,ne))),128))],16,oe),s.error?(i(),d("p",ie,y(s.error),1)):C("",!0)],64)}var E=ae(le,[["render",de]]);const ue={class:"pt-4"},ce={class:"min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"},me={class:"px-4 md:px-12 sm:mx-auto mx-2"},pe={class:"dark:bg-gray-700 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},ve={class:"space-y-8 divide-y divide-gray-200"},be={class:"pt-8"},ge=e("div",null,[e("h3",{class:"text-lg leading-6 font-medium text-gray-900 dark:text-gray-50"}," Account Information "),e("p",{class:"mt-1 text-sm text-gray-500 dark:text-gray-200"}," Use a permanent address where you can receive mail. ")],-1),_e={class:"mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"},ye={class:"sm:col-span-3"},xe={class:"sm:col-span-3"},fe={class:"sm:col-span-6"},he={class:"sm:col-span-6"},Ve={class:"sm:col-span-3"},ke={class:"sm:col-span-3"},we={class:"pt-5"},Ce={class:"flex justify-end"},Se={class:"mt-2 dark:text-gray-200"},Be=x(" have an account? click "),je=x(" here "),qe=x("to login "),Pe={class:"mb-2"},Ae={setup(o){const t=m(["OT","EM","WM","SG"]),s=m(["air","ship"]),B=m(ee({phone:v().required().matches(/^[0-9]+$/,"Must be only digits").min(11,"Must be exactly 11 digits").max(11,"Must be exactly 11 digits"),password:v().required().min(6),location:v().required(),option:v().required(),name:v().required().min(3),street:v().required()})),{handleSubmit:j,errors:c}=se({validationSchema:B}),{value:n}=b("phone"),{value:h}=b("name"),{value:q}=b("location"),{value:P}=b("option"),{value:V}=b("password"),{value:k}=b("street"),g=m(!1),w=m({}),U=m(j(_=>{H(_),console.log("registering",_)}));W();const F=Y();function H(_){g.value=!0,axios.post("api/register",_).then(()=>{g.value=!1,F.push("/login")}).catch(a=>{g.value=!1,w.value=a.response.data.errors,console.log(a.response.data.errors)})}return(_,a)=>{const R=Q("Applink");return i(),d("div",ue,[e("div",ce,[e("div",me,[e("div",pe,[e("form",{onSubmit:a[6]||(a[6]=Z((...l)=>U.value&&U.value(...l),["prevent"])),class:"space-y-8 divide-y divide-gray-200"},[e("div",ve,[e("div",be,[ge,e("div",_e,[e("div",ye,[u(f,{labelClass:"base-label",placeHolder:"John Doe",class:"mt-1 base-input",label:"Name",type:"name",modelValue:r(h),"onUpdate:modelValue":a[0]||(a[0]=l=>p(h)?h.value=l:null),error:r(c).name},null,8,["modelValue","error"])]),e("div",xe,[u(f,{labelClass:"base-label",placeHolder:"xxxxxxxxxx",class:"mt-1 base-input",label:"Phone",type:"text",modelValue:r(n),"onUpdate:modelValue":a[1]||(a[1]=l=>p(n)?n.value=l:null),error:r(c).phone},null,8,["modelValue","error"])]),e("div",fe,[u(f,{labelClass:"base-label",placeHolder:"Your strong password",class:"mt-1 base-input",label:"Password",type:"password",modelValue:r(V),"onUpdate:modelValue":a[2]||(a[2]=l=>p(V)?V.value=l:null),error:r(c).password},null,8,["modelValue","error"])]),e("div",he,[u(f,{labelClass:"base-label",placeHolder:"XXXX street , XXX city",class:"mt-1 base-input",label:"Address",type:"text",modelValue:r(k),"onUpdate:modelValue":a[3]||(a[3]=l=>p(k)?k.value=l:null),error:r(c).street},null,8,["modelValue","error"])]),e("div",Ve,[u(E,{labelClass:"base-label",class:"mt-1 base-input",label:"Location",options:t.value,modelValue:"","onUpdate:modelValue":a[4]||(a[4]=l=>p(q)?q.value=l:null),error:r(c).location},null,8,["options","modelValue","error"])]),e("div",ke,[u(E,{labelClass:"base-label",class:"mt-1 base-input",label:"Options",options:s.value,modelValue:"","onUpdate:modelValue":a[5]||(a[5]=l=>p(P)?P.value=l:null),error:r(c).option},null,8,["options","modelValue","error"])])])])]),e("div",we,[e("div",Ce,[u(te,{isLoading:g.value,class:"w-full"},{default:A(()=>[x(y(g.value?"Registering":"Register"),1)]),_:1},8,["isLoading"])])])],32),e("div",Se,[Be,u(R,{class:"text-red-500",to:{name:"login"}},{default:A(()=>[je]),_:1}),qe]),e("div",Pe,[w.value?(i(!0),d(S,{key:0},$(w.value,(l,I)=>(i(),d("p",{class:"validation-error",key:I},y(l[0]),1))),128)):C("",!0)])])])])])}}};export{Ae as default};
