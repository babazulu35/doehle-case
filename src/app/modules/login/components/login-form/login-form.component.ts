import { LoginService } from './../../services/login.service';

import { Component, OnInit } from '@angular/core';
import { MainLoaderService } from './../../../../services/main-loader.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  constructor(private mainLoaderService: MainLoaderService,private loginService:LoginService,private fb:FormBuilder) { }
  loginForm:FormGroup;
  errorMessage:string;
  isDisabled:boolean;
  ngOnInit() {
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });

    
  }

  submitForm() {
    
        let username = this.loginForm.value.username;
        let password = this.loginForm.value.password;
        this.mainLoaderService.updateMainLoader(true); 

        // Setted only to show the loading indicator
        // TODO: Delete Before Production
        setTimeout(() => {
          this.loginService.login(username,password);
          this.loginService.serviceError$.subscribe(serviceError => {
            if(serviceError !==null) {
              this.errorMessage = serviceError;
              this.mainLoaderService.updateMainLoader(false); 
            }
          })  
        },1500)
        

  }

  onFocus() {
    if(this.errorMessage != "") {
      this.errorMessage = "";
    }
  }


}
