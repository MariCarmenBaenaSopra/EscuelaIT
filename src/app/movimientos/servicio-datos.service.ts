import { Injectable } from '@angular/core';
import { Perro, Movimiento } from './datos.model';

@Injectable()
export class ServicioDatosService {

  public empresa: string = 'Sopra!';

  public perro: Perro;

  constructor() {
  }

  crearInjectable() {
    return{
      importe: 0,
      fecha: new Date(Date.now())
    }
  }

  crearMovimiento(){
    let movimiento = new Movimiento();
    movimiento.fecha = new Date(Date.now());
    movimiento.empresa = 'Escuela It';

    return movimiento;
  }
}
