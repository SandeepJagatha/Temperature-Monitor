import { Injectable } from '@angular/core';

@Injectable()
export class TemperatureMonitorService {
  temperature_list : number[] = [];
  median : number = undefined;
  
  recordTemperature (enteredTemperature : number) : void {
        this.temperature_list.push(enteredTemperature);
  }
  
  getCurrentMedian() : number {
    this.temperature_list.sort( function(a,b) {return a-b;});
    
    let len = this.temperature_list.length;
    let mid = Math.floor(len/2);  
    
    if (len % 2 == 1){
      this.median = this.temperature_list[mid];
    }else{
      this.median = (Number(this.temperature_list[mid]) + Number(this.temperature_list[(mid) - 1])) / 2;
    }
    
    return this.median;
  }
  
  getUsedPercentage(): number {
    return Math.floor((this.temperature_list.length / 8) * 100);
  }
}