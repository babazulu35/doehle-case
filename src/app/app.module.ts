import { AuthenticationService } from './services/authentication.service';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/layout/navigation/navigation.component';
import { SidebarMenuComponent } from './shared/layout/sidebar-menu/sidebar-menu.component';
import { SharedModule } from './shared/shared.module';
import { IndexComponent } from './shared/index/index.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestResponseTimeService } from './interceptors/request-response-time.service';
import { UserGuard } from './services/user.guard';
import { LocalStorageModule } from 'angular-2-local-storage';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    LocalStorageModule.withConfig({
      prefix: 'doehle',
      storageType: 'localStorage'
    })
  ],
  providers: [
    UserGuard,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestResponseTimeService,
      multi: true
  },
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
