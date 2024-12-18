import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { LoginServerService } from '../login-server.service';
import { CustomerIdService } from '../customer-id.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin: boolean = true;
 
  signupForm!: FormGroup;
  loginForm!: FormGroup;
 
  constructor(
    private router: Router,
    private services: LoginServerService,
    private customer_id: CustomerIdService
  ) {}
 
  ngOnInit(): void {
    // Initialize the signup form with validators
    this.signupForm = new FormGroup({
      customer_name: new FormControl('', Validators.required),
      customer_mobile_number: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      customer_mail_id: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('^.{5,}$')])
    });
 
    // Initialize the login form with validators
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
 
  // Toggle between login and signup form
  toggleForm() {
    this.isLogin = !this.isLogin;
  }
 
  // Sign up form submission handler
  onSignUpSubmit() {
    if (this.signupForm.valid) {
      const user = this.signupForm.value;
      this.services.addUsers(user);
      console.log('Sign Up Form Submitted');
      console.log(user);
      this.isLogin = true;
      // this.router.navigate(['/']); // Uncomment if you want to navigate to a different route
    } else {
      alert('Please fill in all fields.');
    }
  }
 
  // Login form submission handler
  onLoginSubmit() {
    if (this.loginForm.invalid) {
      return; // Don't proceed if the form is invalid
    }
 
    const loginData = this.loginForm.value;
    this.services.checkLogin(loginData).subscribe({
      next: (response) => {
        this.customer_id.setCustomerId(response.customer_id);
        localStorage.setItem("customer_id", response.customer_id);
        localStorage.setItem("customer_name", response.customer_name);
        console.log(`ans:${response}`);
        console.log(`ans:${response.customer_id}`);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log("Error during login:", err);
        alert('Login failed. Please check your credentials.');
      }
    });
  }
}
 