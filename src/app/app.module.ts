import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './modules/layout/body/body.component';
import { SidenavComponent } from './modules/layout/sidenav/sidenav.component';
import { DashboardComponent } from './modules/layout/dashboard/dashboard.component';
import { SettingsComponent } from './modules/layout/settings/settings.component';
import { AppInterceptorService } from './infrastructure/services/auth/app-interceptor.service';
import { UserLoginComponent } from './modules/layout/user/component/user-login/user-login.component';
import { CustomersComponent } from './modules/layout/customers/customers.component';
import { RegisterPetOwnerComponent } from './modules/layout/customers/component/register-pet-owner/register-pet-owner.component';
import { RegisterPetComponent } from './modules/layout/customers/component/register-pet/register-pet.component';
import { SearchPetOwnerComponent } from './modules/layout/customers/component/search-pet-owner/search-pet-owner.component';
import { ColorComponent } from './modules/layout/customers/component/color/color.component';
import { BodySizeComponent } from './modules/layout/customers/component/body-size/body-size.component';
import { TypeFigureComponent } from './modules/layout/customers/component/type-figure/type-figure.component';
import { PetCategoryComponent } from './modules/layout/customers/component/pet-category/pet-category.component';
import { MassMeasurementUnitsComponent } from './modules/layout/customers/component/mass-measurement-units/mass-measurement-units.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    SettingsComponent,
    UserLoginComponent,
    CustomersComponent,
    RegisterPetOwnerComponent,
    RegisterPetComponent,
    SearchPetOwnerComponent,
    ColorComponent,
    BodySizeComponent,
    TypeFigureComponent,
    PetCategoryComponent,
    MassMeasurementUnitsComponent
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
    MatTabsModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatListModule,
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
