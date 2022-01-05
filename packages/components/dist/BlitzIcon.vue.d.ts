import { PropType } from 'vue';
declare type Kind = 'synced' | 'error' | 'loading';
declare const _default: import("vue").DefineComponent<{
    /**
     * The kind of the icon
     * e.g `synced, error, loading`
     */
    kind: {
        type: PropType<Kind>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    kind?: unknown;
} & {
    kind: Kind;
} & {}>, {}>;
export default _default;
