import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatchesComponent} from './components/matches/matches.component'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
