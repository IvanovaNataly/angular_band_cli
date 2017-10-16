import { Component, OnInit, Input } from '@angular/core';
import SongModel from '../models/song';
@Component({
  selector: 'song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
    @Input()
    song: SongModel;

  constructor() { }

  ngOnInit() {

  }

}
