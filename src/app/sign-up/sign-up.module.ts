import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CloseButtonComponent } from './components/close-button/close-button.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { Registration } from './services/registration.service';

@NgModule({
  declarations: [
    RegistrationFormComponent,
    SignUpComponent,
    CloseButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    InputTextModule,
    ButtonModule,
  ],
  providers: [
    Registration
  ],
  exports: [SignUpComponent],
})
export class SignUpModule {}
