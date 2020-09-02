import { Injectable,Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { appConfig } from 'src/app.config';
import { urls } from 'src/app.urls';
@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }
  baseUrl = urls.baseUrl;
  prefix = urls.jobs;

  displayJobs(): Observable<any> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<any[]>(this.baseUrl + this.prefix + "/jobs",
      {
        headers: appConfig.getHeaders()
      });
  }
}
