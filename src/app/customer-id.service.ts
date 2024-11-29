import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerIdService {

  constructor() { }
  private customer_id!: number;

  setCustomerId(id: number) {
    this.customer_id = id;
  }

  getCustomerId(): number | null {
    return this.customer_id;
  }
}
