import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestdriveserviceService } from '../testdriveservice.service';

@Component({
  selector: 'app-testdrive',
  templateUrl: './testdrive.component.html',
  styleUrl: './testdrive.component.css'
})
export class TestdriveComponent {
  constructor(private router: Router,private service:TestdriveserviceService) {}

  goToCarModels(segment: string) {
    this.service.setSegmentId(1);
    this.service.getAllSegments().subscribe(e=>{
      console.log(e)
    })
    this.router.navigate([`/car-models/${segment}`]);
  }
}
