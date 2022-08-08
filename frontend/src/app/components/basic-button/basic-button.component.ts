import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.less']
})
export class BasicButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() link!: string;
  @Input() type!: string;
  constructor() { }

  ngOnInit(): void {
  }


}
