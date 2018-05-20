import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { MainLoaderService } from './../../services/main-loader.service';
import { LoginService } from './services/login.service';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    SharedModule,
  ],
  declarations: [LoginComponent, LoginFormComponent, PasswordRecoveryComponent],
  providers: [MainLoaderService,LoginService]
})
export class LoginModule { }
