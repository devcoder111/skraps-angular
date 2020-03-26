import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import { SellRequestsService } from '../../services/sell.requests.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ViewPollingsComponent } from '../view-pollings/view-pollings.component';

@Component({
  selector: 'app-crypto-pollings-listing',
  templateUrl: './crypto-pollings-listing.component.html',
  styleUrls: ['./crypto-pollings-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoPollingsListingComponent implements OnInit {
  @Input() items;
  shadow: boolean = true;
  // displayedColumns: string[] = ['User Name', 'Coin', 'Amount', 'Status', 'Created On', 'Action'];
  displayedColumns: string[] = ['Pool ID', 'Total pool investment', 'Ethereum coinbase id', 'Bitcoin coinbase id','Created On'];
  @Output() pagingEvent = new EventEmitter<object>();
  @Output() filterEvent = new EventEmitter<object>();
  status = [
    { label: 'All', value: '' },
    { label: 'Pending', value: '1' },
    { label: 'Accepted', value: '2' },
    { label: 'Declined', value: '3' },
    { label: 'Sold', value: '4' }
  ];
  changeStatusTo = [
    { label: 'Accept', value: '2', icon: 'accessibility' },
    { label: 'Decline', value: '3', icon: 'highlight_off' }
  ];
  filterBy: string = '';
  pageLimit;
  pageNumber;

  constructor(
    private sellRequestsService: SellRequestsService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  paginate($event) {
    // this.pageLimit = $event.pageSize;
    // this.pageNumber = $event.pageIndex + 1;

    $event.status = this.filterBy;
    this.pagingEvent.emit($event);
  }

  filterRequests() {
    this.filterEvent.emit({
      status: this.filterBy
    });
  }

  changeStatus(status, sellRequestId, pageEvent) {
    let pageObject = {};
    if (pageEvent) {
      pageObject = {
        status: this.filterBy,
        pageSize: pageEvent.pageSize,
        pageIndex: pageEvent.pageIndex
      };
    } else {
      pageObject = {
        status: this.filterBy,
        pageSize: this.items.meta.per_page,
        pageIndex: this.items.meta.current_page - 1
      };
    }
    this.sellRequestsService.changeStatus({ status: status, id: sellRequestId })
    .subscribe(result => {
      if (result.status == 'success') {
        this.pagingEvent.emit(pageObject);
      }
      this._snackBar.open(result.message, '', {
        duration: 5000
      });
    });
  }

  takeAction(data) {
    console.log(data);
    let dialogRef =this.dialog.open(ViewPollingsComponent, {
      width: '600px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
       console.log(`Dialog result: ${result}`);
      // console.log('dialogRef.componentInstance.reloadOnClose=', )
    });

  }


}
