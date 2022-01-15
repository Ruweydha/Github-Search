import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any): number {
    let time:any = "";
    let today:any = new Date();
    const secondsInDay = 86400;
    const secondsInHour = 3600;
    var timeDifference = Math.abs(value - today)/1000;
    var numberOfDays = Math.floor(timeDifference/secondsInDay);

    if(numberOfDays >0){
      time += `${Math.floor(numberOfDays)}Days `;

    }
    timeDifference -= numberOfDays * secondsInDay;
    var numberOfHours = Math.floor(timeDifference/secondsInHour);

   if(numberOfHours > 0){
      time += `${Math.floor(numberOfHours)}Hours `
    }
    timeDifference -= numberOfHours * secondsInHour;
    var minutes = Math.floor(timeDifference/60);

    if(minutes > 0){
      time += `${Math.floor(minutes)}Minutes `
    }
    timeDifference -= minutes *60;
    var seconds = timeDifference %60;

   if(seconds > 0){
      time += `${Math.floor(seconds)}Seconds `
    }

      return time;
  }

}
