import { TestBed } from '@angular/core/testing';

import { ScholarshipApprovalService } from './scholarship-approval.service';

describe('ScholarshipApprovalService', () => {
  let service: ScholarshipApprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScholarshipApprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
