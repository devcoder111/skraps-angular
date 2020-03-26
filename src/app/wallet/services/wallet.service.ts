import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }

  public getCoinsList(): Observable<any> {
    return this.http
    .get<{ data: Array<any> }>(
      `${environment.baseUrl}/coins/info`,
    )
    .pipe(map(resp => resp.data));
  }
  public getCoinsPrice(data): Observable<any> {
    return this.http.post(`${environment.baseUrl}/crypto/coin/sell-price`, data);
  }

  public getSkrapsFee(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/checkout/stripe/skraps-fee`,);
  }

  sendCrypto(data): Observable<any> {
    return this.http.post(`${environment.baseUrl}/setting/wallet/wallet-send-crypto`, data);
  }

  public getWalletTransfer(data): Observable<any> {
    return this.http.post(`${environment.baseUrl}/setting/wallet/getWalletTransfer`, data);
  }


}
