import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmFilter'
})
export class FilmFilterPipe implements PipeTransform {
  transform(value: string): string {
    if(value === 'BB') {
      return 'Breaking Bad';
    } else if(value === 'GoT') {
      return 'Games Of Thrones';
    } else

    switch(value) {
      case 'BB':
        return 'Breaking Bad';
      case 'GoT':
        return 'Games Of Thrones';
      case 'TS':
        return 'The Sopranos';
      case 'TW':
        return 'Teen Wolf';
      case 'BoB':
        return 'Band of Brothers';
      case 'OITNB':
        return 'Orange Is The New Black';
      case 'VK':
        return 'Vikings';
    }

    return 'Serie not recognized';
  }
}
