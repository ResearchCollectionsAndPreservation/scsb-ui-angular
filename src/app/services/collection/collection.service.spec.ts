import { TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpHandler } from "@angular/common/http";
import { Router } from "@angular/router";
import { of } from 'rxjs';

import { CollectionService } from './collection.service';
import { CollectionForm } from '../../model/CollectionForm';

describe('#CollectionService', () => {
  const expectedResponse: CollectionForm[] = [
    {
      "bibId": null,
      "title": null,
      "author": null,
      "publisher": null,
      "publishedDate": null,
      "owningInstitution": null,
      "callNumber": null,
      "leaderMaterialType": null,
      "tag000": null,
      "controlNumber001": null,
      "controlNumber005": null,
      "controlNumber008": null,
      "content": null,
      "bibDataFields": [],
      "errorMessage": null,
      "warningMessage": null,
      "itemId": null,
      "availability": null,
      "barcode": null,
      "locationCode": null,
      "useRestriction": null,
      "monographCollectionGroupDesignation": null,
      "collectionGroupDesignation": null,
      "newCollectionGroupDesignation": null,
      "cgdChangeNotes": null,
      "customerCode": null,
      "deaccessionType": null,
      "deaccessionNotes": null,
      "deliveryLocations": [],
      "deliveryLocation": null,
      "shared": false,
      "submitted": false,
      "message": null,
      "collectionAction": null,
      "allowEdit": false,
      "username": null,
      "itemBarcodes": null,
      "showResults": false,
      "selectAll": false,
      "barcodesNotFoundErrorMessage": null,
      "ignoredBarcodesErrorMessage": null,
      "searchResultRows": [],
      "showModal": false
  }
  ]
  let service: CollectionService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [CollectionService, HttpClient, HttpHandler,Router]

    })
      .compileComponents();
  }));
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new CollectionService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('validate displyRecords() response',() => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.displyRecords().subscribe((res) => 
    expect(res).toEqual(expectedResponse),fail);
  });
  it('validate openMarcView() response',() => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.openMarcView().subscribe((res) => 
    expect(res).toEqual(expectedResponse),fail);
  });
  it('validate getCollection() response',() => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.getCollection().subscribe((res) => 
    expect(res).toEqual(expectedResponse),fail);
  });
  it('validate updateCollection() response',() => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.updateCollection().subscribe((res) => 
    expect(res).toEqual(expectedResponse),fail);
  });
  it('validate checkCrossInstitutionBorrowed() response',() => {
    httpClientSpy.post.and.returnValues(of(expectedResponse));
    service.checkCrossInstitutionBorrowed().subscribe((res) => 
    expect(res).toEqual(expectedResponse),fail);
  });
});
