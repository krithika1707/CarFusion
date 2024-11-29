import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router to navigate between components
import { LoginServerService } from '../login-server.service';
import { CustomerDetails } from '../customer-details';
import { LoginDetails } from '../login-details';
import { CustomerIdService } from '../customer-id.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  isLogin: boolean = true;  // Flag to toggle between login and signup forms
  user:CustomerDetails = {
    customer_name: '',
    password: '',
    customer_mail_id: '',
    customer_mobile_number: ''  // Added email property
  };
  
logins:LoginDetails={
  username:'',
    password: ''
};
  constructor(private router: Router,private services:LoginServerService,private customer_id:CustomerIdService) {}

  // Switch between login and sign up forms
  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  
  onSignUpSubmit() {
    this.services.addUsers(this.user);
    if (this.user.customer_name && this.user.password && this.user.customer_mail_id) {
      console.log('Sign Up Form Submitted');
      //console.log(this.user.);
      
      console.log(this.user);  // Here you would typically send the user data to your backend
      alert('Sign Up Successful!');
      this.isLogin=true;
      //this.router.navigate(['/']);
     
    } else {
      alert('Please fill in all fields.');
    }
  }

  // Handle login form submission
  onLoginSubmit() {
    if (!this.logins.username || !this.logins.password) {
     // alert('Please fill in both username and password.');
        return; 
    }
  
    this.services.checkLogin(this.logins).subscribe({
      next: (response) => {
        this.customer_id.setCustomerId(response.customer_id);
        console.log(`ans:${response}`);
        console.log(`ans:${response.customer_id}`);  
        alert("Welcome!!!!");  
        this.router.navigate(['/home']);
        //if (response.message === 'Login Successful!!!!!!!') {
          //
        //}
      },
      error: (err) => {
        console.log("Error during login:", err);
        alert('Login failed. Please check your credentials.');
      }
    });
   }
}
