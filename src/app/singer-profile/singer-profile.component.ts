
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-singer-profile',
  templateUrl: './singer-profile.component.html',
  styleUrls: ['./singer-profile.component.css']
})
export class SingerProfileComponent implements OnInit, OnDestroy {
    name: string;
    sub: any;
    constructor( private route: ActivatedRoute) {}

    ngOnInit() {
        this.sub = this.route.queryParamMap.subscribe(params => {
            this.name = params.get('name');
            console.log(this.name);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
