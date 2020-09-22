import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { phoneValidator } from './validators/phone';
import { emailValidator } from './validators/email';
import { Registration } from '../../services/registration.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  public pending: boolean;
  public registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private registration: Registration,
    private auth: AuthService
  ) {
    this.pending = false;
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      userName: ['', Validators.required],
      phone: ['', [Validators.required, phoneValidator]],
      email: ['', [Validators.required, emailValidator]],
      address: this.fb.group({
        street: [''],
        suite: [''],
        city: [''],
        zipcode: [''],
      }),
    });
  }

  public onSubmit(): void {
    this.pending = true;

    this.registration.createUser(this.registerForm.value).subscribe(
      (user) => {
        this.auth.user = user;
      },
      (error) => console.error('There was an error!', error),
      () => {
        this.pending = false;
      }
    );
  }
}
