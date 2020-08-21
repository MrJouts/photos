import { Pipe, PipeTransform } from '@angular/core';

import { truncate } from "lodash";

@Pipe({
  name: 'comments'
})
export class CommentsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return truncate(value, { 'length': 70 });
  }

}
