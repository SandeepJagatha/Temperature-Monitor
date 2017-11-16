import { Injectable } from '@angular/core';

@Injectable()
export class TemperatureMonitorService {
  tempList : number[] = [];
  median : number = undefined;
  
  getUsedPercentage(): number {
    return Math.floor((this.tempList.length / 8) * 100);
  }
  
  getCurrentMedian() : number {
    this.tempList.sort( function(a,b) {return a-b;});
    
    let tempMid = Math.floor(this.tempList.length/2);  
    
    if (this.tempList.length % 2 == 1){
      this.median = this.tempList[tempMid];
    }else{
      this.median = (Number(this.tempList[tempMid]) + Number(this.tempList[(tempMid) - 1])) / 2;
    }
    
    return this.median;
  }
  
  recordTemperature (temperatureValue : number) : void {
        this.tempList.push(temperatureValue);
  }
  
  getTempListSize(): number {
    return this.tempList.length;
  }
}