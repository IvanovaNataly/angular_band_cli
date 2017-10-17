import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export default class MusicStylesService {
    endpoint: string;

    constructor(private httpClient: HttpClient) {
        this.endpoint = "http://localhost:3000";
    }

    getMusicStyles(): Promise<string[]> {
        return new Promise((resolve, reject) => {
            this.httpClient.get(`${this.endpoint}/styls`).subscribe(response => resolve(response),
                                                                error => reject(error));
        });
    }
}
