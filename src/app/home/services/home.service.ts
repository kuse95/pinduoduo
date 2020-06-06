import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TabsResponse } from '../interface';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getTabs() {
    return this.http
      .get<TabsResponse>('/tabs')
      .pipe(pluck('data'), pluck('list'));
  }
}
