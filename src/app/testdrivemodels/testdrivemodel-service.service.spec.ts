import { TestBed } from '@angular/core/testing';

import { TestdrivemodelServiceService } from './testdrivemodel-service.service';

describe('TestdrivemodelServiceService', () => {
  let service: TestdrivemodelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestdrivemodelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
