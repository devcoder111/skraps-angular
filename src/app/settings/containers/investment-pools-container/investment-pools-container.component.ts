import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { InvestmentService } from '../../services/investment.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-investment-pools-container',
  templateUrl: './investment-pools-container.component.html',
  styleUrls: ['./investment-pools-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvestmentPoolsContainerComponent implements OnInit {

  items$: Observable<any>;

  constructor(private investmentService: InvestmentService) { }

  ngOnInit() {
    this.items$ = this.getTransactions();
  }

  getTransactions(): Observable<any> {
    return this.investmentService.poolTransactions({});
  }

}
