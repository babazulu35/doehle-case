import { SharedModule } from './../../shared/shared.module';
import { QualityRoutingModule } from './quality-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualityComponent } from './quality.component';

@NgModule({
  imports: [
    CommonModule,
    QualityRoutingModule,
    SharedModule
  ],
  declarations: [QualityComponent]
})
export class QualityModule { }
