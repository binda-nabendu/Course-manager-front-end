import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  private url: string = 'http://localhost:8080/';
  public tokenName : string = 'Course_Manager_Token';

  proceedLogin(user: any): Observable<any> {
    return this.httpClient.post(this.url + 'authenticate', user);
  }

  getId(): string {
    let token = localStorage.getItem(this.tokenName);

    if (token !== null) {
      const payload = JSON.parse(atob(token.split('.')[1]));

      if (payload && typeof payload.sub === 'string') {
        return payload.sub;
      }
    }

    return '';
  }
  LoggedOut(){
    // while(localStorage.getItem('OEMSToken') != null)
    localStorage.removeItem(this.tokenName);
  }
  getAllRoles(): any {
    const token = localStorage.getItem(this.tokenName);
    // console.log(token);

    if (token) {
      const decodedToken = this.decodeToken(token);

      if (decodedToken && decodedToken.role) {
        return this.extractRoles(decodedToken.role);
      }
    }

    return [];
  }

  private decodeToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  private extractRoles(roleClaim: any): string[] {
    const roles: string[] = [];

    if (typeof roleClaim === 'string') {
      roles.push(roleClaim);
    } else if (Array.isArray(roleClaim)) {
      roles.push(...roleClaim);
    } else if (typeof roleClaim === 'object') {
      for (const key in roleClaim) {
        if (roleClaim.hasOwnProperty(key)) {
          roles.push(roleClaim[key]);
        }
      }
    }

    return roles;
  }
}
