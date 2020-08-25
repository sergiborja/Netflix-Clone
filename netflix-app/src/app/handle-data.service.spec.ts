import { TestBed } from '@angular/core/testing';

import { HandleDataService } from './handle-data.service';

describe('HandleDataService', () => {
  let service: HandleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
