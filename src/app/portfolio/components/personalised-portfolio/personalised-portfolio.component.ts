import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IPortfolio } from '../../interfaces/portfolio';

@Component({
  selector: 'app-personalised-portfolio',
  templateUrl: './personalised-portfolio.component.html',
  styleUrls: ['./personalised-portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalisedPortfolioComponent implements OnInit {

  @Input()
  public portfolio;
  @Output()
  public selectedPortfolio = new EventEmitter<IPortfolio>();

  constructor() { }

  ngOnInit() {
  }

}
