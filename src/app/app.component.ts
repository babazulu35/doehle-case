import { AuthenticationService } from './services/authentication.service';

import { Component,HostBinding, AfterViewInit  } from '@angular/core';
import { MainLoaderService } from './services/main-loader.service';
import { Event as RouterEvent,NavigationStart,NavigationEnd,NavigationCancel,NavigationError, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements AfterViewInit {
  title = 'app';
  @HostBinding('class.main-loader') isLoading: boolean;
  
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
      this.authService.isLoggedIn$.subscribe(isLoggedIn => {
        if(isLoggedIn) {
          this.router.navigate(['dashboard']);
        } else {
          this.router.navigate(['login']);
      }
  })
}
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      this.setPageSpinner(event);
});
  }

  setPageSpinner(event): void {
    if (event instanceof NavigationStart) {
        this.isLoading = true;
    }
    if (event instanceof NavigationEnd) {
        this.isLoading = false;
    }
    if (event instanceof NavigationCancel) {
        this.isLoading = false;
    }
    if (event instanceof NavigationError) {
        this.isLoading = false;
    }
}
}
