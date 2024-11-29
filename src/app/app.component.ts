import { Component } from '@angular/core';
import { ServicedetailsComponent } from './servicedetails/servicedetails.component';
import { CartService } from './cart/cart.service';
import { Car } from './car-resale/car-resale.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // constructor(public cartService: CartService) {}
 
  // addToCart(car: Car) {
  //   this.cartService.addToCart(car);
  // }
 
  // getCart() {
  //   return this.cartService.getCart();
  // }
}
