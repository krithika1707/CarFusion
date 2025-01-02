import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestdriveserviceService } from '../testdriveservice.service';

 
@Component({
  selector: 'app-testdrive',
  templateUrl: './testdrive.component.html',
  styleUrls: ['./testdrive.component.css']
})
export class TestdriveComponent implements OnInit {
  segment_id!: number;
  arr: any[] = [];
  response: any[] = [];
  selectedSegment: any; 
  selectedDates: { [carId: string]: string } = {}; 
  selectedSlots: { [carId: string]: string } = {}; 
  models: any = [];
  testDriveBookingService: any;
  flag: any = false;
  selectedSegmentDetails: any = null;
  isLoading!: boolean;

  mindate:string= new Date().toISOString().split('T')[0];
 
  constructor(
    private router: Router,
    private ch: ChangeDetectorRef,
    private service: TestdriveserviceService
  ) {}
 
  ngOnInit(): void {
    // Fetch the segment data
    this.service.getSegments().subscribe((e) => {
      this.response = e;
      this.isLoading = false;
      this.ch.detectChanges();
 
  // onScheduleTestDrive(): void{
     const sedanSegment  = this.response.find(segment => segment.segment.toLowerCase() === 'sedan');
    if(sedanSegment){
      this.selectedSegment = sedanSegment.segment_id;
       this.onSelectSegment(this.selectedSegment);
     } 
   });
  }
 
  onSelectSegment(segmentId: any): void {
    this.isLoading = true;
    this.selectedSegment = segmentId;
    this.selectedSegmentDetails = this.response.find(
      (segment) => segment.segment_id === segmentId
    );
 
    localStorage.setItem('testdrive_id', this.selectedSegmentDetails.segment_id);
    this.service.getAllSegments(localStorage.getItem('testdrive_id')).subscribe((e) => {
      this.models = e;
      this.isLoading = false;
    }
  ,
    (error) => {
      console.error('Error loading car models', error);
      this.isLoading = false;
    });
  }
 
 
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
 
    const offsetInMs = 5.5 * 60 * 60 * 1000; 
    const adjustedDateTime = new Date(selectedDateTime.getTime() + offsetInMs);
    const formattedDateTimeISO = adjustedDateTime.toISOString();
 
    const testdrive_id = car.testdrive_id;
    

    this.service.saveBookings({
      testDrive: { testdrive_id: testdrive_id },
      dateTime: formattedDateTimeISO,
      details: { customer_id: localStorage.getItem("customer_id") },
    }).subscribe(
      (response) => {
        this.flag = true;
        alert("Your booking has been successfully confirmed!");
      },
      (error) => {
        alert("You have already booked a test drive for this car.");
      }
    );
  }
 
  goBack(): void {
    this.router.navigate(['/home']);
  }
}