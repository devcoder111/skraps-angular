import { Component, OnInit, ChangeDetectionStrategy, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-pollings',
  templateUrl: './view-pollings.component.html',
  styleUrls: ['./view-pollings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewPollingsComponent implements OnInit {

  displayedColumns: string[] = ['Pool ID', 'Total pool investment', 'Ethereum coinbase id', 'Bitcoin coinbase id','Created On'];
  reloadOnClose: boolean = false;

  constructor(private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ViewPollingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

}
