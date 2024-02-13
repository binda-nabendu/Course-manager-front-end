import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-student-deshboard',
  templateUrl: './student-deshboard.component.html',
  styleUrl: './student-deshboard.component.css'
})
export class StudentDeshboardComponent implements OnInit{

  @HostBinding('class.navbar-opened') navbarOpened = false;
  @HostBinding('class.navbar-opened') sidebarOpened = false;
  constructor(private router: Router, private service: LoginService) {
  }
  ngOnInit(): void {
    this.username = 'Student Id: '+this.service.getId();
    this.router.navigate(['student/student-dashboard/board']);
  }
  username:any;
  li1=false; li2=false; li3= false;
  enableSubMenu(){
    this.li1=false; this.li2=false; this.li3=false;

  }
  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }
  // navbarOpened: any;

  logOut() {
    this.service.LoggedOut();
    this.router.navigate(["login"]);
  }
}
