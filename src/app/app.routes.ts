import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestDriveComponent } from './test-drive/test-drive.component';
import { CarModelsComponent } from './car-models/car-models.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'test-drive', component: TestDriveComponent },
    { path: 'car-models/:segment', component: CarModelsComponent },
  
];
