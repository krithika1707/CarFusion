import { TestBed } from '@angular/core/testing';

import { TestdriveServiceService } from './testdrive-service.service';

describe('TestdriveServiceService', () => {
  let service: TestdriveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestdriveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
