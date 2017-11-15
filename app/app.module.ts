import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TemperatureMonitorService } from './temperatureMonitor.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TemperatureMonitorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
