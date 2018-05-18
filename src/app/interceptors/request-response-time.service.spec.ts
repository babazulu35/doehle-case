import { TestBed, inject } from '@angular/core/testing';

import { RequestResponseTimeService } from './request-response-time.service';

describe('RequestResponseTimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestResponseTimeService]
    });
  });

  it('should be created', inject([RequestResponseTimeService], (service: RequestResponseTimeService) => {
    expect(service).toBeTruthy();
  }));
});
