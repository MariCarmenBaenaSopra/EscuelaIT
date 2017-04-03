import { ServicioDatosService } from './../servicio-datos.service';
import { Movimiento } from './../datos.model';

import { Component, OnInit } from '@angular/core';
/**Para usar los formularios, en "movimientos.module.ts hay que añadir a "imports": FrmsModule" */

@Component({
  selector: 'nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.css']
})

export class NuevoComponenteComponent implements OnInit {
  tipos: any[] = [
    { id: 1, text: "Ingreso" },
    { id: 2, text: "Gasto" },
    { id: 3, text: "Otros" }];

  categoriasTipos: any[] = [
    { id: 1, text: "Nóminas", type: 1 },
    { id: 2, text: "Ventas", type: 1 },
    { id: 3, text: "Intereses", type: 1 },
    { id: 4, text: "Hipoteca", type: 2 },
    { id: 5, text: "Compras", type: 2 },
    { id: 6, text: "Domiciliaciones", type: 2 },
    { id: 7, text: "Impuestos", type: 2 },
    { id: 8, text: "Otros", type: 3 }];
  categorias: any[];

  movimiento: any = {};   //para la fecha

  /*INJECCION DE SERVICIO*/
    public injectable: Movimiento;
    constructor(private datosService: ServicioDatosService) { }

  /**Arranque del componente */
    ngOnInit() {
      
      this.movimiento = {
        fecha: new Date(Date.now()),
        empresa: 'Sopra Steria',
        importe: 0,
        tipo: this.tipos[0].id
      }

      this.cambiarTipo();

      /* Injeccion: */
        this.injectable = this.datosService.crearMovimiento();
        this.injectable.empresa = this.datosService.empresa;
    }

    cambiarImporte = function (valorEvento) {
      this.importe = valorEvento;
    }

    cambiarTipo() {
      this.categorias = this.categoriasTipos.filter(c => c.type === this.movimiento.tipo)
      /*this.categorias = this.categoriasTipos.filter(function (c) {
        return c.type === this.movimiento.tipo
      });*/
    }

    guardarMovimiento() {
      console.log("Guardando.... " + this.movimiento);
    }
}
