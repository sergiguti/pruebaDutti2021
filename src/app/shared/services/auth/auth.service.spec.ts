import {AuthService} from './auth.service';
import {User} from '../../models/user/user';

describe('AuthService', () => {
  let service: AuthService;

  const newUserMock: User = {
    firstName: 'mock',
    lastName: 'mock',
    userName: 'user_test',
    email: 'user@test',
    password: 'mock_user'
  };

  beforeEach(() => {
    service = new AuthService();
  });

  it('#AuthService should create', () => {
    expect(service).toBeTruthy();
  });

  it('#AuthService should register a user', () => {
    expect(service.registerNewUser(newUserMock)).toBeTruthy();
  });

  it('#logIn should return string (Token de prueva)', () => {
    expect(service.logIn({userName: newUserMock.userName, password: newUserMock.password})).toBe('Token de prueva');
  });

  it('#logedIn should return false', () => {
    expect(service.userLoggedIn).toBeFalsy();
  });
});
