import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage/dist/local-storage.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  
  @Input() menuItemList;

  constructor(private localStorageService:LocalStorageService) { }

  ngOnInit() {

  }

}
