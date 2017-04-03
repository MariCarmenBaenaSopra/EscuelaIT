export class Movimiento{
  /**Propiedades: */
    importe: number;
    fecha: Date;
    empresa: string;
    tipo: number;
    categoria: number;
}



export class Animal implements PuedeComer {
  nombre: string;
  comer(){
    return true;
  }
}
let animal = new Animal();
animal.nombre = 'Donald';


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
