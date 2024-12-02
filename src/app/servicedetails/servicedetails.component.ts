import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CarServiceServiceService } from './car-service-service.service';
import { convertToParamMap, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-servicedetails',
  templateUrl: './servicedetails.component.html',
  styleUrl: './servicedetails.component.css'
})
export class ServicedetailsComponent {
  constructor(private carservice:CarServiceServiceService,private router:Router,private customerobj:CustomerServiceService){}
  availableTimeSlots:String[]=[] ;
 show:boolean=false;

  selectedDate: string | null = null;
  selectedTimeSlot!: string;
  
  submitted: boolean = false;
  flag:number=0;
  
  timeslots=['9:00 AM', '10:00 AM', '07:00 PM'];
  minDate: string = new Date().toISOString().split('T')[0];
  maxDate: string = new Date(new Date().setDate(new Date().getDate() + 20)).toISOString().split('T')[0];
  onDateChange() {
    if (this.selectedDate) {
       this.availableTimeSlots=[...this.timeslots];
    }
  }


  onTimeSlotChange() {

  }

  onSubmit(): void {
    if (this.selectedDate && this.selectedTimeSlot) {

        this.saveBookings();
       
      } else {

        alert('This time slot is already booked. Please choose another slot.');
      }
    }
  

  formatTimeSlot(time: string): string {
    // Check if the time contains 'AM' or 'PM' and remove it
    const timeWithoutAMPM = time.replace(/\s?AM|\s?PM/, '').trim(); // Remove AM or PM
    return timeWithoutAMPM;  // Return the time in HH:mm format
  }
  getFormattedDateTime(): string {
    const formattedTime = this.formatTimeSlot(this.selectedTimeSlot);
    return `${this.selectedDate}T${formattedTime}`;
  }
  
    saveBookings(this: any) {

    console.log(this.getFormattedDateTime());
    console.log(this.customerobj.cid);
    const dd=new Date(this.getFormattedDateTime());
    console.log(dd);
    this.carservice.confirm(dd,this.customerobj.cid);
    this.carservice.confirmBooking().subscribe(
      (response:any)=>{
           console.log("passed");
           console.log(response);
           this.submitted = true;
           
      },
      (error:any)=>{
          this.flag=1;
      }

    )
    
  }

}




