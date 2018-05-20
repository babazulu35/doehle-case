

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserList } from './../model/user-list';
import { environment as env} from '../../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ManageUsersService {
  
  serviceError$: BehaviorSubject<any> = new BehaviorSubject(null);

  apiUrl = env.api.host;
  endPoint = 'User';
  constructor(private http:HttpClient) { }

  getUsers():Observable<any> {
      return this.http.get<UserList>(this.apiUrl + this.endPoint);
  }

  serviceErrorHandling(error:any) {
    this.serviceError$.next(error);
  } 

}
