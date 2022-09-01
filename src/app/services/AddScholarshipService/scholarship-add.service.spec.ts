import { TestBed } from '@angular/core/testing';

import { ScholarshipAddService } from './addScholarshipService.service';

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
