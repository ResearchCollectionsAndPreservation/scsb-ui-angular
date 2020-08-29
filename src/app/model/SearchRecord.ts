import { SearchResultRow } from '../model/SearchResultRow';

export class SearchRecord {

    fieldValue: String;
    fieldName: String;
    owningInstitutions: String[];
    collectionGroupDesignations: String[];
    availability: String[];
    materialTypes: String[];
    useRestrictions: String[];
    searchResultRows: SearchResultRow[];
    totalPageCount: number;
    totalBibRecordsCount: string;
    totalItemRecordsCount: string;
    totalRecordsCount: string;
    pageNumber: number;
    pageSize: number;
    showResults: boolean;
    selectAll: boolean;
    selectAllFacets: boolean;
    showTotalCount: boolean;
    index: number;
    errorMessage: String;
    deleted: boolean;
    catalogingStatus: String;

}