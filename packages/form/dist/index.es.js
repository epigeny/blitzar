var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, resolveDynamicComponent, h, resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createTextVNode, toDisplayString, renderSlot, createBlock, createCommentVNode, withDirectives, mergeProps, toHandlers, vModelDynamic, vModelSelect, withCtx, Fragment, renderList, normalizeProps, guardReactiveProps, createElementVNode, withKeys } from "vue";
import { merge } from "merge-anything";
import { copy } from "copy-anything";
import { isArray, isString, isBoolean, isFullArray, isObject, isFullObject, isFunction, isFullString, isPlainObject, isNullOrUndefined, isUndefined, isNumber } from "is-what";
import { nestifyObject } from "nestify-anything";
import { flattenPerSchema, parseFieldValue } from "@blitzar/utils";
import snarkdown from "snarkdown";
import { mapObject } from "map-anything";
import { ROW_SELECTION_ID } from "@blitzar/types";
import { omit } from "filter-anything";
import { pascalCase } from "case-anything";
const BlitzH = defineComponent({
  name: "BlitzH",
  functional: true,
  props: {
    options: {
      type: [String, Object, Array],
      required: true
    }
  },
  render() {
    const optionsArray = isArray(this.options) ? this.options : [this.options];
    return optionsArray.map((o) => {
      if (isString(o))
        return o;
      const Component = resolveDynamicComponent(o.component);
      let children;
      if (o.slot) {
        children = [h(BlitzH, { options: o.slot })];
      } else if (o.slots && o.slots.default) {
        children = [h(BlitzH, { options: o.slots.default })];
      }
      return h(Component, __spreadValues(__spreadValues({}, omit(o, ["events", "lang", "rules", "hint", "readonly", "component", "slot", "slots"])), Object.entries(o.events || {}).reduce((carry, [eventName, handler]) => {
        carry[`on${pascalCase(eventName)}`] = handler;
        return carry;
      }, {})), {
        default() {
          return children;
        }
      });
    });
  }
});
const _sfc_main$3 = BlitzH;
const defaultLang = () => ({
  archive: "Archive",
  delete: "Delete",
  cancel: "Cancel",
  edit: "Edit",
  save: "Save",
  requiredField: "Field is required",
  fieldValidationError: "Field has validation error",
  formValidationError: "There are remaining errors."
});
function createRequiredErrorFn(requiredFieldErrorMsg) {
  return (val) => isBoolean(val) || val === 0 || (isArray(val) ? isFullArray(val) : isObject(val) ? isFullObject(val) : !!val) ? null : requiredFieldErrorMsg;
}
function validateFieldPerSchema(payload, blueprint, context) {
  let isVisible = true;
  if (isFunction(blueprint.showCondition)) {
    isVisible = blueprint.showCondition(payload, context);
  }
  if (!isVisible)
    return null;
  let isRequired = false;
  if (isFunction(blueprint.required)) {
    isRequired = blueprint.required(payload, context);
  } else if (isBoolean(blueprint.required)) {
    isRequired = blueprint.required;
  }
  const lang = context.lang || defaultLang();
  if (isRequired) {
    const requiredErrorFn = createRequiredErrorFn(lang.requiredField);
    const requiredResult = requiredErrorFn(payload);
    if (isFullString(requiredResult))
      return requiredResult;
  }
  if (!blueprint.error)
    return null;
  const errorResult = !isFunction(blueprint.error) ? blueprint.error : blueprint.error(payload, context);
  if (isBoolean(errorResult)) {
    if (errorResult) {
      return blueprint.errorMessage ? blueprint.errorMessage : lang.fieldValidationError;
    }
    return null;
  }
  return errorResult;
}
function validateFormPerSchema(formData, schema, lang) {
  const schemaObject = schema.reduce((carry, blueprint) => {
    carry[blueprint.id] = blueprint;
    return carry;
  }, {});
  const formDataFlatEmpty = Object.keys(schemaObject).reduce((carry, key) => __spreadProps(__spreadValues({}, carry), { [key]: null }), {});
  const formDataFlatCurrent = flattenPerSchema(formData, schema);
  const formDataFlat = __spreadValues(__spreadValues({}, formDataFlatEmpty), formDataFlatCurrent);
  const resultPerField = Object.entries(formDataFlat).reduce((carry, [fieldId, fieldValue]) => {
    if (fieldId === "undefined")
      return carry;
    const blueprint = schemaObject[fieldId];
    const context = {
      mode: "edit",
      formMode: "edit",
      formData,
      formDataFlat,
      updateField() {
      },
      lang: lang || defaultLang()
    };
    carry[fieldId] = !blueprint ? null : validateFieldPerSchema(fieldValue, blueprint, context);
    return carry;
  }, {});
  return resultPerField;
}
var BlitzField_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function evaluateProp(propValue, componentValue, componentInstance) {
  return isFunction(propValue) ? propValue(componentValue, componentInstance) : propValue;
}
const _sfc_main$2 = defineComponent({
  name: "BlitzField",
  components: { BlitzH: _sfc_main$3 },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: null,
      default: void 0
    },
    id: {
      type: String,
      default: void 0
    },
    defaultValue: {
      type: void 0,
      default: void 0
    },
    parseValue: {
      type: Function,
      default: void 0
    },
    parseInput: {
      type: Function,
      default: void 0
    },
    component: {
      type: [String, Function, Object],
      default: void 0
    },
    slots: {
      type: [Object, Function],
      default: void 0
    },
    lang: {
      type: [Object, Function],
      default: () => ({
        archive: "Archive",
        delete: "Delete",
        cancel: "Cancel",
        edit: "Edit",
        save: "Save",
        requiredField: "Field is required",
        fieldValidationError: "Field has validation error",
        formValidationError: "There are remaining errors."
      })
    },
    label: {
      type: [String, Function],
      default: void 0
    },
    subLabel: {
      type: [String, Function],
      default: void 0
    },
    mode: {
      type: [String, Function],
      default: "edit",
      validator: (prop) => typeof prop === "function" || ["edit", "readonly", "disabled", "raw"].includes(prop)
    },
    events: {
      type: [Object, Function],
      default: () => ({})
    },
    required: {
      type: [Boolean, Function],
      default: void 0
    },
    dynamicProps: {
      type: Array,
      default: () => [
        "component",
        "showCondition",
        "error",
        "required",
        "label",
        "subLabel",
        "fieldStyle",
        "fieldClasses",
        "componentStyle",
        "componentClasses",
        "events",
        "lang"
      ]
    },
    internalLabels: {
      type: [Boolean, void 0],
      required: false,
      default: void 0
    },
    internalErrors: {
      type: [Boolean, void 0],
      required: false,
      default: void 0
    },
    showErrorsOn: {
      type: String,
      default: "interaction"
    },
    showCondition: {
      type: [Boolean, Function],
      default: true
    },
    readonly: {
      type: [Boolean, Function, String, void 0],
      default: void 0
    },
    disabled: {
      type: [Boolean, Function, String, void 0],
      default: void 0
    },
    error: {
      type: [String, Function],
      default: void 0
    },
    labelPosition: {
      type: [String, Function],
      default: "top",
      validator: (prop) => typeof prop === "function" || ["top", "left"].includes(prop)
    },
    fieldStyle: {
      type: [Object, Array, String, Function],
      default: void 0
    },
    fieldClasses: {
      type: [Object, Array, String, Function],
      default: void 0
    },
    componentStyle: {
      type: [Object, Array, String, Function],
      default: void 0
    },
    componentClasses: {
      type: [Object, Array, String, Function],
      default: void 0
    },
    labelStyle: {
      type: [Object, Array, String, Function],
      default: void 0
    },
    labelClasses: {
      type: [Object, Array, String, Function],
      default: void 0
    },
    formData: {
      type: [Object, Array],
      default: void 0
    },
    formDataFlat: {
      type: Object,
      default: void 0
    },
    formId: {
      type: String,
      default: void 0
    },
    formMode: {
      type: String,
      default: void 0,
      validator: (prop) => ["edit", "readonly", "disabled", "raw"].includes(prop)
    },
    updateField: {
      type: Function,
      default: void 0
    },
    updateRow: {
      type: Function,
      default: void 0
    },
    rowIndex: {
      type: Number,
      default: void 0
    },
    rowData: {
      type: Object,
      default: void 0
    },
    deleteRow: {
      type: Function,
      default: void 0
    }
  },
  emits: {
    "update:modelValue": (payload, origin) => ["default", "", void 0].includes(origin),
    click: null,
    dblclick: null,
    mousedown: null,
    mouseup: null
  },
  data() {
    return {
      innerValue: this.modelValue,
      justMounted: false,
      isDirty: false,
      showingErrorBeforeSave: false
    };
  },
  computed: {
    cValue: {
      get() {
        const { parseValue, innerValue } = this;
        if (isFunction(parseValue)) {
          return parseValue(innerValue, this);
        }
        return innerValue;
      },
      set(val, ...otherArguments) {
        this.isDirty = true;
        this.showingErrorBeforeSave = false;
        const { parseInput, evalPropOrAttr } = this;
        const events = evalPropOrAttr("events");
        if (isFunction(parseInput))
          val = parseInput(val, this);
        if (isFunction(events["update:modelValue"]))
          events["update:modelValue"](val, this);
        if (this.id === ROW_SELECTION_ID)
          return;
        this.event("update:modelValue", val, ...otherArguments);
      }
    },
    dynamicPropsEvaluated() {
      const { dynamicProps, cValue } = this;
      return dynamicProps.reduce((carry, propKey) => {
        if (propKey === "slots" || propKey === "slot") {
          const slotsValue = "slots" in this ? this["slots"] : this.$attrs["slots"];
          carry["slots"] = isPlainObject(slotsValue) ? mapObject(slotsValue, (propValue2) => evaluateProp(propValue2, cValue, this)) : evaluateProp(slotsValue, cValue, this);
          return carry;
        }
        const propValue = propKey in this ? this[propKey] : this.$attrs[propKey];
        carry[propKey] = evaluateProp(propValue, cValue, this);
        return carry;
      }, {});
    },
    defaultSlotCalculated() {
      const { evalPropOrAttr } = this;
      const slots = evalPropOrAttr("slots");
      if (isPlainObject(slots))
        return slots.default;
      return void 0;
    },
    componentName() {
      const { evalPropOrAttr } = this;
      const component = evalPropOrAttr("component");
      if (isString(component))
        return component;
      const { name } = component || {};
      return name;
    },
    usesInternalLabels() {
      const { evalPropOrAttr, componentName } = this;
      const internalLabels = evalPropOrAttr("internalLabels");
      return internalLabels && !isNullOrUndefined(componentName);
    },
    langCalculated() {
      const { evalPropOrAttr } = this;
      const defaults = defaultLang() || {};
      const lang = evalPropOrAttr("lang") || {};
      return merge(defaults, lang);
    },
    errorCalculated() {
      const { evalPropOrAttr, evaluateError, isDirty, showingErrorBeforeSave } = this;
      if (evalPropOrAttr("internalErrors") || evalPropOrAttr("showErrorsOn") === "never") {
        return null;
      }
      if (evalPropOrAttr("showErrorsOn") === "always") {
        return evaluateError();
      }
      if (evalPropOrAttr("showErrorsOn") === "interaction") {
        if (!isDirty)
          return null;
        return evaluateError();
      }
      if (["save-focus", "save"].includes(evalPropOrAttr("showErrorsOn"))) {
        if (!showingErrorBeforeSave)
          return null;
        return evaluateError();
      }
      return evaluateError();
    },
    eventsCalculated() {
      const { evalPropOrAttr } = this;
      const events = evalPropOrAttr("events");
      return Object.entries(events).reduce((carry, [eventName, eventFn]) => {
        if (eventName === "update:modelValue")
          return carry;
        carry[eventName] = (val, ...otherArguments) => eventFn(val, this, ...otherArguments);
        return carry;
      }, {});
    },
    propsAndAttrsToPass() {
      const { evalPropOrAttr } = this;
      const propsToPass = {};
      if (evalPropOrAttr("internalErrors")) {
        propsToPass.error = evalPropOrAttr("error");
      }
      if (this.usesInternalLabels) {
        propsToPass.label = evalPropOrAttr("label");
        propsToPass.hint = evalPropOrAttr("subLabel") || evalPropOrAttr("hint");
      } else {
        propsToPass.hint = evalPropOrAttr("hint");
      }
      const readonly = evalPropOrAttr("readonly");
      if (readonly === true || readonly === "readonly" || evalPropOrAttr("mode") === "readonly") {
        propsToPass.readonly = true;
      }
      const disabled = evalPropOrAttr("disabled");
      if (disabled === true || disabled === "disabled" || evalPropOrAttr("mode") === "disabled") {
        propsToPass.disabled = true;
      }
      const required = evalPropOrAttr("required");
      if ((required === true || required === "required") && !propsToPass.disabled && !propsToPass.readonly) {
        propsToPass.required = true;
      }
      const attrsToPass = Object.keys(this.$attrs).reduce((carry, attrKey) => {
        if (attrKey === "class" || attrKey === "style") {
          return carry;
        }
        carry[attrKey] = evalPropOrAttr(attrKey);
        return carry;
      }, {});
      return __spreadValues(__spreadValues({}, propsToPass), attrsToPass);
    },
    labelUsedHere() {
      const { usesInternalLabels, evalPropOrAttr } = this;
      return usesInternalLabels ? void 0 : evalPropOrAttr("label");
    },
    subLabelHtmlUsedHere() {
      const { usesInternalLabels, evalPropOrAttr } = this;
      const subLabel = usesInternalLabels ? void 0 : evalPropOrAttr("subLabel");
      if (!isFullString(subLabel))
        return null;
      return snarkdown(subLabel);
    },
    parsedFieldValue() {
      const { cValue, evalPropOrAttr } = this;
      const blueprint = {
        valueType: evalPropOrAttr("valueType"),
        type: evalPropOrAttr("type"),
        dateFormat: evalPropOrAttr("dateFormat"),
        suffix: evalPropOrAttr("suffix"),
        prefix: evalPropOrAttr("prefix"),
        options: evalPropOrAttr("options"),
        multiple: evalPropOrAttr("multiple"),
        slots: evalPropOrAttr("slots"),
        component: evalPropOrAttr("component")
      };
      return parseFieldValue(cValue, blueprint);
    }
  },
  watch: {
    modelValue(newValue) {
      this.innerValue = newValue;
    }
  },
  mounted() {
    const { modelValue, defaultValue, formData = {} } = this;
    if (isUndefined(modelValue)) {
      const newDefaultValue = isFunction(defaultValue) ? defaultValue(formData, this) : defaultValue;
      this.event("update:modelValue", newDefaultValue, "default");
    }
    this.justMounted = true;
  },
  methods: {
    evalPropOrAttr(propOrAttr) {
      const { dynamicPropsEvaluated } = this;
      if (propOrAttr in dynamicPropsEvaluated)
        return dynamicPropsEvaluated[propOrAttr];
      if (propOrAttr in this)
        return this[propOrAttr];
      return this.$attrs[propOrAttr];
    },
    event(eventName, payload, origin) {
      if (eventName === "update:modelValue") {
        this.$emit("update:modelValue", payload, origin);
      }
    },
    evaluateError() {
      const { evalPropOrAttr, langCalculated, cValue } = this;
      const isRequired = evalPropOrAttr("required");
      const requiredErrorFn = createRequiredErrorFn(langCalculated["requiredField"]);
      const requiredErrorResult = !isRequired ? null : requiredErrorFn(cValue);
      if (isFullString(requiredErrorResult))
        return requiredErrorResult;
      const errorStatus = evalPropOrAttr("error");
      if (isBoolean(errorStatus)) {
        if (errorStatus) {
          const errorMessage = evalPropOrAttr("errorMessage");
          return errorMessage ? errorMessage : langCalculated["fieldValidationError"];
        }
        return null;
      }
      return errorStatus || null;
    },
    validate(focusIfError) {
      const { evaluateError, evalPropOrAttr } = this;
      this.showingErrorBeforeSave = true;
      const result = evaluateError();
      const shouldFocus = isBoolean(focusIfError) ? focusIfError : evalPropOrAttr("showErrorsOn") === "save-focus";
      if (shouldFocus && isFullString(result) && evalPropOrAttr("mode") === "edit") {
        const component = this.$refs["ref-component"];
        if (component) {
          try {
            component.focus();
          } catch (error) {
          }
        }
      }
      return result;
    },
    resetDirtyAndErrors() {
      this.isDirty = false;
      this.showingErrorBeforeSave = false;
    }
  }
});
const _hoisted_1$1 = ["innerHTML"];
const _hoisted_2 = {
  key: 6,
  class: "blitz-field__error"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BlitzH = resolveComponent("BlitzH");
  return _ctx.evalPropOrAttr("showCondition") ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass([
      "blitz-field",
      `blitz-field--${_ctx.evalPropOrAttr("mode")}`,
      `blitz-field--${_ctx.componentName}`,
      `blitz-field--label-${_ctx.labelPosition}`,
      {
        "blitz-field--no-label": !_ctx.labelUsedHere,
        "blitz-field--no-sub-label": !_ctx.subLabelHtmlUsedHere,
        "blitz-field--no-component": !_ctx.componentName
      },
      _ctx.evalPropOrAttr("fieldClasses"),
      _ctx.$attrs.class
    ]),
    style: normalizeStyle([_ctx.evalPropOrAttr("fieldStyle"), _ctx.$attrs.style]),
    onClick: _cache[3] || (_cache[3] = (e) => _ctx.$emit("click", e)),
    onDblclick: _cache[4] || (_cache[4] = (e) => _ctx.$emit("dblclick", e)),
    onMousedown: _cache[5] || (_cache[5] = (e) => _ctx.$emit("mousedown", e)),
    onMouseup: _cache[6] || (_cache[6] = (e) => _ctx.$emit("mouseup", e))
  }, [
    _ctx.labelUsedHere || _ctx.evalPropOrAttr("slots") && _ctx.evalPropOrAttr("slots").label ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["blitz-field__label", _ctx.evalPropOrAttr("labelClasses")]),
      style: normalizeStyle(_ctx.evalPropOrAttr("labelStyle"))
    }, [
      createTextVNode(toDisplayString(_ctx.labelUsedHere), 1),
      renderSlot(_ctx.$slots, "label", {}, () => [
        _ctx.evalPropOrAttr("slots") && _ctx.evalPropOrAttr("slots").label ? (openBlock(), createBlock(_component_BlitzH, {
          key: 0,
          options: _ctx.evalPropOrAttr("slots").label
        }, null, 8, ["options"])) : createCommentVNode("", true)
      ])
    ], 6)) : createCommentVNode("", true),
    _ctx.subLabelHtmlUsedHere ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: "blitz-field__sub-label",
      innerHTML: _ctx.subLabelHtmlUsedHere
    }, null, 8, _hoisted_1$1)) : createCommentVNode("", true),
    _ctx.evalPropOrAttr("mode") === "raw" ? (openBlock(), createBlock(_component_BlitzH, {
      key: 2,
      options: {
        component: "div",
        slot: _ctx.parsedFieldValue,
        class: ["blitz-field__component", _ctx.evalPropOrAttr("componentClasses")],
        style: _ctx.evalPropOrAttr("componentStyle")
      }
    }, null, 8, ["options"])) : _ctx.evalPropOrAttr("component") === "input" ? withDirectives((openBlock(), createElementBlock("input", mergeProps({ key: 3 }, _ctx.propsAndAttrsToPass, {
      ref: "ref-component",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.cValue = $event),
      class: ["blitz-field__component", _ctx.evalPropOrAttr("componentClasses")],
      style: _ctx.evalPropOrAttr("componentStyle")
    }, toHandlers(_ctx.eventsCalculated)), null, 16)), [
      [vModelDynamic, _ctx.cValue]
    ]) : _ctx.evalPropOrAttr("component") === "select" ? withDirectives((openBlock(), createElementBlock("select", mergeProps({ key: 4 }, _ctx.propsAndAttrsToPass, {
      ref: "ref-component",
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.cValue = $event),
      class: ["blitz-field__component", _ctx.evalPropOrAttr("componentClasses")],
      style: _ctx.evalPropOrAttr("componentStyle")
    }, toHandlers(_ctx.eventsCalculated)), [
      _ctx.defaultSlotCalculated ? (openBlock(), createBlock(_component_BlitzH, {
        key: 0,
        options: _ctx.defaultSlotCalculated
      }, null, 8, ["options"])) : createCommentVNode("", true)
    ], 16)), [
      [vModelSelect, _ctx.cValue]
    ]) : _ctx.evalPropOrAttr("component") ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.evalPropOrAttr("component")), mergeProps({ key: 5 }, _ctx.propsAndAttrsToPass, {
      ref: "ref-component",
      modelValue: _ctx.cValue,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.cValue = $event),
      class: ["blitz-field__component", _ctx.evalPropOrAttr("componentClasses")],
      style: _ctx.evalPropOrAttr("componentStyle")
    }, toHandlers(_ctx.eventsCalculated)), {
      default: withCtx(() => [
        _ctx.defaultSlotCalculated ? (openBlock(), createBlock(_component_BlitzH, {
          key: 0,
          options: _ctx.defaultSlotCalculated
        }, null, 8, ["options"])) : createCommentVNode("", true)
      ]),
      _: 1
    }, 16, ["modelValue", "class", "style"])) : createCommentVNode("", true),
    _ctx.errorCalculated ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(_ctx.errorCalculated), 1)) : createCommentVNode("", true)
  ], 38)) : createCommentVNode("", true);
}
var BlitzField = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
function getBlitzFieldOverwrites(field) {
  if (!field)
    return {};
  const overwrites = {};
  if (field.slot) {
    overwrites.slots = merge(field.slots || {}, { default: field.slot });
  }
  const fieldClasses = field.fieldClasses || field.class;
  if (fieldClasses)
    overwrites.fieldClasses = fieldClasses;
  const fieldStyle = field.fieldStyle || field.style;
  if (fieldStyle)
    overwrites.fieldStyle = fieldStyle;
  return overwrites;
}
var BlitzForm_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = defineComponent({
  name: "BlitzForm",
  components: { BlitzField },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    id: { type: String, default: void 0 },
    schema: {
      type: Array,
      required: true
    },
    actionButtons: {
      type: Array,
      default: () => []
    },
    actionButtonDefaults: {
      type: Object,
      default: () => ({})
    },
    actionButtonsPosition: {
      type: String,
      default: "top",
      validator: (prop) => ["top", "bottom", "right", "left"].includes(prop)
    },
    columnCount: {
      type: Number,
      default: 1
    },
    gridGap: {
      type: String,
      default: "1em"
    },
    lang: {
      type: Object,
      default: () => ({
        archive: "Archive",
        delete: "Delete",
        cancel: "Cancel",
        edit: "Edit",
        save: "Save",
        requiredField: "Field is required",
        fieldValidationError: "Field has validation error",
        formValidationError: "There are remaining errors."
      })
    },
    mode: {
      type: String,
      default: "edit",
      validator: (prop) => ["edit", "readonly", "disabled", "raw"].includes(prop)
    },
    labelPosition: {
      type: [String, Function],
      default: "top",
      validator: (prop) => ["top", "left"].includes(prop)
    },
    labelStyle: {
      type: [Object, Array, String, Function],
      default: null
    },
    labelClasses: {
      type: [Object, Array, String, Function],
      default: null
    },
    dynamicProps: {
      type: Array,
      default: () => [
        "component",
        "showCondition",
        "label",
        "subLabel",
        "required",
        "fieldStyle",
        "fieldClasses",
        "componentStyle",
        "componentClasses",
        "events",
        "lang"
      ]
    },
    internalLabels: {
      type: Boolean,
      default: void 0
    },
    internalErrors: {
      type: Boolean,
      default: void 0
    },
    showErrorsOn: {
      type: String,
      default: "interaction",
      validator: (prop) => ["interaction", "save", "save-focus", "never", "always"].includes(prop)
    },
    formComponent: {
      type: [String, Function],
      default: "div"
    }
  },
  emits: {
    "update:mode": (payload) => ["edit", "readonly", "disabled", "raw"].includes(payload),
    updateField: (payload) => isPlainObject(payload),
    "update:modelValue": (payload, origin) => isPlainObject(payload) && ["default", "cancel", "", void 0].includes(origin),
    edit: () => true,
    cancel: () => true,
    save: (payload) => isPlainObject(payload),
    delete: () => true,
    archive: () => true,
    click: null,
    dblclick: null,
    mousedown: null,
    mouseup: null
  },
  data() {
    const { mode, id, modelValue, schema, lang } = this;
    const innerLang = merge(defaultLang(), lang);
    const innerMode = mode;
    const formId = id;
    const dataFlat = flattenPerSchema(modelValue, schema);
    const dataFlatDefaults = schema.reduce((carry, { id: id2, defaultValue }) => {
      if (!isFullString(id2))
        return carry;
      carry[id2] = isFunction(defaultValue) ? defaultValue(modelValue, this) : defaultValue;
      return carry;
    }, {});
    const formDataFlat = merge(dataFlatDefaults, copy(dataFlat));
    return {
      innerLang,
      innerMode,
      formId,
      edited: false,
      editedFields: [],
      formDataFlat,
      formDataFlatBackups: [copy(formDataFlat)],
      formErrorMsg: null
    };
  },
  computed: {
    formData() {
      return nestifyObject(this.formDataFlat);
    },
    cMode: {
      get() {
        return this.innerMode;
      },
      set(val) {
        this.innerMode = val;
        this.event("update:mode", val);
      }
    },
    schemaOverwritableDefaults() {
      const { innerMode, innerLang } = this;
      return {
        lang: innerLang,
        mode: innerMode,
        updateField: this.updateField,
        showErrorsOn: this.showErrorsOn,
        labelPosition: this.labelPosition,
        labelStyle: this.labelStyle,
        labelClasses: this.labelClasses,
        dynamicProps: this.dynamicProps,
        internalLabels: this.internalLabels,
        internalErrors: this.internalErrors
      };
    },
    schemaForcedDefaults() {
      const { formData, formDataFlat, formId, innerMode } = this;
      return {
        formData,
        formDataFlat,
        formId,
        formMode: innerMode
      };
    },
    cSchema() {
      const { schema, schemaOverwritableDefaults, schemaForcedDefaults } = this;
      return schema.map((field) => merge(schemaOverwritableDefaults, field, getBlitzFieldOverwrites(field), schemaForcedDefaults));
    },
    actionButtonsMap() {
      const {
        innerLang,
        tapDelete,
        tapEdit,
        tapArchive,
        tapCancel,
        tapSave,
        actionButtonDefaults,
        innerMode
      } = this;
      const map = {
        delete: {
          component: "button",
          type: "button",
          slot: innerLang["delete"],
          color: "negative",
          events: { click: tapDelete }
        },
        archive: {
          component: "button",
          type: "button",
          slot: innerLang["archive"],
          color: "negative",
          events: { click: tapArchive }
        },
        edit: {
          component: "button",
          type: "button",
          showCondition: () => ["readonly", "raw"].includes(innerMode),
          slot: innerLang["edit"],
          events: { click: tapEdit }
        },
        cancel: {
          component: "button",
          type: "button",
          showCondition: () => innerMode === "edit",
          slot: innerLang["cancel"],
          events: { click: tapCancel }
        },
        save: {
          component: "button",
          type: "button",
          showCondition: () => innerMode === "edit",
          slot: innerLang["save"],
          events: { click: tapSave }
        }
      };
      return merge(map, actionButtonDefaults);
    },
    actionButtonsSchema() {
      const {
        actionButtons,
        schemaForcedDefaults,
        actionButtonsMap,
        formDataFlat,
        innerLang,
        updateField
      } = this;
      const overwritableDefaults = { lang: innerLang, updateField };
      return actionButtons.map((blueprint) => {
        const _bp = isString(blueprint) ? actionButtonsMap[blueprint] || {} : blueprint;
        const slotsOverwrite = !_bp.slot ? {} : { slots: merge(_bp.slots || {}, { default: _bp.slot }) };
        const overwrites = __spreadValues({
          span: void 0,
          modelValue: formDataFlat[_bp.id]
        }, slotsOverwrite);
        const blueprintParsed = merge(overwritableDefaults, _bp, overwrites, schemaForcedDefaults);
        return blueprintParsed;
      });
    },
    dataBackup() {
      const { formDataFlatBackups } = this;
      if (!formDataFlatBackups.length)
        return {};
      const lastBackup = formDataFlatBackups.slice(-1)[0];
      const dataNested = nestifyObject(lastBackup);
      return dataNested;
    },
    dataEdited() {
      const { editedFields, formDataFlat } = this;
      const dataFlat = editedFields.reduce((carry, prop) => {
        carry[prop] = formDataFlat[prop];
        return carry;
      }, {});
      const dataNested = nestifyObject(dataFlat);
      return dataNested;
    }
  },
  watch: {
    mode(newValue) {
      this.innerMode = newValue;
    },
    id(newValue) {
      this.formId = newValue;
    },
    lang(newValue) {
      this.innerLang = merge(defaultLang(), newValue);
    }
  },
  methods: {
    isFullString,
    event(eventName, payload, origin) {
      if (eventName === "update:mode") {
        this.$emit("update:mode", payload);
      }
      if (eventName === "updateField") {
        this.$emit("updateField", payload);
      }
      if (eventName === "update:modelValue") {
        this.$emit("update:modelValue", payload, origin);
      }
      if (eventName === "edit") {
        this.$emit("edit");
      }
      if (eventName === "cancel") {
        this.$emit("cancel");
      }
      if (eventName === "save") {
        this.$emit("save", payload);
      }
      if (eventName === "delete") {
        this.$emit("delete");
      }
      if (eventName === "archive") {
        this.$emit("archive");
      }
    },
    updateField({
      id,
      value,
      origin
    }) {
      if (id === void 0)
        return;
      this.edited = true;
      if (!this.editedFields.includes(id))
        this.editedFields.push(id);
      this.formDataFlat[id] = value;
      this.event("updateField", { id, value, origin });
      this.event("update:modelValue", this.formData, origin);
      if (isFullString(this.formErrorMsg)) {
        this.validate();
      }
    },
    resetState() {
      this.cMode = "readonly";
      this.edited = false;
      this.editedFields = [];
      this.formDataFlatBackups.push(copy(this.formDataFlat));
      this.formErrorMsg = "";
      for (const [i, blueprint] of this.cSchema.entries()) {
        const refField = this.$refs[`ref-field-${i}`];
        const _refField = isFullArray(refField) ? refField[0] : refField;
        if (_refField)
          _refField.resetDirtyAndErrors();
      }
    },
    restoreBackup() {
      if (!this.formDataFlatBackups.length)
        return;
      const lastBackup = this.formDataFlatBackups.pop() || {};
      this.formDataFlat = lastBackup;
    },
    tapCancel() {
      this.restoreBackup();
      this.resetState();
      const origin = "cancel";
      Object.entries(this.formDataFlat).forEach(([id, value]) => {
        this.event("updateField", { id, value, origin });
      });
      this.event("update:modelValue", this.formData, origin);
      this.event("cancel");
    },
    validate(focusIfError = void 0) {
      const { cSchema, innerLang, showErrorsOn } = this;
      if (showErrorsOn === "never")
        return null;
      const shouldFocus = isBoolean(focusIfError) ? focusIfError : showErrorsOn === "save-focus";
      for (const [i, blueprint] of cSchema.entries()) {
        const refField = this.$refs[`ref-field-${i}`];
        const _refField = isFullArray(refField) ? refField[0] : refField;
        if (!_refField)
          continue;
        const result = _refField.validate(shouldFocus);
        if (isFullString(result)) {
          this.formErrorMsg = innerLang["formValidationError"];
          return result;
        }
      }
      this.formErrorMsg = null;
      return null;
    },
    tapEdit() {
      this.cMode = "edit";
      this.event("edit");
    },
    tapSave() {
      const { validate, dataEdited, dataBackup, resetState, formData } = this;
      const foundError = validate();
      if (foundError)
        return;
      const newData = copy(dataEdited);
      const oldData = copy(dataBackup);
      this.event("save", { newData, oldData, formData });
      resetState();
    },
    tapDelete() {
      this.event("delete");
    },
    tapArchive() {
      this.event("archive");
    }
  }
});
const _hoisted_1 = {
  key: 0,
  class: "blitz-form__validation-error text-negative"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BlitzField = resolveComponent("BlitzField");
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.formComponent), {
    ref: "refBlitzForm",
    class: normalizeClass([`blitz-form blitz-form--nav-${_ctx.actionButtonsPosition}`, _ctx.$attrs.class]),
    style: normalizeStyle(_ctx.$attrs.style),
    onClick: _cache[0] || (_cache[0] = (e) => _ctx.$emit("click", e)),
    onDblclick: _cache[1] || (_cache[1] = (e) => _ctx.$emit("dblclick", e)),
    onMousedown: _cache[2] || (_cache[2] = (e) => _ctx.$emit("mousedown", e)),
    onMouseup: _cache[3] || (_cache[3] = (e) => _ctx.$emit("mouseup", e))
  }, {
    default: withCtx(() => [
      _ctx.isFullString(_ctx.formErrorMsg) || _ctx.actionButtonsSchema.length ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(`blitz-form__nav-row blitz-form__nav-row--${_ctx.actionButtonsPosition}`)
      }, [
        _ctx.isFullString(_ctx.formErrorMsg) ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(_ctx.formErrorMsg), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.actionButtonsSchema, (blueprint, i) => {
          return openBlock(), createBlock(_component_BlitzField, mergeProps({
            key: `${blueprint.id}-${i}`
          }, blueprint), null, 16);
        }), 128))
      ], 2)) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({ schema: _ctx.cSchema, formData: _ctx.formData, formDataFlat: _ctx.formDataFlat, updateField: _ctx.updateField })), () => [
        createElementVNode("div", {
          class: "blitz-form__form",
          style: normalizeStyle(`grid-template-columns:${" minmax(0, 1fr)".repeat(_ctx.columnCount)}; grid-gap: ${_ctx.gridGap}`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.cSchema, (field, i) => {
            return openBlock(), createBlock(_component_BlitzField, mergeProps({
              key: `${field.id}-${i}`,
              ref_for: true,
              ref: `ref-field-${i}`
            }, __spreadProps(__spreadValues({}, field), { span: void 0 }), {
              modelValue: _ctx.formDataFlat[field.id],
              style: field.span ? `grid-column: ${field.span === true ? "1 / -1" : `span ${field.span}`}` : "",
              "onUpdate:modelValue": (value, origin) => _ctx.updateField({ id: field.id, value, origin })
            }), null, 16, ["modelValue", "style", "onUpdate:modelValue"]);
          }), 128))
        ], 4)
      ])
    ]),
    _: 3
  }, 8, ["class", "style"]);
}
var BlitzForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var BlitzListForm_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "BlitzListForm",
  components: { BlitzField },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    schema: {
      type: Array,
      default: () => [{ component: "input" }]
    },
    attrsToPass: {
      type: Array,
      default: () => [
        "formData",
        "formDataFlat",
        "formId",
        "formMode",
        "mode",
        "updateField",
        "lang"
      ]
    },
    maxRows: { type: Number, default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    readonly: { type: Boolean, default: void 0 }
  },
  emits: {
    "update:modelValue": null
  },
  computed: {
    cValue: {
      get() {
        const { modelValue, schema, disabled, readonly, maxRows } = this;
        const emptyRow = schema.reduce((carry, { id }) => __spreadProps(__spreadValues({}, carry), { [id]: void 0 }), {});
        if (!disabled && !readonly && (!isNumber(maxRows) || maxRows > modelValue.length)) {
          return modelValue.concat([emptyRow]);
        }
        return modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      }
    },
    listFormAttrsToPass() {
      const { attrsToPass, getPropOrAttrOrParentProp, modelValue } = this;
      const attrs = attrsToPass.reduce((carry, attrKey) => {
        carry[attrKey] = getPropOrAttrOrParentProp(attrKey);
        return carry;
      }, {});
      if (!attrs.formData) {
        return __spreadProps(__spreadValues({}, attrs), { formData: modelValue });
      }
      return attrs;
    },
    cSchema() {
      const { schema, disabled, readonly, listFormAttrsToPass } = this;
      return schema.map((blueprint) => {
        const overwritableDefaults = { disabled, readonly };
        const overwrites = {
          label: "",
          subLabel: "",
          slots: { label: void 0 }
        };
        if (blueprint.slot) {
          overwrites.slots = merge(blueprint.slots || {}, { default: blueprint.slot });
        }
        const fieldClasses = blueprint.fieldClasses || blueprint.class;
        if (fieldClasses)
          overwrites.fieldClasses = fieldClasses;
        const fieldStyle = blueprint.fieldStyle || blueprint.style;
        if (fieldStyle)
          overwrites.fieldStyle = fieldStyle;
        return merge(listFormAttrsToPass, overwritableDefaults, blueprint, overwrites);
      });
    },
    schemaLabelsAndAttrs() {
      const { schema, listFormAttrsToPass } = this;
      return schema.map((subfield) => {
        return merge(listFormAttrsToPass, subfield, { component: void 0 });
      });
    },
    gridTemplateColumnsCalculated() {
      const { schema } = this;
      return schema.reduce((total, field) => {
        const fr = Number(field.span);
        if (isNumber(fr))
          return `${total} ${fr}fr`;
        return `${total} ${field.span || "1fr"}`;
      }, "");
    }
  },
  methods: {
    getPropOrAttrOrParentProp(propKey) {
      if (propKey in this)
        return this[propKey];
      if (propKey in this.$attrs)
        return this.$attrs[propKey];
      if (this.$parent && propKey in this.$parent)
        return this.$parent[propKey];
      if (this.$parent && this.$parent.$parent && propKey in this.$parent.$parent) {
        return this.$parent.$parent[propKey];
      }
      return void 0;
    },
    deleteRow(rowIndex) {
      const { modelValue } = this;
      const allRows = copy(modelValue);
      if (allRows[rowIndex] === void 0)
        return;
      allRows.splice(rowIndex, 1);
      this.$emit("update:modelValue", allRows);
    },
    setSubFieldValue({ id, value: newValue, rowIndex }, origin) {
      if (origin === "default" || !id)
        return;
      const { modelValue: oldValue } = this;
      const allRows = copy(oldValue);
      if (allRows[rowIndex] === void 0)
        allRows[rowIndex] = {};
      allRows[rowIndex][id] = newValue;
      this.$emit("update:modelValue", allRows);
    },
    onDeleteKey(rowIndex) {
      const { modelValue, deleteRow } = this;
      const allRows = modelValue;
      const row = allRows[rowIndex];
      if (!row)
        return;
      if (Object.keys(row).every((key) => row[key] === "" || row[key] === 0)) {
        deleteRow(rowIndex);
      }
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BlitzField = resolveComponent("BlitzField");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["blitz-list-form", _ctx.$attrs.class]),
    style: normalizeStyle(_ctx.$attrs.style)
  }, [
    createElementVNode("div", {
      class: "blitz-list-form__row",
      style: normalizeStyle(`grid-template-columns: ${_ctx.gridTemplateColumnsCalculated}`)
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.schemaLabelsAndAttrs, (subfield, fieldIndex) => {
        return openBlock(), createBlock(_component_BlitzField, mergeProps({ key: fieldIndex }, subfield, { class: "blitz-list-form__sub-field" }), null, 16);
      }), 128))
    ], 4),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.cValue, (row, rowIndex) => {
      return openBlock(), createElementBlock("div", {
        key: rowIndex,
        class: "blitz-list-form__row",
        style: normalizeStyle(`grid-template-columns: ${_ctx.gridTemplateColumnsCalculated}`)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.cSchema, (subfield, fieldIndex) => {
          return openBlock(), createBlock(_component_BlitzField, mergeProps({ key: fieldIndex }, subfield, {
            class: "blitz-list-form__sub-field",
            rowIndex,
            rowData: _ctx.cValue[rowIndex],
            updateRow: (params) => _ctx.setSubFieldValue({ id: params.id, value: params.value, rowIndex }),
            deleteRow: () => _ctx.deleteRow(rowIndex),
            modelValue: _ctx.cValue[rowIndex][subfield.id],
            "onUpdate:modelValue": (val, origin) => _ctx.setSubFieldValue({ id: subfield.id, value: val, rowIndex }, origin),
            onKeyup: withKeys(($event) => _ctx.onDeleteKey(rowIndex), ["delete"])
          }), null, 16, ["rowIndex", "rowData", "updateRow", "deleteRow", "modelValue", "onUpdate:modelValue", "onKeyup"]);
        }), 128))
      ], 4);
    }), 128))
  ], 6);
}
var BlitzListForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { BlitzField, BlitzForm, _sfc_main$3 as BlitzH, BlitzListForm, getBlitzFieldOverwrites, validateFormPerSchema };
