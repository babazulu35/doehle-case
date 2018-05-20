import { UserGuard } from './../../services/user.guard';
import { ShippingComponent } from './shipping.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule} from '@angular/router';
import { Roles as userRole } from  './../../class/roles';

const shippingRoutes:Routes = [ {
  path:'',component:ShippingComponent,canActivate:[UserGuard],canActivateChild:[UserGuard],
  data: {userRoles: [userRole.ADMINISTRATOR,userRole.SUPER_ADMIN,userRole.BOARD_MEMBER],
    title:'Shipping',urls:[{title:'Shipping',url:'/shipping'}] }
}]

@NgModule({
  imports: [
    RouterModule.forChild(shippingRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class ShippingRoutingModule { }
