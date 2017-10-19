import { Injectable } from '@angular/core';
import UserModel from '../models/userModel';
import UserNameModel from '../models/userNameModel';
import { Subject } from "rxjs";

@Injectable()
export default class UserService {
    key: string = "loggedInUser";
    _userSummary: UserModel;
    detailsUpdate: Subject<UserNameModel> = new Subject();

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

    saveUser(user: UserNameModel) {
        console.log("Saving..", user);

        setTimeout(() => {

            console.log("Saved", user);
            this.detailsUpdate.next(user);

        }, 1500);


    }
}
