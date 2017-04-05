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

  /**PARA EL ENRUTAMIENTO */
    const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'pepe', component: PepeComponent },
      { path: 'saludo', component: SaludoComponent },
      { path: 'saludo/:amigo', component: SaludoComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }   /*Path not found*/
      ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PepeComponent,
    SaludoComponent
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
