import { PropType } from 'vue';
import type { PepiconName } from 'vue-pepicons';
declare type Type = 'text' | 'textarea' | 'select' | 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'time' | 'url' | 'week';
declare type Options = {
    label: string;
    value: string | number;
}[];
declare const _default: import("vue").DefineComponent<{
    /**
     * Pepicon icon name
     * @category content
     */
    icon: {
        type: PropType<import("pepicons").Pepicon>;
        default: undefined;
        validator: (val: PepiconName) => boolean;
    };
    /**
     * @category content
     */
    suffix: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @category content
     */
    prefix: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Shows an '✅' icon on the right side of the input field.
     * @category content
     */
    showCheck: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Shows an '❌' icon on the right side of the input field.
     * @category content
     */
    hasError: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Shows a loading icon on the right side of the input field.
     * @category content
     */
    isBusy: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * HTML5 attribute — with EXCEPTIONS!
     * - Exception: can also be 'textarea' in which case a `<textarea />` is rendered
     * - Exception: can also be 'select' in which case a `<select />` is rendered
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
     * @category content
     */
    type: {
        type: PropType<Type>;
        default: string;
    };
    /**
     * Only when `type: 'select'`
     */
    options: {
        type: PropType<Options>;
        default: undefined;
    };
    /**
     * HTML5 attribute
     * @category content
     */
    placeholder: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * HTML5 attribute
     * @category state
     */
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * HTML5 attribute
     * @category state
     */
    readonly: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * HTML5 attribute
     * @category validation
     */
    required: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * HTML5 attribute
     * @category feature
     */
    autocomplete: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * HTML5 attribute
     * @category feature
     */
    min: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * HTML5 attribute (only for type="textarea")
     * @category style
     */
    rows: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    /**
     * v-model
     * @category content
     */
    modelValue: {
        type: (NumberConstructor | StringConstructor | DateConstructor)[];
        default: string;
    };
    /**
     * @category feature
     */
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @category feature
     */
    autogrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @category feature
     */
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @category feature
     */
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @category feature
     */
    preventFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, {
    selectId: string;
    textareaHeight: string;
    timeout: number;
    valueInner: any;
    fieldType: Type;
    eyeSvg: "eye" | "eye-closed";
    textareaObserver: IntersectionObserver | null;
}, {
    iconCalculated(): import("pepicons").Pepicon | "";
}, {
    parseValue(val: string | Date): string | Date;
    emitInput(newVal: number | Date | string): void;
    focus(e?: Event | undefined): void;
    click(e: MouseEvent): void;
    autogrowInput(options?: {
        init: boolean;
    }): void;
    registerTextareaObserver(): void;
    toggleVisiblity(): void;
    clearInput(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "enter" | "click" | "blur" | "focus")[], "update:modelValue" | "enter" | "click" | "blur" | "focus", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    icon?: unknown;
    suffix?: unknown;
    prefix?: unknown;
    showCheck?: unknown;
    hasError?: unknown;
    isBusy?: unknown;
    type?: unknown;
    options?: unknown;
    placeholder?: unknown;
    disabled?: unknown;
    readonly?: unknown;
    required?: unknown;
    autocomplete?: unknown;
    min?: unknown;
    rows?: unknown;
    modelValue?: unknown;
    autofocus?: unknown;
    autogrow?: unknown;
    debounce?: unknown;
    clearable?: unknown;
    preventFocus?: unknown;
} & {
    modelValue: string | number | Date;
    type: Type;
    suffix: string;
    prefix: string;
    showCheck: boolean;
    hasError: boolean;
    isBusy: boolean;
    rows: string | number;
    autofocus: boolean;
    autogrow: boolean;
    debounce: number;
    clearable: boolean;
    preventFocus: boolean;
} & {
    required?: boolean | undefined;
    icon?: import("pepicons").Pepicon | undefined;
    options?: Options | undefined;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
    readonly?: boolean | undefined;
    autocomplete?: string | undefined;
    min?: string | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onEnter?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | Date;
    type: Type;
    required: boolean;
    icon: import("pepicons").Pepicon;
    suffix: string;
    prefix: string;
    showCheck: boolean;
    hasError: boolean;
    isBusy: boolean;
    options: Options;
    placeholder: string;
    disabled: boolean;
    readonly: boolean;
    autocomplete: string;
    min: string;
    rows: string | number;
    autofocus: boolean;
    autogrow: boolean;
    debounce: number;
    clearable: boolean;
    preventFocus: boolean;
}>;
export default _default;
