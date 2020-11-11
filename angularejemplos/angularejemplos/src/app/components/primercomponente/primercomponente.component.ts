// Ahora para aprender, vamor a poner todo en el mismo archivo. HTML CSS Y JS
import {Component} from '@angular/core';

// Declaracion del componente y su estructura de archivos, ademas de us nombre
@Component ({
    // Nombre del componente para la App
    selector: "app-primercomponente",
    // plantilla para el componente
    template: `<h1> Soy el primer componente de Angular</h1>
                <h2>{{nombre}}</h2>
                <h2>{{anyo}}</h2>
                <hr>
    `,
})

// este nombre es para la declaracion en module
export class PrimerComponente {
    // Declaramos las variable para la clase con tipo
    public nombre: string;
    public anyo: number;

    // La primera vez que entra en el componente tiene que tener un constructor
    constructor(){
        console.log("Creando el primer componente");
        // con this accedemos a las propiedades
        this.nombre = "Sergio Angular";
        this.anyo = 2020;
    }
}
