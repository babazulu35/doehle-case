


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment as env } from './../../../environments/environment';
import { SidebarMenu } from '../model/sidebar-menu';
import { AuthenticationService } from '../../services/authentication.service';
import { BehaviorSubject } from 'rxjs';



@Injectable()
export class SharedService {
  serviceError$: BehaviorSubject<any> = new BehaviorSubject(null);
  pageInfo$: BehaviorSubject<any> = new BehaviorSubject(null);
  apiUrl = env.api.host;
  endPoint = '';

  constructor(
    private http:HttpClient,
    private authService:AuthenticationService
  ) { }
  

  getSidebarMenu(endPoint?:string):Observable<any> {
    if(endPoint) this.endPoint = endPoint;
    return this.http.get<SidebarMenu>(this.apiUrl + this.endPoint,{params: {'Roles_like':this.authService.getRole()[0].toString()}});
  }

  serviceErrorHandling(error:any) {
    this.serviceError$.next(error);
  }

  setPageInfo(pageInfo) {
    this.pageInfo$.next(pageInfo);
  }

  



}
