import{r as d,u as w,d as e,b as t,t as l,i as n,F as S,e as B,h as N,w as V,k as j,x as A,f as v,o as a}from"./vendor.e8a4f362.js";import{P as C}from"./PrimaryButton.e2163449.js";import"./index.edbab88f.js";const D={class:"max-w-7xl mx-auto pt-10"},F=A('<div class="bg-white dark:bg-gray-700 shadow overflow-hidden sm:rounded-lg"><div class="px-4 py-5 sm:px-6"><h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50"> Bank Account Information </h3><p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-50"> Account Details </p></div><div class="border-t border-gray-200 px-4 py-5 sm:p-0"><dl class="sm:divide-y sm:divide-gray-200"><div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt class="text-sm font-medium text-gray-500 dark:text-gray-50"> Account # </dt><dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white"> 9995-366-26565-888202 </dd></div><div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt class="text-sm font-medium text-gray-500 dark:text-gray-50"> Account Name </dt><dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white"> Ronald Tan </dd></div><div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt class="text-sm font-medium text-gray-500 dark:text-gray-50"> Bank Name </dt><dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white"> May Bank </dd></div></dl></div></div>',1),L=["onSubmit"],P={class:"space-y-8 divide-y divide-gray-200"},U=t("h3",{class:"text-lg leading-6 font-medium text-gray-900 dark:text-white"}," Upload your Slip ",-1),E={key:0,class:"mt-1 text-sm text-gray-500 dark:text-gray-50 dark:text-gray-100"},M=v(" Package Number : "),R={key:1,class:"mt-1 text-sm text-gray-500 dark:text-gray-50"},T={key:0,class:"mb-2"},q={class:"mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"},I={class:"sm:col-span-6"},$=t("div",{class:"mt-1 flex items-center"},[t("label",{for:"slip",class:"cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," Choose Slip ")],-1),z={key:0,class:"sm:col-span-6"},G=["src"],H={class:"pt-5"},J={class:"flex justify-end"},W={props:{id:{type:[String],Required:!0}},setup(h){const g=h,c=d(""),m=d(""),x=w(),i=d(!1),y=d(""),u=d(""),p=d({});function f(){axios.get(`/api/package/${g.id}`).then(s=>{c.value=s.data}).catch(s=>{console.log(s.response.status),s.response.status==401&&x.dispatch("logout"),m.value=s.response.status,console.log(s.response.status)})}function _(s){y.value=s.target.files[0]}function k(){i.value=!0;let s=new FormData;s.append("file",y.value),s.append("package_id",g.id),axios.post("/api/slip",s).then(o=>{i.value=!1,console.log(o),u.value=o.data.url}).catch(o=>{i.value=!1;let r=o.response.status;r==422&&(p.value=o.response.data.errors),r==401&&x.dispatch("logout"),console.log(r)})}return f(),(s,o)=>(a(),e("div",D,[F,t("form",{class:"space-y-8 divide-y divide-gray-200 my-10 mx-4 mb:mx-0",onSubmit:j(k,["prevent"])},[t("div",P,[t("div",null,[t("div",null,[U,c.value?(a(),e("p",E,[M,t("span",null,l(c.value.number),1)])):n("",!0),m.value?(a(),e("p",R," sorry cant fetch your data at the moment, remote server reponse with "+l(m.value),1)):n("",!0)]),p.value?(a(),e("div",T,[(a(!0),e(S,null,B(p.value,(r,b)=>(a(),e("p",{class:"validation-error",key:b},l(r[0]),1))),128))])):n("",!0),t("div",q,[t("div",I,[t("input",{type:"file",class:"hidden",id:"slip",onChange:_},null,32),$]),u.value?(a(),e("div",z,[t("img",{src:u.value,alt:"slip",class:"rounded-md h-60 w-60 dark:border dark:border-white"},null,8,G)])):n("",!0)])])]),t("div",H,[t("div",J,[N(C,{isLoading:i.value},{default:V(()=>[v(l(i.value?"Uploading":"Upload"),1)]),_:1},8,["isLoading"])])])],40,L)]))}};export{W as default};