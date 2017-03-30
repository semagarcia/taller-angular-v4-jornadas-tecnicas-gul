import { TestBed, inject } from '@angular/core/testing';

import { SeriesServiceService } from './series-service.service';

describe('SeriesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeriesServiceService]
    });
  });

  it('should ...', inject([SeriesServiceService], (service: SeriesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
