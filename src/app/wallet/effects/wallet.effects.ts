import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import {
  LoadCurrencies,
  LoadCurrenciesFailed,
  WalletActionTypes,
} from '../actions/wallet.actions';
import { WalletService } from '../services/wallet.service';
import { Router } from '../../../../node_modules/@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class WalletEffects {
  @Effect()
  loadCurrencies$ = this.actions$.pipe(
    ofType<LoadCurrencies>(WalletActionTypes.LoadCurrencies),
    mergeMap(action =>
      this.walletService.getCoinsList().pipe(
        map(currencyList => ({
          type: WalletActionTypes.LoadCurrenciesSuccess,
          payload: currencyList,
        })),
        catchError((err: HttpErrorResponse) => {
          if (err.status !== 401) {
            this.router.navigate(['/404']);
          }
          return of(new LoadCurrenciesFailed());
        }),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private walletService: WalletService,
    private router: Router,
  ) {}
}
