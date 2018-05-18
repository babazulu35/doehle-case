


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';



@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
  ],
  declarations: [LoginComponent,LoginFormComponent, PasswordRecoveryComponent]
})
export class LoginModule { }
