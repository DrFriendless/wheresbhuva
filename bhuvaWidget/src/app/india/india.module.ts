import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndiaRoutingModule } from './india-routing.module';
import { IndiaMapComponent } from './india-map/india-map.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    IndiaRoutingModule,
    SharedModule
  ],
  declarations: [IndiaMapComponent]
})
export class IndiaModule { }
