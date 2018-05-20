import { UserGuard } from './../../services/user.guard';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { RouterModule } from '@angular/router';
import { Roles as userRole } from './../../class/roles';

const companyRoutes:Routes = [
  {
    path:'',component:CompanyComponent,canActivate:[UserGuard],canActivateChild:[UserGuard], 
    data: {userRoles: [userRole.ADMINISTRATOR,userRole.BOARD_MEMBER,userRole.CUSTOMER,userRole.SUPER_ADMIN],title:'Company',urls:[{title:'Company',url:'/company'}] }
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(companyRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class CompanyRoutingModule { }
