import { PlaningComponent } from './planing.component';
import { PlaningRoutingModule } from './planing-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PlaningRoutingModule,
    SharedModule
  ],
  declarations: [PlaningComponent]
})
export class PlaningModule { }
