import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CryptoPollingsService } from '../../services/crypto-pollings.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-crypto-pollings',
  templateUrl: './crypto-pollings.component.html',
  styleUrls: ['./crypto-pollings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoPollingsComponent implements OnInit {
  shadow = true;
  public requests$: Observable<any>;
  perPageLimit = 10;

  constructor(
    private CryptoPollingsService: CryptoPollingsService
  ) {
    this.requests$ = this.getRequests({
      limit: this.perPageLimit
    });
  }

  ngOnInit() {
  }
  getRequests(data): Observable<any> {
    return this.CryptoPollingsService.getList(data);
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
