import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {
  navBarItems: { title: string; path: string; selected: boolean }[] | undefined;
  constructor() { }

  ngOnInit(): void {
    this.navBarItems = [
      {title: 'Home', path: 'home', selected: false},
      {title: 'Experience', path: 'about', selected: false},
      {title: 'Portfolio', path: 'portfolio', selected: false},
      {title: 'Blog', path: 'blog', selected: false},
      {title: 'Contact', path: 'contact', selected: false},
    ];
  }

}
