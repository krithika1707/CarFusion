import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  url:string="http://localhost:8080/car_services/add"
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
}
