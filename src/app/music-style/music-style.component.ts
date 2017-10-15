import { Component, Input, OnInit } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
  selector: 'music-style',
  templateUrl: './music-style.component.html',
  styleUrls: ['./music-style.component.css'],
    animations: [
        trigger('lightsOnOff', [
            state('on', style({
                backgroundColor: '#b2dfdb'
            })),
            state( 'off', style({
                backgroundColor: '#fff'
            })),
            transition('off => on', [animate('0.5s')]),
            transition('on => off', [animate('0.5s')]),
        ])
    ]
})
export class MusicStyleComponent implements OnInit {
    @Input()
    musicStyle: string;

    @Input()
    i: number;
    roomState: string = 'off';

    constructor() { }

    ngOnInit() {
        console.log(this)
    }
    toggleLights() {
        this.roomState = (this.roomState === 'off') ? 'on' : 'off';
        console.log(this.roomState);
    }

}
