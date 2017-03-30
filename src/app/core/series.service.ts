import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class SeriesService {

  constructor(private httpSrv: Http) { }

  getSeries(): Observable<any> {
    return this.httpSrv.get('/api/series');
  }

}
