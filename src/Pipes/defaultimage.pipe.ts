import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultimage'
})
export class DefaultimagePipe implements PipeTransform {

  transform(value: string, args: any): string {
    if (value === null) {
          return '';
       }else{
      return value;
    }
  }

}
