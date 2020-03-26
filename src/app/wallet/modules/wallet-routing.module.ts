import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletCurrenciesComponent } from '../containers/wallet-currencies/wallet-currencies.component';

const routes: Routes = [
    {
        path: '',
        component: WalletCurrenciesComponent,
        data: { title: 'Wallet | Skraps' },
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
