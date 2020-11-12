import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//TODOS LOS COMPONENTES QUE DESEAMOS DIBUJAR DENTRO DE LA ZONA DE RUTAS
import { CollatzComponent } from './components/collatz/collatz.component';

const appRoutes: Routes = [
    { path: "collatz/:numero", component:CollatzComponent}
];

// PARA PODER UTILIZAR ESTA CLASE CON SUS IMPORTS INTEGRADOSDENTRO DE MODULES, DEBEMOS INDICAR QUE ES UN PROVEEDOR DE RUTAS
// Y DECIRLE LAS RUTAS QUE TENEMOS: appRoutes
// ESTO SON NOMBRES DE VARIABLES PARA LLAMARLAS DESDE MODULE.TS:
export const appRoutingProviders: any[] = [];
// ES EL NOMBRE QUE UTILIZAREMOS EN EL IMPORTS DE MODULE.TS
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);