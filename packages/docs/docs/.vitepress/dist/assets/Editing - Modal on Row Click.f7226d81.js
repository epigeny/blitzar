import{E as f}from"./VueFinalModal.esm.30e6e2d5.js";import{_ as b,B as g,D as w,G as N,L as _,r as s,o as c,c as h,a as u,n as C,j as y,F as I}from"./app.90a06da7.js";const M=g(w),v=[{id:"firstName",label:"First Name",component:"input"},{id:"lastName",label:"Last Name",component:"input"},{id:"company",label:"Company",component:"input"},{id:"birthdate",label:"Birthdate",component:"input"},{id:"balance",label:"Balance",component:"input",type:"number",parseValue:(n,{mode:e})=>e==="raw"?n.toLocaleString():n,parseInput:n=>Number(n)}],R={components:{VueFinalModal:f},setup(){const n=N([{id:"id8269187329780852",balance:93683,birthdate:"1946-07-22",firstName:"Harper",lastName:"Nolan",company:"Tortor At Risus LLC"},{id:"id44304518826349204",balance:69632,birthdate:"1945-11-27",firstName:"Whoopi",lastName:"David",company:"Ipsum Institute"},{id:"id5068577691466047",balance:75903,birthdate:"1955-10-01",firstName:"Peter",lastName:"Mendez",company:"Curabitur Dictum LLC"},{id:"id05232596295403691",balance:53509,birthdate:"1977-06-21",firstName:"Harrison",lastName:"Miller",company:"Enim Etiam Imperdiet Industries"},{id:"id23809333906635666",balance:93450,birthdate:"2017-11-27",firstName:"Wendy",lastName:"Strong",company:"Ac PC"},{id:"id7894530275645739",balance:64590,birthdate:"1975-12-10",firstName:"Kyla",lastName:"Dalton",company:"Urna Nec Luctus PC"},{id:"id9425069129254229",balance:72444,birthdate:"2001-07-31",firstName:"Aimee",lastName:"Stephens",company:"Tempus Incorporated"},{id:"id5539749518518775",balance:99856,birthdate:"1972-01-28",firstName:"Phelan",lastName:"Jennings",company:"Consectetuer Adipiscing Elit LLP"},{id:"id9413108287279646",balance:83325,birthdate:"1966-11-17",firstName:"Xena",lastName:"Emerson",company:"Mollis Foundation"},{id:"id8560871658852105",balance:50981,birthdate:"1995-07-26",firstName:"Althea",lastName:"Mcdaniel",company:"Non Foundation"},{id:"id04508174972460055",balance:97869,birthdate:"1945-10-01",firstName:"Shad",lastName:"Beard",company:"Mollis Incorporated"}]),e=_({isShowingModal:!1,editingRowData:null,remountCounter:0});function r(t){e.editingRowData=t,e.remountCounter++,e.isShowingModal=!0}function a(t){const i=t.newData,l=e.editingRowData.id,d=n.value.find(o=>o.id===l);Object.assign(d,i),e.isShowingModal=!1}function m(){const t=e.editingRowData.id,i=n.value.findIndex(l=>l.id===t);n.value.splice(i,1),e.isShowingModal=!1}return{rows:n,schemaColumnsAndGrid:v,editInfo:e,onRowClick:r,deleteEditingRow:m,saveEdits:a,blitzGridToggle:M}}};function B(n,e,r,a,m,t){const i=s("BlitzTable"),l=s("BlitzForm"),d=s("VueFinalModal");return c(),h(I,null,[u(i,{schemaColumns:a.schemaColumnsAndGrid,schemaGrid:a.schemaColumnsAndGrid,rows:a.rows,gridToggleField:{component:a.blitzGridToggle},onRowClick:e[0]||(e[0]=(o,p)=>a.onRowClick(p))},null,8,["schemaColumns","schemaGrid","rows","gridToggleField"]),u(d,{classes:"form-modal",modelValue:a.editInfo.isShowingModal,"onUpdate:modelValue":e[4]||(e[4]=o=>a.editInfo.isShowingModal=o)},{default:C(()=>[(c(),y(l,{schema:a.schemaColumnsAndGrid,modelValue:a.editInfo.editingRowData,actionButtons:["delete","edit","cancel","save"],columnCount:2,key:a.editInfo.remountCounter,onCancel:e[1]||(e[1]=o=>a.editInfo.isShowingModal=!1),onDelete:e[2]||(e[2]=()=>a.deleteEditingRow()),onSave:e[3]||(e[3]=o=>a.saveEdits(o))},null,8,["schema","modelValue"]))]),_:1},8,["modelValue"])],64)}var F=b(R,[["render",B],["__scopeId","data-v-841ef47e"]]);export{F as default};
