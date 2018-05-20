
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGuard } from '../../services/user.guard';
import { Roles as userRole } from  './../../class/roles';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';

const productsRoutes:Routes = [
  {
    path:'',component:ProductsComponent,canActivate:[UserGuard],canActivateChild:[UserGuard],
    data: {userRoles: [userRole.ADMINISTRATOR,userRole.SUPER_ADMIN,userRole.BOARD_MEMBER,userRole.ACCOUNTER],
      title:'Products',urls:[{title:'Products',url:'/products'}] }
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(productsRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class ProductsRoutingModule { }
