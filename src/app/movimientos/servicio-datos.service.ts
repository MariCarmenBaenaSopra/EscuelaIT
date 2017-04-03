import { Injectable } from '@angular/core';
import { Perro } from './datos.model';

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
}
