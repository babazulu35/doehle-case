import { AccountComponent } from './account.component';
import { NgModule } from '@angular/core';
import { Routes,RouterModule  } from '@angular/router';
import { UserGuard } from '../../services/user.guard';
import { Roles as userRole } from  './../../class/roles';

const accountRoutes:Routes = [ 
  {
    path:'',component:AccountComponent,canActivate:[UserGuard],canActivateChild:[UserGuard],
    data: {userRoles: [userRole.ADMINISTRATOR,userRole.SUPER_ADMIN,userRole.ACCOUNTER,userRole.BOARD_MEMBER],
      title:'Account',urls:[{title:'Account',url:'/account'}] }

  }
]

@NgModule({
  imports: [
    RouterModule.forChild(accountRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AccountRoutingModule { }
