import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router to navigate between components

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLogin: boolean = true;  // Flag to toggle between login and signup forms
  user = {
    name: '',
    password: '',
    email: '',
    phone: ''  // Added email property
  };

  constructor(private router: Router) {}

  // Switch between login and sign up forms
  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  // Handle sign-up form submission
  onSignUpSubmit() {
    if (this.user.name && this.user.password && this.user.email) {
      console.log('Sign Up Form Submitted');
      console.log(this.user);  // Here you would typically send the user data to your backend
      alert('Sign Up Successful!');
      this.router.navigate(['/home']);  // Redirect to home after successful sign up
    } else {
      alert('Please fill in all fields.');
    }
  }

  // Handle login form submission
  onLoginSubmit() {
    if (this.user.name && this.user.password) {
      console.log('Login Form Submitted');
      console.log(this.user);  // Typically, send login data to your backend here
      alert('Login Successful!');
      this.router.navigate(['/home']);  // Redirect to home after successful login
    } else {
      alert('Please fill in all fields.');
    }
  }
}
