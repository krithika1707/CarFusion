import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  storeCustomerId(customerId: number): void {
    localStorage.setItem('customerId', customerId.toString());
  }


  getCustomerId(): string | null {
    return localStorage.getItem('customerId');
  }

}
