import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultimage'
})
export class DefaultimagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (!value) {
      return 'avatar.svg';
    }
    return value;
  }

}
