import { PropType } from 'vue';
import type { UpdateModelValueOrigin, DynamicProp, FormContext, Lang, Mode, ShowErrorsOn } from '@blitzar/types';
declare const _default: import("vue").DefineComponent<{
    /**
     * The value of the field. The BlitzForm `formData` is an object with the value of each field and the id for key.
     * @category model
     */
    modelValue: {
        type: PropType<any>;
        default: undefined;
    };
    /**
     * An `id` is required for the BlitzForm to be able to know which fields have which value.
     *
     * A string with dot notation will become a nested field in the `formData`.
     * @category model
     */
    id: {
        type: PropType<string>;
        default: undefined;
    };
    /**
     * A default value to be used when the `modelValue` is `undefined`.
     *
     * You can also pass a function that will receive two params you can work with: `(formData, context)`
     * - `formData` is the `modelValue` object of your BlitzForm. This will be undefined when BlitzField is used as stand-alone (without BlitzForm) unless you manually pass it.
     * - `context` is either your BlitzForm or BlitzField context with many usefull props. See the documentation on Dynamic Props for more info.
     * @category model
     */
    defaultValue: {
        type: PropType<(formData: Record<string, any>, formContext: FormContext) => any | any>;
        default: undefined;
    };
    /**
     * A function that modifies a value before it is used in the actual component. (see `parseInput` for the reverse)
     * @example val => val && val.split(' ').map(str => !str ? '' : `${str[0].toUpperCase()}${str.slice(1)}`).join(' ')
     * @example val => Number(val)
     * @example val => Date(val)
     * @category model
     */
    parseValue: {
        type: PropType<(val: any, formContext: FormContext) => any>;
        default: undefined;
    };
    /**
     * A function that modifies a value after user input but before the value is emitted. (see `parseValue` for the reverse)
     * @example val => (val || '').toLowerCase()
     * @example val => val.toISOString()
     * @category model
     */
    parseInput: {
        type: PropType<(val: any, formContext: FormContext) => any>;
        default: undefined;
    };
    /**
     * The component to be used for the field. Is mounted via `<component :is="component" />`. You can pass the name of a native HTML5 element or Vue component that is globally registered. You can also import the Vue file and directly pass the imported object, just like you would when you add it to a Vue file's components prop.
     * @example 'input'
     * @example 'MyCustomField'
     * @category content
     */
    component: {
        type: PropType<any>;
        default: undefined;
    };
    /**
     * An Object with keys for the slot names and an object for values. The object you pass to a slot is itself applied as a `<component is="" />`.
     *
     * The last example below shows how this is actually used under the hood.
     * @example { label: { component: 'MyTooltip', tip: 'hi' } } }
     * @example <slot name="label"><component :is="slots.label.component" v-bind="slots.label" /></slot>
     * @category content
     */
    slots: {
        type: PropType<{
            label?: string | Record<string, any> | Record<string, any>[] | undefined;
            default?: string | Record<string, any> | Record<string, any>[] | undefined;
        } | DynamicProp<{
            label?: string | Record<string, any> | Record<string, any>[] | undefined;
            default?: string | Record<string, any> | Record<string, any>[] | undefined;
        }>>;
        default: undefined;
    };
    /**
     * The text used in the UI for the action buttons and some error messages.
     *
     * The example shows how the error message for required fields is overwritten.
     * @example { requiredField: `Don't forget this field!` }
     * @category content
     */
    lang: {
        type: PropType<Partial<Lang> | DynamicProp<Partial<Lang>>>;
        /** @type () => Lang */
        default: () => {
            archive: string;
            delete: string;
            cancel: string;
            edit: string;
            save: string;
            requiredField: string;
            fieldValidationError: string;
            formValidationError: string;
        };
    };
    /**
     * The field label.
     * @example 'Your Name'
     * @category content
     */
    label: {
        type: PropType<string | DynamicProp<string>>;
        default: undefined;
    };
    /**
     * A smaller label for extra info.
     * @example 'first and last'
     * @category content
     */
    subLabel: {
        type: PropType<string | DynamicProp<string>>;
        default: undefined;
    };
    /**
     * The mode represents how fields are rendered
     * - `'edit'` — (default) show editable fields based on the schema
     * - `'readonly'` — show each field with `readonly: true`
     * - `'disabled'` — show each field with `disabled: true`
     * - `'raw'` — used to show raw data of your form (for select components, it will show the data label instead of its value)
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category state
     */
    mode: {
        type: PropType<Mode | DynamicProp<Mode>>;
        default: string;
        validator: (prop: any) => true;
    };
    /**
     * An Object with an event name as key and the handler function as value. The function you pass will receive the native event payload as first parameter and the BlitzField context (the component instance) as second: `($event, context) => {}`
     * @example { click: (val, { formData }) => console.log(formData) }
     * @category behavior
     */
    events: {
        type: PropType<Record<string, (event: any, formContext: FormContext) => any> | DynamicProp<Record<string, (event: any, formContext: FormContext) => any>>>;
        default: () => {};
    };
    /**
     * Whether or not the field is required or not. If a field is marked 'required' it will add a default rule like so: `[val => (val !== null && val !== undefined) || 'Field is required']`. The default message can be set in the `lang` prop as `requiredField`.
     * @category behavior
     */
    required: {
        type: PropType<boolean | "required" | DynamicProp<boolean | "required">>;
        default: undefined;
    };
    /**
     * An array with prop names that should be treated as Dynamic Props when passed a function.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category behavior
     */
    dynamicProps: {
        type: PropType<string[]>;
        default: () => string[];
    };
    /**
     * Set to `true` if the component will take care of showing the `label` and `subLabel`. Both of these props will be passed to the component and not shown in BlitzField.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category style
     */
    internalLabels: {
        type: PropType<boolean | DynamicProp<boolean | undefined> | undefined>;
        required: false;
        default: undefined;
    };
    /**
     * Set to true if the component has its own error handling. This makes sure it passes on props like `error` and does nothing with them in the BlitzField.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category behavior
     */
    internalErrors: {
        type: PropType<boolean | DynamicProp<boolean | undefined> | undefined>;
        required: false;
        default: undefined;
    };
    /**
     * - 'interaction' — evaluates & shows errors on every interaction or keystroke
     * - 'save' — only evaluates & shows errors when clicking 'save'
     * - 'save-focus' — only evaluates & shows errors when clicking 'save', then focuses the first field with an error
     * - 'never' — never evaluate or show errors
     * - 'always' — always evaluate and show errors, even without user interaction
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category behavior
     */
    showErrorsOn: {
        type: PropType<ShowErrorsOn | DynamicProp<ShowErrorsOn>>;
        default: string;
    };
    /**
     * Setting to `false` will hide the field. When using as an Dynamic Prop it can used to conditionally hide fields based on the other `formData`.
     * @example (val, { mode }) => (mode === 'edit')
     * @example false
     * @category state
     */
    showCondition: {
        type: PropType<boolean | DynamicProp<boolean>>;
        default: boolean;
    };
    /**
     * `readonly` defaults to `true` on `mode: 'readonly'`
     * @category state
     */
    readonly: {
        type: PropType<boolean | "readonly" | DynamicProp<boolean | "readonly">>;
        default: undefined;
    };
    /**
     * `disabled` defaults to `true` on `mode: 'disabled'`
     * @category state
     */
    disabled: {
        type: PropType<boolean | "disabled" | DynamicProp<boolean | "disabled">>;
        default: undefined;
    };
    /**
     * The position of the label in comparison to the field.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category style
     */
    labelPosition: {
        type: PropType<"top" | "left" | DynamicProp<"top" | "left">>;
        default: string;
        validator: (prop: any) => true;
    };
    /**
     * Custom styling to be applied to the BlitzField. Applied like so `:style="fieldStyle"`. Can be an Dynamic Prop (this is why I opted to have a different name from `style`).
     *
     * In a BlitzForm schema you can also just write `style: '...'` and BlitzForm will pass that as fieldStyle for you, because "style" is not a valid prop name.
     * @example 'padding: 0.5em; color: white'
     * @category style
     */
    fieldStyle: {
        type: PropType<string | Record<string, boolean> | (string | Record<string, boolean>)[] | DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>>;
        default: undefined;
    };
    /**
     * Custom classes to be applied to the BlitzField. Applied like so `:class="fieldClasses"`. Can be an Dynamic Prop (this is why I opted to have a different name from `class`).
     *
     * In a BlitzForm schema you can also just write `class: '...'` and BlitzForm will pass that as `fieldClasses` for you, because "class" is not a valid prop name.
     * @example ['dark-theme']
     * @category style
     */
    fieldClasses: {
        type: PropType<string | Record<string, boolean> | (string | Record<string, boolean>)[] | DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>>;
        default: undefined;
    };
    /**
     * Custom styling to be applied to the inner component of BlitzField. Applied like so `:style="componentStyle"`. Can be an Dynamic Prop.
     * @example 'padding: 1em;'
     * @category style
     */
    componentStyle: {
        type: PropType<string | Record<string, boolean> | (string | Record<string, boolean>)[] | DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>>;
        default: undefined;
    };
    /**
     * Custom classes to be applied to the inner component of BlitzField. Applied like so `:class="componentClasses"`. Can be an Dynamic Prop.
     * @example ['dark-theme']
     * @category style
     */
    componentClasses: {
        type: PropType<string | Record<string, boolean> | (string | Record<string, boolean>)[] | DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>>;
        default: undefined;
    };
    /**
     * Custom styling to be applied to the label of BlitzField. Applied like so `:style="componentStyle"`. Can be an Dynamic Prop.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @example 'font-weight: 200;'
     * @category style
     */
    labelStyle: {
        type: PropType<string | Record<string, boolean> | (string | Record<string, boolean>)[] | DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>>;
        default: undefined;
    };
    /**
     * Custom classes to be applied to the label of BlitzField. Applied like so `:class="labelClasses"`. Can be an Dynamic Prop.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @example ['text-h6']
     * @category style
     */
    labelClasses: {
        type: PropType<string | Record<string, boolean> | (string | Record<string, boolean>)[] | DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>>;
        default: undefined;
    };
    /**
     * This is the *nested* data of all the fields inside a BlitzForm. (When using BlitzListForm as standalone, this is an array.)
     *
     * It's not something you can pass via the schema, but something that BlitzForm will automatically pass to each of its fields so you can use it in Dynamic Props.
     * @category readonly
     */
    formData: {
        type: PropType<Record<string, any> | Record<string, any>[]>;
        default: undefined;
    };
    /**
     * This is the *flattened* data of all the fields inside a BlitzForm.
     *
     * It's not something you can pass via the schema, but something that BlitzForm will automatically pass to each of its fields so you can use it in Dynamic Props.
     * @category readonly
     */
    formDataFlat: {
        type: PropType<Record<string, any>>;
        default: undefined;
    };
    /**
     * A manually set 'id' of the BlitzForm. This only exists if you passed an id directly to the BlitzForm.
     *
     * It's not something you can pass via the schema, but something that BlitzForm will automatically pass to each of its fields so you can use it in Dynamic Props.
     * @category readonly
     */
    formId: {
        type: PropType<string>;
        default: undefined;
    };
    /**
     * The `mode` of the BlitzForm. A BlitzField inherits the `mode` from the `BlitzForm` via its `mode` prop; however, if you had manually overwritten the mode to be something else, `formMode` can be used to check the current mode of the form. This can be useful inside an Dynamic Prop.
     *
     * It's not something you can pass via the schema, but something that BlitzForm will automatically pass to each of its fields so you can use it in Dynamic Props.
     * @category readonly
     */
    formMode: {
        type: PropType<Mode>;
        default: undefined;
        validator: (prop: any) => never;
    };
    /**
     * The `updateField` function of BlitzForm. Is passed so it can be used in events. Eg.: `events: { '@update:modelValue': (value, { updateField } => updateField({ id: 'otherField', value }))}`
     *
     * It's not something you can pass via the schema, but something that BlitzForm will automatically pass to each of its fields so you can use it in Dynamic Props.
     * @category readonly
     */
    updateField: {
        type: PropType<(val: any, formContext: FormContext) => void>;
        default: undefined;
    };
    /**
     * (only present in BlitzListForm!)
     * The `rowInput` function of BlitzForm. Is passed so it can be used in events. Eg.: `events: { '@update:modelValue': (value, { updateField } => updateField({ id: 'otherField', value }))}`
     *
     * It's not something you can pass via the schema, but something that BlitzListForm will automatically pass to each of its fields so you can use it in Dynamic Props.
     * @category readonly
     */
    rowInput: {
        type: PropType<(val: any, formContext: FormContext) => void>;
        default: undefined;
    };
    /**
     * (only present in BlitzListForm!)
     * The current row index of this field.
     *
     * It's not something you can pass via the schema, but something that BlitzListForm will automatically pass to each of its fields so you can use it in Dynamic Props.
     * @category readonly
     */
    rowIndex: {
        type: PropType<number>;
        default: undefined;
    };
    /**
     * (only present in BlitzListForm!)
     * This is the *nested* data of all the fields of the row.
     *
     * It's not something you can pass via the schema, but something that BlitzListForm will automatically pass to each of its fields so you can use it in Dynamic Props.
     * @category readonly
     */
    rowData: {
        type: PropType<Record<string, any>>;
        default: undefined;
    };
    /**
     * (only present in BlitzListForm!)
     * This is a function that you can call to delete the row.
     *
     * It's not something you can pass via the schema, but something that BlitzListForm will automatically pass to each of its fields so you can use it in Dynamic Props.
     * @category readonly
     */
    deleteRow: {
        type: PropType<() => void>;
        default: undefined;
    };
}, unknown, {
    innerValue: any;
    justMounted: boolean;
    isDirty: boolean;
    /**
     * Only relevant when `showErrorsOn: 'save'`
     */
    showingErrorBeforeSave: boolean;
}, {
    cValue: {
        get(): any;
        set(val: any, ...otherArguments: any[]): void;
    };
    dynamicPropsEvaluated(): {
        [x: string]: any;
    };
    defaultSlotCalculated(): any;
    componentName(): any;
    usesInternalLabels(): boolean;
    langCalculated(): Lang;
    errorCalculated(): null | string;
    eventsCalculated(): {
        [x: string]: any;
    };
    propsAndAttrsToPass(): {
        [x: string]: any;
    };
    labelUsedHere(): string | undefined;
    subLabelHtmlUsedHere(): string | null;
    parsedFieldValue(): any;
}, {
    evalPropOrAttr(propOrAttr: any): any;
    event(eventName: 'update:modelValue', payload: any, origin?: UpdateModelValueOrigin): void;
    evaluateError(): null | string;
    /**
     * Validates a field
     * @param focusIfError — Wether or not it should focus the field with an error. Defaults to `false`
     * @returns the result of the error validation
     */
    validate(focusIfError?: boolean | undefined): null | string;
    /**
     * Resets internal values
     */
    resetDirtyAndErrors(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (payload: any, origin?: UpdateModelValueOrigin) => boolean;
    /** HTML5 event from the top level div */
    click: null;
    /** HTML5 event from the top level div */
    dblclick: null;
    /** HTML5 event from the top level div */
    mousedown: null;
    /** HTML5 event from the top level div */
    mouseup: null;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    id?: unknown;
    defaultValue?: unknown;
    parseValue?: unknown;
    parseInput?: unknown;
    component?: unknown;
    slots?: unknown;
    lang?: unknown;
    label?: unknown;
    subLabel?: unknown;
    mode?: unknown;
    events?: unknown;
    required?: unknown;
    dynamicProps?: unknown;
    internalLabels?: unknown;
    internalErrors?: unknown;
    showErrorsOn?: unknown;
    showCondition?: unknown;
    readonly?: unknown;
    disabled?: unknown;
    labelPosition?: unknown;
    fieldStyle?: unknown;
    fieldClasses?: unknown;
    componentStyle?: unknown;
    componentClasses?: unknown;
    labelStyle?: unknown;
    labelClasses?: unknown;
    formData?: unknown;
    formDataFlat?: unknown;
    formId?: unknown;
    formMode?: unknown;
    updateField?: unknown;
    rowInput?: unknown;
    rowIndex?: unknown;
    rowData?: unknown;
    deleteRow?: unknown;
} & {
    events: Record<string, (event: any, formContext: FormContext) => any> | DynamicProp<Record<string, (event: any, formContext: FormContext) => any>>;
    lang: Partial<Lang> | DynamicProp<Partial<Lang>>;
    mode: Mode | DynamicProp<Mode>;
    showCondition: boolean | DynamicProp<boolean>;
    dynamicProps: string[];
    showErrorsOn: ShowErrorsOn | DynamicProp<ShowErrorsOn>;
    labelPosition: "top" | "left" | DynamicProp<"top" | "left">;
} & {
    component?: any;
    required?: boolean | "required" | DynamicProp<boolean | "required"> | undefined;
    slots?: {
        label?: string | Record<string, any> | Record<string, any>[] | undefined;
        default?: string | Record<string, any> | Record<string, any>[] | undefined;
    } | DynamicProp<{
        label?: string | Record<string, any> | Record<string, any>[] | undefined;
        default?: string | Record<string, any> | Record<string, any>[] | undefined;
    }> | undefined;
    readonly?: boolean | "readonly" | DynamicProp<boolean | "readonly"> | undefined;
    id?: string | undefined;
    disabled?: boolean | "disabled" | DynamicProp<boolean | "disabled"> | undefined;
    modelValue?: any;
    defaultValue?: ((formData: Record<string, any>, formContext: FormContext) => any | any) | undefined;
    parseValue?: ((val: any, formContext: FormContext) => any) | undefined;
    parseInput?: ((val: any, formContext: FormContext) => any) | undefined;
    label?: string | DynamicProp<string> | undefined;
    subLabel?: string | DynamicProp<string> | undefined;
    internalLabels?: boolean | DynamicProp<boolean | undefined> | undefined;
    internalErrors?: boolean | DynamicProp<boolean | undefined> | undefined;
    fieldStyle?: string | Record<string, boolean> | (string | Record<string, boolean>)[] | DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]> | undefined;
    fieldClasses?: string | Record<string, boolean> | (string | Record<string, boolean>)[] | DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]> | undefined;
    componentStyle?: string | Record<string, boolean> | (string | Record<string, boolean>)[] | DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]> | undefined;
    componentClasses?: string | Record<string, boolean> | (string | Record<string, boolean>)[] | DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]> | undefined;
    labelStyle?: string | Record<string, boolean> | (string | Record<string, boolean>)[] | DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]> | undefined;
    labelClasses?: string | Record<string, boolean> | (string | Record<string, boolean>)[] | DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]> | undefined;
    formData?: Record<string, any> | Record<string, any>[] | undefined;
    formDataFlat?: Record<string, any> | undefined;
    formId?: string | undefined;
    formMode?: Mode | undefined;
    updateField?: ((val: any, formContext: FormContext) => void) | undefined;
    rowInput?: ((val: any, formContext: FormContext) => void) | undefined;
    rowIndex?: number | undefined;
    rowData?: Record<string, any> | undefined;
    deleteRow?: (() => void) | undefined;
}> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onDblclick?: ((...args: any[]) => any) | undefined;
    onMousedown?: ((...args: any[]) => any) | undefined;
    onMouseup?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((payload: any, origin?: UpdateModelValueOrigin) => any) | undefined;
}, {
    component: any;
    events: Record<string, (event: any, formContext: FormContext) => any> | DynamicProp<Record<string, (event: any, formContext: FormContext) => any>>;
    required: boolean | "required" | DynamicProp<boolean | "required">;
    slots: {
        label?: string | Record<string, any> | Record<string, any>[] | undefined;
        default?: string | Record<string, any> | Record<string, any>[] | undefined;
    } | DynamicProp<{
        label?: string | Record<string, any> | Record<string, any>[] | undefined;
        default?: string | Record<string, any> | Record<string, any>[] | undefined;
    }>;
    lang: Partial<Lang> | DynamicProp<Partial<Lang>>;
    readonly: boolean | "readonly" | DynamicProp<boolean | "readonly">;
    mode: Mode | DynamicProp<Mode>;
    showCondition: boolean | DynamicProp<boolean>;
    id: string;
    disabled: boolean | "disabled" | DynamicProp<boolean | "disabled">;
    modelValue: any;
    defaultValue: (formData: Record<string, any>, formContext: FormContext) => any | any;
    parseValue: (val: any, formContext: FormContext) => any;
    parseInput: (val: any, formContext: FormContext) => any;
    label: string | DynamicProp<string>;
    subLabel: string | DynamicProp<string>;
    dynamicProps: string[];
    internalLabels: boolean | DynamicProp<boolean | undefined> | undefined;
    internalErrors: boolean | DynamicProp<boolean | undefined> | undefined;
    showErrorsOn: ShowErrorsOn | DynamicProp<ShowErrorsOn>;
    labelPosition: "top" | "left" | DynamicProp<"top" | "left">;
    fieldStyle: string | Record<string, boolean> | (string | Record<string, boolean>)[] | DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>;
    fieldClasses: string | Record<string, boolean> | (string | Record<string, boolean>)[] | DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>;
    componentStyle: string | Record<string, boolean> | (string | Record<string, boolean>)[] | DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>;
    componentClasses: string | Record<string, boolean> | (string | Record<string, boolean>)[] | DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>;
    labelStyle: string | Record<string, boolean> | (string | Record<string, boolean>)[] | DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>;
    labelClasses: string | Record<string, boolean> | (string | Record<string, boolean>)[] | DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>;
    formData: Record<string, any> | Record<string, any>[];
    formDataFlat: Record<string, any>;
    formId: string;
    formMode: Mode;
    updateField: (val: any, formContext: FormContext) => void;
    rowInput: (val: any, formContext: FormContext) => void;
    rowIndex: number;
    rowData: Record<string, any>;
    deleteRow: () => void;
}>;
/**
`<BlitzField />` is what is used by BlitzForm under the hood to render the form fields.

Use this API Card to check out all the possible props you can use in a single field of a schema.
 */
export default _default;
