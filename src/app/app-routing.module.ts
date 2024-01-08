import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/layout/dashboard/dashboard.component';
import { ProductsComponent } from './modules/layout/products/products.component';
import { StatisticsComponent } from './modules/layout/statistics/statistics.component';
import { CoupensComponent } from './modules/layout/coupens/coupens.component';
import { PagesComponent } from './modules/layout/pages/pages.component';
import { MediaComponent } from './modules/layout/media/media.component';
import { SettingsComponent } from './modules/layout/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'coupens', component: CoupensComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'media', component: MediaComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
