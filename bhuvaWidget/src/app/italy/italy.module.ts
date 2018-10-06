import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItalyRoutingModule } from './italy-routing.module';
import {ItalyMapComponent} from "./italy-map/italy-map.component";
import {RomaComponent} from "./roma/roma.component";
import {MilanoComponent} from "./milano/milano.component";
import {TorinoComponent} from "./torino/torino.component";
import {SharedModule} from "../shared/shared.module";
import { FrecciarossaComponent } from './frecciarossa/frecciarossa.component';
import { VeniceComponent } from './venice/venice.component';
import { Frecciarossa2Component } from './frecciarossa2/frecciarossa2.component';

@NgModule({
  imports: [
    CommonModule,
    ItalyRoutingModule,
    SharedModule
  ],
  declarations: [
    ItalyMapComponent,
    RomaComponent,
    MilanoComponent,
    TorinoComponent,
    FrecciarossaComponent,
    VeniceComponent,
    Frecciarossa2Component
  ]
})
export class ItalyModule { }
