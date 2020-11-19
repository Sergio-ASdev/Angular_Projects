import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProvider } from 'src/app/app.routing';

import { PlantillaService } from './service/plantilla.service';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, routing, 
  ],
  providers: [appRoutingProvider, PlantillaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
