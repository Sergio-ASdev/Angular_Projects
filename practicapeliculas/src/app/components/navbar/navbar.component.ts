import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public generos: Array<string>;

  constructor(private _service: PeliculasService) { 
    this.generos = [];
  }

  ngOnInit(): void {
    this._service.getAllGenres().subscribe(response => {
      this.generos = response;
      console.log(response);
    }, error => {
      console.log("error");
      console.log(error);
    });
  }

}
