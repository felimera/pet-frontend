import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './modules/layout/body/body.component';
import { SidenavComponent } from './modules/layout/sidenav/sidenav.component';
import { DashboardComponent } from './modules/layout/dashboard/dashboard.component';
import { SettingsComponent } from './modules/layout/settings/settings.component';
import { AppInterceptorService } from './infrastructure/services/auth/app-interceptor.service';
import { UserLoginComponent } from './modules/layout/user/component/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    SettingsComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ToastrModule.forRoot({
      timeOut: 3000, // Time to close the toaster (in milliseconds)
      positionClass: 'toast-top-right', // Toast position
      closeButton: true, // Show close button
      progressBar: true, // Show progress bar
    }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
