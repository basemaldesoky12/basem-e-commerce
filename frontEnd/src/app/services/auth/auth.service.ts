import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AuthenticateService } from './authenticate.service';
import { map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { customer } from 'src/app/inetrfaces/customer';
import { admin } from 'src/app/inetrfaces/admin';
import { response } from 'express';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 url : string = 'http://localhost:3003/api/customers/addCustomer'
 helper = new JwtHelperService();
 customer : customer = {
 firstName : '',
 lastName : '',
 email : '',
 password : '',
 address : '',
 phone : '',
 city : '',
 postCode : ''
 }
 admin : admin = {
  email : '',
  password : ''
 }
  constructor(
    private http : HttpClient,
    private authenticate : AuthenticateService
  ) { }
addCustomer(data : any){
  return this.http.post(this.url,data)
}
login(data: any)
{
  
  return this.authenticate.authenticate(data).pipe(
    map((response:any)=>{
      const decodedToken = this.helper.decodeToken(response.token)
      this.customer.firstName = decodedToken.firstName
      localStorage.setItem('token',response.token)
      console.log(response.token)
    })
  )
}
adminLogin(data:any)
{
  return this.authenticate.authenticateAdmin(data).pipe(
    map((response:any)=>{
      const decodedToken = this.helper.decodeToken(response.token)
       this.admin.email = decodedToken.email
       localStorage.setItem('adminToken',response.token)
       console.log(response.token)
    })
  )
}
loggedIn() : boolean 
  {
    const token = localStorage.getItem('token')! 
    return !this.helper.isTokenExpired(token)
  }
  adminLoggedIn() : boolean 
  {
    const token = localStorage.getItem('adminToken')! 
    return !this.helper.isTokenExpired(token)
  }
logout()
  {
    localStorage.removeItem('token');
  }
  removeFromLocalStorage()
  {
    if(this.loggedIn()==false)
    {
        localStorage.removeItem('token');
    }
  }
  
}
