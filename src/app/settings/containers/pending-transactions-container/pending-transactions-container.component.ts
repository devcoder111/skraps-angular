import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { InvestmentService } from '../../services/investment.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pending-transactions-container',
  templateUrl: './pending-transactions-container.component.html',
  styleUrls: ['./pending-transactions-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingTransactionsContainerComponent implements OnInit {

  items$: Observable<any>;

  constructor(private investmentService: InvestmentService) { }

  ngOnInit() {
    this.items$ = this.getTransactions();
  }

  getTransactions(): Observable<any> {
    return this.investmentService.pendingTransactions({});
  }

}
