import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndiaMapComponent} from "./india-map/india-map.component";
import {LocationComponent} from "../shared/location/location.component";

const routes: Routes = [
  {
    path: 'hyderabad', component: LocationComponent, data: {
      image: "india/maggie.jpg",
      text: 'Maggie says that last she heard, Bhuva was going to Bangalore.',
      back: "/india",
      find: "Maggie"
    }
  },
  {
    path: 'mussoorie', component: LocationComponent, data: {
      image: "india/chand.jpg",
      text: 'Chandkumar says he\'s pretty sure that Bhuva went back to Australia.',
      back: "/india",
      find: "Chand"
    }
  },
  { path: '', component: IndiaMapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndiaRoutingModule { }
