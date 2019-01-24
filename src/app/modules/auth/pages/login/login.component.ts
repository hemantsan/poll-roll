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
    const credentials = this.loginForm.value;
    this.authService.login(credentials).subscribe(
      res => {
        console.log(res);
      }
    );
  }

  get f () {
    return this.loginForm.controls;
  }

  private initForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('hemant@gmail.com'),
      password: new FormControl('12345')
    });
  }

}
