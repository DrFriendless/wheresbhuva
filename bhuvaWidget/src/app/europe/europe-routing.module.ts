import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EuropeMapComponent} from "./europe-map/europe-map.component";
import {LocationComponent} from "../shared/location/location.component";

const routes: Routes = [
  {
    path: 'cracow', component: LocationComponent, data: {
      image: "/europe/cracow.jpg",
      text: "Tomasz the taxi driver says he took Bhuva to the airport, to catch a FlyDubai flight.",
      back: "/europe"
    }
  },
  { path: '', component: EuropeMapComponent },
  { path: 'italy', loadChildren: '../italy/italy.module#ItalyModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EuropeRoutingModule { }
