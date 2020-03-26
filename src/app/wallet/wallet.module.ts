import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WalletEffects } from './effects/wallet.effects';
import * as fromWallet from './reducers';
import { WalletCurrenciesComponent } from './containers/wallet-currencies/wallet-currencies.component';
import { WalletRoutingModule } from './modules/wallet-routing.module';
import { WalletCurrenciesInfoComponent } from './components/wallet-currencies-info/wallet-currencies-info.component';
import { MaterialModule } from '../material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { CurrencyQrcodeDialogComponent } from './components/currency-qrcode-dialog/currency-qrcode-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { WalletTransactionsComponent } from './components/wallet-transactions/wallet-transactions.component';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([WalletEffects]),
    StoreModule.forFeature('wallet', fromWallet.reducers, { metaReducers: fromWallet.metaReducers }),
    WalletRoutingModule,
    MaterialModule,
    MatTabsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  declarations: [WalletCurrenciesComponent, WalletCurrenciesInfoComponent, CurrencyQrcodeDialogComponent, WalletTransactionsComponent],
  entryComponents: [CurrencyQrcodeDialogComponent]
})
export class WalletModule { }
