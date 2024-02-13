import {Component, HostBinding} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-admin-deshboard',
  templateUrl: './admin-deshboard.component.html',
  styleUrl: './admin-deshboard.component.css'
})
export class AdminDeshboardComponent {
  @HostBinding('class.navbar-opened') navbarOpened = false;
  @HostBinding('class.navbar-opened') sidebarOpened = false;

  constructor(private router: Router, private service: LoginService) {
  }

  ngOnInit(): void {
    this.username = 'Admin Id: ' + this.service.getId();
    this.router.navigate(['/admin-dashboard/']);
  }

  username: any;
  li1 = false;
  li2 = false;
  li3 = false;
  li4 = false;
  li5 = false;

  enableSubMenu() {
    this.li1 = false;
    this.li2 = false;
    this.li3 = false;
    this.li4 = false;
    this.li5 = false;

  }

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }

  // navbarOpened: any;
  logOut() {
    this.service.LoggedOut();
    this.router.navigate(["/login"]);
  }
}
