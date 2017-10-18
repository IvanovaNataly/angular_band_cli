import { Injectable } from '@angular/core';
import UserModel from '../models/userModel';

@Injectable()
export default class UserService {
    key: string = "loggedInUser";
    _userSummary: UserModel;

    sendToLocalStorage(userName: string ){
        localStorage.setItem(this.key, JSON.stringify(userName));
    }

    getFromLocalStorage(): string {
        console.log(JSON.parse(localStorage.getItem(this.key)));
        return JSON.parse(localStorage.getItem(this.key));
    }

    set userSummary(user) {
        this._userSummary = user;
    }

    get userSummary() {
        return this._userSummary;
    }
}
