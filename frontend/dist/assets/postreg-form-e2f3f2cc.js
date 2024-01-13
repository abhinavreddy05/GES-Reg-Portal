import{B as ge}from"./index-a2e4edf1.js";import{T as he,c as ye,a as o,u as fe,b as t}from"./object-5cccc758.js";import{T as Se}from"./index-9adc2993.js";import{S as Ee}from"./index-89a357f5.js";import{C as Ve}from"./index-4cbf1849.js";import{_ as xe,u as ke,i as d,d as Ne,c as Pe,e as u,b as l,f as g,n as Me,w as qe,r as p,o as Ce}from"./index-cb420f34.js";import"./index-b0417868.js";const Ue={components:{Button:ge,Textinput:he,Textarea:Se,Select:Ee,Card:Ve},setup(){const c=ke(),a=[{id:1,title:"Basic Information"},{id:2,title:"Startup Details"},{id:3,title:"Additional Information"}];let h=d(0),e=ye().shape({fullName:o().required("Full name is required"),phone:o().required("Phone number is required").matches(/^[0-9]+$/,"Phone number must be numeric"),gender:o().required("Gender is required"),linkedinId:o().required("LinkedIn profile is required").url("LinkedIn profile must be a valid URL"),alumn:o().required("Alumn of IIT Kharagpur selection is required"),cofounderName:o(),cofounderPhone:o().matches(/^[0-9]+$/,"Phone number must be numeric"),cofounderEmail:o().email("Email must be a valid email"),city:o().required("City is required"),state:o().required("State is required"),country:o().required("Country is required"),startup:o().required("Startup name is required"),startupStage:o().required("Startup stage is required"),fundingStartup:o().required("Startup stage is required"),companyType:o().required("Company type is required"),companySize:o().required("Company size is required"),desc:o().required("Startup description is required"),website:o().url("Website must be a valid URL"),startupExpo:o().required("Interested in Startup Expo? is required"),interns:o().required("Interns Requirement? is required"),achieve:o(),help:o()});const{handleSubmit:y}=fe({validationSchema:e,keepValuesOnUnmount:!0}),{value:b,errorMessage:n}=t("fullName"),{value:s,errorMessage:m}=t("phone"),{value:i,errorMessage:v}=t("gender"),{value:r,errorMessage:D}=t("linkedinId"),{value:f,errorMessage:_}=t("alumn"),{value:S,errorMessage:B}=t("cofounderName"),{value:E,errorMessage:F}=t("cofounderPhone"),{value:V,errorMessage:K}=t("cofounderEmail"),{value:x,errorMessage:j}=t("city"),{value:k,errorMessage:G}=t("state"),{value:N,errorMessage:H}=t("country"),{value:P,errorMessage:R}=t("startup"),{value:M,errorMessage:J}=t("startupStage"),{value:q,errorMessage:W}=t("fundingStartup"),{value:C,errorMessage:Y}=t("companyType"),{value:U,errorMessage:Q}=t("desc"),{value:T,errorMessage:X}=t("website"),{value:I,errorMessage:Z}=t("startupExpo"),{value:O,errorMessage:$}=t("interns"),{value:w,errorMessage:ee}=t("achieve"),{value:A,errorMessage:ae}=t("help"),{value:L,errorMessage:re}=t("companySize"),le=d([{value:"yes",label:"Yes"},{value:"no",label:"No"}]),oe=d([{value:"Male",label:"Male"},{value:"Female",label:"Female"},{value:"Others",label:"Others"},{value:"Prefer not say",label:"Prefer not say"}]),te=d([{value:"Andhra Pradesh",label:"Andhra Pradesh"},{value:"Arunachal Pradesh",label:"Arunachal Pradesh"},{value:"Assam",label:"Assam"},{value:"Bihar",label:"Bihar"},{value:"Chhattisgarh",label:"Chhattisgarh"},{value:"Goa",label:"Goa"},{value:"Gujarat",label:"Gujarat"},{value:"Haryana",label:"Haryana"},{value:"Himachal Pradesh",label:"Himachal Pradesh"},{value:"Jammu and Kashmir",label:"Jammu and Kashmir"},{value:"Jharkhand",label:"Jharkhand"},{value:"Karnataka",label:"Karnataka"},{value:"Kerala",label:"Kerala"},{value:"Madhya Pradesh",label:"Madhya Pradesh"},{value:"Maharashtra",label:"Maharashtra"},{value:"Manipur",label:"Manipur"},{value:"Meghalaya",label:"Meghalaya"},{value:"Mizoram",label:"Mizoram"},{value:"Nagaland",label:"Nagaland"},{value:"Odisha",label:"Odisha"},{value:"Punjab",label:"Punjab"},{value:"Rajasthan",label:"Rajasthan"},{value:"Sikkim",label:"Sikkim"},{value:"Tamil Nadu",label:"Tamil Nadu"},{value:"Telangana",label:"Telangana"},{value:"Tripura",label:"Tripura"},{value:"Uttarakhand",label:"Uttarakhand"},{value:"Uttar Pradesh",label:"Uttar Pradesh"},{value:"West Bengal",label:"West Bengal"},{value:"Andaman and Nicobar Islands",label:"Andaman and Nicobar Islands"},{value:"Chandigarh",label:"Chandigarh"},{value:"Dadra and Nagar Haveli",label:"Dadra and Nagar Haveli"},{value:"Daman and Diu",label:"Daman and Diu"},{value:"Delhi",label:"Delhi"},{value:"Lakshadweep",label:"Lakshadweep"},{value:"Puducherry",label:"Puducherry"}]),ne=d([{value:"India",label:"India"},{value:"Sri Lanka",label:"Sri Lanka"},{value:"Nepal",label:"Nepal"},{value:"USA",label:"USA"},{value:"UK",label:"UK"},{value:"Australia",label:"Australia"},{value:"Canada",label:"Canada"}]),se=d([{value:"idea",label:"Idea"},{value:"concept",label:"Concept"},{value:"pre_seed",label:"Pre-Seed"},{value:"seed",label:"Seed"},{value:"early_stage",label:"Early Stage"},{value:"growth",label:"Growth"},{value:"expansion",label:"Expansion"},{value:"mature",label:"Mature"},{value:"exit",label:"Exit"}]),ue=d([{value:"private",label:"Private Limited"},{value:"public",label:"Public Limited"},{value:"partnership",label:"Partnership"},{value:"sole_proprietorship",label:"Sole Proprietorship"},{value:"llc",label:"Limited Liability Company (LLC)"},{value:"nonprofit",label:"Nonprofit"},{value:"cooperative",label:"Cooperative"},{value:"other",label:"Other"}]),de=d([{value:"1-10",label:"1-10 employees"},{value:"11-50",label:"11-50 employees"},{value:"51-200",label:"51-200 employees"},{value:"201-500",label:"201-500 employees"},{value:"501-1000",label:"501-1000 employees"},{value:"1001-5000",label:"1001-5000 employees"},{value:"5001-10000",label:"5001-10000 employees"},{value:"10001+",label:"10001+ employees"}]),ie=d([{value:"yes",label:"Yes"},{value:"no",label:"No"}]),me=d([{value:"yes",label:"Yes"},{value:"no",label:"No"}]),pe=y(async()=>{const z={full_name:b.value,phone:s.value,gender:i.value,linkedin_id:r.value,alumn_of_iit_kharagpur:f.value,co_founder_name:S.value,co_founder_phone:E.value,co_founder_email:V.value,address:x.value,state:k.value,country:N.value,startup_name:P.value,startup_stage:M.value,startup_fund:q.value,company_type:C.value,company_size:L.value,startup_description:U.value,website_link:T.value,interested_in_expo:I.value,intern_requirement:O.value,achievements:w.value,area_of_help:A.value};console.log(z);const ce=localStorage.getItem("accessToken"),be=JSON.parse(localStorage.getItem("user"));try{const ve=await Ne.post("https://api-ges.ecell-iitkgp.org/startup/registration",{headers:{"Content-Type":"application/json",Authorization:`JWT ${ce}`},user:be,formData:z});c.success("Form Submitted",{timeout:2e3}),window.location.href="/startup/home"}catch{c.error("Failed to submit form",{timeout:2e3})}});return{fullName:b,fullNameError:n,phone:s,phoneError:m,gender:i,genderError:v,genderOptions:oe,linkedinId:r,linkedinIdError:D,alumn:f,alumnError:_,alumnOptions:le,cofounderName:S,cofounderNameError:B,cofounderPhone:E,cofounderPhoneError:F,cofounderEmail:V,cofounderEmailError:K,city:x,cityError:j,state:k,stateError:G,stateOptions:te,country:N,countryError:H,countryOptions:ne,startup:P,startupError:R,startupStage:M,startupStageError:J,startupStageOptions:se,fundingStartup:q,fundingStartupError:W,companyType:C,companyTypeError:Y,companyTypeOptions:ue,companySize:L,companySizeError:re,companySizeOptions:de,desc:U,descError:Q,website:T,websiteError:X,startupExpo:I,startupExpoError:Z,startupExpoOptions:ie,interns:O,internsError:$,internsOptions:me,achieve:w,achieveError:ee,help:A,helpError:ae,submit:pe,steps:a,stepNumber:h}}},Te={class:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"},Ie=u("div",{class:"lg:col-span-3 md:col-span-2 col-span-1"},[u("h4",{class:"text-base text-slate-800 dark:text-slate-300 mb-6"}," Basic Details ")],-1),Oe={class:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"},we=u("div",{class:"lg:col-span-3 md:col-span-2 col-span-1"},[u("h4",{class:"text-base text-slate-800 dark:text-slate-300 mb-6"}," Startup Details ")],-1),Ae={class:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"},Le=u("div",{class:"lg:col-span-3 md:col-span-2 col-span-1"},[u("h4",{class:"text-base text-slate-800 dark:text-slate-300 mb-6"}," Additional Information ")],-1);function ze(c,a,h,e,y,b){const n=p("Textinput"),s=p("Select"),m=p("Card"),i=p("Textarea"),v=p("Button");return Ce(),Pe("div",null,[u("form",{onSubmit:a[22]||(a[22]=qe((...r)=>e.submit&&e.submit(...r),["prevent"])),class:"flex flex-col gap-4"},[l(m,{class:"content-box mt-14 border-t border-slate-100 dark:border-slate-700 p-6 mx-4 rounded-md bg-white dark:bg-slate-800"},{default:g(()=>[u("div",Te,[Ie,l(n,{label:"Full Name",type:"text",placeholder:"Full Name",modelValue:e.fullName,"onUpdate:modelValue":a[0]||(a[0]=r=>e.fullName=r),error:e.fullNameError},null,8,["modelValue","error"]),l(n,{label:"Phone",type:"text",placeholder:"Phone",modelValue:e.phone,"onUpdate:modelValue":a[1]||(a[1]=r=>e.phone=r),error:e.phoneError},null,8,["modelValue","error"]),l(s,{label:"Gender",placeholder:"Select your Gender",modelValue:e.gender,"onUpdate:modelValue":a[2]||(a[2]=r=>e.gender=r),error:e.genderError,options:e.genderOptions},null,8,["modelValue","error","options"]),l(n,{label:"LinkedIn Profile",type:"text",placeholder:"LinkedIn Profile URL",modelValue:e.linkedinId,"onUpdate:modelValue":a[3]||(a[3]=r=>e.linkedinId=r),error:e.linkedinIdError},null,8,["modelValue","error"]),l(s,{label:"Alumn of IIT Kharagpur",placeholder:"Select an option",modelValue:e.alumn,"onUpdate:modelValue":a[4]||(a[4]=r=>e.alumn=r),error:e.alumnError,options:e.alumnOptions},null,8,["modelValue","error","options"]),l(n,{label:"Cofounder Name",type:"text",placeholder:"Cofounder Name",modelValue:e.cofounderName,"onUpdate:modelValue":a[5]||(a[5]=r=>e.cofounderName=r),error:e.cofounderNameError},null,8,["modelValue","error"]),l(n,{label:"Cofounder Phone",type:"text",placeholder:"Cofounder Phone",modelValue:e.cofounderPhone,"onUpdate:modelValue":a[6]||(a[6]=r=>e.cofounderPhone=r),error:e.cofounderPhoneError},null,8,["modelValue","error"]),l(n,{label:"Cofounder Email",type:"text",placeholder:"Cofounder Email",modelValue:e.cofounderEmail,"onUpdate:modelValue":a[7]||(a[7]=r=>e.cofounderEmail=r),error:e.cofounderEmailError},null,8,["modelValue","error"]),l(n,{label:"Address (City)",type:"text",placeholder:"City",modelValue:e.city,"onUpdate:modelValue":a[8]||(a[8]=r=>e.city=r),error:e.cityError},null,8,["modelValue","error"]),l(s,{label:"State",placeholder:"State",modelValue:e.state,"onUpdate:modelValue":a[9]||(a[9]=r=>e.state=r),error:e.stateError,options:e.stateOptions},null,8,["modelValue","error","options"]),l(s,{label:"Country",placeholder:"Country",modelValue:e.country,"onUpdate:modelValue":a[10]||(a[10]=r=>e.country=r),error:e.countryError,options:e.countryOptions},null,8,["modelValue","error","options"])])]),_:1}),l(m,{class:"content-box mt-14 border-t border-slate-100 dark:border-slate-700 p-6 mx-4 rounded-md bg-white dark:bg-slate-800"},{default:g(()=>[u("div",Oe,[we,l(n,{label:"Startup Name",type:"text",placeholder:"Startup Name",modelValue:e.startup,"onUpdate:modelValue":a[11]||(a[11]=r=>e.startup=r),error:e.startupError},null,8,["modelValue","error"]),l(s,{label:"Startup Stage?",placeholder:"Stage of your Startup",modelValue:e.startupStage,"onUpdate:modelValue":a[12]||(a[12]=r=>e.startupStage=r),error:e.startupStageError,options:e.startupStageOptions},null,8,["modelValue","error","options"]),l(n,{label:"Startup Funding",type:"text",placeholder:"Startup Funding",modelValue:e.fundingStartup,"onUpdate:modelValue":a[13]||(a[13]=r=>e.fundingStartup=r),error:e.fundingStartupError},null,8,["modelValue","error"]),l(s,{label:"Company Type",placeholder:"Your company type",modelValue:e.companyType,"onUpdate:modelValue":a[14]||(a[14]=r=>e.companyType=r),error:e.companyTypeError,options:e.companyTypeOptions},null,8,["modelValue","error","options"]),l(s,{label:"Company Size",placeholder:"Select company size",modelValue:e.companySize,"onUpdate:modelValue":a[15]||(a[15]=r=>e.companySize=r),error:e.companySizeError,options:e.companySizeOptions},null,8,["modelValue","error","options"]),l(i,{label:"Startup Description",type:"text",placeholder:"Describe your startup",modelValue:e.desc,"onUpdate:modelValue":a[16]||(a[16]=r=>e.desc=r),error:e.descError},null,8,["modelValue","error"]),l(n,{label:"Website Link",type:"text",placeholder:"Startup Website",modelValue:e.website,"onUpdate:modelValue":a[17]||(a[17]=r=>e.website=r),error:e.websiteError},null,8,["modelValue","error"])])]),_:1}),l(m,{class:"content-box mt-14 border-t border-slate-100 dark:border-slate-700 p-6 mx-4 rounded-md bg-white dark:bg-slate-800"},{default:g(()=>[u("div",Ae,[Le,l(s,{label:"Interested in Startup Expo?",placeholder:"Yes/No",modelValue:e.startupExpo,"onUpdate:modelValue":a[18]||(a[18]=r=>e.startupExpo=r),error:e.startupExpoError,options:e.startupExpoOptions},null,8,["modelValue","error","options"]),l(s,{label:"Interns Requirement?",placeholder:"Yes/No",modelValue:e.interns,"onUpdate:modelValue":a[19]||(a[19]=r=>e.interns=r),error:e.internsError,options:e.internsOptions},null,8,["modelValue","error","options"]),l(i,{label:"Achievements",type:"text",placeholder:"Describe your startup's achievements",modelValue:e.achieve,"onUpdate:modelValue":a[20]||(a[20]=r=>e.achieve=r),error:e.achieveError},null,8,["modelValue","error"]),l(i,{label:"Areas of Help",type:"text",placeholder:"Looking for help in any areas?",modelValue:e.help,"onUpdate:modelValue":a[21]||(a[21]=r=>e.help=r),error:e.helpError},null,8,["modelValue","error"])])]),_:1}),u("div",{class:Me(["my-2",e.stepNumber>0?"flex justify-between":"text-right"])},[l(v,{text:"submit",btnClass:"btn-dark"})],2)],32)])}const He=xe(Ue,[["render",ze]]);export{He as default};
