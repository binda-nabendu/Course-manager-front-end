import { Component, OnInit } from '@angular/core';
import * as alertify from "alertifyjs";
import {Router} from "@angular/router";
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router : Router, private service: LoginService) {
  }
  private t: string = "hei ";
  ngOnInit(): void {

  }
  respond:any;
  checkValidate(userDetails:any){
    if(userDetails.valid){
      localStorage.clear();
      this.service.proceedLogin(userDetails.value).subscribe(response => {
        this.respond = response;
        // console.log(response);

        if(this.respond != null){
          localStorage.setItem('Course_Manager_Token',this.respond.jwtToken);//here jwtToken is the key name of that token
          console.log(this.service.getAllRoles());
          let p = this.service.getAllRoles();

          let is_admin = false;
          for(let t = 0; t < p.length; t++){
            const authority = p[t].authority;
            if(authority == 'ROLE_ADMIN'){
              is_admin = true
            }
          }
          if (!is_admin)
            this.router.navigate(["/student-dashboard"]);
          else
            this.router.navigate(["/admin-dashboard"]);
        }else{
          alertify.error("Fail to login")
        }
      }, error=>{
        alertify.error("Fail to login");
      });
    }
    else
      alertify.error("Fail to login")

  }
  goToRegPage(){
    this.router.navigate(['public-dashboard/register-student']);
  }
}
