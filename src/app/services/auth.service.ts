import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';

@Injectable()
export class AuthService {
  public isAuthenticated(): boolean {
    const user = localStorage.getItem('user');

    return !!user;
  }

  public set user(user: IUser) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public get user(): IUser {
    const user = localStorage.getItem('user');
    return this.isAuthenticated() ? JSON.parse(user) : {};
  }
}
