export declare type FormContext = {
    formData: Record<string, any>;
    formDataFlat: Record<string, any>;
    mode: 'edit' | 'readonly' | 'disabled' | 'raw';
    formMode: 'edit' | 'readonly' | 'disabled' | 'raw';
    updateField: (payload: {
        id: string;
        value: any;
    }) => void;
    lang: Lang;
    [key: string]: any;
};
export declare type DynamicProp<T> = (val: any, formContext: FormContext) => T;
/**
 * TODO: This is actually just the type of the props of a BlitzField.vue
 *       must find a better way to auto type this
 */
export declare type BlitzFieldProps = {
    error?: (val: any, formContext: FormContext) => null | string;
    required?: boolean;
    [key: string]: any;
};
export declare type Schema = BlitzFieldProps[];
export declare type Mode = 'edit' | 'readonly' | 'disabled' | 'raw';
export declare type ShowErrorsOn = 'interaction' | 'save' | 'save-focus' | 'never' | 'always';
export declare type Lang = {
    archive: string;
    delete: string;
    cancel: string;
    edit: string;
    save: string;
    requiredField: string;
    fieldValidationError: string;
    formValidationError: string;
};
/**
 * the 'origin' param explains the reason `@update:modelValue` was emitted from a field:
 * - `undefined` regular field input — no special reason
 * - `'default'`  was because of the provided `defaultValue` in the schema
 * - `'cancel'` the reason `@update:modelValue` was emitted from a field was because the user clicked "cancel" in the BlitzForm
 */
export declare type UpdateModelValueOrigin = 'default' | 'cancel' | undefined;
