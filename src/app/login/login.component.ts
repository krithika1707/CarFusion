import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router to navigate between components
import { CustomerDetails } from '../customer-details';
import { CustomerdetailsServiceService } from './customerdetails-service.service';
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLogin: boolean = true;  // Flag to toggle between login and signup forms

  user:CustomerDetails={
  customer_mail_id: '',
  customer_name: '',
  mobile_number: '',
  password:''
  }
 
  cid!:number;
  
  responsemessage!:String;
  login={
    customer_mail_id: '',
    password:''
  }

 constructor(private router: Router,private customerservice:CustomerdetailsServiceService,private customerobj:CustomerServiceService
  ,private localstorage:LocalStorageService
 ) {}
 customer!:CustomerDetails;


 
  toggleForm() {
    this.isLogin = !this.isLogin;
  }

 
  onSignUpSubmit() {
    if (this.user.customer_mail_id && this.user.password && this.user.customer_name && this.user. mobile_number) {
      this.customerservice.registercustomer(this.user).subscribe(
        (response:CustomerDetails)=>{
           this.customer=response;
           
           console.log(this.customer);
           this.isLogin = true; 
        },
        (error:any)=>{
          
          console.log('error');
        }
      );
      
     
    }
  }
 
 
  // Handle login form submission
  // onLoginSubmit() { 
  //   if(this.login.customer_mail_id && this.login.password){
  //      this.customerservice.loginservice(this.login).subscribe(
  //       (response:String)=>{
  //         console.log("successful");
  //          alert("Login successfully!!")
  //          this.router.navigate(['/home']);
  //          //console.log(response);
  //       },
  //       (error:any)=>{
  //         this.responsemessage = error.error;
  //       }
  //      );
  //   }
  // }

 // customers:Customer=new Customer();

  onLoginSubmit() { 
    if (this.login.customer_mail_id && this.login.password) {
      console.log("Sending login request:", this.login);  
      this.customerservice.loginservice(this.login).subscribe(
        (response) => {
          
          console.log("Successful login response:", response);

          alert("Login successfully!!");
          console.log(response);
          this.customerobj.setCustomerId(response.customer_id);
          this.localstorage.storeCustomerId(response.customer_id);
        
         //console.log(response.customer_id);
          this.router.navigate(['/home']);
        },
        (error: any) => {
          console.log("Error response:", error);  
          this.responsemessage = "Entered username or password is wrong!!";  
        }
      );
    }
  }
  
}



