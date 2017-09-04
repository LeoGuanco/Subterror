import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LineChartDemoComponent } from './components/line-chart-demo/line-chart-demo.component';
import { ChartsModule } from 'ng2-charts';

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
    ChartsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
