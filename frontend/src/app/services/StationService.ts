/**
 * Created by leo on 9/10/17.
 */

// importamos el modulo Injectable de AngularJS
import { Injectable } from '@angular/core';

// Importamos los componentes que vamos a usar
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

// Permitimos que este objeto se pueda inyectar con la DI
@Injectable()
export class StationService {

  constructor(private _http: Http){}

  getStations(){
    return this._http.get("/api/station")
      .map(res => res.json());
  }

}
