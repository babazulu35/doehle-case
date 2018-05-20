import { IndexComponent } from './shared/index/index.component';
import { UserGuard } from './services/user.guard';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Roles as userRole } from './class/roles';
const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [UserGuard],
    children:[
      {
        path:  '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
          path: 'dashboard',
          loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
      },
      {
        path:'company',
        loadChildren: './modules/company/company.module#CompanyModule'
      },
      {
        path:'manage-users',
        loadChildren: './modules/manage-users/manage-users.module#ManageUsersModule'
      },
      {
        path:'human-resources',
        loadChildren:'./modules/human-resources/human-resources.module#HumanResourcesModule'
      },
      {
        path:'sales',
        loadChildren:'./modules/sales/sales.module#SalesModule'
      },
      {
        path:'transactions',
        loadChildren:'./modules/transactions/transactions.module#TransactionsModule'
      },
      {
        path:'products',
        loadChildren:'./modules/products/products.module#ProductsModule'
      },
      {
        path:'global-settings',
        loadChildren:'./modules/global-settings/global-settings.module#GlobalSettingsModule'
      },
      {
        path:'account',
        loadChildren: './modules/account/account.module#AccountModule'
      },
      {
        path:'transport',
        loadChildren: './modules/transport/transport.module#TransportModule'
      },
      {
        path:'quality',
        loadChildren: './modules/quality/quality.module#QualityModule'
      },
      {
        path:'shipping',
        loadChildren: './modules/shipping/shipping.module#ShippingModule'
      },
      {
        path:'planing',
        loadChildren: './modules/planing/planing.module#PlaningModule'
      }
    ]
},
  { path:'login', loadChildren:'./modules/login/login.module#LoginModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }

