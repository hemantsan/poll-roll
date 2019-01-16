import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/index';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './modules/auth/auth.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    NavbarComponent,
    FooterComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
