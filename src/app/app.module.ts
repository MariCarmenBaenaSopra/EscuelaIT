import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';  /**Enrutamiento */

import { AppComponent } from './app.component';
import { MovimientosModule } from './movimientos/movimientos.module';
import { ClientesModule } from './clientes/clientes.module';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';

  /**PARA EL ENRUTAMIENTO */
    const routes: Routes = [
      { path: '', component: HomeComponent},
      { path: 'clientes', component: ClientesComponent}
      ]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovimientosModule,
    ClientesModule,
    //RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],  /**Injection of common services for the application */
  bootstrap: [AppComponent] /**root component for boot */
})

export class AppModule { }
