import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre-contadores',
  templateUrl: './padrecontadores.component.html',
  styleUrls: ['./padrecontadores.component.css']
})
export class PadrecontadoresComponent implements OnInit {
  public numeros: Array<number>;
  public mensaje: string;

  constructor() {
    this.numeros = [5, 9, 14, 20];
  }

  // Necesitamos un metodo para recibir el ID del contador del hijo
  recibirIdContador ( event ){
    // Utilizamos event directamente porque vamos a recibir un numero (idContador)
    this.mensaje = "Contador incrementado: "+ event;
  }

  ngOnInit(): void {
  }

}
