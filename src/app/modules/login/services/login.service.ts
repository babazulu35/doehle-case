import { AuthenticationService } from './../../../services/authentication.service';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  
  serviceError$: BehaviorSubject<any> = new BehaviorSubject(null);
  

  constructor(private authService:AuthenticationService) { }

  
  login(username:string,password:string) {
    this.authService.login(username,password).subscribe(loginResult => {
      if(loginResult && loginResult.length) {
        this.authService.loginCompleted();  
        this.authService.setUserLocalStorage(loginResult[0]);     
        this.authService.setRolesLocalStorage(loginResult[0]);
      }
      else {
        this.serviceErrorHandling("Username or Password is Wrong");
      }
    },error => {
      this.serviceErrorHandling(error);
    })
  }

  serviceErrorHandling(error:any) {
    this.serviceError$.next(error);
  } 

}
