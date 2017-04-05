import { Injectable } from '@angular/core';
import { Movimiento, MaestroModel, MaestroTipoModel, MovimientoModel } from './datos.model';

/*Suscripcion a cambios*/
import { Observable } from 'rxjs/Observable';
/*Emision de datos y guardarlos */
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ServicioDatosService {

  private tipos: MaestroModel[] = [
    { id: 1, text: "Ingreso" },
    { id: 2, text: "Gasto" },
    { id: 3, text: "Otros" }];

  private categoriasTipos: MaestroTipoModel[] = [
    { id: 1, text: "Nóminas", type: 1 },
    { id: 2, text: "Ventas", type: 1 },
    { id: 3, text: "Intereses", type: 1 },
    { id: 4, text: "Hipoteca", type: 2 },
    { id: 5, text: "Compras", type: 2 },
    { id: 6, text: "Domiciliaciones", type: 2 },
    { id: 7, text: "Impuestos", type: 2 },
    { id: 8, text: "Otros", type: 3 }];

  /*Almacenar los movimientos en memoria*/
  private movimientos: MovimientoModel[] = [];

  /*Comunicacion mediante observables*/
  private movimientos$: Subject<MovimientoModel[]> = new Subject<MovimientoModel[]>();

  constructor() { }

  getNuevoMovimiento(): MovimientoModel {
    return new Movimiento(
      new Date(Date.now()),
      0,
      this.getTipoBase(),                        /**funcion auxiliar */
      this.getCategoriaBase(this.getTipoBase())  /**funcion auxiliar */
    );
  }
  /** Guarda un movimiento en el almacén, y notifica ese evento */
  postMovimiento(movimiento: Movimiento) {
    let movimientoClone: Movimiento = Object.assign({}, movimiento);
    this.movimientos.push(movimientoClone);
    this.movimientos$.next(this.movimientos);
  }

  /**Devuelve el listado de TIPOS Movimientos --> MAESTROMODEL */
  getTipos(): MaestroModel[] {
    return this.tipos;
  }

  /**Devuelve el listado de CATEGORIAS para 1 tipo concreto --> MaestroTipoModel */
  getCategoriasPorTipos(tipo): MaestroTipoModel[] {
    return this.categoriasTipos.filter(c => c.type === tipo);
  }

  /**Devuelve un observable que notifica cambios en el almacen de movimientos */
  getMovimientos$(): Observable<MovimientoModel[]> {
    return this.movimientos$.asObservable();
  }

  /**funciones auxiliares */
  private getTipoBase = () => this.tipos[0].id;
  getCategoriaBase = (tipoId) => this.getCategoriasPorTipos(tipoId)[0].id;
}
