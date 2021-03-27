import {Injectable} from '@angular/core';
import {UserLogIn} from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // uriApi = 'https://localhost:3000/api';
  // authenticate = '/authenticate';
  // checkUsedUser = this.authenticate + '/used';
  // token: string;
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  //     'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  //   })
  // };

  constructor() {
  }

  get userLogedIn(): boolean {
    return sessionStorage.getItem('auth_token') !== null;
  }

  logIn(userLogIn: UserLogIn): string {
    // return this.http.post(this.uriApi + this.authenticate, userLogIn, this.httpOptions);
    if (this.checkUser(userLogIn)) {
      return 'Token de prueva';
    }
    return null;
  }

  logOut() {
    sessionStorage.removeItem('auth_token');
  }

  checkUser(userLogIn: UserLogIn) {
    const users = JSON.parse(localStorage.getItem('users'));
    if (users != null) {
      return users.find(user => user.userName === userLogIn.userName && user.password === userLogIn.password) != null;
    }
    return false;
  }
}
