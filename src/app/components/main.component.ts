import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import SingerModel from '../models/singerModel';
import UserNameModel from '../models/userNameModel';
import UserService from '../services/userService';
import BandService from '../services/band.service';
import MusicStylesService from '../services/musicStyles.service';

@Component({
    selector: 'app-main-container',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']

})

export class MainContainerComponent implements OnInit {
     singers: SingerModel[];
     musicStyles: string[];

    videoSource: SafeUrl;

    name: string = '';

    user: UserNameModel;

    constructor(private sanitizer: DomSanitizer, private bandService: BandService, private musicStylesService: MusicStylesService, private userService: UserService, private router: Router) {
        // this.singers = [
        //     new SingerModel('Snatam Kaur', '../assets/snatam.jpeg', 'https://www.youtube.com/embed/LYDPdd1MOcA', true),
        //     new SingerModel('Uma Mohan', '../assets/mohan.jpeg'),
        //     new SingerModel('Deva Premal', '../assets/premal.jpeg')
        // ];
        //
        // this.singers[2].addVideoUrl('https://www.youtube.com/embed/BSmToj9VZ4s');
        // this.singers[1].addVideoUrl('https://www.youtube.com/embed/1I23gABHrnM');

        // this.videoSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.singers[0].videoUrl);

        // Has to be in ngOnInit, but impossible 2 Promises one after another, so placed here. This is the version before promise.all:
        // this.musicStyles = ['mantras', 'new age', 'jazz', 'folk', 'new wave'];
        // this.musicStylesService.getMusicStyles()
        //     .then(response => {
        //         this.musicStyles = response;
        //     })
        //     .catch(error => {
        //         console.log("Error in Promise at BandService:", error);
        //     });
    }
    ngOnInit(promise = Promise) {
        promise.all([ this.bandService.getSingers(), this.musicStylesService.getMusicStyles()])
            .then(([singers, musicStyles]) => {
                    this.singers = singers;
                    this.musicStyles = musicStyles;
                    this.videoSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.singers[0].videoUrl);
                })
            .catch(error => {
                console.log("Error in Promise at service:", error);
            });
    }

    // ngOnInit() {
    //     this.bandService.getSingers()
    //         .then(response => {
    //                 this.singers = response;
    //                 this.videoSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.singers[0].videoUrl);
    //                 console.log(this.singers);
    //             },
    //             error => {console.log("Error in Promise at BandService:", error);})
    //         .catch(error => {
    //             console.log("Error in Promise at BandService:", error);
    //         });
    //
    // }

    onSelectToPlay(singer: SingerModel) {
        this.videoSource = this.sanitizer.bypassSecurityTrustResourceUrl(singer.videoUrl);
        singer.active = true;
        this.singers.forEach( item => {
            if (singer !== item) {item.active = false;}
        });
        console.log(this.singers);
    }

    saveName() {
        this.userService.sendToLocalStorage(this.name);
        this.router.navigate(['/profile']);
    }

    saveUser(value: any) {
        this.user = value;
        this.userService.saveUser(this.user);
    }
}

