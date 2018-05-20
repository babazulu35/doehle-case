import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

const routes:Routes = [
  {
    path: '',
    component: LoginComponent,
    children:[
      {
        path:'',
        component: LoginFormComponent
      },
      {
        path: 'password-recovery',
        component: PasswordRecoveryComponent
      
      }
    ]
  },  

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class LoginRoutingModule { }
