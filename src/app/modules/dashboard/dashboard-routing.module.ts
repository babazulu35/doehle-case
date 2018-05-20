

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { Roles as userRole } from './../../class/roles';
import { UserGuard } from '../../services/user.guard';


const dashboardRoutes:Routes = [
  {path:'',component:DashboardComponent,canActivate: [UserGuard],canActivateChild:[UserGuard],
   data: {userRoles: [userRole.ADMINISTRATOR,userRole.BOARD_MEMBER,userRole.CUSTOMER,userRole.SUPER_ADMIN,userRole.ACCOUNTER,userRole.HUMAN_RESOURCES],
          title:'Dashboard',urls:[{title:'Dashboard',url:'/dashboard'}] }}
]

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports:[RouterModule],
})
export class DashboardRoutingModule { }
