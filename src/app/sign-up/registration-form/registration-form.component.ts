import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  });
  loading: boolean;
  submitted: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  // convenience getter for easy access to form fields
  get controls(): any {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.loading = true;
    console.log('yo');
  }
}
