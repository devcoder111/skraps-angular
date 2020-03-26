import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { InvestmentService } from '../../services/investment.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-investment-transactions-container',
  templateUrl: './investment-transactions-container.component.html',
  styleUrls: ['./investment-transactions-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvestmentTransactionsContainerComponent implements OnInit {

  items$: Observable<any>;

  constructor(private investmentService: InvestmentService) { }

  ngOnInit() {
    this.items$ = this.getTransactions();
  }

  getTransactions(): Observable<any> {
    return this.investmentService.bulkTransactions({});
  }

}
