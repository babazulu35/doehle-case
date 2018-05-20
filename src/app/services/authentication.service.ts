import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Roles as UserRole } from '../class/roles';
import { Login } from '../modules/login/model/login';
import { HttpClient } from '@angular/common/http';
import { environment as env } from './../../environments/environment';

@Injectable()
export class AuthenticationService {
  
  apiUrl = env.api.host;
  endPoint = "User";

  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  userRoles$: BehaviorSubject<Login> = new BehaviorSubject(null);

  constructor(private http:HttpClient,private router:Router) {

   }

   login(username:string,password:string):Observable<any> {
     return this.http.get<Login>(this.apiUrl + this.endPoint,{params:{"Username":username,"Password":password}});
   }

   loginCompleted() {
     const logged = true;
     this.isLoggedIn$.next(logged);
     this.router.navigate(['/dashboard']);
   }

   logout() {
    this.isLoggedIn$.next(false);
    this.userRoles$.next(null);
    this.router.navigate(['/login']);
   }


   isRoleAuthenticate(...roles:any[]):boolean {
     let userRoles;
     this.userRoles$.subscribe(userResult => {
        userRoles = userResult;
     })
    if( Object.prototype.toString.call( roles[0] ) === '[object Array]' ) roles = roles[0];
    return !roles ? true : userRoles && roles.find(item => userRoles.find(role => item == role) !=undefined) !=undefined;

    
   // return !roles ? true : this.roles && roles.find(item => this.roles.find(role => item == role) != undefined) != undefined;
}

}
