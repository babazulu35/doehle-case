import { SharedModule } from './../../shared/shared.module';
import { TransportComponent } from './transport.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportRoutingModule } from './transport-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TransportRoutingModule,
    SharedModule
  ],
  declarations: [TransportComponent]
})
export class TransportModule { }
