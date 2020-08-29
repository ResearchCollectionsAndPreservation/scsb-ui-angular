import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { urls } from 'src/app.urls';
import { appConfig } from 'src/app.config';
import { RequestForm } from '../../model/RequestForm';
@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private httpClient: HttpClient) { }
  baseUrl: string;

  // getSearch(): Observable<RequestForm[]> {
  //   this.baseUrl = urls.baseUrl;
  //   return this.httpClient.post<RequestForm[]>(this.baseUrl + "/search/last", {},
  //     {
  //       headers: appConfig.getHeaders()
  //     });
  // }
}
