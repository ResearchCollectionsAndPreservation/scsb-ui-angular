import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { urls } from 'src/app.urls';
import { appConfig } from 'src/app.config';
import { ReportForm } from '../../model/ReportsForm';
@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = urls.baseUrl;
  prefix = urls.reports;

  reportCounts(): Observable<ReportForm[]> {
    return this.httpClient.post<ReportForm[]>(this.baseUrl + this.prefix + "/submit", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  cgdCounts(): Observable<ReportForm[]> {
    return this.httpClient.post<ReportForm[]>(this.baseUrl + this.prefix + "/collectionGroupDesignation", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  deaccessionInformation(): Observable<ReportForm[]> {
    return this.httpClient.post<ReportForm[]>(this.baseUrl + this.prefix + "/deaccessionInformation", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  searchFirst(): Observable<ReportForm[]> {
    return this.httpClient.post<ReportForm[]>(this.baseUrl + this.prefix + "/first", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  searchPrevious(): Observable<ReportForm[]> {
    return this.httpClient.post<ReportForm[]>(this.baseUrl + this.prefix + "/previous", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  searchNext(): Observable<ReportForm[]> {
    return this.httpClient.post<ReportForm[]>(this.baseUrl + this.prefix + "/next", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  searchLast(): Observable<ReportForm[]> {
    return this.httpClient.post<ReportForm[]>(this.baseUrl + this.prefix + "/last", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  incompleteRecordsReport(): Observable<ReportForm[]> {
    return this.httpClient.post<ReportForm[]>(this.baseUrl + this.prefix + "/incompleteRecords", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  getInstitutionForIncompleteReport(): Observable<ReportForm[]> {
    return this.httpClient.post<ReportForm[]>(this.baseUrl + this.prefix + "/getInstitutions", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  exportIncompleteRecords(): Observable<ReportForm[]> {
    return this.httpClient.post<ReportForm[]>(this.baseUrl + this.prefix + "/export", {},
      {
        headers: appConfig.getHeaders()
      });
  }
  incompleteReportPageSizeChange(): Observable<ReportForm[]> {
    return this.httpClient.post<ReportForm[]>(this.baseUrl + this.prefix + "/incompleteReportPageSizeChange", {},
      {
        headers: appConfig.getHeaders()
      });
  }

}
