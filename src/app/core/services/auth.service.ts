import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { resolve, reject } from "q";
import { map, catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { ApiService } from "./api.service";
import { Observable, throwError, of } from "rxjs";
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isLoggedIn = false;

  constructor(private router: Router, private apiService: ApiService) {}

  isAuthenticated(): Observable<any> {
    return of(localStorage.getItem('poll_token'));
  }

  isLoggedOut() {
    return !this.isAuthenticated();
  }

  login(credentials: any): Observable<any> {
    return this.apiService.post("users/do-login", credentials).pipe(
      map((response: User) => this.setSession(response)),
      catchError(error => {
        return error;
      })
    );
  }

  logout() {
    localStorage.removeItem("poll_token");
    localStorage.removeItem("poll_user");
    this.router.navigate(['./auth/login']);
  }

  private setSession(authResult) {
    if (authResult && authResult.data.token) {
      localStorage.setItem("poll_token", authResult.data.token);
      localStorage.setItem("poll_user", JSON.stringify(authResult.data.user));
      this.router.navigate(['./dashboard']);
    }
    // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('poll_user'));
  }
}
