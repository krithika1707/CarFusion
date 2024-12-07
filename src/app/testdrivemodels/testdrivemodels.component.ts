import { Component, OnInit } from '@angular/core';
import { TestdrivemodelServiceService } from './testdrivemodel-service.service';
import { Testdrivemodels } from '../testdrivemodels';

@Component({
  selector: 'app-testdrivemodels',
  templateUrl: './testdrivemodels.component.html',
  styleUrl: './testdrivemodels.component.css'
})
export class TestdrivemodelsComponent implements OnInit{

  model:Testdrivemodels[]=[];
   selectedDate!:string;
   selectedTime!:string;
   
  constructor(private tservice:TestdrivemodelServiceService){}
  ngOnInit(): void {
    this.tservice.fetchModels().subscribe(
      (response:Testdrivemodels[])=>{
         this.model=response;
        
      },
      (error)=>{
        console.log("Error while fetching car model");
      }
    )
  }

 dateChange(date:string){
  console.log(date);
  this.selectedDate=date;
  
 }

timeChange(time:string){
  this.selectedTime=time;
}


formatTimeSlot(time: string): string {
  const timeParts = time.split(' '); 
  const [hours, minutes] = timeParts[0].split(':'); 
  const period = timeParts[1]; 
  
  let hours24 = parseInt(hours); // Convert hours to integer
  if (period === 'PM' && hours24 !== 12) {
    hours24 += 12; // Convert PM to 24-hour format (except 12 PM)
  } else if (period === 'AM' && hours24 === 12) {
    hours24 = 0; // Convert 12 AM to 00
  }
  
  // Format the time in 24-hour format (HH:mm)
  return `${hours24.toString().padStart(2, '0')}:${minutes}`;
}
getFormattedDateTime(): string {
  const formattedTime = this.formatTimeSlot(this.selectedTime);
  
  return `${this.selectedDate}T${formattedTime}`;
}


submitted(id:number){
 
const dd=new Date(this.getFormattedDateTime());

this.tservice.storevalue(id,dd);
this.tservice.storeBookings().subscribe(
     (response:any)=>{
      alert("Your TestDrive is booked successfully!!!")
     },
     (error:any)=>{
       console.log("You are already booked for Testdrive");
     }
   )

// console.log(this.selectedDate);
// console.log(this.selectedTimeSlot);
  // this.tservice.storeBookings().subscribe(
  //   (response:any)=>{
  //     alert("Your TestDrive is booked successfully!!!")
  //   },
  //   (error:any)=>{
  //     console.log("Error while booking");
  //   }
  // )
}
  
  


}
