import {Component, LOCALE_ID, OnInit} from '@angular/core';
import {FormControl, UntypedFormGroup, Validators} from '@angular/forms';
import alertify from "alertifyjs";
import {RegService} from "../service/reg.service";
import {Router} from "@angular/router";
import moment from 'moment';
import {User} from "../model/User";
import {LoginService} from "../service/login.service";


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  providers: [
  ],
})
export class UserRegistrationComponent implements OnInit {
  registerForm: any;

  constructor(private router: Router, private service: LoginService) {

  }

  ngOnInit(): void {
  }
  goToRegTecPage(){
    this.router.navigate(['public-dashboard/register-teacher']);
  }
  regForm = new UntypedFormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    middleName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('',Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    role:new FormControl('',Validators.required),
    phone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  registerUser() {
    const rolesString: string = this.regForm.value.role;
    const phoneString: string = this.regForm.value.phone;
    let user: User = {
      id: this.regForm.value.id.toString(),
      name: this.regForm.value.name.toString(),
      firstName: this.regForm.value.firstName.toString(),
      middleName: this.regForm.value.middleName.toString(),
      lastName: this.regForm.value.lastName.toString(),
      gender: this.regForm.value.gender.toString(),
      email: this.regForm.value.email.toString(),
      allEducationInfo:[],//it will develop later
      roles: rolesString.split(" "),
      phones: phoneString.split(","),
      password: this.regForm.value.password
    };
    if(this.regForm.valid){
      console.log(user);
      this.service.submitReg(user).subscribe(item =>{
        this.router.navigate(['/admin-dashboard/add-user']);
      });
      alertify.success("Registration Successfully")
    }
    else
      alertify.error("Failed try again")
  }

}
