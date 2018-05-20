import { UserGuard } from './../../services/user.guard';
import { PlaningComponent } from './planing.component';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Roles as userRole } from  './../../class/roles';


const planingRoutes:Routes = [
  {
    path:'',component:PlaningComponent,canActivate:[UserGuard],canActivateChild:[UserGuard],
    data: {userRoles: [userRole.ADMINISTRATOR,userRole.SUPER_ADMIN,userRole.BOARD_MEMBER,userRole.HUMAN_RESOURCES],
      title:'Planing',urls:[{title:'Planing',url:'/planing'}] }
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(planingRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class PlaningRoutingModule { }
