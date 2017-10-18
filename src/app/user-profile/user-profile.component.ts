import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UserModel from '../models/userModel';
import UserService from '../services/userService';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    emailBase = "@gmail.com";

  constructor(private  router: Router, private userService: UserService) {

  }

  ngOnInit() {
  }

  onSubmit({first, last, pass, email}) {
      const newUser = new UserModel(first, last, pass, email);
      this.userService.userSummary = newUser;
      this.router.navigate(['/summary']);
  }

}
