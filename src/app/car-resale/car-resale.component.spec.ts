import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarResaleComponent } from './car-resale.component';

describe('CarResaleComponent', () => {
  let component: CarResaleComponent;
  let fixture: ComponentFixture<CarResaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarResaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarResaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
