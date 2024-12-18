import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicedetailsComponent } from './servicedetails/servicedetails.component';
import { CarResaleComponent } from './car-resale/car-resale.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { TestdriveComponent } from './testdrive/testdrive.component';
import { CarmodelsComponent } from './carmodels/carmodels.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home', component:HomeComponent},
  { path: 'servicedetails', component: ServicedetailsComponent}, 
  {path:'carresale',component: CarResaleComponent},
  {path:'cart',component: CartComponent},
  {path:'testdrive',component:TestdriveComponent},
  { path: 'car-models/:segment', component: CarmodelsComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }