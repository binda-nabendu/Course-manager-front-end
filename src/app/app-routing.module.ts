import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDeshboardComponent} from "./admin-deshboard/admin-deshboard.component";
import {StudentDeshboardComponent} from "./student-deshboard/student-deshboard.component";
import {LoginComponent} from "./login/login.component";
import {AdminSpecialGuard} from "./guard/admin-special.guard";
import {StudentSpecialGuard} from "./guard/student-special.guard";

const routes: Routes = [
  {path: "admin-dashboard", component: AdminDeshboardComponent,
    children:[

    ], canActivate:[AdminSpecialGuard]
  },
  {path: "student-dashboard", component: StudentDeshboardComponent,
    children:[

    ], canActivate:[StudentSpecialGuard]
  },
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
