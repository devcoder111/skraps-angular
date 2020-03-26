import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingTransactionsComponent implements OnInit {

  @Input() items;

  constructor() { }

  ngOnInit() {
  }

}
