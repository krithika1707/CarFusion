import { TestBed } from '@angular/core/testing';

import { CarmodelsserviceService } from './carmodelsservice.service';

describe('CarmodelsserviceService', () => {
  let service: CarmodelsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarmodelsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
