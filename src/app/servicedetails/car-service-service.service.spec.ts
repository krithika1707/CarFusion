import { TestBed } from '@angular/core/testing';

import { CarServiceServiceService } from './car-service-service.service';

describe('CarServiceServiceService', () => {
  let service: CarServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
