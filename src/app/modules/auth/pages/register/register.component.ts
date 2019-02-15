import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '@app/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  onRegister() {
    const userData = this.registerForm.value;
    this.authService.register(userData).subscribe();
  }

  get f () {
    return this.registerForm.controls;
  }

  private initForm(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      email: new FormControl()
    });
  }

}
