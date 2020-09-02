import { TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpHandler } from "@angular/common/http";
import { of } from 'rxjs';
import { Router } from "@angular/router";

import { ReportsService } from './reports.service';
import { ReportForm } from '../../model/ReportsForm';
describe('ReportsService', () => {
  const expectedResponse: ReportForm[] = [
    {
      "showBy": null,
      "requestType": null,
      "requestFromDate": null,
      "requestToDate": null,
      "accessionDeaccessionFromDate": null,
      "accessionDeaccessionToDate": null,
      "retrievalRequestPulCount": 0,
      "retrievalRequestCulCount": 0,
      "retrievalRequestNyplCount": 0,
      "recallRequestPulCount": 0,
      "recallRequestCulCount": 0,
      "recallRequestNyplCount": 0,
      "physicalPrivatePulCount": 0,
      "physicalPrivateCulCount": 0,
      "physicalPrivateNyplCount": 0,
      "physicalSharedPulCount": 0,
      "physicalSharedCulCount": 0,
      "physicalSharedNyplCount": 0,
      "eddPrivatePulCount": 0,
      "eddPrivateCulCount": 0,
      "eddPrivateNyplCount": 0,
      "eddSharedOpenPulCount": 0,
      "eddSharedOpenCulCount": 0,
      "eddSharedOpenNyplCount": 0,
      "accessionPrivatePulCount": 0,
      "accessionPrivateCulCount": 0,
      "accessionPrivateNyplCount": 0,
      "accessionSharedPulCount": 0,
      "accessionSharedCulCount": 0,
      "accessionSharedNyplCount": 0,
      "accessionOpenPulCount": 0,
      "accessionOpenCulCount": 0,
      "accessionOpenNyplCount": 0,
      "deaccessionPrivatePulCount": 0,
      "deaccessionPrivateCulCount": 0,
      "deaccessionPrivateNyplCount": 0,
      "deaccessionSharedPulCount": 0,
      "deaccessionSharedCulCount": 0,
      "deaccessionSharedNyplCount": 0,
      "deaccessionOpenPulCount": 0,
      "deaccessionOpenCulCount": 0,
      "deaccessionOpenNyplCount": 0,
      "openPulCgdCount": 0,
      "openCulCgdCount": 0,
      "openNyplCgdCount": 0,
      "sharedPulCgdCount": 0,
      "sharedCulCgdCount": 0,
      "sharedNyplCgdCount": 0,
      "privatePulCgdCount": 0,
      "privateCulCgdCount": 0,
      "privateNyplCgdCount": 0,
      "showILBDResults": false,
      "showPartners": false,
      "showRequestTypeTable": false,
      "showAccessionDeaccessionTable": false,
      "showReportResultsText": false,
      "showNoteILBD": false,
      "showNotePartners": false,
      "showNoteRequestType": false,
      "showRetrievalTable": false,
      "showRecallTable": false,
      "showRequestTypeShow": false,
      "reportRequestType": [],
      "owningInstitutions": [
          "NYPL",
          "CUL",
          "PUL"
      ],
      "collectionGroupDesignations": [
          "Shared",
          "Private",
          "Open"
      ],
      "deaccessionItemResultsRows": [],
      "showDeaccessionInformationTable": false,
      "totalRecordsCount": "0",
      "pageNumber": 0,
      "pageSize": 10,
      "totalPageCount": 0,
      "deaccessionOwnInst": null,
      "incompleteRequestingInstitution": null,
      "incompletePageNumber": 0,
      "incompletePageSize": 10,
      "incompleteTotalRecordsCount": "0",
      "incompleteTotalPageCount": 0,
      "incompleteReportResultsRows": [],
      "incompleteShowByInst": [],
      "showIncompleteResults": false,
      "errorMessage": null,
      "showIncompletePagination": false,
      "export": false,
      "physicalPartnerSharedPulCount": 0,
      "physicalPartnerSharedCulCount": 0,
      "physicalPartnerSharedNyplCount": 0,
      "eddPartnerSharedOpenPulCount": 0,
      "eddPartnerSharedOpenCulCount": 0,
      "eddPartnerSharedOpenNyplCount": 0,
      "eddRequestPulCount": 0,
      "eddRequestCulCount": 0,
      "eddRequestNyplCount": 0
  }
  ]
  let service: ReportsService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [ReportsService, HttpClient, HttpHandler, Router]

    })
      .compileComponents();
  }));
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new ReportsService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('validate reportCounts() response',() => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.reportCounts().subscribe((res) => 
    expect(res).toEqual(expectedResponse),fail);
  });
  it('validate cgdCounts() response',() => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.cgdCounts().subscribe((res) => 
    expect(res).toEqual(expectedResponse),fail);
  });
  it('validate deaccessionInformation() response',() => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.deaccessionInformation().subscribe((res) => 
    expect(res).toEqual(expectedResponse),fail);
  });
  it('validate searchFirst() response',() => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.searchFirst().subscribe((res) => 
    expect(res).toEqual(expectedResponse),fail);
  });
  it('validate searchPrevious() response',() => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.searchPrevious().subscribe((res) => 
    expect(res).toEqual(expectedResponse),fail);
  });
  it('validate searchNext() response',() => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.searchNext().subscribe((res) => 
    expect(res).toEqual(expectedResponse),fail);
  });
  it('validate searchLast() response',() => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.searchLast().subscribe((res) => 
    expect(res).toEqual(expectedResponse),fail);
  });
  it('validate incompleteRecordsReport() response',() => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.incompleteRecordsReport().subscribe((res) => 
    expect(res).toEqual(expectedResponse),fail);
  });
  it('validate getInstitutionForIncompleteReport() response',() => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.getInstitutionForIncompleteReport().subscribe((res) => 
    expect(res).toEqual(expectedResponse),fail);
  });
  it('validate exportIncompleteRecords() response',() => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.exportIncompleteRecords().subscribe((res) => 
    expect(res).toEqual(expectedResponse),fail);
  });
  it('validate incompleteReportPageSizeChange() response',() => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.incompleteReportPageSizeChange().subscribe((res) => 
    expect(res).toEqual(expectedResponse),fail);
  });
});
