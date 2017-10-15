import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit, OnDestroy {
  id: number;
  sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this. sub = this.route.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      console.log(this.id);
    });
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

}
