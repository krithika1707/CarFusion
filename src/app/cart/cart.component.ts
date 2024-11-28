import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Car } from '../car-resale/car-resale.component';
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Car[] = [];
 
  constructor(private cartService: CartService) {}
 
  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }
 
  removeFromCart(car: Car) {
    this.cartService.removeFromCart(car);
    this.cartItems = this.cartService.getCart();  
  }
 
  booking(): void {
    if (this.cartItems.length > 0) {
      alert('Your car has been successfully booked!');
      this.cartService.clearCart();
      this.cartItems = [];
    }
  }
 
  getTotalPrice() {
    return this.cartItems.reduce((total, car) => total + car.price, 0);
  }
}