import {Component} from '@angular/core';

@Component ({
    selector: "app-negativos-positivos",
    templateUrl: "./negativos.positivos.component.html",
    styleUrls: ['./negativospositivos.component.css'],
})

export class NegativosPositivos {
    public numeros: Array<number>;

    constructor(){
        this.numeros = [-1,4,0,-3];
    }

    generarNumeros(){
        var aleat = Math.floor(Math.random()*100); // this will get a number between 0 and 100;
        aleat *= Math.round(Math.random()) ? 1 : -1; // this will add minus sign in 50% of cases
        this.numeros.push(aleat);
    }
}