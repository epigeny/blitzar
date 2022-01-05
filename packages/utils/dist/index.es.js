import { flattenObjectProps } from 'flatten-anything';
import { isArray, isFullString, isPlainObject, isDate, isNumber } from 'is-what';
import { commafy } from 'commafy-anything';

/**
 * Flattens an object to be in line with a schema.
 *
 * @export
 * @param {Record<string, any>} target the target object
 * @param {Record<string, any> | (Record<string, any>[])} schema
 * @returns {Record<string, any>}
 */
function flattenPerSchema(target, schema) {
    const schemaArray = isArray(schema) ? schema : Object.values(schema);
    const schemaNestedIds = schemaArray
        .map((blueprint) => blueprint.id)
        .filter((id) => isFullString(id) && id.includes('.'));
    return flattenObjectProps(target, schemaNestedIds);
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
    const valueArray = !isArray(value) ? [value] : value;
    const newValue = valueArray.map((val) => {
        var _a;
        let newVal = val;
        // special handling for HTML5 'select' fields:
        const isHtml5SelectField = component === 'select' && (isArray(slot) || isArray(slots === null || slots === void 0 ? void 0 : slots.default));
        const selectOptions = isHtml5SelectField ? slot || (slots === null || slots === void 0 ? void 0 : slots.default) : options;
        if (isArray(selectOptions)) {
            if (valueType === 'object' && isPlainObject(value)) {
                newVal = multiple
                    ? Object.values(value)
                        .filter((v) => v)
                        .join(', ')
                    : value.label;
            }
            else {
                if (isPlainObject(val)) {
                    newVal = val.label;
                }
                else {
                    const option = selectOptions.find((o) => o.value === val) || {};
                    newVal = option.label || option.slot || ((_a = option.slots) === null || _a === void 0 ? void 0 : _a.default) || val;
                }
            }
        }
        if (valueType === 'date' && isDate(value))
            newVal = value.toLocaleDateString();
        if (valueType === 'number' && isNumber(value))
            newVal = commafy(newVal);
        if (suffix)
            newVal = `${newVal}${suffix}`;
        if (prefix)
            newVal = `${prefix}${newVal}`;
        return newVal;
    });
    return newValue.join(', ');
}

export { flattenPerSchema, parseFieldValue };
