import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Segments } from './segments';

interface Car {
  model: string;
  image: string;
  description: string;
  showTimeSlotDropdown: boolean;
  selectedTimeSlot: string | null;
}

type Segment = '5-seater' | '7-seater';

@Injectable({
  providedIn: 'root'
})
export class TestCarService {

  //private apiUrl = 'http://localhost:8080/api/cars'; 

  constructor(private http: HttpClient) { }
  // getCarsBySegment(segment: Segment): Observable<Car[]> {
  //   return this.http.get<Car[]>(`${this.apiUrl}/${segment}`);
  // }

  getSegments():Observable<Segments[]>{
    return this.http.get<Segments[]>("http://localhost:8080/testdrive/segments/get");
  }
  
  segid!:number;
  setSegId(id:number){
    this.segid=id;
  }
}
 