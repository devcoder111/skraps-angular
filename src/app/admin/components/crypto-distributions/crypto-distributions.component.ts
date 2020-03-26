import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CryptoDistributionsService } from '../../services/crypto-distributions.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-crypto-distributions',
  templateUrl: './crypto-distributions.component.html',
  styleUrls: ['./crypto-distributions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoDistributionsComponent implements OnInit {
  shadow = true;
  public requests$: Observable<any>;
  perPageLimit = 10;

  constructor(
    private CryptoDistributionsService: CryptoDistributionsService
  ) {
    this.requests$ = this.getRequests({
      limit: this.perPageLimit
    });
  }

  ngOnInit() {
  }
  getRequests(data): Observable<any> {
    return this.CryptoDistributionsService.getList(data);
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
