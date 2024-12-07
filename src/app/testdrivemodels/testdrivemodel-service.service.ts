import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Testdrivemodels } from '../testdrivemodels';
import { Observable } from 'rxjs';
import { TestdriveServiceService } from '../testdrive/testdrive-service.service';
import { CustomerServiceService } from '../customer-service.service';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TestdrivemodelServiceService {
  storingValues(id: number) {
    throw new Error('Method not implemented.');
  }
  this: any;

  constructor(private http:HttpClient,private tservice:TestdriveServiceService,private localstorage:LocalStorageService) { }
  private url="http://localhost:8080";
  customerid!:number;
   testid!:number;

 
   Bookobj!:any;




  fetchModels():Observable<Testdrivemodels[]>{
    
    return this.http.get<Testdrivemodels[]>(`${this.url}/testdrive/getbyid?ids=${this.tservice.segment_id}`);
  }

  storevalue(id:number,dd:Date){
    console.log("entering into creating object")
     console.log(this.localstorage.getCustomerId());
     console.log(dd);
    this.Bookobj={
      "testDriveModels": {
        "test_drive_id": id
    },
    "customerDetails": {
        "customer_id": this.localstorage.getCustomerId()
    },
    "date_time": dd
    }
  }

  setCustomerId(id:number){
    this.customerid=id;
  }

  storeBookings(){
    console.log(this.Bookobj);
    return this.http.post(`${this.url}/testdrive/booking`,this.Bookobj);
  }

}
