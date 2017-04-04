import { Observable } from 'rxjs/Observable';
import { MaestroModel, MaestroTipoModel, Movimiento } from './datos.model';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { ServicioDatosService } from './servicio-datos.service';

import { Component, OnInit } from '@angular/core';

// Será un componente inteligente (statefull), con acceso a datos
@Component ({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})

export class MovimientosComponent implements OnInit{
//Todos los datos necesarios se gestionan en el NuevoComponenteComponent  
  tiposEnElContenedor: MaestroModel[] = [];
  categorias: MaestroTipoModel[] = [];
  movimiento: Movimiento;
  movimientos: Movimiento[];
  movimientos$: Observable<Movimiento[]>;

// las dependencias se declaran como parámetros del constructor
  /** Depende del servicio de datos */
    constructor(private datosService: ServicioDatosService) {}

  /** Al arrancar, obtiene datos estáticos y suscripciones a otros vivos */
    ngOnInit() {
      this.tiposEnElContenedor = this.datosService.getTipos();
      this.movimiento = this.datosService.getNuevoMovimiento();

      this.cambiarTipoDelMovimiento();

      this.movimientos$ = this.datosService.getMovimientos$();
      this.movimientos$.subscribe(d => this.movimientos = d);
    }

    cambiarTipoDelMovimiento() {
      this.categorias = this.datosService.getCategoriasPorTipos(this.movimiento.tipo);
      // Cambios en el tipo, crean cambios en la categoría
        /**Para que se muestren 1 vez cambiaro el radiobutton */
        this.movimiento.categoria = this.datosService.getCategoriaBase(this.movimiento.tipo);
    }

    guardarMovimiento() {
      this.datosService.postMovimiento(this.movimiento);  //se crea la conexion en el servicio para guardar
    }
}
