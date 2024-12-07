import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Segments } from '../segments';
import { Testdrivemodels } from '../testdrivemodels';

@Injectable({
  providedIn: 'root'
})
export class TestdriveServiceService {

  constructor(private http:HttpClient) { }

    private url="http://localhost:8080";

    fetchSegments():Observable<Segments[]>{
      return this.http.get<Segments[]>(`${this.url}/segments/get`);
    }

   segment_id!:number;
   setSegmentId(id:number){
    this.segment_id=id;
   }
}
