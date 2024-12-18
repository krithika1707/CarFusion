import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarresaleserviceService {

  private baseUrl = 'http://localhost:8080/car_resale';
  private bookingUrl = 'http://localhost:8080/carresale/booking/add'

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get`);
  }

  getCarsByPrice(priceRange: number): Observable<any[]> {
    const params = new HttpParams().set('PriceRange', priceRange.toString());
    return this.http.get<any[]>(`${this.baseUrl}/get/price?price=`, { params });
  }

  getCarsBySegment(segmentId: number): Observable<any[]> {
    const params = new HttpParams().set('segmentId', segmentId.toString());
    return this.http.get<any[]>(`${this.baseUrl}/get/segments?ids=`, { params });
  }

  getCarsByPriceAndSegment(priceRange: number, segmentId: number): Observable<any[]> {
    const url = `${this.baseUrl}/get/search?id=${segmentId}&price=${priceRange}`;
    return this.http.get<any[]>(url);
  }

  saveBookings(obj:any)
  {
    return this.http.post(`${this.bookingUrl}`, obj);
  }

}
