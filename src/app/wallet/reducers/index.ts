import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromWallet from './wallet.reducer';

export interface State {
  wallet: fromWallet.State;
}

export const reducers: ActionReducerMap<State> = {
  wallet: fromWallet.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


export const getWalletState = createFeatureSelector<State>('wallet');

export const getCoinsList = createSelector(
  getWalletState,
  (state: State) => state.wallet.list
);