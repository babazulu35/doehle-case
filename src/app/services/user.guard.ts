import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserGuard implements CanActivate,  CanActivateChild {
  isLoggedIn:boolean;
  constructor(
    private authService: AuthenticationService, private router: Router
  ) {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
        this.isLoggedIn = isLoggedIn
    })
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let url: string = state.url;
    return this.checkLogin(url, next.data);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url:string,routeData): boolean {
        if(this.isLoggedIn) {
          
          this.authService.isRoleAuthenticate(routeData["userRoles"]);
          
          return routeData && routeData['userRoles'] ? this.authService.isRoleAuthenticate(routeData["userRoles"]) : true;
        }
        else {
          url = 'login';
        }
        this.router.navigate([url]);
        return false; 
  }
 
}
