import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
 url ='http://localhost:3003/api/auth/login'
 adminUrl = 'http://localhost:3003/api/auth/adminLogin'
  constructor(private http : HttpClient) { }
  authenticate(data : any)
  {
   
    return this.http.post(this.url,data)
  }
  authenticateAdmin(data:any)
  {
    return this.http.post(this.adminUrl,data)
  }
}
