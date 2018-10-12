import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorldMapComponent} from "./world-map/world-map.component";
import {LocationComponent} from "../shared/location/location.component";

const routes: Routes = [
  {
    path: 'america', component: LocationComponent, data: {
      image: "world/the_donald.jpg",
      text: "Oh goodness, she wouldn't go to that stupid place, would she?",
      back: "/world"
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
