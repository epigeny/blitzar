import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    /** Represents the current open page */
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    /** Represents the total count of pages */
    pageCount: {
        type: NumberConstructor;
        required: true;
    };
    pagesShown: {
        type: PropType<(number | "...")[]>;
        required: true;
    };
}, {
    setPage: (val: number) => void;
    MORE_PAGES: "...";
    disabledPrevious: import("vue").ComputedRef<boolean>;
    disabledNext: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /** Updates the current open page */
    'update:modelValue': (val: number) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    pageCount?: unknown;
    pagesShown?: unknown;
} & {
    modelValue: number;
    pageCount: number;
    pagesShown: (number | "...")[];
} & {}> & {
    "onUpdate:modelValue"?: ((val: number) => any) | undefined;
}, {}>;
export default _default;
