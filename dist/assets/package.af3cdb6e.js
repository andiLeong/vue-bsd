import{a7 as C,o as t,d as s,F as g,e as w,C as u,i as v,I as x,b as e,k as O,h,w as p,J as k,p as P,T as S,r as f,u as D,t as y,f as $}from"./vendor.e8a4f362.js";import{_ as b}from"./index.bcb090cc.js";const E={emits:["refetch"],props:{items:{required:!0,type:Array},targetElement:{required:!1}},data(){return{page:1}},methods:{handleScrolledToBottom(o){!o||(console.log("bottom"),this.page++,this.$emit("refetch",this.page))}}},I={key:2};function N(o,n,a,m,d,c){const _=C("observe-visibility");return t(),s(g,null,[a.targetElement?v("",!0):(t(!0),s(g,{key:0},w(a.items,i=>(t(),s("div",{key:i.id},[u(o.$slots,"item",{item:i})]))),128)),a.targetElement=="table"?(t(!0),s(g,{key:1},w(a.items,i=>(t(),s("tr",{key:i.id},[u(o.$slots,"item",{item:i})]))),128)):v("",!0),u(o.$slots,"loading"),a.items.length?x((t(),s("span",I,null,512)),[[_,c.handleScrolledToBottom]]):v("",!0)],64)}var q=b(E,[["render",N]]);const B={},T={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},V=e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),z=e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),j=[V,z];function A(o,n){return t(),s("svg",T,j)}var L=b(B,[["render",A]]);const M={props:{position:{required:!1,default:""},classes:{required:!1},id:{required:!0}},data(){return{isOpen:!1}},computed:{},watch:{isOpen(o){o&&document.addEventListener("click",this.closeIfClickedOutside)}},methods:{closeIfClickedOutside(o){o.target.closest("#"+this.id)||(this.isOpen=!1,document.removeEventListener("click",this.closeIfClickedOutside))}}},F=["id"],H=["aria-expanded"];function J(o,n,a,m,d,c){return t(),s("div",{class:"dropdown relative",id:a.id},[e("div",{class:"dropdown-trigger",onClick:n[0]||(n[0]=O(_=>d.isOpen=!d.isOpen,["prevent"])),"aria-haspopup":"true","aria-expanded":d.isOpen},[u(o.$slots,"trigger",{},void 0,!0)],8,H),h(S,{name:"pop-out-quick"},{default:p(()=>[x(e("ul",{class:P(["dropdown-menu absolute mt-2 py-2 rounded shadow bg-white text-gray-700 z-10",a.classes])},[u(o.$slots,"default",{},void 0,!0)],2),[[k,d.isOpen]])]),_:3})],8,F)}var R=b(M,[["render",J],["__scopeId","data-v-0a4a410a"]]);const G={key:0,class:"min-w-full divide-y divide-gray-200 mb-14"},K=e("thead",{class:"bg-gray-100"},[e("tr",null,[e("th",{scope:"col",class:"table-head"},"Package Number"),e("th",{scope:"col",class:"table-head"},"Price"),e("th",{scope:"col",class:"table-head"},"Status"),e("th",{scope:"col",class:"table-head"},"Payment"),e("th",{scope:"col",class:"relative px-6 py-3"},[e("span",{class:"sr-only"},"Action")])])],-1),Q={class:"bg-white divide-y divide-gray-200"},U={class:"px-6 py-4 whitespace-nowrap"},W={class:"flex flex-col"},X={class:"text-sm font-medium text-gray-900"},Y={class:"text-sm text-gray-500"},Z=$(" includes "),ee={class:"text-green-500"},te=$(" tracking orders "),se={class:"px-6 py-4 whitespace-nowrap"},oe={class:"text-gray-500"},ae={class:"px-6 py-4 whitespace-nowrap"},ie={key:0,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"},ne={key:1,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"},re={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},le={key:0},de={key:1},ce={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"},_e=e("button",{class:"hover:text-blue-500"},"...",-1),ue=["href"],he=["href"],pe={colspan:"5"},me={class:"flex justify-center my-4"},fe={key:1,class:"my-10 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-lime-200 text-center text-md"},ge={key:2,class:"animate-pulse flex shadow rounded-md p-4"},ve=e("div",{class:"flex-1 space-y-6"},[e("div",{class:"h-60 bg-gray-200 rounded"})],-1),xe=[ve],ye={setup(o){const n=f([]),a=f(!1),m=f(1),d=D(),c=f(!1);function _(i){i>m.value||(i!==1&&(c.value=!0),axios.get(`/api/package?page=${i}`).then(r=>{r.data.next_page_url===null&&(a.value=!0),n.value.push(...r.data.data),m.value=r.data.last_page}).catch(r=>{r.response.status==401&&d.dispatch("logout"),registrationErrors.value=r.response.data.errors,console.log(r.response.data.errors)}))}return _(1),(i,r)=>n.value.length>0?(t(),s("table",G,[K,e("tbody",Q,[h(q,{items:n.value,onRefetch:_,targetElement:"table"},{item:p(({item:l})=>[e("td",U,[e("div",W,[e("div",X,y(l.number),1),e("div",Y,[Z,e("span",ee,y(l.tracking_count),1),te])])]),e("td",se,[e("div",oe,y(l.price),1)]),e("td",ae,[l.status==1?(t(),s("span",ie," Delivered ")):(t(),s("span",ne," Pending "))]),e("td",re,[l.is_paid?(t(),s("span",le,"Paid")):(t(),s("span",de,"Not Paid"))]),e("td",ce,[h(R,{classes:"right-7",id:`bsd_${l.number}`},{trigger:p(()=>[_e]),default:p(()=>[e("li",null,[e("a",{href:`slip/${l.id}/create`,class:"dropdown-item"},"Payment",8,ue)]),e("li",null,[e("a",{href:`/package/${l.id}/tracking`,class:"dropdown-item"},"Items",8,he)])]),_:2},1032,["id"])])]),loading:p(()=>[x(e("tr",null,[e("td",pe,[e("div",me,[h(L,{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-sky-600"})])])],512),[[k,a.value===!1&&c.value===!0]])]),_:1},8,["items"])])])):a.value?(t(),s("div",fe," No Packages at the moment ! ")):(t(),s("div",ge,xe))}},be={class:"flex flex-col pt-10 max-w-7xl mx-auto my-10"},we={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},ke={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},$e={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},Pe={setup(o){return(n,a)=>(t(),s("div",be,[e("div",we,[e("div",ke,[e("div",$e,[h(ye)])])])]))}};export{Pe as default};