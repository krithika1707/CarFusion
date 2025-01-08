import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractDateTime'
})
export class ExtractDateTimePipe implements PipeTransform {

  transform(value: string, startIndex: number, endIndex: number): string {
    if (!value) return '';
    return value.substring(startIndex, endIndex);
  }

}
