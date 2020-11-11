import {Component} from "@angular/core";

@Component ({
    selector: "app-numeros-random",
    templateUrl: "./numerosrandom.component.html",
    styleUrls: ['./numerosrandom.component.css']
})

export class NumerosRandom {
    public numeros: Array<number>;

    constructor(){
        this.numeros = [5,7,14,20,2];
    }

    generarNumeros(){
        var aleat = Math.floor(Math.random() * 100) + 1;
        this.numeros.push(aleat);
    }
}