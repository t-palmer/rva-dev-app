import { TestBed, inject } from '@angular/core/testing';

import { RvaDevLibService } from './rva-dev-lib.service';

describe('RvaDevLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RvaDevLibService]
    });
  });

  it('should be created', inject([RvaDevLibService], (service: RvaDevLibService) => {
    expect(service).toBeTruthy();
  }));
});
