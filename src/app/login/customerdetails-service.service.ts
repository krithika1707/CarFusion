import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerDetails } from '../customer-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerdetailsServiceService {
  
  constructor(private http:HttpClient) { }
 
  private url="http://localhost:8080";

  registercustomer(user: CustomerDetails):Observable<CustomerDetails> {
    
    return this.http.post<CustomerDetails>(`${this.url}/customerdetails/customeradd`,user);
  }

  loginservice(login: any):Observable<any> {
    console.log(login);
    return this.http.post(`${this.url}/login/customerlogin`,login);
  }

  
}
