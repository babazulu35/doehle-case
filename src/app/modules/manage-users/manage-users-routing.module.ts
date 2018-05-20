
import { NgModule } from '@angular/core';
import { UserGuard } from './../../services/user.guard';
import { Routes, RouterModule } from '@angular/router';
import { ManageUsersComponent } from './manage-users.component';
import { Roles as userRole } from '../../class/roles';



const manageUsersRoutes:Routes = [
  {
    path:'',component:ManageUsersComponent,canActivate:[UserGuard],canActivateChild:[UserGuard],
    data: {userRoles: [userRole.ADMINISTRATOR,userRole.SUPER_ADMIN],
      title:'Manage Users',urls:[{title:'Manage Users',url:'/manage-users'}] }
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(manageUsersRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class ManageUsersRoutingModule { }
