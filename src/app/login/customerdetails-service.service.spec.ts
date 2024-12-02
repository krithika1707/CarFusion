import { TestBed } from '@angular/core/testing';

import { CustomerdetailsServiceService } from './customerdetails-service.service';

describe('CustomerdetailsServiceService', () => {
  let service: CustomerdetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerdetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
