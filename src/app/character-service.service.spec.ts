import { TestBed, inject } from '@angular/core/testing';

import { CharacterServiceService } from './character-service.service';

describe('CharacterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterServiceService]
    });
  });

  it('should ...', inject([CharacterServiceService], (service: CharacterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
