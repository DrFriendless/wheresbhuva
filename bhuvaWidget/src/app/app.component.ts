import { Component } from '@angular/core';
import {StateService} from "./core/state.service";

@Component({
  selector: 'bhu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private stateService: StateService) {
  }

  public isBhuvaFound() {
    return this.stateService.isBhuvaFound();
  }

  public whereBhuvaIs() {
    return this.stateService.whereBhuvaIs();
  }
}
