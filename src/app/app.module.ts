import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import {routing,appRoutingProvider} from './app.routing'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ServiceCubos } from './service/service.cubos';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [
    [appRoutingProvider,ServiceCubos,provideHttpClient()]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
