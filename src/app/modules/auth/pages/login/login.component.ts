import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  onLogin() {
    this.authService.login();
    this.authService.isAuthenticated()
    .then(
      (authenticated: Boolean) => {
        console.log(authenticated);
      }
    );
  }

  get f () {
    return this.loginForm.controls;
  }

  private initForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('hemant@gmail.com'),
      password: new FormControl('')
    });
  }

}
