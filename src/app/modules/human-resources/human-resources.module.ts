import { SharedModule } from './../../shared/shared.module';
import { HumanResourcesRoutingModule } from './human-resources-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumanResourcesComponent } from './human-resources.component';

@NgModule({
  imports: [
    CommonModule,
    HumanResourcesRoutingModule,
    SharedModule
  ],
  declarations: [HumanResourcesComponent]
})
export class HumanResourcesModule { }
