import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private httpClient: HttpClient) { }

  private url: string = 'http://localhost:8080/';
  public tokenName : string = 'Course_Manager_Token';

  token = localStorage.getItem(this.tokenName);
  submitReg(user: User){
    console.log(this.token);
    return this.httpClient.post(this.url+"admin/create-new-user", user,  {headers: new HttpHeaders({Authorization: 'Bearer ' + this.token})});
  }
}
