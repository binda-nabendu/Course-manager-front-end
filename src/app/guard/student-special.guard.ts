import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../service/login.service";

@Injectable({
  providedIn: 'root'
})
export class StudentSpecialGuard implements CanActivate {
  constructor(private service: LoginService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let p = this.service.getAllRoles();

    let is_admin = false;
    for(let t = 0; t < p.length; t++){
      const authority = p[t].authority;
      if(authority == 'ROLE_ADMIN'){
        is_admin = true
      }
    }

    return !is_admin;
  }

}
