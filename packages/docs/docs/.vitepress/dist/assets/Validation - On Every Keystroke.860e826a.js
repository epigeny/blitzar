import{_ as m,r as t,o as u,c as s,a as r}from"./app.90a06da7.js";const p=[{id:"name",label:"Name",component:"input",required:!0},{id:"age",label:"Age",component:"input",type:"number",parseInput:e=>Number(e),dynamicProps:["error"],error:e=>Number(e)>=18?null:"You have to be over 18!"},{id:"consent",label:"Do you agree with our terms?",component:"input",type:"checkbox",defaultValue:!1,dynamicProps:["error"],error:e=>e===!0?null:"You must accept our terms"}],i={data(){return{schema:p,formData:{}}}};function d(e,n,_,f,o,b){const a=t("BlitzForm"),l=t("CodeBlock");return u(),s("div",null,[r(a,{schema:o.schema,modelValue:o.formData,"onUpdate:modelValue":n[0]||(n[0]=c=>o.formData=c),actionButtons:["cancel","edit","save"],columnCount:3},null,8,["schema","modelValue"]),r(l,{content:`// formData
${JSON.stringify(o.formData,void 0,2)}`},null,8,["content"])])}var v=m(i,[["render",d]]);export{v as default};