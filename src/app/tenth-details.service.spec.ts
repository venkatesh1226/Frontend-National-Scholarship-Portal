import { TestBed } from '@angular/core/testing';

import { TenthDetailsService } from './tenth-details.service';

describe('TenthDetailsService', () => {
  let service: TenthDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenthDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
