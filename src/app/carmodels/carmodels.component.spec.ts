import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmodelsComponent } from './carmodels.component';

describe('CarmodelsComponent', () => {
  let component: CarmodelsComponent;
  let fixture: ComponentFixture<CarmodelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarmodelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarmodelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
