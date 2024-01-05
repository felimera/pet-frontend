import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './modules/layout/body/body.component';
import { SidenavComponent } from './modules/layout/sidenav/sidenav.component';
import { DashboardComponent } from './modules/layout/dashboard/dashboard.component';
import { ProductsComponent } from './modules/layout/products/products.component';
import { StatisticsComponent } from './modules/layout/statistics/statistics.component';
import { CoupensComponent } from './modules/layout/coupens/coupens.component';
import { PagesComponent } from './modules/layout/pages/pages.component';
import { MediaComponent } from './modules/layout/media/media.component';
import { SettingsComponent } from './modules/layout/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
