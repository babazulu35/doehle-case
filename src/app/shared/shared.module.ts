import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarMenuComponent } from './layout/sidebar-menu/sidebar-menu.component';
import { ButtonComponent } from './components/button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { SharedService } from './services/shared.service';
import { RouterModule } from '@angular/router';
import { UserCardComponent } from './components/user-card/user-card.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NoDataComponent } from './components/no-data/no-data.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ButtonComponent,SidebarMenuComponent,NavigationComponent,UserCardComponent, BreadcrumbComponent, NoDataComponent],
  exports:[ButtonComponent,SidebarMenuComponent,NavigationComponent,UserCardComponent,BreadcrumbComponent,NoDataComponent],
  providers:[SharedService]
})
export class SharedModule { }
