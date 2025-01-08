import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TestdriveserviceService
 {
  private segment_id!: number;
  setSegmentId(id: number) {
    this.segment_id = id;
  }

  getSegmentId(): number | null {
    return this.segment_id;
  }
  
  url:string="http://localhost:8080/testdrive/search?"
  url_segment:string="http://localhost:8080/testdrive/segments/all";
  url_bookings:string="http://localhost:8080/testdrive/booking/book";

   url_booking_history:string="http://localhost:8080/testdrive/booking/bookings";


  constructor(private access:HttpClient) { }
getAllSegments(id:any)
{
return this.access.get(`${this.url}ids=${id}`)
}
getSegments()
{
  return this.access.get<[]>(this.url_segment);
}

saveBookings(obj:any)
{
  console.log(`customer id `+obj.details.customer_id);
  return this.access.post(this.url_bookings,obj);
}

getBookingHistory(customer_id: string){
  return this.access.get(`${this.url_booking_history}/${customer_id}`);
}

}

