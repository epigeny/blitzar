declare const _default: import("vue").DefineComponent<{
    /**
     * The size of the spinner
     * controls the width and height
     * e.g `xs, sm, md, lg, xl, 16, 24 etc`
     */
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    thickness: {
        type: NumberConstructor;
        default: number;
    };
}, unknown, unknown, {
    cSize(): string | number;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    size?: unknown;
    thickness?: unknown;
} & {
    size: string | number;
    thickness: number;
} & {}>, {
    size: string | number;
    thickness: number;
}>;
/**
 * Color of the spinner can be applied via CSS.
 */
export default _default;
