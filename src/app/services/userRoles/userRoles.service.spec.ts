import { TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClient, HttpHandler } from "@angular/common/http";
import { UserRolesService } from './userRoles.service';
import { Router } from "@angular/router";
import { UserRoleForm } from '../../model/UserRoleForm';
describe('RolesService', () => {
  const expectedResponseshowUserRoles: String = '';
  const expectedResponse: UserRoleForm = {

    "userId": 0,
    "institutionId": 0,
    "editUserId": 0,
    "roleId": null,
    "editRoleId": null,
    "pageNumber": 0,
    "pageSize": 10,
    "totalPageCount": 0,
    "editInstitutionId": null,
    "afterDelPageNumber": 0,
    "afterDelPageSize": 10,
    "afterDelTotalPageCount": 0,
    "searchNetworkId": null,
    "networkLoginId": null,
    "roleName": null,
    "totalRecordsCount": "0",
    "institutionName": null,
    "message": null,
    "errorMessage": null,
    "errorMessageForEmail": null,
    "editErromessage": null,
    "sectionName": null,
    "buttonName": null,
    "editNetworkId": null,
    "userDescriptionErrMsg": null,
    "userDescription": null,
    "editNetworkLoginId": null,
    "editUserDescription": null,
    "userEmailId": null,
    "emailId": null,
    "editEmailId": null,
    "allowCreateEdit": true,
    "showPagination": false,
    "showSearch": false,
    "showErrorMessage": false,
    "showCreateSuccess": false,
    "showCreateError": false,
    "showEditSuccess": false,
    "showEditError": false,
    "showCreateEmailError": false,
    "deleteSuccessMsg": false,
    "selected": false,
    "submitted": false,
    "showResults": false,
    "deletedSuccessMsg": false,
    "deleteErrorMsg": false,
    "showUserSearchView": true,
    "roles": [],
    "institutions": [],
    "showSelectedForCreate": [],
    "selectedForCreate": [],
    "editSelectedForCreate": [],
    "userRoleFormList": [],
    "showEditDeleteIcon": true,
    "createdBy": null,
    "lastUpdatedBy": null,
    "createdRequest": false
  }
  let service: UserRolesService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [],
      providers: [UserRolesService, HttpClient, HttpHandler, Router]

    })
      .compileComponents();
  }));
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new UserRolesService(httpClientSpy as any);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('validate showUserRoles() response', () => {
    httpClientSpy.get.and.returnValues(of(expectedResponseshowUserRoles));
    service.showUserRoles().subscribe((res) =>
      expect(res).toEqual(expectedResponseshowUserRoles), fail);
  });
  xit('validate searchUserRole() response', () => {
    httpClientSpy.get.and.returnValues(of(expectedResponse));
    service.searchUserRole().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
  });
  it('validate deleteUserRole() response', () => {
    httpClientSpy.get.and.returnValues(of(expectedResponse));
    service.deleteUserRole().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
  });
});
