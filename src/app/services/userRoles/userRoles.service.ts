import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/app.urls';
import { appConfig } from 'src/app.config';
import { HttpClient } from "@angular/common/http";
import { UserRoleForm } from '../../model/UserRoleForm';

@Injectable({
  providedIn: 'root'
})
export class UserRolesService {

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  baseUrl = urls.baseUrl;
  prefix = urls.userRoles;

  showUserRoles(): Observable<String> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<String>(this.baseUrl + this.prefix + "/userRoles",
      {
        headers: appConfig.getHeaders()
      });
  }
  searchUserRole(): Observable<UserRoleForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<UserRoleForm>(this.baseUrl + this.prefix + "/searchUsers",
      {
        headers: appConfig.getHeaders()
      });
  }
  deleteUserRole(): Observable<UserRoleForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<UserRoleForm>(this.baseUrl + this.prefix + "/deleteUser",
      {
        headers: appConfig.getHeaders()
      });
  }
  deleteUser(): Observable<UserRoleForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<UserRoleForm>(this.baseUrl + this.prefix + "/delete",
      {
        headers: appConfig.getHeaders()
      });
  }
  searchFirstPage(): Observable<UserRoleForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<UserRoleForm>(this.baseUrl + this.prefix + "/first",
      {
        headers: appConfig.getHeaders()
      });
  }
  searchNextPage(): Observable<UserRoleForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<UserRoleForm>(this.baseUrl + this.prefix + "/next",
      {
        headers: appConfig.getHeaders()
      });
  }
  searchPreviousPage(): Observable<UserRoleForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<UserRoleForm>(this.baseUrl + this.prefix + "/previous",
      {
        headers: appConfig.getHeaders()
      });
  }
  searchLastPage(): Observable<UserRoleForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<UserRoleForm>(this.baseUrl + this.prefix + "/last",
      {
        headers: appConfig.getHeaders()
      });
  }
  createUserRequest(): Observable<UserRoleForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<UserRoleForm>(this.baseUrl + this.prefix + "/createUser",
      {
        headers: appConfig.getHeaders()
      });
  }
  editUser(): Observable<UserRoleForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<UserRoleForm>(this.baseUrl + this.prefix + "/editUser",
      {
        headers: appConfig.getHeaders()
      });
  }
  saveEditUserDetails(): Observable<UserRoleForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.get<UserRoleForm>(this.baseUrl + this.prefix + "/saveEditUserDetails",
      {
        headers: appConfig.getHeaders()
      });
  }
  goBack(): Observable<UserRoleForm> {
    this.baseUrl = urls.baseUrl;
    return this.httpClient.post<UserRoleForm>(this.baseUrl + this.prefix + "/goBack",
      {
        headers: appConfig.getHeaders()
      });
  }
}
