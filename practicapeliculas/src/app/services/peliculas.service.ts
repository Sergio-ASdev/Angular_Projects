import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './global';

@Injectable()
export class PeliculasService {
    private url: string;

    constructor(private _http: HttpClient){
        this.url = Global.urlPeliculas;
    }
    /*
    peliculasgenero/{idgenero}	
    peliculasnacionalidad/{idnacionalidad}	
    peliculastitulo/{titulo}	
    Peliculas	
    Peliculas?idpeli={idpeli}
    Generos
     */

    getByGenre(idGenre): Observable<any>{
        var request = "/peliculasgenero/" + idGenre;
        return this._http.get(this.url + request);
    }

    getByNationality(idNationality): Observable<any>{
        var request = "/peliculasnacionalidad/" + idNationality;
        return this._http.get(this.url + request);
    }

    getByTitle(title): Observable<any>{
        var request = "/peliculastitulo/" + title;
        return this._http.get(this.url + request);
    }

    getAll(): Observable<any>{
        var request = "/Peliculas";
        return this._http.get(this.url + request);
    }

    getById(id): Observable<any>{
        var request = "/Peliculas?idpeli= " + id;
        return this._http.get(this.url + request);
    }

    getAllGenres(): Observable<any>{
        var request = "/Generos";
        return this._http.get(this.url + request);
    }
}