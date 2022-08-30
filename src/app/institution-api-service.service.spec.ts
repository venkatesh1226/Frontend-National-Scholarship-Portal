import { TestBed } from '@angular/core/testing';

import { InstitutionApiServiceService } from './institution-api-service.service';

describe('InstitutionApiServiceService', () => {
  let service: InstitutionApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstitutionApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
