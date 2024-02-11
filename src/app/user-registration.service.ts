import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {
    return this.http.post<any>('http://localhost:8080/register', userData);
  }
}
