import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MainLoaderService } from './../../services/main-loader.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private mainLoaderService: MainLoaderService,private authService:AuthenticationService,private router:Router) { }
  isLoading: boolean;

  ngOnInit() {

    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
     
      if(isLoggedIn) {
        this.router.navigate(['/dashboard']);
      }
    })
    this.mainLoaderService.mainLoader.subscribe(status => {
      this.isLoading = status.isLoading;

    } );

  }

}
