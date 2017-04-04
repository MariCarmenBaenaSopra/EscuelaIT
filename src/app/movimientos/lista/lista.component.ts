import { MovimientoModel } from './../datos.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

  @Input('movimientos') movimientos: MovimientoModel[];
  
  constructor() { }

  ngOnInit() {
  }

}
