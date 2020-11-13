import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { MenucollatzComponent } from './components/menucollatz/menucollatz.component';
import { CollatzComponent } from './components/collatz/collatz.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { CocheComponent } from './components/coche/coche.component';
import { ConcesionarioComponent } from './components/concesionario/concesionario.component';
import { HijocontadorComponent } from './components/hijocontador/hijocontador.component';
import { PadrecontadoresComponent } from './components/padrecontadores/padrecontadores.component';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';

@NgModule({
  declarations: [
    AppComponent, MenucollatzComponent, CollatzComponent, ListaproductosComponent, CocheComponent, ConcesionarioComponent, HijocontadorComponent, PadrecontadoresComponent, ComicComponent, LibreriaComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
