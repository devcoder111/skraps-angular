import { Component, OnInit, ChangeDetectionStrategy, Input, Output ,EventEmitter, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Options } from 'ng5-slider';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { IQuestion } from '../interfaces/question.interface';

export let single = [
  {
    'name': 'BitCoin',
    'value': 25
  },
  {
    'name': 'Ethereum',
    'value': 50
  },
];

@Component({
  selector: 'app-portfolio-temp',
  templateUrl: './portfolio-temp.component.html',
  styleUrls: ['./portfolio-temp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioTempComponent implements OnInit {
  stage = 0;
  bitCoinValue = 50;
  etheruemCoinValue = 100-this.bitCoinValue;
  // xrpCoinValue = 25;
  bitCoinValueLimit = 123;
  etheruemCoinValueLimit = 0;
  // xrpValueLimit = 0;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 20,
    hideLimitLabels: true,
    hidePointerLabels: true
  };
  single: any[];
  view: any[] = [700, 300];

  // option
  // options
  gradient = true;
  showLegend = false;
  showLabels = false;
  isDoughnut = true;

  colorScheme = {
    domain: ['#FF9A3A', '#5D7CF2']
  };
  portfolioName: any;


  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  valueChangebit(event) {
    console.log(event);
    console.log(event);
    this.single.forEach(elemtn => {
      if (elemtn.name === 'BitCoin') {
        elemtn.value = event;
      }
    } );
    this.single = [...this.single];
    console.log(this.single);
    this.etheruemCoinValue = 100-this.bitCoinValue;
    this.etheruemCoinValueLimit = 100 - (this.bitCoinValue + this.etheruemCoinValue );
    this.bitCoinValueLimit = 100 - (this.bitCoinValue + this.etheruemCoinValue );
    // this.xrpValueLimit = 100 - (this.bitCoinValue + this.etheruemCoinValue + this.xrpCoinValue );

  }

  valueChangeEther(event) {
    console.log(event);
    console.log(event);
    this.single.forEach(elemtn => {
      if (elemtn.name === 'Ethereum') {
        elemtn.value = event;
      }
    } );
    this.single = [...this.single];
    console.log(this.single);
    this.bitCoinValue = 100-this.etheruemCoinValue;
    this.etheruemCoinValueLimit = 100 - (this.bitCoinValue + this.etheruemCoinValue  );
    this.bitCoinValueLimit = 100 - (this.bitCoinValue + this.etheruemCoinValue );
    // this.xrpValueLimit = 100 - (this.bitCoinValue + this.etheruemCoinValue + this.xrpCoinValue );

  }

  @Output()
  public OnCreatePortfolio = new EventEmitter<{ id: number; score: number }>();

  constructor(private http: HttpClient) {
    this.single = [
      {
        'name': 'BitCoin',
        'value': this.bitCoinValue
      },
      {
        'name': 'Ethereum',
        'value': this.etheruemCoinValue
      },
      // {
      //   'name': 'XBR',
      //   'value': this.xrpCoinValue
      // },
    ];
  }
  createPortfolio(){
    let score: any; 
    switch ( this.bitCoinValue ) {
      case 0: score = 8;
        break;
      case 20: score = 8;
        break;
      case 40: score = 12;
        break;
      case 60: score = 20;
        break;
      case 80: score = 4;
        break;
      case 100: score = 16;
        break;

    }
    const headers = { 'Authorization': 'Bearer my-token'};
    let portfolioData = {
        'score': score,
        'name': this.portfolioName
    };
    console.log('aad', portfolioData);
    this.http.post<any>(`${environment.baseUrl}/question/result`, portfolioData, { headers }).subscribe(data => {
      // this.postId = data.id;
      console.log("Success Data: ", data);
      // this.router.navigate(['portfolios']);
     });
  }
  ngOnInit(){

  }
  ngAfterViewInit() {
    console.log("sss");
    var xpath = function(xpathToExecute){
      var result = [];
      var nodesSnapshot = document.evaluate(xpathToExecute, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
      for ( var i=0 ; i < nodesSnapshot.snapshotLength; i++ ){
        result.push( nodesSnapshot.snapshotItem(i) );
      }
      return result;
    }

    var chartElement= xpath("/html/body/app-root/app-portfolio-temp/div/div/div/div[2]/div[2]/ngx-charts-advanced-pie-chart/div/div[1]");

    chartElement[0].style.margin="auto";
    chartElement[0].style.display="block";
    chartElement[0].style.float="none";
    
  }

  ngAfterViewChecked(){
    console.log("eeee");
    var xpath = function(xpathToExecute){
      var result = [];
      var nodesSnapshot = document.evaluate(xpathToExecute, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
      for ( var i=0 ; i < nodesSnapshot.snapshotLength; i++ ){
        result.push( nodesSnapshot.snapshotItem(i) );
      }
      return result;
    }

    var chartElement= xpath("/html/body/app-root/app-portfolio-temp/div/div/div/div[2]/div[2]/ngx-charts-advanced-pie-chart/div/div[1]");

    chartElement[0].style.margin="auto";
    chartElement[0].style.display="block";
    chartElement[0].style.float="none";
    
  }
   

}
