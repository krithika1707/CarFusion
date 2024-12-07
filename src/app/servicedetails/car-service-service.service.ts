import { Injectable } from '@angular/core';
import { CustomerDetails } from '../customer-details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarServiceServiceService {

  constructor(private http:HttpClient) { }
  obj!:any;

  private url="http://localhost:8080";
  private timeslots="http://localhost:3000/days";
  confirm(date:Date,id:any){
    
    this.obj={
      date_time:date,
      customerDetails:{
         customer_id:id
      }
    }
    
  }

 confirmBooking():Observable<any>{
  console.log(this.obj);
  console.log("finallys");
  return this.http.post<any>(`${this.url}/carservice/saveservicebooking`,this.obj);
 }

 getSlots():Observable<any>{
  return this.http.get<any>(this.timeslots);
 }

 updateSlots(obj:any):Observable<any>{
  console.log("updated");
  console.log(obj.day);
  return this.http.put(`${this.timeslots}/${obj.id}`,obj);
 }
  
}
