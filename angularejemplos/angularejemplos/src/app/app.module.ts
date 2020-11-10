import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Nombre de la clase 
import {PrimerComponente} from '../components/primercomponente/primercomponente.component';
import {CiclosVida} from '../components/ciclosvida/ciclosvida.component';
import {Deportes} from '../components/deportes/deportes.component';
import {NumerosRandom} from '../components/numerosrandom/numerosrandom.component';
import {NegativosPositivos} from '../components/negativospositivos/negativos.positivos.component';

@NgModule({
  declarations: [
    AppComponent, PrimerComponente, CiclosVida, Deportes, NumerosRandom, NegativosPositivos
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
