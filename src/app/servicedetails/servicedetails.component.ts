import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CarServiceServiceService } from './car-service-service.service';
import { convertToParamMap, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CustomerServiceService } from '../customer-service.service';
import { TestdrivemodelServiceService } from '../testdrivemodels/testdrivemodel-service.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-servicedetails',
  templateUrl: './servicedetails.component.html',
  styleUrl: './servicedetails.component.css'
})
export class ServicedetailsComponent {
  constructor(private carservice:CarServiceServiceService,private testmodel:TestdrivemodelServiceService,
    private localstorage:LocalStorageService,private customerobj:CustomerServiceService
  ){}
  availableTimeSlots:String[]=[] ;
 show:boolean=false;

  selectedDate!: string;
  selectedTimeSlot!: string;
  
  submitted: boolean = false;
  flag:number=0;

  //timeslots:string[]=[];
  timeslotobj:any;

  gettimeslots=['9:00 AM', '10:00 AM', '07:00 PM'];
  minDate: string = new Date().toISOString().split('T')[0];
  maxDate: string = new Date(new Date().setDate(new Date().getDate() + 20)).toISOString().split('T')[0];
  onDateChange() {
    if (this.selectedDate) {
 
      this.carservice.getSlots().subscribe(
        (e:any)=>{
           let daysarr=this.selectedDate.split("-");
           let day=daysarr[2];
           e.forEach((ele:any)=>{
              if(ele.day==day){
                this.timeslotobj=ele;
                this.availableTimeSlots=[...ele.times];
              }
            })
            if(this.availableTimeSlots.length==0){
              this.availableTimeSlots=["No time slots Available"];
              console.log(this.availableTimeSlots)
            }
        }
      )
    
     
    }
  }


  onTimeSlotChange() {
      
  }

  onSubmit(): void {
    console.log("hii")
    console.log(this.selectedTimeSlot);
    if(this.availableTimeSlots[0]==="No time slots Available"){
      alert("No Slots Avaliable!!!")
    }
    else if(this.selectedDate && this.selectedTimeSlot) {
     
        console.log(this.selectedTimeSlot);
        this.saveBookings();
       
      } else {

        alert('This time slot is already booked. Please choose another slot.');
      }
    }
  

  formatTimeSlot(time: string): string {
    const timeParts = time.split(' '); 
    const [hours, minutes] = timeParts[0].split(':'); 
    const period = timeParts[1]; 
    
    let hours24 = parseInt(hours); 
    if (period === 'PM' && hours24 !== 12) {
      hours24 += 12; 
    } else if (period === 'AM' && hours24 === 12) {
      hours24 = 0; 
    }
    
   
    return `${hours24.toString().padStart(2, '0')}:${minutes}`;
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
    console.log("Getting localstorage");
    console.log(this.localstorage.getCustomerId());
    this.carservice.confirm(dd,this.customerobj.cid);
    this.carservice.confirmBooking().subscribe(
      (response:any)=>{
           console.log("passed");
           console.log(response);



          //for removing timeslots
           this.timeslotobj.times=this.timeslotobj.times.filter(
            (t:string)=>t!=this.selectedTimeSlot);
            console.log("objected")
            console.log(this.timeslotobj);
            console.log(this.timeslotobj.day);
             this.carservice.updateSlots(this.timeslotobj).subscribe(
              (response:any)=>{
                console.log(response);
                this.availableTimeSlots=[...this.timeslotobj.times];
              },
              (errors:any)=>{
                console.log("error while updating");
              }
             );
            
           

           this.submitted = true;
           
      },
      (error:any)=>{
          this.flag=1;
      }

    )
    
  }

}




