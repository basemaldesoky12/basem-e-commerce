import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedAdminGuard implements CanActivate {
  constructor(private admin : AuthService,public router :Router,){}
  canActivate() : boolean
  {
     if (this.admin.adminLoggedIn()==false)
     {
       this.router.navigate(['login'])
       localStorage.removeItem('adminToken')
       return false 
     }
     else
     {
       return true 
     }
    
  }
  
}
