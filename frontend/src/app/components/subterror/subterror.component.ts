import { Component, OnInit } from '@angular/core';
import { SubterrorService } from '../../services/SubterrorService'

@Component({
  selector: 'app-subterror',
  templateUrl: './subterror.component.html',
  styleUrls: ['./subterror.component.css']
})
export class SubterrorComponent implements OnInit {

  public events;
  public errorMessage;

  constructor(private _subterrorService: SubterrorService) {}

  ngOnInit() {
    this.getEvents();
    this.getStations();
    this.getEventType();
  }

  getEvents() {
    this._subterrorService.getEvents()
      .subscribe(
        results => {
          this.events = results;
          console.log(this.events);
        },
        error => {
          this.errorMessage = <any>error;

          if(this.errorMessage !== null){
            console.log(this.errorMessage);
            alert("Error en la peticion");
          }
        }
      )
  }

  getStations(){
    this._subterrorService.getStations()
      .subscribe(
        results => {
          this.events = results;
          console.log(this.events);
        },
        error => {
          this.errorMessage = <any>error;

          if(this.errorMessage !== null){
            console.log(this.errorMessage);
            alert("Error en la peticion");
          }
        }
      )
  }

  getEventType(){
    this._subterrorService.getEventType()
      .subscribe(
        results => {
          this.events = results;
          console.log(this.events);
        },
        error => {
          this.errorMessage = <any>error;

          if(this.errorMessage !== null){
            console.log(this.errorMessage);
            alert("Error en la peticion");
          }
        }
      )
  }

}
