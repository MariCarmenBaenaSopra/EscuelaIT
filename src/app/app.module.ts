import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovimientosModule } from './movimientos/movimientos.module';
import { ClientesModule } from './clientes/clientes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovimientosModule,
    ClientesModule
  ],
  providers: [],  /**Injection of common services for the application */
  bootstrap: [AppComponent] /**root component for boot */
})

export class AppModule { }
