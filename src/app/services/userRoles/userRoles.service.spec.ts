import { TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClient, HttpHandler } from "@angular/common/http";
import { UserRolesService } from './userRoles.service';
import { Router } from "@angular/router";

describe('RolesService', () => {
  const expectedResponse: String='';
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
    httpClientSpy.get.and.returnValues(of(expectedResponse));
    service.showUserRoles().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
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
