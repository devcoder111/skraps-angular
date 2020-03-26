import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { IWalletItem } from '../../interfaces/wallet.interface';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { CurrencyQrcodeDialogComponent } from "../currency-qrcode-dialog/currency-qrcode-dialog.component";
import { WalletService } from '../../services/wallet.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-wallet-currencies-info',
  templateUrl: './wallet-currencies-info.component.html',
  styleUrls: ['./wallet-currencies-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalletCurrenciesInfoComponent implements OnInit {
  @Input() public list: Array<IWalletItem>;
  activeCurrencyIndex: number = 0;
  constructor(private dialog: MatDialog, private walletService: WalletService, private fb: FormBuilder, private ref: ChangeDetectorRef) { }
  sendCryptoForm: FormGroup;
  isDisabled: boolean = true;
  show: string= "listing";
  amountValue : any;
  btcValue : any;
  updatedValue : any;
  currencyData : any;
  formData : any;
  type : '';
  cointype : string;
  @Input() public coinData : any;
  public transactions$: Observable<any>;

  ngOnInit() {
    this.createForm();
    this.transactions$ = this.getTransactions(this.activeCurrencyIndex);
  }

  ngOnChanges() {}

  ngAfterContentChecked(){
    this.coinData = this.list[this.activeCurrencyIndex];
  }

  getTransactions(currency) {
    return this.walletService.getWalletTransfer({
      type: currency
    });
  }

  openDialog(currency) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = currency;

    this.dialog.open(CurrencyQrcodeDialogComponent, dialogConfig);
  }
  updateTab(index){
    this.show = 'listing';
    this.coinData = this.list[index];
    this.activeCurrencyIndex=index;
    this.transactions$ = this.getTransactions(this.activeCurrencyIndex);
  }
  sendCurrency(currency){
    this.btcValue = 0;
    this.currencyData =  currency;
    this.type = currency.name;
    if(currency.name == 'Bitcoin'){
      this.cointype='BTC';
    }else{
      this.cointype='ETH';
    }
    this.show = 'form';
    this.walletService.getCoinsPrice({ currency: this.cointype})
    .subscribe((responseData: Response[]) => {
       this.amountValue = responseData;
       this.ref.detectChanges();
    });
  }

  createForm() {
    this.sendCryptoForm = this.fb.group({
      address: ['', [Validators.required, Validators.maxLength(200)]],
      amount: ['', [Validators.required, Validators.maxLength(15)]]
    });
  }

  onInputChange(inputValue: string): void {
    this.updatedValue = inputValue;
    this.btcValue =  this.amountValue.data.amount * this.updatedValue;
  }

  onSendCryptoFormSubmit(data) {
    this.show = 'confirm';
    this.walletService.getSkrapsFee().subscribe(response => {
      if (response.data) {
        data.fee = ((response.data.value / 100) * data.amount).toFixed(30).replace(/\.?0+$/,"");
        data.amtTotal = (data.amount - data.fee).toFixed(30).replace(/\.?0+$/,"");
        data.type = this.type;
        data.cointType = this.cointype;
        this.formData = data;
        this.sendCryptoForm.reset();
        this.ref.detectChanges();
      }
    });
  }

  cancelTransaction(){
    this.show = 'listing';
  }

  onSubmit = function () {
    this.formData.isDisabled = true;
    this.formData.type = this.type;
    this.formData.value = this.formData.amount;
    this.walletService.sendCrypto(this.formData).subscribe(data => {
      if (data.status == 'success') {
        this.show = 'sent';
        this.ref.detectChanges();
      }
      if (data.status == 'error') {
        this.formData.isDisabled = false;
        this.ref.detectChanges();
      }
    });
  }

}
