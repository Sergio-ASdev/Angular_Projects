import { Component, OnInit, Input } from '@angular/core';
import { Coche } from '../../models/coche/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {
  @Input() car: Coche;
  public mensaje: string;

  // Cuando recibimos objetos, no se utiliza el constructor
  constructor() {
    // this.comprobarEstado();
  }

  ngOnInit(): void {
    this.comprobarEstado();
  }

  comprobarEstado(){

    if(this.car.estado == false){
      this.mensaje = "El coche está apagado";
      this.car.velocidad = 0;

      return false;
    } else {
      this.mensaje = "El coche está encendido";

      return true;
    }

  }

  encenderCoche(){
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }

  acelerarCoche(){

    if(this.comprobarEstado() == false){

      alert("El coche no está encendido");

    } else {

      this.car.velocidad = this.car.velocidad + this.car.aceleracion;
      if(this.car.velocidad >= this.car.velocidadmaxima){
        this.car.velocidad = this.car.velocidadmaxima;
      }

    }

  }



}
