import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // Import ReactiveFormsModule for reactive forms

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import {LoginComponent} from "./login/login.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MaterialModule} from "../Material-Module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import { AdminDeshboardComponent } from './admin-deshboard/admin-deshboard.component';
import { StudentDeshboardComponent } from './student-deshboard/student-deshboard.component'; // Import UserRegistrationComponent

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    LoginComponent,
    AdminDeshboardComponent,
    StudentDeshboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
