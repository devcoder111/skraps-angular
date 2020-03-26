import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConnectedAccountsComponent } from '../../components/connected-accounts/connected-accounts.component';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddMenuComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  connectedAccounts() {
    this.dialog.open(ConnectedAccountsComponent, {
      width: '500px',
      // data: {name: this.name, animal: this.animal}
    });
  }

}
