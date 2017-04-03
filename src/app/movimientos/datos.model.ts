export interface Movimiento {
  /**Propiedades: */
    importe: number;
    fecha: Date;
    empresa: string;
    tipo: number;
    categoria: number;
}

interface OnInit {
  ngOnInit(): void;
}

export class Animal implements PuedeComer, OnInit {
  nombre: string;
  comer(){
    return true;
  }

  ngOnInit(){

  }
}
let animal = new Animal();
animal.nombre = 'Donald';
animal.ngOnInit();

/**HERENCIA: */
  export class Perro extends Animal {
    raza: string;
  }

  let perro = new Perro();
  perro.nombre = 'Goofy';
  perro.raza = 'Dogo';

/**INTERFAZ: */
  interface PuedeComer {
    comer(): boolean;
  }
