import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseDate'
})
export class ReverseDatePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
   
    const parts = value.split('-');
    if (parts.length !== 3) return value;
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }

}
