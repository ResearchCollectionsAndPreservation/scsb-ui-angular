import { SearchResultRow } from '../model/SearchResultRow';
import { BibDataField } from '../model/BibDataField'
export class CollectionForm{
    bibId: string;
    title: string;
    author: string;
    publisher: string;
    publishedDate: string;
    owningInstitution: string;
    callNumber: string;
    leaderMaterialType: string;
    tag000: string;
    controlNumber001: string;
    controlNumber005: string;
    controlNumber008: string;
    content: string;
    bibDataFields: BibDataField [];
    errorMessage: string;
    warningMessage: string;
    itemId: string;
    availability: string;
    barcode: string;
    locationCode: string;
    useRestriction: string;
    monographCollectionGroupDesignation: string;
    collectionGroupDesignation: string;
    newCollectionGroupDesignation: string;
    cgdChangeNotes: string;
    customerCode: string;
    deaccessionType: string;
    deaccessionNotes: string;
    deliveryLocations:string [];
    deliveryLocation: string;
    shared: boolean;
    submitted: boolean;
    message: string;
    collectionAction: string;
    allowEdit: boolean;
    username: string;
    itemBarcodes: string;
    showResults: boolean;
    selectAll: boolean;
    //errorMessage: string;   
    barcodesNotFoundErrorMessage: string;
    ignoredBarcodesErrorMessage: string;
    searchResultRows: SearchResultRow[] ;
    showModal: boolean;
}