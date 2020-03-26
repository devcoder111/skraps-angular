import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-custom-gauge',
  templateUrl: './custom-gauge.component.html',
  styleUrls: ['./custom-gauge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomGaugeComponent implements OnInit {

  @Input() count: number;
  public initFinish = false;
  public isPortfolio = false;
  public positionList = [
    'translate(884, 488) rotate(-157)',
    'translate(884, 488) rotate(-121)',
    'translate(884, 488) rotate(-82)',
    'translate(884, 488) rotate(-41)',
    'translate(884, 488) rotate(-7)',
  ];
  public init = false;

  constructor() { }

  ngOnInit() {
    this.setInit();
  }

  setInit(prev?) {
    this.init = !!this.count;
    this.initFinish = prev && prev >= this.count;
  }

}
