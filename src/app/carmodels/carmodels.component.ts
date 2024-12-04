import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
interface Car {
  model: string;
  image: string;
  description: string;
  showTimeSlotDropdown: boolean;
  selectedTimeSlot: string | null;
}

type Segment = '5-seater' | '7-seater';



@Component({
  selector: 'app-carmodels',
  templateUrl: './carmodels.component.html',
  styleUrl: './carmodels.component.css'
})
export class CarmodelsComponent implements OnInit
{
  segment: Segment = '5-seater';
  carModels: Car[] = [];
  timeSlots: string[] = ['9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM'];

  carData: { [key in Segment]: Car[] } = {
    '5-seater': [
      { model: 'Reencarnar', image: 'assets/images/model1.jpg', description: 'Comfortable.', showTimeSlotDropdown: false, selectedTimeSlot: null },
      { model: 'Renault Kiger', image: 'assets/images/model2.jpg', description: 'Sporty and efficient.', showTimeSlotDropdown: false, selectedTimeSlot: null },
      { model: 'Renault R5 E', image: 'assets/images/model3.jpg', description: 'Luxury with great performance.', showTimeSlotDropdown: false, selectedTimeSlot: null },
      { model: 'Renault Arkana', image: 'assets/images/model12.jpg', description: 'Stylish and fuel-efficient.', showTimeSlotDropdown: false, selectedTimeSlot: null }
    ],
    '7-seater': [
      { model: 'Renault Triber', image: 'assets/images/model13.jpg', description: 'Perfect for large families.', showTimeSlotDropdown: false, selectedTimeSlot: null },
      { model: 'Renault Scenic', image: 'assets/images/model14.jpg', description: 'Ideal for long road trips.', showTimeSlotDropdown: false, selectedTimeSlot: null },
      { model: 'Renault Espace', image: 'assets/images/model7.jpg', description: 'A blend of style and space.', showTimeSlotDropdown: false, selectedTimeSlot: null },
      { model: 'Renault Duster', image: 'assets/images/model16.avif', description: 'Spacious and comfortable for all.', showTimeSlotDropdown: false, selectedTimeSlot: null }
    ]
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.segment = params.get('segment') as Segment;
      this.setCarModels();
    });
  }

  setCarModels(): void {
    this.carModels = this.carData[this.segment];
  }

  toggleTimeSlotDropdown(car: Car): void {
    car.showTimeSlotDropdown = true;  
  }

  confirmTimeSlot(car: Car): void {

    if (car.selectedTimeSlot) {
      const customerMobile = prompt('Please enter your mobile number:');
      if (customerMobile) {
        alert(`Booking Successful!\n\nCustomer Mobile: ${customerMobile}\nCar Model: ${car.model}\nTime Slot: ${car.selectedTimeSlot}`);
        this.router.navigate(['/']);
      } else {
        alert('Booking cancelled: Mobile number is required.');
      }
    } else {
      alert('Please select a time slot first.');
    }
    car.showTimeSlotDropdown = false;
}
}