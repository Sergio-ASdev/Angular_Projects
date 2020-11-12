import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-numero-doble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css']
})

export class NumerodobleComponent implements OnInit {
    public doble: number;
    public numero: number;

    redirect(num){
        this._router.navigate( ["/numerodoble", num] );
    }

    //DEBEMOS INYECTAR LOS DOS OBJETOS PARA PODER RECUPERAR
    //RUTAS: ActivatedRoute y Router
    //EN LA INYECCION SE DECLARAN COMO private
    constructor( private _activeRoute: ActivatedRoute, private _router: Router ) { 
    }

    ngOnInit(): void {
      //DEBEMOS SUBSCRIBIRNOS AL PARAMETRO, PARA PODER
      //RECIBIRLO
      //DENTRO DE Params VENDRAN LOS PARAMETROS POR SU :name
      this._activeRoute.params.subscribe(( params: Params  ) => {
        //HEMOS CREADO RUTAS SIN NUMERO
        //COMPROBAMOS QUE TENEMOS PARAMETRO
        if (params.numero != null) {
          //LOS PARAMETROS SON string, AUNQUE SEAN NUMERICOS
          this.numero = parseInt(params.numero);
          this.doble = this.numero * 2;
        }else{
          console.log("No hay parámetros");
        }
      });
    }

}