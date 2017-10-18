import {Component, Input} from '@angular/core';
import SingerModel from '../../models/singerModel';

@Component({
    selector: 'image-preview',
    templateUrl: './imagePreview.component.html',
    styleUrls: ['./imagePreview.component.css']
})

export class ImagePreviewComponent {
    @Input()
    singer: SingerModel;

    backingState: boolean = false;

    imagePreview(event: any)
    {
        (!this.backingState) ? this.backingState = true : this.backingState = false;

    }

}
