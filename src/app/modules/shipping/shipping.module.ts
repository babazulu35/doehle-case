import { ShippingComponent } from './shipping.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingRoutingModule } from './shipping-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ShippingRoutingModule,
    SharedModule
  ],
  declarations: [ShippingComponent]
})
export class ShippingModule { }
