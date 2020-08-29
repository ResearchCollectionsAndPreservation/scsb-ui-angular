import { Injectable, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/app.urls';
import { appConfig } from 'src/app.config';
import { RequestForm } from '../../model/RequestForm';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }
  baseUrl = urls.baseUrl;
  prefix = urls.requests;
  goToSearchRequest(): Observable<RequestForm[]> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<RequestForm[]>(this.baseUrl + this.prefix + "/goToSearchRequest",
      {
        headers: appConfig.getHeaders()
      });
  }
  getFirst(): Observable<RequestForm[]> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<RequestForm[]>(this.baseUrl + this.prefix + "/first", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  getLast(): Observable<RequestForm[]> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<RequestForm[]>(this.baseUrl + this.prefix + "/last", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  getPrevious(): Observable<RequestForm[]> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<RequestForm[]>(this.baseUrl + this.prefix + "/previous", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  getNext(): Observable<RequestForm[]> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<RequestForm[]>(this.baseUrl + this.prefix + "/next", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  requestPageSizeChange(): Observable<RequestForm[]> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<RequestForm[]>(this.baseUrl + this.prefix + "/requestPageSizeChange", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  loadCreateRequest(): Observable<RequestForm[]> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<RequestForm[]>(this.baseUrl + this.prefix + "/loadCreateRequest", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  loadCreateRequestForSamePatron(): Observable<RequestForm[]> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<RequestForm[]>(this.baseUrl + this.prefix + "/loadCreateRequestForSamePatron", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  loadSearchRequest(): Observable<RequestForm[]> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<RequestForm[]>(this.baseUrl + this.prefix + "/loadSearchRequest", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  populateItem(): Observable<RequestForm[]> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<RequestForm[]>(this.baseUrl + this.prefix + "/populateItem", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  createRequest(): Observable<RequestForm[]> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<RequestForm[]>(this.baseUrl + this.prefix + "/createRequest", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  cancelRequest(): Observable<RequestForm[]> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<RequestForm[]>(this.baseUrl + this.prefix + "/cancelRequest", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  resubmitRequest(): Observable<RequestForm[]> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<RequestForm[]>(this.baseUrl + this.prefix + "/resubmitRequest", {},
      {
        headers: appConfig.getHeaders()
      });
  }
}
