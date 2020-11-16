import { Component, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css', '../../app.component.css']
})
export class LibreriaComponent implements OnInit {
  public comic : any;
  public comics: Array<Comic>;
  public favorito: Comic;
  public editar: boolean;
  public id: number;

  seleccionarFavorito(event){
    // Aqui vamos a recibir el ID
    var id = parseInt(event);
    // this.favorito = event;
    this.favorito = this.comics[id];
    console.log(this.favorito);
  }

  eliminarComic(event){
    var index = parseInt(event);
    this.comics.splice(index, 1);
  }

  recibirDatos(){
    // console.log(this.comic);
    var id = parseInt(this.comic.id);
    this.comic = {
      nombre: this.comic.nombre,
      imagen: this.comic.imagen,
      titulo: this.comic.titulo,
    }
    // this.comics[id] = this.comic;
    if(this.comic.nombre != this.comics[id].nombre &&
       this.comic.imagen != this.comics[id].imagen &&
       this.comic.titulo != this.comics[id].titulo
    ){
      // this.comics.splice(id-1, 1, this.comic);
      console.log("if");
      this.comics[id] = this.comic;
    } 

    if(!this.comic[id]){
      this.comics.splice(id, 0, this.comic);
    }
    
    console.log(this.comics);
  }
  
  // no cargaba bien el componente html por no tener inicializado a vacio el objeto
  constructor() {
        this.comics = [
            new Comic(
              "Spiderman",
              "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
              "Hombre araña"
            ),
            new Comic(
              "Wolverine",
              "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
              "Lobezno"
            ),
            new Comic(
              "Guardianes de la Galaxia",
              "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
              "Yo soy Groot"
            )
          ];

      this.comic = {
        id: "",
        nombre: "",
        imagen: "",
        titulo: ""
      }
  }

  ngOnInit(): void {
  }

}
