import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(credentials: any) {
    return this.http.post<any>('http://localhost:8080/login', credentials);
  }
}
