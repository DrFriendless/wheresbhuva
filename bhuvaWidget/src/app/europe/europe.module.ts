import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EuropeRoutingModule } from './europe-routing.module';
import { EuropeMapComponent } from './europe-map/europe-map.component';
import {SharedModule} from "../shared/shared.module";
import {ItalyModule} from "../italy/italy.module";

@NgModule({
  imports: [
    CommonModule,
    EuropeRoutingModule,
    SharedModule,
    ItalyModule
  ],
  declarations: [EuropeMapComponent]
})
export class EuropeModule { }
