import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-investment-transactions',
  templateUrl: './investment-transactions.component.html',
  styleUrls: ['./investment-transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvestmentTransactionsComponent implements OnInit {
  @Input() items;

  constructor() { }

  ngOnInit() {
  }

}
