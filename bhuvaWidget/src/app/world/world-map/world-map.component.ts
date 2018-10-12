import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bhu-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent {

  constructor(private router: Router) { }

  public europe() {
    this.router.navigateByUrl("/europe");
  }

  public australia() {
    this.router.navigateByUrl("/australia");
  }

  public india() {
    this.router.navigateByUrl("/india");
  }

  public america() {
    this.router.navigateByUrl("/world/america");
  }
}
