import { PropType } from 'vue';
import type { BlitzFieldProps, Mode, UpdateModelValueOrigin } from '@blitzar/types';
import type { DsScope, SortState, BlitzColumn } from './types';
declare const _default: import("vue").DefineComponent<{
    ds: {
        type: PropType<DsScope>;
        required: true;
    };
    schemaColumns: {
        type: PropType<BlitzColumn[]>;
        default: undefined;
    };
    schemaGrid: {
        type: PropType<BlitzColumn[]>;
        default: undefined;
    };
    rows: {
        type: PropType<Record<string, any>>;
        required: true;
    };
    isGrid: {
        type: PropType<boolean>;
        required: true;
    };
    gridBlitzFormOptions: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
    selectedRows: {
        type: PropType<Record<string, any>[]>;
        default: () => never[];
    };
    sortState: {
        type: PropType<SortState>;
        required: true;
    };
    mode: {
        type: PropType<Mode>;
        required: true;
    };
    rowsPerPage: {
        type: PropType<number>;
        default: number;
    };
    titleField: {
        type: PropType<BlitzFieldProps>;
        default: undefined;
    };
    searchField: {
        type: PropType<BlitzFieldProps>;
        default: undefined;
    };
    gridToggleField: {
        type: PropType<BlitzFieldProps>;
        default: undefined;
    };
    paginationField: {
        type: PropType<BlitzFieldProps>;
        default: undefined;
    };
    rowsPerPageField: {
        type: PropType<BlitzFieldProps>;
        default: undefined;
    };
    shownRowsInfoField: {
        type: PropType<BlitzFieldProps>;
        default: undefined;
    };
}, {
    schemaColumnsComputed: import("vue").ComputedRef<BlitzColumn[] | undefined>;
    schemaGridComputed: import("vue").ComputedRef<BlitzColumn[] | undefined>;
    emit: ((event: "update:sortState", payload: SortState) => void) & ((event: "rowClick", e: MouseEvent, rowData: Record<string, any>) => void) & ((event: "rowDblclick", e: MouseEvent, rowData: Record<string, any>) => void) & ((event: "cellClick", e: MouseEvent, rowData: Record<string, any>, colId: string) => void) & ((event: "cellDblclick", e: MouseEvent, rowData: Record<string, any>, colId: string) => void) & ((event: "updateCell", args_0: {
        rowId: string;
        colId: string;
        value: any;
        origin?: UpdateModelValueOrigin;
    }) => void) & ((event: "update:isGrid", payload: boolean) => void) & ((event: "update:selectedRows", payload: Record<string, any>[]) => void);
    searchText: import("vue").WritableComputedRef<string>;
    isGridMode: import("vue").WritableComputedRef<boolean>;
    currentPage: import("vue").WritableComputedRef<number>;
    paginationFieldProps: import("vue").ComputedRef<{
        pageCount: number;
        pagesShown: (number | "...")[];
    }>;
    rowsPerPageInner: import("vue").WritableComputedRef<number>;
    shownRowsInfoFieldProps: import("vue").ComputedRef<{
        showingFrom: number;
        showingTo: number;
        rowCountFiltered: number;
        rowCountTotal: number;
        slots: {
            default: string;
        };
    }>;
    ROW_SELECTION_ID: "BLITZ-TABLE-ROW-SELECTION";
    onRowClick: (e: MouseEvent, rowData: Record<string, any>) => void;
    onRowDblclick: (e: MouseEvent, rowData: Record<string, any>) => void;
    onCellClick: (e: MouseEvent, rowData: Record<string, any>, colId: string) => void;
    onCellDblclick: (e: MouseEvent, rowData: Record<string, any>, colId: string) => void;
    onUpdateCell: (rowId: string, colId: string, value: any, origin?: UpdateModelValueOrigin) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    rowClick: (e: MouseEvent, rowData: Record<string, any>) => boolean;
    rowDblclick: (e: MouseEvent, rowData: Record<string, any>) => boolean;
    cellClick: (e: MouseEvent, rowData: Record<string, any>, colId: string) => boolean;
    cellDblclick: (e: MouseEvent, rowData: Record<string, any>, colId: string) => boolean;
    updateCell: ({ rowId, colId, value, origin, }: {
        rowId: string;
        colId: string;
        value: any;
        origin?: UpdateModelValueOrigin;
    }) => true;
    'update:isGrid': (payload: boolean) => boolean;
    'update:selectedRows': (payload: Record<string, any>[]) => boolean;
    'update:sortState': (payload: SortState) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    ds?: unknown;
    schemaColumns?: unknown;
    schemaGrid?: unknown;
    rows?: unknown;
    isGrid?: unknown;
    gridBlitzFormOptions?: unknown;
    selectedRows?: unknown;
    sortState?: unknown;
    mode?: unknown;
    rowsPerPage?: unknown;
    titleField?: unknown;
    searchField?: unknown;
    gridToggleField?: unknown;
    paginationField?: unknown;
    rowsPerPageField?: unknown;
    shownRowsInfoField?: unknown;
} & {
    mode: Mode;
    sortState: SortState;
    ds: DsScope;
    rows: Record<string, any>;
    isGrid: boolean;
    gridBlitzFormOptions: Record<string, any>;
    selectedRows: Record<string, any>[];
    rowsPerPage: number;
} & {
    schemaColumns?: BlitzColumn[] | undefined;
    schemaGrid?: BlitzColumn[] | undefined;
    titleField?: BlitzFieldProps | undefined;
    searchField?: BlitzFieldProps | undefined;
    gridToggleField?: BlitzFieldProps | undefined;
    paginationField?: BlitzFieldProps | undefined;
    rowsPerPageField?: BlitzFieldProps | undefined;
    shownRowsInfoField?: BlitzFieldProps | undefined;
}> & {
    "onUpdate:sortState"?: ((payload: SortState) => any) | undefined;
    onRowClick?: ((e: MouseEvent, rowData: Record<string, any>) => any) | undefined;
    onRowDblclick?: ((e: MouseEvent, rowData: Record<string, any>) => any) | undefined;
    onCellClick?: ((e: MouseEvent, rowData: Record<string, any>, colId: string) => any) | undefined;
    onCellDblclick?: ((e: MouseEvent, rowData: Record<string, any>, colId: string) => any) | undefined;
    onUpdateCell?: ((args_0: {
        rowId: string;
        colId: string;
        value: any;
        origin?: UpdateModelValueOrigin;
    }) => any) | undefined;
    "onUpdate:isGrid"?: ((payload: boolean) => any) | undefined;
    "onUpdate:selectedRows"?: ((payload: Record<string, any>[]) => any) | undefined;
}, {
    schemaColumns: BlitzColumn[];
    schemaGrid: BlitzColumn[];
    gridBlitzFormOptions: Record<string, any>;
    selectedRows: Record<string, any>[];
    rowsPerPage: number;
    titleField: BlitzFieldProps;
    searchField: BlitzFieldProps;
    gridToggleField: BlitzFieldProps;
    paginationField: BlitzFieldProps;
    rowsPerPageField: BlitzFieldProps;
    shownRowsInfoField: BlitzFieldProps;
}>;
/**
 * An implementation of a Datatable and Datagrid compatible with BlitzTableOuter
 */
export default _default;
