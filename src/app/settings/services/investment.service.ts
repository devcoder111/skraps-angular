import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, forkJoin, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor(private http: HttpClient) {}

  public bulkTransactions(data): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}/investment/transactions`,
      data,
    );
  }

  public poolTransactions(data): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}/investment/pools`,
      data,
    );
  }

  public pendingTransactions(data): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}/investment/pending-transactions`,
      data,
    );
  }

}
