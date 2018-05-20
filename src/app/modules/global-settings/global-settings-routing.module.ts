import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsComponent } from './global-settings.component';
import { UserGuard } from '../../services/user.guard';
import { Roles as userRole } from  './../../class/roles';
import { RouterModule } from '@angular/router';

const globalSettingsRoutes:Routes = [
  {
    path:'',component:GlobalSettingsComponent,canActivate:[UserGuard],canActivateChild:[UserGuard],
    data: {userRoles: [userRole.ADMINISTRATOR,userRole.SUPER_ADMIN,userRole.ACCOUNTER,userRole.CUSTOMER,userRole.BOARD_MEMBER,userRole.HUMAN_RESOURCES],
      title:'Global Settings',urls:[{title:'Global Settings',url:'/global-settings'}] }
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(globalSettingsRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class GlobalSettingsRoutingModule { }
