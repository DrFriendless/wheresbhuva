import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EuropeMapComponent} from "./europe-map/europe-map.component";
import {ItalyMapComponent} from "../italy/italy-map/italy-map.component";

const routes: Routes = [
  { path: '', component: EuropeMapComponent },
  { path: 'italy', component: ItalyMapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EuropeRoutingModule { }
