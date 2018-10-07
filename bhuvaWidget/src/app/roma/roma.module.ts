import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RomaRoutingModule } from './roma-routing.module';
import { ColosseoComponent } from './colosseo/colosseo.component';
import { StpietroComponent } from './stpietro/stpietro.component';
import { CampoComponent } from './campo/campo.component';
import { PantheonComponent } from './pantheon/pantheon.component';
import { CastelComponent } from './castel/castel.component';
import { TreviComponent } from './trevi/trevi.component';
import { PalatineComponent } from './palatine/palatine.component';
import { TerminiComponent } from './termini/termini.component';
import { RomaMapComponent } from './roma-map/roma-map.component';

@NgModule({
  imports: [
    CommonModule,
    RomaRoutingModule
  ],
  declarations: [ColosseoComponent, StpietroComponent, CampoComponent, PantheonComponent, CastelComponent, TreviComponent, PalatineComponent, TerminiComponent, RomaMapComponent]
})
export class RomaModule { }
