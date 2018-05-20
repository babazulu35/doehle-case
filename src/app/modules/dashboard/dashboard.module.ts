
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardItemComponent } from './components/board-item.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [BoardItemComponent,DashboardComponent]
})
export class DashboardModule { }
