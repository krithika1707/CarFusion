import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarmodelsserviceService } from '../carmodelsservice.service';
import { TestDrive } from '../models';

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
  // segment: Segment = '5-seater';
  // carModels: Car[] = [];
  // timeSlots: string[] = ['9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM'];
  // carService: any;

  carList:TestDrive[]=[];
  constructor(private route: ActivatedRoute, private router: Router, private CarmodelsserviceService: CarmodelsserviceService) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.segment = params.get('segment') as Segment;
    //  this.fetchCarModels();
    // });
    
    this.CarmodelsserviceService.getCarModels().subscribe(
      (response:TestDrive[])=>{
        console.log(response);
        this.carList=response;
      },
      (error)=>{
        console.log("error while getting models");
      }
    )
  
  }
  
  // fetchCarModels(): void {
  //   this.carService.getTes(this.segment).subscribe(
  //    (data: Car[]) => {
  //       this.carModels = data;
  //     },
  //     (error: any) => {
  //       console.error('Error fetching car data:', error);
  //     }
  //   );
  // }

  // toggleTimeSlotDropdown(car: Car): void {
  //   car.showTimeSlotDropdown = true;  
  // }

  
  // confirmTimeSlot(car: Car): void {
  //   if (car.selectedTimeSlot) {
  //     const customerMobile = prompt('Please enter your mobile number:');
  //     if (customerMobile) {
  //       alert(`Booking Successful!\n\nCustomer Mobile: ${customerMobile}\nCar Model: ${car.model}\nTime Slot: ${car.selectedTimeSlot}`);
  //       this.router.navigate(['/home']);
  //     } else {
  //       alert('Booking cancelled: Mobile number is required.');
  //     }
  //   } else {
  //     alert('Please select a time slot first.');
  //   }
  //   car.showTimeSlotDropdown = false;
  // }


 
}