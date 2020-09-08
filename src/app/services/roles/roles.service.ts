import { Injectable, OnInit, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { appConfig } from 'src/app.config';
import { urls } from 'src/app.urls';
import { RolesForm } from '../../model/RolesForm';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  baseUrl = urls.baseUrl;
  prefix = urls.roles;

  searchRoles(): Observable<RolesForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<RolesForm>(this.baseUrl + this.prefix + "/search",
      {
        headers: appConfig.getHeaders()
      });
  }
  populatePermissionNames(): Observable<RolesForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<RolesForm>(this.baseUrl + this.prefix + "/populatePermissionName",
      {
        headers: appConfig.getHeaders()
      });
  }
  newRole(): Observable<RolesForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<RolesForm>(this.baseUrl + this.prefix + "/loadCreateRole",
      {
        headers: appConfig.getHeaders()
      });
  }
  editRole(): Observable<RolesForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<RolesForm>(this.baseUrl + this.prefix + "/editRole",
      {
        headers: appConfig.getHeaders()
      });
  }
  saveEditedRole(): Observable<RolesForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<RolesForm>(this.baseUrl + this.prefix + "/saveEditedRole",
      {
        headers: appConfig.getHeaders()
      });
  }
  deleteRole(): Observable<RolesForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<RolesForm>(this.baseUrl + this.prefix + "/deleteRole",
      {
        headers: appConfig.getHeaders()
      });
  }
  delete(): Observable<RolesForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<RolesForm>(this.baseUrl + this.prefix + "/delete",
      {
        headers: appConfig.getHeaders()
      });
  }
  searchPrevious(): Observable<RolesForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<RolesForm>(this.baseUrl + this.prefix + "/previous",
      {
        headers: appConfig.getHeaders()
      });
  }
  searchNext(): Observable<RolesForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<RolesForm>(this.baseUrl + this.prefix + "/next",
      {
        headers: appConfig.getHeaders()
      });
  }
  searchFirst(): Observable<RolesForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<RolesForm>(this.baseUrl + this.prefix + "/first",
      {
        headers: appConfig.getHeaders()
      });
  }
  searchLast(): Observable<RolesForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<RolesForm>(this.baseUrl + this.prefix + "/last",
      {
        headers: appConfig.getHeaders()
      });
  }
  onPageSizeChange(): Observable<RolesForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<RolesForm>(this.baseUrl + this.prefix + "/pageSizeChange",
      {
        headers: appConfig.getHeaders()
      });
  }
  goBack(): Observable<RolesForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<RolesForm>(this.baseUrl + this.prefix + "/goBack",
      {
        headers: appConfig.getHeaders()
      });
  }
}
