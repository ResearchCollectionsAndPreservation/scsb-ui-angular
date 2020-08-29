import { Injectable, OnInit, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { from, Observable } from 'rxjs';
import { appConfig } from 'src/app.config';
import { urls } from 'src/app.urls';
import { CollectionForm } from '../../model/CollectionForm';

@Injectable({
  providedIn: 'root'
})

export class CollectionService {
  baseUrl = urls.baseUrl;
  prefix = urls.collection;

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  getCollection(): Observable<CollectionForm[]> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<CollectionForm[]>(this.baseUrl + this.prefix + "/collection", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  displyRecords(): Observable<CollectionForm[]> {
    return this.httpClient.post<CollectionForm[]>(this.baseUrl + this.prefix + "/displayRecords", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  openMarcView(): Observable<CollectionForm[]> {
    return this.httpClient.post<CollectionForm[]>(this.baseUrl + this.prefix + "/openMarcView", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  updateCollection(): Observable<CollectionForm[]> {
    return this.httpClient.post<CollectionForm[]>(this.baseUrl + this.prefix + "/collectionUpdate", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  checkCrossInstitutionBorrowed(): Observable<CollectionForm[]> {
    return this.httpClient.post<CollectionForm[]>(this.baseUrl + this.prefix + "/checkCrossInstitutionBorrowed", {},
      {
        headers: appConfig.getHeaders()
      });
  }

}
