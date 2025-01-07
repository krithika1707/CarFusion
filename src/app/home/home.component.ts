import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  customerName: String | null='';

  constructor(private router: Router) {
    this.customerName = localStorage.getItem('customer_name');
  }


  logout() {
    alert('Logged out successfully!');
    this.router.navigate(['/']); 
  }

  openService(target: string) {
    console.log('Redirecting to service with target:', target);
    localStorage.setItem('targetComponent', target);

    this.router.navigate(['/servicedetails']);
  }

  openResale(target: string) {
    console.log('Redirecting to resale with target:', target);
    localStorage.setItem('targetComponent', target);

    this.router.navigate(['/carresale']);
  }

  openTestDrive(target: string) {
    console.log('Redirecting to resale with target:', target);
    localStorage.setItem('targetComponent', target);

    this.router.navigate(['/testdrive']);
  }

}


