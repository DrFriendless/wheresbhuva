import { Component, AfterViewInit } from '@angular/core';
import {StateService} from "../../core/state.service";

@Component({
  selector: 'bhu-venice',
  templateUrl: './venice.component.html',
  styleUrls: ['./venice.component.css']
})
export class VeniceComponent implements AfterViewInit {

  constructor(private stateService: StateService) { }

  ngAfterViewInit() {
    // setTimeout(function() { alert("Yes! You've found her!"); }, 1);
    // this.stateService.findBhuva("Bhuva is in Venice.");
  }
}
