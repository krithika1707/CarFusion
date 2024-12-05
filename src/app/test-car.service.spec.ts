import { TestBed } from '@angular/core/testing';

import { TestCarService } from './test-car.service';

describe('TestCarService', () => {
  let service: TestCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
