import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-servicedetails',
  templateUrl: './servicedetails.component.html',
  styleUrl: './servicedetails.component.css'
})
export class ServicedetailsComponent {

  options: string[] = ['Oil Change and Filter Replacement', 'Brake Inspection and Service', 'Tire Rotation and Alignment', 'Battery Check and Replacement','Fluid Checks and Top-Ups','Air Filter Replacement','Transmission Service','Spark Plug Replacement','Timing Belt/Chain Replacement','Suspension System Inspection'];
  selectedOption: string | null = null;
  selectedTimeSlot: string | null = null;
  timeSlots: string[] = [];
  submitted: boolean = false;
 
  // Define time slots for each option
  timeSlotsMap: { [key: string]: string[] } = {
    'Oil Change and Filter Replacement': ['9:00 AM', '10:00 AM', '11:00 AM'],
    'Brake Inspection and Service': ['12:00 PM', '1:00 PM', '2:00 PM'],
    'Tire Rotation and Alignment': ['3:00 PM', '4:00 PM', '5:00 PM'],
    'Battery Check and Replacement': ['6:00 PM', '7:00 PM', '8:00 PM']
  };
 
  // Update time slots based on selected option
  onOptionChange() {
    if (this.selectedOption) {
      // Populate the time slots based on the selected option
      this.timeSlots = this.timeSlotsMap[this.selectedOption] || [];
      // Reset the selected time slot when the option changes
      this.selectedTimeSlot = null;
    }
  }
 
  // Handle form submission
  onSubmit(): void {
    if (this.selectedOption && this.selectedTimeSlot) {
      this.submitted = true;
    }
  }
}
