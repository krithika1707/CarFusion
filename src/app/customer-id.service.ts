import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerIdService {

  constructor() { }
  private customer_id!: string;

  setCustomerId(id: string) {
    this.customer_id = id;
  }

  getCustomerId(): string | null {
    return this.customer_id;
  }
}
