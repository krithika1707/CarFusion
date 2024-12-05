import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  
  constructor(private access:HttpClient) { }

getAllSegments():Observable<any>{
{
//return this.access.get(`${this.url}ids=${this.getSegmentId()}`)

return this.access.get("http://localhost:8080/testdrive/search/ids=?");

}
}
 }
