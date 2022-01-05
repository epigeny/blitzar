import { PropType } from 'vue';
import type { BlitzFieldProps, Mode, UpdateModelValueOrigin } from '@blitzar/types';
import type { BlitzColumn, DsSearchAs, DsSortAs, DsSortby } from './types';
declare const _default: import("vue").DefineComponent<{
    /**
     * The schema for the columns you want to generate. (BlitzForm schema format)
     * @example [{ id: 'nameFirst', label: 'First Name', component: 'input' }, { id: 'nameLast', label: 'Last Name', component: 'input' }]
     * @category column
     */
    schemaColumns: {
        type: PropType<BlitzColumn[]>;
        default: undefined;
    };
    /**
     * The schema for the grid cards you want to generate. (BlitzForm schema format)
     * @example [{ id: 'nameFirst', label: 'First Name', component: 'input' }, { id: 'nameLast', label: 'Last Name', component: 'input' }]
     * @category column
     */
    schemaGrid: {
        type: PropType<BlitzColumn[]>;
        default: undefined;
    };
    /**
     * Rows of data to display. Use `rows` instead of the QTables `data`. Renamed for clarity.
     * @example [{ nameFirst: 'Eleanor', nameLast: 'Shellstrop' }, { nameFirst: 'Chidi', nameLast: 'Anagonye' }]
     * @category model
     */
    rows: {
        type: PropType<Record<string, any>[]>;
        required: true;
    };
    /**
     * Defaults to `false` (table-view) if `schemaColumns` is provided
     * Defaults to `true` (grid-view) if `schemaGrid` is provided (and no `schemaColumns`)
     */
    isGrid: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * The BlitzForm options you want to use for the grid cards. Eg. You can pass `{ actionButtons: [] }` here to include some action buttons on each grid card.
     *
     * Please note:
     * - The `schema` for the grid cards should be set via the `schemaGrid` prop instead of passing it here as `schema`.
     * - The BlitzForm used for each grid card will automatically get the row data.
     * - See the documentation of BlitzForm for more information on the props you can set.
     * @category column
     */
    gridBlitzFormOptions: {
        type: PropType<Record<string, any>>;
        default: () => Record<string, any>;
    };
    /**
     * MUST be used with `v-model:selectedRows="mySelection"`
     */
    selectedRows: {
        type: PropType<Record<string, any>[]>;
        default: () => Record<string, any>[];
    };
    /**
     * By default the rows show just the raw data without showing field components. If you set `mode: 'edit'` your entire table will show the actual (editable) component as per your schema.
     */
    mode: {
        type: PropType<Mode>;
        default: string;
    };
    rowsPerPage: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * A field as per BlitzField syntax.
     *
     * Anything you pass here will just be added as title element and receive `.blitz-table--title` as class.
     *
     * TODO: add @example
     */
    titleField: {
        type: PropType<BlitzFieldProps>;
        default: undefined;
    };
    /**
     * An input field as per BlitzField syntax.
     *
     * It must be compatible with `v-model` and accept a String as `modelValue`.
     *
     * Will receive `.blitz-table--search` as class.
     *
     * TODO: add @example
     */
    searchField: {
        type: PropType<BlitzFieldProps>;
        default: undefined;
    };
    /**
     * A toggle field as per BlitzField syntax.
     *
     * It must be compatible with `v-model` and accept a Boolean as `modelValue`:
     * - `false` will be interpreted as the table view `isGrid: false` (the default)
     * - `true` will be interpreted as the grid view `isGrid: true`
     *
     * Will receive `.blitz-table--grid-toggle` as class.
     *
     * TODO: add @example
     */
    gridToggleField: {
        type: PropType<BlitzFieldProps>;
        default: undefined;
    };
    /**
     * A select or input field as per BlitzField syntax.
     *
     * It must be compatible with `v-model` and accept a Number as `modelValue`.
     *
     * Other props it receives and can be used are:
     *
     * - `showingFrom: Number` — eg. `1` when showing from row 1 to 5
     * - `showingTo: Number` — eg. `5` when showing from row 1 to 5
     * - `rowCount: Number` — eg. `100` when there are 100 rows visible, this can differ from the total row count because the rows might be searched/filtered
     *
     * Will receive `.blitz-table--rows-per-page` as class.
     *
     * TODO: add @example
     */
    rowsPerPageField: {
        type: PropType<BlitzFieldProps>;
        default: undefined;
    };
    shownRowsInfoField: {
        type: PropType<BlitzFieldProps>;
        default: undefined;
    };
    paginationField: {
        type: PropType<BlitzFieldProps>;
        default: undefined;
    };
}, {
    dsSearchAsComputed: DsSearchAs;
    dsSortAsComputed: DsSortAs;
    selectedRowsComputed: import("vue").WritableComputedRef<Record<string, any>[]>;
    sortState: import("vue").Ref<{
        id: string | null;
        direction: "asc" | "desc" | "none";
    }>;
    dsSortbyComputed: import("vue").ComputedRef<DsSortby>;
    applyBlitzFieldOverwrites: (field?: BlitzFieldProps | undefined) => BlitzFieldProps | undefined;
    isGridInner: import("vue").Ref<boolean>;
    schemaColumnsComputed: import("vue").ComputedRef<BlitzColumn[] | undefined>;
    onRowClick: (e: MouseEvent, rowData: Record<string, any>) => void;
    onRowDblclick: (e: MouseEvent, rowData: Record<string, any>) => void;
    onCellClick: (e: MouseEvent, rowData: Record<string, any>, colId: string) => void;
    onCellDblclick: (e: MouseEvent, rowData: Record<string, any>, colId: string) => void;
    onUpdateCell: ({ rowId, colId, value, origin, }: {
        rowId: string;
        colId: string;
        value: any;
        origin?: UpdateModelValueOrigin;
    }) => void;
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
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    schemaColumns?: unknown;
    schemaGrid?: unknown;
    rows?: unknown;
    isGrid?: unknown;
    gridBlitzFormOptions?: unknown;
    selectedRows?: unknown;
    mode?: unknown;
    rowsPerPage?: unknown;
    titleField?: unknown;
    searchField?: unknown;
    gridToggleField?: unknown;
    rowsPerPageField?: unknown;
    shownRowsInfoField?: unknown;
    paginationField?: unknown;
} & {
    mode: Mode;
    rows: Record<string, any>[];
    gridBlitzFormOptions: Record<string, any>;
    selectedRows: Record<string, any>[];
    rowsPerPage: number;
} & {
    schemaColumns?: BlitzColumn[] | undefined;
    schemaGrid?: BlitzColumn[] | undefined;
    isGrid?: boolean | undefined;
    titleField?: BlitzFieldProps | undefined;
    searchField?: BlitzFieldProps | undefined;
    gridToggleField?: BlitzFieldProps | undefined;
    paginationField?: BlitzFieldProps | undefined;
    rowsPerPageField?: BlitzFieldProps | undefined;
    shownRowsInfoField?: BlitzFieldProps | undefined;
}> & {
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
    mode: Mode;
    schemaColumns: BlitzColumn[];
    schemaGrid: BlitzColumn[];
    isGrid: boolean;
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
export default _default;
