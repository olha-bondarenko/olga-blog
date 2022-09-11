import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent implements OnInit {

  omfImageArray: Array<string> = [
      "../../../../assets/omf/1.png",
      "../../../../assets/omf/2.png",
      "../../../../assets/omf/3.png",
      "../../../../assets/omf/4.png",
      "../../../../assets/omf/5.png",
      "../../../../assets/omf/6.png",
      "../../../../assets/omf/7.png",
      "../../../../assets/omf/8.png"
  ];

  netriImageArray: Array<string> = [
    "../../../../assets/netri/1.png",
    "../../../../assets/netri/2.png",
    "../../../../assets/netri/3.png",
    "../../../../assets/netri/4.png",
    "../../../../assets/netri/5.png",
    "../../../../assets/netri/7.png",
    "../../../../assets/netri/8.png"
  ];

  gpt3ImageArray: Array<string> = [
    "../../../../assets/gpt-3/1.png",
    "../../../../assets/gpt-3/2.png",
    "../../../../assets/gpt-3/3.png",
    "../../../../assets/gpt-3/4.png",
    "../../../../assets/gpt-3/5.png",
    "../../../../assets/gpt-3/6.png"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
