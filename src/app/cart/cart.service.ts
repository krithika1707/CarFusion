import { Injectable } from '@angular/core';
import { Car } from '../car-resale/car-resale.component';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Car[] = [];  
 
  addToCart(car: Car) {
    this.cart.push(car);  
  }
 
  getCart() {
    return this.cart;  
  }
 
  removeFromCart(car: Car) {
    this.cart = this.cart.filter(c => c !== car);
  }
 
  clearCart(): void {
    this.cart = [];  
  }
}