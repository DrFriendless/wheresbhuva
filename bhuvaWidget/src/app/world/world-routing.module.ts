import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorldMapComponent} from "./world-map/world-map.component";
import {LocationComponent} from "../shared/location/location.component";

const routes: Routes = [
  {
    path: 'america', component: LocationComponent, data: {
      image: "world/bhuva_sanfrancisco.jpg",
      text: "Yes! She's there!",
      back: "/world",
      bhuva: "Bhuva is in the United States!",
      find: "Bhuva"
    }
  },
  { path: '', component: WorldMapComponent },
  { path: 'world', component: WorldMapComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldRoutingModule { }
