import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablempleadosComponent } from './components/tablempleados/tablempleados.component';
import { DetallesempleadoComponent } from './components/detallesempleado/detallesempleado.component';

const appRoutes: Routes = [
    {path: "empleados", component: TablempleadosComponent},
    {path: "detallesempleado/:empno", component: DetallesempleadoComponent}
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);