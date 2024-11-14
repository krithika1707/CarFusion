import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicedetailsComponent } from './servicedetails/servicedetails.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  { path: 'servicedetails', component: ServicedetailsComponent},  // New route for "Learn More"

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
