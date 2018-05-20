import { UserGuard } from './../../services/user.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TransactionsComponent } from './transactions.component';
import { Roles as userRole } from './../../class/roles';

const transactionsRoutes:Routes = [
  {
    path:'',component:TransactionsComponent,canActivate:[UserGuard],canActivateChild:[UserGuard],
    data: {userRoles: [userRole.ADMINISTRATOR,userRole.SUPER_ADMIN,userRole.BOARD_MEMBER,userRole.ACCOUNTER],
      title:'Transactions',urls:[{title:'Transactions',url:'/transactions'}] }
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(transactionsRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class TransactionsRoutingModule { }
