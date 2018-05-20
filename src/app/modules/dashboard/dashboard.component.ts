import { DashboardService } from './services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { Dashboard } from './model/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardList:Dashboard[]
  constructor( 
    private dashboardService:DashboardService
  ) { }

  ngOnInit() {
    this.dashboardService.getDashboard().subscribe(dashboardList => {
        this.dashboardList = dashboardList;
    })
  }

}
