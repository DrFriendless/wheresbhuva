import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare var window: any;

@Component({
  selector: 'bhu-italy-map',
  templateUrl: './italy-map.component.html',
  styleUrls: ['./italy-map.component.css']
})
export class ItalyMapComponent implements AfterViewInit {
  constructor(private router: Router) { }

  public milano() {
    this.router.navigateByUrl("/italy/milano");
  }

  public torino() {
    this.router.navigateByUrl("/italy/torino");
  }

  public roma() {
    this.router.navigateByUrl("/italy/roma");
  }

  public frecciarossa() {
    this.router.navigateByUrl("/italy/frecciarossa");
  }

  public venice() {
    this.router.navigateByUrl("/italy/venice");
  }

  public ngAfterViewInit() {
    window.scrollTo(0,0);
  }
}
