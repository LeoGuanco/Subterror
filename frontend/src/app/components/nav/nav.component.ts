import {Component} from '@angular/core';

@Component({
  selector: 'navComponent',
  templateUrl: 'nav.component.html'
})

export class NavComponent {
  public title:string;

  constructor(){
    this.title = "Subterror";
  }
}
