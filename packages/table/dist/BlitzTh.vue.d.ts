import { PropType } from 'vue';
import type { BlitzColumn, SortState } from './types';
declare const _default: import("vue").DefineComponent<{
    /**
     * The BlitzField object used for the columns
     */
    column: {
        type: PropType<BlitzColumn>;
        required: true;
    };
    sortState: {
        type: PropType<SortState>;
        required: true;
    };
}, {
    onClick: (e: MouseEvent) => void;
    isSelectionCol: boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:sortState"[], "update:sortState", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    column?: unknown;
    sortState?: unknown;
} & {
    column: BlitzColumn;
    sortState: SortState;
} & {}> & {
    "onUpdate:sortState"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
