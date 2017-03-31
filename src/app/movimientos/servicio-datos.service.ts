import { Injectable } from '@angular/core';

@Injectable()
export class ServicioDatosService {

  public empresa: string = 'Sopra!';

  constructor() {
  }

  crearInjectable() {
    return{
      importe: 0,
      fecha: new Date(Date.now())
    }
  }
}
  