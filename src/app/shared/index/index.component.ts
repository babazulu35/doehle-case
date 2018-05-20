import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute,NavigationEnd } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage/dist/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { SidebarMenu } from '../model/sidebar-menu';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
  
  sidebarMenu:SidebarMenu[];
  pageInfo;

  constructor(
    private sharedService:SharedService,
    private localStorage:LocalStorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) { }

  ngOnInit() {

    this.getBreadCrumbs();
    this.sharedService.getSidebarMenu('MainMenu').subscribe(result => {
        this.sidebarMenu = result;
    },error => {
        this.sharedService.serviceErrorHandling(error);
    })
  }

  getBreadCrumbs() {
    this.pageInfo = null;
    this.router.events.filter(event => event instanceof NavigationEnd)
    .map(() => this.activatedRoute)
    .map(route => {
      while (route.firstChild) route = route.firstChild;
      return route;
    })
    .filter(route => route.outlet === 'primary')
    .mergeMap(route => route.data)
    .subscribe((event) => {
      this.titleService.setTitle(event['title']);
      this.pageInfo = event;
      this.sharedService.setPageInfo(this.pageInfo);
    })
  }

}
