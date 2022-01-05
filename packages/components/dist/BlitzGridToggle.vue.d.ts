declare const _default: import("vue").DefineComponent<{
    /**
     * `modelValue: true` represents "grid mode" so shows a "list icon"
     * `modelValue: false` represents "list mode" so shows a "grid icon"
     */
    modelValue: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': null;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
} & {
    modelValue: boolean;
} & {}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
}>;
export default _default;
