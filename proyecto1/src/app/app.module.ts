import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ATablaMultiplicarComponent } from './components/a-tabla-multiplicar/a-tabla-multiplicar.component';
import {FormsModule} from '@angular/forms';
import { AnimalComponent } from './components/b-rutas/animal/animal.component';
import { CineComponent } from './components/b-rutas/cine/cine.component';
import { HomeComponent } from './components/b-rutas/home/home.component';

// Importar enrutadores
import {routing, appRoutingProviders } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ATablaMultiplicarComponent,
    AnimalComponent,
    CineComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
