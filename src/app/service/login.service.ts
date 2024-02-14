import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "../model/User";

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
  token = localStorage.getItem(this.tokenName);
  private headers:HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + this.token
  });
  private requestOptions = {
    headers: this.headers,
    withCredentials: true, // Set this to true if you are using credentials
  };
  submitReg(user: User): Observable<User>{
    console.log(this.token);
    return this.httpClient.post<User>(this.url+"admin/create-new-user", JSON.stringify(user), this.requestOptions);
  }
}
