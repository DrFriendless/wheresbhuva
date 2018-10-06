import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bhu-pulse-button',
  templateUrl: './pulse-button.component.html',
  styleUrls: ['./pulse-button.component.css']
})
export class PulseButtonComponent {
  @Input('x') x: number;
  @Input('y') y: number;
  @Input('colour') colour: string = "#fff";
  @Output('click') click = new EventEmitter();
}
