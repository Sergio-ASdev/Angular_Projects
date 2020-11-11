import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-tabla-multiplicar',
  templateUrl: './a-tabla-multiplicar.component.html',
  styleUrls: ['./a-tabla-multiplicar.component.css']
})
export class ATablaMultiplicarComponent implements OnInit {
  public numero: number;
  public numeros: Array<number>;

  constructor() { 
    this.numero = 0, 
    this.numeros = []
  }

  pintarTabla(){
    this.numeros = [1,2,3,4,5,6,7,8,9];
    console.log(this.numeros);
  }



  ngOnInit(): void {
  }

}
