import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  expDescription: string = 'Below is a short list of major dates and experiences in my career.';
  skillDescription: string = 'The skillset I am proud of.';
  ironhackUrl: string = 'https://www.ironhack.com/';
  edCastUrl: string = 'https://www.edcast.com/';
  constructor() { }

  ngOnInit(): void {
  }

}
