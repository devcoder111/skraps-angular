import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SellRequestsService } from '../../services/sell.requests.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sell-requests',
  templateUrl: './sell-requests.component.html',
  styleUrls: ['./sell-requests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SellRequestsComponent implements OnInit {

  shadow = true;
  public requests$: Observable<any>;
  perPageLimit = 10;

  constructor(
    private sellRequestsService: SellRequestsService
  ) {
    this.requests$ = this.getRequests({
      limit: this.perPageLimit
    });
  }

  ngOnInit() {
    
  }

  getRequests(data): Observable<any> {
    return this.sellRequestsService.getList(data);
  }

  paginateRequests($event) {
    this.requests$ = this.getRequests({
      limit: $event.pageSize,
      status: $event.status,
      page: $event.pageIndex + 1
    });
  }

  filterByStatus($event) {
    this.requests$ = this.getRequests({
      status: $event.status,
      limit: this.perPageLimit
    });
  }

}
