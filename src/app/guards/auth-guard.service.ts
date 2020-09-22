import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, public router: Router) {}

  public canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['sign-up']);

      return false;
    }
    return true;
  }
}
