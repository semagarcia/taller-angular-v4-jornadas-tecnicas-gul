import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class CharacterService {

  constructor(private httpSrv: Http) { }

  getCharacters(): Observable<any> {
    return this.httpSrv.get('/api/characters');
  }

}
