import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowercase'
})
export class LowercasePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if(!value) return '';
    return value.toLowerCase();
  }

}
