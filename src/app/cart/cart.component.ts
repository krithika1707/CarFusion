import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Car, CarResaleComponent } from '../car-resale/car-resale.component';
import { Router } from '@angular/router';
import { CarresaleserviceService } from '../carresaleservice.service';
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Car[] = [];
  selectedDates: { [carId: string]: string } = {};
  selectedSlots: { [carId: string]: string } = {};
  isModalOpen = false;
  bookedCars: Car[] = [];    
  customerId: string = '';  
  mindate: string = new Date().toISOString().split('T')[0];
 
  constructor(private cartService: CartService, private router: Router, private bookingService: CarresaleserviceService) {}
 
  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }
 
removeFromCart(car: Car) {
  this.cartService.removeFromCart(car);
  this.cartItems = this.cartService.getCart();  
}
 
getTotalPrice() {
  return this.cartItems.reduce((total, car) => total + car.price, 0);
}
 
goBack(): void {
  this.router.navigate(['/carresale']);
}
convertTo24HourFormat(time: any) {
  const [timeString, modifier] = time.split(/(AM|PM)/);
  let [hours, minutes] = timeString.split(':');
  hours = parseInt(hours);
  if (modifier === 'PM' && hours < 12) {
    hours += 12;
  } else if (modifier === 'AM' && hours === 12) {
    hours = 0;
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
 
areAllItemsSelected(): boolean {
  return this.cartItems.every(car => {
    const selectedDate = this.selectedDates[car.resale_id];
    const selectedSlot = this.selectedSlots[car.resale_id];
    return selectedDate && selectedSlot; 
  });
}
 
  booking(cartItems: Car[]): void {
    const allSelected = this.areAllItemsSelected();
 
    if (allSelected) {
      let bookingSuccess = true; 
 
      this.cartService.clearCart(); 
      this.cartItems = []; 
 
      
      cartItems.forEach((car) => {
        const resale_id = car.resale_id;
        const selectedDate = this.selectedDates[resale_id];
        const selectedSlot = this.selectedSlots[resale_id];
 
        const timeSlot24Hour = this.convertTo24HourFormat(selectedSlot);
        const selectedDateTimeString = `${selectedDate} ${timeSlot24Hour}`;
        const selectedDateTime = new Date(selectedDateTimeString);
 
        // Check if the date and time are valid
        if (isNaN(selectedDateTime.getTime())) {
          alert("Error: Invalid Date or Time.");
          bookingSuccess = false; 
          return; 
        }
 
        const offsetInMs = 5.5 * 60 * 60 * 1000; 
        const adjustedDateTime = new Date(selectedDateTime.getTime() + offsetInMs);
        const formattedDateTimeISO = adjustedDateTime.toISOString();
 
        // Send booking request to the backend
        this.bookingService.saveBookings({
          resale: { resale_id: resale_id },
          dateTime: formattedDateTimeISO,
          details: { customer_id: localStorage.getItem('customer_id') },
        }).subscribe(
          (response) => {
            console.log('Car has been successfully booked:', response);
            this.isModalOpen=true;
          },
          (error) => {
            console.error('Error booking car:', error);
            alert('An error occurred while booking the car. Please try again.');
            bookingSuccess = false; 
          }
        );
      });
 
      
      if (bookingSuccess) {
        this.bookedCars = [...cartItems];
        
      }
 
    } else {
      
      alert('Please select a date and time before confirming your booking.');
    }
  }
 
  onDateChange(car: Car): void{
    if(this.selectedDates[car.resale_id]){
      this.selectedSlots[car.resale_id]='';
    }
  }

  canConfirmBooking():boolean{
    return this.cartItems.every(car=>
    {
      const selectedDate=this.selectedDates[car.resale_id];
      const selectedSlot=this.selectedSlots[car.resale_id];
      return selectedDate&&selectedSlot;
    }
    )
  }

  closeModal() {
    this.isModalOpen = false;
  }
}