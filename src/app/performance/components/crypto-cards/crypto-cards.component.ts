import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-crypto-cards',
  templateUrl: './crypto-cards.component.html',
  styleUrls: ['./crypto-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoCardsComponent implements OnInit {

  @Input() balance;
  photo: string = 'https://material.angular.io/assets/img/examples/shiba1.jpg';

  constructor() { }

  ngOnInit() {
  }

}
