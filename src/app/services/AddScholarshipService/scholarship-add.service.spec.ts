import { TestBed } from '@angular/core/testing';

import { ScholarshipAddService } from './scholarship-add.service';

describe('ScholarshipAddService', () => {
  let service: ScholarshipAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScholarshipAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
