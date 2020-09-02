import { TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClient, HttpHandler } from "@angular/common/http";
import { JobsService } from './jobs.service';
import { Router } from "@angular/router";
describe('JobsService', () => {
  const expectedResponse: String='';
  let service: JobsService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };
  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [],
      providers: [JobsService, HttpClient, HttpHandler, Router]

    })
      .compileComponents();
  }));
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new JobsService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('validate goToSearchRequest() response', () => {
    httpClientSpy.get.and.returnValues(of(expectedResponse));
    service.displayJobs().subscribe((res) =>
      expect(res).toEqual(expectedResponse), fail);
  });
});
