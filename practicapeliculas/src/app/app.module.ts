import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

/**
 * PeliculasService se puede importar aqui, o en todoos los componentes de donde se hagan peticiones que asi es como lo hace paco
 */
import { PeliculasService } from './services/peliculas.service';
import {HttpClientModule} from '@angular/common/http';
import {routing, appRoutingProvider} from './app.routing';
import {FormsModule} from '@angular/forms';

import { NavbarComponent } from './components/navbar/navbar.component';

import { PeliculasComponent } from './components/CRUD/peliculas/peliculas.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeliculasComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, routing
  ],
  providers: [PeliculasService, appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
