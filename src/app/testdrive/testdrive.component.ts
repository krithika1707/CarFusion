import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestdriveserviceService } from '../testdriveservice.service';
;
import { Segments } from '../segments';
import { TestCarService } from '../test-car.service';

@Component({
  selector: 'app-testdrive',
  templateUrl: './testdrive.component.html',
  styleUrl: './testdrive.component.css'
})
export class TestdriveComponent implements OnInit{
  constructor(private router: Router,private service:TestdriveserviceService,private tservice:TestCarService) {}

  segment_id:number | any;
  segmentsarr:Segments[]=[];

  ngOnInit(): void {
    this.tservice.getSegments().subscribe(
      (response)=>{
        this.segmentsarr=response;
      },
      (e)=>{
        console.log("error while fetching segments");
      }
    )
  }

  goToCarModels(segment: string) {
    this.service.setSegmentId(1);
    this.service.getAllSegments().subscribe(e=>{
      console.log(e)
    })
    this.router.navigate([`/car-models/${segment}`]);
  }
   
  getid(id:number){
    this.segment_id=id;
    this.tservice.setSegId(id);
    console.log(this.segment_id); 
    this.router.navigate([`/car-models`]);
  }

}
