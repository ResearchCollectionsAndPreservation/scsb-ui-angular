import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { appConfig } from 'src/app.config';
import { urls } from 'src/app.urls';
import { SearchRecord } from '../../model/SearchRecord';


@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(@Inject (HttpClient) private httpClient: HttpClient) { }

  baseUrl = urls.baseUrl;
  prefix = urls.search;

  getLast(): Observable<SearchRecord> {
    return this.httpClient.post<SearchRecord>(this.baseUrl + this.prefix + "/last", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  getPrevious(): Observable<SearchRecord> {
    return this.httpClient.post<SearchRecord>(this.baseUrl + this.prefix + "/previous", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  getFirst(): Observable<SearchRecord> {
    return this.httpClient.post<SearchRecord>(this.baseUrl + this.prefix + "/first", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  getClear(): Observable<SearchRecord> {
    return this.httpClient.post<SearchRecord>(this.baseUrl + this.prefix + "/clear", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  getnewSearch(): Observable<SearchRecord> {
    return this.httpClient.post<SearchRecord>(this.baseUrl + this.prefix + "/newSearch", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  getRequest(): Observable<SearchRecord> {
    return this.httpClient.post<SearchRecord>(this.baseUrl + this.prefix + "/request", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  getExport(): Observable<SearchRecord> {
    return this.httpClient.post<SearchRecord>(this.baseUrl + this.prefix + "/export", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  getpageChanges(): Observable<SearchRecord> {
    return this.httpClient.post<SearchRecord>(this.baseUrl + this.prefix + "/pageChanges", {},
      {
        headers: appConfig.getHeaders()
      });
  }

}