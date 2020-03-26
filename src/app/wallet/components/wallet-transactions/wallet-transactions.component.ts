import { Component, OnInit, ChangeDetectionStrategy,  Input } from '@angular/core';
import { IWalletTransferItem } from '../../interfaces/wallet-transfer.interface';
import { MatDialog, MatDialogConfig } from "@angular/material";
@Component({
  selector: 'app-wallet-transactions',
  templateUrl: './wallet-transactions.component.html',
  styleUrls: ['./wallet-transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalletTransactionsComponent implements OnInit {

  constructor() { }
  @Input() transactions: Array<IWalletTransferItem>;
  @Input() coinData: any;
  ngOnInit() {
  }

}
