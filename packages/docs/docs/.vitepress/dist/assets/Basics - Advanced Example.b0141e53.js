import{_ as m,r as a,o as d,c as i,a as s,d as t}from"./app.90a06da7.js";const u=[{component:"button",slot:"\u2212",events:{click:(o,{deleteRow:e})=>e()},dynamicProps:["disabled"],disabled:(o,{rowIndex:e,formData:l})=>e===l.length,componentClasses:"delete-button",span:"20px"},{id:"type",label:"Type",component:"select",slot:[{component:"option",value:"",slot:"Select one",disabled:!0},{component:"option",value:"personal",slot:"Personal"},{component:"option",value:"work",slot:"Work"}]},{id:"comment",label:"Comment",component:"input"},{id:"amount",label:"Amount",component:"input",type:"number",parseInput:o=>Number(o)},{id:"paid for",label:"Paid for",component:"input",type:"checkbox",defaultValue:!1,span:"100px"}],_={data(){return{schema:u,formData:[]}}},f=t("strong",null,"Expenses",-1),b=t("br",null,null,-1),v=t("br",null,null,-1);function x(o,e,l,B,n,h){const c=a("BlitzListForm"),p=a("CodeBlock");return d(),i("div",null,[f,b,v,s(c,{schema:n.schema,modelValue:n.formData,"onUpdate:modelValue":e[0]||(e[0]=r=>n.formData=r)},null,8,["schema","modelValue"]),s(p,{content:`// formData
${JSON.stringify(n.formData,void 0,2)}`},null,8,["content"])])}var y=m(_,[["render",x]]);export{y as default};
