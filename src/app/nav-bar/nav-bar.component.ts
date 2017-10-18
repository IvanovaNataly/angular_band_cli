import { Component, OnInit } from '@angular/core';
import UserService from '../services/userService';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    userName: string;

  constructor(private userService: UserService) {
      this.userName = this.userService.getFromLocalStorage();
  }

  ngOnInit() {
  }

}
