import{_ as r}from"./preload-helper.8b70a8dd.js";import{_ as s,B as l,C as i,D as d,E as c,G as m,H as p,r as _,o as u,c as b,a as g}from"./app.90a06da7.js";const v=l(i),h=l(d),f=l(c),w=[{id:"avatarUrl",label:"Avatar",component:"img",mode:"edit",src:e=>e,dynamicProps:["src"]},{id:"firstName",label:"First Name"},{id:"lastName",label:"Last Name"},{id:"company",label:"Company"},{id:"birthdate",label:"Birthdate",parseValue:e=>new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})},{id:"balance",label:"Balance",parseValue:e=>e.toLocaleString()}],z={setup(){const e=m([{balance:93683,birthdate:"1946-07-22",firstName:"Harper",lastName:"Nolan",company:"Tortor At Risus LLC",avatarUrl:"https://gravatar.com/avatar/8aa5e7a6220f2a87684a9f4e6286e343?s=100&d=robohash&r=x"}]);return p(async()=>{const o=(await r(()=>import("./users.93963f9e.js"),[])).default;e.value=o}),{blitzInput:v,blitzGridToggle:h,blitzPagination:f,schemaColumnsAndGrid:w,rows:e}}};function B(e,t,o,a,P,F){const n=_("BlitzTable");return u(),b("div",null,[g(n,{schemaColumns:a.schemaColumnsAndGrid,schemaGrid:a.schemaColumnsAndGrid,rows:a.rows,rowsPerPage:5,titleField:{component:"h3",slot:"Users"},searchField:{component:a.blitzInput,placeholder:"Search...",debounce:300,clearable:!0},gridToggleField:{component:a.blitzGridToggle},paginationField:{component:a.blitzPagination},rowsPerPageField:{label:"Rows per page:",component:a.blitzInput,type:"select",options:[{value:5,label:"5"},{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"}]},shownRowsInfoField:{component:"div"}},null,8,["schemaColumns","schemaGrid","rows","searchField","gridToggleField","paginationField","rowsPerPageField"])])}var G=s(z,[["render",B],["__scopeId","data-v-1bf12d00"]]);export{G as default};
