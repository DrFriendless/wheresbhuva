import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItalyMapComponent} from "./italy-map/italy-map.component";
import {TorinoComponent} from "./torino/torino.component";
import {MilanoComponent} from "./milano/milano.component";
import {RomaComponent} from "./roma/roma.component";
import {FrecciarossaComponent} from "./frecciarossa/frecciarossa.component";
import {VeniceComponent} from "./venice/venice.component";

const routes: Routes = [
  { path: '', component: ItalyMapComponent },
  { path: 'torino', component: TorinoComponent },
  { path: 'milano', component: MilanoComponent },
  { path: 'roma', component: RomaComponent },
  { path: 'frecciarossa', component: FrecciarossaComponent },
  { path: 'venice', component: VeniceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItalyRoutingModule { }
