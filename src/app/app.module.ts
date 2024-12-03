// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarModelsComponent } from './car-models/car-models.component';  // Import your components

@NgModule({
  declarations: [
    AppComponent,
    CarModelsComponent  
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
