import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public peliculas: Array<Pelicula>;

  constructor(private _service: PeliculasService) { 
    this.peliculas = [];
  }

  ngOnInit(): void {
    this._service.getAll().subscribe(response => {
      this.peliculas = response;
    }, error => {
      console.log("error");
      console.log(error)
    })
  }

}
