import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor() {
    this.followers = [
      {id: 123456, login: 'SpiderMan'},
      {id: 789012, login: 'SuperMan'},
      {id: 345678, login: 'Captain America'}
    ]
  }

  ngOnInit() {
  }

}
