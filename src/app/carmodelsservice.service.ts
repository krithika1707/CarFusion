import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestDrive } from './models';
import { TestdriveserviceService } from './testdriveservice.service';
import { TestCarService } from './test-car.service';


@Injectable({
  providedIn: 'root'
})
export class CarmodelsserviceService {

  constructor(private http: HttpClient,private testcarservice:TestCarService) { }

  private url="http://localhost:8080/testdrive/search";

  // getTestDrives(): Observable<TestDrive[]> {
  //   return this.http.get<TestDrive[]>("http://localhost:8080/testdrive/segments/get");
  // }

  // getCarsBySegment(segment_id: number): Observable<TestDrive[]> {
  //   return this.http.get<TestDrive[]>("http://localhost:8080/testdrive/search?ids="+segment_id);
  // }


  getCarModels():Observable<TestDrive[]>{
    return this.http.get<TestDrive[]>(`${this.url}?ids=${this.testcarservice.segid}`);
  }

  

}
