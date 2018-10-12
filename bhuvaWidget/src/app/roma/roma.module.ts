import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RomaRoutingModule } from './roma-routing.module';
import { ColosseoComponent } from './colosseo/colosseo.component';
import { StpietroComponent } from './stpietro/stpietro.component';
import { PantheonComponent } from './pantheon/pantheon.component';
import { CastelComponent } from './castel/castel.component';
import { TreviComponent } from './trevi/trevi.component';
import { PalatineComponent } from './palatine/palatine.component';
import { TerminiComponent } from './termini/termini.component';
import { RomaMapComponent } from './roma-map/roma-map.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    RomaRoutingModule,
    SharedModule
  ],
  declarations: [ColosseoComponent, StpietroComponent, PantheonComponent, CastelComponent, TreviComponent, PalatineComponent, TerminiComponent, RomaMapComponent]
})
export class RomaModule { }
