import { TestBed } from '@angular/core/testing';

import { InstituteLoginServiceService } from './institute-login-service.service';

describe('InstituteLoginServiceService', () => {
  let service: InstituteLoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstituteLoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
