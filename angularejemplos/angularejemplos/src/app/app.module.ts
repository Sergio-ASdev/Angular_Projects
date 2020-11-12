import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Nombre de la clase 
import {PrimerComponente} from './components/primercomponente/primercomponente.component';
import {CiclosVida} from './components/ciclosvida/ciclosvida.component';
import {Deportes} from './components/deportes/deportes.component';
import {NumerosRandom} from './components/numerosrandom/numerosrandom.component';
import {NegativosPositivos} from './components/negativospositivos/negativos.positivos.component';
import { FormuariopersonaComponent } from './components/formuariopersona/formuariopersona.component';
// para poder trabajar con formularios necesitamos importar esto 13, 20
import {FormsModule} from '@angular/forms';
import { SumarnumerosComponent } from './components/sumarnumeros/sumarnumeros.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent, PrimerComponente, CiclosVida, Deportes, NumerosRandom, NegativosPositivos, FormuariopersonaComponent, SumarnumerosComponent, MenuComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
