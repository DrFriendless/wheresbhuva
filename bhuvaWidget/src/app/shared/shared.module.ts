import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PulseButtonComponent} from "./pulse-button/pulse-button.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ PulseButtonComponent ],
  exports: [ PulseButtonComponent ]
})
export class SharedModule { }
