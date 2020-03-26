import { Action } from '@ngrx/store';
import { WalletActions, WalletActionTypes } from '../actions/wallet.actions';
import { IWalletItem } from '../interfaces/wallet.interface';

export interface State {
    list: Array<IWalletItem>;
}

export const initialState: State = {
    list: []
};

export function reducer(state = initialState, action: WalletActions): State {
    switch (action.type) {
        case WalletActionTypes.LoadCurrencies:
            console.log("------------->", action)
            // return { ...state, list: action.payload };
            return state;
        case WalletActionTypes.LoadCurrenciesSuccess:
            return {
                ...state,
                list: [...action.payload],
            };

        // case NewsActionTypes.NewsReset:
        //     return { ...state, list: [] };
        // case NewsActionTypes.LoadCatNews:
        //     return state;
        // case NewsActionTypes.LoadCatNewsSuccess:
        //     return { ...state, catList: action.payload };

        default:
            return state;
    }
}