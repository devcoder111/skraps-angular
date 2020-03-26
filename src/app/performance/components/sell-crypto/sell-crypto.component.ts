import { Component, OnInit } from '@angular/core';
import { PerformanceService } from "../../services/performance.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sell-crypto',
  templateUrl: './sell-crypto.component.html',
  styleUrls: ['./sell-crypto.component.scss']
})
export class SellCryptoComponent implements OnInit {

  items: any;
  isDisabled: boolean = false;
  // current_selected: string;
  selectedOptions: any;
  durationInSeconds = 13000;
  sellForm: FormGroup;

  constructor(
    private performanceService: PerformanceService,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getData();
  }

  createSellForm() {
    let coins = {};
    if (this.items.length > 0) {
      for (let c=0; c<this.items.length; c++) {
        coins[this.items[c]['id']] = '';
      }
    }

    this.sellForm = this.fb.group(coins);
    // this.fb.array([ this.createCurrencyArray() ])
    console.log(this.sellForm.controls);
  }

  // createCurrencyArray() {
  //   let coins = {};
  //   if (this.items.length > 0) {
  //     for (let c=0; c<this.items.length; c++) {
  //       coins[this.items[c]['id']] = this.items[c]['id'];
  //     }
  //   }
  //   return this.fb.group(coins);
  // }

  getData() {
    this.performanceService.getSellData().subscribe(result => {
      this.items = result.data;
      this.createSellForm();
    });
  }

  optionsSelected(e, v) {
    this.isDisabled = (v.selected.length > 0) ? false : true;
    
    this.selectedOptions = [];
    for (let i=0; i<v.selected.length; i++) {
      this.selectedOptions.push(v.selected[i].value);
    }
  }

  submitSelling(data) {
    // console.log(data);

    // if (this.selectedOptions.length == 0) {
    //   return;
    // }
    this.isDisabled = true;
    this.performanceService.sellCrypto({ transactions: data })
    .subscribe(result => {
      this.isDisabled = false;
      if (result.status == 'success') {
        this.getData();
      }
      this._snackBar.open(result.message, '', {
        duration: this.durationInSeconds,
      });
    });
  }

  checkData() {
    if (!this.items) {
      return true;
    }
    if (this.isDisabled) {
      return true;
    }
    if (this.items && this.items.length == 0) {
      return true;
    }
    return false;
  }

}
