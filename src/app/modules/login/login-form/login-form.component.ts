import { LoginService } from './../services/login.service';

import { Component, OnInit } from '@angular/core';
import { MainLoaderService } from './../../../services/main-loader.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  constructor(private mainLoaderService: MainLoaderService,private loginService:LoginService) { }
  loginForm:FormGroup;
  errorMessage:string;
  ngOnInit() {
/*     this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    }) */
  }

  submitForm(event) {
    console.log('Click Event Works', event );
        this.mainLoaderService.updateMainLoader(true); 
        this.loginService.login("jhondoe","123456");
        this.loginService.serviceError$.subscribe(serviceError => {
          if(serviceError !==null) {
            this.errorMessage = serviceError;
            this.mainLoaderService.updateMainLoader(false); 
          }
        })  
  }

}
