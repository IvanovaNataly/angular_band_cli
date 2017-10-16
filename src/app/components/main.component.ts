import { Component } from '@angular/core';
import SingerModel from '../models/singerModel';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import UserService from '../services/userService';

@Component({
    selector: 'app-main-container',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']

})

export class MainContainerComponent {
     singers: SingerModel[];
     musicStyles: string[];

    videoSource: SafeUrl;

    name: string = '';

    constructor(private sanitizer: DomSanitizer) {
        this.singers = [
            new SingerModel('Snatam Kaur', '../assets/snatam.jpeg', 'https://www.youtube.com/embed/LYDPdd1MOcA', true),
            new SingerModel('Uma Mohan', '../assets/mohan.jpeg'),
            new SingerModel('Deva Premal', '../assets/premal.jpeg')
        ];

        this.singers[2].addVideoUrl('https://www.youtube.com/embed/BSmToj9VZ4s');
        this.singers[1].addVideoUrl('https://www.youtube.com/embed/1I23gABHrnM');

        this.videoSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.singers[0].videoUrl);

        this.musicStyles = ['mantras', 'new age', 'jazz', 'folk', 'new wave'];

    }

    onSelectToPlay(singer: SingerModel) {
        this.videoSource = this.sanitizer.bypassSecurityTrustResourceUrl(singer.videoUrl);
        singer.active = true;
        this.singers.forEach( item => {
            if (singer !== item) {item.active = false;}
        });
        console.log(this.singers);
    }

    // saveName() {
    //     this.userService.sendToLocalStorage(this.name, 'loggedInUser');
    // }
  //, private userService: UserService


}
