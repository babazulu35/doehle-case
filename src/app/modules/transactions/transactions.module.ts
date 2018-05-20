import { SharedModule } from './../../shared/shared.module';
import { TransactionsComponent } from './transactions.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsRoutingModule } from './transactions-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    SharedModule
  ],
  declarations: [TransactionsComponent]
})
export class TransactionsModule { }
