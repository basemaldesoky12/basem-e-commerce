import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {
  constructor(private user : AuthService,public router :Router,){}
  canActivate() : boolean
  {
     if (this.user.loggedIn()==false)
     {
       this.router.navigate(['login'])
       localStorage.removeItem('token')
       return false 
     }
     else
     {
       return true 
     }
    
  }
  
}
