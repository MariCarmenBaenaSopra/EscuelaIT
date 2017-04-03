import { Injectable } from '@angular/core';
import { Perro, Movimiento } from './datos.model';

@Injectable()
export class ServicioDatosService {

  public empresa: string = 'Sopra!';

  public perro: Perro;

  constructor() {
  }

   crearMovimiento(): Movimiento {
    /*let movimiento = new Movimiento();
    movimiento.fecha = new Date(Date.now());
    movimiento.empresa = 'Escuela It';*/

   /**Objeto movimiento: */
    let movimiento: Movimiento = {
      importe: 0,
      fecha: new Date(Date.now()),
      empresa: '',
      tipo: 0,
      categoria:0
    }
    return movimiento;
  }
}
