import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  registerForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      // Add more form controls as needed
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Submit the form data to the backend
      const formData = this.registerForm.value;
      console.log(formData);
      // You can call your service to send data to the backend here
    } else {
      // Mark all form controls as touched to show validation errors
      this.registerForm.markAllAsTouched();
    }
  }

}
