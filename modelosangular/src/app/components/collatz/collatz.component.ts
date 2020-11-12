import { Component, OnInit } from '@angular/core';

// si vas a redireccionar, habria que importar Route
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})

export class CollatzComponent implements OnInit {
  public numeros: Array<number>;
  public collatz: number

  constructor(private _activateRoute: ActivatedRoute) {
    this.numeros = [];
  }

  generarCollatz(num){
    this.numeros = [];

    while (num != 1){
      if (num % 2 == 0){
        num = num / 2;
      } else {
        num = (num * 3) + 1;
      }
      this.numeros.push(num);
    }
  }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {
      // así es como hemos llamado al parametro en routing, :numero
      var num = parseInt(params.numero);
      this.collatz = num;
      this.generarCollatz(num);
    });
  }

}
