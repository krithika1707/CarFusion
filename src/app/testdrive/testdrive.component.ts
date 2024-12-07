import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestdriveServiceService } from './testdrive-service.service';
import { Segments } from '../segments';


@Component({
  selector: 'app-testdrive',
  templateUrl: './testdrive.component.html',
  styleUrl: './testdrive.component.css'
})
export class TestdriveComponent implements OnInit{

  segments:Segments[]=[];
  segment_id!:number;

  constructor(private router:Router,private tservice:TestdriveServiceService){
    
  }
  ngOnInit(): void {
    this.tservice.fetchSegments().subscribe(
      (e)=>{
        this.segments=e;
       
        
      }
    )
  }
  goToCarModels(segment:String)
  {
   // this.router.navigate([`/testdrivemodels`]);
  
  }
  store(id:number){
    this.segment_id=id;
    console.log(id);
    this.tservice.setSegmentId(id);
    this.router.navigateByUrl("/testdrivemodels");
  }


}
