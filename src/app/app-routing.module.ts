import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//1.importamos los componentes
      //este es el nombre de mi clase
import {BienvenidaComponent} from './components/bienvenida/bienvenida.component'
//te lo añade automaticamente a app-routing.module
//2. creo las rutas
const routes: Routes = [
  { path: 'bienvenue', component: BienvenidaComponent },
];

//esto se generó automáticamente:
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
