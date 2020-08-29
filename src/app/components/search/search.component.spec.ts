import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { SearchService } from 'src/app/services/search/search.service';
import { HttpClient, HttpHandler } from "@angular/common/http";
describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchService: SearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [SearchService,HttpClient,HttpHandler]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    searchService = TestBed.get(SearchService);
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('validate getFirst() response ', () => {
    let value = searchService.getFirst();
    // searchService.getFirst().subscribe((res) => {
    //   expect(!res).toBeDefined();
    // });
    expect(value).toBeDefined();
    // spyOn(searchService,'getFirst');
    // expect(searchService.getFirst).toHaveBeenCalled();
  });
  it('validate getFirst() response ', () => {
    let value = searchService.getFirst();
    // searchService.getFirst().subscribe((res) => {
    //   expect(!res).toBeDefined();
    // });
    expect(value).toBeDefined();
    // spyOn(searchService,'getFirst');
    // expect(searchService.getFirst).toHaveBeenCalled();
  });
});

