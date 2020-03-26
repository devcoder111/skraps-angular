import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SchedulersService } from '../../services/schedulers.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-cron',
  templateUrl: './update-cron.component.html',
  styleUrls: ['./update-cron.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateCronComponent implements OnInit {

  intervals = [
    {value: 'daily', viewValue: 'Daily (Run the task every day at midnight)'},
    // {value: 'dailyAt', viewValue: 'Daily (Run the task every day at specified time)'},
    {value: 'weekly', viewValue: 'Weekly (Run the task every week)'},
    {value: 'monthly', viewValue: 'Monthly'}
  ];
  days = [
    {value: 'sundays', viewValue: 'Sunday'},
    {value: 'mondays', viewValue: 'Monday'},
    {value: 'tuesdays', viewValue: 'Tuesday'},
    {value: 'wednesdays', viewValue: 'Wednesday'},
    {value: 'thursdays', viewValue: 'Thursday'},
    {value: 'fridays', viewValue: 'Friday'},
    {value: 'saturdays', viewValue: 'Saturday'}
  ]
  time = [];
  cronForm: FormGroup;
  reloadOnClose: boolean = false;

  /*
  if daily
    No day only time
  if weekly
    Only day and time
  if monthly
    No day no time
  */

  constructor(
    private fb: FormBuilder,
    private schedulersService: SchedulersService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UpdateCronComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.createForm(data);
  }

  ngOnInit() {
    for(let i=0; i<24; i++) {
      for(let j=0; j<4; j++) {
        let strT = this.pad(i) + ":" + (j===0 ? "00" : 15*j)
        let obj = {value: strT, viewValue: strT};
        this.time.push(obj);
      }
    }
  }

  pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }

  createForm(data) {
    let status = (data.status == '1') ? true : false;
    this.cronForm = this.fb.group({
      id: [data.id],
      type: [data.cron_type, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      job: [data.job_name, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      interval: [data.cron_interval, [Validators.required]],
      day: [data.cron_day, [Validators.required]],
      time: [data.cron_time, [Validators.required]],
      status: [status, [Validators.required]],
    });
  }
  
  updateCron(cronForm) {
    this.schedulersService.updateCron(cronForm).subscribe(result => {
      this._snackBar.open(result.message, '', {
        duration: 5000
      });
      if (result.status == 'success') {
        this.reloadOnClose = true;
      }
    });
  }

  get cronFormData() {
    return this.cronForm.controls;
  }

}
