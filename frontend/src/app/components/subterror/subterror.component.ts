import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/EventService';
import { StationService } from '../../services/StationService';
import { EventTypeService } from '../../services/EventTypeService';

@Component({
  selector: 'app-subterror',
  templateUrl: './subterror.component.html',
  styleUrls: ['./subterror.component.css']
})
export class SubterrorComponent implements OnInit {

  public events;
  public stations;
  public eventTypes;
  public errorMessage;
  public sense : String;
  public station : String;
  public eventType : JSON;

  constructor(private _eventService: EventService,
              private _stationService: StationService,
              private  _eventTypeService: EventTypeService) {}

  ngOnInit() {
    this.getEvents();
    this.getStations();
    this.getEventType();
  }

  getEvents() {
    this._eventService.getEvents()
      .subscribe(
        results => {
          this.events = results;
          console.log(this.events);
        },
        error => {
          this.errorMessage = <any>error;

          if(this.errorMessage !== null){
            console.log(this.errorMessage);
          }
        }
      )
  }

  saveEvent() {
    let data = {
      "sense" : this.sense,
      "eventType" : this.eventType,
      "station" : this.station
    };

    console.log(this.eventType);

    // this._eventService.saveEvent(data);
  }

  getStations(){
    this._stationService.getStations()
      .subscribe(
        results => {
          this.stations = results;
          console.log(this.stations);
        },
        error => {
          this.errorMessage = <any>error;

          if(this.errorMessage !== null){
            console.log(this.errorMessage);
          }
        }
      )
  }

  getEventType(){
    this._eventTypeService.getEventType()
      .subscribe(
        results => {
          this.eventTypes = results;
          console.log(this.eventTypes);
        },
        error => {
          this.errorMessage = <any>error;

          if(this.errorMessage !== null){
            console.log(this.errorMessage);
          }
        }
      )
  }

}
