import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-servicedetails',
  templateUrl: './servicedetails.component.html',
  styleUrl: './servicedetails.component.css'
})
export class ServicedetailsComponent {

  timeSlotsMap: { [key: string]: string[] } = {
    'Oil Change and Filter Replacement': ['9:00 AM', '10:00 AM', '11:00 AM'],
    'Brake Inspection and Service': ['12:00 PM', '1:00 PM', '2:00 PM'],
    'Tire Rotation and Alignment': ['3:00 PM', '4:00 PM', '5:00 PM'],
    'Battery Check and Replacement': ['6:00 PM', '7:00 PM', '8:00 PM']
  };
 
  bookedSlots: { [date: string]: string[] } = {
    '2024-11-18': ['10:00 AM', '1:00 PM'],
    '2024-11-19': ['3:00 PM', '6:00 PM']  
  };
 

  selectedDate: string | null = null;
  selectedTimeSlot: string | null = null;
  availableTimeSlots: string[] = [];
  submitted: boolean = false;
 
  
  minDate: string = new Date().toISOString().split('T')[0];

  onDateChange() {
    if (this.selectedDate) {
      this.availableTimeSlots = this.timeSlotsMap['Oil Change and Filter Replacement'] || []; 

      this.availableTimeSlots = this.availableTimeSlots.filter(slot => !this.isSlotBooked(slot));
      this.selectedTimeSlot = null;
    }
  }

  isSlotBooked(slot: string): boolean {
    if (this.selectedDate && this.bookedSlots[this.selectedDate]) {
      return this.bookedSlots[this.selectedDate].includes(slot);
    }
    return false;
  }
 

  onTimeSlotChange() {

  }

  onSubmit(): void {
    if (this.selectedDate && this.selectedTimeSlot) {
      if (!this.isSlotBooked(this.selectedTimeSlot)) {
 
        if (!this.bookedSlots[this.selectedDate]) {
          this.bookedSlots[this.selectedDate] = [];
        }
        this.bookedSlots[this.selectedDate].push(this.selectedTimeSlot);
 
        this.submitted = true;
      } else {
        alert('This time slot is already booked. Please choose another slot.');
      }
    }
  }
}