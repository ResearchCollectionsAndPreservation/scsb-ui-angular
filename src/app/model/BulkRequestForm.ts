import { BulkCustomerCodeEntity } from '../model/BulkCustomerCodeEntity';
import { BulkSearchResultRow } from '../model/BulkSearchResultRow';
export class BulkRequestForm {
    requestId : number;
    patronBarcode : string;
    itemBarcode : string;
    status : string;
    deliveryLocation : string;
    deliveryLocationInRequest : string;
    itemTitle : string;
    itemOwningInstitution : string;
    patronEmailAddress : string;
    requestingInstitution : string;
    requestType : string;
    requestNotes : string;
    message : string;
    errorMessage : string;
    totalRecordsCount : string;
    pageNumber : number;
    pageSize : number;
    totalPageCount : number;
    submitted : boolean;
    showResults : boolean;
    requestingInstitutions : string[];
    requestTypes : string[] ;
    deliveryLocations : BulkCustomerCodeEntity[];
    bulkSearchResultRows : BulkSearchResultRow[];
    requestStatuses : string[];
    institutionList: string[];
    disableRequestingInstitution : boolean;
    requestIdSearch: string;
    requestNameSearch: string;
    patronBarcodeSearch:string ;
    institution: string;
}