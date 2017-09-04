import {Component} from '@angular/core';

@Component({
  selector: 'headerComponent',
  templateUrl: 'header.component.html'
})

export class HeaderComponent {
  public title:string;

  constructor(){
    this.title = "Subterror";
  }
}
