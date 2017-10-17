import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import SingerModel from "../models/singerModel";


@Injectable()
export default class BandService {
    endpoint: string;

    constructor(private httpClient: HttpClient) {
        this.endpoint = "http://localhost:3000";
    }

    getSingers(): Promise<SingerModel[]> {
        return new Promise((resolve, reject) => {
            this.httpClient.get(`${this.endpoint}/bands`).subscribe(response => resolve(response),
                                                                                error => reject(error));
        });
    }
}
