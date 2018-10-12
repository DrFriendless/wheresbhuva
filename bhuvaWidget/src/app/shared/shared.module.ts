import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PulseButtonComponent} from "./pulse-button/pulse-button.component";
import { LocationComponent } from './location/location.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [ PulseButtonComponent, LocationComponent ],
  exports: [ PulseButtonComponent ]
})
export class SharedModule { }
