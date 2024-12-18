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
  mindate:string= new Date().toISOString().split('T')[0];

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



 
  constructor(private cartService: CartService, private router: Router, private bookingService: CarresaleserviceService) {}
 
  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }
 
  removeFromCart(car: Car) {
    this.cartService.removeFromCart(car);
    this.cartItems = this.cartService.getCart();  
  }
 

  booking(cartItems: Car[]): void {
  
    if (cartItems.length > 0) {
      cartItems.forEach((car) => {
        const resale_id = car.resale_id; 
        const selectedDate = this.selectedDates[resale_id];
        const selectedSlot = this.selectedSlots[resale_id];
        if (!selectedDate || !selectedSlot) {
          alert("Error: Please select both date and time slot for "+car.model);
          return;
        }
        if (!resale_id) {
          console.error('Error: resale_id is missing for a car.');
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
  
        

        this.bookingService.saveBookings({
          resale: { resale_id: resale_id },
          dateTime: formattedDateTimeISO,
          details: { customer_id: localStorage.getItem('customer_id') },
        }).subscribe(
          (response) => {
            console.log('Car has been successfully booked:', response);
            this.cartService.clearCart();
            this.cartItems = [];
          },
          (error) => {
            console.error('Error booking car:', error);
            alert('An error occurred while booking the car. Please try again. '+car.resale_id+" "+formattedDateTimeISO);
          }
        );
      });
      
    } else {
      alert('Your cart is empty!');
    }
  }
  

  goBack(): void {
    this.router.navigate(['/carresale']);
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, car) => total + car.price, 0);
  }
}

