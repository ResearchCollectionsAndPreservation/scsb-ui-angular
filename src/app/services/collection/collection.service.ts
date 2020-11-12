import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';
import { CollectionForm } from 'src/app/model/CollectionForm';
import { appHeaders } from 'src/config/headers';
import { urls } from 'src/config/urls';

@Injectable({
  providedIn: 'root'
})

export class CollectionService {
  baseUrl = urls.baseUrl;
  prefix = urls.collection;

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  displyRecords(postData: CollectionForm): Observable<TreeNode[]> {
    return this.httpClient.post<TreeNode[]>(this.baseUrl + this.prefix + "/displayRecords", postData,
      {
        headers: appHeaders.getHeaders()
      });
  }
  openMarcView(postData: CollectionForm): Observable<TreeNode[]> {
    return this.httpClient.post<TreeNode[]>(this.baseUrl + this.prefix + "/openMarcView", postData,
      {
        headers: appHeaders.getHeaders()
      });
  }
  updateCollection(postData: CollectionForm): Observable<TreeNode[]> {
    return this.httpClient.post<TreeNode[]>(this.baseUrl + this.prefix + "/collectionUpdate", postData,
      {
        headers: appHeaders.getHeaders()
      });
  }
  checkCrossInstitutionBorrowed(postData: CollectionForm): Observable<TreeNode[]> {
    return this.httpClient.post<TreeNode[]>(this.baseUrl + this.prefix + "/checkCrossInstitutionBorrowed", postData,
      {
        headers: appHeaders.getHeaders()
      });
  }
}
