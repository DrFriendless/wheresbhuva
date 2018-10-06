import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bhu-europe-map',
  templateUrl: './europe-map.component.html',
  styleUrls: ['./europe-map.component.css']
})
export class EuropeMapComponent {
  public PULSE_COLOUR = "#ff7777";

  constructor(private router: Router) { }

  public italy() {
    this.router.navigateByUrl("/italy");
  }
}
