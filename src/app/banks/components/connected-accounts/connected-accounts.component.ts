import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import { BankService } from '../../services/bank.service';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-connected-accounts',
  templateUrl: './connected-accounts.component.html',
  styleUrls: ['./connected-accounts.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnectedAccountsComponent implements OnInit {

  items:any;
  stripeItems:any;

  constructor(
    private bankService: CardService
  ) {
    this.getConnectedAccounts();
  }

  ngOnInit() {
  }

  getConnectedAccounts() {
    this.bankService.connectedAccounts().subscribe(result => {
      this.items = result.plaid;
      this.stripeItems = result.stripe.data;
    });
  }

}
