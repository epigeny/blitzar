(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('flatten-anything'), require('is-what'), require('commafy-anything')) :
  typeof define === 'function' && define.amd ? define(['exports', 'flatten-anything', 'is-what', 'commafy-anything'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["@blitzar/utils"] = {}, global.flattenAnything, global.isWhat, global.commafyAnything));
})(this, (function (exports, flattenAnything, isWhat, commafyAnything) { 'use strict';

  /**
   * Flattens an object to be in line with a schema.
   *
   * @export
   * @param {Record<string, any>} target the target object
   * @param {Record<string, any> | (Record<string, any>[])} schema
   * @returns {Record<string, any>}
   */
  function flattenPerSchema(target, schema) {
      const schemaArray = isWhat.isArray(schema) ? schema : Object.values(schema);
      const schemaNestedIds = schemaArray
          .map((blueprint) => blueprint.id)
          .filter((id) => isWhat.isFullString(id) && id.includes('.'));
      return flattenAnything.flattenObjectProps(target, schemaNestedIds);
  }

  /**
   * takes a value and returns the parsed value based on a BlitzField blueprint provided.
   *
   * @export
   * @param {*} value any value. In our example blueprint `1` should be returned as `'one'`
   * @param {Record<string, any>} blueprint a blueprint like eg.
   *     - `{options: [{value: 1, label: 'one'}]}` out of which the "label" will be retrieved.
   *     - Besides `options` you can also have `prefix` and `suffix`.
   *     - When `valueType: 'date'` and the value is a `Date` type, it will be printed as toLocaleDateString().
   *     - When `valueType: 'number'` it will receive thousand separators.
   * @returns {*} the parsed value
   */
  function parseFieldValue(value, blueprint) {
      if (!blueprint)
          return value;
      const { valueType, options, multiple, suffix, prefix, slot, slots, component } = blueprint;
      const valueArray = !isWhat.isArray(value) ? [value] : value;
      const newValue = valueArray.map((val) => {
          var _a;
          let newVal = val;
          // special handling for HTML5 'select' fields:
          const isHtml5SelectField = component === 'select' && (isWhat.isArray(slot) || isWhat.isArray(slots === null || slots === void 0 ? void 0 : slots.default));
          const selectOptions = isHtml5SelectField ? slot || (slots === null || slots === void 0 ? void 0 : slots.default) : options;
          if (isWhat.isArray(selectOptions)) {
              if (valueType === 'object' && isWhat.isPlainObject(value)) {
                  newVal = multiple
                      ? Object.values(value)
                          .filter((v) => v)
                          .join(', ')
                      : value.label;
              }
              else {
                  if (isWhat.isPlainObject(val)) {
                      newVal = val.label;
                  }
                  else {
                      const option = selectOptions.find((o) => o.value === val) || {};
                      newVal = option.label || option.slot || ((_a = option.slots) === null || _a === void 0 ? void 0 : _a.default) || val;
                  }
              }
          }
          if (valueType === 'date' && isWhat.isDate(value))
              newVal = value.toLocaleDateString();
          if (valueType === 'number' && isWhat.isNumber(value))
              newVal = commafyAnything.commafy(newVal);
          if (suffix)
              newVal = `${newVal}${suffix}`;
          if (prefix)
              newVal = `${prefix}${newVal}`;
          return newVal;
      });
      return newValue.join(', ');
  }

  exports.flattenPerSchema = flattenPerSchema;
  exports.parseFieldValue = parseFieldValue;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
