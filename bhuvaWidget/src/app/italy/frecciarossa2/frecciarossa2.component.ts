import { Component, OnInit, AfterViewInit } from '@angular/core';
import {StateService} from "../../core/state.service";

declare var window: any;

@Component({
  selector: 'bhu-frecciarossa2',
  templateUrl: './frecciarossa2.component.html',
  styleUrls: ['./frecciarossa2.component.css']
})
export class Frecciarossa2Component implements OnInit, AfterViewInit {
  constructor(private stateService: StateService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(function() { alert("Yes! You've found her!"); }, 1);
    this.stateService.findBhuva("Bhuva is on the Frecciarossa again!");
  }
}
