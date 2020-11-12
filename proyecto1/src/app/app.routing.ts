import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// todos los componentes que deseamso dibujar dentro de la zona de rutas
import { HomeComponent } from './components/b-rutas/home/home.component';
import { AnimalComponent } from './components/b-rutas/animal/animal.component';
import { CineComponent } from './components/b-rutas/cine/cine.component';

import { CNumerodobleComponent } from './components/c-numerodoble/c-numerodoble.component';

// Nos creamos un array de rutas
// las rutas llevan implicita la barra /, por lo que no hay que ponerlas si son directamente desde la raiz
// { path:"", component: Jome}

// Routes indice el tipo de la constante
const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "animal", component: AnimalComponent },
    { path: "cine", component: CineComponent },
    { path: "numerodoble", component: CNumerodobleComponent },
    // para controlar el error 404, debemos indicarlo SIEMPRE como ultima ruta
    //{ path: "**", component: Error404Component },
];

// para poder utilizar esta clase con sus imports imports integrados dentro de modules, debemos indicar que es un proveedor de rutas
// tambian hay que decirle las rutas que tenemos: appRoutes
// esto son nombres de variables para llamarlas desde module.ts
export const appRoutingProviders: any[] = [];
// es el nombre que utilizaremos en el imports de module.ts
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);