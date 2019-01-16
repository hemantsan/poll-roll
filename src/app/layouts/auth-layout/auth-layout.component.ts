import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-auth-layout",
  templateUrl: "./auth-layout.component.html",
  styleUrls: ["./auth-layout.component.scss"]
})

export class AuthLayoutComponent implements OnInit {
  currentUrl: string = '';

  constructor(private route: Router) {
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd ) {
        this.currentUrl = event.url;
      }
    });
  }

  ngOnInit() {}
}
