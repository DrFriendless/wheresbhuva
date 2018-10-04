import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bhu-pulse-button',
  templateUrl: './pulse-button.component.html',
  styleUrls: ['./pulse-button.component.css']
})
export class PulseButtonComponent implements OnInit {
  @Input('x') x: number;
  @Input('y') y: number;
  @Output('click') click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
