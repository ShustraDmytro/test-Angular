import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {SignUpModule} from './sign-up/sign-up.module';
import {SignUpComponent} from './sign-up/components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'sign-up', component: SignUpComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SignUpModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
