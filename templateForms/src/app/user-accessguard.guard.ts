import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAccessguardGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      console.log("login Name in authguard : " + sessionStorage.getItem("loginName"));
      console.log("Mobile in authguard : " + sessionStorage.getItem("mobile"));
      if(sessionStorage.getItem("loginName") != null && sessionStorage.getItem("mobile") != null ){
        return true;
      }
      else {
        this.router.navigate(['']) ;
        return false;
      }
    
  }
  
}
