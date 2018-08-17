import { TestBed, inject } from '@angular/core/testing';

import { IntervalDataService } from './interval-data.service';

describe('IntervalDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntervalDataService]
    });
  });

  it('should be created', inject([IntervalDataService], (service: IntervalDataService) => {
    expect(service).toBeTruthy();
  }));
});
