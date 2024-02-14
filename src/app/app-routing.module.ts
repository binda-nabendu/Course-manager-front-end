import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDeshboardComponent} from "./admin-deshboard/admin-deshboard.component";
import {StudentDeshboardComponent} from "./student-deshboard/student-deshboard.component";
import {LoginComponent} from "./login/login.component";
import {AdminSpecialGuard} from "./guard/admin-special.guard";
import {StudentSpecialGuard} from "./guard/student-special.guard";
import {UserRegistrationComponent} from "./user-registration/user-registration.component";

const routes: Routes = [
  {path: "admin-dashboard", component: AdminDeshboardComponent,
    children:[
      {path:"add-user", component: UserRegistrationComponent},
      {path:"update-user", component: UserRegistrationComponent},
      {path:"view-user", component: UserRegistrationComponent},
      {path:"all-course", component: UserRegistrationComponent},
      {path:"add-course", component: UserRegistrationComponent},
      {path:"course-list", component: UserRegistrationComponent},
      {path:"Assign-course", component: UserRegistrationComponent}
    ], canActivate:[AdminSpecialGuard]
  },
  {path: "student-dashboard", component: StudentDeshboardComponent,
    children:[
      {path:"board", component: UserRegistrationComponent},//I have to change it
      {path:"present-course", component: UserRegistrationComponent},//I have to change it
      {path:"request-for-a-course", component: UserRegistrationComponent}//I have to change it
    ], canActivate:[StudentSpecialGuard]
  },
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
