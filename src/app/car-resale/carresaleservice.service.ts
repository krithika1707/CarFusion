import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarresaleserviceService {

  private baseUrl = 'http://localhost:8080/car_resale';
  private bookingUrl = 'http://localhost:8080/carresale/booking/add'
  private historyUrl='http://localhost:8080/carresale/booking/bookings';

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get`);
  }

  getCarsByPrice(priceRange: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get/price?price=${ priceRange }`);
  }

  getCarsBySegment(segmentId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get/segments?ids=${segmentId }`);
  }

  getCarsByPriceAndSegment(priceRange: number, segmentId: number): Observable<any[]> {
    const url = `${this.baseUrl}/get/search?id=${segmentId}&price=${priceRange}`;
    return this.http.get<any[]>(url);
  }

  saveBookings(obj:any)
  {
    return this.http.post(`${this.bookingUrl}`, obj);
  }

getBookingHistory(customer_id: string){
    return this.http.get<any[]>(`${this.historyUrl}/${customer_id}`);
  }
  
}
