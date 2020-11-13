import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/coche/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})

export class ListaproductosComponent implements OnInit {
  // Declaramos una variable del tipo modelo Producto
  public productos: Array<Producto>;

  constructor() {
    // cuando utlizamos modelos, se utiliza la palabra new para crear objetos
    // en el momento en el que ponemos el new, entra en el constructor de la clase modelo Producto
    this.productos = [
      new Producto("Nike Air Jordan", "https://i.ebayimg.com/images/g/lEsAAOSwBJpc1MAN/s-l300.jpg", 150 ),
      new Producto("New Balance 1530", "https://cdn.webshopapp.com/shops/164432/files/292835943/new-balance-m1530kgl-olive-grey-pink-made-in-uk.jpg", 140 ),
      new Producto("J-Hayber Olimpo", "https://jhayber.com/documents/images/products/63638-850-1.jpg",  60  ),
      new Producto("Vans", "https://media.vogue.es/photos/5cc75028fdc822a6611ff5bb/master/w_2700,c_limit/voguees_moda_tendencias_250218163.jpg", 75) 
    ]

    this.productos.push ( new Producto("Leche", "Cacao", 14) );

    
  }

  ngOnInit(): void {
  }

}
