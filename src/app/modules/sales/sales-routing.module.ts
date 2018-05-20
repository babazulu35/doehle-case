import { UserGuard } from './../../services/user.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { Routes,RouterModule  } from '@angular/router';
import { Roles as userRole } from './../../class/roles';

const salesRoutes:Routes = [
  {
    path:'',component:SalesComponent,canActivate:[UserGuard],canActivateChild:[UserGuard],
    data: {userRoles: [userRole.ADMINISTRATOR,userRole.SUPER_ADMIN,userRole.ACCOUNTER],
      title:'Sales',urls:[{title:'Sales',url:'/sales'}] }
  }
]

@NgModule({
  imports: [
      RouterModule.forChild(salesRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class SalesRoutingModule { }
