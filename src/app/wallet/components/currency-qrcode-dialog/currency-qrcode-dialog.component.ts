import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import * as copy from 'copy-to-clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  currency: object
}

@Component({
  selector: 'app-currency-qrcode-dialog',
  templateUrl: './currency-qrcode-dialog.component.html',
  styleUrls: ['./currency-qrcode-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyQrcodeDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public currency: DialogData, private snackBar: MatSnackBar) {
    //console.log(currency);
  }

  ngOnInit() {
  }

  copyAddress(address) {
    copy(address);
    this.snackBar.open('Address copied!', 'Close', { duration: 5000 });
  }
  copyKeys(key) {
    copy(key);
    this.snackBar.open('Key copied!', 'Close', { duration: 5000 });
  }
}
