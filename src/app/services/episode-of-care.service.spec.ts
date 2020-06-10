import { TestBed } from '@angular/core/testing';

import { EpisodeOfCareService } from './episode-of-care.service';

describe('EpisodeOfCareService', () => {
  let service: EpisodeOfCareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodeOfCareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
