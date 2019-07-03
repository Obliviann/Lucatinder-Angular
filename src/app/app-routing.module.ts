import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatchesComponent} from './components/matches/matches.component'

import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'match', component: MatchesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
