import { ServicioDatosService } from './../servicio-datos.service';
import { Movimiento, MaestroModel, MaestroTipoModel } from './../datos.model';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
/**Para usar los formularios, en "movimientos.module.ts hay que añadir a "imports": FrmsModule" */

@Component({
  selector: 'nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.css']
})

export class NuevoComponenteComponent implements OnInit {
  /** recibelos datos vía propiedades --> [] */
    @Input() tipos: MaestroModel[] = [];              /** propiedad para la entrada de tipos de movimiento */
    @Input() categorias: MaestroTipoModel[] = [];     /** propiedad para entrada de categorias de movimiento */
    @Input() movimiento: Movimiento;                  /** propiedad para entrada de un movimiento */

  /** emite eventos de cambio y guardado */
    /** propiedad para emitir el evento de guardado del movimiento actual */
      @Output() guardar: EventEmitter <Movimiento> = new EventEmitter<Movimiento>();
    /** propiedad para emitir el evento de cambio de tipo del movimiento actual */
      @Output() usuarioCambiarTipo: EventEmitter <number> = new EventEmitter<number>();

  constructor() { }


  ngOnInit() {  }

  // emisión de eventos para cambios o pedir guardar el movimiento
    /** cuando el usuario hace click en un radio button de tipo */
      usuarioCambioRadioButton() {
        this.usuarioCambiarTipo.emit(this.movimiento.tipo);
      }

    /** cuando el usuario hace click en el botón de guardado */
      guardarMovimiento() {
        this.guardar.emit(this.movimiento);  /**this.guardar. --> viene del @Output" */
      }
}
