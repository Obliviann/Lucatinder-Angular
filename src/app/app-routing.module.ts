import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//1.importamos los COMPONENTES
      //este es el nombre de mi clase
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { MatchesComponent } from './components/matches/matches.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilComponent } from './components/perfil/perfil.component';

//te los añade automaticamente a app-routing.module
//2. creo las rutas
const routes: Routes = [
  { path: 'bienvenue', component: BienvenidaComponent },
  { path: 'login', component: InicioComponent},
  { path: 'matches', component: MatchesComponent},
  { path: 'perfil', component: PerfilComponent}
];

//esto se generó automáticamente:
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
