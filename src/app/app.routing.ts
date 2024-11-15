import { ResgistroComponent } from './components/resgistro/resgistro.component';
import { MarcaComponentComponent } from './components/marca-component/marca-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { DetallesComponentComponent } from './components/detalles-component/detalles-component.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes :Routes = [
    {path: "detalles", component:DetallesComponentComponent},
    {path: "login", component:LoginComponentComponent},
    {path: "marca", component:MarcaComponentComponent},
    {path: "resgistro", component:ResgistroComponent},
]
export const appRoutingProvider : any[] = [] ;
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
