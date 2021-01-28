import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NGXLogger } from 'ngx-logger';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from 'src/app/services/login/login.service';
import { urls } from 'src/config/urls';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  reloadStatus: boolean;
  institution: string = 'default';
  url: string = '';
  baseUrl = urls.baseUrl;
  casPrefix = urls.casPrefix;
  redirectForm: FormGroup;
  serviceUrl: string;
  submitted = false;
  Institutions: any = [];
  institutionErrorMessageDiv = false;
  validate: boolean;
  constructor(private router: Router, private spinner: NgxSpinnerService, private logger: NGXLogger, private cookieService: CookieService, private loginService: LoginService) {

  }
  ngAfterViewInit() {
    // @ts-ignore
    twttr.widgets.load();
  }

  ngOnInit(): void {
    this.spinner.hide();
    this.cookieService.deleteAll();
    sessionStorage.clear();
    this.redirectToCas();
    this.institution = 'default';
    this.loginService.getInstitutions().subscribe(
      (res) => {
        this.Institutions = res;
      });
  }
  changeInst() {
    if (this.institution == 'default') {
      this.institutionErrorMessageDiv = true;
      this.validate = false;
    } else {
      this.institutionErrorMessageDiv = false;
      this.url = this.baseUrl + this.casPrefix + this.institution;
      this.validate = true;
    }
  }
  redirectToCas() {
    this.cookieService.deleteAll();
    if (localStorage.casUrlStatus == 'true') {
      this.spinner.show();
      // const link = document.createElement('a');
      // link.href = localStorage.casURL;
      // link.setAttribute('visibility', 'hidden');
      // link.click();
      window.location.href = localStorage.casURL;
      localStorage.setItem('casUrlStatus', 'false');
    }
  }
  returnZero() {
    return 0
  }
  navigateToCAS() {
    this.cookieService.deleteAll();
    localStorage.setItem('casURL', this.url);
    localStorage.setItem('casUrlStatus', 'true');
    // const link = document.createElement('a');
    // link.href = localStorage.casURL;
    // link.setAttribute('visibility', 'hidden');
    // link.click();
    window.location.href = localStorage.casURL;
  }
  getinTouch: any[] = [{
    "for": "Princeton users, Role administration, please contact",
    "url": 'mailto:Recapproblems@princeton.edu',
    "name": 'Recapproblems@princeton.edu'
  },

  {
    "for": "Princeton users, Technical support, please contact",
    "url": 'mailto:mzelesky@princeton.edu',
    "name": 'mzelesky@princeton.edu'

  },
  {
    "for": "Columbia users, contact",
    "url": 'mailto:recap.admin@library.columbia.edu',
    "name": 'recap.admin@library.columbia.edu'
  },
  {
    "for": "NYPL users, contact",
    "url": 'mailto:ReCAPinterface@nypl.org',
    "name": 'ReCAPinterface@nypl.org'
  }

  ];

}
