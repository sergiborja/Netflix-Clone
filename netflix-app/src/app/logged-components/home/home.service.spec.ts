import { TestBed } from '@angular/core/testing';

import { ValidateTokenService } from '../../services/validate-token.service';

describe('HomeService', () => {
  let service: ValidateTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
