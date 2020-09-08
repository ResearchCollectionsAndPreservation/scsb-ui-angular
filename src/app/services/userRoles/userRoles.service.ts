import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/app.urls';
import { appConfig } from 'src/app.config';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserRolesService {

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  baseUrl = urls.baseUrl;
  prefix = urls.userRoles;

  showUserRoles(): Observable<any> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<any>(this.baseUrl + this.prefix + "/userRoles",
      {
        headers: appConfig.getHeaders()
      });
  }
  searchUserRole(): Observable<any> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<any[]>(this.baseUrl + this.prefix + "/searchUsers",
      {
        headers: appConfig.getHeaders()
      });
  }
  deleteUserRole(): Observable<any> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<any[]>(this.baseUrl + this.prefix + "/deleteUser",
      {
        headers: appConfig.getHeaders()
      });
  }
  deleteUser(): Observable<any> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<any[]>(this.baseUrl + this.prefix + "/delete",
      {
        headers: appConfig.getHeaders()
      });
  }
  searchFirstPage(): Observable<any> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<any[]>(this.baseUrl + this.prefix + "/first",
      {
        headers: appConfig.getHeaders()
      });
  }
  searchNextPage(): Observable<any> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<any[]>(this.baseUrl + this.prefix + "/next",
      {
        headers: appConfig.getHeaders()
      });
  }
  searchPreviousPage(): Observable<any> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<any[]>(this.baseUrl + this.prefix + "/previous",
      {
        headers: appConfig.getHeaders()
      });
  }
  searchLastPage(): Observable<any> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<any[]>(this.baseUrl + this.prefix + "/last",
      {
        headers: appConfig.getHeaders()
      });
  }
  createUserRequest(): Observable<any> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<any[]>(this.baseUrl + this.prefix + "/createUser",
      {
        headers: appConfig.getHeaders()
      });
  }
  editUser(): Observable<any> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<any[]>(this.baseUrl + this.prefix + "/editUser",
      {
        headers: appConfig.getHeaders()
      });
  }
  saveEditUserDetails(): Observable<any> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<any[]>(this.baseUrl + this.prefix + "/saveEditUserDetails",
      {
        headers: appConfig.getHeaders()
      });
  }
  goBack(): Observable<any> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<any[]>(this.baseUrl + this.prefix + "/goBack",
      {
        headers: appConfig.getHeaders()
      });
  }
}
