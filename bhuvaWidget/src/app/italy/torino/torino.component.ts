import { Component, OnInit, AfterViewInit } from '@angular/core';
import {StateService} from "../../core/state.service";

declare var window: any;

@Component({
  selector: 'bhu-torino',
  templateUrl: './torino.component.html',
  styleUrls: ['./torino.component.css']
})
export class TorinoComponent implements OnInit, AfterViewInit {
  constructor(private stateService: StateService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(function() { alert("Yes! You've found her!"); }, 1);
    this.stateService.findBhuva("Bhuva is in Turin!");
  }
}
