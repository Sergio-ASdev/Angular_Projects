import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})

export class ListaproductosComponent implements OnInit {
  // Declaramos una variable del tipo modelo Producto
  public producto: Producto;

  constructor() {
    // cuando utlizamos modelos, se utiliza la palabra new para crear objetos
    // en el momento en el que ponemos el new, entra en el constructor de la clase modelo Producto
    this.producto = new Producto("Leche", "Cacao", 14);
  }

  ngOnInit(): void {
  }

}
