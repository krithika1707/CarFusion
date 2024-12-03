import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-test-drive',
  standalone: true,
  imports: [],
  templateUrl: './test-drive.component.html',
  styleUrl: './test-drive.component.css'
})
export class TestDriveComponent {

  constructor(private router: Router) {}

  goToCarModels(segment: string) {
    this.router.navigate([`/car-models/${segment}`]);
  }
}
