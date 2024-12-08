import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestdriveserviceService } from '../testdriveservice.service';
import { CustomerIdService } from '../customer-id.service';


@Component({
  selector: 'app-carmodels',
  templateUrl: './carmodels.component.html',
  styleUrl: './carmodels.component.css'
})
export class CarmodelsComponent implements OnInit
{

  selectedDates: { [carId: string]: string } = {}; // Stores the selected date for each car
  selectedSlots: { [carId: string]: string } = {}; // Stores the selected time slot for each car
  timeSlots: string[] = ['9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM'];
  models: any= [];
  testDriveBookingService: any;
flag:any=false;
  constructor(private route: ActivatedRoute, private router: Router, private serice: TestdriveserviceService, private id_service: CustomerIdService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const ids = params.get('segment');
      this.serice.getAllSegments(ids).subscribe(e => {
        this.models = e;
      });
    });
  }

  // Converts the 12-hour time format (AM/PM) to 24-hour format
  convertTo24HourFormat(time: any) {
    const [timeString, modifier] = time.split(/(AM|PM)/);
    let [hours, minutes] = timeString.split(':');
    hours = parseInt(hours);
    if (modifier === 'PM' && hours < 12) {
      hours += 12; // Convert PM times (except 12 PM)
    } else if (modifier === 'AM' && hours === 12) {
      hours = 0; // Convert 12 AM to 00
    }
    return `${String(hours).padStart(2, '0')}:${minutes}`;
  }

  formatDateTime(date: any) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  bookTestDrive(car: any): void {
    const carId = car.testdrive_id;
    const selectedDate = this.selectedDates[carId];
    const selectedSlot = this.selectedSlots[carId];
//console.log("selected:"+selectedDate);
    // Validate if the user has selected both date and time slot
    if (!selectedDate || !selectedSlot) {
      alert("Error: Please select both date and time slot.");
      return;
    }

    const timeSlot24Hour = this.convertTo24HourFormat(selectedSlot);
    const selectedDateTimeString = `${selectedDate} ${timeSlot24Hour}`;
    const selectedDateTime = new Date(selectedDateTimeString);

    if (isNaN(selectedDateTime.getTime())) {
      alert("Error: Invalid Date or Time.");
      return;
    }

    const offsetInMs = 5.5 * 60 * 60 * 1000; // Adjust for time zone (e.g., IST = UTC +5.5 hours)
    const adjustedDateTime = new Date(selectedDateTime.getTime() + offsetInMs);
    const formattedDateTimeISO = adjustedDateTime.toISOString();

    const testdrive_id = car.testdrive_id;
    const customer_id = this.id_service.getCustomerId();

    // Send the formatted ISO 8601 date-time in the request body
    this.serice.saveBookings({
      "testDrive": { "testdrive_id": testdrive_id },
      "dateTime": formattedDateTimeISO,
      "details": { "customer_id": localStorage.getItem("customer_id") }
    }).subscribe(
      (response) => {
        this.flag = true;
        alert("Your booking has been successfully confirmed!");
      },
      error => {
        alert("You have already booked a test drive for this car.");
      }
    );
  }
}
