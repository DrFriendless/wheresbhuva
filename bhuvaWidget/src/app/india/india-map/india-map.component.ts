import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bhu-india-map',
  templateUrl: './india-map.component.html',
  styleUrls: ['./india-map.component.css']
})
export class IndiaMapComponent {
  public PULSE_COLOUR = "#ff7777";

  constructor(private router: Router) { }

  public hyderabad() {
    this.router.navigateByUrl("/india/hyderabad");
  }

  public mussoorie() {
    this.router.navigateByUrl("/india/mussoorie");
  }
}
