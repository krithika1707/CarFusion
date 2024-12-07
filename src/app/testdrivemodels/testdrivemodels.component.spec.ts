import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdrivemodelsComponent } from './testdrivemodels.component';

describe('TestdrivemodelsComponent', () => {
  let component: TestdrivemodelsComponent;
  let fixture: ComponentFixture<TestdrivemodelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestdrivemodelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestdrivemodelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
