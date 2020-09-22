import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../models/user.model';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { delay } from 'rxjs/operators';

@Injectable()
export class Registration {
  constructor(private http: HttpClient) {}

  public createUser(userData: IUser): Observable<IUser> {
    return this.http
      .post<IUser>(env.apiUrl + env.endpoints.users, userData)
      .pipe(delay(2000));
  }
}
