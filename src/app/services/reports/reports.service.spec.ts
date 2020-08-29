import { TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpHandler } from "@angular/common/http";
import { of } from 'rxjs';
import { Router } from "@angular/router";

import { ReportsService } from './reports.service';

describe('ReportsService', () => {
  let service: ReportsService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [ReportsService, HttpClient, HttpHandler, Router]

    })
      .compileComponents();
  }));
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new ReportsService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // it('validate displyRecords() response',() => {
  //   httpClientSpy.post.and.returnValues(of(expectedResponse));
  //   service.displyRecords().subscribe((res) => 
  //   expect(res).toEqual(expectedResponse),fail);
  // });
});
