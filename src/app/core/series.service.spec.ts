import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [ SeriesService ]
    });
  });

  it('should create the instance', inject([SeriesService], (service: SeriesService) => {
    expect(service).toBeTruthy();
  }));
});
