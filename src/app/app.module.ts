import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';//te lo añade automaticamente tras importarlo en app-routing.module

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
