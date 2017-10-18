import { Component, OnInit } from '@angular/core';
import UserModel from '../models/userModel';
import UserService from '../services/userService';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {
    userSummary: UserModel;
    objectKeys = Object.keys;

  constructor(private userService: UserService) {
      this.userSummary = this.userService.userSummary;
      console.log("userSummary", this.userSummary);
  }

  ngOnInit() {
  }

}
