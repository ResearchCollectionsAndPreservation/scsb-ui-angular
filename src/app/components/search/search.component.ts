import { Component, OnInit } from '@angular/core';

import { SearchService } from 'src/app/services/search/search.service';
import { SearchRecord } from 'src/app/model/SearchRecord';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  data: SearchRecord;
  errorMessage: string;
  constructor(private searchService: SearchService) { }

  ngOnInit() { }
  getSearch(): void {
    this.searchService.getLast().subscribe((res) => { this.data = res }, (err) => {
      this.errorMessage = "Error occured while making getting blind SEARCH RECORDS";
      console.log("error occured", this.errorMessage);
    });
  }
}