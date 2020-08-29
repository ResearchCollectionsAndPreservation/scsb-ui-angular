import { SearchItemResultRow } from '../model/SearchItemResultRow';

export class SearchResultRow {
    
    bibId: number;
    title: String;
    author: String;
    publisher: String;
    publisherDate: String;
    owningInstitution: String;
    customerCode: String;
    collectionGroupDesignation: String;
    useRestriction: String;
    barcode: String;
    summaryHoldings: String;
    availability: String;
    leaderMaterialType: String;
    selected: boolean;
    showItems: boolean;
    selectAllItems: boolean;
    searchItemResultRows: SearchItemResultRow[];
    itemId: number;
    showAllItems: false;

    requestId: number;
    patronBarcode: String;
    requestingInstitution: String;
    deliveryLocation: String;
    requestType: String;
    requestNotes: String;
    requestCreatedBy: String;
    patronEmailId: String;
    status: String;
    createdDate: Date = new Date();
    lastUpdatedDate: Date = new Date();

}