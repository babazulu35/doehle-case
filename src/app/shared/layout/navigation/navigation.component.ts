import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private authService:AuthenticationService,
    private sharedService:SharedService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.sharedService.setPageInfo(null);
  }

}
