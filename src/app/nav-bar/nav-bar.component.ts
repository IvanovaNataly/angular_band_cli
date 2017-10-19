import { Component, OnInit } from '@angular/core';
import UserService from '../services/userService';
import UserNameModel from '../models/userNameModel';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    // userName: any;
    user: UserNameModel;

  constructor(private userService: UserService) {
      // this.userName = this.userService.getFromLocalStorage();
      // console.log("nav1", this.userName);
  }

  ngOnInit() {
      this.userService.detailsUpdate.subscribe(this.onUserDetailsChange.bind(this));
  }

  onUserDetailsChange(userName: UserNameModel) {
      this.user = userName;
      console.log(this.user);
  }

}
