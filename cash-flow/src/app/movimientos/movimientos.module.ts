import { FormsModule } from '@angular/forms';
import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimientosComponent } from './movimientos.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { ListaComponent } from './lista/lista.component';
import { FilaComponent } from './fila/fila.component';
import { ClientesComponent } from './../clientes/clientes.component';
import { ServicioDatosService } from './servicio-datos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MovimientosComponent,
    NuevoComponenteComponent,
    ListaComponent,
    FilaComponent
  ],
  exports: [
    MovimientosComponent,
    NuevoComponenteComponent
  ],
  providers: [
    ServicioDatosService
  ]
})

export class MovimientosModule { }
