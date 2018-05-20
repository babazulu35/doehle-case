import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Roles as UserRole } from '../class/roles';
import { Login } from '../modules/login/model/login';
import { HttpClient } from '@angular/common/http';
import { environment as env } from './../../environments/environment';
import { LocalStorageService } from 'angular-2-local-storage/dist/local-storage.service';

@Injectable()
export class AuthenticationService {
  
  apiUrl = env.api.host;
  endPoint = "User";

  roles;

  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private http:HttpClient,
    private router:Router,
    private localStorage:LocalStorageService
  
  ) {
      const userStorage = this.localStorage.get('user');
      const roleStorage = this.localStorage.get('roles');
      if(userStorage && roleStorage) {
        this.loginCompleted();
      }
      else {
        this.logout();
      }
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
    this.localStorage.remove('user');
    this.localStorage.remove('roles');
    this.router.navigate(['/login']);
    
   }


   setUserLocalStorage(data:Login) {
      this.localStorage.set('user', {
        username: data.Username,
        fullname: data.Fullname,
        roles: data.Roles,
        image: data.Avatar,
        email: data.Email
      })
   }

   setRolesLocalStorage(data:Login) {
     this.localStorage.set('roles', {
       roles:data.Roles
     })
   }

   getRole() {
     return this.localStorage.get('roles')['roles'];
   }

   isRoleAuthenticate(...roles:any[]):boolean {
     let userRoles;
     const rolesStorage = this.localStorage.get('roles')['roles'];
     if(rolesStorage)
     {
      userRoles = rolesStorage;
     }   
    if( Object.prototype.toString.call( roles[0] ) === '[object Array]' ) roles = roles[0];
    return !roles ? true : userRoles && roles.find(item => userRoles.find(role => item == role) !=undefined) !=undefined;
}

}
