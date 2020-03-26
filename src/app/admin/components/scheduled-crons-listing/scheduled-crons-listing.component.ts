import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateCronComponent } from '../update-cron/update-cron.component';

@Component({
  selector: 'app-scheduled-crons-listing',
  templateUrl: './scheduled-crons-listing.component.html',
  styleUrls: ['./scheduled-crons-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduledCronsListingComponent implements OnInit {

  @Input() items;
  shadow: boolean = true;
  displayedColumns: string[] = ['Cron Type', 'Job', 'Interval', 'Day', 'Status', 'Action'];
  editOptions = [
    // { label: 'Enable', value: '1', icon: 'accessibility' },
    // { label: 'Disable', value: '0', icon: 'highlight_off' },
    { label: 'Edit', value: '2', icon: 'edit' },
  ];
  @Output() reloadEvent = new EventEmitter<object>();

  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  takeAction(data) {
    let dialogRef =this.dialog.open(UpdateCronComponent, {
      width: '600px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
      // console.log('dialogRef.componentInstance.reloadOnClose=', )
      if (dialogRef.componentInstance.reloadOnClose) {
        this.reloadEvent.emit({});
      }
    });
    // if (action == 2) {
    //   let dialogRef = this.dialog.open(UpdateCronComponent, {
    //     width: '600px',
    //     data: data
    //   });
    // } else {
    //   this.changeStatus(action, cronId);
    // }
  }

  changeStatus(status, cronId) {

  }

}
