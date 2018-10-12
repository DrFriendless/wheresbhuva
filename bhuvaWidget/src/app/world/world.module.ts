import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorldRoutingModule } from './world-routing.module';
import { WorldMapComponent } from './world-map/world-map.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    WorldRoutingModule,
    SharedModule
  ],
  declarations: [WorldMapComponent]
})
export class WorldModule { }
