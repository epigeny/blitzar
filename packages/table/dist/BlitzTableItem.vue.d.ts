import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    dsFrom: {
        type: NumberConstructor;
        required: true;
    };
    dsTo: {
        type: NumberConstructor;
        required: true;
    };
    dsData: {
        type: PropType<Record<string, any>[]>;
        required: true;
    };
    dsRows: {
        type: PropType<number[]>;
        required: true;
    };
}, {
    visibleIndexes: import("vue").ComputedRef<number[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    dsFrom?: unknown;
    dsTo?: unknown;
    dsData?: unknown;
    dsRows?: unknown;
} & {
    dsData: Record<string, any>[];
    dsFrom: number;
    dsTo: number;
    dsRows: number[];
} & {}>, {}>;
export default _default;
