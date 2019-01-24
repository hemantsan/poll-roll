import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { resolve, reject } from 'q';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.isLoggedIn);
        }, 500);
      }
    );
    return promise;
  }

  login(credentials: any): Observable<User> {
    let self = this;
    return this.apiService.get('users.json').pipe(
      map((user, index) => {
        if (this._handleLogin(credentials, user[index])) {
          this.isLoggedIn = true;
          this.router.navigate(['dashboard']);
          return user[index];
        };
      }),
      catchError((error) => { return error} )
      );
    // .pipe(
    //   map((data: Response)) => {
    //     data.filter(user => {
    //       if (this._handleLogin(credentials, user)) {
    //         self.users = user;
    //         this.isLoggedIn = true;
    //         return;
    //       }
    //     })
    //   },
    //   error => {
    //     console.log('errors ', error);
    //   }
    // );
    // this.router.navigate(['dashboard']);
  }

  _handleLogin(credentials: User, user) {
    if (user.email != credentials.email) {
      console.log('Username not found');
      return false;
    }
    else if (user.email == credentials.email && user.password != credentials.password) {
      console.log('Username and password did not match');
      return false;
    }
    return true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
