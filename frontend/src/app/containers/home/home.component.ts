import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  linkedInUrl: string = 'https://www.linkedin.com/in/olga-bondarenko-nl';
  pictureUrl: string = '../../../assets/Avatar.svg';
  constructor() { }

  ngOnInit(): void {
  }

}
