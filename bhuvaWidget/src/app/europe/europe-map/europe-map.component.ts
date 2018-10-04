import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bhu-europe-map',
  templateUrl: './europe-map.component.html',
  styleUrls: ['./europe-map.component.css']
})
export class EuropeMapComponent {
  constructor(private router: Router) { }

  public italy() {
    this.router.navigateByUrl("/italy");
  }
}
