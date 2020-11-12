import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-collatz',
  templateUrl: './menucollatz.component.html',
  styleUrls: ['./menucollatz.component.css']
})
export class MenucollatzComponent implements OnInit {
  public numeros: Array<number>;

  constructor() {
    this.numeros = [];
  }

  ngOnInit(): void {
    for (let i = 0; i < 6; i++) {
      var aleat = Math.floor(Math.random() * 40 + 1);
      this.numeros.push(aleat);
    }
  }

}
