/**
 * Created by leo on 9/3/17.
 */
// importamos el modulo Injectable de AngularJS
import { Injectable } from '@angular/core';

// Importamos los componentes que vamos a usar
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

// Permitimos que este objeto se pueda inyectar con la DI
@Injectable()
export class SubterrorService {

  constructor(private _http: Http){}

  getEvents(){
    // petición por get a esa url de un api rest de pruebas
    return this._http.get("/api/event")
      .map(res => res.json());
  }

  getStations(){
    return this._http.get("/api/station")
      .map(res => res.json());
  }

  getEventType(){
    return this._http.get("/api/eventtype")
      .map(res => res.json());
  }


}
