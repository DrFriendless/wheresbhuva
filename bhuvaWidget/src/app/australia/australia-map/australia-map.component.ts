import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bhu-australia-map',
  templateUrl: './australia-map.component.html',
  styleUrls: ['./australia-map.component.css']
})
export class AustraliaMapComponent {
  public PULSE_COLOUR = "#000088";

  constructor(private router: Router) { }

  public sydney() {
    this.router.navigateByUrl("/australia/sydney");
  }

  public brisbane() {
    this.router.navigateByUrl("/australia/brisbane");
  }
}
