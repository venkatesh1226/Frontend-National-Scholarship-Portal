import { TestBed } from '@angular/core/testing';

import { TwelthDetailsService } from './twelth-details.service';

describe('TwelthDetailsService', () => {
  let service: TwelthDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwelthDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
