import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}


  logout() {
    alert('Logged out successfully!');
    this.router.navigate(['/']);  // Navigate back to Login page
  }

  openService(target: string) {
    console.log('Redirecting to service with target:', target);
    // Optionally, store the target component in local storage or take other actions
    localStorage.setItem('targetComponent', target);

    this.router.navigate(['/servicedetails']);
  }

  openResale(target: string) {
    console.log('Redirecting to resale with target:', target);
    // Optionally, store the target component in local storage or take other actions
    localStorage.setItem('targetComponent', target);

    this.router.navigate(['/carresale']);
  }

}


