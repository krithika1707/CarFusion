import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Removed provideClientHydration, this is likely unnecessary
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicedetailsComponent } from './servicedetails/servicedetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarResaleComponent } from './car-resale/car-resale.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { TestdriveComponent } from './testdrive/testdrive.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicedetailsComponent,
    CarResaleComponent,
    CartComponent,
    LoginComponent,
    TestdriveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
