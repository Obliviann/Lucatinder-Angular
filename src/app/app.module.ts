import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//los importa automáticamente a medida que los añadimos a app-routing.module
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { MatchesComponent } from './components/matches/matches.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilComponent } from './components/perfil/perfil.component';

//1. importamos
import { UsuarioService } from './services/usuario.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    MatchesComponent,
    InicioComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //2.
    HttpClientModule,
  ],
  //3. añadimos UsuarioService
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
