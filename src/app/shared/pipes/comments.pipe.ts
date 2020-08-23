import { Pipe, PipeTransform } from '@angular/core';

import { truncate } from "lodash";

@Pipe({
  name: 'comments'
})
export class CommentsPipe implements PipeTransform {

  transform(value: string, length: number): string {
    if (!length) {
      return truncate(value, { 'length': 70 });
    }
    return truncate(value, { 'length': length });
  }

}
