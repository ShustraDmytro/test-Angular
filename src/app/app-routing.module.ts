import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RegistrationFormComponent} from './sign-up/registration-form/registration-form.component';
import {AppComponent} from './app.component';
import {SignUpModule} from './sign-up/sign-up.module';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'sign-up', component: RegistrationFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SignUpModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
