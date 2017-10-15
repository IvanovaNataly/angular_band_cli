import {Pipe, PipeTransform} from '@angular/core';
import SingerModel from '../models/singerModel';

@Pipe({
    name: 'filterList'
})

export default class FilterListPipe implements PipeTransform {
    transform(singers: SingerModel[], value: string) {
        if (value) {
            const filteredList = singers.filter(singer => {
                const name = singer.name.toLowerCase();
                return name.indexOf(value.toLowerCase()) > -1;
            })
            return filteredList;
        }
        else return singers;
    }
}
