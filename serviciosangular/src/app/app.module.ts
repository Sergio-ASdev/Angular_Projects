import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonasComponent } from './components/personas/personas.component';
import { CochesComponent } from './components/coches/coches.component';
import { FormsModule } from '@angular/forms';
import { EmpleadossalarioComponent } from './components/empleadossalario/empleadossalario.component';
import { EmpleadosoficioComponent } from './components/empleadosoficio/empleadosoficio.component';

import { routing, appRoutingProvider } from './app.routing';
import { TablempleadosComponent } from './components/tablempleados/tablempleados.component';
import { DetallesempleadoComponent } from './components/detallesempleado/detallesempleado.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    PersonasComponent,
    CochesComponent,
    EmpleadossalarioComponent,
    EmpleadosoficioComponent,
    TablempleadosComponent,
    DetallesempleadoComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
