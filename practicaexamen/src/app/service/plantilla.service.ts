import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class PlantillaService {
    private url: string;

    constructor(private _http: HttpClient){
        this.url = Global.urlplantilla;
    }
    /**
        /Plantilla
        /Plantilla​/{id}
        /Plantilla​/Funciones
        /Plantilla​/PlantillaFuncion​/{funcion}
        /Plantilla​/PlantillaFunciones
        ​/Plantilla​/{funcion}​/{incremento}
     * 
     */

     getAll(): Observable<any>{
        var request = "/Plantilla";
        return this._http.get(this.url + request);
     }

     getById(id): Observable<any>{
        var request = "/Plantilla​/" + id;
        return this._http.get(this.url + request);
     }

     getAllFunciones(): Observable<any>{
        var request = "/Plantilla/Funciones";
        return this._http.get(this.url + request);
     }

     // Si no funciona y has probado de todo, ten cuidado de que no hayas coppiado el texto 
     getPlantillaByFunciones(funcion): Observable<any>{
        var request = "/Plantilla/PlantillaFuncion/" + funcion;
        console.log(request);
        console.log(funcion)
        return this._http.get(this.url + request);
     }

     /*
     insertByFuncion(funcion, incremento): Observable<any>{
        var request = "/Plantilla​/{funcion}​/" + funcion;
        // es un insert
     }
     */

}