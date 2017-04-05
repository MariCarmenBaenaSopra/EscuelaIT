import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mostrar: boolean = false;
  pi: number = 3.14;
  radio: number = 1;
  circunferencia: number = 2 * this.pi * this.radio;
  
  title = 'BIENVENIDO LA MODULO RAIZ: APP!';

  nombre: string = "Mari";
  empresa: string = "Sopra Steria";


  calcularCircunferencia = function(valorEvento: number) {
    this.radio= valorEvento;
    this.circunferencia = 2 * this.pi * this.radio;
  }
}

/*
const pi = 3.14;
const radio = 1;*/