import type { DsFilterFields, DsSortby, DsSearchIn, DsSearchAs, DsSortAs } from './types';
export declare function createPagingRange(nrOfPages: number, currentPage: number): (number | "...")[];
/**
 * @returns a function that can be plugged into `.sort()`
 */
export declare function fieldSorter(dsSortby: DsSortby, dsSortAs?: DsSortAs): (a: any, b: any) => number;
export declare function filterRow(row: {
    rowIndex: number;
    rowData: Record<string, any>;
    rowDataFlat: Record<string, any>;
}, dsFilterFields: DsFilterFields): boolean;
/**
 * Search method that also takes into account transformations needed
 */
export declare function findAny(dsSearchIn: DsSearchIn, dsSearchAs: DsSearchAs, row: {
    rowIndex: number;
    rowData: Record<string, any>;
    rowDataFlat: Record<string, any>;
}, searchStr: string): boolean;
