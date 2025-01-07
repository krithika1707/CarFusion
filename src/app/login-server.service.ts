import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerDetails } from './login/customer-details';

@Injectable({
  providedIn: 'root'
})
export class LoginServerService {
url:string="http://localhost:8080/users/signin/add"
login_url:string="http://localhost:8080/users/login/go"

  constructor(private access:HttpClient) { 

  }
  addUsers(datas:CustomerDetails){

    return this.access.post(this.url,datas).subscribe(e=>{
      console.log(e);
    })
  }
  checkLogin(details:any)
  {
    return this.access.post<any>(this.login_url,details);
  }
}
