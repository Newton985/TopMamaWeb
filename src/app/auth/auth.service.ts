import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {
  }  // ...
  public isAuthenticated(): boolean {
    var token = localStorage.getItem('accessToken');
    var loggedAt = parseInt(localStorage.getItem('loggedInAt'));
    var currentTime = + new Date();
    // Check whether the token is expired and return
    // true or false
    if(token != null){
      return currentTime-loggedAt < (60*60*1000)
    }
    return false;
  }
}
