
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HumanResourcesComponent } from './human-resources.component';
import { UserGuard } from '../../services/user.guard';
import { Roles as userRole } from './../../class/roles';


const humanResourcesRoutes:Routes = [
  {
    path:'',component:HumanResourcesComponent,canActivate:[UserGuard],canActivateChild:[UserGuard],
    data: {userRoles: [userRole.ADMINISTRATOR,userRole.SUPER_ADMIN,userRole.HUMAN_RESOURCES],
      title:'Human Resources',urls:[{title:'Human Resources',url:'/human-resources'}] }
  }
]

@NgModule({
  imports: [
   RouterModule.forChild(humanResourcesRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class HumanResourcesRoutingModule { }
