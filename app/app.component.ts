import { Component, ViewChild } from '@angular/core';
import { TemperatureMonitorService } from './temperatureMonitor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent {
  @ViewChild('f') slForm: NgForm;
  
  title: string = 'app works!';
  developerName = 'Jagata';
  median: number;
  total_size: number = 8;
  alertText: string;
  usedPercentage: number = 0;
  
  constructor(private temperatureMonitorService: TemperatureMonitorService) { }
  
  onKey(event: any) {
    const tempValue = event.target.value;
    if(tempValue >= -100 && tempValue <= 100){
      this.alertText = '';
    }else{
      this.alertText = 'Temperature range should be in the -100 to 100 degress.';
    }
  }
  
  getCurrentMedian(): number {
    this.median = this.temperatureMonitorService.getCurrentMedian();
    if(isNaN(this.median) === true){
      this.median = 0;
    }
    return this.median;
  }

  recordTemperature(form: NgForm) {
    const temperatureValue = form.value.temperature;
    
    if (this.temperatureMonitorService.temperature_list.length == this.total_size) {
      this.alertText = 'Reached max collection of temperatures :  ' + this.total_size + '.';
      return;
    } 
    
    if (temperatureValue >= -100 && temperatureValue <= 100) {
      this.temperatureMonitorService.recordTemperature(temperatureValue);
      this.usedPercentage = this.temperatureMonitorService.getUsedPercentage();
      form.reset();
    } else {
      this.alertText = 'Temperature range should be in the -100 to 100 degress.';
    }
  }
}
