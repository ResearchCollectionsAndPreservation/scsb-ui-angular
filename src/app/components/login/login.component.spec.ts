import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ LoginComponent ]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(() => {
    component = new LoginComponent(router);
    // fixture = TestBed.createComponent(LoginComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });
  afterEach(() => {
    component = null;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
