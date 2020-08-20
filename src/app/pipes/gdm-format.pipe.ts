import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gdmFormat'
})
export class GdmFormatPipe implements PipeTransform {

  transform(value: string): string {

    let condition = /gdm|tl|ss/i;

    let principio = value.match(condition);

    if (principio != null) {
      let final = value.replace(condition, '')
      return `${principio}<b>${final}</b>`;
    }
    else {
      return value
    }
  }
}
