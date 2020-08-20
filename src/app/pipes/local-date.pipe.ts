import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localDate'
})
export class LocalDatePipe implements PipeTransform {

  transform(value: Date): Date {

    let localDate = new Date(value)
    let newDate = new Date(localDate + 'UTC')

    return localDate;
  }

}
