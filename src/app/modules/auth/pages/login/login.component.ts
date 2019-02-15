import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  onLogin() {
    const credentials = this.loginForm.value;
    this.authService.login(credentials).subscribe((result) => {
      this.setSession(result);
      this.router.navigate(['/dashboard/']);
    }, (err) => {
      console.log(err);
    });
  }

  private setSession(authResult) {
    if (authResult && authResult.access_token) {
      localStorage.setItem("poll_token", authResult.access_token);
      localStorage.setItem("poll_user", JSON.stringify(authResult.data.user));
    }
    // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  get f () {
    return this.loginForm.controls;
  }

  private initForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('hemant@gmail.com'),
      password: new FormControl('123456')
    });
  }

}
