import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-investment-pools',
  templateUrl: './investment-pools.component.html',
  styleUrls: ['./investment-pools.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvestmentPoolsComponent implements OnInit {
  @Input() items;

  constructor() { }

  ngOnInit() {
  }

}
