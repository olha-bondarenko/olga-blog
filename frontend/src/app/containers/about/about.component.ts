import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  expDescription: string = 'Below is a short list of major dates and experiences in my career.';
  skillDescription: string = 'The list of my hard and soft skills.';
  hobbiesDescription: string = 'Things I am busy with when I am not coding.';
  ironhackUrl: string = 'https://www.ironhack.com/';
  edCastUrl: string = 'https://www.edcast.com/';
  constructor() { }

  ngOnInit(): void {
  }

}
