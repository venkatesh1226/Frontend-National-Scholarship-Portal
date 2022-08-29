import { TestBed } from '@angular/core/testing';

import { OtherDetailsService } from './other-details.service';

describe('OtherDetailsService', () => {
  let service: OtherDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
