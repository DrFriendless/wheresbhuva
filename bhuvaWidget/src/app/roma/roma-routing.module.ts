import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RomaMapComponent} from "./roma-map/roma-map.component";
import {CastelComponent} from "./castel/castel.component";
import {TreviComponent} from "./trevi/trevi.component";
import {ColosseoComponent} from "./colosseo/colosseo.component";
import {PalatineComponent} from "./palatine/palatine.component";
import {PantheonComponent} from "./pantheon/pantheon.component";
import {StpietroComponent} from "./stpietro/stpietro.component";
import {TerminiComponent} from "./termini/termini.component";
import {LocationComponent} from "../shared/location/location.component";

const routes: Routes = [
  {
    path: 'campo', component: LocationComponent, data: {
      image: "roma/campo.jpg",
      text: 'The waitress at the pub by the Campo dei Fiori says the Australians were on their way to the Pantheon. However they stopped for a play with Stormy.',
      back: "/roma",
      find: "Stormy"
    }
  },
  { path: '', component: RomaMapComponent },
  { path: 'castel', component: CastelComponent },
  { path: 'colosseo', component: ColosseoComponent },
  { path: 'palatine', component: PalatineComponent },
  { path: 'pantheon', component: PantheonComponent },
  { path: 'stpietro', component: StpietroComponent },
  { path: 'termini', component: TerminiComponent },
  { path: 'trevi', component: TreviComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RomaRoutingModule { }
