
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {AlertComponent} from './components/alert/alert.component';
import {AboutComponent} from './components/about/about.component';
import {HeroesComponent} from './components/heroes/heroes.component';




const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'alert' }
];

export const app_routing = RouterModule.forRoot(app_routes);