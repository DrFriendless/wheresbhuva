import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: 'italy',
    loadChildren: './italy/italy.module#ItalyModule'
  },
  {
    path: 'europe',
    loadChildren: './europe/europe.module#EuropeModule'
  },
  {
    path: 'roma',
    loadChildren: './roma/roma.module#RomaModule'
  },
  {
    path: '',
    redirectTo: '/europe',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
