import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
    .then(
      (isLoggedIn: boolean) => {
        if (isLoggedIn) {
          return true;
        }
        else {
          this.router.navigate(['auth/login']);
        }
      }
    )
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
    .then(
      (isLoggedIn: boolean) => {
        if (isLoggedIn) {
          return true;
        }
        this.router.navigate(['auth/login']);
      }
    )
  }
}
