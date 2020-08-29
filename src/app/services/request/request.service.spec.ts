import { TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClient, HttpHandler } from "@angular/common/http";
import { Router } from "@angular/router";
import { RequestService } from './request.service';
import { RequestForm } from '../../model/RequestForm';

describe('#RequestService', () => {
  const expectedResponse: RequestForm[] = [
    {
      "requestId": null,
      "patronBarcode": null,
      "itemBarcode": null,
      "status": null,
      "deliveryLocation": null,
      "patronBarcodeInRequest": null,
      "itemBarcodeInRequest": null,
      "deliveryLocationInRequest": null,
      "itemTitle": null,
      "itemOwningInstitution": null,
      "patronEmailAddress": null,
      "requestingInstitution": null,
      "requestType": null,
      "requestNotes": null,
      "startPage": null,
      "endPage": null,
      "volumeNumber": null,
      "issue": null,
      "articleAuthor": null,
      "articleTitle": null,
      "message": "No search results found. Please refine search conditions.",
      "errorMessage": null,
      "totalRecordsCount": "0",
      "pageNumber": 0,
      "pageSize": 10,
      "totalPageCount": 0,
      "submitted": false,
      "showResults": true,
      "requestingInstitutions": [],
      "requestTypes": [],
      //"deliveryLocations": [],
      "searchResultRows": [],
      "requestStatuses": [],
      "institutionList": [],
      "disableRequestingInstitution": false,
      "onChange": null,
      "institution": null,
      "showRequestErrorMsg": false,
      "requestingInstituionHidden": null,
      "itemBarcodeHidden": null,
      "disableSearchInstitution": false,
      "searchInstitutionHdn": null
  }
  ]
  let service: RequestService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [RequestService, HttpClient, HttpHandler, Router]

    })
      .compileComponents();
  }));
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new RequestService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('validate goToSearchRequest() response', () => {
    httpClientSpy.get.and.returnValues(of(expectedResponse));
    service.goToSearchRequest().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
  });
  it('validate getFirst() response', () => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.getFirst().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
  });
  it('validate getLast() response', () => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.getLast().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
  });
  it('validate getPrevious() response', () => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.getPrevious().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
  });
  it('validate getNext() response', () => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.getNext().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
  });
  it('validate requestPageSizeChange() response', () => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.requestPageSizeChange().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
  });
  it('validate loadCreateRequest() response', () => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.loadCreateRequest().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
  });
  it('validate loadCreateRequestForSamePatron() response', () => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.loadCreateRequestForSamePatron().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
  });
  it('validate loadSearchRequest() response', () => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.loadSearchRequest().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
  });
  it('validate populateItem() response', () => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.populateItem().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
  });
  it('validate createRequest() response', () => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.createRequest().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
  });
  it('validate cancelRequest() response', () => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.cancelRequest().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
  });
  it('validate resubmitRequest() response', () => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.resubmitRequest().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
  });
});
