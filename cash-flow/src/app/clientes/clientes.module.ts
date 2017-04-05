import { ClientesComponent } from './clientes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimientosModule } from './../movimientos/movimientos.module';
@NgModule({
  imports: [
    CommonModule,
    MovimientosModule
  ],
  declarations: [
    ClientesComponent
  ],
  exports: [
    ClientesComponent
  ]
})
export class ClientesModule { }
