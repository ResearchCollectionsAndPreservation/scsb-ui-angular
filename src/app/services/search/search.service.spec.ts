import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClient, HttpHandler } from "@angular/common/http";
import { of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { SearchService } from './search.service';
import { SearchRecord } from '../../model/SearchRecord';

describe('#SearchService', () => {
  const expectedResponse: SearchRecord = 
    {
      "fieldValue": "",
      "fieldName": "",
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
      "availability": [
        "Available",
        "NotAvailable"
      ],
      "materialTypes": [
        "Monograph",
        "Serial",
        "Other"
      ],
      "useRestrictions": [
        "NoRestrictions",
        "InLibraryUse",
        "SupervisedUse"
      ],
      "searchResultRows": [],
      "totalPageCount": 0,
      "totalBibRecordsCount": "0",
      "totalItemRecordsCount": "0",
      "totalRecordsCount": "0",
      "pageNumber": 0,
      "pageSize": 10,
      "showResults": true,
      "selectAll": false,
      "selectAllFacets": true,
      "showTotalCount": false,
      "index": null,
      "errorMessage": "No search results found. Please refine search conditions.",
      "catalogingStatus": "Complete",
      "deleted": false
    };

  let searchService: SearchService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [],
      providers: [SearchService, HttpClient, HttpHandler]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    // TestBed.configureTestingModule({
    //   imports: [HttpClientTestingModule],
    //   declarations: [SearchComponent],
    //   providers: [SearchService, HttpTestingController, HttpClient, HttpHandler]
    // })
    //   .compileComponents();
    //fixture = TestBed.createComponent(SearchComponent);
    //searchComponent = fixture.componentInstance;
    //httpMock = TestBed.get(HttpTestingController);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    searchService = new SearchService(httpClientSpy as any);
    //fixture.detectChanges();

  })
  afterEach(() => {
    searchService = null;
    //TestBed.resetTestingModule();
  });
  it('should be created', () => {
    expect(searchService).toBeTruthy();
  });
  it('Validate getFirst() response', () => {
    httpClientSpy.post.and.returnValue(of(expectedResponse));
    searchService.getFirst().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
    //expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    // const req = httpMock.expectOne(`${searchService.baseUrl+searchService.prefix}/first`);
    // expect(req.request.method).toBe("POST");
    // req.flush(responseData);
    //expect(value).toBeDefined();
    // spyOn(searchService,'getFirst');
    // expect(searchService.getFirst).toHaveBeenCalled();
  });
  it('Validate getLast() response', () => {
    httpClientSpy.post.and.returnValue(of(expectedResponse));
    searchService.getLast().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
    //expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  it('Validate getPrevious() response', () => {
    httpClientSpy.post.and.returnValue(of(expectedResponse));
    searchService.getPrevious().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
    // expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  it('Validate getClear() response', () => {
    httpClientSpy.post.and.returnValue(of(expectedResponse));
    searchService.getClear().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
    // expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  it('Validate getnewSearch() response', () => {
    httpClientSpy.post.and.returnValue(of(expectedResponse));
    searchService.getnewSearch().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
    //expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  it('Validate getRequest() response', () => {
    httpClientSpy.post.and.returnValue(of(expectedResponse));
    searchService.getRequest().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
    //expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  it('Validate getExport() response', () => {
    httpClientSpy.post.and.returnValue(of(expectedResponse));
    searchService.getExport().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
    //expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  it('Validate getpgaeChanges() response', () => {
    httpClientSpy.post.and.returnValue(of(expectedResponse));
    searchService.getpageChanges().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
    //expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  });
});
