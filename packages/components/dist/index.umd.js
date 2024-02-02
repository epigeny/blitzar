(function(l,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("vue"),require("vue-pepicons"),require("is-what"),require("@blitzar/types")):typeof define=="function"&&define.amd?define(["exports","vue","vue-pepicons","is-what","@blitzar/types"],t):(l=typeof globalThis!="undefined"?globalThis:l||self,t(l["@blitzar/components"]={},l.Vue,l.vuePepicons,l.isWhat,l.types))})(this,function(l,t,m,p,k){"use strict";var Q="",c=(e,o)=>{const n=e.__vccOpts||e;for(const[s,a]of o)n[s]=a;return n};const u=e=>(t.pushScopeId("data-v-7bbe2932"),e=e(),t.popScopeId(),e),g={key:0,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-grid"},B=[u(()=>t.createElementVNode("rect",{x:"3",y:"3",width:"7",height:"7"},null,-1)),u(()=>t.createElementVNode("rect",{x:"14",y:"3",width:"7",height:"7"},null,-1)),u(()=>t.createElementVNode("rect",{x:"14",y:"14",width:"7",height:"7"},null,-1)),u(()=>t.createElementVNode("rect",{x:"3",y:"14",width:"7",height:"7"},null,-1))],b={key:1,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-list"},$=[t.createStaticVNode('<line x1="8" y1="6" x2="21" y2="6" data-v-7bbe2932></line><line x1="8" y1="12" x2="21" y2="12" data-v-7bbe2932></line><line x1="8" y1="18" x2="21" y2="18" data-v-7bbe2932></line><line x1="3" y1="6" x2="3.01" y2="6" data-v-7bbe2932></line><line x1="3" y1="12" x2="3.01" y2="12" data-v-7bbe2932></line><line x1="3" y1="18" x2="3.01" y2="18" data-v-7bbe2932></line>',6)];var w=c(t.defineComponent({props:{modelValue:Boolean},emits:{"update:modelValue":null},setup(e){return t.defineComponent({name:"BlitzGridToggle"}),(o,n)=>(t.openBlock(),t.createElementBlock("div",{class:"blitz-grid-toggle",onClick:n[0]||(n[0]=()=>o.$emit("update:modelValue",!e.modelValue))},[e.modelValue?t.createCommentVNode("",!0):(t.openBlock(),t.createElementBlock("svg",g,B)),e.modelValue?(t.openBlock(),t.createElementBlock("svg",b,$)):t.createCommentVNode("",!0)]))}}),[["__scopeId","data-v-7bbe2932"]]),ie="";const C={xs:18,sm:24,md:32,lg:38,xl:46},V=t.defineComponent({name:"BlitzSpinner",props:{size:{type:[Number,String],default:"1em"},thickness:{type:Number,default:5}},computed:{cSize(){const e=this.size;return e in C?`${e}px`:e}}}),S=["width","height"],E=["stroke-width"];function z(e,o,n,s,a,y){return t.openBlock(),t.createElementBlock("svg",{class:"blitz-spinner",width:e.cSize,height:e.cSize,viewBox:"25 25 50 50"},[t.createElementVNode("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"},null,8,E)],8,S)}var f=c(V,[["render",z],["__scopeId","data-v-50ec12ff"]]),ne="";const I=e=>(t.pushScopeId("data-v-6d84cf18"),e=e(),t.popScopeId(),e),N={key:1,class:t.normalizeClass("blitz-icon _kind-error")},_=[I(()=>t.createElementVNode("svg",{style:{color:"inherit"},viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10 2C11.1046 2 12 2.89543 12 4V11C12 12.1046 11.1046 13 10 13C8.89543 13 8 12.1046 8 11V4C8 2.89543 8.89543 2 10 2Z",fill:"currentColor"}),t.createElementVNode("path",{d:"M12 16C12 17.1046 11.1046 18 10 18C8.89543 18 8 17.1046 8 16C8 14.8954 8.89543 14 10 14C11.1046 14 12 14.8954 12 16Z",fill:"currentColor"})],-1))];var h=c(t.defineComponent({props:{kind:{type:String,required:!0}},setup(e){return t.defineComponent({name:"BlitzIcon"}),(o,n)=>e.kind==="loading"?(t.openBlock(),t.createBlock(f,{key:0,class:t.normalizeClass("blitz-icon _kind-loading"),size:"18px"})):e.kind==="error"?(t.openBlock(),t.createElementBlock("div",N,_)):(t.openBlock(),t.createBlock(t.unref(m.Pepicon),{key:2,class:t.normalizeClass(`blitz-icon _kind-${e.kind}`),type:"pop",name:"checkmark"},null,8,["class"]))}}),[["__scopeId","data-v-6d84cf18"]]),se="";const P=t.defineComponent({name:"BlitzInput",components:{Pepicon:m.Pepicon,BlitzIcon:h},props:{icon:{type:String,default:void 0,validator:e=>!e||m.pepiconArray.includes(e)},suffix:{type:String,default:""},prefix:{type:String,default:""},showCheck:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isBusy:{type:Boolean,default:!1},type:{type:String,default:"text"},options:{type:Array,default:void 0},placeholder:{type:String,default:void 0},disabled:{type:Boolean,default:void 0},readonly:{type:Boolean,default:void 0},required:{type:Boolean,default:void 0},autocomplete:{type:String,default:void 0},min:{type:String,default:void 0},rows:{type:[String,Number],default:"3"},modelValue:{type:[String,Number,Date],default:""},autofocus:{type:Boolean,default:!1},autogrow:{type:Boolean,default:!1},debounce:{type:Number,default:0},clearable:{type:Boolean,default:!1},preventFocus:{type:Boolean,default:!1}},emits:["click","update:modelValue","blur","focus","enter"],data(){return{selectId:Math.random().toString(),textareaHeight:"unset",timeout:0,valueInner:this.parseValue(this.modelValue),fieldType:this.type,eyeSvg:"eye-closed",textareaObserver:null}},computed:{iconCalculated(){const{icon:e,type:o}=this;return e||(o==="search"?"loop":o==="date"?"calendar":"")}},watch:{type(e){this.fieldType=e},modelValue(e){const{valueInner:o,parseValue:n}=this;e!==o&&(this.valueInner=n(e))},valueInner(e){this.autogrowInput();const o=this.debounce;o>0?(clearTimeout(this.timeout),this.timeout=setTimeout(()=>this.emitInput(e),o)):this.emitInput(e)}},mounted(){this.valueInner&&this.autogrowInput({init:!0}),this.autofocus&&setTimeout(()=>this.focus(),400)},beforeUnmount(){var e;(e=this.textareaObserver)==null||e.disconnect()},methods:{parseValue(e){const{type:o}=this;if(o!=="date"||!p.isDate(e))return e;const n=String(e.getFullYear()).padStart(4,"0"),s=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${n}-${s}-${a}`},emitInput(e){const{type:o}=this;let n=e;p.isFullString(e)&&(o==="number"&&p.isNumber(Number(e))&&(n=Number(e)),o==="date"&&p.isDate(new Date(e))&&(n=new Date(e))),this.$emit("update:modelValue",n)},focus(e){if(this.preventFocus){this.$emit("click",e),document.activeElement instanceof HTMLElement&&document.activeElement.blur();return}const o=this.$refs["native-el"];o&&o.focus()},click(e){(this.type!=="date"||this.type==="date"&&this.preventFocus)&&(e.preventDefault(),e.stopPropagation()),this.focus(e)},autogrowInput(e={init:!1}){const o=this.$refs["native-el"];!!o&&this.type==="textarea"&&this.autogrow&&((e==null?void 0:e.init)&&this.registerTextareaObserver(),this.textareaHeight="auto",this.$nextTick(()=>{this.valueInner&&o.scrollHeight!==o.clientHeight&&(this.textareaHeight=`${o.scrollHeight}px`)}))},registerTextareaObserver(){if(this.textareaObserver)return;this.textareaObserver=new IntersectionObserver(o=>o[0].isIntersecting&&this.autogrowInput());const e=this.$refs["native-el"];this.textareaObserver.observe(e)},toggleVisiblity(){this.eyeSvg=this.eyeSvg==="eye-closed"?"eye":"eye-closed",this.fieldType=this.fieldType==="text"?"password":"text",document.activeElement===this.$refs["native-el"]&&window.requestAnimationFrame(()=>this.focus())},clearInput(){this.valueInner="",document.activeElement===this.$refs["native-el"]&&window.requestAnimationFrame(()=>this.focus())}}}),M={key:0,class:"_prefix mr-xs"},D=["type","placeholder","min"],T=["rows","placeholder"],q={key:4,class:"_select-wrapper"},O={key:0,value:""},F=["value"],A={key:5,class:"_suffix ml-xs"},G={key:6,class:"ml-auto pl-sm"};function H(e,o,n,s,a,y){const d=t.resolveComponent("Pepicon"),r=t.resolveComponent("BlitzIcon");return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(`blitz-input _type-${e.type} ${e.disabled?"_disabled":""} ${e.valueInner?"_truthy":"_falsy"} ${e.showCheck||e.hasError||e.isBusy?"_has-icon-right":""}`),onClick:o[17]||(o[17]=t.withModifiers(i=>e.focus(i),["stop"]))},[e.prefix?(t.openBlock(),t.createElementBlock("div",M,t.toDisplayString(e.prefix),1)):t.createCommentVNode("",!0),e.iconCalculated?(t.openBlock(),t.createBlock(d,{key:1,class:"_icon mr-xs",size:"20px",type:"pop",name:e.iconCalculated},null,8,["name"])):t.createCommentVNode("",!0),e.type!=="textarea"&&e.type!=="select"?t.withDirectives((t.openBlock(),t.createElementBlock("input",t.mergeProps({key:2,ref:"native-el"},{disabled:e.disabled||void 0,readonly:e.readonly||void 0,required:e.required||void 0,autocomplete:e.autocomplete||void 0},{"onUpdate:modelValue":o[0]||(o[0]=i=>e.valueInner=i),type:e.fieldType,placeholder:e.placeholder||(e.type==="search"?"\u691C\u7D22":void 0),min:e.min,"data-cy":"input-field",onClick:o[1]||(o[1]=(...i)=>e.click&&e.click(...i)),onBlur:o[2]||(o[2]=i=>e.$emit("blur",i)),onFocus:o[3]||(o[3]=i=>e.$emit("focus",i)),onKeypress:o[4]||(o[4]=t.withKeys(i=>e.$emit("enter",i),["enter"]))}),null,16,D)),[[t.vModelDynamic,e.valueInner]]):t.createCommentVNode("",!0),e.type==="textarea"?t.withDirectives((t.openBlock(),t.createElementBlock("textarea",t.mergeProps({key:3,ref:"native-el"},{disabled:e.disabled||void 0,readonly:e.readonly||void 0,required:e.required||void 0,autocomplete:e.autocomplete||void 0},{"onUpdate:modelValue":o[5]||(o[5]=i=>e.valueInner=i),style:`${String(e.rows)==="1"?"resize: none":""}; height: ${e.textareaHeight}`,rows:e.rows,placeholder:e.placeholder,"data-cy":"input-field",onClick:o[6]||(o[6]=(...i)=>e.click&&e.click(...i)),onBlur:o[7]||(o[7]=i=>e.$emit("blur",i)),onFocus:o[8]||(o[8]=i=>e.$emit("focus",i)),onKeypress:o[9]||(o[9]=t.withKeys(i=>e.$emit("enter",i),["enter"]))}),null,16,T)),[[t.vModelText,e.valueInner]]):t.createCommentVNode("",!0),e.type==="select"?(t.openBlock(),t.createElementBlock("label",q,[t.withDirectives(t.createElementVNode("select",t.mergeProps({ref:"native-el"},{disabled:e.disabled||void 0,readonly:e.readonly||void 0,required:e.required||void 0,autocomplete:e.autocomplete||void 0},{"onUpdate:modelValue":o[10]||(o[10]=i=>e.valueInner=i),"data-cy":"select-field",onClick:o[11]||(o[11]=(...i)=>e.click&&e.click(...i)),onBlur:o[12]||(o[12]=i=>e.$emit("blur",i)),onFocus:o[13]||(o[13]=i=>e.$emit("focus",i)),onKeypress:o[14]||(o[14]=t.withKeys(i=>e.$emit("enter",i),["enter"]))}),[e.placeholder?(t.openBlock(),t.createElementBlock("option",O,t.toDisplayString(e.placeholder),1)):t.createCommentVNode("",!0),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.options,i=>(t.openBlock(),t.createElementBlock("option",{key:i.label,value:i.value},t.toDisplayString(i.label),9,F))),128))],16),[[t.vModelSelect,e.valueInner]]),t.createVNode(d,{class:"_icon ml-xs _select-arrow",size:"20px",type:"pop",name:"angle-down"})])):t.createCommentVNode("",!0),t.renderSlot(e.$slots,"default",{},void 0,!0),e.suffix?(t.openBlock(),t.createElementBlock("div",A,t.toDisplayString(e.suffix),1)):t.createCommentVNode("",!0),e.showCheck||e.hasError||e.isBusy?(t.openBlock(),t.createElementBlock("div",G,[e.isBusy?(t.openBlock(),t.createBlock(r,{key:0,kind:"loading"})):e.hasError?(t.openBlock(),t.createBlock(r,{key:1,kind:"error"})):e.showCheck?(t.openBlock(),t.createBlock(r,{key:2,kind:"synced"})):t.createCommentVNode("",!0)])):t.createCommentVNode("",!0),e.type==="password"?(t.openBlock(),t.createElementBlock("button",{key:7,type:"button",class:"ml-auto pl-sm _eye _reset-button",onMousedown:o[15]||(o[15]=(...i)=>e.toggleVisiblity&&e.toggleVisiblity(...i))},[t.createVNode(d,{type:"pop",name:e.eyeSvg,class:"_eye"},null,8,["name"])],32)):t.createCommentVNode("",!0),(e.clearable||e.type==="search")&&e.valueInner?(t.openBlock(),t.createElementBlock("button",{key:8,type:"button",class:"ml-auto pl-sm _cross _reset-button",onMousedown:o[16]||(o[16]=(...i)=>e.clearInput&&e.clearInput(...i))},[t.createVNode(d,{type:"pop",name:"times"})],32)):t.createCommentVNode("",!0)],2)}var v=c(P,[["render",H],["__scopeId","data-v-305b942f"]]),ae="";const K=t.defineComponent({name:"BlitzPagination",components:{Pepicon:m.Pepicon},props:{modelValue:{type:Number,required:!0},pageCount:{type:Number,required:!0},pagesShown:{type:Array,required:!0}},emits:{"update:modelValue":e=>p.isNumber(e)},setup(e,{emit:o}){const n=t.computed(()=>e.modelValue===1),s=t.computed(()=>e.modelValue===e.pageCount||e.pageCount===0);function a(y){o("update:modelValue",y)}return{setPage:a,MORE_PAGES:k.MORE_PAGES,disabledPrevious:n,disabledNext:s}}}),R={class:"blitz-pagination"},Y=["tabindex","aria-disabled"],j=["onClick"],U={key:1,class:"_page-link"},L=["tabindex","aria-disabled"];function Z(e,o,n,s,a,y){const d=t.resolveComponent("Pepicon");return t.openBlock(),t.createElementBlock("ul",R,[t.createElementVNode("li",{class:t.normalizeClass(["_page-item",e.disabledPrevious&&"disabled"])},[t.createElementVNode("a",{class:"_page-link",href:"#",tabindex:e.disabledPrevious?"-1":void 0,"aria-disabled":e.disabledPrevious?!0:void 0,onClick:o[0]||(o[0]=t.withModifiers(()=>e.setPage(e.modelValue!==1&&e.pageCount!==0?e.modelValue-1:e.modelValue),["prevent","stop"]))},[t.createVNode(d,{type:"pop",name:"arrow-left"})],8,Y)],2),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.pagesShown,(r,i)=>(t.openBlock(),t.createElementBlock("li",{key:i,class:t.normalizeClass(["_page-item",r===e.modelValue&&"active",r===e.MORE_PAGES&&"disabled"])},[r!==e.MORE_PAGES?(t.openBlock(),t.createElementBlock("a",{key:0,class:"_page-link",href:"#",onClick:t.withModifiers(()=>e.setPage(r),["prevent","stop"])},t.toDisplayString(r),9,j)):(t.openBlock(),t.createElementBlock("span",U,t.toDisplayString(r),1))],2))),128)),t.createElementVNode("li",{class:t.normalizeClass(["_page-item",e.disabledNext&&"disabled"])},[t.createElementVNode("a",{class:"_page-link",href:"#",tabindex:e.disabledNext?"-1":void 0,"aria-disabled":e.disabledNext?"true":void 0,onClick:o[1]||(o[1]=t.withModifiers(()=>e.setPage(e.modelValue!==e.pageCount&&e.pageCount!==0?e.modelValue+1:e.modelValue),["prevent","stop"]))},[t.createVNode(d,{type:"pop",name:"arrow-right"})],8,L)],2)])}var J=c(K,[["render",Z],["__scopeId","data-v-b7c243ac"]]);l.BlitzGridToggle=w,l.BlitzIcon=h,l.BlitzInput=v,l.BlitzPagination=J,l.BlitzSpinner=f,Object.defineProperty(l,"__esModule",{value:!0}),l[Symbol.toStringTag]="Module"});