import { Component, Input, OnInit } from '@angular/core';
import SongModel from '../models/song';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    group,
    keyframes
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
            transition('off <=> on', [animate('0.5s')])
        ]),
        trigger('spinnerWheel', [
            state('on', style({
            })),
            state( 'off', style({
            })),
            transition('off <=> on', [animate('0.1s', style({transform: 'rotate(360deg)'}))]) //1sec
        ]),
        // trigger('downloading', [
        //     state('on', style( {
        //         opacity: '0'
        //     } )),
        //     state( 'off', style({
        //         opacity: '1'
        //     })),
        //     transition('on => off', [group ([
        //         animate( '0.5s ease-in',
        //             style({
        //                 opacity: '1'
        //             })),
        //         animate( '0.5s',
        //             style({
        //                 top: '30px'
        //             }))
        //     ])]),
        //     transition('off => on', [animate('1s')])
        // ]),
        trigger('downloading', [
            state('on', style( {
                opacity: '0', top: '8px'
            } )),
            state( 'off', style({
                opacity: '1', top: '25px'
            })),
            transition('on => off', [
                animate('1s', keyframes([
                    style({opacity: 0, top: 0}),
                    style({opacity: 1, top: '25px'}),
                    style({opacity: 1, top: '15px'}),
                    style({opacity: 1, top: '25px'})
                    ]))
            ]),
            transition('off => on', [animate('0.5s')])
        ]),
        trigger('flyOut', [
        // state('in', style({transform: 'translateX(0)'})),
        // transition(':enter', [
        //     style({transform: 'translateX(-100%)'}),
        //     animate('1s')
        // ]),
        transition(':leave', [
            animate('1s', style({transform: 'translateX(100%)'}))
        ])
        ])
    ]
})
export class MusicStyleComponent implements OnInit {
    @Input()
    musicStyle: string;

    @Input()
    i: number;
    songs: SongModel[];
    roomState: string = 'off';
    spinnerState: string = 'on';
    collapsible: boolean = false;

    constructor() {
        this.songs = [
            new SongModel('some nice song', true),
            new SongModel('another nice song', true),
            new SongModel('some more nice music', true),
            new SongModel('do not like it', true),
            new SongModel('not so much...', true)
            ];
    }

    ngOnInit() {
    }
    toggleLights() {
        this.roomState = (this.roomState === 'off') ? 'on' : 'off';
        this.collapsible = false;
    }
    spinnerWheelDone(event: any) {
        if (this.roomState === 'on') {this.spinnerState = 'off';}
    }
    downloadingDone(event: any) {
        if (event.fromState !== "void") {
            this.spinnerState = 'on';
            this.collapsible = true;
        }
    }
    flyAwaySong(song: SongModel) {
        song.showSong = false;
    }



}
