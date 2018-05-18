import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  constructor() {
    
   }

}
