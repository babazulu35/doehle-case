import { SharedModule } from './../../shared/shared.module';
import { GlobalSettingsRoutingModule } from './global-settings-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsComponent } from './global-settings.component';

@NgModule({
  imports: [
    CommonModule,
    GlobalSettingsRoutingModule,
    SharedModule
  ],
  declarations: [GlobalSettingsComponent]
})
export class GlobalSettingsModule { }
