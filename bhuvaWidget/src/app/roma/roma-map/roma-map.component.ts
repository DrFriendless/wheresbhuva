import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bhu-roma-map',
  templateUrl: './roma-map.component.html',
  styleUrls: ['./roma-map.component.css']
})
export class RomaMapComponent {

  constructor(private router: Router) { }

  public campo() {
    this.router.navigateByUrl("/roma/campo");
  }

  public castel() {
    this.router.navigateByUrl("/roma/castel");
  }

  public colosseo() {
    this.router.navigateByUrl("/roma/colosseo");
  }

  public palatine() {
    this.router.navigateByUrl("/roma/palatine");
  }

  public pantheon() {
    this.router.navigateByUrl("/roma/pantheon");
  }

  public stpietro() {
    this.router.navigateByUrl("/roma/stpietro");
  }

  public termini() {
    this.router.navigateByUrl("/roma/termini");
  }

  public trevi() {
    this.router.navigateByUrl("/roma/trevi");
  }
}
