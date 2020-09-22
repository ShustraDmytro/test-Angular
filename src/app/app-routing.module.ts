import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignUpModule } from './sign-up/sign-up.module';
import { SignUpComponent } from './sign-up/components/sign-up/sign-up.component';
import { AuthGuard } from './guards/auth-guard.service';

const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuard] },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SignUpModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
