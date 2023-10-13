var K=Object.defineProperty,_=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var A=(c,r,m)=>r in c?K(c,r,{enumerable:!0,configurable:!0,writable:!0,value:m}):c[r]=m,h=(c,r)=>{for(var m in r||(r={}))x.call(r,m)&&A(c,m,r[m]);if(D)for(var m of D(r))ee.call(r,m)&&A(c,m,r[m]);return c},B=(c,r)=>_(c,W(r));(function(c,r){typeof exports=="object"&&typeof module!="undefined"?r(exports,require("vue"),require("merge-anything"),require("copy-anything"),require("is-what"),require("nestify-anything"),require("@blitzar/utils"),require("map-anything"),require("@blitzar/types"),require("filter-anything"),require("case-anything")):typeof define=="function"&&define.amd?define(["exports","vue","merge-anything","copy-anything","is-what","nestify-anything","@blitzar/utils","map-anything","@blitzar/types","filter-anything","case-anything"],r):(c=typeof globalThis!="undefined"?globalThis:c||self,r(c["@blitzar/form"]={},c.Vue,c.mergeAnything,c.copyAnything,c.isWhat,c.nestifyAnything,c.utils,c.mapAnything,c.types,c.filterAnything,c.caseAnything))})(this,function(c,r,m,b,u,v,S,z,L,j,q){"use strict";const k=r.defineComponent({name:"BlitzH",functional:!0,props:{options:{type:[String,Object,Array],required:!0}},render(){return(u.isArray(this.options)?this.options:[this.options]).map(t=>{if(u.isString(t))return t;const o=r.resolveDynamicComponent(t.component);let l;return t.slot?l=[r.h(k,{options:t.slot})]:t.slots&&t.slots.default&&(l=[r.h(k,{options:t.slots.default})]),r.h(o,h(h({},j.omit(t,["events","lang","rules","hint","readonly","component","slot","slots"])),Object.entries(t.events||{}).reduce((s,[i,a])=>(s[`on${q.pascalCase(i)}`]=a,s),{})),{default(){return l}})})}}),$=k,g=()=>({archive:"Archive",delete:"Delete",cancel:"Cancel",edit:"Edit",save:"Save",requiredField:"Field is required",fieldValidationError:"Field has validation error",formValidationError:"There are remaining errors."});function E(e){return t=>u.isBoolean(t)||t===0||(u.isArray(t)?u.isFullArray(t):u.isObject(t)?u.isFullObject(t):!!t)?null:e}function M(e,t,o){let l=!0;if(u.isFunction(t.showCondition)&&(l=t.showCondition(e,o)),!l)return null;let s=!1;u.isFunction(t.required)?s=t.required(e,o):u.isBoolean(t.required)&&(s=t.required);const i=o.lang||g();if(s){const d=E(i.requiredField)(e);if(u.isFullString(d))return d}if(!t.error)return null;const a=u.isFunction(t.error)?t.error(e,o):t.error;return u.isBoolean(a)?a?t.errorMessage?t.errorMessage:i.fieldValidationError:null:a}function T(e,t,o){const l=t.reduce((d,f)=>(d[f.id]=f,d),{}),s=Object.keys(l).reduce((d,f)=>B(h({},d),{[f]:null}),{}),i=S.flattenPerSchema(e,t),a=h(h({},s),i);return Object.entries(a).reduce((d,[f,y])=>{if(f==="undefined")return d;const p=l[f],F={mode:"edit",formMode:"edit",formData:e,formDataFlat:a,updateField(){},lang:o||g()};return d[f]=p?M(y,p,F):null,d},{})}var te="",O=(e,t)=>{const o=e.__vccOpts||e;for(const[l,s]of t)o[l]=s;return o};function P(e,t,o){return u.isFunction(e)?e(t,o):e}const R=r.defineComponent({name:"BlitzField",components:{BlitzH:$},inheritAttrs:!1,props:{modelValue:{type:null,default:void 0},id:{type:String,default:void 0},defaultValue:{type:void 0,default:void 0},parseValue:{type:Function,default:void 0},parseInput:{type:Function,default:void 0},component:{type:[String,Function,Object],default:void 0},slots:{type:[Object,Function],default:void 0},lang:{type:[Object,Function],default:()=>({archive:"Archive",delete:"Delete",cancel:"Cancel",edit:"Edit",save:"Save",requiredField:"Field is required",fieldValidationError:"Field has validation error",formValidationError:"There are remaining errors."})},label:{type:[String,Function],default:void 0},subLabel:{type:[String,Function],default:void 0},mode:{type:[String,Function],default:"edit",validator:e=>typeof e=="function"||["edit","readonly","disabled","raw"].includes(e)},events:{type:[Object,Function],default:()=>({})},required:{type:[Boolean,Function],default:void 0},dynamicProps:{type:Array,default:()=>["component","showCondition","error","required","label","subLabel","fieldStyle","fieldClasses","componentStyle","componentClasses","events","lang"]},internalLabels:{type:[Boolean,void 0],required:!1,default:void 0},internalErrors:{type:[Boolean,void 0],required:!1,default:void 0},showErrorsOn:{type:String,default:"interaction"},showCondition:{type:[Boolean,Function],default:!0},readonly:{type:[Boolean,Function,String,void 0],default:void 0},disabled:{type:[Boolean,Function,String,void 0],default:void 0},error:{type:[String,Function],default:void 0},labelPosition:{type:[String,Function],default:"top",validator:e=>typeof e=="function"||["top","left"].includes(e)},fieldStyle:{type:[Object,Array,String,Function],default:void 0},fieldClasses:{type:[Object,Array,String,Function],default:void 0},componentStyle:{type:[Object,Array,String,Function],default:void 0},componentClasses:{type:[Object,Array,String,Function],default:void 0},labelStyle:{type:[Object,Array,String,Function],default:void 0},labelClasses:{type:[Object,Array,String,Function],default:void 0},formData:{type:[Object,Array],default:void 0},formDataFlat:{type:Object,default:void 0},formId:{type:String,default:void 0},formMode:{type:String,default:void 0,validator:e=>["edit","readonly","disabled","raw"].includes(e)},updateField:{type:Function,default:void 0},updateRow:{type:Function,default:void 0},rowIndex:{type:Number,default:void 0},rowData:{type:Object,default:void 0},deleteRow:{type:Function,default:void 0}},emits:{"update:modelValue":(e,t)=>["default","",void 0].includes(t),click:null,dblclick:null,mousedown:null,mouseup:null},data(){return{innerValue:this.modelValue,justMounted:!1,isDirty:!1,showingErrorBeforeSave:!1}},computed:{cValue:{get(){const{parseValue:e,innerValue:t}=this;return u.isFunction(e)?e(t,this):t},set(e,...t){this.isDirty=!0,this.showingErrorBeforeSave=!1;const{parseInput:o,evalPropOrAttr:l}=this,s=l("events");u.isFunction(o)&&(e=o(e,this)),u.isFunction(s["update:modelValue"])&&s["update:modelValue"](e,this),this.id!==L.ROW_SELECTION_ID&&this.event("update:modelValue",e,...t)}},dynamicPropsEvaluated(){const{dynamicProps:e,cValue:t}=this;return e.reduce((o,l)=>{if(l==="slots"||l==="slot"){const i="slots"in this?this.slots:this.$attrs.slots;return o.slots=u.isPlainObject(i)?z.mapObject(i,a=>P(a,t,this)):P(i,t,this),o}const s=l in this?this[l]:this.$attrs[l];return o[l]=P(s,t,this),o},{})},defaultSlotCalculated(){const{evalPropOrAttr:e}=this,t=e("slots");if(u.isPlainObject(t))return t.default},componentName(){const{evalPropOrAttr:e}=this,t=e("component");if(u.isString(t))return t;const{name:o}=t||{};return o},usesInternalLabels(){const{evalPropOrAttr:e,componentName:t}=this;return e("internalLabels")&&!u.isNullOrUndefined(t)},langCalculated(){const{evalPropOrAttr:e}=this,t=g()||{},o=e("lang")||{};return m.merge(t,o)},errorCalculated(){const{evalPropOrAttr:e,evaluateError:t,isDirty:o,showingErrorBeforeSave:l}=this;return e("internalErrors")||e("showErrorsOn")==="never"?null:e("showErrorsOn")==="always"?t():e("showErrorsOn")==="interaction"?o?t():null:["save-focus","save"].includes(e("showErrorsOn"))?l?t():null:t()},eventsCalculated(){const{evalPropOrAttr:e}=this,t=e("events");return Object.entries(t).reduce((o,[l,s])=>(l==="update:modelValue"||(o[l]=(i,...a)=>s(i,this,...a)),o),{})},propsAndAttrsToPass(){const{evalPropOrAttr:e}=this,t={};e("internalErrors")&&(t.error=e("error")),this.usesInternalLabels?(t.label=e("label"),t.hint=e("subLabel")||e("hint")):t.hint=e("hint");const o=e("readonly");(o===!0||o==="readonly"||e("mode")==="readonly")&&(t.readonly=!0);const l=e("disabled");(l===!0||l==="disabled"||e("mode")==="disabled")&&(t.disabled=!0);const s=e("required");(s===!0||s==="required")&&!t.disabled&&!t.readonly&&(t.required=!0);const i=Object.keys(this.$attrs).reduce((a,n)=>(n==="class"||n==="style"||(a[n]=e(n)),a),{});return h(h({},t),i)},labelUsedHere(){const{usesInternalLabels:e,evalPropOrAttr:t}=this;return e?void 0:t("label")},subLabelHtmlUsedHere(){const{usesInternalLabels:e,evalPropOrAttr:t}=this,o=e?void 0:t("subLabel");return u.isFullString(o)?o:null},parsedFieldValue(){const{cValue:e,evalPropOrAttr:t}=this,o={valueType:t("valueType"),type:t("type"),dateFormat:t("dateFormat"),suffix:t("suffix"),prefix:t("prefix"),options:t("options"),multiple:t("multiple"),slots:t("slots"),component:t("component")};return S.parseFieldValue(e,o)}},watch:{modelValue(e){this.innerValue=e}},mounted(){const{modelValue:e,defaultValue:t,formData:o={}}=this;if(u.isUndefined(e)){const l=u.isFunction(t)?t(o,this):t;this.event("update:modelValue",l,"default")}this.justMounted=!0},methods:{evalPropOrAttr(e){const{dynamicPropsEvaluated:t}=this;return e in t?t[e]:e in this?this[e]:this.$attrs[e]},event(e,t,o){e==="update:modelValue"&&this.$emit("update:modelValue",t,o)},evaluateError(){const{evalPropOrAttr:e,langCalculated:t,cValue:o}=this,l=e("required"),s=E(t.requiredField),i=l?s(o):null;if(u.isFullString(i))return i;const a=e("error");if(u.isBoolean(a)){if(a){const n=e("errorMessage");return n||t.fieldValidationError}return null}return a||null},validate(e){const{evaluateError:t,evalPropOrAttr:o}=this;this.showingErrorBeforeSave=!0;const l=t();if((u.isBoolean(e)?e:o("showErrorsOn")==="save-focus")&&u.isFullString(l)&&o("mode")==="edit"){const i=this.$refs["ref-component"];if(i)try{i.focus()}catch{}}return l},resetDirtyAndErrors(){this.isDirty=!1,this.showingErrorBeforeSave=!1}}}),H=["innerHTML"],N={key:6,class:"blitz-field__error"};function U(e,t,o,l,s,i){const a=r.resolveComponent("BlitzH");return e.evalPropOrAttr("showCondition")?(r.openBlock(),r.createElementBlock("div",{key:0,class:r.normalizeClass(["blitz-field",`blitz-field--${e.evalPropOrAttr("mode")}`,`blitz-field--${e.componentName}`,`blitz-field--label-${e.labelPosition}`,{"blitz-field--no-label":!e.labelUsedHere,"blitz-field--no-sub-label":!e.subLabelHtmlUsedHere,"blitz-field--no-component":!e.componentName},e.evalPropOrAttr("fieldClasses"),e.$attrs.class]),style:r.normalizeStyle([e.evalPropOrAttr("fieldStyle"),e.$attrs.style]),onClick:t[3]||(t[3]=n=>e.$emit("click",n)),onDblclick:t[4]||(t[4]=n=>e.$emit("dblclick",n)),onMousedown:t[5]||(t[5]=n=>e.$emit("mousedown",n)),onMouseup:t[6]||(t[6]=n=>e.$emit("mouseup",n))},[e.labelUsedHere||e.evalPropOrAttr("slots")&&e.evalPropOrAttr("slots").label?(r.openBlock(),r.createElementBlock("div",{key:0,class:r.normalizeClass(["blitz-field__label",e.evalPropOrAttr("labelClasses")]),style:r.normalizeStyle(e.evalPropOrAttr("labelStyle"))},[r.createTextVNode(r.toDisplayString(e.labelUsedHere),1),r.renderSlot(e.$slots,"label",{},()=>[e.evalPropOrAttr("slots")&&e.evalPropOrAttr("slots").label?(r.openBlock(),r.createBlock(a,{key:0,options:e.evalPropOrAttr("slots").label},null,8,["options"])):r.createCommentVNode("",!0)])],6)):r.createCommentVNode("",!0),e.subLabelHtmlUsedHere?(r.openBlock(),r.createElementBlock("div",{key:1,class:"blitz-field__sub-label",innerHTML:e.subLabelHtmlUsedHere},null,8,H)):r.createCommentVNode("",!0),e.evalPropOrAttr("mode")==="raw"?(r.openBlock(),r.createBlock(a,{key:2,options:{component:"div",slot:e.parsedFieldValue,class:["blitz-field__component",e.evalPropOrAttr("componentClasses")],style:e.evalPropOrAttr("componentStyle")}},null,8,["options"])):e.evalPropOrAttr("component")==="input"?r.withDirectives((r.openBlock(),r.createElementBlock("input",r.mergeProps({key:3},e.propsAndAttrsToPass,{ref:"ref-component","onUpdate:modelValue":t[0]||(t[0]=n=>e.cValue=n),class:["blitz-field__component",e.evalPropOrAttr("componentClasses")],style:e.evalPropOrAttr("componentStyle")},r.toHandlers(e.eventsCalculated)),null,16)),[[r.vModelDynamic,e.cValue]]):e.evalPropOrAttr("component")==="select"?r.withDirectives((r.openBlock(),r.createElementBlock("select",r.mergeProps({key:4},e.propsAndAttrsToPass,{ref:"ref-component","onUpdate:modelValue":t[1]||(t[1]=n=>e.cValue=n),class:["blitz-field__component",e.evalPropOrAttr("componentClasses")],style:e.evalPropOrAttr("componentStyle")},r.toHandlers(e.eventsCalculated)),[e.defaultSlotCalculated?(r.openBlock(),r.createBlock(a,{key:0,options:e.defaultSlotCalculated},null,8,["options"])):r.createCommentVNode("",!0)],16)),[[r.vModelSelect,e.cValue]]):e.evalPropOrAttr("component")?(r.openBlock(),r.createBlock(r.resolveDynamicComponent(e.evalPropOrAttr("component")),r.mergeProps({key:5},e.propsAndAttrsToPass,{ref:"ref-component",modelValue:e.cValue,"onUpdate:modelValue":t[2]||(t[2]=n=>e.cValue=n),class:["blitz-field__component",e.evalPropOrAttr("componentClasses")],style:e.evalPropOrAttr("componentStyle")},r.toHandlers(e.eventsCalculated)),{default:r.withCtx(()=>[e.defaultSlotCalculated?(r.openBlock(),r.createBlock(a,{key:0,options:e.defaultSlotCalculated},null,8,["options"])):r.createCommentVNode("",!0)]),_:1},16,["modelValue","class","style"])):r.createCommentVNode("",!0),e.errorCalculated?(r.openBlock(),r.createElementBlock("div",N,r.toDisplayString(e.errorCalculated),1)):r.createCommentVNode("",!0)],38)):r.createCommentVNode("",!0)}var V=O(R,[["render",U]]);function w(e){if(!e)return{};const t={};e.slot&&(t.slots=m.merge(e.slots||{},{default:e.slot}));const o=e.fieldClasses||e.class;o&&(t.fieldClasses=o);const l=e.fieldStyle||e.style;return l&&(t.fieldStyle=l),t}var re="";const G=r.defineComponent({name:"BlitzForm",components:{BlitzField:V},inheritAttrs:!1,props:{modelValue:{type:Object,default:()=>({})},id:{type:String,default:void 0},schema:{type:Array,required:!0},actionButtons:{type:Array,default:()=>[]},actionButtonDefaults:{type:Object,default:()=>({})},actionButtonsPosition:{type:String,default:"top",validator:e=>["top","bottom","right","left"].includes(e)},columnCount:{type:Number,default:1},gridGap:{type:String,default:"1em"},lang:{type:Object,default:()=>({archive:"Archive",delete:"Delete",cancel:"Cancel",edit:"Edit",save:"Save",requiredField:"Field is required",fieldValidationError:"Field has validation error",formValidationError:"There are remaining errors."})},mode:{type:String,default:"edit",validator:e=>["edit","readonly","disabled","raw"].includes(e)},labelPosition:{type:[String,Function],default:"top",validator:e=>["top","left"].includes(e)},labelStyle:{type:[Object,Array,String,Function],default:null},labelClasses:{type:[Object,Array,String,Function],default:null},dynamicProps:{type:Array,default:()=>["component","showCondition","label","subLabel","required","fieldStyle","fieldClasses","componentStyle","componentClasses","events","lang"]},internalLabels:{type:Boolean,default:void 0},internalErrors:{type:Boolean,default:void 0},showErrorsOn:{type:String,default:"interaction",validator:e=>["interaction","save","save-focus","never","always"].includes(e)},formComponent:{type:[String,Function],default:"div"}},emits:{"update:mode":e=>["edit","readonly","disabled","raw"].includes(e),updateField:e=>u.isPlainObject(e),"update:modelValue":(e,t)=>u.isPlainObject(e)&&["default","cancel","",void 0].includes(t),edit:()=>!0,cancel:()=>!0,save:e=>u.isPlainObject(e),delete:()=>!0,archive:()=>!0,click:null,dblclick:null,mousedown:null,mouseup:null},data(){const{mode:e,id:t,modelValue:o,schema:l,lang:s}=this,i=m.merge(g(),s),a=e,n=t,d=S.flattenPerSchema(o,l),f=l.reduce((p,{id:F,defaultValue:C})=>(u.isFullString(F)&&(p[F]=u.isFunction(C)?C(o,this):C),p),{}),y=m.merge(f,b.copy(d));return{innerLang:i,innerMode:a,formId:n,edited:!1,editedFields:[],formDataFlat:y,formDataFlatBackups:[b.copy(y)],formErrorMsg:null}},computed:{formData(){return v.nestifyObject(this.formDataFlat)},cMode:{get(){return this.innerMode},set(e){this.innerMode=e,this.event("update:mode",e)}},schemaOverwritableDefaults(){const{innerMode:e,innerLang:t}=this;return{lang:t,mode:e,updateField:this.updateField,showErrorsOn:this.showErrorsOn,labelPosition:this.labelPosition,labelStyle:this.labelStyle,labelClasses:this.labelClasses,dynamicProps:this.dynamicProps,internalLabels:this.internalLabels,internalErrors:this.internalErrors}},schemaForcedDefaults(){const{formData:e,formDataFlat:t,formId:o,innerMode:l}=this;return{formData:e,formDataFlat:t,formId:o,formMode:l}},cSchema(){const{schema:e,schemaOverwritableDefaults:t,schemaForcedDefaults:o}=this;return e.map(l=>m.merge(t,l,w(l),o))},actionButtonsMap(){const{innerLang:e,tapDelete:t,tapEdit:o,tapArchive:l,tapCancel:s,tapSave:i,actionButtonDefaults:a,innerMode:n}=this,d={delete:{component:"button",type:"button",slot:e.delete,color:"negative",events:{click:t}},archive:{component:"button",type:"button",slot:e.archive,color:"negative",events:{click:l}},edit:{component:"button",type:"button",showCondition:()=>["readonly","raw"].includes(n),slot:e.edit,events:{click:o}},cancel:{component:"button",type:"button",showCondition:()=>n==="edit",slot:e.cancel,events:{click:s}},save:{component:"button",type:"button",showCondition:()=>n==="edit",slot:e.save,events:{click:i}}};return m.merge(d,a)},actionButtonsSchema(){const{actionButtons:e,schemaForcedDefaults:t,actionButtonsMap:o,formDataFlat:l,innerLang:s,updateField:i}=this,a={lang:s,updateField:i};return e.map(n=>{const d=u.isString(n)?o[n]||{}:n,f=d.slot?{slots:m.merge(d.slots||{},{default:d.slot})}:{},y=h({span:void 0,modelValue:l[d.id]},f);return m.merge(a,d,y,t)})},dataBackup(){const{formDataFlatBackups:e}=this;if(!e.length)return{};const t=e.slice(-1)[0];return v.nestifyObject(t)},dataEdited(){const{editedFields:e,formDataFlat:t}=this,o=e.reduce((s,i)=>(s[i]=t[i],s),{});return v.nestifyObject(o)}},watch:{mode(e){this.innerMode=e},id(e){this.formId=e},lang(e){this.innerLang=m.merge(g(),e)}},methods:{isFullString:u.isFullString,event(e,t,o){e==="update:mode"&&this.$emit("update:mode",t),e==="updateField"&&this.$emit("updateField",t),e==="update:modelValue"&&this.$emit("update:modelValue",t,o),e==="edit"&&this.$emit("edit"),e==="cancel"&&this.$emit("cancel"),e==="save"&&this.$emit("save",t),e==="delete"&&this.$emit("delete"),e==="archive"&&this.$emit("archive")},updateField({id:e,value:t,origin:o}){e!==void 0&&(this.edited=!0,this.editedFields.includes(e)||this.editedFields.push(e),this.formDataFlat[e]=t,this.event("updateField",{id:e,value:t,origin:o}),this.event("update:modelValue",this.formData,o),u.isFullString(this.formErrorMsg)&&this.validate())},resetState(){this.cMode="readonly",this.edited=!1,this.editedFields=[],this.formDataFlatBackups.push(b.copy(this.formDataFlat)),this.formErrorMsg="";for(const[e,t]of this.cSchema.entries()){const o=this.$refs[`ref-field-${e}`],l=u.isFullArray(o)?o[0]:o;l&&l.resetDirtyAndErrors()}},restoreBackup(){if(!this.formDataFlatBackups.length)return;const e=this.formDataFlatBackups.pop()||{};this.formDataFlat=e},tapCancel(){this.restoreBackup(),this.resetState();const e="cancel";Object.entries(this.formDataFlat).forEach(([t,o])=>{this.event("updateField",{id:t,value:o,origin:e})}),this.event("update:modelValue",this.formData,e),this.event("cancel")},validate(e=void 0){const{cSchema:t,innerLang:o,showErrorsOn:l}=this;if(l==="never")return null;const s=u.isBoolean(e)?e:l==="save-focus";for(const[i,a]of t.entries()){const n=this.$refs[`ref-field-${i}`],d=u.isFullArray(n)?n[0]:n;if(!d)continue;const f=d.validate(s);if(u.isFullString(f))return this.formErrorMsg=o.formValidationError,f}return this.formErrorMsg=null,null},tapEdit(){this.cMode="edit",this.event("edit")},tapSave(){const{validate:e,dataEdited:t,dataBackup:o,resetState:l,formData:s}=this;if(e())return;const a=b.copy(t),n=b.copy(o);this.event("save",{newData:a,oldData:n,formData:s}),l()},tapDelete(){this.event("delete")},tapArchive(){this.event("archive")}}}),I={key:0,class:"blitz-form__validation-error text-negative"};function J(e,t,o,l,s,i){const a=r.resolveComponent("BlitzField");return r.openBlock(),r.createBlock(r.resolveDynamicComponent(e.formComponent),{ref:"refBlitzForm",class:r.normalizeClass([`blitz-form blitz-form--nav-${e.actionButtonsPosition}`,e.$attrs.class]),style:r.normalizeStyle(e.$attrs.style),onClick:t[0]||(t[0]=n=>e.$emit("click",n)),onDblclick:t[1]||(t[1]=n=>e.$emit("dblclick",n)),onMousedown:t[2]||(t[2]=n=>e.$emit("mousedown",n)),onMouseup:t[3]||(t[3]=n=>e.$emit("mouseup",n))},{default:r.withCtx(()=>[e.isFullString(e.formErrorMsg)||e.actionButtonsSchema.length?(r.openBlock(),r.createElementBlock("div",{key:0,class:r.normalizeClass(`blitz-form__nav-row blitz-form__nav-row--${e.actionButtonsPosition}`)},[e.isFullString(e.formErrorMsg)?(r.openBlock(),r.createElementBlock("div",I,r.toDisplayString(e.formErrorMsg),1)):r.createCommentVNode("",!0),(r.openBlock(!0),r.createElementBlock(r.Fragment,null,r.renderList(e.actionButtonsSchema,(n,d)=>(r.openBlock(),r.createBlock(a,r.mergeProps({key:`${n.id}-${d}`},n),null,16))),128))],2)):r.createCommentVNode("",!0),r.renderSlot(e.$slots,"default",r.normalizeProps(r.guardReactiveProps({schema:e.cSchema,formData:e.formData,formDataFlat:e.formDataFlat,updateField:e.updateField})),()=>[r.createElementVNode("div",{class:"blitz-form__form",style:r.normalizeStyle(`grid-template-columns:${" minmax(0, 1fr)".repeat(e.columnCount)}; grid-gap: ${e.gridGap}`)},[(r.openBlock(!0),r.createElementBlock(r.Fragment,null,r.renderList(e.cSchema,(n,d)=>(r.openBlock(),r.createBlock(a,r.mergeProps({key:`${n.id}-${d}`,ref_for:!0,ref:`ref-field-${d}`},B(h({},n),{span:void 0}),{modelValue:e.formDataFlat[n.id],style:n.span?`grid-column: ${n.span===!0?"1 / -1":`span ${n.span}`}`:"","onUpdate:modelValue":(f,y)=>e.updateField({id:n.id,value:f,origin:y})}),null,16,["modelValue","style","onUpdate:modelValue"]))),128))],4)])]),_:3},8,["class","style"])}var Q=O(G,[["render",J]]),oe="";const X=r.defineComponent({name:"BlitzListForm",components:{BlitzField:V},inheritAttrs:!1,props:{modelValue:{type:Array,default:()=>[]},schema:{type:Array,default:()=>[{component:"input"}]},attrsToPass:{type:Array,default:()=>["formData","formDataFlat","formId","formMode","mode","updateField","lang"]},maxRows:{type:Number,default:void 0},disabled:{type:Boolean,default:void 0},readonly:{type:Boolean,default:void 0}},emits:{"update:modelValue":null},computed:{cValue:{get(){const{modelValue:e,schema:t,disabled:o,readonly:l,maxRows:s}=this,i=t.reduce((a,{id:n})=>B(h({},a),{[n]:void 0}),{});return!o&&!l&&(!u.isNumber(s)||s>e.length)?e.concat([i]):e},set(e){this.$emit("update:modelValue",e)}},listFormAttrsToPass(){const{attrsToPass:e,getPropOrAttrOrParentProp:t,modelValue:o}=this,l=e.reduce((s,i)=>(s[i]=t(i),s),{});return l.formData?l:B(h({},l),{formData:o})},cSchema(){const{schema:e,disabled:t,readonly:o,listFormAttrsToPass:l}=this;return e.map(s=>{const i={disabled:t,readonly:o},a={label:"",subLabel:"",slots:{label:void 0}};s.slot&&(a.slots=m.merge(s.slots||{},{default:s.slot}));const n=s.fieldClasses||s.class;n&&(a.fieldClasses=n);const d=s.fieldStyle||s.style;return d&&(a.fieldStyle=d),m.merge(l,i,s,a)})},schemaLabelsAndAttrs(){const{schema:e,listFormAttrsToPass:t}=this;return e.map(o=>m.merge(t,o,{component:void 0}))},gridTemplateColumnsCalculated(){const{schema:e}=this;return e.reduce((t,o)=>{const l=Number(o.span);return u.isNumber(l)?`${t} ${l}fr`:`${t} ${o.span||"1fr"}`},"")}},methods:{getPropOrAttrOrParentProp(e){if(e in this)return this[e];if(e in this.$attrs)return this.$attrs[e];if(this.$parent&&e in this.$parent)return this.$parent[e];if(this.$parent&&this.$parent.$parent&&e in this.$parent.$parent)return this.$parent.$parent[e]},deleteRow(e){const{modelValue:t}=this,o=b.copy(t);o[e]!==void 0&&(o.splice(e,1),this.$emit("update:modelValue",o))},setSubFieldValue({id:e,value:t,rowIndex:o},l){if(l==="default"||!e)return;const{modelValue:s}=this,i=b.copy(s);i[o]===void 0&&(i[o]={}),i[o][e]=t,this.$emit("update:modelValue",i)},onDeleteKey(e){const{modelValue:t,deleteRow:o}=this,s=t[e];!s||Object.keys(s).every(i=>s[i]===""||s[i]===0)&&o(e)}}});function Y(e,t,o,l,s,i){const a=r.resolveComponent("BlitzField");return r.openBlock(),r.createElementBlock("div",{class:r.normalizeClass(["blitz-list-form",e.$attrs.class]),style:r.normalizeStyle(e.$attrs.style)},[r.createElementVNode("div",{class:"blitz-list-form__row",style:r.normalizeStyle(`grid-template-columns: ${e.gridTemplateColumnsCalculated}`)},[(r.openBlock(!0),r.createElementBlock(r.Fragment,null,r.renderList(e.schemaLabelsAndAttrs,(n,d)=>(r.openBlock(),r.createBlock(a,r.mergeProps({key:d},n,{class:"blitz-list-form__sub-field"}),null,16))),128))],4),(r.openBlock(!0),r.createElementBlock(r.Fragment,null,r.renderList(e.cValue,(n,d)=>(r.openBlock(),r.createElementBlock("div",{key:d,class:"blitz-list-form__row",style:r.normalizeStyle(`grid-template-columns: ${e.gridTemplateColumnsCalculated}`)},[(r.openBlock(!0),r.createElementBlock(r.Fragment,null,r.renderList(e.cSchema,(f,y)=>(r.openBlock(),r.createBlock(a,r.mergeProps({key:y},f,{class:"blitz-list-form__sub-field",rowIndex:d,rowData:e.cValue[d],updateRow:p=>e.setSubFieldValue({id:p.id,value:p.value,rowIndex:d}),deleteRow:()=>e.deleteRow(d),modelValue:e.cValue[d][f.id],"onUpdate:modelValue":(p,F)=>e.setSubFieldValue({id:f.id,value:p,rowIndex:d},F),onKeyup:r.withKeys(p=>e.onDeleteKey(d),["delete"])}),null,16,["rowIndex","rowData","updateRow","deleteRow","modelValue","onUpdate:modelValue","onKeyup"]))),128))],4))),128))],6)}var Z=O(X,[["render",Y]]);c.BlitzField=V,c.BlitzForm=Q,c.BlitzH=$,c.BlitzListForm=Z,c.getBlitzFieldOverwrites=w,c.validateFormPerSchema=T,Object.defineProperty(c,"__esModule",{value:!0}),c[Symbol.toStringTag]="Module"});
