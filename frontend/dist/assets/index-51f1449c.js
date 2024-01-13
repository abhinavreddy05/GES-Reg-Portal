import{C}from"./index-4cbf1849.js";import{I as u}from"./index-b0417868.js";import{D as S,S as I}from"./index-1068f994.js";import{P as N,_ as F}from"./Justify-80c0545d.js";import{_ as b,r as _,o as n,c as i,b as s,f as p,e,t as l,p as m,g as z,d as A,S as $,M as E,N as T}from"./index-cb420f34.js";import"./micro-task-a4f781e6.js";import"./index-89a357f5.js";import"./tabs-45239596.js";let g={primary:"#4669FA",secondary:"#A0AEC0",danger:"#F1595C",black:"#111112",warning:"#FA916B",info:"#0CE7FA",light:"#475569",success:"#50C793","gray-f7":"#F7F8FC",dark:"#1E293B","dark-gray":"#0F172A",gray:"#68768A",gray2:"#EEF1F9","dark-light":"#CBD5E1",purple:"#A3A1FB"};function v(o,c){var r=Math.round(Math.min(Math.max(c||1,0),1)*255);return o+r.toString(16).toUpperCase()}const P={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],chartOptions:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:[g.primary],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}};g.info,v(g.info,.16);g.info,v(g.info,.16);const B={components:{Pagination:N,Dropdown:S,Icon:u,MenuItem:I},data(){return{shapeLine4:P,current:1,perpage:6,pageRange:5,searchTerm:"",teamtable:[{customer:{name:"Registration",deg:"Ux designer"},status:"complete"},{customer:{name:"Payment",deg:"Ux designer"},status:"progress"},{customer:{name:"Travel",deg:"Ux designer"},status:"progress"},{customer:{name:"Kit",deg:"Ux designer"},status:"progress"},{customer:{name:"Accomodation",deg:"Ux designer"},status:"progress"},{customer:{name:"Certificate",deg:"Ux designer"},status:"progress"}],columns:[{field:"customer"},{field:"status"}]}}},L={class:"-mx-6 -mb-6"},O={key:0,class:"flex items-center min-w-[150px]"},D={class:"text-sm text-slate-600 dark:text-slate-300 capitalize"},U={key:1,class:"block min-w-[140px] text-left"},M={class:"inline-block text-center mx-auto py-1"},j={key:0,class:"flex items-center space-x-3 rtl:space-x-reverse"},J=e("span",{class:"h-[6px] w-[6px] bg-danger-500 rounded-full inline-block ring-4 ring-opacity-30 ring-danger-500"},null,-1),R=e("span",null,"In progress",-1),V=[J,R],W={key:1,class:"flex items-center space-x-3 rtl:space-x-reverse"},X=e("span",{class:"h-[6px] w-[6px] bg-success-500 rounded-full inline-block ring-4 ring-opacity-30 ring-success-500"},null,-1),Y=e("span",null,"Complete",-1),G=[X,Y],H={class:"py-4 px-3 justify-center hidden"};function K(o,c,r,y,t,w){const d=_("Pagination"),x=_("vue-good-table");return n(),i("div",L,[s(x,{columns:t.columns,styleClass:" vgt-table lesspadding v-middle table-head borderless  rounded-md ",rows:t.teamtable,"pagination-options":{enabled:!0,perPage:t.perpage},"sort-options":{enabled:!1}},{"table-row":p(a=>[a.column.field=="customer"?(n(),i("span",O,[e("span",D,l(a.row.customer.name),1)])):m("",!0),a.column.field=="status"?(n(),i("span",U,[e("span",M,[a.row.status==="progress"?(n(),i("span",j,V)):m("",!0),a.row.status==="complete"?(n(),i("span",W,G)):m("",!0)])])):m("",!0)]),"pagination-bottom":p(a=>[e("div",H,[s(d,{total:50,current:t.current,"per-page":t.perpage,pageRange:t.pageRange,onPageChanged:c[0]||(c[0]=f=>t.current=f),pageChanged:a.pageChanged,perPageChanged:a.perPageChanged},{default:p(()=>[z(" > ")]),_:2},1032,["current","per-page","pageRange","pageChanged","perPageChanged"])])]),_:1},8,["columns","rows","pagination-options"])])}const q=b(B,[["render",K]]),Q={components:{Card:C,Icon:u,Teamtable:q,Justify:F},data(){return{data:null,notice:null,loading:!0}},mounted(){this.fetchData()},methods:{fetchData(){const o=JSON.parse(localStorage.getItem("user")),c=localStorage.getItem("accessToken");A.get("https://api-ges.ecell-iitkgp.org/student/",{headers:{Authorization:`JWT ${c}`,Accept:"application/json"},params:{id:o.id}}).then(r=>{this.data=r.data.user,this.notice=r.data.notice,console.log(this.data,this.notice),this.loading=!1}).catch(r=>{console.error("There was an error!",r),this.loading=!1,window.location.href="/student/register"})}}},Z={key:0,class:"loading-indicator"},ee={key:1,class:"space-y-5 profile-page"},te={class:"space-y-5 profile-page"},se=$('<div class="profiel-wrap px-[35px] pb-10 pt-9 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1] h-[120px] bg-center bg-[url(&#39;../../assets/images/logo/banner.png&#39;)]"><div class="profile-box flex-none md:text-start text-center"><div class="md:flex items-end md:space-x-6 rtl:space-x-reverse"><div class="flex-1"><div class="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]"></div><div class="text-sm font-light text-slate-600 dark:text-slate-400"></div></div></div></div></div>',1),ae={class:"grid grid-cols-12 gap-6"},oe={class:"lg:col-span-4 col-span-12"},le={class:"list space-y-8"},ne={class:"flex space-x-3 rtl:space-x-reverse"},ie={class:"flex-none text-2xl text-slate-600 dark:text-slate-300"},re={class:"flex-1"},ce=e("div",{class:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"}," Name ",-1),de={href:"tel:0189749676767",class:"text-base text-slate-600 dark:text-slate-50"},pe={class:"flex space-x-3 rtl:space-x-reverse"},xe={class:"flex-none text-2xl text-slate-600 dark:text-slate-300"},_e={class:"flex-1"},ge=e("div",{class:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"}," EMAIL ",-1),me={href:"mailto:someone@example.com",class:"text-base text-slate-600 dark:text-slate-50"},fe={class:"flex space-x-3 rtl:space-x-reverse"},he={class:"flex-none text-2xl text-slate-600 dark:text-slate-300"},ue={class:"flex-1"},be=e("div",{class:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"}," PHONE ",-1),ve={href:"tel:0189749676767",class:"text-base text-slate-600 dark:text-slate-50"},ye={class:"flex space-x-3 rtl:space-x-reverse"},we={class:"flex-none text-2xl text-slate-600 dark:text-slate-300"},ke={class:"flex-1"},Ce=e("div",{class:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"}," College ",-1),Se={class:"text-base text-slate-600 dark:text-slate-50"},Ie={class:"flex space-x-3 rtl:space-x-reverse"},Ne={class:"flex-none text-2xl text-slate-600 dark:text-slate-300"},Fe={class:"flex-1"},ze=e("div",{class:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"}," LOCATION ",-1),Ae={class:"text-base text-slate-600 dark:text-slate-50"},$e={class:"lg:col-span-8 col-span-12"},Ee={className:"grid grid-cols-12 gap-6"},Te={className:"lg:col-span-4 col-span-12"},Pe={className:"lg:col-span-8 col-span-12"},Be={className:"overflow-x-auto -mx-6"},Le={className:"inline-block min-w-full align-middle"},Oe={className:"overflow-hidden "},De={className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700"},Ue={className:"dark:text-slate-300 bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700 flex flex-col gap-4 justify-center align-middle"},Me={class:"table-td w-36 pl-4"},je={class:"table-td"};function Je(o,c,r,y,t,w){const d=_("Icon"),x=_("Card"),a=_("Justify"),f=_("Teamtable");return t.loading?(n(),i("div",Z,"Loading...")):(n(),i("div",ee,[e("div",te,[se,e("div",ae,[e("div",oe,[s(x,{title:"Info"},{default:p(()=>[e("ul",le,[e("li",ne,[e("div",ie,[s(d,{icon:"heroicons:user"})]),e("div",re,[ce,e("a",de,l(t.data.full_name),1)])]),e("li",pe,[e("div",xe,[s(d,{icon:"heroicons:envelope"})]),e("div",_e,[ge,e("a",me,l(t.data.email),1)])]),e("li",fe,[e("div",he,[s(d,{icon:"heroicons:phone-arrow-up-right"})]),e("div",ue,[be,e("a",ve,l(t.data.phone),1)])]),e("li",ye,[e("div",we,[s(d,{icon:"heroicons:building-library"})]),e("div",ke,[Ce,e("div",Se,l(t.data.college_name),1)])]),e("li",Ie,[e("div",Ne,[s(d,{icon:"heroicons:map"})]),e("div",Fe,[ze,e("div",Ae,l(t.data.address)+", "+l(t.data.state),1)])])])]),_:1})]),e("div",$e,[s(x,{title:"GES 2024"},{default:p(()=>[s(a)]),_:1})])]),e("div",Ee,[e("div",Te,[s(x,{title:"Status"},{default:p(()=>[s(f,{className:" justify-center"})]),_:1})]),e("div",Pe,[s(x,{title:"Notice"},{default:p(()=>[e("div",Be,[e("div",Le,[e("div",Oe,[e("table",De,[e("tbody",Ue,[(n(!0),i(E,null,T(t.notice,(h,k)=>(n(),i("tr",{key:k},[e("td",Me,l(h.date),1),e("td",je,l(h.notice),1)]))),128))])])])])])]),_:1})])])])]))}const qe=b(Q,[["render",Je]]);export{qe as default};