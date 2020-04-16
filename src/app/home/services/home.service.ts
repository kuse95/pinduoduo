import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HomeTabsResponse } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getTabs() {
    return this.http.get<HomeTabsResponse>(`${environment.baseUrl}/tabs`);
  }
}
