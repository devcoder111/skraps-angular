import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IPortfolio } from '../../interfaces/portfolio';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-user-portfolios',
  templateUrl: './user-portfolios.component.html',
  styleUrls: ['./user-portfolios.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPortfoliosComponent implements OnInit {

  @Input()
  public users;
  @Output()
  public selectedPortfolio = new EventEmitter<IPortfolio>();

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['&lt;', '&gt;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  public portfolio: any;
  public isPanel = false;
  public isCurrent = false;
  public isMainPortfolio = false;
  public isLock = false;
  public isAdd = false;
  public isOwner = false;
  public activeIndex:number;

  onActivate(e, index) {
    console.log(e, index);
    this.activeIndex = e;
    if (typeof e === 'object') {
      this.activeIndex = this.users[index].active_portfolio.options.findIndex(
        item => item.name === e.value.name,
      );
    } else {
      this.activeIndex = e;
    }
  }

  onDeactivate() {
    this.activeIndex = -1;
  }


  constructor() {
  }

  ngOnInit() {
  }

}
