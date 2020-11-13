import { Component, OnInit } from '@angular/core';
import { Coche } from '../../models/coche/coche';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css']
})
export class ConcesionarioComponent implements OnInit {
  public coches: Array<Coche>;

  constructor() {
    this.coches = [
      new Coche("Ford", "Mustang", 0, 320, 30, false),
      new Coche("Kia", "Picanto", 0, 100, 5, false),
      new Coche("Lamborgini", "Diablo", 0, 420, 60, false),
    ]
  }

  ngOnInit(): void {
  }

}
