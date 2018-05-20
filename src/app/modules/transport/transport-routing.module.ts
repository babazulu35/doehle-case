import { TransportComponent } from './transport.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { UserGuard } from '../../services/user.guard';
import { Roles as userRole } from  './../../class/roles';

const transportRoutes:Routes = [{
  path:'',component:TransportComponent,canActivate:[UserGuard],canActivateChild:[UserGuard],
  data: {userRoles: [userRole.ADMINISTRATOR,userRole.SUPER_ADMIN,userRole.BOARD_MEMBER,userRole.HUMAN_RESOURCES],
    title:'Transport',urls:[{title:'Transport',url:'/transport'}] }

}]

@NgModule({
  imports: [
    RouterModule.forChild(transportRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class TransportRoutingModule { }
