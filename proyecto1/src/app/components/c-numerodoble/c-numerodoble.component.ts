import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-c-numerodoble',
  templateUrl: './c-numerodoble.component.html',
  styleUrls: ['./c-numerodoble.component.css']
})
export class CNumerodobleComponent implements OnInit {
  public doble: number;
  public numero: number;

  // creamos un metodo para la rediccion, en este ejemplo a nosotros mismos
  redirect(num){
    this._router.navigate( ["/numerodoble", num] );
  }

  // Debemos inyectar los dos objetos para poder recuperar 
  // RUTAS: ActivatedRoute y Router
  // en la inyeccion se declaran como private, y al ser inyedcciones se suelen declarar con _
  constructor() { }

  // los parametros SIEMPRE se reciben en ngOnInit. Para ello, hay que subscrtibirse al parametro, como una promesa
  ngOnInit(): void {
    // Dentro de params vendran los parametros por su :name
    this._activeRoute.params.subscribe(( params: Params) => {

      // console.log(params);
      if(params.numero != null){
        this.numero = parseInt(params.numero);
        this.doble = this.numero * 2;
      }else{

      }

    });
  }

}
