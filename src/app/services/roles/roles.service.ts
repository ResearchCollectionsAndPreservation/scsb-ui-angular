import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/app.urls';
import { appConfig } from 'src/app.config';
import { HttpClient } from "@angular/common/http";
import { RequestForm } from '../../model/RequestForm';
@Injectable({
  providedIn: 'root'
})
export class RolesService {

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
}
