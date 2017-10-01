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
      {id: 1, login: 'SpiderMan'},
      {id: 2, login: 'SuperMan'},
      {id: 3, login: 'Captain America'}
    ]
  }

  ngOnInit() {
  }

}
