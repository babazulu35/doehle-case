import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manage-users-list',
  templateUrl: './manage-users-list.component.html',
  styleUrls: ['./manage-users-list.component.scss']
})
export class ManageUsersListComponent implements OnInit {

  @Input() list;
  
  constructor() { }

  ngOnInit() {
  }

}
