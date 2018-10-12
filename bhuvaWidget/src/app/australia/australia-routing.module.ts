import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AustraliaMapComponent} from "./australia-map/australia-map.component";
import {LocationComponent} from "../shared/location/location.component";

const routes: Routes = [
  {
    path: 'sydney', component: LocationComponent, data: {
      image: "australia/sammy.jpg",
      text: 'Sammy says she\'s gone to Europe and she\'s never coming back :-(.',
      back: "/australia",
      find: "Sammy"
    }
  },
  {
    path: 'brisbane', component: LocationComponent, data: {
      image: "australia/dexter.jpg",
      text: 'Dexter and Biscuit tell you that Bhuva moved to Sydney. She comes back sometimes to visit sometimes though.',
      back: "/australia",
      find: "Dexter"
    }
  },
  { path: '', component: AustraliaMapComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AustraliaRoutingModule { }

