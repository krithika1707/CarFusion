import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  url:string="http://localhost:8080/car_services/add"
  slot_url:string="http://localhost:3000/days";
  constructor(private access:HttpClient) { }
  args={};
  addServices(datetime:Date,id:any)
  {
    this.args={
      "dateTime": datetime,
      "details": {
          "customer_id": id
      }

    } 
  }
  addServicedatas()
  {
    return this.access.post(this.url,this.args);
  }
  getAllSlots()
  {
return this.access.get(this.slot_url);
 }
 updateSlots(id:any,obj:any)
 {
  console.log("ids:"+id);
return this.access.put<any>(`${this.slot_url}/${id}`,obj);
 }

 getHistory():Observable<any> {
  return this.access.get<any>(`http://localhost:8080/car_services/bookinghistory?id=${localStorage.getItem("customer_id")}`);
}

}
