import { Injectable } from '@angular/core';

@Injectable()
export default class UserService {
    sendToLocalStorage(userName: string, key: string){
        localStorage.setItem(key, JSON.stringify(userName));
    }
}
