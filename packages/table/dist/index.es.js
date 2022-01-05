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
import { defineComponent, ref, computed, watch, nextTick, renderSlot, resolveComponent, openBlock, createElementBlock, mergeProps, createCommentVNode, createBlock, Fragment, renderList, onBeforeMount, watchEffect, createVNode, createElementVNode, withCtx, createTextVNode, toDisplayString, normalizeClass } from "vue";
import { merge } from "merge-anything";
import { isPlainObject, isNumber, isEmptyObject, isBoolean, isArray, isFullArray, isFunction, isFullString } from "is-what";
import { getProp } from "path-to-prop";
import { BlitzField, BlitzForm, getBlitzFieldOverwrites } from "@blitzar/form";
import { MORE_PAGES, ROW_SELECTION_ID } from "@blitzar/types";
function retrievePaths(object, path, result, untilDepth) {
  if (!isPlainObject(object) || !Object.keys(object).length || object.methodName === "FieldValue.serverTimestamp") {
    if (!path)
      return object;
    result[path] = object;
    return result;
  }
  if (isNumber(untilDepth))
    untilDepth--;
  return Object.keys(object).reduce(function(carry, key) {
    var _a;
    var pathUntilNow = path ? path + "." : "";
    var newPath = pathUntilNow + key;
    var extra = untilDepth === -1 ? (_a = {}, _a[newPath] = object[key], _a) : retrievePaths(object[key], newPath, result, untilDepth);
    return Object.assign(carry, extra);
  }, {});
}
function flattenObject(object, untilDepth) {
  var result = {};
  return retrievePaths(object, null, result, untilDepth);
}
function createPagingRange(nrOfPages, currentPage) {
  const delta = 2;
  const range = [];
  const rangeWithDots = [];
  let length;
  range.push(1);
  if (nrOfPages <= 1) {
    return range;
  }
  for (let i = currentPage - delta; i <= currentPage + delta; i++) {
    if (i < nrOfPages && i > 1) {
      range.push(i);
    }
  }
  range.push(nrOfPages);
  for (let i = 0; i < range.length; i++) {
    if (length) {
      if (range[i] - length === 2) {
        rangeWithDots.push(length + 1);
      } else if (range[i] - length !== 1) {
        rangeWithDots.push(MORE_PAGES);
      }
    }
    rangeWithDots.push(range[i]);
    length = range[i];
  }
  return rangeWithDots;
}
function fieldSorter(dsSortby, dsSortAs = {}) {
  const dir = [];
  let i;
  const length = dsSortby.length;
  dsSortby = dsSortby.map(function(colId, i2) {
    if (colId[0] === "-") {
      dir[i2] = -1;
      colId = colId.substring(1);
    } else {
      dir[i2] = 1;
    }
    return colId;
  });
  return function(rowA, rowB) {
    const rowDataA = rowA.rowData;
    const rowDataB = rowB.rowData;
    for (i = 0; i < length; i++) {
      const colId = dsSortby[i];
      const valueA = getProp(rowDataA, colId);
      const valueB = getProp(rowDataB, colId);
      const sortAsFn = dsSortAs[colId];
      const aVal = sortAsFn ? sortAsFn(valueA, rowDataA) : valueA;
      const bVal = sortAsFn ? sortAsFn(valueB, rowDataB) : valueB;
      if (aVal > bVal) {
        return dir[i];
      }
      if (aVal < bVal) {
        return -dir[i];
      }
    }
    return 0;
  };
}
function filterRow(row, dsFilterFields) {
  const { rowData } = row;
  const filterResults = Object.entries(dsFilterFields).map(([colId, filterValueOrFn]) => {
    const cellValue = getProp(rowData, colId);
    if (typeof filterValueOrFn === "function") {
      return filterValueOrFn(cellValue, rowData);
    }
    return cellValue === filterValueOrFn;
  });
  return filterResults.every((r) => r === true);
}
function findAny(dsSearchIn, dsSearchAs, row, searchStr) {
  const { rowData, rowDataFlat } = row;
  for (const [colId, searchAsFn] of Object.entries(dsSearchAs)) {
    const notASearchableColId = dsSearchIn.length && !dsSearchIn.includes(colId);
    if (notASearchableColId)
      continue;
    const cellValue = getProp(rowData, colId);
    if (searchAsFn(cellValue, searchStr, rowData) === true) {
      return true;
    }
  }
  searchStr = String(searchStr).toLowerCase();
  for (const [key, value] of Object.entries(rowDataFlat)) {
    const notASearchableKey = dsSearchIn.length && !dsSearchIn.includes(key);
    if (notASearchableKey)
      continue;
    const valueAsStr = String(value).toLowerCase();
    if (valueAsStr.indexOf(searchStr) >= 0) {
      return true;
    }
  }
  return false;
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$4 = defineComponent({
  name: "BlitzTableOuter",
  props: {
    dsData: { type: Array, default: () => [] },
    dsFilterFields: { type: Object, default: () => ({}) },
    dsSortby: { type: Array, default: () => [] },
    dsSearchIn: { type: Array, default: () => [] },
    dsSearchAs: { type: Object, default: () => ({}) },
    dsSortAs: { type: Object, default: () => ({}) }
  },
  setup(props) {
    const dsPage = ref(1);
    const dsSearch = ref("");
    const dsShowEntries = ref(10);
    const indexes = ref([]);
    const search = (value) => {
      dsSearch.value = value;
    };
    const showEntries = async (value) => {
      const pagesBeforeChange = dsPages.value;
      dsShowEntries.value = value;
      await nextTick();
      const pagesAfterChange = dsPages.value;
      if (pagesAfterChange.length < pagesBeforeChange.length) {
        setActive(pagesAfterChange[pagesAfterChange.length - 1]);
      }
    };
    const setActive = (value) => {
      dsPage.value = value;
    };
    const whenChanged = computed(() => {
      props.dsData;
      dsSearch.value;
      props.dsSortby;
      props.dsFilterFields;
      props.dsSearchIn;
      props.dsSearchAs;
      props.dsSortAs;
      dsShowEntries.value;
      return Date.now();
    });
    const dsRows = computed(() => {
      return indexes.value.slice(dsFrom.value, dsTo.value);
    });
    const dsPages = computed(() => {
      return createPagingRange(dsPagecount.value, dsPage.value);
    });
    const dsResultsNumber = computed(() => {
      return indexes.value.length;
    });
    const dsPagecount = computed(() => {
      return Math.ceil(dsResultsNumber.value / dsShowEntries.value);
    });
    const dsFrom = computed(() => {
      return (dsPage.value - 1) * dsShowEntries.value;
    });
    const dsTo = computed(() => {
      return dsPage.value * dsShowEntries.value;
    });
    watch(dsResultsNumber, (val, oldVal) => {
      setActive(1);
    });
    watch(whenChanged, (val, oldVal) => {
      let result = [];
      if (!dsSearch.value && !props.dsSortby.length && isEmptyObject(props.dsFilterFields)) {
        result = props.dsData.map((val2, i) => i);
      } else {
        result = props.dsData.map((val2, i) => ({
          rowIndex: i,
          rowData: val2,
          rowDataFlat: flattenObject(val2)
        }));
        result = result.filter((row) => {
          return filterRow(row, props.dsFilterFields) && findAny(props.dsSearchIn, props.dsSearchAs, row, dsSearch.value);
        });
        if (props.dsSortby.length) {
          result.sort(fieldSorter(props.dsSortby, props.dsSortAs));
        }
        result = result.map((row) => row.rowIndex);
      }
      indexes.value = result;
    }, {
      immediate: true
    });
    return {
      dsIndexes: indexes,
      dsShowEntries,
      dsResultsNumber,
      dsPage,
      dsPagecount,
      dsFrom,
      dsTo,
      dsRows,
      dsPages,
      search,
      showEntries,
      setActive
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default", {
    ds: {
      dsData: _ctx.dsData,
      dsIndexes: _ctx.dsIndexes,
      dsRows: _ctx.dsRows,
      dsShowEntries: _ctx.dsShowEntries,
      dsResultsNumber: _ctx.dsResultsNumber,
      dsPage: _ctx.dsPage,
      dsPagecount: _ctx.dsPagecount,
      dsFrom: _ctx.dsFrom,
      dsTo: _ctx.dsTo,
      dsPages: _ctx.dsPages,
      search: _ctx.search,
      showEntries: _ctx.showEntries,
      setActive: _ctx.setActive
    }
  });
}
var BlitzTableOuter = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var BlitzTh_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = defineComponent({
  name: "BlitzTh",
  components: { BlitzField },
  props: {
    column: { type: Object, required: true },
    sortState: { type: Object, required: true }
  },
  emits: ["update:sortState"],
  setup(props, { emit }) {
    function onClick(e) {
      if (!props.column.sortable)
        return;
      e.stopPropagation();
      const id = props.column.id;
      if (props.sortState.id !== id) {
        return emit("update:sortState", { id, direction: "asc" });
      }
      if (props.sortState.id === id) {
        if (props.sortState.direction === "asc") {
          return emit("update:sortState", { id, direction: "desc" });
        } else {
          return emit("update:sortState", { id: null, direction: "none" });
        }
      }
    }
    const isSelectionCol = props.column.id === ROW_SELECTION_ID;
    return { onClick, isSelectionCol };
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "_sort-arrows"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BlitzField = resolveComponent("BlitzField");
  return openBlock(), createElementBlock("th", mergeProps(_ctx.$attrs, {
    class: [
      "blitz-field-th",
      _ctx.column.sortable === true ? "_sortable" : "",
      _ctx.column.id === _ctx.sortState.id ? `_${_ctx.sortState.direction}` : ""
    ],
    onClick: _cache[0] || (_cache[0] = (e) => _ctx.onClick(e))
  }), [
    renderSlot(_ctx.$slots, "default", {}, void 0, true),
    _ctx.column.sortable === true ? (openBlock(), createElementBlock("i", _hoisted_1$1)) : createCommentVNode("", true),
    _ctx.isSelectionCol ? (openBlock(), createBlock(_component_BlitzField, mergeProps({ key: 1 }, _ctx.column, { label: void 0 }), null, 16)) : createCommentVNode("", true)
  ], 16);
}
var BlitzTh = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-0bb930f8"]]);
const _sfc_main$2 = defineComponent({
  name: "BlitzTableItem",
  props: {
    dsFrom: { type: Number, required: true },
    dsTo: { type: Number, required: true },
    dsData: { type: Array, required: true },
    dsRows: { type: Array, required: true }
  },
  setup(props) {
    const visibleIndexes = computed(() => {
      const arr = [];
      for (let i = props.dsFrom; i < props.dsTo; i++) {
        arr.push(i);
      }
      return arr;
    });
    return {
      visibleIndexes
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dsRows, (rowIndex, i) => {
      return renderSlot(_ctx.$slots, "default", {
        row: _ctx.dsData[rowIndex],
        rowIndex,
        index: _ctx.visibleIndexes[i]
      });
    }), 256)),
    !_ctx.dsRows.length ? renderSlot(_ctx.$slots, "noDataFound", { key: 0 }) : createCommentVNode("", true)
  ], 64);
}
var BlitzTableItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var BlitzTableInner_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = defineComponent({
  name: "BlitzTableInner",
  components: { BlitzForm, BlitzField, BlitzTh, BlitzTableItem },
  inheritAttrs: false,
  props: {
    ds: { type: Object, required: true },
    schemaColumns: { type: Array, default: void 0 },
    schemaGrid: { type: Array, default: void 0 },
    rows: { type: Array, required: true },
    isGrid: { type: Boolean, required: true },
    gridBlitzFormOptions: { type: Object, default: () => ({}) },
    selectedRows: { type: Array, default: () => [] },
    sortState: { type: Object, required: true },
    mode: { type: String, required: true },
    rowsPerPage: { type: Number, default: 10 },
    titleField: { type: Object, default: void 0 },
    searchField: { type: Object, default: void 0 },
    gridToggleField: { type: Object, default: void 0 },
    paginationField: { type: Object, default: void 0 },
    rowsPerPageField: { type: Object, default: void 0 },
    shownRowsInfoField: { type: Object, default: void 0 }
  },
  emits: {
    rowClick: (e, rowData) => isPlainObject(rowData),
    rowDblclick: (e, rowData) => isPlainObject(rowData),
    cellClick: (e, rowData, colId) => isPlainObject(rowData),
    cellDblclick: (e, rowData, colId) => isPlainObject(rowData),
    updateCell: ({
      rowId,
      colId,
      value,
      origin
    }) => true,
    "update:isGrid": (payload) => isBoolean(payload),
    "update:selectedRows": (payload) => isArray(payload),
    "update:sortState": (payload) => isPlainObject(payload)
  },
  setup(props, { emit }) {
    function getSelectionProps(col) {
      if ((col == null ? void 0 : col.id) !== ROW_SELECTION_ID)
        return;
      return {
        events: __spreadProps(__spreadValues({}, col.events), {
          ["update:modelValue"]: (wasSelected, { formData }) => {
            const isSelectAllHeader = formData === void 0;
            if (isSelectAllHeader) {
              if (wasSelected) {
                emit("update:selectedRows", props.ds.dsIndexes.map((rowIndex) => props.ds.dsData[rowIndex]));
                return;
              }
              emit("update:selectedRows", []);
              return;
            }
            if (wasSelected) {
              emit("update:selectedRows", [...props.selectedRows, formData]);
              return;
            }
            emit("update:selectedRows", props.selectedRows.filter((row) => row.id !== formData.id));
            return;
          }
        }),
        mode: "edit",
        sortable: false,
        parseValue: (val, { formData }) => {
          const isSelectAllHeader = formData === void 0;
          return isSelectAllHeader ? props.selectedRows.length === props.rows.length : !!props.selectedRows.find((s) => s.id === (formData == null ? void 0 : formData.id));
        }
      };
    }
    const schemaColumnsComputed = computed(() => {
      if (!props.schemaColumns)
        return props.schemaColumns;
      return props.schemaColumns.map((col) => {
        const selectionProps = getSelectionProps(col);
        return __spreadValues(__spreadValues({}, col), selectionProps);
      });
    });
    const schemaGridComputed = computed(() => {
      if (!props.schemaGrid)
        return props.schemaGrid;
      return props.schemaGrid.map((col) => {
        const selectionProps = getSelectionProps(col);
        return __spreadValues(__spreadValues({}, col), selectionProps);
      });
    });
    const searchTextInner = ref("");
    const searchText = computed({
      get() {
        return searchTextInner.value;
      },
      set(val) {
        searchTextInner.value = val;
        props.ds.search(val);
      }
    });
    const isGridMode = computed({
      get() {
        return props.isGrid;
      },
      set(val) {
        emit("update:isGrid", val);
      }
    });
    const currentPage = computed({
      get() {
        return props.ds.dsPage;
      },
      set(val) {
        props.ds.setActive(Number(val));
      }
    });
    const paginationFieldProps = computed(() => ({
      pageCount: props.ds.dsPagecount,
      pagesShown: props.ds.dsPages
    }));
    const rowsPerPageInner = computed({
      get() {
        return props.ds.dsShowEntries;
      },
      set(val) {
        props.ds.showEntries(Number(val));
      }
    });
    onBeforeMount(() => {
      if (!props.paginationField) {
        rowsPerPageInner.value = props.ds.dsData.length;
        watchEffect(() => rowsPerPageInner.value = props.ds.dsData.length);
      } else {
        rowsPerPageInner.value = props.rowsPerPage;
      }
    });
    const showingFrom = computed(() => props.ds.dsResultsNumber !== 0 ? props.ds.dsFrom + 1 : 0);
    const showingTo = computed(() => props.ds.dsTo >= props.ds.dsResultsNumber ? props.ds.dsResultsNumber : props.ds.dsTo);
    const rowCountFiltered = computed(() => props.ds.dsResultsNumber);
    const shownRowsInfoText = computed(() => `${showingFrom.value} - ${showingTo.value} / ${rowCountFiltered.value}`);
    const shownRowsInfoFieldProps = computed(() => ({
      showingFrom: showingFrom.value,
      showingTo: showingTo.value,
      rowCountFiltered: rowCountFiltered.value,
      rowCountTotal: props.ds.dsData.length,
      slots: { default: shownRowsInfoText.value }
    }));
    function onRowClick(e, rowData) {
      emit("rowClick", e, rowData);
    }
    function onRowDblclick(e, rowData) {
      emit("rowDblclick", e, rowData);
    }
    function onCellClick(e, rowData, colId) {
      emit("cellClick", e, rowData, colId);
    }
    function onCellDblclick(e, rowData, colId) {
      emit("cellDblclick", e, rowData, colId);
    }
    function onUpdateCell(rowId, colId, value, origin) {
      emit("updateCell", { rowId, colId, value, origin });
    }
    return {
      schemaColumnsComputed,
      schemaGridComputed,
      emit,
      searchText,
      isGridMode,
      currentPage,
      paginationFieldProps,
      rowsPerPageInner,
      shownRowsInfoFieldProps,
      ROW_SELECTION_ID,
      onRowClick,
      onRowDblclick,
      onCellClick,
      onCellDblclick,
      onUpdateCell
    };
  }
});
const _hoisted_1 = { class: "blitz-table--table blitz-table--content" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = /* @__PURE__ */ createElementVNode("div", null, [
  /* @__PURE__ */ createElementVNode("p", { class: "text-center" }, "No results found")
], -1);
const _hoisted_4 = {
  key: 1,
  class: "blitz-table--grid"
};
const _hoisted_5 = /* @__PURE__ */ createElementVNode("div", null, [
  /* @__PURE__ */ createElementVNode("p", { class: "text-center" }, "No results found")
], -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BlitzField = resolveComponent("BlitzField");
  const _component_BlitzTh = resolveComponent("BlitzTh");
  const _component_BlitzForm = resolveComponent("BlitzForm");
  const _component_BlitzTableItem = resolveComponent("BlitzTableItem");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_BlitzField, mergeProps({ class: "blitz-table--title" }, _ctx.titleField), null, 16),
    _ctx.searchField ? (openBlock(), createBlock(_component_BlitzField, mergeProps({
      key: 0,
      modelValue: _ctx.searchText,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.searchText = $event)
    }, _ctx.searchField, { class: "blitz-table--search" }), null, 16, ["modelValue"])) : createCommentVNode("", true),
    _ctx.gridToggleField ? (openBlock(), createBlock(_component_BlitzField, mergeProps({
      key: 1,
      modelValue: _ctx.isGridMode,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isGridMode = $event)
    }, _ctx.gridToggleField, { class: "blitz-table--grid-toggle" }), null, 16, ["modelValue"])) : createCommentVNode("", true),
    createElementVNode("table", _hoisted_1, [
      createElementVNode("thead", null, [
        createElementVNode("tr", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.schemaColumnsComputed, (column, i) => {
            return openBlock(), createBlock(_component_BlitzTh, {
              key: i,
              column,
              sortState: _ctx.sortState,
              "onUpdate:sortState": _cache[2] || (_cache[2] = (val) => _ctx.emit("update:sortState", val))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(column.label || ""), 1)
              ]),
              _: 2
            }, 1032, ["column", "sortState"]);
          }), 128))
        ])
      ]),
      !_ctx.isGridMode && _ctx.schemaColumnsComputed ? (openBlock(), createElementBlock("tbody", _hoisted_2, [
        createVNode(_component_BlitzTableItem, {
          dsFrom: _ctx.ds.dsFrom,
          dsTo: _ctx.ds.dsTo,
          dsData: _ctx.ds.dsData,
          dsRows: _ctx.ds.dsRows
        }, {
          default: withCtx(({ row, rowIndex }) => [
            (openBlock(), createBlock(_component_BlitzForm, {
              id: row.id,
              key: rowIndex + JSON.stringify(row),
              formComponent: "tr",
              class: normalizeClass([
                "blitz-table__row",
                "blitz-row"
              ]),
              schema: _ctx.schemaColumnsComputed,
              modelValue: row,
              mode: _ctx.mode,
              onUpdateField: ({ id: colId, value, origin }) => _ctx.onUpdateCell(row.id, colId, value, origin),
              onClick: (e) => _ctx.onRowClick(e, row),
              onDblclick: (e) => _ctx.onRowDblclick(e, row)
            }, {
              default: withCtx((blitzFormCtx) => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(blitzFormCtx.schema, (field) => {
                  return openBlock(), createElementBlock("td", {
                    key: field.id
                  }, [
                    createVNode(_component_BlitzField, mergeProps(__spreadProps(__spreadValues({}, field), {
                      span: void 0,
                      label: void 0,
                      subLabel: void 0,
                      component: field.component || "div",
                      modelValue: blitzFormCtx.formDataFlat[field.id]
                    }), {
                      "onUpdate:modelValue": (value, origin) => blitzFormCtx.updateField({ id: field.id, value, origin }),
                      onClick: (e) => _ctx.onCellClick(e, row, field.id),
                      onDblclick: (e) => _ctx.onCellDblclick(e, row, field.id)
                    }), null, 16, ["onUpdate:modelValue", "onClick", "onDblclick"])
                  ]);
                }), 128))
              ]),
              _: 2
            }, 1032, ["id", "class", "schema", "modelValue", "mode", "onUpdateField", "onClick", "onDblclick"]))
          ]),
          noDataFound: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }, 8, ["dsFrom", "dsTo", "dsData", "dsRows"])
      ])) : createCommentVNode("", true),
      _ctx.isGridMode && _ctx.schemaGridComputed ? (openBlock(), createElementBlock("div", _hoisted_4, [
        createVNode(_component_BlitzTableItem, {
          dsFrom: _ctx.ds.dsFrom,
          dsTo: _ctx.ds.dsTo,
          dsData: _ctx.ds.dsData,
          dsRows: _ctx.ds.dsRows
        }, {
          default: withCtx(({ row, rowIndex }) => [
            (openBlock(), createBlock(_component_BlitzForm, mergeProps({
              id: row.id,
              key: rowIndex + JSON.stringify(row),
              class: ["blitz-table--grid-card", []],
              formComponent: "div",
              mode: _ctx.mode
            }, _ctx.gridBlitzFormOptions, {
              modelValue: row,
              schema: _ctx.schemaGridComputed,
              onUpdateField: ({ id: colId, value, origin }) => _ctx.onUpdateCell(row.id, colId, value, origin)
            }), null, 16, ["id", "class", "mode", "modelValue", "schema", "onUpdateField"]))
          ]),
          noDataFound: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        }, 8, ["dsFrom", "dsTo", "dsData", "dsRows"])
      ])) : createCommentVNode("", true)
    ]),
    _ctx.paginationField ? (openBlock(), createBlock(_component_BlitzField, mergeProps({
      key: 2,
      modelValue: _ctx.currentPage,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.currentPage = $event),
      labelPosition: "left",
      class: "blitz-table--pagination"
    }, __spreadValues(__spreadValues({}, _ctx.paginationField), _ctx.paginationFieldProps)), null, 16, ["modelValue"])) : createCommentVNode("", true),
    _ctx.rowsPerPageField ? (openBlock(), createBlock(_component_BlitzField, mergeProps({
      key: 3,
      modelValue: _ctx.rowsPerPageInner,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.rowsPerPageInner = $event),
      labelPosition: "left",
      class: "blitz-table--rows-per-page"
    }, _ctx.rowsPerPageField), null, 16, ["modelValue"])) : createCommentVNode("", true),
    _ctx.shownRowsInfoField ? (openBlock(), createBlock(_component_BlitzField, mergeProps({ key: 4 }, __spreadValues(__spreadValues({}, _ctx.shownRowsInfoFieldProps), _ctx.shownRowsInfoField), { class: "blitz-table--shown-rows-info" }), null, 16)) : createCommentVNode("", true)
  ], 64);
}
var BlitzTableInner = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var BlitzTable_vue_vue_type_style_index_0_lang = "";
function getSortableProps(col) {
  if (!isBoolean(col == null ? void 0 : col.sortable) && isFullString(col == null ? void 0 : col.id)) {
    return { sortable: true };
  }
  return void 0;
}
const _sfc_main = defineComponent({
  name: "BlitzTable",
  components: { BlitzTableInner, BlitzTableOuter },
  props: {
    schemaColumns: {
      type: Array,
      default: void 0
    },
    schemaGrid: {
      type: Array,
      default: void 0
    },
    rows: {
      type: Array,
      required: true
    },
    isGrid: { type: Boolean, default: void 0 },
    gridBlitzFormOptions: {
      type: Object,
      default: () => ({})
    },
    selectedRows: {
      type: Array,
      default: () => []
    },
    mode: { type: String, default: "raw" },
    rowsPerPage: { type: Number, default: 10 },
    titleField: { type: Object, default: void 0 },
    searchField: { type: Object, default: void 0 },
    gridToggleField: { type: Object, default: void 0 },
    rowsPerPageField: { type: Object, default: void 0 },
    shownRowsInfoField: { type: Object, default: void 0 },
    paginationField: { type: Object, default: void 0 }
  },
  emits: {
    rowClick: (e, rowData) => isPlainObject(rowData),
    rowDblclick: (e, rowData) => isPlainObject(rowData),
    cellClick: (e, rowData, colId) => isPlainObject(rowData),
    cellDblclick: (e, rowData, colId) => isPlainObject(rowData),
    updateCell: ({
      rowId,
      colId,
      value,
      origin
    }) => true,
    "update:isGrid": (payload) => isBoolean(payload),
    "update:selectedRows": (payload) => isArray(payload)
  },
  setup(props, { emit }) {
    const hasColumns = isFullArray(props.schemaColumns);
    const hasGrid = isFullArray(props.schemaGrid);
    const isGridInner = ref(isBoolean(props.isGrid) ? props.isGrid : !hasColumns && hasGrid);
    watchEffect(() => emit("update:isGrid", isGridInner.value));
    watchEffect(() => isGridInner.value = Boolean(props.isGrid));
    function applyBlitzFieldOverwrites(field) {
      if (!field)
        return void 0;
      return merge(field, getBlitzFieldOverwrites(field));
    }
    const selectedRowsComputed = computed({
      get() {
        return props.selectedRows;
      },
      set(newSelectedRows) {
        emit("update:selectedRows", newSelectedRows);
      }
    });
    const sortState = ref({ id: null, direction: "none" });
    const schemaColumnsComputed = computed(() => {
      if (!props.schemaColumns)
        return props.schemaColumns;
      return props.schemaColumns.map((col) => {
        const sortableProps = getSortableProps(col);
        return __spreadValues(__spreadValues({}, col), sortableProps);
      });
    });
    const dsSearchAsComputed = (schemaColumnsComputed.value || []).reduce((searchAsDic, column) => {
      if (!column.id)
        return searchAsDic;
      if (!isFunction(column.parseValue))
        return searchAsDic;
      const searchFn = (cellValue, searchString, rowData) => {
        const actualCellValue = getProp(rowData, column.id);
        const searchStr = String(searchString).toLowerCase();
        try {
          const parsedValue = column.parseValue(cellValue, { formData: rowData });
          const checkParsed = String(parsedValue).toLowerCase().indexOf(searchStr) >= 0;
          if (checkParsed === true) {
            return true;
          }
        } catch (error) {
        }
        return String(actualCellValue).toLowerCase().indexOf(searchStr) >= 0;
      };
      searchAsDic[column.id] = searchFn;
      return searchAsDic;
    }, {});
    const dsSortAsComputed = (schemaColumnsComputed.value || []).reduce((sortAsDic, column) => {
      if (!column.id)
        return sortAsDic;
      if (!column.sortable)
        return sortAsDic;
      if (!isFunction(column.parseValue))
        return sortAsDic;
      const sortAsFn = (cellValue, rowData) => {
        const parsedValue = column.parseValue(cellValue, { formData: rowData });
        return parsedValue;
      };
      sortAsDic[column.id] = sortAsFn;
      return sortAsDic;
    }, {});
    const dsSortbyComputed = computed(() => {
      if (!sortState.value.id)
        return [];
      if (sortState.value.direction === "desc")
        return [`-${sortState.value.id}`];
      return [sortState.value.id];
    });
    function onRowClick(e, rowData) {
      emit("rowClick", e, rowData);
    }
    function onRowDblclick(e, rowData) {
      emit("rowDblclick", e, rowData);
    }
    function onCellClick(e, rowData, colId) {
      emit("cellClick", e, rowData, colId);
    }
    function onCellDblclick(e, rowData, colId) {
      emit("cellDblclick", e, rowData, colId);
    }
    function onUpdateCell({
      rowId,
      colId,
      value,
      origin
    }) {
      if (colId === ROW_SELECTION_ID)
        return;
      emit("updateCell", { rowId, colId, value, origin });
    }
    return {
      dsSearchAsComputed,
      dsSortAsComputed,
      selectedRowsComputed,
      sortState,
      dsSortbyComputed,
      applyBlitzFieldOverwrites,
      isGridInner,
      schemaColumnsComputed,
      onRowClick,
      onRowDblclick,
      onCellClick,
      onCellDblclick,
      onUpdateCell
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BlitzTableInner = resolveComponent("BlitzTableInner");
  const _component_BlitzTableOuter = resolveComponent("BlitzTableOuter");
  return openBlock(), createElementBlock("div", mergeProps({ class: "blitz-table" }, _ctx.$attrs), [
    createVNode(_component_BlitzTableOuter, {
      dsData: _ctx.rows,
      dsSortby: _ctx.dsSortbyComputed,
      dsFilterFields: {},
      dsSearchIn: [],
      dsSearchAs: _ctx.dsSearchAsComputed,
      dsSortAs: _ctx.dsSortAsComputed
    }, {
      default: withCtx(({ ds }) => [
        createVNode(_component_BlitzTableInner, {
          isGrid: _ctx.isGridInner,
          "onUpdate:isGrid": _cache[0] || (_cache[0] = ($event) => _ctx.isGridInner = $event),
          selectedRows: _ctx.selectedRowsComputed,
          "onUpdate:selectedRows": _cache[1] || (_cache[1] = ($event) => _ctx.selectedRowsComputed = $event),
          sortState: _ctx.sortState,
          "onUpdate:sortState": _cache[2] || (_cache[2] = ($event) => _ctx.sortState = $event),
          ds,
          schemaColumns: _ctx.schemaColumnsComputed,
          schemaGrid: _ctx.schemaGrid,
          gridBlitzFormOptions: _ctx.gridBlitzFormOptions,
          rows: _ctx.rows,
          mode: _ctx.mode,
          rowsPerPage: _ctx.rowsPerPage,
          titleField: _ctx.applyBlitzFieldOverwrites(_ctx.titleField),
          searchField: _ctx.applyBlitzFieldOverwrites(_ctx.searchField),
          gridToggleField: _ctx.applyBlitzFieldOverwrites(_ctx.gridToggleField),
          paginationField: _ctx.applyBlitzFieldOverwrites(_ctx.paginationField),
          rowsPerPageField: _ctx.applyBlitzFieldOverwrites(_ctx.rowsPerPageField),
          shownRowsInfoField: _ctx.applyBlitzFieldOverwrites(_ctx.shownRowsInfoField),
          onRowClick: _cache[3] || (_cache[3] = (e, rowData) => _ctx.onRowClick(e, rowData)),
          onRowDblclick: _cache[4] || (_cache[4] = (e, rowData) => _ctx.onRowDblclick(e, rowData)),
          onCellClick: _cache[5] || (_cache[5] = (e, rowData, colId) => _ctx.onCellClick(e, rowData, colId)),
          onCellDblclick: _cache[6] || (_cache[6] = (e, rowData, colId) => _ctx.onCellDblclick(e, rowData, colId)),
          onUpdateCell: _cache[7] || (_cache[7] = ({ rowId, colId, value, origin }) => _ctx.onUpdateCell({ rowId, colId, value, origin }))
        }, null, 8, ["isGrid", "selectedRows", "sortState", "ds", "schemaColumns", "schemaGrid", "gridBlitzFormOptions", "rows", "mode", "rowsPerPage", "titleField", "searchField", "gridToggleField", "paginationField", "rowsPerPageField", "shownRowsInfoField"])
      ]),
      _: 1
    }, 8, ["dsData", "dsSortby", "dsSearchAs", "dsSortAs"])
  ], 16);
}
var BlitzTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { BlitzTable };
