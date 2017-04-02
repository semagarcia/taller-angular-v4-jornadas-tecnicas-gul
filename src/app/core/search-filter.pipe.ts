import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(data: any[], searchTerm: string): any[] {
      searchTerm = searchTerm.toUpperCase();
      if(data) {
          return data.filter(character => { return character.character.toUpperCase().indexOf(searchTerm) !== -1 });
      }
  }

}
