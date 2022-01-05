import { PropType } from 'vue';
import type { DsData, DsFilterFields, DsSortby, DsSearchIn, DsSearchAs, DsSortAs } from './types';
declare const _default: import("vue").DefineComponent<{
    dsData: {
        type: PropType<DsData>;
        default: () => never[];
    };
    dsFilterFields: {
        type: PropType<DsFilterFields>;
        default: () => {};
    };
    dsSortby: {
        type: PropType<DsSortby>;
        default: () => never[];
    };
    dsSearchIn: {
        type: PropType<DsSearchIn>;
        default: () => never[];
    };
    dsSearchAs: {
        type: PropType<DsSearchAs>;
        default: () => {};
    };
    dsSortAs: {
        type: PropType<DsSortAs>;
        default: () => {};
    };
}, {
    dsIndexes: import("vue").Ref<number[]>;
    dsShowEntries: import("vue").Ref<number>;
    dsResultsNumber: import("vue").ComputedRef<number>;
    dsPage: import("vue").Ref<number>;
    dsPagecount: import("vue").ComputedRef<number>;
    dsFrom: import("vue").ComputedRef<number>;
    dsTo: import("vue").ComputedRef<number>;
    dsRows: import("vue").ComputedRef<number[]>;
    dsPages: import("vue").ComputedRef<(number | "...")[]>;
    search: (value: string) => void;
    showEntries: (value: number) => Promise<void>;
    setActive: (value: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    dsData?: unknown;
    dsFilterFields?: unknown;
    dsSortby?: unknown;
    dsSearchIn?: unknown;
    dsSearchAs?: unknown;
    dsSortAs?: unknown;
} & {
    dsData: DsData;
    dsFilterFields: DsFilterFields;
    dsSortby: DsSortby;
    dsSearchIn: DsSearchIn;
    dsSearchAs: DsSearchAs;
    dsSortAs: DsSortAs;
} & {}>, {
    dsData: DsData;
    dsFilterFields: DsFilterFields;
    dsSortby: DsSortby;
    dsSearchIn: DsSearchIn;
    dsSearchAs: DsSearchAs;
    dsSortAs: DsSortAs;
}>;
/**
 * A renderless component that calculates and only provides the scope required to create data tables and grids
 */
export default _default;
