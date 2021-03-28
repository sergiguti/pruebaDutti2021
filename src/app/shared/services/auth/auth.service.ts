import {Injectable} from '@angular/core';
import {User, UserLogIn} from '../../models/user/user';

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

  get userLoggedIn(): boolean {
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

  registerNewUser(user: User): boolean {
    if (localStorage.getItem('users') == null) {
      const firstUser: User[] = [];
      localStorage.setItem('users', JSON.stringify(firstUser));
    }
    const users: User[] = JSON.parse(localStorage.getItem('users'));

    if (!this.usedUser(user.userName, user.email)) {
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      return true;
    }
    return false;
  }

  checkUser(userLogIn: UserLogIn) {
    const users = JSON.parse(localStorage.getItem('users'));
    if (users != null) {
      return users.find(user => user.userName === userLogIn.userName && user.password === userLogIn.password) != null;
    }
    return false;
  }

  usedUser(userName: string, email: string): boolean {
    const users: User[] = JSON.parse(localStorage.getItem('users'));
    if (users != null) {
      return users.find(user => user.userName === userName && user.email === email) != null;
    }
    return false;
  }
}
