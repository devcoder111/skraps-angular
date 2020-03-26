import { Action } from '@ngrx/store';
import { IWalletItem } from '../interfaces/wallet.interface';

export enum WalletActionTypes {
    LoadCurrencies = '[Currencies] Load Currencies',
    LoadCurrenciesFailed = '[Currencies] Load Currencies Failed',
    LoadCurrenciesSuccess = '[Currencies] Load Currencies Success',
}

export class LoadCurrencies implements Action {
    readonly type = WalletActionTypes.LoadCurrencies;
    // constructor(public payload: IPagination = { limit: 5, page: 1, source: '' }) {
    // constructor(public payload: Array<IWalletItem>) {
        // console.log('%c loadnews', 'color:blue');
        // console.log("It is payload", payload);
    // }
}
export class LoadCurrenciesFailed implements Action {
    readonly type = WalletActionTypes.LoadCurrenciesFailed;
}
export class LoadCurrenciesSuccess implements Action {
    readonly type = WalletActionTypes.LoadCurrenciesSuccess;
    constructor(public payload: Array<IWalletItem>) {
        // console.log('%c loadnews', 'color:green');
    }
}

export type WalletActions =
    | LoadCurrencies
    | LoadCurrenciesFailed
    | LoadCurrenciesSuccess;
