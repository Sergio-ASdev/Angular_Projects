import { Component, OnInit } from '@angular/core';
import { CocheService } from 'src/app/services/coche.service';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'],
  providers: [CocheService]
})
export class CochesComponent implements OnInit {
  public coches: Array<Coche>
  constructor(private _service: CocheService) { }

  ngOnInit(): void {
    var datos = this._service.getDatos();
    
    this._service.getDatos().subscribe(response => {
      
      this.coches = response;
      
    }, error => {
      console.log("Error en la peticion");
    })

    /*
      for (let i = 0; i < response.length; i++) {
        var v = response[i];
        console.log(v);
        this.coches.push(
          new Coche(
              v.idcoche,
              v.marca,
              v.modelo,
              v.conductor,
              v.imagen
          )
        )
      }
      */
  }

}
