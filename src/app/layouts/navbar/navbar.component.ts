import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';
import { User } from '@app/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userName: string;
  pic: string;
  userInfo: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userInfo = this.authService.getCurrentUser();

    this.userName = this.userInfo.username;
    this.pic = this.userInfo.pic;
  }

  logout() {
    this.authService.logout();
  }
}
