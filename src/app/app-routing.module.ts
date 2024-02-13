import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDeshboardComponent} from "./admin-deshboard/admin-deshboard.component";
import {StudentDeshboardComponent} from "./student-deshboard/student-deshboard.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: "admin-dashboard", component: AdminDeshboardComponent},
  {path: "student-dashboard", component: StudentDeshboardComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
