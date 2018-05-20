import { UserGuard } from './../../services/user.guard';
import { QualityComponent } from './quality.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { Roles as userRole } from  './../../class/roles';

const qualityRoutes:Routes = [
  {
    path:'',component:QualityComponent,canActivate:[UserGuard],canActivateChild:[UserGuard],
    data: {userRoles: [userRole.ADMINISTRATOR,userRole.SUPER_ADMIN,userRole.BOARD_MEMBER,userRole.ACCOUNTER],
      title:'Quality',urls:[{title:'Quality',url:'/quality'}] }

  }
]

@NgModule({
  imports: [
    RouterModule.forChild(qualityRoutes)
    
  ],
  declarations: [],
  exports:[RouterModule]
})
export class QualityRoutingModule { }
