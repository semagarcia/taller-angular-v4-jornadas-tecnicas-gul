import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByYear'
})
export class FilterByYearPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return (value > 2005) ? value : '';
  }

}
