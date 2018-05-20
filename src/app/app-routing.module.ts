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
    canActivateChild: [UserGuard],
    children:[
      {
        path:  '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
        data: {userRoles: [userRole.ADMINISTRATOR,userRole.BOARD_MEMBER,userRole.CUSTOMER,userRole.SUPER_ADMIN] }
    },
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

