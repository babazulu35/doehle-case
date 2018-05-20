import { UserList } from './model/user-list';
import { ManageUsersService } from './services/manage-users.service';
import { Component, OnInit } from '@angular/core';
import { MainLoaderService } from '../../services/main-loader.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
  providers:[MainLoaderService]
})
export class ManageUsersComponent implements OnInit {
  errorMessage:string;
  userList:UserList[];
  constructor(private mainLoaderService:MainLoaderService,private manageUsersService:ManageUsersService) { }

  ngOnInit() {
    this.manageUsersService.serviceError$.subscribe(error => {
      if(error) {
        this.errorMessage = error;
        console.log("Error Message",error);
      }
    });

    this.manageUsersService.getUsers().subscribe(userList => {
        this.userList = userList;

    },error => {
      this.manageUsersService.serviceErrorHandling(error);
    })
  }

}
