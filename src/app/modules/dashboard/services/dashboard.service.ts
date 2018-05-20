import { AuthenticationService } from './../../../services/authentication.service';


import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { environment as env } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Dashboard } from './../model/dashboard';
@Injectable()
export class DashboardService {
  apiUrl = env.api.host;
  endPoint = "Dashboard";
  
  constructor(
    private http:HttpClient,
    private authService:AuthenticationService
  
  ) { }


  getDashboard(endPoint?:string):Observable<any> {
    if(endPoint) this.endPoint = endPoint;
    return this.http.get<Dashboard>(this.apiUrl + this.endPoint,{params: {'Roles_like':this.authService.getRole()[0].toString()}});
  }

}
