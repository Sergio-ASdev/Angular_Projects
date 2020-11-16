import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from './global';
import { Observable } from 'rxjs';


@Injectable()
export class CocheService{
    public url: string;

    constructor(private _http: HttpClient){
        this.url = Global.urlcoches;
    }

    getDatos(): Observable<any> {
        var request = "/coches";
        return this._http.get(this.url + request);;
    }
}