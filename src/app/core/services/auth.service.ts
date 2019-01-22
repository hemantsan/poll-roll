import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { resolve, reject } from 'q';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

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

  login() {
    // this.isLoggedIn = true;
    this.apiService.get('users.json').subscribe(
      (data) => {
        data.filter(user => {
          console.log(data);
          return data[0].email.indexOf(user.email)  > -1;
        })
      }
    );
    // this.router.navigate(['dashboard']);
  }

  logout() {
    this.isLoggedIn = false;
  }
}
