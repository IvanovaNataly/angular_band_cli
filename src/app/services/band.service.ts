import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import SingerModel from "../models/singerModel";


@Injectable()
export default class BandService {
    endpoint: string;
    singers: SingerModel[];

    constructor(private httpClient: HttpClient) {
        this.endpoint = "http://localhost:3000";
    }

    // A version to save response to variable;
    // getSingers() {
    //     const p: Promise<SingerModel[]> = new Promise((resolve, reject) => {
    //         this.httpClient.get(`${this.endpoint}/bands`).subscribe(response => resolve(response),
    //                                                                                     error => reject(error));
    //     });
    //     p.then( val => {
    //         this.singers = val;
    //         console.log(this.singers);
    //         return this.singers;
    //     },
    //         err => {console.log("Error in Promise", err);}
    //     );
    // }

    getSingers(): Promise<SingerModel[]> {
        return new Promise((resolve, reject) => {
            this.httpClient.get(`${this.endpoint}/bands`).subscribe(response => resolve(response),
                                                                                error => reject(error));
        });
    }
}
