import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AustraliaRoutingModule } from './australia-routing.module';
import { AustraliaMapComponent } from './australia-map/australia-map.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    AustraliaRoutingModule,
    SharedModule
  ],
  declarations: [AustraliaMapComponent]
})
export class AustraliaModule { }
