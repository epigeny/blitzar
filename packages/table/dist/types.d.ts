import type { BlitzFieldProps } from '@blitzar/types';
export declare type BlitzColumnProps = {
    /** Defaults to `true` */
    sortable?: boolean;
};
export declare type BlitzColumn = BlitzFieldProps & BlitzColumnProps;
export declare type SortState = {
    id: null | string;
    direction: 'asc' | 'desc' | 'none';
};
/**
 * @see https://next--vue-dataset-demo.netlify.app/components/#props
 */
export declare type DsScope = {
    /** The "rows" object array that contains all the data */
    dsData: {
        [id in string]: any;
    }[];
    /**
     * All the indexes of the rows make up the filtered/sorted data
     *
     * (inside of BlitzTableOuter uses `Ref<number[]>`)
     */
    dsIndexes: number[];
    /**
     * The visible row indexes of the current page
     *
     * (inside of BlitzTableOuter uses `ComputedRef<number[]>`)
     */
    dsRows: number[];
    /**
     * The array used to create pagination links
     *
     * (inside of BlitzTableOuter uses `ComputedRef<(number | '...')[]>`)
     */
    dsPages: (number | '...')[];
    /**
     * The number of rows currently displaying
     *
     * (inside of BlitzTableOuter uses `ComputedRef<number>`)
     */
    dsResultsNumber: number;
    /**
     * The number of pagination pages
     *
     * (inside of BlitzTableOuter uses `ComputedRef<number>`)
     */
    dsPagecount: number;
    /**
     * The amount of rows per page you want to show
     *
     * (inside of BlitzTableOuter uses `Ref<number>`)
     */
    dsShowEntries: number;
    /**
     * The item "from" of paginated items currently displaying
     *
     * (inside of BlitzTableOuter uses `ComputedRef<number>`)
     */
    dsFrom: number;
    /**
     * The item "to" of paginated items currently displaying
     *
     * (inside of BlitzTableOuter uses `ComputedRef<number>`)
     */
    dsTo: number;
    /**
     * The number of the current page in pagination
     *
     * (inside of BlitzTableOuter uses `Ref<number>`)
     */
    dsPage: number;
    /** Execute on text input in the search field */
    search: (val: string) => void;
    /** Execute to change the amount of visible rows */
    showEntries: (val: number) => Promise<void>;
    /** Execute to change the current opened page */
    setActive: (val: number) => void;
};
export declare type DsData = Record<string, any>[];
export declare type DsFilterFields = {
    [colId in string]: (cellValue: any, rowData: Record<string, any>) => boolean | any;
};
export declare type DsSortby = string[];
export declare type DsSearchIn = string[];
export declare type DsSearchAs = {
    [id in string]: (cellValue: any, searchString: string, rowData: Record<string, any>) => boolean;
};
export declare type DsSortAs = {
    [id in string]: (cellValue: any, rowData: Record<string, any>) => any;
};
