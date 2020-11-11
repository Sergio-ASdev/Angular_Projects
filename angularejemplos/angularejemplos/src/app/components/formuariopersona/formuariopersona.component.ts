import { Component } from '@angular/core';

@Component({
  selector: 'app-formuariopersona',
  templateUrl: './formuariopersona.component.html',
  styleUrls: ['./formuariopersona.component.css']
})
export class FormuariopersonaComponent {
  // Declaramos un objeto como modelo que deseamos enlazar con el formulario
  public user: any;
  public mensaje: string;

  constructor() { 
    // Iniciamso el objeto user (model)
    this.user = {
      nombre: "",
      apellidos: "",
      edad:""
    };
    this.mensaje = "";
  }

  recibirDatos(){
    this.mensaje = "Datos recibidos";
    console.log(this.user);
  }

}
