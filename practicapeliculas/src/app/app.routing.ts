import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Componentes a importar
import { HomeComponent } from './components/home/home.component';

/*
peliculasgenero/{idgenero}	
peliculasnacionalidad/{idnacionalidad}	
peliculastitulo/{titulo}	
Peliculas	
Peliculas?idpeli={idpeli}
 */

const appRoutes: Routes = [
    {path: "peliculas", component: HomeComponent},
    {path: "", component: HomeComponent}, // cuando pongan / en la url, / o 
    {path: "home", component: HomeComponent},
    // {path: "detallesempleado/:empno", component: DetallesempleadoComponent}
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);