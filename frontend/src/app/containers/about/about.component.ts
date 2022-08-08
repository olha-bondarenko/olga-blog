import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  description: string = 'Below is a short list of a major dates in my career. ';
  ironhackUrl: string = 'https://www.ironhack.com/';
  edCastUrl: string = 'https://www.edcast.com/';
  constructor() { }

  ngOnInit(): void {
  }

}
