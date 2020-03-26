import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../reducers';
import {
  concatMap,
  map,
  share,
  tap,
  startWith,
  filter,
  mergeMap,
} from 'rxjs/operators';
import * as WalletActions from '../../actions/wallet.actions';

@Component({
  selector: 'app-wallet-currencies',
  templateUrl: './wallet-currencies.component.html',
  styleUrls: ['./wallet-currencies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalletCurrenciesComponent implements OnInit {

  public currencyList$: Observable<any> = this.store
  .pipe(select(fromStore.getCoinsList));
  // .pipe(
  //   // map(arr => {
  //   //   return arr.slice(0, 2 * 1);
  //   // }),
  //   share(),
  // );

  constructor(private store: Store<any>) {
    this.store.dispatch(new WalletActions.LoadCurrencies());
  }

  ngOnInit() {
    console.log("In wallet component")
    console.log(this.currencyList$)
  }

}
