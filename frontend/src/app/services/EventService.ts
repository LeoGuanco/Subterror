/**
 * Created by leo on 9/3/17.
 */
// importamos el modulo Injectable de AngularJS
import { Injectable } from '@angular/core';

// Importamos los componentes que vamos a usar
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {HttpHeaders} from "@angular/common/http";

// Permitimos que este objeto se pueda inyectar con la DI
@Injectable()
export class EventService {

  constructor(private _http: Http){}

  headers = new Headers({
    'Content-Type': 'application/json'
  });

  getEvents(){
    // petición por get a esa url de un api rest de pruebas
    return this._http.get("/api/event")
      .map(res => res.json());
  }

  saveEvent(body){
    return this._http.post("/api/event", JSON.stringify(body), {headers: this.headers})
      .subscribe( data => { console.log(data)} )
  }


}
