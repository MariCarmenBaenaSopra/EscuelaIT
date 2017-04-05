import { MovimientosComponent } from './movimientos/movimientos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PepeComponent } from './pepe/pepe.component';
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
import { SaludoComponent } from './saludo/saludo.component';

  /**PARA EL ENRUTAMIENTO - Definir las rutas */
    const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'inicio', redirectTo: '' },
      { path: 'contacto', component: ContactoComponent },
      { path: 'movimientos', component: MovimientosComponent },
      { path: 'saludo', component: SaludoComponent },
      { path: 'saludo/:amigo', component: SaludoComponent },
      { /*Path not found*/
        path: '**',
        redirectTo: '',
        pathMatch: 'full' 
      }
    ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PepeComponent,
    SaludoComponent,
    ContactoComponent
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
