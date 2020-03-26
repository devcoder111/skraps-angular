import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SchedulersService } from '../../services/schedulers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-scheduled-crons',
  templateUrl: './scheduled-crons.component.html',
  styleUrls: ['./scheduled-crons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduledCronsComponent implements OnInit {

  shadow = true;
  public data$: Observable<any>;

  constructor(
    private schedulersService: SchedulersService
  ) {
    this.data$ = this.getCrons();
  }

  ngOnInit() {
  }

  getCrons(): Observable<any> {
    return this.schedulersService.getCrons();
  }

  reloadState($event) {
    this.data$ = this.getCrons();
  }

}
