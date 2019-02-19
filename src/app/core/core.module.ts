import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthGuardService } from "./guards/auth-guard.service";
import { TokenInterceptorService } from "./interceptors/token-interceptor.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {}
