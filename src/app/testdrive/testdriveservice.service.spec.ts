import { TestBed } from '@angular/core/testing';

//import { TestdriveserviceService } from './testdrive/testdriveservice.service';
import { TestdriveserviceService } from './testdriveservice.service';

describe('TestdriveserviceService', () => {
  let service: TestdriveserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestdriveserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
