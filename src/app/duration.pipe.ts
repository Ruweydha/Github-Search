import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any): any {
    var timeElapsed = moment(value).fromNow()
    return timeElapsed
  }
   
}
