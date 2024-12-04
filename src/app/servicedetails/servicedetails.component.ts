import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CarServiceService } from '../car-service.service';
import { access } from 'fs';
import { CustomerIdService } from '../customer-id.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-servicedetails',
  templateUrl: './servicedetails.component.html',
  styleUrl: './servicedetails.component.css'
})
export class ServicedetailsComponent {
  constructor(private service: CarServiceService, private customer_id: CustomerIdService,private router:Router) {
     
  }
timeslots=['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '6:00 PM'];
  flag:boolean=false;
  selectedDate: string | null = null;
  selectedTimeSlot: string | null = null;
  availableTimeSlots: string[] = [];
  submitted: boolean = false;
   ab=new Date().getFullYear();
   bc=(new Date().getMonth()+1).toString().padStart(2,"0");
       ca=new Date().getDate().toString().padStart(2,"0");
       abc=`${this.ab}-${this.bc}-${this.ca}`;
  minDate: string = this.abc;
  onDateChange() {
    if (this.selectedDate) {
      this.availableTimeSlots = [...this.timeslots]
    }
  }
  onSubmit(): void {
    if (this.selectedDate && this.selectedTimeSlot) {

        const selectedDateTimeString = new Date(this.selectedDate + ' ' + this.selectedTimeSlot);

        const selectedDateTime = new Date(selectedDateTimeString);

        const offsetInMs = 5.5 * 60 * 60 * 1000; 
        const adjustedDateTime = new Date(selectedDateTime.getTime() + offsetInMs);

        this.service.addServices(adjustedDateTime, this.customer_id.getCustomerId());
        this.service.addServicedatas().subscribe(
          {
            next:(ne)=>{
              console.log(ne);
              this.flag=true;
              alert("Your Slot have been Booked")

              console.log(new Date().getDate()) 
              console.log("min:"+new Date().toISOString());
              this.router.navigate(['/home']);
        
            },error:(error)=>{
              alert("You Already Booked!!!!!!!")
              console.log("min:"+new Date().toISOString().split("T")[0]);
    console.log(this.abc);
              
              //const ss=new Date(this.selectedDate);
             console.log();
              console.log(error)
            }
          }
         )

        this.submitted = true;
      } else {
        alert('This time slot is already booked. Please choose another slot.');
      }
    }
  }
