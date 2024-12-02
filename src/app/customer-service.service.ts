import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  cid!:number;
  constructor() { }

  private customer_mail_id!: string;
  private customer_name!: string;
  private mobile_number!: string;
  private password!: string;
  private customer_id!: number;


  setCustomerMailId(mailId: string) {
    this.customer_mail_id = mailId;
  }

  setCustomerName(name: string) {
    this.customer_name = name;
  }

  setMobileNumber(number: string) {
    this.mobile_number = number;
  }

  setPassword(password: string) {
    this.password = password;
  }

  setCustomerId(id: number) {
    this.customer_id = id;
    this.cid=id;
  }

  // Getter methods (optional, if you need to retrieve values)
  getCustomerMailId() {
    return this.customer_mail_id;
  }

  getCustomerName() {
    return this.customer_name;
  }

  getMobileNumber() {
    return this.mobile_number;
  }

  getPassword() {
    return this.password;
  }

  getCustomerId() {
    return this.customer_id;
  }
}
