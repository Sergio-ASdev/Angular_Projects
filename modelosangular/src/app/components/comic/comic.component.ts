import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})

export class ComicComponent implements OnInit {
  @Input() comic: Comic;
  @Input() indice: number;
  @Output() seleccionarFavorito = new EventEmitter();

  marcarFavorito(){
    console.log("Selecionado");
    // metodo del hijo, que cuando se clicka, llama a la linea 13 que es el metodo del padre
    this.seleccionarFavorito.emit(this.indice);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
