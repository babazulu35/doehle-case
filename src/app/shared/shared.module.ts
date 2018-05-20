import { SidebarMenuComponent } from './layout/sidebar-menu/sidebar-menu.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ButtonComponent } from './components/button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './layout/navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent,TextInputComponent,SidebarMenuComponent,NavigationComponent],
  exports:[ButtonComponent,TextInputComponent,SidebarMenuComponent,NavigationComponent]
})
export class SharedModule { }
