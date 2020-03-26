import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchedulersService {

  constructor(private http: HttpClient) {}

  getCrons(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/admin/scheduler/list`);
  }

  updateCron(data): Observable<any> {
    return this.http.post(`${environment.baseUrl}/admin/scheduler/update`, data);
  }
}
