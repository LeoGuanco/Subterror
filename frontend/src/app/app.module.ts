import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LineChartDemoComponent } from './components/line-chart-demo/line-chart-demo.component';
import { ChartsModule } from 'ng2-charts';

import { EventService } from './services/EventService';
import { StationService } from './services/StationService';
import { EventTypeService } from './services/EventTypeService';
// Importamos el módulo http del paquete http de Angular
import { HttpModule, JsonpModule } from '@angular/http';
import { SubterrorComponent } from './components/subterror/subterror.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LineChartDemoComponent,
    SubterrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    HttpModule
  ],
  providers: [EventService,StationService,EventTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
