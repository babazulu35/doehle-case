import { SharedModule } from './../../shared/shared.module';
import { ManageUsersRoutingModule } from './manage-users-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './manage-users.component';
import { ManageUsersListComponent } from './components/manage-users-list/manage-users-list.component';
import { ManageUsersService } from './services/manage-users.service';

@NgModule({
  imports: [
    CommonModule,
    ManageUsersRoutingModule,
    SharedModule
  ],
  declarations: [ManageUsersComponent, ManageUsersListComponent],
  providers:[ManageUsersService]
})
export class ManageUsersModule { }
