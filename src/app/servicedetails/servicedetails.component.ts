import { Component } from '@angular/core';
import { CarServiceService } from './car-service.service';
import { CustomerIdService } from '../customer-id.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicedetails',
  templateUrl: './servicedetails.component.html',
  styleUrl: './servicedetails.component.css'
})

export class ServicedetailsComponent {

  flag:boolean=false;
  IsBook:boolean=true;
  isModalOpen:boolean=false;
  carHistory:any={
    'date':'',
    'time':''
  };
  getHistoryDate:any={};
 

  constructor(private service: CarServiceService, private customer_id: CustomerIdService, private router: Router) {

  }
  timeslots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '6:00 PM'];
  id: any;
  days: any;
  selectedDate: string | null = null;
  selectedTimeSlot: string | null = null;
  availableTimeSlots: string[] = [];
  submitted: boolean = false;
  ab = new Date().getFullYear();
  bc = (new Date().getMonth() + 1).toString().padStart(2, "0");
  ca = new Date().getDate().toString().padStart(2, "0");
  abc = `${this.ab}-${this.bc}-${this.ca}`;
  minDate: string = this.abc;
  objs: any = {};
  arry: any = [];


  goBack(): void {
    this.router.navigate(['/home']);
  }


  onDateChange() {
    if (this.selectedDate) {
      this.service.getAllSlots().subscribe((e: any) => {
        const dayy = this.selectedDate;
        const day1 = this.selectedDate?.split("-")[2];
        console.log(day1)
        console.log(dayy);
        console.log(e);
        e.forEach((e1: any) => {
          console.log(e1);
          if (e1.day == day1) {
            this.days = day1;
            this.objs = e1;
            this.arry = this.objs.times;
            this.id = this.objs.id;
            console.log("idd:" + this.id)
            console.log(this.arry)
            console.log(`update:${this.objs.times}`)
            this.availableTimeSlots = [...e1.times]

          }
          if (this.availableTimeSlots.length == 0) {
            this.availableTimeSlots = ["No Slots Available!!!"];
          }
        })

      });

    }
  }

  selectSlot(slot: string): void {
    if (slot !== "No Slots Available!!!") {
      this.selectedTimeSlot = slot;
    }
  }
  
  onSubmit(): void {
    if (this.selectedDate && this.selectedTimeSlot) {
      if (!this.selectedTimeSlot.match("No Slots Available!!!")) {

        const selectedDateTimeString = new Date(this.selectedDate + ' ' + this.selectedTimeSlot);
        console.log("slots:" + this.selectedTimeSlot);
        const selectedDateTime = new Date(selectedDateTimeString);
        const offsetInMs = 5.5 * 60 * 60 * 1000;
        const adjustedDateTime = new Date(selectedDateTime.getTime() + offsetInMs);
        console.log(adjustedDateTime)
        console.log("timeslot:" + this.selectedTimeSlot.split(" ")[0])
        const timesl = this.selectedTimeSlot.split(" ")[0];
        this.service.addServices(adjustedDateTime, localStorage.getItem("customer_id"));
        this.service.addServicedatas().subscribe(
          {
            next: (ne) => {
              console.log(ne);
              this.flag = true;

              const arg = this.arry.filter((e: any) => {
                console.log(e)
                console.log("slot" + this.selectedTimeSlot)

                return e != this.selectedTimeSlot
              })
              console.log(this.arry)
              console.log(arg)

              const obbj = { day: this.days, times: arg };
              this.service.updateSlots(this.id, obbj).subscribe(e => {
                console.log(e);
                console.log("updated")
              });

              alert("Your Slot have been Booked")

              console.log(new Date().getDate())
              console.log("min:" + new Date().toISOString());
              this.router.navigate(['/home']);

            }, error: (error) => {
              alert("One customer can book only one Service!")
              console.log("min:" + new Date().toISOString().split("T")[0]);
              console.log(this.abc);

              console.log();
              console.log(error)
            }
          }
        )

        this.submitted = true;
      } else {
        alert('Sorry No Slots Available!!!!!!!');
      }
    }
  }

 
 
  goTohistory(){
   
   
      this.isModalOpen=true;
      console.log(localStorage.getItem("customer_id"))
      this.service.getHistory().subscribe(
        (response:any)=>{
           this.getHistoryDate=response;
           const dateTime=this.getHistoryDate.dateTime;
           const dateObj = new Date(dateTime);
   
  // Extract the date part (yyyy-mm-dd)
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1; // months are 0-based
  const day = dateObj.getDate();
   
  // Format the date as "yyyy-mm-dd"
  const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
   
  // Extract the time part and convert to AM/PM format
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
   
  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // handle midnight (0) and noon (12)
  minutes = minutes < 10 ? Number('0' + minutes) : minutes;
   
   
  // Format the time as "hh:mm AM/PM"
  const formattedTime = `${hours}:${minutes} ${ampm}`;
  this.carHistory.date=formattedDate;
  this.carHistory.time=formattedTime;
  this.IsBook=true;
   
   
        },
        (error:any)=>{
          this.IsBook=false;
           console.log("Error while retriving service history");
        }
      )
    }
    closeModal(){
  this.isModalOpen=false;
    }
  
}
