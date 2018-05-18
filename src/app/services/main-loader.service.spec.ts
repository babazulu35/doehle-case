import { TestBed, inject } from '@angular/core/testing';

import { MainLoaderService } from './main-loader.service';

describe('MainLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainLoaderService]
    });
  });

  it('should be created', inject([MainLoaderService], (service: MainLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
