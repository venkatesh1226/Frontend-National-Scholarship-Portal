import { TestBed } from '@angular/core/testing';

import { AcademicdetailsService } from './academicdetails.service';

describe('AcademicdetailsService', () => {
  let service: AcademicdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
